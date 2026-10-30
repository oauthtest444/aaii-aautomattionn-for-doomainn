# Server-side route report — /in/en/app/compare

Tested: 2026-10-30T22:25–22:28Z (authenticated as Account A; app view)
Build: 8729322f82

## Endpoints observed
| Method | Operation | Variables | Auth | Result |
|---|---|---|---|---|
| GET https://in.store.ui.com/in/en/app/compare | - | - | Account A | 200, app compare page |
| POST https://ecomm.svc.ui.com/graphql | GetCoreData | `storeId=in, platform=Web` | Account A | store config/customer |
| POST https://ecomm.svc.ui.com/graphql | GetCountryTaxRate | `countryCode=IN, storeId=in` | Account A | rate 0.18 |

The comparison list is client-side state; the page itself does not accept an
ownership or product-id parameter. Any product data shown is public catalog
data from `GetCoreData`/related product state.

## Testing performed
- Baseline app-view request rendered the compare table.
- `?compare=` / `?search=` markers were not reflected into server HTML or used
  in GraphQL variables.
- No write operations, customer-owned objects, or ID parameters on this route.
- No server-side IDOR/BOLA/mass-assignment surface identified.

## Status
- No confirmed server-side vulnerability on this route.
