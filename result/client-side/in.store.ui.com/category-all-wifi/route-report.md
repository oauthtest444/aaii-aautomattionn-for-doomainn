# Client-side route report — /in/en/category/all-wifi

Tested: 2026-10-30T22:12–22:17Z (unauthenticated)
Route: https://in.store.ui.com/in/en/category/all-wifi
Build: 8729322f82

## Route JS
Category entry chunk plus shared listing/compare chunks:
`[category]-38d7bb10c8b79213.js`, `5298-13aa2719910d6d2c.js`,
`1778-a2564ce84046c239.js`, `5404-9fe5dcb3c43e932f.js`,
`8888-818ed930ae6ff0b4.js`, `8934.47cd4f0949615a0b.js`.
URLs/hashes/sizes are in `javascript/manifest.md`; raw files under
`javascript/raw/`. Shared framework chunks (`690`, `8219`) overlap the already
reviewed product/home routes.

## Sources
- `router.query.search`, `query.tag`, `query.sort`, `query.view`,
  `query.page` (`[category]` and `5298`).
  - `search` is used to build "search within category" product URLs and causes
    a client-side `router.replace` to `/in/en/search?search=...`.
  - `sort`/`tag`/`view`/`page` drive listing UI state only and are serialized
    into `__NEXT_DATA__`.
- `router.query.category` (`5298` lazy scroll handler) — strips a `category-`
  prefix and calls `router.replace({pathname, query:{...query, category}}, ...,
  {shallow:true})` for in-page category navigation. Value is constrained to a
  known category slug by the listing UI; it is used only as a route segment.
- `window.location.href` (`1778`) — fixed SSO account URL for back-in-stock
  login (`Cj.Account`), not attacker-controlled.
- `window.open` (`[category]`, `5298`) — opens `D`/`q`, which are computed from
  server product `slug`/`variant.slug` via the store route helper, or the fixed
  stock-locator URL when status is `RegionNotAvailable`.

No URL/query/storage/postMessage value reaches a DOM HTML or navigation sink.

## Sinks
- `dangerouslySetInnerHTML` in `8888`/`690` receives server product feature
  labels/values/notes and product marketing content (same sources as the
  product route report). Compare-table values pass through the existing
  `(0,eC.A)`/`(0,x.A)` helper before insertion.
- `innerHTML` in `690` belongs to the key-features sanitizer already reviewed
  on the product route (strips `<img>`, re-wraps content; server content only).
- `location.assign` (`1778`) uses `e.url` from a server "buy in store" offer.
- No `eval`, `new Function`, `document.write`, or `srcdoc` sinks.
- No category-specific cross-origin `postMessage` listener. Existing listeners
  are framework/worker/PagBrasil with origin checks (product route notes).

## Runtime reflection check
1. `?sort=PM_TRACE_SORT_9137&tag=PM_TRACE_TAG_9137&view=PM_TRACE_VIEW_9137&page=9999`
   → markers appeared only in the `__NEXT_DATA__` `query` object; not rendered,
   not in attributes.
2. `?search=PM_TRACE_REDIR_9137` → server HTML propagated the marker into every
   product link as `...?search=PM_TRACE_REDIR_9137` (percent-encoded by Next);
   client then replaced the route with `/in/en/search?search=...`, where the
   value was rendered as escaped text (`<span>`/input `value`). No HTML sink.
3. `?search=%0D%0ASet-Cookie%3Apm%3D1` → percent-encoded as
   `search=%0D%0ASet-Cookie%3Apm%3D1` in hrefs; no header/attribute injection.
4. Quote/`javascript:`/angle-bracket probes were rejected by the WAF (`403`);
   no bypass attempted beyond encoding.

## Status
- XSS/CSTI/DOM clobbering/prototype pollution: **Not Vulnerable** (no
  controllable source→sink flow found).
- Client-side open redirect: **Not Vulnerable** (search redirect stays on
  `/in/en/search`).
- postMessage: **Not Vulnerable**.
