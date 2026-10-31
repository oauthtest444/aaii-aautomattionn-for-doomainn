# Server-side route report — /in/en/services/ui-care

Tested: 2026-10-31T05:19–05:21Z (authenticated as Account A)
Route: https://in.store.ui.com/in/en/services/ui-care
Build: 8729322f82

## Endpoints observed
| Method | Operation | Variables | Auth | Result |
|---|---|---|---|---|
| GET https://in.store.ui.com/in/en/services/ui-care | - | - | Account A | 200, static service page |
| POST https://ecomm.svc.ui.com/graphql | GetCoreData | `{storeId:"in",platform:"Web"}` | Account A | 200, own customer + public config |
| POST https://ecomm.svc.ui.com/graphql | GetCountryTaxRate | `{storeId:"in",countryCode:"IN"}` | Account A | 200, rate 0.18 |

The page states UI Care is unavailable in the IN region. The notification
control did not issue a subscription request during normal rendering, and no
write occurred.

## Testing performed
- Baseline capture; only public config/tax operations.
- Arbitrary query parameters were not forwarded to GraphQL variables.
- No object identifier, ownership parameter, or write operation is exposed by
  this page in the IN store.
- No IDOR/BOLA/mass-assignment/auth-boundary surface identified.

## Status
- No confirmed server-side vulnerability on this route.
