# Server-side route report — /in/en/faq

Tested: 2026-10-31T05:17–05:19Z (authenticated as Account A)
Route: https://in.store.ui.com/in/en/faq
Build: 8729322f82

## Endpoints observed
| Method | Operation | Variables | Auth | Result |
|---|---|---|---|---|
| GET https://in.store.ui.com/in/en/faq | - | `search` | Account A | 200, static FAQ SSR |
| POST https://ecomm.svc.ui.com/graphql | GetCoreData | `{storeId:"in",platform:"Web"}` | Account A | 200, own customer + public config |
| POST https://ecomm.svc.ui.com/graphql | GetCountryTaxRate | `{storeId:"in",countryCode:"IN"}` | Account A | 200, rate 0.18 |

FAQ content is shipped as static translation bundles; no FAQ API call was made.
`search` is a client-side filter over that static data and is not sent to the
server.

## Testing performed
- Baseline page and network capture; only public config/tax operations.
- `?search=PM_TRACE_FAQ_9137` did not affect server GraphQL variables, response
  text, or `__NEXT_DATA__`.
- No write operation, object identifier, ownership parameter, or user data is
  exposed on this route.
- No IDOR/BOLA/mass-assignment/auth-boundary surface identified.

## Status
- No confirmed server-side vulnerability on this route.
