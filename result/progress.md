# Route Testing Progress — account.ui.com

- Total UI routes discovered: 37
- Fully tested: 9
- Partially tested / blocked: 2
- Pending: 26

Session 2 run: 42843791805, started 2026-11-10T15:24:43Z.

## Fully tested
- `/login` — email + password login works; 2FA required; rate limiting observed (`429 RATE_LIMITED`).
- `/login/mfa` — email OTP (Maildrop) accepted by `POST /api/sso/v1/login/2fa`.
- `/reset-password` — send-reset requires reCAPTCHA (`CHALLENGE_RECAPTCHA_TOKEN_REQUIRED`); anti-bot fields also required. Blocked, no reset email received.
- `/reset-password/password-reset-uuid/:uuid` — confirm is `PUT /api/sso/v1/verify/password/{uuid}` `{password}`; user UUID is NOT the path token (404). Requires emailed reset-request id.
- `/account` — `GET/PUT /api/sso/v1/user/self`; mass-assignment of `role/roles/is_admin/permissions/accounts` ignored; `email` change rejected.
- `/security` — MFA list, sessions, trusted devices, addresses; all cross-account ids protected (404/405/no-op).
- `/requests` — Zendesk ticket list/create; own tickets only.
- `/requests/:ticketId` — cross-account comments return `403 FORBIDDEN`; comment write requires `x-captcha-token`.
- `/login/change-email` — legacy email change is `/user/self` scoped.

## Partially tested / blocked
- `/register` — `POST /api/sso/v2/users` -> `403 CHALLENGE_RECAPTCHA_TOKEN_REQUIRED`.
- `/billing` (+ `/invoices`, `/payments`, `/subscriptions`) — account has no billing customer/orgs; endpoints return `404 Customer not found` / empty `[]`.

## Pending
See `result/inventory/routes.md`. Main untested areas: `/profile`, `/security/suspicious/confirm`,
`/switch`, `/logout`, `/idp/login-result`, `/msp/idp/setup-result`, `/activate`, support forms, backups.

## Candidate issues (not confirmed)
- `sso.ui.com` reflects any `*.ui.com` Origin with `Access-Control-Allow-Credentials: true`
  (needs an attacker-controlled `*.ui.com` origin to matter). See `result/findings/cors-credentialed-reflection.md`.
