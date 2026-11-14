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
