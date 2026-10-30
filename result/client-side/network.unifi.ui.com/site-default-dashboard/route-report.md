# Route Report — `/6.1.71.0/unifi/site/default/dashboard`

- Tested: 2026-10-30T07:27Z–07:47Z (UTC)
- Auth context: Account A (`tan.tiger5564@maildrop.cc`) and Account B
  (`overrated.chinchilla337@maildrop.cc`), separate browser contexts, both SSO
  authenticated with MFA.
- Route status: **Unresolved** (client-side), **Unresolved** (server-side)
- Reason: no active UniFi console. The app bootstrap fails at
  `webrtc.unifiWebRtcConnector.connect(getActiveDevice())` with
  `Option 'deviceId' is required.` before Angular routing.

## Client-Side Testing

- Enumerated all route-related same-origin JS (7 bundles, hashes in
  `javascript/manifest.md`).
- Ran source/sink regexes and manual review over route-related JS.
- Reviewed login/OAuth redirect handling, `manage.ssologin`, `account/verify`,
  `manage.fatal`, `postMessage` service, `unifiIframePostMessage`, and
  `ng-bind-html`/`trustAsHtml` usage.
- Runtime attempts:
  - `?redirect=https://example.com/` (authenticated) → navigated to
    `/6.1.71.0/unifi/`; external redirect discarded. Not Vulnerable.
  - `/account/verify?email=test@example.com&t=abc123` → connection-failure
    overlay; no reflection/execution. Unresolved.
  - `/sso_login/DUMMYTOKEN_ABC123/0000.../default` → `$stateChangeError` after
    `deviceId required`; blank shell. Unresolved.
  - `/forgotpassword` → `/6.1.71.0/unifi/` connection failure. Unresolved.
  - `/fatal/404` → navigated to `unifi.ubnt.com` (out of scope). Not tested.
- Confirmed client-side vulnerabilities: **none**.
- Interesting code locations:
  - `base.js` BaseLoginController: `decodeURIComponent($stateParams.redirect)` →
    `$location.url()` (only `/fatal/` rejected).
  - `app.js` OAuthLoginController: same pattern.
  - `app.js` module 1448: unvalidated `window.onmessage` dispatcher.
  - `app.js` module 494: iframe preview posts model with target origin `"*"`.
- Limitations: route resolvers, templates, and data-bound sinks never execute in
  the current account state.

## Server-Side Testing

- Extracted candidate API paths from bundles (see
  `result/inventory/endpoints.md`).
- Direct HTTP probes to `/api/self`, `/status`, `/v2/api/self`,
  `/api/sso/v1/user/self`, `/api/airos/v1/unifi/devices/` all returned
  `HTTP 502` (`awselb/2.0`).
- The real API is only reachable through the WebRTC controller tunnel, which is
  unavailable (`deviceId required`).
- No authenticated request/response could be captured; no create/edit endpoint
  was reachable; mass assignment, IDOR/BOLA, and BAC tests are **Unresolved**.
- Confirmed server-side vulnerabilities: **none**.

## Route Completion Status

| Item | Status |
|------|--------|
| Route URL | `https://network.unifi.ui.com/6.1.71.0/unifi/site/default/dashboard` |
| Client-side testing | Unresolved (bootstrap blocker) |
| Server-side testing | Unresolved (no controller tunnel / API 502) |
| Findings | None confirmed |
| Final completion status | **Not fully tested — Unresolved** |

## Next Steps for Another Session

1. Use a test account that has an active UniFi console linked (so
   `webRtcDevice.getActiveDevice()` is defined).
2. Re-run the route queue in `result/inventory/routes.md`, starting with
   `manage.site.dashboard`.
3. For each route, capture controller API traffic through WebRTC and test the
   create/edit endpoints for mass assignment and IDOR.
