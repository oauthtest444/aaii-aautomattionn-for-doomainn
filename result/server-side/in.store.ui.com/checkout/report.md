# Checkout / Cart — in.store.ui.com

Tested: 2026-10-30T13:05–13:25Z
Test data: checkout `5258ecf2-4feb-4c1f-8b39-d95035531fcc` (own), item `e1e25a23-9869-463a-bcab-50cab0196115` (USW-Ultra-210W-EU). No order was placed.

## Operations
- `CreateCheckout(input:{storeId,language,items:[{storeProductVariantId,quantity}]})`
- `GetCheckout(input:{id,secret,language,skipTaxCalculation})`
- `UpdateCheckout(input:{id,secret,language,updateItems:[...],email,discountCode,...})`

Minimal working update document (unused GraphQL variable was the cause of earlier 400s):

```
mutation UpdateCheckout($input:StorefrontUpdateCheckoutInput!){
  storefrontUpdateCheckout(input:$input){
    checkout{id email items{id sku quantity} totals{summary{total{amount currency}}}}
  }
}
```

## Results (all held)
| Test | Result |
|---|---|
| Invalid secret on `UpdateCheckout` | New checkout id+secret returned (cart clone); original cart unmodified. No secret bypass for writes. |
| Missing secret on `UpdateCheckout` | `INPUT_VALIDATION_ERROR` "Secret: Required". |
| Invalid/missing secret on `GetCheckout` | Returns a new checkout cloned with the same items; original email/shipping are **not** copied → no PII/IDOR. |
| Mass assignment (`items`, `totals`, `orderId`, `taxCalculated`, `hasTaxIncludedPrice`, `hasCustomer`, item `price`, etc.) | Generic `500 INTERNAL_SERVER_ERROR`; state unchanged. Strict input schema. |
| `updateItems` quantity `0` / `-1` | `500`; no state change. |
| `updateItems` quantity `129` | Accepted despite UI "order 21 max"; no server-side stock cap at cart update (order creation not attempted). |
| `discountCode` invalid/empty | `500`; no coupon bypass established. |
| Cross-store/other checkout id | `checkout:null` for unknown id. |

## Conclusion
No confirmed vulnerability. Checkout UUID alone only yields a clone of the cart items; checkout secret is enforced for writes and PII is not cloned.
