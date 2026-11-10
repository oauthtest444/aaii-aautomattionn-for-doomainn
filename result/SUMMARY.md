# Summary — ui.com bug-bounty run

**Session:** 42850898064 (Session 3), started 2026-11-10T16:05:19Z
**Scope tested:** `account.ui.com` (authenticated as test Account A), `sso.ui.com` APIs, `account.svc.ui.com`
**Out of scope (observed only):** `*.ubnt.com`, third-party CDNs/analytics/Sentry, other `*.svc.ui.com` services.

## Confirmed findings (all below the high-impact notification bar)
| ID | Title | Severity | Status |
|----|-------|----------|--------|
| VULN-20261110-001 | Unauthenticated email/username existence oracle on `sso.ui.com` | Low | Confirmed — excluded (account-existence oracle per AGENT.md §9) |
| VULN-20261110-002 | Pre-MFA login response discloses account UUID + MFA metadata | Low | Confirmed — excluded (metadata disclosure) |
| VULN-20261110-003 | 2FA backup-code re-mint accepts CSRF-shaped request with no re-auth | Low | Confirmed behavior — excluded (needs same-site origin or stolen session) |

`result/confirmed-vuln.txt`: no entries (no high-impact XSS/CSTI/IDOR/BAC/open-redirect confirmed).

## Unresolved candidates
- Credentialed CORS reflection on `sso.ui.com` for any `*.ui.com` Origin
  (`result/findings/cors-credentialed-reflection.md`). Exploitability requires an
  attacker-controlled `*.ui.com` origin; none identified within scope.
- `/reset-password` and `/register` blocked by reCAPTCHA; not bypassed (no brute force attempted per policy).

## Tested surface (highlights)
- Route inventory: 37 routes; 10 fully tested, 2 partial/blocked, 25 pending (`result/progress.md`).
- Auth flows: password login, email OTP MFA (rate-limited), pre-MFA session restrictions.
- Account/security APIs: profile, settings, MFA/backup, sessions, trusted devices, addresses,
  activity, account chooser, search, email-change, Zendesk tickets.
- Negative checks: JWT `alg:none` rejected; cross-account deletes 404/no-op; pre-MFA session
  denied `/user/self/**`; `shopify_login` fixed redirect; `account.svc.ui.com` CORS restricted.

## Notes / limits
- Watchdog terminates runs after ~2 min without output; checkpoints were written continuously.
- No mass fuzzing/brute force/DoS per program policy.
- Test-account credentials and session tokens are not recorded in reports.
