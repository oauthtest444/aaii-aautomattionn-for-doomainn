# Route Testing Progress — account.ui.com

- Total UI routes discovered: 37
- Fully tested: 21
- Partially tested: 10
- Blocked: 6

Session 3 run: 42850898064, started 2026-11-10T16:05:19Z.
Session 4 run: 42920600593, started 2026-11-10T23:09:28Z (scheduled, resume/preserved).

## Fully tested
- `/login` — email + password works; `POST /api/sso/v1/login` `{user,password}` → `499 required:2fa`; rate limiting (`429`) observed. Pre-MFA response leaks account UUID + MFA metadata (VULN-20261110-002).
- `/login/mfa` — email OTP accepted by `POST /api/sso/v1/login/2fa` `{token}`; wrong tokens `403 INVALID_CREDENTIAL`; throttled after ~7 attempts (`429`, `retry_after`). No practical brute force.
- `/reset-password` — send-reset requires reCAPTCHA (`CHALLENGE_RECAPTCHA_TOKEN_REQUIRED`). Blocked.
- `/reset-password/password-reset-uuid/:uuid` — confirm is `PUT /api/sso/v1/verify/password/{uuid}` `{password}`; user UUID is NOT the path token (404). Needs emailed reset id.
- `/account` — `GET/PUT /api/sso/v1/user/self`; mass-assignment of `role/roles/is_admin/permissions/accounts` ignored; `email` change rejected.
- `/security` — MFA list, sessions, trusted devices, addresses; cross-account ids protected (404/405/no-op). Backup-code re-mint endpoint tested (VULN-20261110-003).
- `/requests` — Zendesk ticket list/create; own tickets only.
- `/requests/:ticketId` — cross-account comments `403 FORBIDDEN`; comment write requires `x-captcha-token`.
- `/login/change-email` — legacy change-email is `/user/self` scoped; `/legacy/.../email/send` → `403 AUTHENTICATION_FAILED`; modern `/email/verify/send` validates uniqueness.
- `/search` (API) — unauthenticated account existence oracle on `/api/sso/v1/search/email|username` (VULN-20261110-001).

## Partially tested / blocked
- `/register` — `POST /api/sso/v2/users` → `403 CHALLENGE_RECAPTCHA_TOKEN_REQUIRED`.
- `/billing` (+ `/invoices`, `/payments`, `/subscriptions`) — no billing customer/orgs; `404 Customer not found` / `[]`.

## Pending
See `result/inventory/routes.md`. Remaining: `/profile` (redirects to `/account`),
`/security/suspicious/confirm`, `/switch`, `/logout`, `/idp/login-result`,
`/msp/idp/setup-result`, `/activate`, `/login/trust-device`, `/login/create-passkey`,
`/verify*`, support forms, backups.

## Candidate / confirmed-low issues
- `sso.ui.com` reflects any `*.ui.com` Origin with `Access-Control-Allow-Credentials: true`
  (needs an attacker-controlled `*.ui.com` origin). `result/findings/cors-credentialed-reflection.md`.
- VULN-20261110-001 — unauthenticated email/username existence oracle (Low, excluded from confirmed-vuln).
- VULN-20261110-002 — pre-MFA login response leaks account UUID/MFA metadata (Low, excluded).
- VULN-20261110-003 — 2FA backup-code re-mint, CSRF-shaped simple request, no re-auth (Low, excluded).

## No confirmed high-impact vulnerability this session
JWT `alg:none` forgery rejected; pre-MFA session cannot reach `/user/self/**`;
`shopify_login` redirects to a fixed host; CORS only reflects `*.ui.com`.

## Session 4 (2026-11-10T23:09Z) — completed checks

### Newly completed routes
- `/login/trust-device` — `POST /api/sso/v1/user/self/device {device_id}` -> `204`; UI trust flow after MFA; trusted-session TTL 31536000s.
- `/verify` and `/verify/verification-code/:uuid` — auth redirects to `/`; `PUT .../verification-code/{uuid}` -> `404` for user UUID, zero UUID, and `1`; token is the emailed request id, not the user UUID.
- `/security/suspicious/confirm` — inspect/confirm require the emailed `confirm_token` field (a wrong `token` body fails validation); decisions are validated; tokens are unguessable.
- `/switch` — logout + `login_hint`; `redirect` validated by `AC()` (http/https, registrable domain in `ui.com`/`ubnt.com`/`uisp.com`); no arbitrary external open redirect.
- `/activate` — client-side `window.location.replace(activate.ui.com)`; no user-controlled sink.
- `/logout` — `GET` (and `POST`) `/api/sso/v1/logout` clears `.ui.com` auth cookies with no CSRF token. New low finding VULN-20261110-004.
- `/msp/idp/setup-result` — `postMessage` uses `targetOrigin = window.location.origin`; safe.
- `/supportform`, `/supportform-umr`, `/mysupport` resolve to `/requests`; `/supportform-uisp` is an external UISP support link.
- `/backups` — `cloudaccess.svc.ui.com` hosts/backups empty for the test account.

### Additional negative results / protections confirmed
- Assurance levels: `GET/POST/DELETE /api/sso/v1/user/self/login/level`; L2 lasts 1800s. Level 1 -> `499 L2_REQUIRED` for email change, add email authenticator, password/username change, picture upload, and backup-code minting.
- Cross-account object access (A objects from B): addresses `PUT/DELETE`, session delete, trusted-device delete, MFA delete/send all `404` (ownership checks hold).
- `/api/sso/v1/user/{uuid}/roles/beta` -> `403 "mismatching UUID"` when the path UUID is not the session user.
- `/api/sso/v1/user/self/activity` ignores a `uuid` query parameter (self-scoped).
- Picture upload: SVG -> `415`; raw PNG -> stored at `account-cdn.svc.ui.com/<uuid>` and served `image/png`; a PNG body with `Content-Type: text/html|text/plain` returns a URL but the object is `AccessDenied` (no content-type control, no stored XSS).
- `POST /api/sso/v1/mfa/webauthn/options` -> `404 "User or verified keys not found"` (no passkeys); registration not reachable.
- Password reset: server requires `_ubiquiti_private_key`, `captcha`, and `apple_devicecheck_token`; invalid captcha -> `403`; spoofed `Host` -> CloudFront `403`.
- CORS: `cloudaccess.svc.ui.com` also reflects any `*.ui.com` Origin with credentials and allows write methods; wildcard `*.ui.com` serves the fixed "UniFi Site Manager" SPA from S3 (no writable path / Host reflection). Impact still unresolved.

### Correction
- VULN-20261110-003 (backup-code re-mint) is not reproducible at assurance level 1 (`499 L2_REQUIRED`); the original test was at L2. Report updated; severity Informational.

### Additional observations (not findings)
- `account.ui.com` CSP: `frame-ancestors 'self' *.ui.com uic.uidev.tools *.uic.uidev.tools`
  (third-party `uidev.tools` namespace is trusted for framing) alongside
  `X-Frame-Options: SAMEORIGIN`. `uic.uidev.tools` and arbitrary subdomains resolve to
  CloudFront but return `403` with no served content, so no clickjacking PoC was possible.
- `script-src` allows `*.ui.com`/`*.ubnt.com` plus `'unsafe-inline'`; wildcard `*.ui.com`
  serves a fixed SPA, so this is only exploitable with an injection on some `ui.com` host.
