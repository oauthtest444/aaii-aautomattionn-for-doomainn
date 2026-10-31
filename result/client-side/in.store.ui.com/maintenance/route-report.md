# Client-side route report — /in/en/maintenance

Tested: 2026-10-31T05:21–05:23Z (authenticated as Account A)
Route: https://in.store.ui.com/in/en/maintenance
Build: 8729322f82

## Route JS
`pages/[store]/[language]/maintenance-36065e833e7556cc.js` (7,313 bytes).
Raw copy in `javascript/raw/maintenance-36065e833e7556cc.js`.

## Behavior
- The route renders no content. Once `isReady` is true, it computes a redirect
  target and assigns `window.location.href`.
- Query parameter `redirect_uri` is parsed with `new URL(...)`. The target is
  accepted only when `url.origin === window.location.origin`; otherwise the
  default store index route is used.
- Without `redirect_uri`, `/in/en/maintenance` client-redirects to
  `https://in.store.ui.com/in/en`.

## Runtime checks
- `redirect_uri=https://example.com/pm` → remained on `https://in.store.ui.com/in/en`
  (external target rejected).
- `redirect_uri=https://in.store.ui.com/in/en?pm_redirect_marker=9137` →
  navigated to `https://in.store.ui.com/in/en?pm_redirect_marker=9137`
  (same-origin target accepted).
- Other parsed examples (`https://in.store.ui.com@evil.com/`,
  `https://in.store.ui.com\t.evil.com/`) have a foreign origin and are rejected.
  Backslash and `%2F%2F` variants remain on the `in.store.ui.com` origin.
- `blob:`/`filesystem:` URLs can have the same origin, but they require an
  attacker-controlled resource already created in this origin; this route does
  not create or fetch such a resource. No practical open-redirect primitive.
- No DOM HTML sink, script execution sink, postMessage listener, or storage
  source is present in the route component.

## Status
- Client-side open redirect: **Not Vulnerable** (origin allowlist enforced).
- XSS/CSTI/DOM clobbering: **Not Vulnerable** (route renders `null`).
- postMessage: **Not Vulnerable** (no route listener).
