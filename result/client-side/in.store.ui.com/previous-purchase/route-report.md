# Client-side route report — /in/en/previous-purchase

Tested: 2026-10-31T05:26–05:28Z (authenticated as Account A)
Route: https://in.store.ui.com/in/en/previous-purchase?x=PM_TRACE_PREV_9137
Build: 8729322f82

## Route JS
`pages/[store]/[language]/previous-purchase-5b993962938e5f4c.js`
(20,250 bytes). Raw copy in `javascript/raw/`.

## Sources and sinks
- The server dropped the arbitrary `x` parameter from `__NEXT_DATA__.query`;
  only `store` and `language` remained.
- The route renders a `Previously Purchased` search/result view scoped by the
  authenticated customer.
- No `dangerouslySetInnerHTML`, `innerHTML`, `document.write`, `eval`,
  `new Function`, `srcdoc`, `window.open`, or redirect assignment was found in
  the route chunk.
- Query removal logic uses `router.replace` to remove named parameters from the
  existing router query; it does not navigate to user-supplied URLs.

## Runtime checks
- Account A has no previous purchases, so the page rendered
  `Previously Purchased` → `No Results Found`.
- `PM_TRACE_PREV_9137` was absent from visible text and Next page props.
- No redirect, popup, storage write, or postMessage listener was triggered.

## Status
- XSS/CSTI/DOM clobbering: **Not Vulnerable** on normal render.
- Client-side open redirect: **Not Vulnerable**.
