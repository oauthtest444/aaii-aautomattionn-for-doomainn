# Client-side route report — /in/en/app/search

Tested: 2026-10-31T05:25Z (authenticated as Account A)
Route: https://in.store.ui.com/in/en/app/search?search=PM_TRACE_APPSEARCH_9137
Build: 8729322f82

## Route JS
`pages/[store]/[language]/app/search-d651b92f8aac4290.js` (41,248 bytes).
Raw copy in `javascript/raw/`.

## Analysis
- The server issues a fixed same-origin 307 to `/in/en/search`, preserving the
  `search` query parameter, so the app route does not render its own search UI.
- The chunk contains route-prefetch helpers that construct same-origin
  `/_next/data/<build>/<path>.json` requests and require
  `new URL(url, location.origin).origin === location.origin`.
- No arbitrary cross-origin URL can pass that check; query values are handled
  by the web search page, which was previously tested.

## Runtime check
- Navigation to the app route landed on
  `https://in.store.ui.com/in/en/search?search=PM_TRACE_APPSEARCH_9137`.

## Status
- Client-side open redirect: **Not Vulnerable** (fixed same-origin 307).
- XSS/CSTI: **Not Vulnerable** on the app alias route.
