# Client-side route report — /in/en/app/faq

Tested: 2026-10-31T05:22–05:24Z (authenticated as Account A)
Route: https://in.store.ui.com/in/en/app/faq
Build: 8729322f82

## Route JS
`pages/[store]/[language]/app/faq-ced2bf1c2d3584b7.js` (786 bytes) and
shared `5161-0ae0dd3b29595b78.js`. Raw copies in `javascript/raw/`.
The route chunk re-exports the same FAQ component used by the web `/faq`
route and declares `__N_SSG`.

## Behavior
- The server responds with `307` to the equivalent web route:
  `https://in.store.ui.com/in/en/faq?search=PM_TRACE_APPFAQ_9137`.
  The query string is preserved, and the redirect target remains on
  `in.store.ui.com`.
- Consequently the app route never renders its own FAQ instance.
- The shared FAQ component was already tested on `/in/en/faq`: search is local
  React state, with no URL-controlled HTML sink.

## Status
- Client-side open redirect: **Not Vulnerable** (fixed same-origin 307).
- XSS/CSTI/DOM clobbering: **Not Vulnerable** (app route redirects; shared FAQ
  component has no URL source → HTML sink).
