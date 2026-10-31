# Server-side route report — /in/en/top-10-accessories

Tested: 2026-10-31T05:22–05:24Z (authenticated as Account A)
Route: https://in.store.ui.com/in/en/top-10-accessories
Build: 8729322f82

## Endpoints observed
| Method | Endpoint | Variables | Auth | Result |
|---|---|---|---|---|
| GET https://in.store.ui.com/in/en/top-10-accessories?collection=PM_TRACE_TOP10_9137 | - | - | Account A | 200, 345,910-byte HTML |
| POST https://ecomm.svc.ui.com/graphql | GetCoreData | `{storeId:"in",platform:"Web"}` | Account A | 200, own customer + public config |
| POST https://ecomm.svc.ui.com/graphql | GetCountryTaxRate | `{storeId:"in",countryCode:"IN"}` | Account A | 200, rate 0.18 |

## Testing performed
- Requested the route with `collection=PM_TRACE_TOP10_9137`.
- The marker appeared only in `__NEXT_DATA__.query`; removing script contents
  left no marker in rendered HTML.
- `__NEXT_DATA__.pageProps.collections` contained the five fixed collection
  records and their product arrays; the query value was not used to fetch or
  render a collection.
- The unknown slug fell back to `top10-cables` client-side.
- No write, object identifier, ownership parameter, or user-controlled GraphQL
  variable is exposed by this route.
- The route is static/SSG-like and issued no collection-specific GraphQL
  request after navigation.

## Status
- No confirmed server-side vulnerability on this route.
