# Client-side route report — /in/en/faq

Tested: 2026-10-31T05:17–05:19Z (authenticated as Account A)
Route: https://in.store.ui.com/in/en/faq
Build: 8729322f82

## Route JS
`pages/[store]/[language]/faq-eeac419128c21a0b.js` plus loaded shared chunks
`9972`, `5901`, `4866`, `5644`, `5161`, `9743`, `8219` and framework chunks.
Raw copies and SHA-256 in `javascript/raw/`.

## Sources
- FAQ local Search input state (`useState` in `5161`). It is not read from
  `location.search`, `router.query`, storage, cookies, or postMessage.
- Static FAQ/translation data loaded from `assets.ecomm.ui.com` bundles.
- `router.query` seen only in shared listing chunk `9972`, which the FAQ page
  does not use to render question/answer content.

## Sinks
- No `dangerouslySetInnerHTML`, `innerHTML`, `document.write`, `eval`,
  `new Function`, `srcdoc`, `location.assign/replace`, or `window.open` in the
  FAQ route components.
- Question/answer values are rendered through React text children.

## Runtime checks
1. `?search=PM_TRACE_FAQ_9137` was not rendered in page text or `__NEXT_DATA__`;
   the marker appeared only percent-encoded in the third-party Google Ads
   iframe URL.
2. Typed `<img src=x onerror="window.__PM=1">` into the FAQ search box:
   `window.__PM` remained null, no injected `<img>` element existed, and the
   value stayed a literal input value. React escaped it; no execution.

## Status
- XSS/CSTI/DOM clobbering/prototype pollution: **Not Vulnerable**.
- Client-side open redirect: **Not Vulnerable**.
- postMessage: **Not Vulnerable** (no route listener).
