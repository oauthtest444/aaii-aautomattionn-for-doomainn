# Server-side route report — /in/en/collections/top10-cables

Tested: 2026-10-31T05:23–05:25Z (authenticated as Account A)
Route: https://in.store.ui.com/in/en/collections/top10-cables
Build: 8729322f82

## Endpoints observed
| Method | Operation | Variables | Auth | Result |
|---|---|---|---|---|
| GET https://in.store.ui.com/in/en/collections/top10-cables?x=PM_TRACE_COLL_9137 | - | - | Account A | 200, 387,167-byte HTML |
| POST https://ecomm.svc.ui.com/graphql | GetProductFaqs | `{productId:"4436004e-b03e-41e8-bc14-50d82fcdfe0c",locale:"en",storeId:"in"}` | Account A | 200, `productFaqs:null` |
| POST https://ecomm.svc.ui.com/graphql | GetWishlistMembership | `{storeId:"in",items:[{sku:"U-Cable-Patch-5M-RJ45"}]}` | Account A | 200, false/no lists |
| POST https://ecomm.svc.ui.com/graphql | GetWishlists | `{storeId:"in"}` | Account A | 200, empty list |
| POST https://ecomm.svc.ui.com/graphql | GetCoreData | `{storeId:"in",platform:"Web"}` | Account A | 200, own customer + public config |
| POST https://ecomm.svc.ui.com/graphql | GetCountryTaxRate | `{storeId:"in",countryCode:"IN"}` | Account A | 200, rate 0.18 |

## Testing performed
- Marker `x=PM_TRACE_COLL_9137` appeared only in `__NEXT_DATA__.query`; it was
  absent from page props and visible HTML.
- `embedReturnUrl`/`embedSource` query values were not promoted to page props.
- Server-selected `currentProductId` was the fixed product for the valid
  collection; unknown collections return the 404 page.
- All GraphQL operations are public catalog/session reads. No write, owner
  parameter, or client-controlled object identifier was exposed.
- The product FAQ HTML is CMS-sourced; no user-controlled content reached the
  GraphQL response.

## Status
- No confirmed server-side vulnerability on this route.
