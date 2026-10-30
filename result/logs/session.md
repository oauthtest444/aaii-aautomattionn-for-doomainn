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
