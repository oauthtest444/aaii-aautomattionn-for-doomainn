# Session Log

## Session 5 — run 42968379409 (scheduled, preserved)
- Start (UTC): 2026-11-11T05:51:09Z
- Agent: opencode / deepseek-v4.1-flash-free
- Target scope: ui.com (domain-only), in-scope components: ui.com apex, www.ui.com, account.ui.com, sso.ui.com APIs, account.svc.ui.com, cloudaccess.svc.ui.com
- Environment: GitHub Actions Linux runner; Chrome 157 headless at 127.0.0.1:9222; chrome-devtools MCP connected
- Tools: opencode, curl, git, node 22, npx, python3, chromium/google-chrome
- Resume decision: preserved (target hash unchanged) — continuing prior sessions' inventory
- Prior coverage: account.ui.com (37 routes, 21 done), sso.ui.com APIs, account.svc.ui.com
- This session focus: untested in-scope surface (ui.com apex / www.ui.com) + remaining partial routes; dedupe against result/testing-inventory.json

## Session 5 result
- End (UTC): 2026-11-11T06:00Z
- No high-impact (XSS/CSTI/IDOR/BAC/open-redirect) vulnerability confirmed.
- New in-scope route reviewed: www.ui.com (no attacker-controlled flow).
- Deeper account.ui.com bundle audit: Zendesk html_body renderer is unsanitized but
  own-ticket scoped (VULN-20261111-001, Unresolved/self-XSS).
- confirmed-vuln.txt unchanged (comments only); no Discord notification sent.
- Large prior-session JS bundle preserved; only sanitized snippets added this session.

## Session 6 — run 43034033571 (scheduled, preserved)
- Start (UTC): 2026-11-11T14:02:45Z
- Agent: opencode / deepseek-v4.1-flash-free
- Target scope: ui.com (domain-only); continuing preserved inventory
- Environment: GitHub Actions Linux; Chrome DevTools MCP reachable (about:blank page present)
- Tools: opencode 1.19.5, curl, git, node v22.23.4, npx, python3 3.14.4, google-chrome-stable
- Resume decision: preserved (target hash unchanged) — continue untested/partial routes only
- Prior coverage: account.ui.com (37 routes; 21 done), www.ui.com, sso/account.svc APIs

## Session 6 result
- End (UTC): 2026-11-11T14:32Z
- No high-impact vulnerability confirmed; confirmed-vuln.txt unchanged.
- Exhausted remaining reachable auth edges: login-token API, pre-MFA authorization,
  cross-account OTP, JWT HS256 key confusion, change-email gating, account deletion L2.
- Zendesk ticket-create remains rate-limited (B reset ~15:19Z, A ~15:24Z); comment
  endpoint still rejects headless reCAPTCHA tokens. Stored-XSS test must resume after
  the reset with a fresh account or valid reCAPTCHA score.
- No Discord notification sent.

## Session 7 — run 43127366314 (scheduled, preserved)
- Start (UTC): 2026-11-12T00:28:32Z
- Agent: opencode / deepseek-v4.1-flash-free
- Target scope: ui.com (domain-only); continuing preserved inventory (target hash unchanged)
- Environment: GitHub Actions Linux; Chrome 157 headless at 127.0.0.1:9222; chrome-devtools MCP reachable
- Tools: opencode 1.19.5, curl, git, node v22.23.4, npx, python3, google-chrome-stable/chromium
- Resume decision: preserved — continue untested/partial surface only
- Focus this session: untested Zendesk search/user endpoints, passwordless/login, legal,
  password-strength, chat messaging JWT, idp login-result; re-check stored-XSS delivery paths

## Session 7 result
- End (UTC): 2026-11-12T00:52Z
- No new confirmed high-impact vulnerability; confirmed-vuln.txt unchanged.
- Zendesk: `search_tickets`/`search_ccd` require `x-captcha-token` (blocked); `requester`
  mass assignment ignored (ticket 6138711 kept A's requester_id); list query-param IDOR
  ignored; VULN-20261111-001 re-tested and closed as Not Vulnerable (Zendesk escapes
  user HTML in `html_body`).
- sso: legal/account-chooser/password-strength/roles/self re-checked; IDOR/2FA-reset
  negative; `/idp/login-result` requires server-issued state (`STATE_MISSING`).
- New in-scope surface: wildcard `*.ui.com` -> "UniFi Site Manager" SPA. Audited bundles
  (`/tmp/unifi`): release-notes `dangerouslySetInnerHTML` only; no app `innerHTML`;
  postMessage bridge validates `.ui.com` origin; no DOM XSS/open redirect.
- Confirmed `cloudaccess.svc.ui.com/create-credentials` mints AWS STS credentials and
  credentialed CORS reflects any `*.ui.com` origin (demonstrated in-browser from
  `https://evil.ui.com`). Impact Unresolved pending attacker-controlled `*.ui.com`
  content; documented in `findings/cors-credentialed-reflection.md`. Not a
  confirmed-vuln class.
- No Discord notification sent.

## Session 8 — run 43492795808 (scheduled, preserved)
- Start (UTC): 2026-11-13T19:31:00Z
- Agent: opencode / deepseek-v4.1-flash-free
- Target scope: ui.com (domain-only); continuing preserved inventory (target hash unchanged)
- Environment: GitHub Actions Linux; Chrome 157 headless at 127.0.0.1:9222; chrome-devtools MCP reachable
- Tools: opencode 1.19.5, curl, git, node v22.23.4, npx, python3 3.14.4, google-chrome-stable
- Resume decision: preserved — continue untested/partial surface only
- Focus this session: untested account.svc/sso API edges (login-token, passwordless,
  settings mass-assignment, account-chooser, cloudaccess), cloudaccess CORS impact,
  and any remaining partial routes; dedupe against result/testing-inventory.json

## Session 8 result
- End (UTC): 2026-11-13T19:41Z
- No new confirmed high-impact vulnerability; confirmed-vuln.txt unchanged.
- New unreached API discovered in the SPA paths config and probed unauthenticated:
  `POST /api/sso/v1/passwordless/options` (body `{user}` required) and
  `POST /api/sso/v1/passwordless/login` (credential payload required). Both returned
  `429 RATE_LIMITED` (`retry_after:0`) even with a schema-valid body; no bypass/brute
  force attempted per rate-limit policy. No call site in the SPA bundle (config-only).
  Recorded as blocked in testing-inventory.
- account.svc.ui.com proxy: unauthenticated `/zendesk/user`, `/zendesk/tickets`,
  `/zendesk/tickets/closed`, `/zendesk/comment` all `401 UNAUTHORIZED`; path-traversal
  and encoding variants (`..`, `%2e%2e`, `..%2f`, `..;/`, `%00`, `//`) produced no auth
  bypass (401/400/404 only).
- `GET /api/sso/v1/legal` is a paramless GET returning revision strings; no reflection.
- Read-only checks: `account-cdn.svc.ui.com` bucket root and `?list-type=2` return
  `403 AccessDenied` (not world-listable); recorded but account-cdn remains out of scope.
  `secure-uploads.ui.com` is a SendSafely instance (301 -> `/secure/home/`, nginx);
  third-party service, observed only.
- CORS observation unchanged: only real `https://*.ui.com` origins reflected; no
  attacker-controlled `*.ui.com` content found. Unresolved, not a confirmed-vuln class.
- No Discord notification sent.

## Session 9 — run 43564092459 (scheduled, preserved)
- Start (UTC): 2026-11-14T06:00:00Z
- Agent: opencode / deepseek-v4.1-flash-free
- Target scope: ui.com (domain-only); continuing preserved inventory (target hash unchanged)
- Environment: GitHub Actions Linux; Chrome 157 headless at 127.0.0.1:9222; chrome-devtools MCP reachable (about:blank)
- Tools: opencode, curl, git, node v22.23.4, npx, python3, google-chrome-stable
- Resume decision: preserved — continue untested/partial surface only
- Focus this session: untested account.svc/sso endpoints (zendesk_user, /zendesk/user, ccd),
  partial routes (billing/subscriptions/suspicious-confirm), and any new in-scope surface;
  dedupe against result/testing-inventory.json

## Session 9 result
- End (UTC): 2026-11-14T06:20Z
- No new confirmed high-impact vulnerability; confirmed-vuln.txt unchanged.
- New Site Manager paths config exposed SSO routes: `/api/sso/v1/jwt/token`,
  `/api/sso/v1/user/{userId}/address`, `/api/sso/v1/user/{userId}/console_groups`.
- `GET /api/sso/v1/jwt/token` mints an HS512 JWT (`uuid`, `is_verified`, `exp`,
  `ui_session_id`) for the authenticated user. Edge WAF returns HTML 403 unless a
  browser UA is sent (same for other sso GETs). `?redirect=` triggers 302 to
  `https://sso.ubnt.com/api/sso/v1/jwt/token/login/<jwt>?redirect=<target>`; redirect
  validated to `*.ui.com` only (`evil.com`, `//evil.com`, `javascript:`, `/\evil.com`,
  `%2F%2Fevil.com` -> no redirect). Second hop on sso.ubnt.com returns 404.
- `GET /api/sso/v1/user/{uuid}` / `/address` / `/console_groups` and POST `/address`
  `/console_groups` -> `403 mismatching UUID` for any uuid other than the session user;
  POST `/address` with body `user=<other uuid>` still writes to self (user ignored).
  No IDOR/mass-assignment.
- `GET /api/sso/v1/account-chooser?<anyparam>` -> 200 `{"accounts":[]}` for the test
  account (paramless GET hits edge 403; POST -> 405). Rate-limited (429) after several
  requests. Empty saved-account list, no disclosure.
- Re-confirmed Zendesk ticket renderer parses only `html_body` via html-react-parser
  (already-closed VULN-20261111-001); no other ticket field reaches the parser.

## Session 10 — run 43599586173 (scheduled, preserved)
- Start (UTC): 2026-11-14T13:25:15Z
- Agent: opencode / deepseek-v4.1-flash-free
- Target scope: ui.com (domain-only); continuing preserved inventory (target hash unchanged)
- Environment: GitHub Actions Linux; Chrome DevTools MCP reachable (about:blank); Chrome headless at 127.0.0.1:9222
- Tools: opencode 1.19.5, curl 8.18.0, git 2.56.1, node v22.23.4, npx 10.9.9, python3 3.14.4
- Resume decision: preserved — continue untested/partial surface only
- New observation: wildcard `*.ui.com` now 302-redirects unauthenticated requests to
  `account.ui.com/login?redirect=https://<sub>.ui.com/` (previously served the fixed
  Site Manager SPA). Re-checking redirect handling and the CORS trust boundary.
- Focus this session: remaining untested SSO self-service endpoints (settings, 2fa
  backup/reset, login level refresh, email verify, picture), suspicious-confirm flow,
  and the wildcard-subdomain redirect behavior; dedupe against testing-inventory.json

## Session 10 result
- End (UTC): 2026-11-14T13:45Z
- No new confirmed high-impact vulnerability; `confirmed-vuln.txt` unchanged; no Discord
  notification. One new Unresolved candidate: VULN-20261114-001.
- Auth/MFA: logged in as Account A (maildrop OTP), MFA verified again. Created a pre-MFA
  `UBIC_2FA` jar and confirmed it cannot be used as `UBIC_AUTH` (401). No MFA bypass.
- `PATCH /api/sso/v1/user/self/settings` works (PUT/POST -> 405). `passwordless_enabled`
  persists (restored to true); `role`, `is_admin`, `uuid`, `suspicious_detection`,
  `email`, `username` are ignored — no mass assignment.
- Assurance level: `GET /user/self/login/level` -> `{level,time_left_seconds}`;
  `POST .../level {password}` re-auths to L2 (password only, by design). `.../level/refresh`
  at L2 -> 200 (extends to 1800s), at genuine L1 -> `499 L2_REQUIRED`, pre-MFA -> 401.
  `DELETE .../level` returns `{level:1}` but is a NO-OP on the token (corrected prior note).
- Email change: `POST /user/self/email/verify/send {email}` -> 204 and sends a
  confirmation code to the new address; an address already used by another account ->
  400 "must be unique". Confirmation route not found (all probes 404).
- `POST /user/self/zendesk_user` -> 200 empty; body `email`/`name` ignored; the
  `account.svc.ui.com/zendesk/user` email is unchanged (self-scoped).
- `POST /user/self/2fa/backup {}` at L2 -> 201 and rotated the 10 backup codes
  (VULN-20261110-003, informational; requires L2). `POST /user/self/mfa` and
  `/user/self/roles` -> 405.
- `POST /suspicious/confirm/inspect` -> 400 `confirm_token` required (emailed token;
  blocked).
- Wildcard `*.ui.com`: unauthenticated -> 302 to
  `account.ui.com/login?redirect=https://<sub>.ui.com/`; authenticated -> 200 fixed
  "UniFi Site Manager" SPA from S3. CORS re-check: only real `*.ui.com` https origins
  are reflected with credentials; `null`, trailing-dot, port, `evilui.com`,
  `ui.com.evil.com`, percent-encoded all rejected. Uppercase origin reflection is not
  exploitable (browsers send lowercase Origin).
- Site Manager SPA audit (`/tmp/unifi10`, 13 MB): no new app-level XSS sink (release-notes
  `dangerouslySetInnerHTML` is API-sourced; `innerHTML` only in libraries; no
  `eval`/`document.write`). Deep-link invite routes read `?role=` and forward it into
  `POST cloudaccess.svc.ui.com/confirm-invitation` body — candidate VULN-20261114-001
  (Unresolved; test account has no invitation, bogus device -> DEVICE_OFFLINE).
- Solved SigV4 access to `cloudaccess.svc.ui.com` via `POST /create-credentials` +
  botocore signing: `/api/v1/hosts`, `/devices`, `/sites` and `/invitations?type=all`
  all return empty for the no-console test account. No IDOR reachable.

## Session 11 (run 43647019119 — continuation)
- Start (UTC): 2026-11-14T22:15Z
- Target: `ui.com` (domain-only). Resume state decision `preserved`
  (target_hash `3353d9c6...933c8a`, unchanged since Session 1 reset).
- Agent/model: opencode / deepseek-v4.1-flash-free
- Environment: GitHub Actions Linux runner; Chrome 157.0.8103.78 headless at
  `127.0.0.1:9222`; Chrome DevTools MCP connected (`list_pages` OK).
- Tool versions: curl 8.18.0, git, node v22.23.4, npx, python3 3.14.4,
  google-chrome-stable / chromium present.
- Connectivity: `account.ui.com/login` 200, `www.ui.com/` 200, `sso.ui.com/` 404
  (root; APIs respond).
- Prior state loaded: SUMMARY.md, scope.md, progress.md, testing-inventory.json,
  inventory/*, findings/*, unresolved.md, out-of-scope.txt. 38 routes recorded;
  no confirmed high-impact findings; `confirmed-vuln.txt` has no entries.
- Plan: continue with untested/newly discovered in-scope UI routes (focus on
  `www.ui.com` marketing routes not yet reviewed plus remaining `account.ui.com`
  edges), one route at a time, client-side then server-side.

### Session 11 results
- `www.ui.com` served a refreshed bundle `index-Dyxt5MIq.js` (934 KB); 87 chunks
  downloaded to `/tmp/ui11/all/` and swept with the client-side source/sink regexes.
- Marketing routes reviewed (read-only + harmless markers, no state change):
  - `/download?product_line=...` — value not reflected in HTML/DOM/network.
  - `/download/releases/:slug`, `/download/software/:slug` — slug only reaches the
    `Head` component; `Head-CU3ir911.js` renders React `<title>/<meta>` (no
    `innerHTML`), and the canonical URL is React-escaped. No injection.
  - `/download/unifi/download-started?link=...` — `link` requires `https:` and an
    exact hostname in `[dl.ubnt.com, dl.ui.com, fw-download.ubnt.com]`; external and
    `javascript:` values are stripped; no redirect.
  - `SiteSettingsContext` `?s=`/`?l=` — validated against store/language enum maps,
    then stripped via router `replace`; no open redirect. `appview=true` only
    toggles the embedded layout.
  - `AuthContext` login builds `account.ui.com/login?redirect=https://www.ui.com/<path>`
    from `window.origin` (host fixed) and the account SPA re-validates via `AC()`
    (last-two-label ∈ `ui.com|ubnt.com|uisp.com`, http/https). No open redirect.
    `GOOGLE_API_KEY` is a public reCAPTCHA v3 site key.
  - All app-level `dangerouslySetInnerHTML` in `www.ui.com` chunks are static i18n
    menu descriptions (`t(e.description)`), not URL/API data.
  - `www.ui.com/api/*` (`/api/geoip`, `/api/sso/v1/user/self`, ...) are SPA 404
    fallbacks — no same-origin proxy/SSRF.
- `download.svc.ui.com` (backend of the in-scope `/download` route; a `*.svc.ui.com`
  host recorded out-of-scope, observed only):
  - Public catalog JSON only. Slug probes (`'`, `"`, traversal, wildcard) all
    `404` with no error diff; `%00` -> `400` (CloudFront);
    `page=999999999999999999999` -> `500` empty body (error handling only, not
    reportable); `POST /v1/downloads/search {"search":"unifi"}` -> `204`.
- `activate.ui.com` (newly observed `ui.com` host; static S3 SPA `/assets/index-1CNh1WqS.js`):
  - `account.ui.com/activate` is a fixed redirect: `window.location.replace(
    "https://activate.ui.com")` (no user-controlled target).
  - SPA returns 200 for all paths; `serial|code|token|redirect|next` query/path
    markers are not reflected (React SPA).
  - Device-login flow: user enters a 5-char device code -> `POST
    sso.ui.com/api/sso/v1/user/self/token/setup {token}` returns `device_name` ->
    `POST .../token/login {token}` approves. Both require an authenticated session
    (unauthenticated -> `401`).
  - CORS on both token endpoints reflects any `*.ui.com` `Origin` (e.g.
    `https://evil.ui.com`) with `Access-Control-Allow-Credentials: true`; this
    extends the known credentialed-CORS issue to the device-login flow. Remains
    Unresolved: still requires attacker-controlled `*.ui.com` content. No
    authenticated brute-force/rate-limit testing performed (consent-flow direction
    limits impact; avoid account lockout).
- New confirmed high-impact findings: none. `confirmed-vuln.txt` unchanged; no
  Discord notification sent.

## Session 12 — run_id=43683615848, started 2026-11-15T06:02:41Z
- Event: schedule; decision=preserved (target hash 3353d9c6...733c8a unchanged)
- Agent/model: opencode / deepseek-v4.1-flash-free
- Environment: Linux runner; Chrome 157.0.8103.78 headless via chrome-devtools MCP (port 9222)
- Tool versions: opencode 1.19.5, node v22.23.4, python3 3.14.4, curl/jq present
- Scope: ui.com domain (focus account.ui.com, www.ui.com, sso.ui.com, unifi.ui.com)
- Resume: continuing from Session 11; no open high-impact findings.

### Session 12 results
- OTP mail delivery to the maildrop inbox failed (A last mail 2026-11-14T13:29:26Z;
  B none). `/2fa/email` resends returned 200 with fresh `otp_prefix` but no mail, so
  fresh interactive login is blocked. No status change on the target.
- Recovered still-valid 30-day `UBIC_AUTH` JWTs for A and B from
  `result/logs/opencode.log` (grep `UBIC_AUTH=`); verified `GET
  /api/sso/v1/user/self` -> 200. Expiries ~2026-12-11..14. Raw token values were not
  written to any new file.
- Upgraded A/B L1 -> L2 with password-only
  `POST /api/sso/v1/user/self/login/level {"password":...}` -> `{level:2,
  time_left_seconds:1800}` and a new `UBIC_AUTH` cookie (old one stays L1);
  `/tmp/A2.jar`, `/tmp/B2.jar`, re-run to extend. Documented behavior, not a bypass.
- L2 authorization matrix (non-destructive): own `/user/self`, `sessions`,
  `trusted_devices`, `activity`, `addresses`, `mfa` (metadata), `settings` -> 200;
  cross-account UUID swaps -> 403 `mismatching UUID`; `?uuid=`/`?user=` params
  ignored (own data). `PATCH settings` still ignores privilege fields.
- Zendesk: own comments 200; cross-account A<->B `GET /zendesk/comments/{ticket}`
  -> 403 `FORBIDDEN`. No ticket IDOR.
- Pre-MFA `UBIC_2FA` matrix: `/user/self/mfa` GET and TOTP/email add/remove ->
  401 `is not allowed`; `cloudaccess /create-credentials` -> 401. Only OTP send is
  allowed. `/account-chooser` returns caller's own account only (by design).
- Browser route completion with injected L2 cookie: `/billing` loads (empty;
  `billing.svc /api/v2/customers/self/...` 404 `Customer not found`, `/products`
  200), `/invoices`, `/payments`, `/subscriptions` redirect to `/billing`,
  `/backups` renders empty, `/profile` -> `/account`. `billing.svc.ui.com` remains
  outside the approved component scope; calls were UI-observed only.
- Account SPA bundle unchanged (`index-BAUIMHQa.js`, sha256
  `29983e5e6456bd59b9c4ecbf8283cecf80afca76bbed01b48be19b092855c18a`).
- Wildcard `unifi.ui.com` Site Manager SPA is a new build (index last-modified
  2026-11-12; 15 chunks to `/tmp/unifi2/`). Re-audited: only app-level
  `dangerouslySetInnerHTML` = release-notes; bridge requires origin hostname
  `.endsWith(".ui.com")` and `host === "unifi"` for `navigation.requested`; URL
  builder normalizes host so backslash/path tricks stay same-host. No new sink.
- Route tally updated to 22 done / 0 partial / 15 blocked (37 account routes);
  blocked reasons are missing billing data, emailed tokens, attestation/passkey, or
  server-issued state.
- New confirmed high-impact findings: none. `confirmed-vuln.txt` unchanged; no
  Discord notification sent.

## Session 13 — run 43814022276, started 2026-11-16T06:02:20Z
- Event: schedule; decision=preserved (target hash `3353d9c6...733c8a` unchanged)
- Agent/model: opencode / deepseek-v4.1-flash-free
- Environment: Linux runner; Chrome via chrome-devtools MCP; target bundles unchanged
- Scope: `account.ui.com`, `sso.ui.com`, `account.svc.ui.com`,
  `cloudaccess.svc.ui.com`; `www.ui.com`/`activate.ui.com` prior results reused
- Resume: continuing from Session 12; no open high-impact findings.

### Session 13 results
- Maildrop delivery recovered. A fresh interactive login of Account A succeeded via
  mobile-Safari UA (isolated context): password -> `499` MFA challenge -> email OTP
  `KK947859` -> `/login/2fa` 200 -> `UBIC_AUTH` cookie (`SameSite=lax`, HttpOnly,
  `Domain=.ui.com`, 30 days). Trust-device prompt shown; chose "Not now".
- The `499` login response contains only `user.id` + `default_mfa` (no
  `email_changeable`); this is the normal MFA challenge, not a suspicious-login state.
  A new mobile device/UAs did **not** trigger a suspicious-login email or CAPTCHA.
- `GET /api/sso/v1/account-chooser` returns `200` with an empty body for both A and B;
  no saved accounts, no IDOR.
- `POST /api/sso/v1/jwt/token` now returns `404` (Allow: GET, OPTIONS) while still
  setting a fresh `UBIC_AUTH` cookie; the prior open-redirect test is no longer
  reproducible. Cookie claims show `L2` is a last-2FA timestamp, not an expiry.
- Legacy email-change path: `POST /api/sso/v1/legacy/user/self/email/send` with a
  full `UBIC_AUTH` cookie and `{email,password}` -> `403 AUTHENTICATION_FAILED`
  (wrong-password shape); with a fresh pre-MFA `UBIC_2FA` cookie ->
  `403 PERMISSION_DENIED`. The UI gates it on `email_changeable`, which is only set
  on a login `499` response; A's response lacks the flag, so the route is unreachable
  and the endpoint is not a standalone ATO primitive.
- Profile email change (new API): `POST /api/sso/v1/user/self/email/verify/send`
  with an authenticated session and `{email}` -> `204` and sends a 6-digit code to
  the new address (tested `opencode-s13@maildrop.cc`; code `926854`, 10 min).
  Confirmation is `PUT /api/sso/v1/user/self` with
  `{email,email_change_verification_code,create_mfa}`.
  - Unique email enforced at request time: B's email -> `400 This field must be
    unique`.
  - Code is bound to the requested address: using B's email at confirm with a code
    sent to `opencode-s13` -> `400 Email change request not found`.
  - Pre-MFA `UBIC_2FA` -> `401` for send and `PUT`.
  - The flow is session-only (no password re-auth), but requires control of the new
    mailbox; `UBIC_AUTH` is `SameSite=lax`, so cross-site POST CSRF does not carry it.
    Not a confirmed high-impact bug.
- Profile mass assignment / IDOR: `PUT /api/sso/v1/user/self` with `uuid: B` still
  updated only A (`first_name`); B unchanged (`404`/own data). Restored A's
  `first_name` to `OpenCodeTest`. No BAC/IDOR.
- Early-access roles: `POST /api/sso/v1/user/{uuid}/roles/beta {}` is self-service:
  own UUID -> `204` (adds fixed `Beta Testers`); B/random UUID -> `403 mismatching
  UUID`; body `role`/`roles` values are ignored (fixed role, no arbitrary assignment).
  A now carries `Beta Testers` as a test artifact; low impact, no privilege escalation.
- MFA cross-account IDOR: A session on B's email authenticator
  (`a646df96-...`) `GET`/`PUT`/`POST /mfa/email/{id}` -> `405`;
  `/mfa/email/{id}/send` -> `404 No EmailAuthenticator matches`; B's TOTP
  `PUT /mfa/totp/{id}` -> `404 No TOTPAuthenticator matches`. Ownership enforced.
- Zendesk: A's ticket still returns (`6138711`); B -> A `GET /zendesk/comments/6138711`
  -> `403 FORBIDDEN`, `/zendesk/tickets/6138711` -> `404`; `search_tickets` remains
  reCAPTCHA-gated (`400`). No ticket IDOR.
- Client-side re-audit: `account.js` unchanged (`29983e5e...55c18a`); `window.open`
  sinks (`Bw` external links, consent popup, `_me`) only consume fixed/internal or
  server IdP URLs; Site Manager `account-bridge` trusts `*.ui.com` origins but
  `navigation.requested` validates a single-slash path and URL construction keeps
  the host; no attacker-controlled source found.
- Route tally reconciliation: `testing-inventory.json` has 45 routes = 37
  `account.ui.com` + 8 `www.ui.com`/`unifi.ui.com`/`activate.ui.com` routes;
  status 30 done / 15 blocked. `progress.md`'s "37 account routes" is the
  account-ui subset and is consistent with the inventory.
- New confirmed high-impact findings: none. `confirmed-vuln.txt` unchanged; no
  Discord notification sent.

### Session 14 — 2026-11-17 (run continuing, 07:54Z)
- Account bundle changed: `index-CYDY7PBp.js` (7,150,439 B, sha256
  `14c9788ebdf32e9a2d9763821836589c4703e5910a2aade9f5e55ffce2d14a1b`) now served
  instead of `index-BAUIMHQa.js`; same 99 `/api/*` paths and 42 route paths.
- New bundle paths: `/mfa/{type}/{id}/verify`, `/mfa/{type}/{id}/send`,
  `/mfa/push/{id}/poll-setup`, `/mfa/push/poll-login`, `/mfa/webauthn/{options,login}`,
  `/2fa/reset`, `/chat/messaging/jwt`. No new app-level DOM sink: `dangerouslySetInnerHTML`
  remains static i18n menu text (www) and release-notes blocks; `.innerHTML` are library
  code; postMessage bridge still validates `*.ui.com` and keeps `targetOrigin` at the
  current origin for the MSP result page.
- New endpoint checks: pre-MFA email `/send` -> `204` (own), email `/verify` -> `401`;
  L1 own email `/verify` -> `400` (`oneTimePassword` required), `POST /2fa/backup` -> `499
  L2_REQUIRED`; L2 cross-account B email/TOTP `/verify`, `/send`, `DELETE` -> `404`;
  `/2fa/reset` -> `404`; `POST /chat/messaging/jwt` ignores body `email`/`external_id`/
  `user_id` and binds the JWT to the session (`401` unauth).
- Fresh login `499` body still lacks `email_changeable`; authenticator metadata unchanged.
- Site Manager `main-0..7` audited: bridge origin check `.endsWith(".ui.com")` and
  `navigation.requested` requires `host === "unifi"` plus a single-slash path; no new sink.
- Cloudaccess `hosts`/`sites`/`archived-backups`/`invitations`/`colocated-hosts` return
  `200` with empty collections for A; no object IDs for IDOR testing.
- No new confirmed high-impact finding; `confirmed-vuln.txt` unchanged; no Discord
  notification sent.
- Reset/host-injection probe: `POST /api/sso/v1/password/{email}` now returns
  `400 VALIDATION_ERROR` listing `captcha`, `_ubiquiti_private_key`, and
  `apple_devicecheck_token`; a score-key token yields `403
  CHALLENGE_RECAPTCHA_TOKEN_REQUIRED`, and the forced challenge remains unsolved
  (no automated CAPTCHA solving). Password-reset email link/host-header poisoning
  is therefore blocked by reCAPTCHA, not tested.
- Zendesk cross-account search still gated: search requires header
  `x-captcha-token`; B ticket creation returned `429 RATE_LIMITED`, so no fresh
  B ticket marker was available. `search_tickets` remains dead UI code and
  untested for cross-tenant scope.
- Maildrop GraphQL confirmed working (`POST https://api.maildrop.cc/graphql`),
  but both inboxes were empty at test time; no email-token flows could resume.

### Session 15 — 2026-11-17 (run continuing, 20:46Z)
- Preflight OK: opencode/curl/git/node/npx/python3 + Chrome 158 at 127.0.0.1:9222; MCP tools live.
- Continuation (target hash 3353d9c6... unchanged, decision=preserved). Read SUMMARY,
  scope, progress, inventory, findings, unresolved.
- New asset observed: `www.ui.com` now serves `/microsite/static/index-BfxHSOgp.js`
  (previous Session 11 bundle was `index-Dyxt5MIq.js`). Auditing the changed bundle.
- Bundle/chunk audit completed for the changed `www.ui.com` build:
  `/microsite/static/index-BfxHSOgp.js` (934,244 B, sha256
  `0722ab3b72947505fffdf3b406b68d957e204215c00a26489eba112c8eae58f9`) with 187
  chunk refs; downloaded 156 + 99 route chunks under `/tmp/ui15/all`, `/tmp/ui15/all2`.
- `DownloadStarted-C7jLKP1G.js`: the `link` param is stored only if
  `I(new URL(link, origin).hostname)` is one of `dl.ubnt.com`, `dl.ui.com`,
  `fw-download.ubnt.com`; the auto-clicked anchor then uses `F(link)` which
  additionally requires `protocol === "https:"`. `javascript:`, `//host`, and
  external hosts are rejected; the `v` version only interpolates into a fixed
  `https://community.ui.com/releases/r/...` path. No open redirect / DOM XSS.
- Other `dangerouslySetInnerHTML` chunks (`Landing`, `TrustCenter`, `ManagedVoIP`,
  `ProfessionalIntegrators`, `UniFiPartnerHub`, `Ultra`, `SiteSupport`,
  `BecomeATrainerApplication`) render only i18n strings, static config data, or
  static trainer objects; `Landing` hash parser is
  `Xe = e => e.replace(/^#/,'') === 'partners' ? 1 : 0`. No attacker-controlled source.
- `BecomeATrainerApplication` posts a CSRF+reCAPTCHA form (client site keys) and
  references `direct.svc.ui.com/public/training-events`; `direct.svc` is outside the
  approved component list, so UI-observed only. No reflection/sink.
- Account bundle re-audit: login `redirect` uses `iS` (host suffix must be `ui.com`;
  protocol http/https); `innerRedirect` uses `sS` (must start `/`, not `//`, no `\`,
  and match an app path constant). No open redirect / `javascript:` sink.
  The `?org=` param flows only into `billing.svc.ui.com` subscription paths
  (outside approved components).
- Endpoint checks: `POST https://sso.ui.com/api/sso/v1/user/self/zendesk_user` ->
  `200` empty (body `external_id`/`email`/`role` ignored, matching account.svc).
  `resendVerificationEmail` (`/api/sso/v1/verify`) is config-only with no call site;
  `POST /api/sso/v1/verify/email/<A>` -> `405 METHOD_NOT_ALLOWED`.
  `POST https://account.svc.ui.com/zendesk/ticket` -> `400 BAD_REQUEST` (validation/
  captcha gate) and a follow-up -> `429 RATE_LIMITED`; stopped to respect limits.
- No new confirmed high-impact finding; `confirmed-vuln.txt` unchanged; no Discord
  notification sent. Unresolved items remain: credentialed CORS (needs an
  attacker-controlled `*.ui.com` origin) and invite `?role=` (no pending invitation).

### Session 16 — 2026-11-18 (run continuing, 20:21Z)
- Preflight OK: cwd repo root; opencode/curl/git/node/npx/python3 + Chrome 158 at
  127.0.0.1:9222; MCP tools live (`list_pages` -> about:blank).
- Continuation (target hash `3353d9c6...` unchanged, decision=preserved). Read
  SUMMARY, scope, progress, inventory, findings, unresolved, both skill files.
- Bundle refresh: `account.ui.com` `index-CYDY7PBp.js` unchanged (sha256
  `14c9788e...2d14a1b`, 7,150,439 B); `www.ui.com` `index-BfxHSOgp.js` unchanged
  (`0722ab3b...eae58f9`); Site Manager rotated to `main-0.2678141fb293ea0d.js`
  (`5bccf419...3993a1b`) etc.; `activate.ui.com` unchanged (`index-1CNh1WqS.js`).
- Recovered still-valid A/B `UBIC_AUTH` JWTs from `result/logs/opencode.log`
  (A `7c5aab2b...`, B `d8946fad...`; exp ~2026-12-15); `GET /user/self` 200 for both.
- New endpoint results: `GET /user/self/roles` 200 (fixed beta role list, both
  accounts); `POST` 405. `POST /address/validator` is **unauthenticated**: valid US
  address -> 204; missing/invalid fields -> 400; CORS reflects `*.ui.com` (known
  class). `POST /v2/user/self/mfa/email/{id}/send`: own 200, cross-account 404,
  unauth 401.
- Mass assignment on `PUT /user/self`: `scopes`, `account_type`, `is_staff`,
  `groups`, `mfa_required`, `is_superadmin` return 204 but do not persist;
  `session_ttl_seconds` -> `499 L2_REQUIRED`. Rate limiting (`429`, retry_after 0)
  observed; no brute force.
- Site Manager new build re-audit: account bridge origin `.endsWith(".ui.com")`
  with reporter/version/Zod validation; `?from=uid` portal host constrained to
  `${domain}${fixedSuffix}`; `?link=` only stored in localStorage; `appview`
  boolean; `debug-crossorigin`/`debug-search` enum/regex validated. No new sink.
- No new confirmed high-impact finding; `confirmed-vuln.txt` unchanged; no Discord
  notification sent. Evidence: `result/server-side/account.ui.com/session16-ledger.md`
  and `result/server-side/account.ui.com/traffic/session16-*.txt`.

## Session 17 — 2026-11-19T07:03Z (continuation, preserved)
- Start (UTC): 2026-11-19T07:03:37Z
- Agent: opencode / deepseek-v4.1-flash-free
- Target: ui.com (domain-only), target_hash 3353d9c6... unchanged (decision=preserved)
- Environment: GitHub Actions Linux; Chrome DevTools MCP reachable (about:blank)
- Tools: opencode, curl, git, node v22.23.4, npx, python3, google-chrome-stable
- Resume: read SUMMARY/scope/progress/inventory/findings/unresolved + both skills
- Focus: bundle refresh diff, any new/untested endpoint, remaining Unresolved candidates
- End (UTC): 2026-11-19T07:12Z
- Bundles unchanged (account/www/activate); no new code.
- Tested new surface: passwordless options/login (no bypass, rate-limited),
  zendesk tickets/ccd + comments query param, chat/queue POST/GET/DELETE
  (session-bound, body userId ignored), account.svc CORS strict.
- Unresolved: support-file consoleID IDOR (no device IDs).
- No high-impact finding; confirmed-vuln.txt unchanged; no Discord notification.

## Session 20 — 2026-11-20T19:56Z (continuation, preserved)
- Start (UTC): 2026-11-20T19:56:59Z
- Agent: opencode / deepseek-v4.1-flash-free
- Target: ui.com (domain-only), target_hash 3353d9c6... unchanged (decision=preserved)
- Environment: GitHub Actions Linux; Chrome/158 DevTools MCP live at 127.0.0.1:9222
- Tools: opencode, curl, git, node v22.23.5, npx, python3, chrome
- Resume: read AGENT.md, both skills, SUMMARY/scope/progress/inventory/findings/unresolved
- Observation: `account.ui.com` bundle still `index-DUlTrD1u.js`; `activate.ui.com` unchanged;
  **`www.ui.com` rebuilt as a Next.js/Turbopack app** (new attack surface, was static microsite).

## Session 21 — 2026-11-20T20:15Z (continuation, preserved)
- Start (UTC): 2026-11-20T20:15Z (resumed after Session 20 watchdog stop)
- Agent: opencode / deepseek-v4.1-flash-free
- Target: ui.com (domain-only), target_hash 3353d9c6... unchanged (decision=preserved)
- Environment: GitHub Actions Linux; Chrome DevTools MCP reachable (about:blank)
- Tools: opencode, curl, git, node v22.23.5, npx, python3, chrome
- Focus: new `www.ui.com` Next.js/Turbopack (App Router) attack surface.
- Extracted route table from `03lc1g5u1-quw.js`; dynamic routes are
  `/download/[productFamily]` and `/download/software/[slug]` (plus static unifi pages).
- Dynamic-route params: raw `"`/`<`/`>`/`</script>` are percent-encoded into the RSC
  flight payload and `canonical`/`og:url` -> no HTML/JSON-LD breakout (404 page).
- `/download/unifi` -> 200 (5.5MB); release data from `download.svc` `/v2/downloads`
  (out of scope); link builder uses server-provided `fileUrl`.
- Re-confirmed `?link=` allowlist in new chunk `3h4qiliw__8ql.js`: `u()` requires
  https + hostname ∈ {dl.ubnt.com, dl.ui.com, fw-download.ubnt.com}; `dangerouslySetInnerHTML`
  only translation strings (`downloadStarted.hero.title`). 6 bypass variants rejected/absent.
- CVE-2025-29927 `x-middleware-subrequest` payloads: middleware NOT bypassed
  (`x-middleware-rewrite: /us/en` still returned).
- Open-redirect probes (`//host`, `%2f%2f`, `?redirect=`) -> 404/inert; no `Location`.
- No Next.js Server Actions (0 `createServerReference` ids); `/_next/image` 404; source
  maps 404. Newsletter form -> Mailchimp (out of scope). `/wafflejs` = django-waffle flags (low info).
- No new high-impact finding; `confirmed-vuln.txt` unchanged; no Discord notification.
- End (UTC): 2026-11-20T20:22Z
