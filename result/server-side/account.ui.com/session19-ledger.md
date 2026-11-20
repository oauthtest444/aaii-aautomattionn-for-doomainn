# Session 19 server-side ledger — 2026-11-20

Target: `ui.com` (domain-only), continuation. Auth: recovered still-valid A/B
`UBIC_AUTH` JWTs from `result/logs/opencode.log`; A was also re-logged-in with
`remember_me` to obtain a fresh session and a populated account chooser.

## Bundle state
- `account.ui.com` still serves `index-DUlTrD1u.js` (6,941,256 B, sha256
  `a26e5447814525949b83fe3e5b39dde4d2145fddfad86f6fd96596782b680f5c`), unchanged
  from Session 18. Prior `index-CYDY7PBp.js` (`14c9788e...`) and
  `index-BAUIMHQa.js` (`29983e5e...`) remain fetchable. No new code to diff.
- Re-verified redirect/host allowlist `NS()`: `hostname.split('.').slice(-2).join('.')`
  must be exactly `ui.com`, `ubnt.com`, or `uisp.com`, protocol http/https. This
  rejects `evilui.com`, `ui.com.evil.com`, and `account.ui.com.evil.com`. No open
  redirect.

## New / changed coverage
| Method | Endpoint | Auth | Test | Result | Status |
|--------|----------|------|------|--------|--------|
| POST | `https://sso.ui.com/api/sso/v1/login` | none | mobile UA, `remember_me:true` | `499` 2FA challenge; sets `UBIC_2FA` and `ACCOUNT_CHOOSER` | Not Vulnerable |
| POST | `https://sso.ui.com/api/sso/v1/login/2fa` | `UBIC_2FA` | email OTP read from Maildrop GraphQL | `200`; sets `UBIC_AUTH`; `/user/self` `200` | Not Vulnerable |
| GET | `https://sso.ui.com/api/sso/v1/account-chooser` | pre-MFA or L1 | own session; B session | returns only caller's own saved entry from `ACCOUNT_CHOOSER` cookie | Not Vulnerable |
| DELETE | `https://sso.ui.com/api/sso/v1/account-chooser/{opaque_id}` | L1 | random id; own id; **B deletes A's id** | always `204`; B's delete does **not** remove A's entry (A still sees it) | Not Vulnerable (cookie-scoped, no IDOR) |
| OPTIONS | `https://sso.ui.com/api/sso/v1/user/self/2fa` | L1 | - | `allow: GET, POST, HEAD, OPTIONS` (no DELETE) | Not Vulnerable |
| GET/POST | `https://sso.ui.com/api/sso/v1/user/self/2fa` | L1 | `{}` | `409 MFA_ALREADY_ENABLED`; no state change | Not Vulnerable |
| POST | `https://sso.ui.com/api/sso/v1/user/self/mfa/totp` | L1 | `{}` | `499 L2_REQUIRED` | Not Vulnerable |
| POST | `https://sso.ui.com/api/sso/v1/password/{user}` | none | `{}`; dummy fields + `X-Forwarded-Host` | `400 VALIDATION_ERROR`; dummy -> `403 PERMISSION_DENIED`; no email sent | Blocked |

## Notes
- Account chooser is a **cookie capability**, not server-side per-user state:
  `GET` decodes the HttpOnly `ACCOUNT_CHOOSER` cookie (Domain `sso.ui.com`,
  SameSite=Strict, Secure). An earlier mixed request that sent A's cookie with B's
  auth cleared A's entry, confirming the cookie (not the auth token) scopes the
  delete. Without the victim's cookie, no cross-account effect.
- The saved-account entry exposes only the user's own `email`, `username`,
  `picture_url`, `opaque_id`, `remembered_at`; no other user's data.
- OTP retrieval is now reproducible via `POST https://api.maildrop.cc/graphql`
  (`inbox(mailbox:)`, `message(mailbox:, id:)`), unblocking future authenticated
  login tests.
- Password reset still requires `_ubiquiti_private_key` + reCAPTCHA +
  `apple_devicecheck_token`; rejected before email generation, so reset-link
  host-header injection cannot be tested. Consistent with Sessions 4/12.
- `/user/self/2fa` is a setup/status endpoint only; it exposes no L1 disable or
  reset method.

## Evidence
- `result/server-side/account.ui.com/traffic/session19-account-chooser-2fa-reset.txt`

## Conclusion
No new confirmed high-impact vulnerability (no XSS/CSTI/IDOR/BAC/open redirect).
`confirmed-vuln.txt` unchanged; no Discord notification sent.
