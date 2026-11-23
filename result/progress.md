# Route Testing Progress — account.ui.com

- Total UI routes discovered: 37
- Fully tested: 22
- Partially tested: 0
- Blocked: 15 (missing billing customer/org, emailed token, attestation/passkey,
  or server-issued state; see `result/inventory/routes.md`)
- All-scope `testing-inventory.json`: 45 routes = 37 `account.ui.com` + 8
  `www.ui.com`/`unifi.ui.com`/`activate.ui.com`; 30 done / 15 blocked.

Session 3 run: 42850898064, started 2026-11-10T16:05:19Z.
Session 4 run: 42920600593, started 2026-11-10T23:09:28Z (scheduled, resume/preserved).

## Fully tested
- `/login` — email + password works; `POST /api/sso/v1/login` `{user,password}` → `499 required:2fa`; rate limiting (`429`) observed. Pre-MFA response leaks account UUID + MFA metadata (VULN-20261110-002).
- `/login/mfa` — email OTP accepted by `POST /api/sso/v1/login/2fa` `{token}`; wrong tokens `403 INVALID_CREDENTIAL`; throttled after ~7 attempts (`429`, `retry_after`). No practical brute force.
- `/reset-password` — send-reset requires reCAPTCHA (`CHALLENGE_RECAPTCHA_TOKEN_REQUIRED`). Blocked.
- `/reset-password/password-reset-uuid/:uuid` — confirm is `PUT /api/sso/v1/verify/password/{uuid}` `{password}`; user UUID is NOT the path token (404). Needs emailed reset id.
- `/account` — `GET/PUT /api/sso/v1/user/self`; mass-assignment of `role/roles/is_admin/permissions/accounts` ignored; `email` change rejected.
- `/security` — MFA list, sessions, trusted devices, addresses; cross-account ids protected (404/405/no-op). Backup-code re-mint endpoint tested (VULN-20261110-003).
- `/requests` — Zendesk ticket list/create; own tickets only.
- `/requests/:ticketId` — cross-account comments `403 FORBIDDEN`; comment write requires `x-captcha-token`.
- `/login/change-email` — legacy change-email is `/user/self` scoped; `/legacy/.../email/send` → `403 AUTHENTICATION_FAILED`; modern `/email/verify/send` validates uniqueness.
- `/search` (API) — unauthenticated account existence oracle on `/api/sso/v1/search/email|username` (VULN-20261110-001).

## Partially tested / blocked
- `/register` — `POST /api/sso/v2/users` → `403 CHALLENGE_RECAPTCHA_TOKEN_REQUIRED`.
- `/billing` (+ `/invoices`, `/payments`, `/subscriptions`) — no billing customer/orgs; `404 Customer not found` / `[]`.

## Pending
See `result/inventory/routes.md`. Remaining: `/profile` (redirects to `/account`),
`/security/suspicious/confirm`, `/switch`, `/logout`, `/idp/login-result`,
`/msp/idp/setup-result`, `/activate`, `/login/trust-device`, `/login/create-passkey`,
`/verify*`, support forms, backups.

## Candidate / confirmed-low issues
- `sso.ui.com` reflects any `*.ui.com` Origin with `Access-Control-Allow-Credentials: true`
  (needs an attacker-controlled `*.ui.com` origin). `result/findings/cors-credentialed-reflection.md`.
- VULN-20261110-001 — unauthenticated email/username existence oracle (Low, excluded from confirmed-vuln).
- VULN-20261110-002 — pre-MFA login response leaks account UUID/MFA metadata (Low, excluded).
- VULN-20261110-003 — 2FA backup-code re-mint, CSRF-shaped simple request, no re-auth (Low, excluded).

## No confirmed high-impact vulnerability this session
JWT `alg:none` forgery rejected; pre-MFA session cannot reach `/user/self/**`;
`shopify_login` redirects to a fixed host; CORS only reflects `*.ui.com`.

## Session 4 (2026-11-10T23:09Z) — completed checks

### Newly completed routes
- `/login/trust-device` — `POST /api/sso/v1/user/self/device {device_id}` -> `204`; UI trust flow after MFA; trusted-session TTL 31536000s.
- `/verify` and `/verify/verification-code/:uuid` — auth redirects to `/`; `PUT .../verification-code/{uuid}` -> `404` for user UUID, zero UUID, and `1`; token is the emailed request id, not the user UUID.
- `/security/suspicious/confirm` — inspect/confirm require the emailed `confirm_token` field (a wrong `token` body fails validation); decisions are validated; tokens are unguessable.
- `/switch` — logout + `login_hint`; `redirect` validated by `AC()` (http/https, registrable domain in `ui.com`/`ubnt.com`/`uisp.com`); no arbitrary external open redirect.
- `/activate` — client-side `window.location.replace(activate.ui.com)`; no user-controlled sink.
- `/logout` — `GET` (and `POST`) `/api/sso/v1/logout` clears `.ui.com` auth cookies with no CSRF token. New low finding VULN-20261110-004.
- `/msp/idp/setup-result` — `postMessage` uses `targetOrigin = window.location.origin`; safe.
- `/supportform`, `/supportform-umr`, `/mysupport` resolve to `/requests`; `/supportform-uisp` is an external UISP support link.
- `/backups` — `cloudaccess.svc.ui.com` hosts/backups empty for the test account.

### Additional negative results / protections confirmed
- Assurance levels: `GET/POST/DELETE /api/sso/v1/user/self/login/level`; L2 lasts 1800s. Level 1 -> `499 L2_REQUIRED` for email change, add email authenticator, password/username change, picture upload, and backup-code minting.
- Cross-account object access (A objects from B): addresses `PUT/DELETE`, session delete, trusted-device delete, MFA delete/send all `404` (ownership checks hold).
- `/api/sso/v1/user/{uuid}/roles/beta` -> `403 "mismatching UUID"` when the path UUID is not the session user.
- `/api/sso/v1/user/self/activity` ignores a `uuid` query parameter (self-scoped).
- Picture upload: SVG -> `415`; raw PNG -> stored at `account-cdn.svc.ui.com/<uuid>` and served `image/png`; a PNG body with `Content-Type: text/html|text/plain` returns a URL but the object is `AccessDenied` (no content-type control, no stored XSS).
- `POST /api/sso/v1/mfa/webauthn/options` -> `404 "User or verified keys not found"` (no passkeys); registration not reachable.
- Password reset: server requires `_ubiquiti_private_key`, `captcha`, and `apple_devicecheck_token`; invalid captcha -> `403`; spoofed `Host` -> CloudFront `403`.
- CORS: `cloudaccess.svc.ui.com` also reflects any `*.ui.com` Origin with credentials and allows write methods; wildcard `*.ui.com` serves the fixed "UniFi Site Manager" SPA from S3 (no writable path / Host reflection). Impact still unresolved.

### Correction
- VULN-20261110-003 (backup-code re-mint) is not reproducible at assurance level 1 (`499 L2_REQUIRED`); the original test was at L2. Report updated; severity Informational.

### Additional observations (not findings)
- `account.ui.com` CSP: `frame-ancestors 'self' *.ui.com uic.uidev.tools *.uic.uidev.tools`
  (third-party `uidev.tools` namespace is trusted for framing) alongside
  `X-Frame-Options: SAMEORIGIN`. `uic.uidev.tools` and arbitrary subdomains resolve to
  CloudFront but return `403` with no served content, so no clickjacking PoC was possible.
- `script-src` allows `*.ui.com`/`*.ubnt.com` plus `'unsafe-inline'`; wildcard `*.ui.com`
  serves a fixed SPA, so this is only exploitable with an injection on some `ui.com` host.

## Session 5 (2026-11-11T05:51Z, run 42968379409) — www.ui.com + deeper bundle audit

- Total UI routes discovered across both apps: 38 (37 account + 1 www home).
- Fully tested this session: `https://www.ui.com/` (client-side) and a full-bundle sink
  re-audit of the `account.ui.com` SPA. No new high-impact vulnerability.
- `www.ui.com` (marketing microsite): no URL/query-driven DOM source, no external
  redirect sink (only static-config `vg`), `dangerouslySetInnerHTML` uses bundled i18n
  strings, no in-scope postMessage listener. Status: Done.
- account.ui.com bundle (SHA256 `29983e5e...855c18a`): 7.1 MB single bundle.
  - 18 `dangerouslySetInnerHTML`: 17 React/Radix/attribute internals + 1 app-level
    Zendesk `html_body` renderer (`WLt`, ~offset 6404335) via `html-react-parser`.
  - No DOMPurify/sanitize-html/xss library present -> candidate VULN-20261111-001,
    Unresolved/self-XSS (comments are own-ticket scoped; cross-account 403).
  - 4 `message` listeners: Sentry (same-window), axios (same-window), Megaphone
    (`source===parent` + `https` + `AC()` allowlist + Zod schema), MSP IdP (exact origin).
  - All `location.href/replace/assign` redirect sinks gated by `AC()` (http/https +
    registrable domain in ui.com/ubnt.com/uisp.com). No open redirect.
- Re-confirmed `POST /api/sso/v1/login/email` is an unauthenticated
  `user_exists` + `login_methods` oracle (unknown user -> 400). Same excluded class as
  VULN-20261110-001.
- Re-tested CORS origin matcher for suffix bypass: `https://ui.com.evil.com` and
  `https://account.ui.com.evil.com` are rejected; only real `*.ui.com` https origins
  are reflected. No escalation of the existing CORS observation.

### Route completion status (this session)
- `/` on `www.ui.com` — client-side Done; server-side no new in-scope API — Done.
- `account.ui.com` — remains as prior sessions (21 done, partial/blocked unchanged);
  this session added the deep JS audit rather than re-visiting already-tested routes.

## Session 6 (2026-11-11T14:02Z, run 43034033571) — targeted auth/rate-limit checks

No new confirmed high-impact vulnerability. `confirmed-vuln.txt` unchanged.

### Newly tested / resolved
- Login-token flow: `POST /api/sso/v1/user/self/token/setup|login` require `{token}`;
  random/known-invalid values -> `404`; unauthenticated -> `401`. No call sites in the
  SPA bundle beyond config. Not reproducible without a valid external login token.
- Change-email flow: route/UI gated by pre-MFA `user.email_changeable`, which is absent
  for A/B (both verified). Pre-MFA `UBIC_2FA` request -> `403 PERMISSION_DENIED`;
  authenticated request -> `403 AUTHENTICATION_FAILED` even at L2 and with the correct
  password. `PUT /user/self` cannot set `email_changeable`. Remains blocked.
- Pre-MFA authorization matrix (B `UBIC_2FA`): self/settings/sessions/trusted_devices/
  device all `401/403`; POST device/trusted_devices/sessions -> `403`. No pre-MFA data
  leak or trust-device bypass.
- Cross-account OTP confusion: B's fresh email OTP submitted to A's pre-MFA session ->
  `403 INVALID_CREDENTIAL`. OTP is correctly bound to the login session/user.
- JWT key confusion: HS256 tokens signed with the RS256 public key (PEM, modulus,
  base64, JWKS, kid variants) -> `401`. JWKS/OpenID metadata exposes RS256 only.
- Account deletion: B `DELETE /user/self` with wrong password -> `499 L2_REQUIRED`;
  account intact. L2 wrong-password upgrade -> `403 INVALID_CREDENTIAL`; correct
  password -> `200 level:2`.
- Zendesk cross-account read: A can read only A's closed ticket/comments; B's -> `403`;
  B likewise cannot read A's closed ticket.
- Zendesk create rate limit: both A and B remain at `x-ratelimit-remaining: 0`.
  Reset times observed: B `1794410373` (~15:19Z), A `1794410691` (~15:24Z).
  Bypass attempts via `X-Forwarded-For`/`X-Real-IP`/`CF-Connecting-IP`/`True-Client-IP`,
  body `requester`/`requester_id`, trailing slash, `%2F`, case, and query variants all
  still returned `429`; alternate unmatched paths returned generic `404` with the
  separate 1000/min limit.
- Zendesk comment captcha: fresh in-page `grecaptcha.enterprise.execute` token for
  action `ZENDESK_CREATE_TICKET_COMMENT` still -> `403 Did not pass reCAPTCHA validation`.
  Headless/automation score is likely the blocker; no server-side bypass found.
- Exposed `GOOGLE_RECAPTCHA_SECRET_*` constants are used as reCAPTCHA **site keys**
  (`enterprise.execute`/`render` sitekey), not server secrets; not a finding.

### Still blocked
- Stored XSS in Zendesk ticket `html_body` cannot be exercised until the per-account
  ticket-create rate limit resets (A ~15:24Z, B ~15:19Z); comments also require a
  reCAPTCHA token that the headless browser cannot obtain in this environment.
- No third test account: registration reCAPTCHA token is rejected
  (`CHALLENGE_RECAPTCHA_TOKEN_REQUIRED`) for the same reason.

## Session 7 (2026-11-12T00:28Z, run 43127366314) — Zendesk/sso re-test + Site Manager

No new confirmed high-impact vulnerability. `confirmed-vuln.txt` unchanged.

### Newly tested / resolved
- Zendesk `search_tickets` / `search_ccd`: require header `x-captcha-token`; without it
  `400 "reCAPTCHA token was not provided"`. `grecaptcha` is not present on the home page.
  Blocked (same headless-captcha limitation).
- Zendesk ticket `requester` mass assignment: created ticket `6138711` with
  `requester.email` = Account B -> backend ignored it; `requester_id` stayed A
  (`44644434942359`). No cross-account injection.
- Zendesk ticket-list IDOR via query params: `?requester_id=`, `?user_id=`, `?email=`,
  `?page=` are all ignored (returns A's tickets only). `tickets/closed` likewise.
- Zendesk `html_body` stored XSS (VULN-20261111-001): user HTML is escaped server-side
  (`&lt;b&gt;`, `&lt;img ...&gt;`) in `html_body`, the field the SPA parses -> **Not
  Vulnerable**. Report + evidence updated; removed from candidates.
- sso probes (as A, L2): `/legal` 200; `/account-chooser` 200 (opaque_id
  `612ef234-...`); `/v2/password-strength` 400 min_length 12; `/v1/password-strength`
  200; `/user/self/roles` 200; `/user/self` 200. `/chat/messaging/jwt` 404.
- IDOR `/api/sso/v1/user/{B-uuid}` and variants -> `403 mismatching UUID`/404.
  `GET /user/self/2fa` -> `409 MFA_ALREADY_ENABLED`; `/2fa/reset` -> 404.
- `/idp/login-result`: `POST /api/sso/v1/idp/login-result {code,state}` -> `400
  STATE_MISSING` for arbitrary/empty state; requires a server-issued state. Blocked.
- `/login/create-passkey`: WebAuthn registration route; no reachable unauthenticated
  flow (`/mfa/webauthn/options` 404). Not a vuln.
- New in-scope surface: wildcard `*.ui.com` serves the "UniFi Site Manager" SPA.
  Bundles audited in `/tmp/unifi`: one app-level `dangerouslySetInnerHTML` (release-notes
  blocks from API); no `innerHTML`/`document.write` in app bundles; postMessage bridge
  `portal:account-bridge` validates `.ui.com` origin; `navigation.requested` requires
  `host==="unifi"` + path `/`-prefixed non-`//`. No DOM XSS/open redirect found.
- `POST https://cloudaccess.svc.ui.com/create-credentials` mints AWS STS credentials
  for the session user. Confirmed in-browser from `https://evil.ui.com` (a `*.ui.com`
  origin): `200` + readable `accessKeyId/secretKey/sessionToken`. CORS reflects any
  `*.ui.com` origin with credentials. `identityId`/`role`/`orgId` body or
  `X-Identity-Id` header cannot be overridden. Still requires attacker-controlled
  `*.ui.com` content -> Unresolved. See `findings/cors-credentialed-reflection.md`.
- `enterprise.svc.ui.com` / `fabric.svc.ui.com` also reflect `*.ui.com` (out of scope;
  observed only, recorded in `out-of-scope.txt`).

### Route completion status (this session)
- `/requests`, `/requests/:ticketId`, `/idp/login-result`, `/login/create-passkey`:
  tested / resolved (Zendesk search remains captcha-blocked).
- Site Manager (`unifi.ui.com` + wildcard `*.ui.com`): client-side bundle audit done;
  no in-scope high-impact flow. New API surface documented.
- Totals unchanged: 38 routes; no new high-impact finding.

## Session 8 (2026-11-13T19:31Z, run 43492795808) — remaining API edges

No new confirmed high-impact vulnerability. `confirmed-vuln.txt` unchanged.

### Newly tested / resolved
- Passwordless API (previously untested, config-only in bundle):
  `POST /api/sso/v1/passwordless/options` requires `{user}` and
  `POST /api/sso/v1/passwordless/login` requires a credential payload. Both returned
  `429 RATE_LIMITED` (`retry_after:0`) with schema-valid bodies; no bypass attempted
  per rate-limit policy. No SPA call site. Marked blocked.
- `account.svc.ui.com` Zendesk proxy: unauthenticated requests -> `401 UNAUTHORIZED`;
  path-traversal/encoding variants (`..`, `%2e%2e`, `..%2f`, `..;/`, `%00`, `//`) gave
  no auth bypass (401/400/404).
- `GET /api/sso/v1/legal` paramless, returns revision strings only (no reflection).
- Read-only: `account-cdn.svc.ui.com` bucket root / `?list-type=2` -> `403 AccessDenied`
  (out-of-scope asset, observed only). `secure-uploads.ui.com` is a SendSafely instance
  (third-party, observed only).

### Still unresolved
- Credentialed CORS on `sso.ui.com` / `cloudaccess.svc.ui.com` remains unresolved; still
  requires attacker-controlled `*.ui.com` content (none found).
- Passwordless flow unverified due to rate limiting.

## Session 9 (2026-11-14T06:20Z, run 43564092459) — SSO jwt/path endpoints

No new confirmed high-impact vulnerability. `confirmed-vuln.txt` unchanged.

### Newly tested / resolved
- `GET /api/sso/v1/jwt/token` -> 200 HS512 JWT for self (`uuid`,`is_verified`,`exp`,
  `ui_session_id`). Requires browser UA at the edge. `?redirect=` 302s to
  `sso.ubnt.com/.../login/<jwt>?redirect=...`; target restricted to `*.ui.com`
  (external/relative/scheme-relative/javascript all rejected). ubnt second hop 404.
- Path-based `GET/POST /api/sso/v1/user/{uuid}/address`,
  `GET/POST .../console_groups`, `GET /api/sso/v1/user/{uuid}` -> `403 mismatching UUID`
  for other users. POST `/address` ignores body `user` (writes to self). No IDOR.
- `GET /api/sso/v1/account-chooser?<param>` -> `{"accounts":[]}` (empty); 429 after
  several calls; POST 405. No account info disclosure.

### Still unresolved
- Credentialed CORS on `sso.ui.com` / `cloudaccess.svc.ui.com`: still needs an
  attacker-controlled `*.ui.com` origin (none found; `Origin: null` not reflected).
- Site Manager `cloudaccess.svc.ui.com` `/api/v1/*` requires AWS SigV4 (STS creds from
  `/create-credentials`); plain cookie -> 403 "Missing Authentication Token". Test
  account has no hosts/sites, so low expected yield.

## Session 10 (2026-11-14T13:45Z, run 43599586173) — SSO self-service + Site Manager

No new confirmed high-impact vulnerability; `confirmed-vuln.txt` unchanged.

### Newly tested / resolved
- `PATCH /api/sso/v1/user/self/settings` (PUT/POST 405): `passwordless_enabled` persists;
  `role/is_admin/uuid/suspicious_detection/email/username` ignored. No mass assignment.
- `GET/POST/DELETE /api/sso/v1/user/self/login/level` and `POST .../level/refresh`:
  L2 re-auth is password-only by design; refresh returns 200 at L2, `499 L2_REQUIRED`
  at genuine L1, 401 pre-MFA. `DELETE .../level` is a no-op (corrected prior note).
- `POST /user/self/email/verify/send {email}` -> 204 sends a code to the new address;
  already-used address -> 400 "must be unique". Confirm route not found (404 probes).
- `POST /user/self/zendesk_user` -> 200 empty; body ignored; `account.svc` Zendesk email
  unchanged (self-scoped).
- `POST /user/self/2fa/backup {}` at L2 -> 201 rotates codes (VULN-20261110-003;
  informational, needs L2). `POST /user/self/mfa` and `/user/self/roles` -> 405.
- `POST /suspicious/confirm/inspect` -> 400 `confirm_token` required (emailed token).
- Pre-MFA `UBIC_2FA` replay as `UBIC_AUTH` -> 401; no MFA bypass.
- Wildcard `*.ui.com`: 302 to `account.ui.com/login` unauthenticated; fixed Site
  Manager SPA when authenticated. CORS reflects only real `*.ui.com` https origins.
- `cloudaccess.svc.ui.com` SigV4 access solved (`/create-credentials` STS + signed
  requests): `/api/v1/hosts`, `/devices`, `/sites`, `/invitations?type=all` all empty;
  no IDOR. `/api/v1/invitations` is 404 (correct path is `/invitations`).
- Site Manager SPA (13 MB) re-audited: no new app-level HTML/JS sink.

### New candidate
- VULN-20261114-001 (Unresolved): invite deep-link `?role=` (admin|owner) is forwarded
  into `POST cloudaccess.svc.ui.com/confirm-invitation` body; server trust unverified
  because the test account has no invitation. `result/findings/VULN-20261114-001/`.

## Session 11 (2026-11-14T22:15Z, run 43647019119) — www.ui.com refresh + activate device-login

No new confirmed high-impact vulnerability. `confirmed-vuln.txt` unchanged.

### Newly tested / resolved
- `www.ui.com` refreshed bundle `index-Dyxt5MIq.js` (934 KB); 87 chunks downloaded
  to `/tmp/ui11/all/` and swept for sources/sinks.
- Marketing inputs inert or validated: `?product_line=` not reflected;
  `/download/releases|software/:slug` reach only React `<Head>` (escaped meta, no
  `innerHTML`); `download-started?link=` requires https + host allowlist
  (`dl.ubnt.com`, `dl.ui.com`, `fw-download.ubnt.com`); `?s=`/`?l=` are enum-validated
  then stripped (no open redirect); `appview=true` is layout-only.
- `www.ui.com` login redirect is built from `window.origin` (fixed host); account SPA
  re-validates via `AC()` (registrable domain in allowlist, http/https). No open redirect.
- All app `dangerouslySetInnerHTML` on `www.ui.com` are static i18n menu
  descriptions, not URL/API data. `www.ui.com/api/*` are SPA 404 fallbacks (no proxy/SSRF).
- `download.svc.ui.com` (backend of in-scope `/download`; `*.svc.ui.com`, observed
  only): public catalog JSON; slug quote/traversal/wildcard -> uniform 404; `%00` ->
  400; huge `page` -> 500 empty (error handling only); `POST /v1/downloads/search` -> 204.
- `account.ui.com/activate` is a fixed redirect to `https://activate.ui.com`
  (S3 SPA). SPA does not reflect `serial/code/token/redirect/next`.
- New device-login endpoints on `sso.ui.com`: `POST
  /api/sso/v1/user/self/token/setup` (`device_name`) and `/token/login`; both require
  auth (401 unauth). CORS reflects any `*.ui.com` Origin with credentials — extends
  the known credentialed-CORS class; still Unresolved (no attacker-controlled
  `*.ui.com` origin). No authenticated brute-force testing (consent-flow direction
  limits impact; avoid lockout).

### Still unresolved
- Credentialed CORS on `sso.ui.com` / `cloudaccess.svc.ui.com` and now the
  `activate` device-login token endpoints; needs attacker-controlled `*.ui.com` content.
- VULN-20261114-001 invite `?role=` escalation (no pending invitation available).

## Session 12 — 2026-11-15 (run 43683615848)
No new confirmed high-impact vulnerability. `confirmed-vuln.txt` unchanged.

### Session/state recovery
- OTP email delivery to the test maildrop stopped working (A newest mail
  2026-11-14T13:29:26Z; many `/2fa/email` resends returned 200 with a fresh
  `otp_prefix` but no message arrived). Interactive re-login is therefore blocked.
- Recovered still-valid 30-day `UBIC_AUTH` JWTs for test accounts A and B from the
  prior session log (`result/logs/opencode.log`, grep `UBIC_AUTH=`). Tokens verified
  with `GET /api/sso/v1/user/self` -> 200 and expire ~2026-12-11..14. No token values
  are copied into new files.
- L1 -> L2 assurance unlocked with password-only
  `POST https://sso.ui.com/api/sso/v1/user/self/login/level {"password":"..."}`:
  200 `{level:2,time_left_seconds:1800}` and a new `UBIC_AUTH` cookie (old cookie
  remains L1). Saved as `/tmp/A2.jar` / `/tmp/B2.jar`; re-run to extend the 30 min.
  This is documented L2-by-password behavior, not a bypass.
- Browser testing used the recovered cookie injected on `https://account.ui.com`
  (`document.cookie = "UBIC_AUTH=...; domain=.ui.com; path=/; secure; samesite=lax"`).

### Authenticated (L2) authorization matrix
- Own data 200: `/user/self`, `/user/self/sessions`, `/trusted_devices`, `/activity`,
  `/addresses`, `/mfa` (authenticator metadata only), `/roles`; `PATCH settings`
  ignores privilege fields (prior result holds).
- Cross-account UUID swaps (`/user/{B_uuid}/...`, `?uuid=`/`?user=` params) ->
  `403 mismatching UUID` or own data only. No IDOR/BAC.
- Zendesk: own ticket comments 200; A->B and B->A `GET
  /zendesk/comments/{ticket}` -> `403 FORBIDDEN`. No ticket IDOR.
- Pre-MFA `UBIC_2FA` cookie: `/user/self/mfa` GET, `POST /mfa/totp`,
  `POST /mfa/email`, `DELETE /mfa/email/{id}` and `cloudaccess /create-credentials`
  all `401 is not allowed`. Only OTP send is permitted pre-MFA. Pre-MFA
  `/account-chooser` returns the caller's own account (by design, informational).
- MFA email/TOTP add/remove not performed (would alter test-account auth state and
  still require a password-elevated session; expected by design).

### Route completion (authenticated browser)
- `/billing` renders; passive calls: `sso /user/self` 200,
  `billing.svc /api/v2/customers/self/subscriptions?limit=100` 404
  (`Customer not found`), `/api/v2/products` 200, `/invoices/available-years` 404,
  `cloudaccess /api/v1/hosts` 200 empty. `billing.svc.ui.com` remains outside the
  approved component scope, so only UI-observed calls were recorded.
- `/invoices`, `/payments`, `/subscriptions` redirect to `/billing`;
  `/backups` renders Active/Archived with no backups; `/profile` redirects to
  `/account`. Route tally now 22 done / 0 partial / 15 blocked (37 total).

### Client-side refresh
- `account.ui.com` bundle unchanged (`index-BAUIMHQa.js`, sha256 `29983e5e...55c18a`).
- Wildcard `unifi.ui.com` Site Manager SPA is a new build (index last-modified
  2026-11-12; 15 chunks in `/tmp/unifi2/`). Re-audited: only app-level
  `dangerouslySetInnerHTML` remains release-notes blocks; bridge validates
  `new URL(event.origin).hostname.endsWith(".ui.com")` and forces `host === "unifi"`
  for `navigation.requested`; `nf = ${protocol}//${normalizedHost}` keeps
  backslash/absolute-path input on the same host. No new sink or open redirect.

### Still unresolved
- Credentialed CORS on `sso.ui.com` / `cloudaccess.svc.ui.com` (needs attacker-controlled
  `*.ui.com` origin).
- VULN-20261114-001 invite `?role=` escalation (no pending invitation).
- Billing server-side testing (no billing customer; `billing.svc` out of approved scope).

## Session 13 — 2026-11-16 (run 43814022276)
No new confirmed high-impact vulnerability. `confirmed-vuln.txt` unchanged.

### Fresh login / mail
- Maildrop delivery recovered. Account A mobile-Safari-UA login completed:
  password -> `499` MFA challenge -> email OTP `KK947859` -> `/login/2fa` 200 ->
  `UBIC_AUTH` (`SameSite=lax`, HttpOnly, `Domain=.ui.com`, 30 days). No CAPTCHA and
  no suspicious-login email for a new device/UA; chose "Not now" on trust-device.
- `499` login body carries only `user.id`/`default_mfa`; no `email_changeable`.
  `GET /api/sso/v1/account-chooser` -> `200` empty for A and B (no saved accounts).
- `POST /api/sso/v1/jwt/token` -> `404` (removed/renamed) while still rotating a
  fresh `UBIC_AUTH` cookie; `L2` claim is a 2FA timestamp, not expiry.

### Email change
- Legacy `POST /api/sso/v1/legacy/user/self/email/send` with `UBIC_AUTH` ->
  `403 AUTHENTICATION_FAILED`; pre-MFA `UBIC_2FA` -> `403 PERMISSION_DENIED`.
  UI only exposes it when login `499` includes `email_changeable`; not reachable.
- Current profile flow: `POST /api/sso/v1/user/self/email/verify/send {email}`
  -> `204` + 6-digit code to the new mailbox (`opencode-s13`; code `926854`).
  Confirm `PUT /api/sso/v1/user/self
  {email,email_change_verification_code,create_mfa}`.
  - Unique email enforced at request (`400 This field must be unique` for B's email).
  - Code bound to requested email (`400 Email change request not found` when
    confirming B's email with a code sent elsewhere).
  - Pre-MFA `UBIC_2FA` -> `401`; no CSRF via cross-site POST (`SameSite=lax`).
- `PUT /user/self` ignores a supplied `uuid`; only self updated. Test artifact
  `first_name` restored. No IDOR/mass assignment.

### Roles / MFA / Zendesk
- `POST /api/sso/v1/user/{uuid}/roles/beta {}` is self-service: own UUID -> `204`
  adding fixed `Beta Testers`; other UUID -> `403 mismatching UUID`; body
  `role`/`roles` ignored. A retains `Beta Testers` as a test artifact (low impact).
- Cross-account MFA: A on B's email authenticator -> `405` for GET/PUT/POST and
  `404 No EmailAuthenticator matches` for `/send`; B's TOTP -> `404`. Ownership
  enforced.
- Zendesk: B -> A ticket comments `403 FORBIDDEN`, ticket `404`; search still
  reCAPTCHA-gated. No ticket IDOR.

### Client-side
- `account.js` unchanged (`29983e5e...55c18a`). `window.open` sinks use fixed,
  internal, or server IdP URLs; Site Manager `account-bridge` origin check
  (`.endsWith(".ui.com")`) and `navigation.requested` single-slash path check held;
  no attacker-controlled source.

### Inventory reconciliation
- `testing-inventory.json`: 45 routes = 37 `account.ui.com` + 8
  `www.ui.com`/`unifi.ui.com`/`activate.ui.com`; 30 done / 15 blocked. The 37-account
  route tally in prior progress entries is the account-ui subset (22 done / 15 blocked).

## Session 14 (2026-11-17T07:54Z)
No new confirmed high-impact vulnerability. `confirmed-vuln.txt` unchanged.

### Refresh and diff
- `account.ui.com` now serves `index-CYDY7PBp.js` (7,150,439 B, sha256
  `14c9788ebdf32e9a2d9763821836589c4703e5910a2aade9f5e55ffce2d14a1b`); the prior
  `index-BAUIMHQa.js` is no longer referenced. 99 `/api/*` paths and 42 route paths
  are unchanged. New paths: MFA `{type}/{id}/verify`, `{type}/{id}/send`,
  `push/{id}/poll-setup`, `push/poll-login`, `webauthn/options|login`, `2fa/reset`,
  and `chat/messaging/jwt`.
- Sink review: no new app-level `dangerouslySetInnerHTML`, `.innerHTML`, or redirect
  sink. Release-notes blocks (remote, vendor-authored) and static i18n menu text are
  the only app HTML sinks; `postMessage` still validates `.ui.com` and uses the current
  origin for the MSP setup result.
- Site Manager build (`main-0..7`, e.g. `main-0` sha256 `43393b8a...b9209`):
  `account-bridge` origin check `.endsWith(".ui.com")`; `navigation.requested` requires
  `host === "unifi"` and a single-slash path; no new sink.

### New endpoint results
- Pre-MFA `POST /mfa/email/{id}/send` -> `204` (own), `POST .../verify` -> `401`;
  L1 own email verify -> `400` requiring `oneTimePassword`; L1 `POST /2fa/backup` ->
  `499 L2_REQUIRED` (L2 -> `201` new codes).
- L2 cross-account B email/TOTP `verify`, `send`, `DELETE` -> `404`; `PATCH` -> `405`;
  `/2fa/reset` -> `404`; push poll-login -> `400 Invalid session`; poll-setup for an
  unknown id -> `404`.
- `POST /chat/messaging/jwt` -> session-bound JWT; body `email`/`external_id`/`user_id`
  ignored; unauth -> `401`.
- Cloudaccess `hosts`, `sites`, `archived-backups`, `invitations`, `colocated-hosts`
  -> `200` empty for A; enterprise organizations empty; no IDs to test for IDOR.
- Password-reset host-header poisoning blocked: the reset request requires
  reCAPTCHA plus vendor anti-bot fields; score token -> `403
  CHALLENGE_RECAPTCHA_TOKEN_REQUIRED`, no challenge solved. Zendesk search stayed
  captcha-gated (`x-captcha-token`), and a fresh B ticket was unavailable (`429`).

## Session 15 (2026-11-17T20:46Z)
No new confirmed high-impact vulnerability. `confirmed-vuln.txt` unchanged.

### Bundle refresh
- `www.ui.com` main bundle changed to `/microsite/static/index-BfxHSOgp.js`
  (934,244 B, sha256 `0722ab3b72947505fffdf3b406b68d957e204215c00a26489eba112c8eae58f9`);
  187 chunk refs, 156 + 99 chunks downloaded/audited. `account.ui.com` bundle
  unchanged (`index-CYDY7PBp.js`).
- www sinks: all `dangerouslySetInnerHTML` sites render i18n/static data;
  `DownloadStarted` `link` param requires https + allowlisted
  `dl.ubnt.com`/`dl.ui.com`/`fw-download.ubnt.com` and is rejected otherwise;
  `Landing` hash only toggles `#partners`. No DOM XSS/open redirect.
- Account: `iS`/`sS` redirect validators reject external, `javascript:`, `//`,
  and backslash targets; `?org=` is billing-only (out of scope).

### New endpoint results
- `POST https://sso.ui.com/api/sso/v1/user/self/zendesk_user` -> `200` empty;
  body `external_id`/`email`/`role` ignored.
- `resendVerificationEmail` (`/api/sso/v1/verify`) has no call site; POST
  `/api/sso/v1/verify/email/<A>` -> `405`.
- `POST https://account.svc.ui.com/zendesk/ticket` -> `400 BAD_REQUEST`
  (input/captcha gate); follow-up -> `429 RATE_LIMITED`; no mass-assignment result.
- `account.svc /zendesk/user` body fields (`external_id`/`email`/`role`/`id`)
  remain ignored; no persistence.

### Status
- 45 routes = 37 account-ui + 8 www/unifi/activate; 30 done / 15 blocked.
- Unresolved unchanged: credentialed CORS (needs attacker-controlled `*.ui.com`),
  invite `?role=` (no pending invitation), billing/MSP/passkey blockers.

## Session 16 — 2026-11-18T20:21Z (continuation)
No new confirmed high-impact vulnerability. `confirmed-vuln.txt` unchanged.

### Bundle refresh
- `account.ui.com` `index-CYDY7PBp.js` unchanged (sha256 `14c9788e...2d14a1b`);
  `www.ui.com` `index-BfxHSOgp.js` unchanged (`0722ab3b...eae58f9`).
- Site Manager new build `main-0.2678141fb293ea0d.js` (`5bccf419...3993a1b`) plus
  `main-7.89817c7552da11f1.js` (`c9b7ad08...c61083`). Re-audit: account-bridge
  origin `.endsWith(".ui.com")` with reporter/version/Zod checks; uid portal host
  constrained to `${domain}${fixedSuffix}`; `?link=` stored only; `appview` boolean;
  debug params enum/regex validated. One release-notes `dangerouslySetInnerHTML`
  (vendor-authored), no `innerHTML`/`eval`/`srcdoc`.

### New endpoint results
- `GET /api/sso/v1/user/self/roles` 200 for A and B with a fixed beta role list;
  `POST` -> `405 METHOD_NOT_ALLOWED`. Roles are not client-writable here.
- `POST /api/sso/v1/address/validator` is **unauthenticated**: valid US address ->
  `204`; missing country -> `400 country required`; invalid country / >10-char
  postal code -> `400`. OPTIONS reflects any `https://*.ui.com` Origin with
  credentials (known CORS class). No object access or injection.
- `POST /api/sso/v2/user/self/mfa/email/{id}/send`: own 200 (`otp_prefix`),
  cross-account B id -> `404`, unauth -> `401`.
- Mass assignment `PUT /api/sso/v1/user/self`: `scopes`, `account_type`,
  `is_staff`, `groups`, `mfa_required`, `is_superadmin` -> `204` but not persisted;
  `session_ttl_seconds` -> `499 L2_REQUIRED`. `429` rate limits observed.

### Status
- 45 routes = 37 account-ui + 8 www/unifi/activate; 30 done / 15 blocked (unchanged).
- Evidence: `result/server-side/account.ui.com/session16-ledger.md`,
  `result/server-side/account.ui.com/traffic/session16-*.txt`.
- No Discord notification sent (notification bar not met).

## Session 17 — 2026-11-19T07:03Z (continuation)
No new confirmed high-impact vulnerability. `confirmed-vuln.txt` unchanged.

### Bundle refresh
- `account.ui.com` `index-CYDY7PBp.js` unchanged (sha256 `14c9788e...2d14a1b`);
  `www.ui.com` `index-BfxHSOgp.js` unchanged (`0722ab3b...eae58f9`);
  `activate.ui.com` `index-1CNh1WqS.js` (`7ebf64bb...7dcd90`). No new code to diff.

### New endpoint results (chat/passwordless)
- `POST /api/sso/v1/passwordless/options` now returns 200 WebAuthn
  `publicKeyCredentialRequestOptions` (`rpId ui.com`, `allowCredentials: []`) for a
  test email; unknown users fall into the same shared 429, so no existence oracle.
- `POST /api/sso/v1/passwordless/login` validates the credential payload
  (`400 Invalid credential payload` on `{}`/fake structs); schema-valid attempts hit
  `429 RATE_LIMITED`. No bypass; no passkey registered.
- `GET /zendesk/tickets/ccd` -> empty for A/B. `/zendesk/comments?ticket_id=` -> 404
  (path form remains owner-checked 403 cross-account).
- **`/chat/queue` (new coverage):** `POST {userId,department}` -> 201, `GET` -> own
  `queueInfo`, `DELETE` -> 204. The body `userId` is optional and ignored: posting B's
  uuid as A still leaves B not queued, `X-User-Id` is ignored, and the subsequent
  `chat/messaging/jwt` is still A's (`external_id` = A). Queue/JWT are session-bound.
  `OPTIONS` with `Origin: https://evil.ui.com` -> 403 (account.svc CORS strict).
  **Not Vulnerable.**
- Observation (not a finding): arbitrary `department` is stored in the queue and
  echoed by `GET`; only rendered as `textContent` client-side and the agent side is
  third-party. Support-file helper `POST cloudaccess /devices/{consoleID}/support-files`
  IDOR is **Unresolved** (test accounts have no console/device IDs; enumeration
  prohibited).

### Status
- 45 routes = 37 account-ui + 8 www/unifi/activate; 30 done / 15 blocked (unchanged).
- Unresolved unchanged: credentialed CORS (needs attacker-controlled `*.ui.com`),
  invite `?role=`, billing/MSP/passkey blockers; new support-files IDOR blocker.
- Evidence: `result/server-side/account.ui.com/session17-ledger.md`,
  `result/server-side/account.ui.com/traffic/session17-chat-queue.txt`.
- No Discord notification sent (notification bar not met).

## Session 18 — 2026-11-20T07:12Z (continuation)
No new confirmed high-impact vulnerability. `confirmed-vuln.txt` unchanged.

### Bundle refresh
- `account.ui.com` rotated to `index-DUlTrD1u.js` (6,941,256 B, sha256
  `a26e5447...b680f5c`); old `index-CYDY7PBp.js` and `index-BAUIMHQa.js` still
  served. Diff: 98 API paths and 42 route paths identical; sink counts unchanged
  (dangerouslySetInnerHTML 18, .innerHTML= 16, eval 0, new Function 0,
  document.write 0). Build/dependency refresh only.
- `www.ui.com`, Site Manager, and `activate.ui.com` bundles unchanged.

### Client-side route gap
- `/subscribe` exists in the route config but was missing from the inventory. Its
  component reads `?product=` and redirects only to fixed internal subscription
  paths; no external/`javascript:`/attacker-controlled target. Added as the 38th
  account-ui route. Report: `result/client-side/account.ui.com/subscribe/report.md`.

### New endpoint results
- Legacy change-email `PUT /api/sso/v1/legacy/user/self/email` remains `403
  AUTHENTICATION_FAILED` (normal session); `account.ui.com` edge rejects PUT.
- `GET /api/sso/v1/legacy/user/self/email` -> `403` (matches prior).
- All-scope tally: 46 routes = 38 account-ui + 8 www/unifi/activate; 31 done /
  15 blocked.

### Status
- Evidence: `result/server-side/account.ui.com/session18-ledger.md`,
  `result/server-side/account.ui.com/traffic/session18-*.txt`.
- No Discord notification sent (notification bar not met).

## Session 19 — 2026-11-20T07:30Z (continuation)
No new confirmed high-impact vulnerability. `confirmed-vuln.txt` unchanged.

### Bundle / validator re-check
- `index-DUlTrD1u.js` unchanged from Session 18; no new code.
- Re-verified the redirect host allowlist (`NS()`): last two hostname labels must
  be exactly `ui.com`/`ubnt.com`/`uisp.com` over http(s); `evilui.com`,
  `ui.com.evil.com`, and `account.ui.com.evil.com` are rejected. No open redirect.

### Account chooser / MFA / reset
- Fresh A login with `remember_me:true` (mobile UA) -> `499` 2FA -> OTP read from
  Maildrop GraphQL (`POST https://api.maildrop.cc/graphql`) -> `/login/2fa` `200`,
  new `UBIC_AUTH`; `/user/self` `200`.
- `GET /account-chooser` is driven by the HttpOnly `ACCOUNT_CHOOSER` cookie
  (Domain `sso.ui.com`, SameSite=Strict); returns only the caller's own saved
  entry (email/username/picture_url/opaque_id/remembered_at).
- `DELETE /account-chooser/{opaque_id}` -> `204` for random, own, and another
  account's id. Clean cross-account test: B deleting A's opaque_id did **not**
  remove A's entry. Cookie-scoped/idempotent, **not an IDOR**.
- `/user/self/2fa`: OPTIONS allows GET/POST only; GET and POST `{}` -> `409
  MFA_ALREADY_ENABLED` (no state change); `/mfa/totp` at L1 -> `499 L2_REQUIRED`.
  No L1 MFA-disable/reset primitive.
- `POST /api/sso/v1/password/{user}`: `{}` -> `400 VALIDATION_ERROR` (missing
  `_ubiquiti_private_key`, `captcha`, `apple_devicecheck_token`); dummy values ->
  `403 PERMISSION_DENIED`; no email sent, so reset-link host-header injection
  remains Blocked.

### Status
- 46 routes = 38 account-ui + 8 www/unifi/activate; 31 done / 15 blocked.
- Inventory updated: `/subscribe` route, current bundle entry, and Session 19
  endpoint observations added to `result/testing-inventory.json`.
- Evidence: `result/server-side/account.ui.com/session19-ledger.md`,
  `result/server-side/account.ui.com/traffic/session19-account-chooser-2fa-reset.txt`.
- No Discord notification sent (notification bar not met).

## Session 21 — 2026-11-20T20:15Z (continuation)
No new confirmed high-impact vulnerability. `confirmed-vuln.txt` unchanged.

### www.ui.com Next.js/Turbopack rebuild (new attack surface)
- App Router route table recovered from `03lc1g5u1-quw.js`; dynamic routes
  `/download/[productFamily]` and `/download/software/[slug]`.
- Unknown dynamic params -> 404, but value is percent-encoded in the RSC flight
  payload and `canonical`/`og:url`; raw `"`, `<`, `>`, `</script>` do not break out.
- `/download/unifi` -> 200; data fetched from `download.svc` `/v2/downloads`
  (out of scope). `download-started` link builder uses server `fileUrl`.
- `?link=` allowlist re-confirmed in new chunk `3h4qiliw__8ql.js`: `u()` = https +
  hostname ∈ {dl.ubnt.com, dl.ui.com, fw-download.ubnt.com}; userinfo/suffix/`//`
  bypasses rejected and absent from HTML. `dangerouslySetInnerHTML` = static translations.
- CVE-2025-29927 `x-middleware-subrequest` payloads ineffective (`x-middleware-rewrite:
  /us/en` still present). `//host`/`%2f%2f`/`?redirect=` -> 404/inert.
- No Server Actions (0 ids); `/_next/image` and source maps 404; newsletter -> Mailchimp
  (out of scope); `/wafflejs` exposes django-waffle flags only (low info).

### Status
- No route-status change; 47 routes = 38 account-ui + 9 www/unifi/activate (32 done / 15 blocked).
- Inventory: added `www.ui.com` Next.js rebuild section to `result/inventory/routes.md`.
- Evidence: downloaded chunks under `/tmp/www20/` (session-local, not committed).
- No Discord notification sent (notification bar not met).

## Session 22 — 2026-11-21T19:14Z (continuation)
No new confirmed high-impact vulnerability. `confirmed-vuln.txt` unchanged.

### Builds unchanged
- `account.ui.com` still `index-DUlTrD1u.js` sha256 `a26e5447...b680f5c`
  (same as Sessions 18–21). Site Manager `main-0.2678141f`/`main-7.89817c75`
  and `www.ui.com` Next.js `dpl=ebfbbf36...` unchanged (Sessions 16/21).
  No new code to diff; focused on untested hypotheses instead.

### Fresh authenticated session
- Account A login reproduced end-to-end via Maildrop GraphQL OTP:
  `POST /api/sso/v1/login` -> `499 {"required":"2fa"}` + `UBIC_2FA`;
  `POST /api/sso/v1/login/2fa {token}` -> `200` + `UBIC_AUTH`
  (uuid `d8946fad-2b8e-4cf0-82c5-5d955b57b829`, username `testttt12`).

### Mass assignment / prototype pollution (negative)
- `PUT /api/sso/v1/user/self {"twofa_enabled":false}` -> `204`, re-read still `true`.
- `PUT` `{"is_verified":false,"email_verified":false}` -> `204`, re-read still `true`.
- `PUT` `{"__proto__":{"is_admin":true,...}}` / `{"constructor":{"prototype":...}}`
  / nested `__proto__` -> `204` or `429`; re-read `is_admin`/`polluted` null.
- `PATCH /user/self/settings {"__proto__":{...}}` -> `200`, no persisted effect.
- Not vulnerable to these classes.

### Credentialed CORS re-verified (still unresolved, not weaponizable)
- `GET sso.ui.com/api/sso/v1/user/self` with A cookie reflects
  `ACAO: https://evil.ui.com|https://ui.com|https://a.b.ui.com` +
  `ACAC: true`; rejects `http://`, `evilui.com`, `ui.com.evil.com`,
  trailing-dot, `:8443`, `null`, `notui.com`. Primitive confirmed; still needs
  an attacker-controlled `*.ui.com` origin.

### `*.ui.com` CNAME / takeover survey (negative)
- 21 non-`svc` hosts from bundles: `ir.ui.com`->investis.com,
  `secure-uploads.ui.com`->`*.ss-domain.com` (SendSafely, live Google SSO
  `hd=ui.com`), `status.ui.com`->Statuspage (`stspg-customer.com`),
  `unifi.dev/stg.ui.com`->CloudFront (403), `unifi.df.ui.com` no record.
  No dangling/claimable target -> no attacker-controlled origin found.

### Upload / legacy sink checks (negative for impact)
- Picture upload rejects `image/svg+xml` (`415 not a supported image format`);
  stored file re-encoded to 40x40 `image/png`, `immutable` -> no upload XSS.
- Legacy `www.ui.com` `main.min.js` `constructUserPopup()` injects
  `picture` via `.html('<img src="'+picture+'">')` and `first_name`/`last_name`/
  `email` via jQuery `.append()` from `/user/self`. Self-XSS only (renders the
  caller's own data); no cross-user render found. Excluded per self-XSS rule.
- `/contact/?q=` reflected only percent-encoded in `og:url` and inline
  `$.fn.globals.set("url",{absolute:"..."})`; `"`,`<`,`</script>` do not break out.
- Site Manager bundles: only app-level `dangerouslySetInnerHTML` is Release Notes
  (prior-known); no sink for account names/pictures.

### Status
- No route-status change; 47 routes = 38 account-ui + 9 www/unifi/activate
  (32 done / 15 blocked).
- Evidence under `/tmp/s22/` (session-local, not committed).
- No Discord notification sent (notification bar not met).

## Session 23 (2026-11-22) — endpoint re-verification (no route-status change)
- Re-ran client-side redirect/sink review on current `index-DUlTrD1u.js`:
  `xQ`/`TQ`+`NS`/`IS` and `/switch` are validated; no open redirect.
- Re-tested registration captcha (score key -> challenge; account_backend ->
  invalid captcha) and classified reCAPTCHA keys (valid site keys: account_backend,
  feedback, score; invalid: high_risk, medium_risk, challenge).
- cloudaccess STS creds issued but role is tightly scoped; all A tenant resources
  empty; random device lookup -> 404.
- Zendesk `search_tickets` caller gated off (`allowBillingSearch:false`); B
  pre-MFA email MFA send requires a session -> both remain Blocked.
- Ledger: `result/server-side/account.ui.com/session23-ledger.md`.
- Status: 47 routes = 38 account-ui + 9 www/unifi/activate (32 done / 15 blocked).

## Session 24 (2026-11-23) — B session recovered; unauth avatar endpoint (excluded)
- Recovered and validated Account B full-session `UBIC_AUTH` from `result/logs/opencode.log`
  (`UUID=7c5aab2b-...`, exp `1797401599`, L2) → `/user/self` `200`. Minted fresh B
  pre-MFA `UBIC_2FA` via password step; B MFA is email OTP to B's maildrop
  (authenticator `a646df96-...`). Completed a fresh A email-OTP login end-to-end.
- Confirmed `GET /api/sso/v1/user/{uuid}/picture` unauthenticated (avatar URL, `404`
  unknown uuid). Sibling routes/writes/roles properly protected. **Excluded** from
  `confirmed-vuln.txt` (low: public CDN avatar + UUID existence oracle).
  Report: `result/findings/VULN-20261123-001/`.
- Negative: MFA email-send session-scoped; `/login/2fa` code session-bound; pre-MFA token
  rejected on sensitive endpoints; Zendesk comment read/write IDOR blocked (ownership +
  reCAPTCHA); header impersonation ignored; login redirect validator robust.
- `POST /user/{uuid}/roles/beta` uuid-scoped (`A→B 403`, `B own 204`). `www.ui.com`
  `/search/autocomplete/` now `302 → /`.
- Status: 47 routes = 38 account-ui + 9 www/unifi/activate (32 done / 15 blocked). B
  session now available for future cross-account tests. No Discord notification.

## Session 25 (2026-11-23) — new sso endpoint + address BOLA re-test (no route-status change)
- Builds unchanged (account `index-DUlTrD1u.js` sha256 `a26e5447...`; www dpl `ebfbbf36...`).
  Recovered/validated A + B sessions (`/user/self` `200`).
- NEW endpoint `GET /api/sso/v1/zendesk_login` (not in SPA config): unauth → `302`
  `account.ui.com/login`; auth → `302 ubnt.zendesk.com/access/jwt?jwt=<name/email/external_id>`.
  `return_to` forwarded by sso but Zendesk normalizes it to `help.ui.com/hc` → no open
  redirect. CORS reflects `*.ui.com` + `ACAC:true` on the `302`, but the JWT lives only in
  `Location` (opaque on `redirect:'manual'`, no CORS on follow) → **Not Vulnerable**.
- Negative: no JSONP (`callback`/`format`/`Accept: application/javascript` → `406`/`404`);
  `shopify_login` fixed redirect; path-form `PUT/DELETE /user/{uuid}/address/{id}` → `404`;
  cross-uuid `POST /user/{B}/address` → `403`; body `user` override ignored (creates for
  self); B modifying A's address → `404`. Disposable test addresses cleaned up (`204`).
- Recon: 94 `ui.com` hosts resolved; no dangling CNAME. `blog/community/design/mobility/help`
  are not in the approved component list → observed only, recorded in `out-of-scope.txt`.
- www.ui.com hostile cookie / `X-Forwarded-Host` / `X-Forwarded-Proto` / `//` path probes
  inert (`200`, `x-middleware-rewrite:/us/en`, cookies reset; `//` → `404`). No poisoning.
- Status: 47 routes unchanged (32 done / 15 blocked). No new high-impact finding;
  `confirmed-vuln.txt` unchanged; no Discord notification.
- Ledger: `result/server-side/account.ui.com/session25-ledger.md`.

## Session 26 (2026-11-23T23:44Z) — new coverage, no route-status change
- Builds unchanged: account `index-DUlTrD1u.js` sha256 `a26e5447...`; Site Manager
  `main-0.2678141...`/`main-7.89817...` (Session 16); www Next.js unchanged.
- Recovered/validated A+B sessions; A escalated to L2 (password) for email-flow tests.
- New negatives: `POST /api/sso/v1/password-strength` (v1) is zxcvbn-only; v2 returns policy
  requirements; no reflection. `email/verify/send` rejects CRLF (parse + email validation),
  uniqueness is case-insensitive; no header injection / ATO. A's email unchanged.
- Bounded GET-only SSO discovery (20 candidate paths) -> all `404`; no hidden endpoints.
- www Next: no `/_next/image`; `/api/*` 301 -> `store.ui.com` (out of scope).
- Runtime (Chrome MCP): `login?redirect=https://evil.com|//evil.com|javascript:alert(1)`
  do NOT redirect/execute; `www.ui.com/download/unifi` renders normally.
- Client-side `account-frame`/postMessage bridge re-analysed: `Rw()` posts PII only to
  `kw()`-validated parent (https + ui.com/ubnt.com/uisp.com); `Gge()='*'` only in non-prod;
  inbound Megaphone requires `source===parent` + `kw(origin)`; popup result uses self
  targetOrigin. Not Vulnerable (documents a previously unsummarised mechanism).
- Site Manager unaudited chunks: BroadcastChannel user-sync is same-origin; invite role
  forward is existing VULN-20261114-001 (still Unresolved, no invitation); SW fetch proxy is
  SW-scoped. No new exploit.
- Status: 47 routes unchanged (32 done / 15 blocked). No new high-impact finding;
  `confirmed-vuln.txt` unchanged; no Discord notification.
- Ledger: `result/server-side/account.ui.com/session26-ledger.md`;
  evidence `result/server-side/account.ui.com/traffic/session26-newcover.txt`.
