# Client-side route report — /in/en/app/compare

Tested: 2026-10-30T22:25–22:28Z (authenticated as Account A; app view)
Route: https://in.store.ui.com/in/en/app/compare
Build: 8729322f82

## Route JS
`pages/[store]/[language]/app/compare-bfd688ff4b6f7304.js` (raw copy under
`javascript/raw/`), plus shared compare/product/cart chunks.

## Sources
- Compare-list state and `alternativeProducts` from SiteSettings/compare
  context (populated client-side from the compare UI).
- Product/server data rendered in the comparison table.
- `router.query` is not read by this chunk (`router.query`/`searchParams`
  absent); the compare list does not come from the URL.

## Sinks
- No `dangerouslySetInnerHTML`, `innerHTML`, `document.write`, `eval`,
  `new Function`, `location.href`/`assign`, `window.open`, or `postMessage`
  listener in the route chunk.
- Product fields are rendered through React text/attribute bindings.

## Runtime reflection check
`?compare=PM_TRACE_CMP_9137&search=PM_TRACE_CMP_9137` did not render the marker
as text. The only HTML occurrence was inside the third-party Post Affiliate Pro
`getParams` script URL, URL-encoded (`%3Fcompare%3D...%26search%3D...`). A
quote/angle payload became `%2522...%253C...` (double-encoded) inside the
`src` attribute; no break-out and no script execution observed.

## Status
- No confirmed client-side vulnerability on this route.
