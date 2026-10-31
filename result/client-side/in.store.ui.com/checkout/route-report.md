# Client-side route report — /in/en/checkout/{id} and /in/en/checkout/{id}/payment

Tested: 2026-10-31T21:36–21:39Z (Account A, own test checkout; plus unauthenticated GET)
Route: https://in.store.ui.com/in/en/checkout/{id}
Route: https://in.store.ui.com/in/en/checkout/{id}/payment
Build: 8729322f82

## Route JS
- `pages/[store]/[language]/checkout-bfeea03a85739314.js` (844 B alias)
- `pages/[store]/[language]/checkout/[id]-5ea62705d142f8d8.js` (849 B alias)
- `pages/[store]/[language]/checkout/[id]/payment-4493eb08b34789dc.js` (~80 KB)
- Shared `app.js` (checkout context, GraphQL documents, checkout cookie handling)

## Sources
- Path: `[store]`, `[language]`, `[id]`; query: `store`, `language`, `id`, `key`.
- Runtime observation: the page does **not** use the query `id`/`key` to select
  checkout data. `/checkout/<requested-id>` (authenticated) always 307s to
  `/checkout/<active-id>/payment?store=in&language=en&id=<requested-id>&key=<active-secret>`,
  where `<active-id>` comes from the `in_active_checkout` cookie and `<key>` is
  that active checkout's own secret.
- Navigating to `/checkout/<other-id>/payment?id=<other-id>&key=<other-secret>`
  while authenticated still redirected to the caller's active checkout with the
  caller's own key; the supplied `key` was ignored.
- Checkout secret storage is cookie-based (`checkout_<id>=<secret>`, readable by
  JS); no URL/query value is trusted as the secret.

## Sinks
- `location.assign` + `redirectUri` in the shared country-picker module use
  `new URL(value, window.location.origin)` with an origin equality check; already
  tested on the country-picker route (external value rejected).
- No `innerHTML`, `dangerouslySetInnerHTML`, `eval`, `new Function`,
  `document.write`, `window.open`, or `postMessage` sink reachable from the
  path/query values in the checkout/payment chunks.
- Payment chunk contains only the shared country-picker navigation sink; no
  checkout-specific DOM HTML sink.

## Runtime reflection checks
- `/checkout/not-a-uuid/payment` -> 404 page; marker not reflected.
- `/checkout/%2e%2e%2faccount/payment` -> 403 (WAF).
- Valid UUID path + quote/`<img onerror>` in `id` query -> 403 (WAF); no bypass
  attempted.
- Loading a valid checkout URL did not render another account's address/email;
  only the caller's active checkout data was shown.

## Status
- XSS/CSTI/DOM clobbering: **Not Vulnerable**.
- Client-side open redirect: **Not Vulnerable**.
- Checkout-secret trust from URL: **Not Vulnerable** (query key ignored).
