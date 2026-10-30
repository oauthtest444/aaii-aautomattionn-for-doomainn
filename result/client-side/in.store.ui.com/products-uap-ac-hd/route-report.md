# Client-side route report — /in/en/products/uap-ac-hd

Tested: 2026-10-30T22:12–22:16Z (unauthenticated)
Route: https://in.store.ui.com/in/en/products/uap-ac-hd
Build: 8729322f82

## Route JS
Product page entry chunk plus the shared chunks that implement the product page
(manifest with URL/hash in `javascript/manifest.md`). Regexes from
`skills/client-side-skill.md` were run on the route-loaded JS; hits were traced.

## Sources
- `router.query.variant` (`8179`: `b.query.variant`) — used only to select a
  variant slug (`(0,tZ.gj)`).
- `router.query["linked-variant"]` (`8179`) — used only to match a linked
  product variant.
- `router.query.product` / `router.query` (`8179` glance assets) — compared to
  a fixed product slug list.
- `window.location.href` passed to the SSO login helper (expected redirect back).
- Query params are also serialized into `__NEXT_DATA__` (framework behavior).

No user-controlled source reaches a DOM/HTML/navigation sink.

## Sinks
- Many `dangerouslySetInnerHTML` uses exist, but all receive server-side product
  content: `description`, `shortDescription`, `keyFeatures`, `datasheet.html`,
  `technicalSpecification`, FAQ `contentHtml`, JSON-LD built from product data.
  None use a URL/query/storage/postMessage value.
- `innerHTML` in `690` sanitizes `keyFeatures` by stripping `<img>` and wrapping
  content in `<span>` before re-insertion (server content only).
- `window.open`/navigation calls use server-built product/collection URLs.
- No `eval`, `new Function`, `document.write`, `srcdoc` from user input.

## Runtime reflection check
Navigated with `?variant=PM_TRACE_TEST_12345&linked-variant=PM_TRACE_67890&embed=PM_TRACE_EMBED`.
Marker appeared only inside `__NEXT_DATA__` JSON (query serialization), never in
rendered text, DOM attributes, or script contexts. No execution, no HTML sink.

## postMessage
Only framework/worker/PagBrasil listeners present in route JS; no product-route
message listener with weak origin validation. Native app bridge uses
`CustomEvent("nativeMessage")` on the same window plus schema validation, not
cross-origin postMessage.

## Status
- XSS/CSTI/DOM clobbering/prototype pollution: **Not Vulnerable** (no
  controllable source→sink flow found).
- Client-side open redirect: **Not Vulnerable**.
- postMessage: **Not Vulnerable**.
