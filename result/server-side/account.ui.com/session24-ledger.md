# Session 24 server-side ledger — 2026-11-23

Target: `ui.com` (domain-only), continuation. Auth: fresh Account A session via Maildrop
email OTP (`POST /api/sso/v1/login {user,password}` -> `499` -> `/login/2fa {token}` ->
`200` + fresh `UBIC_AUTH`), and a recovered still-valid **Account B** full-session
`UBIC_AUTH` (payload `UUID=7c5aab2b-e568-40de-a7a5-ec27df1db94b`, `is_verified:true`,
`L2` claim, exp `1797401599`) re-validated at `GET /api/sso/v1/user/self` (`200`,
username `test-account-b`). Fresh B pre-MFA `UBIC_2FA` minted via the password step.

## Bundle state
- `account.ui.com` still serves `index-DUlTrD1u.js` (sha256
  `a26e5447814525949b83fe3e5b39dde4d2145fddfad86f6fd96596782b680f5c`); unchanged since
  Session 18. No new code to diff.

## New / changed coverage
| Method | Endpoint | Auth | Test | Result | Status |
|--------|----------|------|------|--------|--------|
| GET | `https://sso.ui.com/api/sso/v1/user/{uuid}/picture` | none | B uuid, random uuid, A cookie | `200` avatar URL / `404 No SSOUser matches`; sibling routes `401`/`403` | Confirmed Low (excluded, VULN-20261123-001) |
| GET | `/api/sso/v1/user/{uuid}` / `/address` | none | B uuid | `401 is not allowed` | Not Vulnerable |
| POST/PUT/DELETE | `/api/sso/v1/user/{B}/picture`, `/2fa`, `/address`, `/password`, `/email` … | A | cross-account writes | `403 mismatching UUID` / `405` / `404`; nothing returned non-`403/405/404` except public picture GET | Not Vulnerable |
| POST | `/api/sso/v1/user/{uuid}/roles/beta` | session | A->B / B own / unauth | `403 mismatching UUID` / `204` / `401` | Not Vulnerable |
| GET | `/api/sso/v1/user/self`, `/settings`, `/2fa`, `/2fa/backup`, `/addresses`, `/sessions`, `/activity` | `UBIC_2FA` (pre-MFA) | pre-MFA token | `401` or `403 PERMISSION_DENIED`; `/2fa/backup` `401` (full token -> `499 L2_REQUIRED`) | Not Vulnerable |
| POST | `/api/sso/v2/user/self/mfa/email/{id}/send` | `UBIC_2FA` | B session + B auth; B session + A auth; random | `200` + `otp_prefix` / `404 No EmailAuthenticator matches` / `404` | Not Vulnerable (session-scoped) |
| POST | `/api/sso/v1/login/2fa` | `UBIC_2FA` | A OTP `717101` under B session; under A session | `403 INVALID_CREDENTIAL` / `200` + `UBIC_AUTH` | Not Vulnerable (session-bound OTP) |
| GET | `https://account.svc.ui.com/zendesk/comments/{ticketId}` | session | own ticket / B→A / unauth | `200` / `403 FORBIDDEN` / `401` | Not Vulnerable (ownership enforced) |
| POST | `/zendesk/comment/{ticketId}` | session | B→A, no captcha / fake captcha | `400 reCAPTCHA token was not provided` / `403 Did not pass reCAPTCHA validation` | Blocked (captcha) |
| POST | `/zendesk/ticket/{ticketId}/close` | session | B→A | `404 Not found` | Not Vulnerable |
| GET | `/api/sso/v1/user/self` + impersonation headers | A | `X-User-Id`, `X-Forwarded-User`, `X-Remote-User`, `X-Authenticated-User`, … = B uuid | identity unchanged (`d8946fad-...`) | Not Vulnerable |
| GET | `https://sso.ui.com/api/sso/v1/jwt/token?redirect=` | A | external/`//`/userinfo/`javascript:`/backslash variants | `200` (no redirect) for all non-`*.ui.com`; `302` only for real `https://*.ui.com` | Not Vulnerable |
| GET | `https://www.ui.com/search/autocomplete/?q=` | none | `q`/`term`/`query`/`search` | `302 -> /` (route dead) | Not Vulnerable |
| GET | `https://www.ui.com/contact/` | none | form fields | Django CSRF form, `action=""` POST to self; no injectable/prefilled params | Not Vulnerable (not submitted) |

## Notes
- `role_beta` endpoint is `POST` only (`GET` -> `405`); it is `{uuid}`-scoped and only
  adds the fixed `Beta Testers` role for the caller.
- The login redirect validator `NS()` = `new URL(e)`, `hostname.split('.').slice(-2)`
  must be `ui.com`/`ubnt.com`/`uisp.com`, scheme `http:`/`https:`; `IS()` = internal
  absolute path, no `//`/`\`. No external or `javascript:` bypass.
- Credentialed CORS reflection (`*.ui.com` with `ACAC:true`) still has no
  attacker-controlled `*.ui.com` origin; `*.unifi-hosting.ui.com` hosts were **not**
  probed (recorded out of scope in `result/out-of-scope.txt`).
- Evidence: `result/findings/VULN-20261123-001/evidence/picture-unauth.txt`.
