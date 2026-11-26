# Session 30 test ledger — 2026-11-26T07:57Z (continuation, decision=preserved)

Target: `ui.com` (domain-only). In-scope components per `result/scope.md`:
`account.ui.com`, `www.ui.com`, `sso.ui.com` (+ UI-observed `account.svc`/`cloudaccess`).
Agent/model: opencode / deepseek-v4.1-flash-free. Chrome DevTools MCP connected.

## Build deltas (new deploys since Session 29)
- `account.ui.com`: `assets/index-CGj0vhTX.js`, 7,278,468 B,
  sha256 `970b5e85d8ffc487ace4411370a024fb8f7fa696ecea35157d26f417dd9c7375`
  (previous `index-YVfMK5j0.js` 6,961,507 B sha256 `5cb23f64…`).
  99 → 105 `/api/...` paths; sink counts identical (18 `dangerouslySetInnerHTML`,
  23 `innerHTML`, 0 `eval`/`Function`/`document.write`). Delta = new CyberSecure feature
  (strings: `cyberSecure`, `rule_set_pro`, CyberSecure i18n + UI). No change to the
  redirect validator or auth flows.
- `www.ui.com`: redeployed `dpl=e1f4c3c34668db11c8c0f1d5e0bd0c3e76f6ce60`
  (previous `cf2ef489…`). 36 initial Next.js chunks; no new user-controlled source/sink;
  `?link=` on `/download/unifi/download-started` still stripped/ignored at runtime
  (final URL has no `link`, no evil link rendered). `dl.ubnt.com` allowlist strings are in
  a lazy chunk not in the initial set (unchanged behavior).
- `unifi.ui.com`: new Site Manager bundle (`main-0.b06362b8…`, `main-7.8d401a13…`,
  runtime `393f084b…`) plus new `chunk-resolve-legacy-pseudonym-sweep.e88f3e91.js`.
  The new chunk only deletes a legacy localStorage key and `portal-resolve-pseudonym-v1-*`
  IndexedDB databases — no user input. Extracted API paths are unchanged (239 strings,
  no new path vs inventory). No new postMessage origin weakness (known account-bridge /
  SW / websocket handlers only).

## New coverage this session
| # | Test | Method/Path | Auth | Result | Status |
|---|------|-------------|------|--------|--------|
| 1 | New CyberSecure UI route | `GET /subscriptions/cyber-secure/subscribe?gateway_hardware_id=…&org=…&open=…` | none | `302` to `/login?innerRedirect=<encoded route>` | Not Vulnerable |
| 2 | Same route, authenticated | same | A L1 | `200` SPA, renders "Gateway not available"; params not reflected in app DOM (only Stripe iframe `#url`) | Not Vulnerable |
| 3 | Client-controlled `org` scope | `GET enterprise.svc…/organizations/{org}/billing/…` (triggered by route) | A L1 | marker org → `400 invalid_organization_id`; `/organizations?status=active` → `{"data":[]}` | Out of Scope (enterprise.svc not approved) |
| 4 | New device-scoped billing endpoints | `POST ips.svc /api/v2/subscribe/rule_set_pro`, `/plans`, `/invoices/preview`, `/licenses/validate`, `/subscriptions/devices` | A L1 | referenced by bundle only; `ips.svc` not approved → not tested | Out of Scope |
| 5 | New in-scope endpoint | `GET cloudaccess.svc /api/v1/sites?includeStatistics=true` | A L1 (SigV4 via app) | `200 {"data":[],"nextToken":null}`; unauth/no-SigV4 → `403 Missing Authentication Token` | Not Vulnerable |
| 6 | New unifi routes | `/iam/roles`, `/orgsettings` (+ route allowlist `/iam/roles/:roleId`, `/iam/roles/new`, `/iam/all-sites`, `/msp/customers`, `/msp/team`, `/account/info`, `/consoles/:hostId/devices`) | A L1 | render Site Manager "Get started with UniFi" empty state; MSP API `403` | Not Vulnerable (no data) |
| 7 | www new build `?link=` | `GET /download/unifi/download-started?link=https://evil.example/pwn` | none | query stripped; no redirect, no evil href | Not Vulnerable |

## Conclusion
- No new high-impact (XSS/CSTI/IDOR/BAC/open-redirect) finding.
- `result/confirmed-vuln.txt` unchanged (no entry added); Discord notification bar not met.
- Credentialed-CORS primitive remains **blocked** (no attacker-controlled `*.ui.com` origin).

## Test accounts used
- A: `tan.tiger5564@maildrop.cc` (UUID `d8946fad-…`), fresh email-OTP login this session.
- Tokens are disposable test credentials; not duplicated into reports.
