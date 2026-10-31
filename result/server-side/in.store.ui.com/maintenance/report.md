# Server-side route report — /in/en/maintenance

Tested: 2026-10-31T05:21–05:23Z (authenticated as Account A)
Route: https://in.store.ui.com/in/en/maintenance
Build: 8729322f82

## Endpoints observed
| Method | Endpoint | Variables | Auth | Result |
|---|---|---|---|---|
| GET https://in.store.ui.com/in/en/maintenance | - | `redirect_uri=https://example.com/PM_MAINT_9137` | Account A | 200, 202,136-byte HTML |
| POST https://ecomm.svc.ui.com/graphql | GetCoreData | `{storeId:"in",platform:"Web"}` | Account A | 200, public store/customer config |
| POST https://ecomm.svc.ui.com/graphql | GetCountryTaxRate | `{storeId:"in",countryCode:"IN"}` | Account A | 200, rate 0.18 |

## Testing performed
- Requested the route with an external `redirect_uri` marker.
- The marker was absent from the response body and from `__NEXT_DATA__`.
- `__NEXT_DATA__.page` was `/[store]/[language]/maintenance`;
  `__NEXT_DATA__.query` and `pageProps` were empty.
- The redirect is performed only by client JavaScript after hydration.
- Response security headers include CSP with `object-src 'none'`,
  `base-uri 'self'`, and an origin-restricted `script-src`; HSTS;
  `X-Frame-Options: DENY`; `X-Content-Type-Options: nosniff`; and
  `Referrer-Policy: origin-when-cross-origin`.
- No server-side reflection, parameter injection, state change, object
  identifier, or write operation is exposed by this route.

## Status
- No confirmed server-side vulnerability on this route.
