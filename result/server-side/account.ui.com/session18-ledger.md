# Session 18 server-side ledger — 2026-11-20

Target: `ui.com` (domain-only), continuation (target hash `3353d9c6...`, preserved).
Auth: recovered still-valid A (`d8946fad...`, tan.tiger5564) and B
(`7c5aab2b...`, overrated.chinchilla337) `UBIC_AUTH` JWTs from the prior session log;
`GET https://sso.ui.com/api/sso/v1/user/self` -> `200` for both. B was re-promoted to
L2 with `POST /user/self/login/level {password}` -> `200
{"level":2,"time_left_seconds":1800}` (new cookie).

## Bundles
- `account.ui.com` changed from `index-CYDY7PBp.js` to `index-DUlTrD1u.js`
  (6,941,256 B, sha256 `a26e5447814525949b83fe3e5b39dde4d2145fddfad86f6fd96596782b680f5c`).
- Diff against the prior `index-CYDY7PBp.js` (7,150,439 B, sha256
  `14c9788ebdf32e9a2d9763821836589c4703e5910a2aade9f5e55ffce2d14a1b`):
  98 API paths and 42 route paths in both, identical sets; no endpoint or route
  added/removed. Sink counts unchanged: `dangerouslySetInnerHTML` 18, `.innerHTML=`
  16, `eval(` 0, `new Function` 0, `document.write` 0, `postMessage` 8, message
  listeners 4. This is a build/dependency refresh.
- `www.ui.com` unchanged `/microsite/static/index-BfxHSOgp.js` (sha256
  `0722ab3b...eae58f9`). Site Manager `main-0.2678141...` (`5bccf419...`),
  `main-2.99fff...` (`ad705...`), `main-7.89817c...` (`c9b7ad...`) unchanged from
  Sessions 16/17. `activate.ui.com` unchanged (`index-1CNh1WqS.js`).

## Client-side route inventory gap
- `/subscribe` exists in the route config but was absent from `testing-inventory.json`.
  Added as route 38 (account-ui). Its component (`NBt`/`MBt`) reads `?product=` and
  redirects only to fixed internal paths (`/subscriptions`, cloud-storage/site-support
  subscription builders). No external URL, `javascript:`, or attacker-controlled
  navigation target. See `result/client-side/account.ui.com/subscribe/report.md`.
- This makes the all-scope tally 46 routes = 38 account-ui + 8
  www/unifi/activate; 31 done / 15 blocked.

## Tests and results
| Method | Endpoint | Auth | Baseline | Test | Result | Status |
|--------|----------|------|----------|------|--------|--------|
| PUT | `https://sso.ui.com/api/sso/v1/legacy/user/self/email` | L2 | `GET` -> 403 `AUTHENTICATION_FAILED` | `{}`; `{email,email_change_verification_code}`; `{email,oneTimePassword}`; `{email_change_verification_code}` | all `403 {"detail":"Incorrect authentication credentials.","error":"AUTHENTICATION_FAILED"}` | Blocked / not a standalone primitive |
| PUT | `https://account.ui.com/api/sso/v1/legacy/user/self/email` | L2 | - | `{}` | CloudFront `403` HTML `This distribution is not configured to allow the HTTP method` | Edge blocks PUT; endpoint remains untestable on this host |
| GET | `https://sso.ui.com/api/sso/v1/legacy/user/self/email` | L2 | - | - | `403 AUTHENTICATION_FAILED` (matches prior sessions) | Blocked |
| GET | `https://account.ui.com/subscribe?product=cloud-storage` | auth | - | code review of `NBt`/`MBt` | redirect only to internal subscription paths | Not Vulnerable (no open redirect) |

## Notes
- The legacy change-email API is still not reachable with a normal `UBIC_AUTH`
  session, even after L2 re-auth. Prior sessions established the UI gates it on
  `email_changeable`, which the current login `499` response does not include.
- The current profile email-change flow (`POST /user/self/email/verify/send` +
  `PUT /user/self`) remains the reachable path; its validation was already covered
  in Sessions 10/13 (unique-email and code-to-email binding enforced).
- `account.ui.com` rejects PUT at the CloudFront edge for this path; API tests that
  need PUT should use the in-scope `sso.ui.com` host.

## Evidence
- `result/server-side/account.ui.com/traffic/session18-legacy-email.txt`
- `result/server-side/account.ui.com/traffic/session18-bundle-diff.txt`
- `result/client-side/account.ui.com/subscribe/report.md`

## Conclusion
No new confirmed high-impact vulnerability (no XSS/CSTI/IDOR/BAC/open-redirect).
`confirmed-vuln.txt` unchanged; no Discord notification sent.
