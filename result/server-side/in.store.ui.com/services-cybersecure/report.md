# Server-side route report — /in/en/services/cybersecure

Tested: 2026-10-31T05:21–05:22Z (authenticated as Account A)
Route: https://in.store.ui.com/in/en/services/cybersecure
Build: 8729322f82

## Endpoints observed
| Method | Operation | Variables | Auth | Result |
|---|---|---|---|---|
| GET https://in.store.ui.com/in/en/services/cybersecure | - | - | Account A | 200, static service page |
| POST https://ecomm.svc.ui.com/graphql | GetCoreData | `{storeId:"in",platform:"Web"}` | Account A | 200, own customer + public config |
| POST https://ecomm.svc.ui.com/graphql | GetCountryTaxRate | `{storeId:"in",countryCode:"IN"}` | Account A | 200, rate 0.18 |

CyberSecure is unavailable in the IN region. Normal rendering issued no service
write or subscription request.

## Testing performed
- Baseline network capture; only public config/tax operations.
- Query parameters were not forwarded to GraphQL variables.
- No object identifier, ownership parameter, or write operation is exposed.
- No IDOR/BOLA/mass-assignment/auth-boundary surface identified.

## Status
- No confirmed server-side vulnerability on this route.
