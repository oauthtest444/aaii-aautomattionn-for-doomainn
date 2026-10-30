# Unresolved Items

## Primary blocker — no active UniFi console for either test account

Both disposable test accounts can authenticate to UI SSO, but the cloud UniFi
Network application cannot establish a controller session.

Observed on Account A (`tan.tiger5564@maildrop.cc`) and Account B
(`overrated.chinchilla337@maildrop.cc`):

- The app loads the shell, then shows `Establishing Remote Connection` and
  `Connection failed.`
- Browser console: `Option 'deviceId' is required.` (twice) and
  `Uncaught (in promise) Object`.
- `window.webrtc.webRtcDevice.getActiveDevice()` returns `undefined`; the
  device object has no enumerable state.
- The startup path calls `webrtc.unifiWebRtcConnector.connect(getActiveDevice())`
  before Angular routing; with no active device the promise rejects and every
  data route is unreachable.
- `POST https://cloudaccess.svc.ui.com/create-credentials` returns HTTP 200 with
  ephemeral AWS/TURN credentials and `roles:["BETA"]`; it does not provide a
  console.

Impact on testing:

- All `/site/:site/*`, `/sites-overview`, `/account`, `/home`, hotspot, and
  settings routes are **Unresolved** because their resolvers require controller
  data and the app never reaches them.
- Server-side API testing through the UI is **Unresolved**. The app's cloud
  controller API is only reachable through the WebRTC session; direct HTTP
  requests to `/api/*`, `/v2/api/*`, `/status`, and `/proxy/network` return
  `502 Bad Gateway` from `awselb/2.0`.

## Account creation

- The target file asked to create two test accounts. Two disposable accounts were
  already provided in `creds/test-account.txt` and both authenticate successfully.
  No additional accounts were created on the production service because it was
  unnecessary and would create external side effects.
- Account A and Account B SSO sessions were established in separate browser
  contexts. Neither account has an active console.

## Routes reached but not fully testable

- `/login?redirect=...`: authenticated visit discarded the external redirect and
  navigated to `/6.1.71.0/unifi/`; unauthenticated visit stalls at the cloud
  access/SSO step. No open redirect observed. Not Vulnerable for the tested
  `http(s)` redirect; deeper login flow belongs to `account.ui.com` (out of
  scope).
- `/account/verify?email=...&t=...`: app bootstrap fails before the verify branch
  runs; no reflection or execution observed. Unresolved.
- `/sso_login/:sso_token/:ubic_uuid/:site_id` with dummy values: bootstrap fails
  with `deviceId required` / `$stateChangeError`. No token reflection observed.
  Unresolved.
- `/forgotpassword`: redirected to `/6.1.71.0/unifi/` and connection failure.
  Unresolved.
- `/fatal/:error`: navigated to `unifi.ubnt.com` (out of scope). Not tested.

## Environment

- Chrome DevTools MCP is connected and works; this is not a tool failure.
- The blocker is the target account/controller state, not MCP availability.
