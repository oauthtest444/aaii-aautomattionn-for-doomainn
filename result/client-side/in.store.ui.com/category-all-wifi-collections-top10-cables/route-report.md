# Client-side route report — /in/en/category/all-wifi/collections/top10-cables

Tested: 2026-10-31T05:24–05:26Z (authenticated as Account A)
Route: https://in.store.ui.com/in/en/category/all-wifi/collections/top10-cables?x=PM_TRACE_CATCOLL_9137
Build: 8729322f82

## Route JS
`pages/[store]/[language]/category/[category]/collections/[collection]-9a4335b2cab7841e.js`
(993-byte alias wrapper) plus shared module `50689` in `8179` and common
chunks. Raw wrapper in `javascript/raw/`.

## Analysis
- The route wrapper imports the same shared collection/product view as
  `/collections/[collection]` (`__N_SSP`).
- The shared view has no URL source → HTML/script/redirect sink. Its sole
  `dangerouslySetInnerHTML` uses CMS `contentHtml` from server product data.
- Query `x` is retained only in `__NEXT_DATA__.query`.

## Runtime checks
- The page rendered the same UniFi Patch Cable product as the non-category
  collection route.
- `PM_TRACE_CATCOLL_9137` was not present in visible text or page props.
- No redirect, popup, storage write, or postMessage listener was observed from
  the query value.

## Status
- XSS/CSTI/DOM clobbering: **Not Vulnerable**.
- Client-side open redirect: **Not Vulnerable**.
