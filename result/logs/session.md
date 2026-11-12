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
