# Route Testing Progress

Last updated: 2026-10-30T07:50:00Z
Run ID: 41020096449

## Summary

- Total UI state routes discovered: **120**
- Routes fully tested: **0**
- Runtime attempts / candidate checks: **7** (dashboard, `/sites-overview`,
  `/login?redirect`, `/account/verify`, `/sso_login/...`, `/forgotpassword`,
  `/fatal/:error`)
- Route outcomes: **116 Unresolved**, **1 Not Vulnerable**, **3 Out of Scope**
- Confirmed high-impact findings: **0**

The authoritative full route list with per-route status is
`result/inventory/routes.md` and `result/testing-inventory.json`.

## Why everything is Unresolved

Both disposable test accounts authenticate through UI SSO, but neither has an
active UniFi console. The app calls
`webrtc.unifiWebRtcConnector.connect(getActiveDevice())` before Angular routing;
`getActiveDevice()` is `undefined`, and the console logs
`Option 'deviceId' is required.` All data/settings routes therefore fail before
their resolvers run. See `result/unresolved.md`.

## Route Status by Group

| Group | Routes | Status |
|-------|--------|--------|
| `manage.site.settings.*` | 49 | Unresolved |
| `manage.hotspot.*` | 13 | Unresolved |
| `manage.site.insights.*` | 12 | Unresolved |
| `manage.overview.*` / `manage.account.*` / fatal | 10 | 1 Not Vulnerable, 3 Out of Scope, 6 Unresolved |
| `manage.site.statistics.*` | 8 | Unresolved |
| `manage.site.*` other (dashboard, devices, clients, maps, etc.) | 17 | Unresolved |
| `manage.site.ufsdn.*` | 3 | Unresolved |

## Runtime-Tested Route Attempts

| Route | Client-side | Server-side | Status | Report |
|-------|-------------|-------------|--------|--------|
| `/site/default/dashboard` | Static analysis + authenticated load | API probe (502) | Unresolved | `result/client-side/network.unifi.ui.com/site-default-dashboard/route-report.md` |
| `/sites-overview` | Authenticated load | API probe (502) | Unresolved | `result/server-side/network.unifi.ui.com/` |
| `/login?redirect=https://example.com/` | External redirect discarded | n/a | Not Vulnerable | `result/findings/VULN-20261030-004/report.md` |
| `/account/verify?email=&t=` | URL leaked to GA; no XSS | `/api/verify` 502 | Unresolved | `result/findings/VULN-20261030-002/report.md` |
| `/sso_login/DUMMY/0000.../default` | `$stateChangeError`; no reflection | n/a | Unresolved | `result/unresolved.md` |
| `/fatal/404` | Redirected to `unifi.ubnt.com` | n/a | Out of Scope | `result/out-of-scope.txt` |
| `/forgotpassword` | Redirected to app root; connection failed | n/a | Unresolved | `result/unresolved.md` |

## Pending Routes

All 116 Unresolved routes are listed in `result/inventory/routes.md`. They are
blocked by the same `deviceId required` bootstrap failure. The three
`manage.fatal` / `manage.overview.fatal` / `manage.hotspot.fatal` routes are
Out of Scope because the app redirects to `unifi.ubnt.com`.

## Next Session

1. Obtain a test account with an active UniFi console.
2. Resume at `manage.site.dashboard` and work through `routes.md` in order.
3. Capture WebRTC controller API traffic and test create/edit endpoints for mass
   assignment and cross-account IDOR/BOLA.
