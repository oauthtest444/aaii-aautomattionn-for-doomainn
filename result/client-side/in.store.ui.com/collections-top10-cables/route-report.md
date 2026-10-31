# Client-side route report — /in/en/collections/top10-cables

Tested: 2026-10-31T05:23–05:25Z (authenticated as Account A)
Route: https://in.store.ui.com/in/en/collections/top10-cables?x=PM_TRACE_COLL_9137
Build: 8729322f82

## Route JS
`pages/[store]/[language]/collections/[collection]-293230c55d61f453.js`
(872-byte wrapper) plus shared module `50689` in `8179` and other common
chunks. Raw route copy in `javascript/raw/`; shared copy already saved under
`result/client-side/in.store.ui.com/products-uap-ac-hd/javascript/raw/`.

## Sources and sinks
- The route is an `__N_SSP` wrapper around the shared collection/product view.
- Product/collection data comes from server page props.
- The shared view contains `dangerouslySetInnerHTML` only for
  `NodeTextblock.contentHtml` received from the product FAQ GraphQL response.
  This is server CMS content, not a URL/query source.
- No query parameter is used as an HTML, script, redirect, storage, or
  postMessage sink.

## Runtime checks
- `?x=PM_TRACE_COLL_9137` appeared only in `__NEXT_DATA__.query`, not in visible
  text or page props.
- `embedReturnUrl=https://example.com/PM_EMBED_9137` and
  `embedSource=PM_SOURCE_9137` were present in `__NEXT_DATA__.query` but
  `pageProps.embedReturnUrl`/`embedSource` remained `null`; no navigation
  occurred.
- No redirect or new window opened during page load.

## Status
- XSS/CSTI/DOM clobbering: **Not Vulnerable** (server CMS HTML only).
- Client-side open redirect: **Not Vulnerable**.
