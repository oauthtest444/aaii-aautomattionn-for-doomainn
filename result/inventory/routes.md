# UI Route Inventory (account.ui.com)

Source: `assets/index-D5t7M7xo.js` route table (sha256 `ce9950c9…c468`), Chrome MCP navigation.
39 real route paths + catch-all `*` (plus `/verify/success`, which is only a
navigation target and returns 404). External API paths that resemble routes
(`/devices`, `/sso/account`, `/sso/installs`, `/sso/cancel_subscription`) are
NOT app routes and are excluded.

Status key: tested = runtime + source; source = source-only; blocked = environment
blocker; unresolved = needs auth/valid token; pending = not started.

| # | Route | Auth expected | Reachability (unauth) | Status |
|---|-------|---------------|-----------------------|--------|
| 1 | `/` | private | redirects `/login` | tested (private layout) |
| 2 | `/login` | public | 200 | tested (no open redirect; allowlist `MC`) |
| 3 | `/login/mfa` | auth step | login redirect | tested (email MFA login completed) |
| 4 | `/login/trust-device` | auth step | login redirect | tested (chose "Not now") |
| 5 | `/login/create-passkey` | auth step | login redirect | unresolved (not exercised) |
| 6 | `/login/change-email` | auth step | login redirect | source (verified accounts; unverified-only flow) |
| 7 | `/login/change-email/confirm` | auth step | login redirect | source (OTP confirm UI) |
| 8 | `/register` | public | 200 | blocked (reCAPTCHA Enterprise) |
| 9 | `/reset-password` | public | 200 | tested (form; no API on load) |
| 10 | `/reset-password/password-reset-uuid/:uuid` | token | 200 form | tested (arbitrary uuid renders form; no API until submit) |
| 11 | `/verify` | public | redirects `/login` | tested (requires router state) |
| 12 | `/verify/verification-code/:uuid` | token | auto `PUT` | tested (invalid uuid -> API 404) |
| — | `/verify/success` | n/a | 200 SPA catch-all | tested (not a registered route; renders in-app "Page not Found") |
| 13 | `/idp/login-result` | public callback | 200 | tested (400 STATE_MISSING; no redirect) |
| 14 | `/logout` | auth | login redirect | source (POST logout; not exercised) |
| 15 | `/security` | auth | login redirect | tested (MFA/sessions/devices/activity; AAL2 enforced) |
| 16 | `/security/suspicious/confirm` | token | 200 | tested (invalid token -> inspect 400; gated) |
| 17 | `/billing` | auth | login redirect | tested (empty subscriptions/invoices; Services nav) |
| 18 | `/billing/:orgId` | auth | login redirect | unresolved (no org membership) |
| 19 | `/account` | auth | login redirect | tested (profile/email; uniqueness; AAL2) |
| 20 | `/profile` | auth | login redirect | source (same profile components as `/account`) |
| 21 | `/switch` | auth | `/login?login_hint=...` | tested (invalid `redirect` dropped by `MC`) |
| 22 | `/payments` | auth | login redirect | unresolved (no payment methods) |
| 23 | `/payments/3ds` | private | login redirect | tested (unauth -> `/login`; `return_url` allowlist in source) |
| 24 | `/subscriptions` | auth | login redirect | tested (empty state via Services/billing) |
| 25 | `/subscriptions/:service` | auth | login redirect | unresolved (no account) |
| 26 | `/subscriptions/site-support/subscribe` | auth | login redirect | unresolved (no account) |
| 27 | `/subscriptions/cloud-storage/subscribe` | auth | login redirect | unresolved (no account) |
| 28 | `/subscribe` | auth | login redirect | unresolved (no account) |
| 29 | `/invoices` | auth | login redirect | tested (empty invoice list) |
| 30 | `/invoices/:invoiceId` | auth | login redirect | unresolved (no invoice) |
| 31 | `/backups` | auth | login redirect | unresolved (no account) |
| 32 | `/requests` | auth | login redirect | tested (0 tickets) |
| 33 | `/requests/:ticketId` | auth | login redirect | tested (API ownership; no tickets; stored-XSS candidate blocked) |
| 34 | `/mysupport` | redirect | redirects `/requests` | tested |
| 35 | `/supportform` | redirect | redirects `/requests` -> login | tested |
| 36 | `/supportform-uisp` | redirect | `/login?innerRedirect=%2Fsupportform-uisp` | tested |
| 37 | `/supportform-umr` | redirect | `/login?innerRedirect=%2Frequests` | tested |
| 38 | `/activate` | public? | redirects `https://activate.ui.com/` | tested (fixed external redirect) |
| 39 | `/msp/idp/setup-result` | private callback | `/login?innerRedirect=%2Faccount` | tested (same-origin postMessage only) |
| * | catch-all `*` | public | renders "Page not Found" | tested (via `/verify/success`) |

## Continuation note (2026-10-30 07:13Z)

Authenticated continuation re-logged in A and B and re-tested the API surface
behind the remaining private routes. Routes still marked unresolved are blocked
by missing account data (no org, payment method, subscription, invoice, backup,
or ticket), not by lack of testing effort:

- `/billing/:orgId`, `/payments`, `/subscriptions/:service`,
  `/subscriptions/site-support/subscribe`, `/subscriptions/cloud-storage/subscribe`,
  `/subscribe`, `/backups`, `/invoices/:invoiceId` -> their backing APIs return
  `404 Customer not found` / empty lists / `no_msp_membership` for the test
  accounts.
- `/requests/:ticketId` -> account has 0 Zendesk tickets; comment creation still
  requires `x-captcha-token` (CAND-002 unresolved).
- `/login/create-passkey`, `/login/change-email`, `/login/change-email/confirm`
  -> require an unverified account / WebAuthn device; not reachable with the
  verified test accounts.
- `/profile` -> same profile component as `/account` (already tested).

