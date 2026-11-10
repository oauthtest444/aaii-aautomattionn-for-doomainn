# Session Metadata

- Start time (UTC): 2026-11-10T14:45:53Z
- Run id: 42837084733 (scheduled)
- Target(s): ui.com (domain-only), operator note points at https://account.ui.com/login
- Agent/model: opencode / deepseek-v4.1-flash-free
- Resume decision: reset (target hash changed)
- Environment: GitHub Actions linux runner
- Tool versions:
  - opencode: `/home/runner/.opencode/bin/opencode`
  - node: 22.23.4
  - curl, git, npx, python3 present
  - Chrome: /usr/bin/google-chrome-stable (headless, DevTools at 127.0.0.1:9222)
- Chrome DevTools MCP: available (list_pages succeeded, about:blank selected)

## Session 2 (continuation)
- Start time (UTC): 2026-11-10T15:24:43Z
- Run id: 42843791805 (workflow_dispatch, resume/preserved)
- Target: ui.com -> account.ui.com
- Prior state: 37 routes discovered, login flow proven, no routes fully tested
- Chrome DevTools MCP: available (about:blank)

## Session 3 (continuation)
- Start time (UTC): 2026-11-10T16:05:19Z
- Run id: 42850898064 (workflow_dispatch, resume/preserved)
- Target: ui.com -> account.ui.com
- Prior state: 9 routes fully tested, 26 pending, 2 partial/blocked; no confirmed vulns
- Chrome DevTools MCP: available (Chrome/157, about:blank)

## Session 4 (continuation)
- Start time (UTC): 2026-11-10T23:09:28Z
- Run id: 42920600593 (scheduled, resume/preserved)
- Target: ui.com -> account.ui.com
- Prior state: 10 routes fully tested, 25 pending, 2 partial/blocked; no high-impact vulns
- Chrome DevTools MCP: available (Chrome/157, DevTools 127.0.0.1:9222)

### Session 4 test log (UTC)
- 23:14-23:29 Authenticated Account A (MFA), then Account B in isolated context `bb`.
- 23:15 `POST /api/sso/v1/user/self/device` -> 204 (trust device).
- 23:20 `GET /user/self/login/level` -> level 1; `POST` with password -> level 2 (1800s); `DELETE` -> level 1.
- 23:22-23:24 Cross-account A-object access from B: addresses PUT/DELETE, session DELETE, trusted-device DELETE, MFA DELETE/send -> all 404.
- 23:25 Picture upload: SVG -> 415; PNG -> 200 and served as image/png from account-cdn.svc.ui.com; PNG bytes with text/html/text/plain -> URL returned but S3 AccessDenied (no content-type control).
- 23:30-23:33 Mass assignment: PUT /user/self {twofa_enabled} ignored; username change -> 499 L2_REQUIRED at L1; email -> 400 "Email change request not found".
- 23:34 MFA add email -> 499 L2_REQUIRED; `POST /2fa/backup` -> 499 L2_REQUIRED (corrects VULN-20261110-003).
- 23:37 `POST /user/{A_uuid}/roles/beta` from B -> 403 "mismatching UUID"; activity uuid query ignored.
- 23:39 Password reset request -> requires `_ubiquiti_private_key`, `captcha`, `apple_devicecheck_token`; fake captcha 403; spoofed Host -> CloudFront 403.
- 23:41-23:44 CORS re-confirmed (sso.ui.com, cloudaccess.svc.ui.com); wildcard *.ui.com -> CloudFront 302 to login; /index.html fixed SPA from S3; PUT/POST/DELETE 403.
- 23:45 `GET /api/sso/v1/logout` -> 302 + clears UBIC_AUTH/UBIC_2FA/CloudFront cookies; VULN-20261110-004 documented.
- 23:47 Updated testing-inventory.json (21 done / 10 partial / 6 blocked, 30 endpoints), progress.md, SUMMARY.md, findings.
