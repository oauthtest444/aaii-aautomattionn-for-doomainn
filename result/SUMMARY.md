# Run Summary

- Run ID: 41020096449
- Started: 2026-10-30T07:27:00Z
- Finished: 2026-10-30T07:52:00Z
- Time spent: ~25 minutes
- Target: `https://network.unifi.ui.com/6.1.71.0/unifi/site/default/dashboard`
- Target type: URL-list (single URL)
- Target state: `reset` (hash `05daa64f75198bf099bce7b5037a95c88aa4d275aa193003ab6486489ccc6e9b`)
- Agent/model: opencode / `opencode/deepseek-v4.1-flash-free`

## Scope

Only `network.unifi.ui.com` and same-origin assets required to exercise the
target were tested. UI SSO (`account.ui.com`) was used only to authenticate.
See `result/scope.md` and `result/out-of-scope.txt`.

## Tested Surface

- 120 AngularJS UI state routes enumerated from `app.js`.
- 7 same-origin JS bundles downloaded and statically analyzed (SHA-256 recorded).
- Source/sink/flow/listener inventory built.
- Both disposable accounts (A and B) authenticated with email MFA in separate
  browser contexts.
- Runtime attempts: dashboard, `/sites-overview`, `/login?redirect`,
  `/account/verify`, `/sso_login/...`, `/forgotpassword`, `/fatal/:error`.
- Same-origin API probes: `/api/*`, `/status`, `/v2/api/*` → HTTP 502.

## Confirmed Findings

**None high-impact.** `result/confirmed-vuln.txt` intentionally has no entries.

Low-impact observations documented and excluded (not written to
`confirmed-vuln.txt`):

1. `VULN-20261030-001` — missing CSP/HSTS/XFO/XCTO/Referrer-Policy on the app
   shell (clickjacking hardening gap; no action demonstrated). Unresolved/low.
2. `VULN-20261030-002` — `/account/verify` full URL (email + token) sent to
   Google Analytics in the `dl` parameter. Unresolved/low–medium.
3. `VULN-20261030-003` — unvalidated `window.onmessage` dispatcher (no origin
   check); only listener posts to its own iframe. Unresolved/low.
4. `VULN-20261030-004` — `login?redirect=` open-redirect candidate; external
   redirect discarded. **Not Vulnerable.**

## Primary Blocker

Neither test account has an active UniFi console. The app fails at
`webrtc.unifiWebRtcConnector.connect(getActiveDevice())` with
`Option 'deviceId' is required.` before Angular routing, so all 116 data/settings
routes are Unresolved. The controller API is only reachable over the WebRTC
tunnel; direct HTTP returns 502.

Details: `result/unresolved.md`.

## Files of Interest

- `result/inventory/routes.md` — full 120-route matrix
- `result/inventory/javascript.md` — JS hashes/sizes
- `result/inventory/sinks.md`, `listeners.md`, `endpoints.md`
- `result/inventory/flows.md` (via `testing-inventory.json`)
- `result/client-side/network.unifi.ui.com/site-default-dashboard/` — route report,
  manifests, sources/sinks/flows/listeners
- `result/server-side/network.unifi.ui.com/` — API inventory, test ledger, notes
- `result/findings/` — four candidate reports
- `result/testing-inventory.json` — machine-readable inventory (120 routes)

## Discord / Notifications

No notification was sent: no confirmed high-impact finding met the bar.

## Next Steps

Use a test account with an active console, then resume at
`manage.site.dashboard` and test controller create/edit endpoints for mass
assignment and cross-account IDOR/BAC.
