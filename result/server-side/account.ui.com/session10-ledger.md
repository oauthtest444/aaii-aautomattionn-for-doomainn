# Session 10 — server-side checks (Account A, authenticated via email OTP)

Base `https://sso.ui.com`; auth cookie `UBIC_AUTH` (.ui.com, HttpOnly). Account A uuid
`d8946fad-2b8e-4cf0-82c5-5d955b57b829`. All requests browser UA + Origin account.ui.com.

| Method | Path | Baseline | Test | Result | Status |
|--------|------|----------|------|--------|--------|
| GET | /api/sso/v1/user/self/settings | 200 settings obj | — | theme/newsletter/passwordless/transparency/suspicious_detection | baseline |
| PATCH | /api/sso/v1/user/self/settings | — | `{"passwordless_enabled":false}` | 200, persisted; restored true | Not Vulnerable |
| PATCH | /api/sso/v1/user/self/settings | — | `{"role":"admin"}`,`{"is_admin":true}`,`{"uuid":"0…0"}` | 200, all ignored | Not Vulnerable |
| PATCH | /api/sso/v1/user/self/settings | — | `{"suspicious_detection":[]}` | ignored (stayed ["signin"]) | Not Vulnerable |
| PATCH | /api/sso/v1/user/self/settings | — | `{"email":"not-an-email"}`,`{"username":"pwnedprobe"}` | ignored; /user/self unchanged | Not Vulnerable |
| GET/PUT | /api/sso/v1/user/self/settings | — | PUT/POST | 405 METHOD_NOT_ALLOWED (PATCH only) | Not Vulnerable |
| POST | /api/sso/v1/user/self/login/level/refresh | level 2, ttl 465 | `{}` | 200 level 2 ttl 1800 (no password) | observe (full session only) |
| DELETE | /api/sso/v1/user/self/login/level | level 2 | — | 200 `{"level":1}` but GET still level 2; sensitive op still 204 | no-op on token |
| POST | /api/sso/v1/user/self/email/verify/send | — | `{"email":probe}` | 204, code emailed to new address | flow reachable |
| POST | /api/sso/v1/user/self/email/verify/send | — | Account B email | 400 `must be unique` | Not Vulnerable (uniqueness) |
| POST | /api/sso/v1/user/self/zendesk_user | — | `{}` / injected B email / name | 200 empty; account.svc zendesk user email unchanged | Not Vulnerable |
| POST | /api/sso/v1/suspicious/confirm/inspect | — | `{}` | 400 confirm_token required | blocked (emailed token) |
| GET | account.svc.ui.com/zendesk/user | — | — | A's Zendesk identity, email correct | baseline |
| POST | /api/sso/v1/legacy/user/self/email/send | — | `{email}` | 403 AUTHENTICATION_FAILED | blocked |
| * | verify/email, user/self/email, etc. | — | POST/PUT/PATCH | 404 (no such confirm route) | Not Vulnerable |

## Auth/MFA checks
- Pre-MFA `UBIC_2FA` session: `/user/self` 401, `/login/level*` 401, `/settings` 403.
- Replaying pre-MFA `UBIC_2FA` JWT as `UBIC_AUTH` (and both cookies) -> 401. No MFA bypass.
- `/login/level/refresh` rejects pre-MFA sessions (401).
