# Route Testing Progress — account.ui.com

- Total UI routes discovered: 37
- Fully tested: 10
- Partially tested / blocked: 2
- Pending: 25

Session 3 run: 42850898064, started 2026-11-10T16:05:19Z.

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
