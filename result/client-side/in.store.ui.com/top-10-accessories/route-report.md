# Client-side route report — /in/en/top-10-accessories

Tested: 2026-10-31T05:22–05:24Z (authenticated as Account A)
Route: https://in.store.ui.com/in/en/top-10-accessories?collection=PM_TRACE_TOP10_9137
Build: 8729322f82

## Route JS
`pages/[store]/[language]/top-10-accessories-8f1f941ea2658a30.js`
(16,551 bytes). Raw copy in `javascript/raw/`.

## Sources
- `router.query.collection` is read once, normalized with `Array.isArray`
  handling, and compared by strict equality against the known collection slugs
  and historical slugs from server-provided data.
- Unknown values fall back to the first collection (`top10-cables`); no value
  from the query is inserted into markup or navigation.
- The route renders tab navigation and product cards from preloaded collection
  data.

## Sinks
- No `dangerouslySetInnerHTML`, `innerHTML`, `document.write`, `eval`,
  `new Function`, `srcdoc`, `window.open`, or redirect assignment in the route
  chunk.
- No URL-controlled storage or postMessage sink.

## Runtime checks
- `?collection=PM_TRACE_TOP10_9137` appeared only in
  `__NEXT_DATA__.query`, not in visible text. It did not appear in rendered tab
  links.
- A marker containing an `<img onerror>` payload received a WAF `403` before
  application processing; the benign marker route rendered normally.
- Collection links remained the five fixed slugs (`top10-cables`,
  `top10-camera-mounting`, `top10-racks`, `top10-poe-adapters`,
  `top10-sfp-and-fiber`).

## Status
- XSS/CSTI/DOM clobbering: **Not Vulnerable**.
- Client-side open redirect: **Not Vulnerable** (no redirect sink).
