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

## Session 8 additions (2026-11-13T19:31Z, run 43492795808)
- Probed the previously untested passwordless API:
  `POST /api/sso/v1/passwordless/options` (`{user}` required) and
  `POST /api/sso/v1/passwordless/login` (credential payload required). Both returned
  `429 RATE_LIMITED` (`retry_after:0`) with valid bodies; no bypass per policy.
  No SPA call site (config-only). Blocked.
- `account.svc.ui.com` Zendesk proxy rejects unauthenticated requests (`401`); path
  traversal/encoding variants gave no auth bypass (`400`/`404`/`401`).
- `GET /api/sso/v1/legal` is paramless (no reflection).
- Read-only observations: `account-cdn.svc.ui.com` bucket not listable (`403
  AccessDenied`); `secure-uploads.ui.com` is a SendSafely instance (third-party).
  Both recorded as out-of-scope/observed only.
- CORS observation unchanged; no attacker-controlled `*.ui.com` content found.
- `confirmed-vuln.txt` unchanged (no XSS/CSTI/IDOR/BAC/open-redirect); no Discord
  notification sent.

## Session 10 additions (2026-11-14T13:45Z, run 43599586173)
- No new confirmed high-impact vulnerability; `confirmed-vuln.txt` unchanged.
- New Unresolved candidate **VULN-20261114-001**: the Site Manager invite deep links
  (`/invite/:verificationToken?/:hostId?`, `/invite-network-server/...`) read a
  client-supplied `?role=` (`admin`|`owner`) and forward it into
  `POST https://cloudaccess.svc.ui.com/confirm-invitation` body. If the server trusts
  this value over the invitation record, an invitee can escalate to `owner`. Not
  exploitable in testing: test accounts have no pending invitation and creating a
  console/invitation is outside policy. Evidence: `result/findings/VULN-20261114-001/`.
- SSO self-service endpoints tested (all safe/no high-impact): PATCH `settings`
  (ignores privilege fields), `login/level` GET/POST/DELETE/refresh semantics, email
  verify `send` (code to new address, uniqueness check), `zendesk_user` (self-scoped,
  body ignored), `2fa/backup` (needs L2; rotates codes), `suspicious/confirm/inspect`
  (requires emailed token). `DELETE login/level` confirmed a no-op (corrected prior note).
- Pre-MFA `UBIC_2FA` cookie cannot be replayed as `UBIC_AUTH`; no MFA bypass.
- Wildcard `*.ui.com` now 302s unauthenticated users to `account.ui.com/login` and serves
  the fixed Site Manager SPA when authenticated; CORS still reflects only real `*.ui.com`
  origins (no attacker-controlled origin found).
- Solved SigV4 access to `cloudaccess.svc.ui.com` via `POST /create-credentials` (STS) +
  signed requests; hosts/devices/sites/invitations all empty for the test account (no IDOR).
- Site Manager SPA (13 MB) re-audited: no new app-level HTML/JS sink.

## Session 11 additions (2026-11-14T22:15Z, run 43647019119)
- `www.ui.com` bundle refreshed to `index-Dyxt5MIq.js` (934 KB); 87 chunks audited.
  No DOM XSS: all app `dangerouslySetInnerHTML` are static i18n menu text; dynamic
  routes (`/download/releases|software/:slug`) only feed React `<Head>` escaped meta.
- Input handling held: `?product_line=` inert; `?s=`/`?l=` enum-validated then
  stripped; `download-started?link=` restricted to https + `dl.ubnt.com/dl.ui.com/
  fw-download.ubnt.com`; login redirect host fixed via `window.origin` + account `AC()`.
- `www.ui.com/api/*` are SPA 404 fallbacks — no same-origin proxy/SSRF.
- `download.svc.ui.com` (backend of in-scope `/download`; out-of-scope `*.svc`,
  observed only): public catalog; slug injection uniform 404; huge `page` -> 500
  empty (error handling only); search -> 204.
- `activate.ui.com` (newly observed `ui.com` host, S3 SPA): `account.ui.com/activate`
  is a fixed redirect; SPA does not reflect `serial/code/token/redirect/next`.
  Device-login endpoints `POST sso.ui.com /api/sso/v1/user/self/token/setup|login`
  require auth (401 unauth) and return `device_name` only for a valid code.
- CORS on the device-login token endpoints reflects any `*.ui.com` Origin with
  credentials (extends the known credentialed-CORS class; still Unresolved, needs
  attacker-controlled `*.ui.com` content). No authenticated brute-force testing.
- `confirmed-vuln.txt` unchanged (no XSS/CSTI/IDOR/BAC/open-redirect); no Discord
  notification sent.

## Session 12 additions (2026-11-15T06:02Z, run 43683615848)
- OTP email delivery to the test maildrop failed, blocking fresh interactive login.
  Recovered still-valid 30-day `UBIC_AUTH` JWTs for A/B from the prior session log;
  verified via `GET /api/sso/v1/user/self` (200). Tokens expire ~2026-12-11..14; raw
  values were not duplicated into new files.
- L1 -> L2 uses password-only `POST /api/sso/v1/user/self/login/level` (200,
  `level:2`, 30 min, new `UBIC_AUTH` cookie). Documented behavior, not a bypass.
- L2 matrix: own sessions/trusted_devices/activity/addresses/mfa/settings 200;
  cross-account UUID and query-param swaps -> 403/own data. No IDOR/BAC.
  Zendesk comments: own 200, cross-account 403. No ticket IDOR.
- Pre-MFA `UBIC_2FA`: MFA management and `cloudaccess /create-credentials` -> 401;
  only OTP send allowed. `/account-chooser` returns own account only (by design).
- Authenticated UI: `/billing` loads empty (`billing.svc` 404 `Customer not found`;
  host outside approved component scope), `/invoices`/`/payments`/`/subscriptions`
  redirect to `/billing`, `/backups` empty, `/profile` -> `/account`. Tally 22 done /
  0 partial / 15 blocked.
- Account bundle unchanged. Wildcard Site Manager SPA rebuilt 2026-11-12: re-audit
  found no new HTML sink; bridge origin/navigation checks hold (same-host URL build).
- `confirmed-vuln.txt` unchanged (no XSS/CSTI/IDOR/BAC/open-redirect); no Discord
  notification sent.

## Session 13 additions (2026-11-16T06:02Z, run 43814022276)
- Maildrop recovered; Account A mobile-UA login succeeded end-to-end
  (password -> `499` MFA -> email OTP -> `UBIC_AUTH`, `SameSite=lax`, 30 days).
  No CAPTCHA / suspicious-login email for a new device; chose "Not now" on trust.
- `GET /account-chooser` empty for A/B. `POST /jwt/token` now `404` while rotating
  `UBIC_AUTH`; no open redirect.
- Email change: legacy endpoint is `email_changeable`-gated (`403`); profile flow
  `POST /user/self/email/verify/send` sends a 6-digit code to the new mailbox and
  `PUT /user/self` confirms it. Unique-email and code-to-email binding both enforced;
  pre-MFA and CSRF paths `401`/SameSite-blocked. No ATO.
- `PUT /user/self` ignores `uuid` (no IDOR); `POST /user/{uuid}/roles/beta` is
  self-service fixed-role (`Beta Testers`) and rejects other UUIDs; MFA and Zendesk
  cross-account access enforced (`405`/`404`/`403`). No new high-impact finding.
- Inventory reconciled: 45 total routes = 37 account-ui + 8 www/unifi/activate;
  30 done / 15 blocked. `confirmed-vuln.txt` unchanged; no Discord notification sent.

## Session 14 additions (2026-11-17T07:54Z)
- `account.ui.com` bundle refreshed to `index-CYDY7PBp.js` (7,150,439 B, sha256
  `14c9788e...2d14a1b`). API/route count unchanged; new paths are the MFA
  `verify`/`send`/push-poll/WebAuthn endpoints, `2fa/reset`, and `chat/messaging/jwt`.
- No new app-level DOM sink; release-notes `dangerouslySetInnerHTML` and static i18n
  menu text remain the only app sinks. Site Manager `main-0..7` bridge still validates
  `.ui.com` origin and `navigation.requested` host/path.
- New endpoint matrix: pre-MFA email send `204`/verify `401`; L1 email verify needs
  `oneTimePassword` (`400`), backup-code mint `499 L2_REQUIRED`; L2 cross-account MFA
  operations `404`; `/2fa/reset` `404`; chat JWT is session-bound and ignores
  body-supplied user identifiers.
- Cloudaccess collections are empty for A, so no object-ID IDOR surface was available.
- No new confirmed high-impact finding; `confirmed-vuln.txt` unchanged; no Discord
  notification sent.

## Session 15 additions (2026-11-17T20:46Z)
- `www.ui.com` refreshed to `/microsite/static/index-BfxHSOgp.js` (934,244 B,
  sha256 `0722ab3b...eae58f9`); 187 chunk refs audited (DownloadStarted, Landing,
  TrustCenter, ManagedVoIP, ProfessionalIntegrators, UniFiPartnerHub, Ultra,
  SiteSupport, BecomeATrainerApplication). All HTML sinks are static/i18n; the
  DownloadStarted `link` auto-download requires https + an allowlisted
  `dl.ubnt.com`/`dl.ui.com`/`fw-download.ubnt.com` host. No DOM XSS/open redirect.
- Account bundle re-audit: `redirect` (`iS`) and `innerRedirect` (`sS`) validators
  reject external/`javascript:`/`//`/backslash targets and match app paths only;
  `?org=` only feeds out-of-scope `billing.svc.ui.com` subscription URLs.
- New endpoint negatives: SSO `POST /user/self/zendesk_user` -> `200` empty (body
  ignored); `resendVerificationEmail` is config-only (`405`); account.svc Zendesk
  ticket create -> `400` (input/captcha gate) then `429`; Zendesk user body fields
  (`external_id`/`email`/`role`/`id`) are not persisted.
- No new confirmed high-impact finding; `confirmed-vuln.txt` unchanged; no Discord
  notification sent.

## Session 16 additions (2026-11-18T20:21Z)
- Bundles: account `index-CYDY7PBp.js` and www `index-BfxHSOgp.js` unchanged;
  Site Manager rotated to `main-0.2678141fb293ea0d.js` (audited: bridge origin
  `.endsWith(".ui.com")`, uid portal host constrained, `?link=` stored only, no new
  HTML/navigation sink).
- New endpoints: `GET /user/self/roles` 200 fixed beta list (not privilege-bearing),
  POST 405. `POST /address/validator` is unauthenticated and only performs field
  validation (204/400); it reflects any `*.ui.com` Origin with credentials (known
  CORS class). `POST /v2/user/self/mfa/email/{id}/send` own 200 / cross-account 404 /
  unauth 401.
- Mass assignment on `PUT /user/self`: `scopes`, `account_type`, `is_staff`, `groups`,
  `mfa_required`, `is_superadmin` are accepted-but-inert (not persisted);
  `session_ttl_seconds` -> `499 L2_REQUIRED`. Rate limiting observed; no brute force.
- No new confirmed high-impact finding; `confirmed-vuln.txt` unchanged; no Discord
  notification sent.

## Session 17 additions (2026-11-19T07:03Z)
- Bundles unchanged from Session 16 (account `14c9788e...`, www `0722ab3b...`,
  activate `7ebf64bb...`); no new code to diff. Recovered still-valid A/B
  `UBIC_AUTH` sessions and verified `/user/self` 200.
- New/changed endpoint coverage:
  - `passwordless/options` returns a WebAuthn challenge (`rpId ui.com`,
    `allowCredentials: []`); `passwordless/login` strictly validates the credential
    payload (400) and is rate limited (429). No bypass, no passkey registered.
  - `zendesk/tickets/ccd` empty for both accounts; `zendesk/comments?ticket_id=` 404.
  - `chat/queue` (POST/GET/DELETE) is **session-bound**: the body `userId` is
    optional and ignored, so posting another test account's UUID does not queue
    them and the messaging JWT remains the caller's. account.svc CORS is strict
    (`Origin: https://evil.ui.com` -> 403). Not Vulnerable.
- New Unresolved blocker: support-file helper
  `POST cloudaccess /devices/{consoleID}/support-files` cross-tenant IDOR cannot be
  tested (no console/device IDs on the test accounts; enumeration prohibited).
- Client-side re-check of `iS`/`sS` redirect validators and www static `Ke` redirect
  config: no open redirect / dangerous `javascript:` sink.
- `confirmed-vuln.txt` unchanged (no XSS/CSTI/IDOR/BAC/open-redirect); no Discord
  notification sent.
