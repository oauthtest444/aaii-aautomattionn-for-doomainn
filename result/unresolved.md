# Unresolved items

## 1. Credentialed CORS on sso.ui.com / cloudaccess.svc.ui.com
- `sso.ui.com` reflects any `https://*.ui.com` Origin with
  `Access-Control-Allow-Credentials: true`; preflight allows write methods.
- Session 5 re-test: `https://ui.com.evil.com`, `https://account.ui.com.evil.com`,
  `https://notui.com`, `http://evil.ui.com`, and `null` are all rejected. Only real
  `*.ui.com` https origins are reflected.
- Exploitability still requires an attacker-controlled `*.ui.com` origin (stored
  HTML/JS, writable bucket, or subdomain takeover). Wildcard `*.ui.com` currently
  serves a fixed SPA. No such origin found.
- Detail: `result/findings/cors-credentialed-reflection.md`.

## 2. Zendesk comment HTML renderer (VULN-20261111-001)
- `account.ui.com` renders Zendesk `html_body` via `html-react-parser` with no
  client-side sanitizer.
- Cross-account comment access is 403 and tickets are own-scoped, so only self-XSS was
  reachable. Server-side (Zendesk) sanitization was not bypass-tested.
- Detail: `result/findings/VULN-20261111-001/report.md`.

## 3. Authenticated-only routes not re-tested this session
- Billing / invoices / payments / subscriptions / MSP IdP / passkey: test account has no
  billing customer, no MSP membership, no registered passkeys. Marked Unresolved in
  prior sessions; unchanged.

## 4. Account creation
- `POST /api/sso/v2/users` requires a reCAPTCHA token; the two test accounts in
  `creds/test-account.txt` were used instead. No brute force attempted (policy).
