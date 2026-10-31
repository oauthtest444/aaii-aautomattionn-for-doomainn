# Client-side route report — /in/en/services/ui-care

Tested: 2026-10-31T05:19–05:21Z (authenticated as Account A)
Route: https://in.store.ui.com/in/en/services/ui-care
Build: 8729322f82

## Route JS
`pages/[store]/[language]/services/ui-care-e3b74d12da5f0708.js`, plus shared
`2859`, `9641`, `9972`, and common framework/UI chunks. Raw copies in
`javascript/raw/`.

## Sources
- Static service-page copy/translations and service/product data from the
  storefront bundle/GraphQL config.
- Local React state only (tabs/notify checkbox and product filtering).
- No `router.query`/`location.search/hash`/storage/postMessage value is read by
  the service page component.

## Sinks
- No `dangerouslySetInnerHTML`, `innerHTML`, `document.write`, `eval`,
  `new Function`, `srcdoc`, `location.assign/replace`, or `window.open` in the
  route component.
- Back-in-stock/UI-care UI is rendered through React bindings.

## Runtime checks
- `?x=PM_TRACE_UICARE_9137` did not appear in page text or `__NEXT_DATA__`; the
  route ignored the query value.
- Notify checkbox only toggles local UI state; no URL/HTML sink is involved.

## Status
- XSS/CSTI/DOM clobbering/prototype pollution: **Not Vulnerable**.
- Client-side open redirect: **Not Vulnerable**.
- postMessage: **Not Vulnerable** (no route listener).
