# Server-side route report — /in/en/previous-purchase

Tested: 2026-10-31T05:26–05:28Z (authenticated as Account A)
Route: https://in.store.ui.com/in/en/previous-purchase
Build: 8729322f82

## Endpoints observed
| Method | Operation | Variables | Auth | Result |
|---|---|---|---|---|
| GET https://in.store.ui.com/in/en/previous-purchase?x=PM_TRACE_PREV_9137 | - | - | Account A | 200; route query retained only store/language |
| POST https://ecomm.svc.ui.com/graphql | GetProductsForHomepagePro | `filter:{language:"en",storeId:"in",displayCurrency:"INR",line:"Unifi",hasPreviousPurchase:true,tags:[]},limit:250,offset:0` | Account A | 200, `total:0`, no items |
| POST https://ecomm.svc.ui.com/graphql | GetCoreData | `{storeId:"in",platform:"Web"}` | Account A | 200 |
| POST https://ecomm.svc.ui.com/graphql | GetCountryTaxRate | `{storeId:"in",countryCode:"IN"}` | Account A | 200, rate 0.18 |

## Testing performed
- The arbitrary `x` marker was not present in `__NEXT_DATA__.query`, page props,
  or visible HTML.
- `GetProductsForHomepagePro` filtered by `hasPreviousPurchase:true` and
  returned an empty, customer-scoped result for Account A. No customer/owner ID
  is supplied by the client.
- Only read operations were issued; no write or mass-assignment surface was
  exposed.

## Status
- No confirmed server-side vulnerability on this route.
