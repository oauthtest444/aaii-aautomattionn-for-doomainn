# Session 25 — 2026-11-23 (continuation; no new high-impact finding)

Scope: approved components only (`ui.com`, `www.ui.com`, `account.ui.com`, `sso.ui.com`,
`account.svc.ui.com`, `cloudaccess.svc.ui.com`). Account A (`testttt12`,
`d8946fad-2b8e-4cf0-82c5-5d955b57b829`) and Account B (`test-account-b`,
`7c5aab2b-e568-40de-a7a5-ec27df1db94b`) sessions recovered from prior run log and
validated (`GET /api/sso/v1/user/self` -> `200`).

Builds unchanged since Sessions 18–24: `account.ui.com` `index-DUlTrD1u.js`
(sha256 `a26e5447814525949b83fe3e5b39dde4d2145fddfad86f6fd96596782b680f5c`);
`www.ui.com` Next.js dpl `ebfbbf36...`. No new code to diff.

## New / changed coverage
| Method | Endpoint | Auth | Test | Result | Status |
|--------|----------|------|------|--------|--------|
| GET | `https://sso.ui.com/api/sso/v1/zendesk_login` | none / A | unauth, A cookie; `return_to` = evil/`//`/`javascript:` | unauth `302 -> account.ui.com/login`; auth `302 -> ubnt.zendesk.com/access/jwt?jwt=...&return_to=<v>`; Zendesk hop normalizes `return_to` to `help.ui.com/hc` | Not Vulnerable (no open redirect) |
| GET | `zendesk_login` + `Origin: https://evil.ui.com` | A | CORS on 302 | `ACAO: https://evil.ui.com`, `ACAC: true`; body empty; JWT only in `Location` (not readable via fetch manual/follow) | Not Vulnerable (JWT not CORS-readable) |
| GET | `/api/sso/v1/user/self?callback=/jsonp=/format=` | A | JSONP probe | `406 NOT_ACCEPTABLE` / `404`; no JSONP | Not Vulnerable |
| GET | `/api/sso/v1/shopify_login` | none | `redirect`/`return_to`/`shop`/`//`/`javascript:` | always `302 https://account.ui.com/login?shopify=true&region=us` | Not Vulnerable |
| PUT/DELETE | `/api/sso/v1/user/{uuid}/address/{id}` | A, B | cross-uuid and BOLA on A-owned disposable address | route `404 Not Found` (HTML) for path form | Not Vulnerable |
| POST | `/api/sso/v1/user/{B}/address` | A | cross-uuid write | `403 mismatching UUID` | Not Vulnerable |
| POST | `/api/sso/v1/user/self/addresses {user:B}` | A | body ownership override | `201` created for A (`user` = A); body `user` ignored | Not Vulnerable |
| PUT/DELETE | `/api/sso/v1/user/self/addresses/{A_id}` | B | cross-account | `404 No SSOAddress matches` | Not Vulnerable |
| GET | `https://www.ui.com/` + hostile cookies / XFH / XFP / `//` paths | none | middleware/cookie redirect | `200`, `x-middleware-rewrite: /us/en`, cookies reset to EN/US; `//`/`%2f%2f` -> `404`; no `Location` | Not Vulnerable |

Disposable addresses created for the BOLA test were deleted (A `204`); A's address set
restored to its two pre-existing entries; B still has none.

## Recon (outside approved component list — observed only, not tested)
Passive subdomain discovery (hackertarget + rapiddns + bundle refs; no DNS brute force):
94 `ui.com` hosts resolved. No dangling/claimable CNAME found (JFrog `artifacts`,
Zendesk `help`, SendSafely `secure-uploads`, Statuspage `status`, CloudFront `unifi`).
`*.blog.ui.com` hosts fail TLS (cert does not cover them). `blog.ui.com`,
`community.ui.com`, `design.ui.com`, `mobility.ui.com`, `help.ui.com` are NOT in the
approved component list and were not security-tested; recorded in `out-of-scope.txt`.
This does not change the credentialed-CORS status: still no attacker-controlled
`*.ui.com` origin was found within scope.

## Status
- No new confirmed high-impact finding; `confirmed-vuln.txt` unchanged; no Discord notification.
- Evidence: `result/server-side/account.ui.com/traffic/session25-zendesk-login-cors-jsonp.txt`.
