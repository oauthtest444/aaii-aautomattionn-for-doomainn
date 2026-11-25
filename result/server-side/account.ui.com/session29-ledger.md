# Session 29 test ledger — 2026-11-25T08:52Z (continuation, decision=preserved)

Target: `ui.com` (domain-only). In-scope components per `result/scope.md`:
`account.ui.com`, `www.ui.com`, `sso.ui.com` (+ UI-observed `account.svc`/`cloudaccess`).
Agent/model: opencode / deepseek-v4.1-flash-free. Chrome DevTools MCP connected.

## Build state (no new JS to diff)
- `account.ui.com` bundle: `assets/index-YVfMK5j0.js`, 6,961,507 B,
  sha256 `5cb23f647dd2ec363085f9c31da9c8d6d7fc64c0d15811f9fb129a97316c7bfa`
  (identical to Session 28; 98 `/api/...` string paths extracted — same set).
- `www.ui.com`: `dpl=cf2ef4894382a44b88f852eabec10b8a61099721` (identical to Session 28).
- `sso.ui.com`: unchanged.

## New coverage this session (all safe, read-only / bounded)
| # | Test | Method/Path | Auth | Result | Status |
|---|------|-------------|------|--------|--------|
| 1 | OIDC discovery document | `GET https://sso.ui.com/.well-known/openid-configuration` | none | `200` JSON: only `issuer`, `jwks_uri`, `RS256` id_token, claims `sub/iss/exp`; **no** authorization/token/userinfo endpoints | Informational |
| 2 | JWKS | `GET https://sso.ui.com/.well-known/jwks.json` | none | `200`; one RSA-2048 `RS256` signing key | Not Vulnerable |
| 3 | OAuth/OIDC sibling paths | `GET /oauth/{authorize,token,userinfo}`, `/api/sso/v1/oauth/*`, `/saml/metadata` | none | `404` | Not Vulnerable |
| 4 | MSP IdP backend (bundle config) | `GET /api/fabrics/base/msp/v1/{msp,idp,idp/configuration,idp/credentials,idp/scim-token,idp/sync-targets,idp/sync-jobs/1}`, `/v2/idp/directory/groups` | A L1 | all `403 {"code":"no_msp_membership"}`; unauth `401` | Not Vulnerable |
| 5 | Zendesk search captcha gate | `POST account.svc /zendesk/search_tickets`, `/zendesk/search_ccd` | A L1 | no token `400 "reCAPTCHA token was not provided"`; dummy token `403 "Did not pass reCAPTCHA validation"` — captcha enforced before query | Not Vulnerable |
| 6 | Zendesk ticket list filter | `GET /zendesk/tickets?requester_id={B uuid}` | A L1 | `404 Not found` (path form only; no cross-account filter) | Not Vulnerable |
| 7 | Login type-juggling / NoSQL | `POST sso /login/2fa` with `token` = `""`,`true`,`0`,`[""]`,`{"$ne":null}`,`{"$gt":""}`,`{"toString":...}` | pre-MFA A | `400 "Not a valid string."` / empty `400` / `0` `403 Invalid credential` — strict string validation | Not Vulnerable |
| 8 | Login/email type-juggling | `POST sso /login` & `/login/email` with object/array `user`/`password` | none | `400 "Not a valid string."` (then shared `429 RATE_LIMITED`) | Not Vulnerable |
| 9 | Assurance-level logic | `POST /api/sso/v1/user/self/login/level` wrong / empty / missing password | A L1 | `403 INVALID_CREDENTIAL` / `400` / `400`; level stays `1` | Not Vulnerable |
| 10 | Assurance refresh at L1 | `POST /login/level/refresh {}` | A L1 | `499 L2_REQUIRED`; level stays `1` | Not Vulnerable |
| 11 | Runtime login page | Chrome MCP `https://account.ui.com/login` | none | page renders (email + remember me); no password field pre-step | Informational |
| 12 | Runtime redirect param | Chrome MCP `login?redirect=javascript:alert('PM_TRACE_29')` | none | no navigation/execution; stays on `account.ui.com/login` | Not Vulnerable |
| 13 | Subdomain recon (CT) | crt.sh `%.ui.com` → 1,569 names / 393 non-UUID | none | no dangling/takeover-prone CNAME found. `dev-store.ui.com`→`ubnt-dev.myshopify.com` is a **live** password-protected Shopify store (`powered-by: Shopify`, theme id). `help.ui.com`→`ubnt.zendesk.com` live. `training.ui.com`→`saas.moonami.com`. No attacker-controlled `*.ui.com` origin | Unresolved (CORS prerequisite still absent) |
| 14 | `include`/`expand` data expansion | `GET /api/sso/v1/user/self?include=roles,permissions,scopes` etc. | A L1 | `include=roles` adds only fixed beta role names; `permissions`/`scopes`/`expand` -> null/unchanged. `settings=true` adds normal settings (tenant, passwordless_enabled). No secret/PII expansion | Not Vulnerable |
| 15 | Unauth avatar methods | `GET/PUT/DELETE/PATCH/POST /api/sso/v1/user/{B uuid}/picture` | none | GET `200` (known excluded low, public avatar URL); PUT/PATCH `405`; DELETE/POST `401`. No unauth write | Not Vulnerable |

## Conclusion
- No new high-impact (XSS/CSTI/IDOR/BAC/open-redirect) finding.
- `result/confirmed-vuln.txt` unchanged (no entry added); Discord notification bar not met.
- Credentialed-CORS primitive remains **blocked**: no attacker-controlled `*.ui.com` origin.

## Test accounts used
- A: `tan.tiger5564@maildrop.cc` (UUID `d8946fad-…`), L1 `UBIC_AUTH` recovered/validated.
- B: `overrated.chinchilla337@maildrop.cc` (UUID `7c5aab2b-…`), L1 `UBIC_AUTH` recovered/validated.
- Tokens are disposable test credentials; not duplicated into reports.
