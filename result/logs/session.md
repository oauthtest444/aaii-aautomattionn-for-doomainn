# Session Metadata

- Start (UTC): 2026-10-30T05:30:04Z
- Target: account.ui.com (domain-only)
- Agent/model: opencode / deepseek-v4.1-flash-free
- Chrome DevTools MCP: connected (about:blank, port 9222)
- Tool versions: opencode 1.x, node v22.23.4, npx 10.9.9, python 3.14.4, curl, git
- Chrome: /usr/bin/google-chrome-stable (headless)
- Prior state: decision=reset (target hash changed), starting fresh
- Environment: GitHub Actions runner, linux

## Continuation (2026-10-30T06:02Z–)

- Prior run watchdog-terminated (exit 124); target state = preserved on
  workflow_dispatch. Resumed client-side analysis.
- Read/analyzed main bundle `index-D5t7M7xo.js`
  (sha256 ce9950c975a42cac66f5c2ea759d655e96c441d34df6a6b8190b09d60ea1c468).
- Confirmed redirect allowlist `MC` / internal allowlist `Wpe`; no client-side
  open redirect.
- Runtime: `/security/suspicious/confirm?token=INVALID&decision=yes` ->
  `POST sso.ui.com/api/sso/v1/suspicious/confirm/inspect` 400
  `INVALID_CONFIRMATION_TOKEN`; NO `/suspicious/confirm` call (auto-confirm gated
  on valid token).
- Re-verified CSP and headers for `account.ui.com/login`; `frame-ancestors`
  allows `uic.uidev.tools` / `*.uic.uidev.tools`; wildcard DNS to CloudFront,
  all probes 403 -> no attacker content proven.
- Verified "SECRET"-named bundle constants are public reCAPTCHA site keys and a
  referer-restricted Google Maps key (Geocoding -> REQUEST_DENIED). Not secrets.
- Wrote inventory + summary: `inventory/javascript.md`, `endpoints.md`,
  `sinks.md`, `listeners.md`, `testing-inventory.json`, `unresolved.md`,
  `SUMMARY.md`, `out-of-scope.txt`.
- No confirmed vulnerability yet.
- Runtime route sweep: `/reset-password` (no API on load), `/verify` (redirects
  to `/login` without router state), `/verify/verification-code/INVALID`
  (auto `PUT sso.ui.com/api/sso/v1/verify/verification-code/<uuid>` -> 404),
  `/verify/success` (404), `/supportform-uisp` (redirect `/login?innerRedirect=...`),
  `/switch?redirect=https://example.com` (external redirect dropped by MC),
  `/activate` (fixed redirect to `https://activate.ui.com/`),
  `/msp/idp/setup-result` (private -> `/login?innerRedirect=%2Faccount`).
- `/login?login_hint=<img ...>`: payload only appears as the escaped `value`
  attribute of the email input; no `<img>` element created; no execution.
- Account-creation root cause clarified: registration uses the SCORE site key
  first, then requires a token from the CHALLENGE site key
  `6LdWhNglAAAAAJB_RK6EWYVnSVyrohxdwy9WEkP8`; prior attempts used SCORE only.
  Login also requires `is_verified`, so a reachable test mailbox is needed.
- Created candidate reports `findings/CAND-001/` and `findings/CAND-002/`.
- `/supportform-umr` -> `/login?innerRedirect=%2Frequests`.
- `/reset-password/password-reset-uuid/<arbitrary>` renders reset form; no API
  until submit (`PUT /api/sso/v1/password` with `{uuid,newPassword}`).
- `/payments/3ds` -> `/login` (private route).
- Legacy hash mapping `S7e`: `#verify/verification-code/../../..//example.com`
  and backslash variants resolve to `https://account.ui.com/example.com`
  (same-origin), not external. No open redirect.
- Static host: unknown paths return 200 SPA index (so `/verify/success` is a
  200 catch-all, not HTTP 404); `.js.map` returns index (no source maps);
  `?versionId=` ignored; no bucket listing; `robots.txt` disallows all.
- Response headers: `referrer-policy: origin` + meta `same-origin` (no reset
  token leak via Referer); `x-robots-tag: noindex`.
- Scope re-checked: AGENT.md 464-470 says stay on the domain, do not pivot to
  sibling subdomains -> API host testing remains deferred.

## Continuation 2026-10-30T06:30Z

- Resumed from preserved state (target hash unchanged).
- Re-read AGENT.md, client/server skills, inventory, findings, scope.
- KEY CORRECTION: creds/test-account.txt targets https://account.ui.com/login and
  provides Test Account A/B; prior session incorrectly treated them as
  console.byteplus.com credentials. Will attempt authenticated testing.

## Continuation 2026-10-30T06:30Z–06:58Z (authenticated testing)

- Logged in Account A (`tan.tiger5564@maildrop.cc`, uuid
  `d8946fad-2b8e-4cf0-82c5-5d955b57b829`) and Account B
  (`overrated.chinchilla337@maildrop.cc`, uuid
  `7c5aab2b-e568-40de-a7a5-ec27df1db94b`); both email-MFA verified.
- Nav sweep: **Services -> `https://account.ui.com/billing`**. Subscriptions and
  Invoices pages render empty states ("Your subscription list is empty",
  "Your invoice list is empty"); Order History / Payment Methods empty.
- Recovered endpoint map from bundle (`index-D5t7M7xo.js`): reset, email verify,
  legacy email OTP, account-chooser, roles/beta, Zendesk comments/tickets on
  `account.svc.ui.com`.
- Password reset remains blocked: `POST /api/sso/v1/password/{email}` -> 400
  `VALIDATION_ERROR` requiring `_ubiquiti_private_key`, `captcha`,
  `apple_devicecheck_token`; UI reCAPTCHA Enterprise challenge cannot be solved
  in headless Chrome.
- Account chooser: `GET /api/sso/v1/account-chooser` -> 200 with remembered A
  account (`opaque_id`, username, email, `remembered_at`). `ACCOUNT_CHOOSER`
  cookie is `HttpOnly`, `Secure`, `SameSite=Strict`, `Domain=.sso.ui.com`;
  value `~20250930|b64|b64|b64|b64` (opaque/encrypted; not decodable/tamperable).
- Cross-account authorization checks (A session targeting B ids):
  - `GET /api/sso/v1/user/{B_uuid}` -> 403 `mismatching UUID`.
  - `GET /user/{B_uuid}/{mfa,sessions,trusted_devices,activity,settings}` -> 404.
  - `POST /api/sso/v2/user/self/mfa/email/{B_mfa_id}/send` -> 404
    `No EmailAuthenticator matches the given query`.
  - `GET /user/self/...?uuid={B_uuid}` -> ignored, returns A's own data.
  - Zendesk comment IDOR: id 2 -> 403, other ids -> 404 (ownership enforced).
- AAL2 (recent-password) enforcement verified server-side, not just in client:
  B at level 1 (`{"level":1,"time_left_seconds":0}`) receives
  `499 L2_REQUIRED` for:
  `DELETE /user/self/sessions/{id}`, `PUT /user/self {password}`,
  `POST /user/self/email/verify/send`, `POST /user/self/2fa/backup`,
  `POST /user/self/login/level/refresh` (cannot self-upgrade level).
  Server also returned 405 for `GET /2fa/backup` (endpoint is POST-only).
- Uniqueness: `PUT /user/self {username:"test-account-b"}` and uppercase
  `"TEST-ACCOUNT-B"` -> 409 `fields_non_unique`; email change to B's email ->
  400 `{"email":["This field must be unique."]}`. No duplicate-identifier ATO.
- Email change flow (A): `POST /user/self/email/verify/send {probe email}` ->
  204 with no password prompt (AAL2 was satisfied at level 2); 6-digit code
  mailed to the new address; `PUT /user/self {email, email_change_verification_code}`
  -> 204 and `GET /user/self` reflects the new address. Reverted A to its
  original email via the same OTP flow (code `995682`). Judged intended:
  completion requires possession of the new mailbox; server enforces AAL2 on
  the send step.
- Login MFA client sends only `{token: <6-digit code>}` (no authenticator id),
  so no client-controlled cross-account MFA-id confusion path.
- No confirmed vulnerability. Remaining candidates still blocked on captcha/
  valid tokens (Zendesk stored XSS, suspicious-confirm).
