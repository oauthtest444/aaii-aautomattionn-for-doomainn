# Client-side route report — /in/en/country-picker

Tested: 2026-10-30T22:28–22:33Z (authenticated as Account A)
Route: https://in.store.ui.com/in/en/country-picker?redirectUri=...
Build: 8729322f82

## Route JS
- `pages/[store]/[language]/country-picker-fc95131ab38660c2.js` (no DOM
  HTML/navigation sinks itself).
- Shared store-picker chunk `9743-d742265011a9f86d.js` contains the country
  change handler and the only navigation sink.
- Raw copies under `javascript/raw/`.

## Sources
- `router.query.redirectUri` (`9743`, `changeCountry`).
- Selected country object from the rendered country list.
- Store/language from SiteSettings context.

## Sinks
- `window.location.assign((0,p.sf)(store)(route))` in `changeCountry`
  (`9743`). The route is rebuilt as `{pathname, searchParams}` from
  `new URL(redirectUri, location.origin)`, then passed through the store route
  helper. The parsed absolute host is discarded and replaced with the selected
  store's own host; only pathname/query are carried over.
- `window.open` in `3809` opens the fixed
  `https://account.ui.com/...` site-manager URL; not user-controlled.

## Runtime open-redirect check
1. `/in/en/country-picker?redirectUri=https%3A%2F%2Fexample.com%2Fpm-redirect-test%3Fx%3D1`
2. Selected **Canada**.
3. Final URL: `https://ca.store.ui.com/ca/en?x=1&c=CA` — not `example.com`.
   The host came from the selected store; `x=1` was preserved from
   `redirectUri`'s query. No open redirect.
4. A quote/angle payload in `redirectUri` was only double-encoded into the
   third-party Post Affiliate Pro `getParams` attribute
   (`%2522...%253C...`); no attribute break-out.

## Status
- No confirmed client-side vulnerability on this route.
- Cross-store navigation lands on `ca.store.ui.com`, which is outside the
  authorized scope; testing stopped at the redirect target.
