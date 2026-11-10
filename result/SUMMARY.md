# Summary — ui.com bug-bounty run

**Session:** 42850898064 (Session 3), started 2026-11-10T16:05:19Z; continued as Session 4 run 42920600593, started 2026-11-10T23:09:28Z
**Scope tested:** `account.ui.com` (authenticated as test Account A), `sso.ui.com` APIs, `account.svc.ui.com`
**Out of scope (observed only):** `*.ubnt.com`, third-party CDNs/analytics/Sentry, other `*.svc.ui.com` services.

## Confirmed findings (all below the high-impact notification bar)
| ID | Title | Severity | Status |
|----|-------|----------|--------|
| VULN-20261110-001 | Unauthenticated email/username existence oracle on `sso.ui.com` | Low | Confirmed — excluded (account-existence oracle per AGENT.md §9) |
| VULN-20261110-002 | Pre-MFA login response discloses account UUID + MFA metadata | Low | Confirmed — excluded (metadata disclosure) |
| VULN-20261110-003 | 2FA backup-code re-mint accepts CSRF-shaped request with no re-auth | Informational | Corrected in Session 4 — endpoint returns `499 L2_REQUIRED` at assurance level 1; original test was at L2 |
| VULN-20261110-004 | Logout CSRF: `GET /api/sso/v1/logout` clears `.ui.com` auth cookies | Low | Confirmed — excluded (logout/DoS only) |

`result/confirmed-vuln.txt`: no entries (no high-impact XSS/CSTI/IDOR/BAC/open-redirect confirmed).

## Unresolved candidates
- Credentialed CORS reflection on `sso.ui.com` **and `cloudaccess.svc.ui.com`** for any
  `*.ui.com` Origin (`result/findings/cors-credentialed-reflection.md`). Exploitability
  requires an attacker-controlled `*.ui.com` origin. Wildcard `*.ui.com` now resolves to
  CloudFront/S3 serving the fixed "UniFi Site Manager" SPA; no writable bucket,
  Host-header reflection, or attacker-controlled content was found.
- `/logout` accepts `GET` and clears `.ui.com` cookies without a CSRF token (VULN-20261110-004).
- `/reset-password` and `/register` blocked by reCAPTCHA; not bypassed (no brute force attempted per policy).

## Tested surface (highlights)
- Route inventory: 37 routes; 21 fully tested, 10 partial, 6 blocked (`result/progress.md`).
- Auth flows: password login, email OTP MFA (rate-limited), pre-MFA session restrictions.
- Account/security APIs: profile, settings, MFA/backup, sessions, trusted devices, addresses,
  activity, account chooser, search, email-change, Zendesk tickets.
- Negative checks: JWT `alg:none` rejected; cross-account deletes 404/no-op; pre-MFA session
  denied `/user/self/**`; `shopify_login` fixed redirect; `account.svc.ui.com` CORS restricted.

## Notes / limits
- Watchdog terminates runs after ~2 min without output; checkpoints were written continuously.
- No mass fuzzing/brute force/DoS per program policy.
- Test-account credentials and session tokens are not recorded in reports.

## Session 4 additions
- Logged in as Account A and Account B (isolated browser context); verified cross-account
  object access returns `404` for addresses, sessions, trusted devices, and MFA authenticators.
- Verified server-side assurance-level enforcement: level 1 -> `499 L2_REQUIRED` for email
  change, MFA changes, password/username changes, picture upload, and backup-code minting.
- Picture upload: SVG rejected (`415`); PNG stored and served as `image/png`; caller-supplied
  `Content-Type: text/html` is not honored for storage (object `AccessDenied`), so no stored XSS.
- Password reset is protected by reCAPTCHA + `_ubiquiti_private_key` + `apple_devicecheck_token`;
  Host-header spoofing is rejected by CloudFront (`403`).
- Confirmed logout CSRF (VULN-20261110-004) and corrected the backup-code finding.
- `GET /api/sso/v1/user/{uuid}/roles/beta` is method-gated and rejects mismatched UUIDs (`403`).
