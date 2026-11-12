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

## Session 5 additions (2026-11-11T05:51Z, run 42968379409)
- New in-scope surface tested: `https://www.ui.com/` (marketing microsite). Full
  source/sink/listener review of its 7 route JS bundles -> no attacker-controlled flow,
  no in-scope postMessage listener, redirect component consumes static config only.
  Status Done.
- Deeper audit of the `account.ui.com` SPA bundle (7.1 MB, hash `29983e5e...855c18a`):
  - The bundle does contain HTML sinks (prior note was incomplete): 18
    `dangerouslySetInnerHTML`, of which one is app-level — Zendesk comment `html_body`
    rendered through `html-react-parser` with no sanitizer lib. Candidate
    `VULN-20261111-001`, **Unresolved / self-XSS** because comments are own-ticket scoped
    (cross-account 403). Not added to `confirmed-vuln.txt`.
  - 4 `message` listeners all validated (Sentry/axios same-window; Megaphone requires
    same-parent source + https + `AC()` allowlist + Zod schema; MSP IdP requires exact
    origin). No sink reached.
  - All external redirect sinks gated by `AC()` (http/https + ui.com/ubnt.com/uisp.com
    registrable domain). No open redirect.
- `POST /api/sso/v1/login/email` re-confirmed as an unauthenticated user-existence +
  login-methods oracle (unknown user -> 400); same excluded class as VULN-20261110-001.
- CORS suffix-bypass re-test: `https://ui.com.evil.com` / `https://account.ui.com.evil.com`
  are rejected; only real `*.ui.com` https origins are reflected. Existing CORS
  observation remains Unresolved (no attacker-controlled `*.ui.com` origin).
- `result/confirmed-vuln.txt`: still no high-impact entries (no XSS/CSTI/IDOR/BAC/open-redirect
  confirmed).
- Route count now 38 (37 account.ui.com + 1 www.ui.com). No high-impact vulnerability found
  this session; no Discord notification sent (notification bar not met).

## Session 6 additions (2026-11-11T14:02Z, run 43034033571)
- Exhausted remaining reachable auth edges: login-token API, pre-MFA authorization
  matrix, cross-account OTP binding, JWT HS256 key confusion, change-email gating,
  account-deletion L2. All protections held.
- Zendesk ticket-create rate-limited; comment endpoint still rejects headless
  reCAPTCHA tokens. No new finding.

## Session 7 additions (2026-11-12T00:28Z, run 43127366314)
- **VULN-20261111-001 closed as Not Vulnerable**: Zendesk returns user HTML escaped in
  `html_body` (`&lt;b&gt;`, `&lt;img ...&gt;`), the field the SPA parses; no JS execution.
- Zendesk: `search_tickets`/`search_ccd` captcha-gated; `requester` mass assignment
  ignored; ticket-list query-param IDOR ignored.
- sso re-checks (legal, account-chooser, password-strength, roles, 2FA) negative;
  `/idp/login-result` requires a server-issued state (`STATE_MISSING`).
- New in-scope surface: wildcard `*.ui.com` serves the "UniFi Site Manager" SPA.
  Bundle audit found only a release-notes `dangerouslySetInnerHTML`; no app
  `innerHTML`/DOM XSS; postMessage bridge validates `.ui.com` origin; no open redirect.
- **CORS impact demonstrated**: `POST https://cloudaccess.svc.ui.com/create-credentials`
  mints the session user's AWS STS credentials and credentialed CORS reflects any
  `*.ui.com` origin (verified in-browser from `https://evil.ui.com`). Still Unresolved
  because no attacker-controlled `*.ui.com` content was found; not a confirmed-vuln
  class. See `findings/cors-credentialed-reflection.md`.
- `confirmed-vuln.txt` unchanged (no XSS/CSTI/IDOR/BAC/open-redirect); no Discord
  notification sent.
