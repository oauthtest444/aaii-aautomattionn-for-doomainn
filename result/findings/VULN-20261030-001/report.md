# VULN-20261030-001 — Missing Security Headers on UniFi Network App Shell

- Status: **Unresolved** (configuration weakness confirmed; exploitability/impact
  not demonstrated)
- Type: Security misconfiguration / clickjacking hardening gap
- Asset: https://network.unifi.ui.com/6.1.71.0/unifi/site/default/dashboard
- Authentication: user A and user B (both authenticated during testing)
- Severity: Low (excluded from notification bar)
- Tested at: 2026-10-30T07:39:57Z

## Summary

The in-scope app shell is served without `Content-Security-Policy`,
`Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options`, or
`Referrer-Policy`. The absence of `X-Frame-Options`/`frame-ancestors` means the
app can be framed by a third-party origin. This is a hardening gap; no
state-changing clickjacking action could be demonstrated because the app never
reaches an authenticated controller route for either test account.

## Evidence

- `evidence/dashboard-response-headers.txt` — raw `curl -sD -` response headers
  (HTTP/2 200; `content-type: text/html`; `server: nginx`; no security headers).
- `evidence/dashboard.html` — returned HTML (1,302 bytes).
- `evidence/connection-failed-accountA.png` — authenticated app state after load.

## Reproduction

1. `curl -sD - -o /dev/null 'https://network.unifi.ui.com/6.1.71.0/unifi/site/default/dashboard'`
2. Inspect response headers. No CSP/HSTS/XFO/XCTO/Referrer-Policy are present.
3. Load the URL authenticated. The app shows `Connection failed.` and no
   sensitive state-changing control is reachable.

## Impact Assessment

- Confirmed: framing protection is absent.
- Not demonstrated: a meaningful clickjacking action, because every dashboard
  route is blocked at bootstrap (`deviceId required`).
- Not among the project's target classes (XSS/CSTI/IDOR/BAC/dangerous open
  redirect).

Confirmed-vuln.txt: excluded — low impact, no demonstrated exploitable action,
and outside the notification target classes.

## Remediation

Add at minimum:
`Content-Security-Policy: frame-ancestors 'self'`,
`X-Frame-Options: SAMEORIGIN`,
`Strict-Transport-Security: max-age=31536000; includeSubDomains`,
`X-Content-Type-Options: nosniff`,
`Referrer-Policy: strict-origin-when-cross-origin`.
