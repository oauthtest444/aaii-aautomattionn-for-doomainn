# API Endpoint Inventory

The cloud app's real API is delivered over the WebRTC/V2 tunnel to the account's
console. No console is active for either test account, so no authenticated API
traffic could be generated. The following same-origin paths were extracted from
the app bundles and probed with safe unauthenticated GET requests.

| Method | Path | Source | Auth | Observed result | Status |
|--------|------|--------|------|-----------------|--------|
| GET | `/api/self` | `index.js` (`UnifiAPISelfPath`) | controller/WebRTC | HTTP 502 (awselb) | Unresolved |
| GET | `/v2/api` | `index.js` (`UnifiAPIv2BasePath`) | controller/WebRTC | HTTP 502 | Unresolved |
| GET | `/status` | `index.js` (`UnifiAPIStatusPath`) | controller | HTTP 502 | Unresolved |
| GET | `/proxy/network` | `app.js` | controller | not directly reachable; controller proxy | Unresolved |
| GET | `/api/airos/v1/unifi/devices/` | `index.js` | controller | HTTP 502 | Unresolved |
| POST | `/api/verify` | `index.js`; body `{email, token}` | unauthenticated (verification) | not reached before bootstrap failure; direct HTTP 502 | Unresolved |
| GET | `/api/sso/v1/user/self` | `base.js` | SSO | HTTP 502 on app host | Unresolved |
| GET | `/api/sso/v1/self/token/scope/` | `base.js` | SSO | not reached | Unresolved |
| POST | `/v2/auth`, `/v2/get_token`, `/v2/get_request_token`, `/v2/request_auth` | `components.js` | controller | not reached | Unresolved |
| GET | `/v2/files`, `/v2/files/` | `components.js` | controller | not reached | Unresolved |

## Notes

- `/api/*` on `network.unifi.ui.com` is not an HTTP API; the app routes those
  calls through the WebRTC connector (`webRtcConnectorCloud.sendApiRequest`).
  Direct HTTP requests return `502 Bad Gateway` from `awselb/2.0`.
- `POST https://cloudaccess.svc.ui.com/create-credentials` (third-party, out of
  scope) returns ephemeral AWS/TURN credentials and `roles:["BETA"]`; it does not
  expose controller data.
- No write/mass-assignment/IDOR tests were performed because no authorized
  test-owned controller objects exist and no authenticated API session could be
  established. These are marked Unresolved rather than skipped silently.
