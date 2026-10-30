# API Inventory — network.unifi.ui.com

Route: `https://network.unifi.ui.com/6.1.71.0/unifi/site/default/dashboard`

## Findings about the API architecture

The app served at `network.unifi.ui.com` is the cloud UI shell. Controller API
calls are sent over the WebRTC data channel by
`window.webrtc.webRtcConnectorCloud.sendApiRequest(...)`, not over same-origin
HTTP. The same-origin `/api/*` paths are not an HTTP API on this host.

Safe unauthenticated HTTP probes:

| Method | Path | Status | Response |
|--------|------|--------|----------|
| GET | `/api/self` | 502 | `awselb/2.0` HTML |
| GET | `/status` | 502 | `awselb/2.0` HTML |
| GET | `/v2/api/self` | 502 | `awselb/2.0` HTML |
| GET | `/api/sso/v1/user/self` | 502 | `awselb/2.0` HTML |
| GET | `/api/airos/v1/unifi/devices/` | 502 | `awselb/2.0` HTML |
| GET | `/robots.txt` | 502 | `awselb/2.0` HTML |
| GET | `/.well-known/security.txt` | 502 | `awselb/2.0` HTML |

## Candidate controller endpoints extracted from JS

These are paths passed to the controller API layer once a WebRTC session exists:

- `/api/self`, `/v2/api`, `/status`, `/proxy/network`
- `/api/airos/v1/unifi/devices/`
- `/v2/auth`, `/v2/get_token`, `/v2/get_request_token`, `/v2/request_auth`
- `/v2/files`, `/v2/files/`
- `/api/sso/v1/user/self`, `/api/sso/v1/self/token/scope/`
- `/v2/settings`, `/v2/settings/wifi`, `/v2/settings/networks`,
  `/v2/settings/system`, `/v2/settings/system/controller`,
  `/v2/settings/system/maintenance`, `/v2/settings/advanced/gateway`,
  `/v2/settings/security/threat-management`, `/v2/ips/dashboard`,
  `/v2/wifiman`

## Valid-parameter derivation — not possible

No controller response object, list, detail, create, or update response could be
captured. Therefore no valid create/edit parameters could be derived, and no
mass-assignment test could be performed. Status: Unresolved.
