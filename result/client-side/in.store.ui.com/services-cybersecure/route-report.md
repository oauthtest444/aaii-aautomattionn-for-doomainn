# Client-side route report — /in/en/services/cybersecure

Tested: 2026-10-31T05:21–05:22Z (authenticated as Account A)
Route: https://in.store.ui.com/in/en/services/cybersecure
Build: 8729322f82

## Route JS
`pages/[store]/[language]/services/cybersecure-2b9b7e3928ed9667.js` plus shared
`2859`, `9641`, and framework/UI chunks. Raw copy in `javascript/raw/`.

## Sources
- Static marketing copy/translations only; no router/location/storage/message
  source is read by this route.
- Local checkbox state for the unavailable-region notification.

## Sinks
- Regex scan over the route chunk found no `searchParams`, `router.query`,
  `location.*`, `innerHTML`, `dangerouslySetInnerHTML`, `postMessage`,
  `window.open`, or `eval`.
- Content is rendered through React text bindings.

## Runtime checks
- Arbitrary query marker was not rendered in page text or `__NEXT_DATA__`.
- Notification checkbox only changes local React state.

## Status
- XSS/CSTI/DOM clobbering/prototype pollution: **Not Vulnerable**.
- Client-side open redirect: **Not Vulnerable**.
- postMessage: **Not Vulnerable**.
