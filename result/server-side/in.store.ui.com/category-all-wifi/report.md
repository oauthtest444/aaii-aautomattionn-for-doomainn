# Server-side route report — /in/en/category/all-wifi

Tested: 2026-10-30T22:12–22:17Z (unauthenticated)
Build: 8729322f82

## Endpoints observed
| Method | Operation | Variables | Auth | Result |
|---|---|---|---|---|
| GET https://in.store.ui.com/in/en/category/all-wifi | - | query params | none | 200, SSR listing/product HTML |
| POST https://ecomm.svc.ui.com/graphql | GetCoreData | storeId=in, platform=Web | none | public store config |
| POST https://ecomm.svc.ui.com/graphql | GetCountryTaxRate | countryCode=IN, storeId=in | none | rate 0.18 |
| GET https://in.store.ui.com/api/geo-ip | - | - | none | geo lookup |

No category-listing GraphQL request was observed; the catalog is server-rendered.
`GetCoreData`/`GetCountryTaxRate` are public and take no ownership parameter.

## Testing performed
- Baseline category returns SSR product links and `__NEXT_DATA__`.
- `sort`, `tag`, `view`, `page` values were accepted but only serialized into
  `__NEXT_DATA__.query`; they did not alter GraphQL input or server state.
- `search` is propagated into generated product hrefs (URL-encoded) and causes a
  client-side redirect to `/in/en/search?search=...`; it is not echoed into the
  server category page's text/HTML attributes.
- Encoded CRLF (`%0D%0ASet-Cookie...`) stayed percent-encoded inside hrefs; no
  response-header injection or attribute break-out.
- Unknown category slug (`/category/PM_TRACE_CAT_SLUG_9137`) → `307` to `/404`.
- XSS probes containing `<`, `>`, or quote/`javascript:` payloads → WAF
  `403 Forbidden`; no reflected content returned.
- No auth/authorization or write operation exists on this route, so no
  IDOR/BOLA/mass-assignment surface.

## Status
- No confirmed server-side vulnerability on this route.
