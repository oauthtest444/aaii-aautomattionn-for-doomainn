# VULN-20261030-003 — Unvalidated postMessage Handler (No Origin Check)

- Status: **Unresolved** (no sensitive listener reachable or effect demonstrated)
- Type: postMessage origin-validation weakness
- Asset: https://network.unifi.ui.com/6.1.71.0/unifi/angular/js/app.js
- Authentication: user A / user B
- Severity: Low (informational; excluded)
- Tested at: 2026-10-30T07:45:00Z

## Summary

The `postMessage` service installs `window.onmessage` and forwards `event.data`
to every registered listener without checking `event.origin` or `event.source`.
The only registered listener in the bundle is `unifiIframePostMessage`, which
sends the directive's bound model to its own iframe using target origin `"*"`.
No listener with a sensitive action (credential change, navigation, admin
action) was found or reached.

## Evidence

- `evidence/postmessage-code-snippets.txt` — extracted minified code with offsets.
- Static analysis of `app.js` (SHA-256 in `result/inventory/javascript.md`).

## Reproduction / Analysis

1. `app.js` module 1448: `e.onmessage=function(e){t.forEach(function(t){t.call(t,e.data)})}`
   — no origin/source/schema check.
2. `app.js` module 494: `r=function(n){!0===n.appLoaded&&e.send(i,t.model)}` and
   `e.send(i,t.model)` → `i.postMessage(t.model,"*")`.
3. Runtime: the directive's route (hotspot portal preview) is unreachable because
   bootstrap fails with `Option 'deviceId' is required.`

## Impact Assessment

- The missing origin check is real, but no cross-origin message could trigger a
  sensitive action in the tested state.
- Not Vulnerable / Unresolved for exploitation. Not a confirmed high-impact bug.

Confirmed-vuln.txt: excluded — no demonstrated impact; no sensitive listener.

## Remediation

Validate `event.origin` against an allowlist (`https://network.unifi.ui.com`)
and `event.source` against the expected iframe/window; validate the message
schema before dispatch; send with an explicit target origin instead of `"*"`.
