# Server-side route report — /in/en/products/uap-ac-hd

Tested: 2026-10-30T22:12–22:16Z (unauthenticated)
Build: 8729322f82

## Endpoints observed
| Method | Operation | Variables | Auth | Result |
|---|---|---|---|---|
| POST https://ecomm.svc.ui.com/graphql | GetCoreData | storeId=in, platform=Web | none | meCustomer:null; public config |
| POST https://ecomm.svc.ui.com/graphql | GetProductFaqs | productId (UUID), locale, storeId | none | productFaqs:null for this product |
| POST https://ecomm.svc.ui.com/graphql | GetCountryTaxRate | countryCode=IN, storeId=in | none | rate 0.18 |
| POST https://ecomm.svc.ui.com/graphql | GetRelatedProductsByIds | ids, storeId, language, displayCurrency | none | `[]` (related product is not in IN store) |
| GET https://in.store.ui.com/api/geo-ip | - | - | none | geo lookup |
| GET https://megaphone.svc.ui.com/v1/announcements | - | - | none | 401 (public endpoint, irrelevant) |

## Testing performed
- Re-ran GetProductFaqs / GetRelatedProductsByIds / GetCountryTaxRate equivalents
  from the page context: read-only public catalog data, no identity or ownership
  parameter. No mass-assignment surface (no create/update mutation on this route).
- `productId` is a public product UUID; arbitrary IDs return public/empty data,
  so no cross-user impact.
- No IDOR/BOLA candidate: all data is public catalog data and requires no session.

## Status
- No confirmed server-side vulnerability on this route.
