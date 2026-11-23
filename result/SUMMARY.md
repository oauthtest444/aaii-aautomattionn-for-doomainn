# Summary — ui.com bug-bounty run

**Session:** multi-session continuation; latest Session 21 (2026-11-20T20:15Z). Originally Session 3 run 42850898064, started 2026-11-10T16:05:19Z; continued through Session 21.
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
- Route inventory (latest): 47 routes = 38 account-ui + 9 www/unifi/activate; 32 done, 15 blocked (`result/progress.md`, `result/testing-inventory.json`).
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

## Session 18 additions (2026-11-20T07:12Z)
- `account.ui.com` rotated to `index-DUlTrD1u.js` (6,941,256 B, sha256
  `a26e5447...b680f5c`); old `index-CYDY7PBp.js`/`index-BAUIMHQa.js` still served.
  Diff: 98 API paths and 42 route paths identical; sink counts unchanged; build /
  dependency refresh only. `www.ui.com`, Site Manager, `activate.ui.com` unchanged.
- Added the previously missing `/subscribe` account-ui route: reads `?product=`
  and redirects only to fixed internal subscription paths; no external or
  `javascript:` target. All-scope tally 46 routes (38 account-ui + 8
  www/unifi/activate), 31 done / 15 blocked.
- Legacy change-email `PUT /api/sso/v1/legacy/user/self/email` still `403
  AUTHENTICATION_FAILED`; `account.ui.com` edge blocks PUT.
- No new confirmed high-impact finding; `confirmed-vuln.txt` unchanged; no Discord
  notification sent.

## Session 19 additions (2026-11-20T07:30Z)
- Fresh A login with `remember_me:true` (mobile UA): password -> `499` email-OTP ->
  OTP read via Maildrop GraphQL -> `/login/2fa` `200` -> new `UBIC_AUTH`. OTP
  retrieval is now reproducible for future authenticated tests.
- Account chooser: `GET /account-chooser` is driven by the HttpOnly
  `ACCOUNT_CHOOSER` cookie (Domain `sso.ui.com`, SameSite=Strict) and returns only
  the caller's own saved entry. `DELETE /account-chooser/{opaque_id}` always `204`
  but is cookie-scoped: B deleting A's opaque_id did **not** remove A's entry.
  Not an IDOR.
- `/user/self/2fa`: OPTIONS allows GET/POST only; GET/POST `{}` -> `409
  MFA_ALREADY_ENABLED`; `/mfa/totp` L1 -> `499 L2_REQUIRED`. No L1 MFA-disable.
- Password reset still gated before email generation: `{}` -> `400
  VALIDATION_ERROR` (missing `_ubiquiti_private_key`, `captcha`,
  `apple_devicecheck_token`); dummy values -> `403 PERMISSION_DENIED`; no email.
  Reset-link host-header injection remains Blocked.
- Redirect host allowlist re-verified: last two hostname labels must be exactly
  `ui.com`/`ubnt.com`/`uisp.com`; `evilui.com`/`ui.com.evil.com` rejected.
- Inventory updated with `/subscribe`, the current bundle hash, and Session 19
  endpoint observations. No new confirmed high-impact finding; `confirmed-vuln.txt`
  unchanged; no Discord notification sent.

## Session 20-21 additions (2026-11-20T19:56Z / 20:15Z)
- **`www.ui.com` rebuilt as a Next.js/Turbopack App Router app on Vercel**
  (CloudFront + nginx legacy backend). App Router route table recovered from
  `03lc1g5u1-quw.js`; dynamic routes `/download/[productFamily]` and
  `/download/software/[slug]`.
- Dynamic params are percent-encoded into the RSC flight payload and
  `canonical`/`og:url`; raw `"`, `<`, `>`, `</script>` do not break out (404 page).
- `?link=` allowlist re-confirmed in new chunk `3h4qiliw__8ql.js`: https +
  hostname in {dl.ubnt.com, dl.ui.com, fw-download.ubnt.com}; 6 bypass variants
  rejected. `dangerouslySetInnerHTML` only static translation strings.
- CVE-2025-29927 `x-middleware-subrequest` payloads ineffective; open-redirect
  probes (`//`, `%2f%2f`, `?redirect=`) -> 404/inert; no Server Actions; no
  `/_next/image`; no source maps. Newsletter form -> Mailchimp (out of scope).
- Inventory now 47 routes (38 account-ui + 9 www/unifi/activate), 32 done / 15 blocked.
  No new confirmed high-impact finding; `confirmed-vuln.txt` unchanged.

## Session 22 additions (2026-11-21T19:14Z)
- Builds unchanged (`account.ui.com` `index-DUlTrD1u.js` sha256 `a26e5447...`;
  Site Manager and `www.ui.com` Next.js unchanged); no new code to diff.
- Fresh Account A session reproduced via Maildrop OTP; used for authenticated tests.
- Mass-assignment/prototype-pollution canaries on `PUT /user/self`,
  `PATCH /user/self/settings` -> no persisted effect (`twofa_enabled`,
  `is_verified` unchanged; no `__proto__` pollution).
- Credentialed CORS on `sso.ui.com` re-confirmed: reflects
  `https://evil.ui.com`/`https://ui.com`/`https://a.b.ui.com` with
  `ACAC:true`; rejects `http`, `evilui.com`, `ui.com.evil.com`, trailing dot,
  port, `null`, non-`ui.com`. Still needs an attacker-controlled `*.ui.com` origin.
- 21-host `*.ui.com` CNAME survey found no dangling/claimable target
  (`ir`->investis, `secure-uploads`->SendSafely, `status`->Statuspage,
  `unifi.dev/stg`->CloudFront 403, `unifi.df` no record).
- Picture upload rejects SVG (`415`), re-encodes to PNG -> no upload XSS.
- Legacy `www.ui.com` `main.min.js` `constructUserPopup()` injects `picture`/
  names/email from `/user/self` via `.html()`/`.append()`: self-XSS only,
  no cross-user delivery -> excluded per policy.
- No route-status change (47 routes, 32 done / 15 blocked). No Discord
  notification sent (notification bar not met).

## Session 23 additions (2026-11-22T06:23Z)
- Builds unchanged (`account.ui.com` `index-DUlTrD1u.js` sha256 `a26e5447...`;
  `www.ui.com` Next.js `dpl=ebfbbf36...`). Fresh A session reproduced via Maildrop
  OTP; browser session re-established from `sso.ui.com` origin.
- Client-side redirect sinks re-verified on the current bundle: login-result
  `xQ()`/`TQ()` apply `NS()` (external host last-two labels ∈ ui.com/ubnt.com/
  uisp.com, http/https only) and `IS()` (internal absolute paths only). `/switch`
  uses `NS()`. No open redirect to an arbitrary external host or `javascript:`.
- Registration captcha re-tested: `site_key=score` (valid key) -> `403
  CHALLENGE_RECAPTCHA_TOKEN_REQUIRED`; `site_key=account_backend` -> `403` invalid
  captcha. `high_risk`/`medium_risk`/`challenge` keys are not valid site keys.
- cloudaccess STS role (`prd-unifi-cloud-access`, acct `297616773877`, `roles:
  ['BETA']`) denied IAM/S3/API-Gateway reads; `/ucore/*`, `/devices`,
  `/api/v1/hosts`, `/sites` empty for A; random device -> `404` no such device.
- Zendesk `search_tickets` caller is feature-flagged off (`allowBillingSearch:
  false`) and `/requests` redirects to `/`; cross-account test remains blocked.
- B email-MFA at pre-MFA unreachable (`sendEmailV2` needs a session; `loginMFA`
  takes only `{token}`), so no second-account session.
- No route-status change (47 routes, 32 done / 15 blocked). No new confirmed
  high-impact finding; `confirmed-vuln.txt` unchanged; no Discord notification.

## Session 24 additions (2026-11-23T07:20Z)
- **B fully unblocked.** Recovered a still-valid Account B full-session `UBIC_AUTH`
  JWT from `result/logs/opencode.log` (payload `UUID=7c5aab2b-...`, `is_verified:true`,
  `L2` claim, exp `1797401599`); validated against `/user/self` → `200`. Also re-ran
  the B password step (`POST /api/sso/v1/login {user,password}`) to mint a fresh
  `UBIC_2FA` and confirmed B's MFA is **email OTP** to B's maildrop (authenticator
  `a646df96-...`), not TOTP. Fresh A `UBIC_2FA`/email OTP (`717101`) flow reproduced
  and completed (`/login/2fa` → `200` + fresh `UBIC_AUTH`).
- New endpoint confirmed: `GET https://sso.ui.com/api/sso/v1/user/{uuid}/picture` is
  **unauthenticated** (`200` with avatar URL for a valid uuid; `404` for unknown).
  Sibling routes (`/user/{uuid}`, `/address`, writes, `/roles/beta`) are properly
  `401`/`403`. Low impact (public CDN avatar + UUID existence oracle) → documented as
  `result/findings/VULN-20261123-001/` and **excluded** from `confirmed-vuln.txt` per §9.
  Only subresource that behaved this way in a 28-name unauth sweep.
- Negative results (no impact): MFA email-send is session-scoped (B session + A
  authenticator id → `404`); `/login/2fa` binds the OTP to the session/user (A code
  under B → `403`, under A → `200`); pre-MFA `UBIC_2FA` rejected on all sensitive
  endpoints; Zendesk `GET /zendesk/comments/{id}` enforces ownership (`own 200`,
  `B→A 403`, unauth `401`) and comment creation requires a valid reCAPTCHA; header
  impersonation ignored; login redirect validator `NS()` robust (last-two-labels +
  http/https, no external/userinfo/backslash bypass).
- Confirmed `POST /user/{uuid}/roles/beta` is `{uuid}`-scoped (`A→B 403`, `B own 204`,
  unauth `401`). Legacy `www.ui.com` `/search/autocomplete/` now `302 → /` (dead).
- No route-status change (47 routes, 32 done / 15 blocked; B-session unlock enables
  future cross-account tests but the previously-blocked routes still need
  captcha/device/invite data). `confirmed-vuln.txt` unchanged; no Discord notification.

## Session 25 (2026-11-23)
- Builds unchanged (account `index-DUlTrD1u.js` sha256 `a26e5447...`; www dpl `ebfbbf36...`).
  A/B sessions recovered and re-validated (`/user/self` `200`).
- **New endpoint** `GET https://sso.ui.com/api/sso/v1/zendesk_login` (not referenced in the
  SPA config; reached via the help-center SSO hop): unauthenticated → `302` to
  `account.ui.com/login`; authenticated → `302` to `ubnt.zendesk.com/access/jwt?jwt=<HS256>`
  (name/email/external_id). The `return_to` value is forwarded by sso but the Zendesk hop
  normalizes it to `https://help.ui.com/hc`, so no open redirect / `javascript:`.
  The `302` reflects `Origin: https://evil.ui.com` with `ACAC:true`, but the JWT is only in
  `Location` (opaque under `redirect:'manual'`; follow lands on non-CORS hosts) → **not
  readable, not exploitable**. Documented Not Vulnerable.
- **Negative** re-tests: no JSONP on sso (`callback`/`jsonp`/`format`/`Accept: application/javascript`
  → `406`/`404`); `shopify_login` fixed redirect; path-form `PUT/DELETE
  /user/{uuid}/address/{id}` → `404`; cross-uuid `POST /user/{B}/address` → `403`; body
  `user` override ignored; B modifying A's disposable address → `404`. Test addresses deleted.
- **Recon:** 94 `ui.com` hosts resolved (passive), no dangling/claimable CNAME.
  `blog/community/design/mobility/help.ui.com` are not in the approved component list →
  observed only, recorded in `out-of-scope.txt`. No attacker-controlled `*.ui.com` origin
  exists, so the credentialed-CORS finding remains blocked.
- www.ui.com hostile cookie / `X-Forwarded-Host` / `X-Forwarded-Proto` / `//`-path probes
  inert (`200`, `x-middleware-rewrite:/us/en`, cookies reset; `//` → `404`). No poisoning.
- No new high-impact finding; `confirmed-vuln.txt` unchanged; no Discord notification.
  Ledger: `result/server-side/account.ui.com/session25-ledger.md`.
