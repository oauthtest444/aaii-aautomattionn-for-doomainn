# Server-side route report — /in/en/country-picker

Tested: 2026-10-30T22:28–22:33Z (authenticated as Account A)
Build: 8729322f82

## Endpoints observed
| Method | Operation | Variables | Auth | Result |
|---|---|---|---|---|
| GET https://in.store.ui.com/in/en/country-picker | - | `redirectUri` | Account A | 200, SSR country list |
| POST https://ecomm.svc.ui.com/graphql | GetCoreData | `storeId=in, platform=Web` | Account A | store config/customer |
| GET https://in.store.ui.com/_next/data/8729322f82/in/en/category/{category}.json | - | `store=in, language=en, category=...` | Account A | public category data |

The country-picker page preloads category data for `all-cloud-gateways`,
`all-switching`, `all-wifi`, `all-physical-security`, and
`accessories-cables-dacs` via `_next/data` JSON endpoints. These are the same
public category pages already tested and require no auth.

## Testing performed
- `redirectUri` is used only client-side to preserve path/query when changing
  store; the server response does not reflect it into HTML or headers.
- Selecting a different country produced a same-family redirect to the selected
  store domain (`ca.store.ui.com`), not to the supplied external host.
- No write operation, ownership parameter, or sensitive data on this route.
- No server-side IDOR/BOLA/mass-assignment surface identified.

## Status
- No confirmed server-side vulnerability on this route.
