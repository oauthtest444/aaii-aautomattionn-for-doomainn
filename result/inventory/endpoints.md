# Endpoint Inventory

Bases: `https://sso.ui.com` (SSO), `https://account.svc.ui.com` (account BE),
`https://fabric.svc.ui.com` (MSP), `https://billing.svc.ui.com`, `https://enterprise.svc.ui.com`.
All requests used test accounts A/B. Cookies: `UBIC_AUTH` (HttpOnly, `.ui.com`, SameSite=Lax).

| Method | Path | Host | Auth | Status | Result / notes |
|--------|------|------|------|--------|----------------|
| POST | /api/sso/v1/login/email | sso | no | 200 | login method discovery (user enum) |
| POST | /api/sso/v1/login | sso | no | 200 | password login -> 2FA challenge |
| POST | /api/sso/v1/login/2fa | sso | partial | 200 | email OTP accepted |
| POST | /api/sso/v1/logout | sso | yes | 200 | |
| GET | /api/sso/v1/user/self?settings=true&include=tenant | sso | yes | 200 | full self profile |
| PUT | /api/sso/v1/user/self | sso | yes | 204/400 | `role/roles/is_admin/permissions/accounts` ignored; `email` -> 400 |
| GET | /api/sso/v1/user/self/activity | sso | yes | 200 | self only; `?uuid=B` ignored |
| GET/DELETE | /api/sso/v1/user/self/sessions | sso | yes | 200/404 | other user's session id -> 404 |
| GET/POST/DELETE | /api/sso/v1/user/self/trusted_devices | sso | yes | 200/204 | other user's device delete -> 204 no-op |
| GET | /api/sso/v1/user/self/mfa | sso | yes | 200 | lists authenticator ids |
| GET/PUT | /api/sso/v1/user/self/mfa/email/{id} | sso | yes | 405 | method not allowed |
| DELETE | /api/sso/v1/user/self/mfa/email/{id} | sso | yes | 404 | other user's id -> not found |
| POST | /api/sso/v2/user/self/mfa/email/{id}/send | sso | yes | 404 | other user's id -> No EmailAuthenticator |
| GET | /api/sso/v1/user/self/roles | sso | yes | 200 | beta roles list |
| POST | /api/sso/v1/user/{uuid}/roles/beta | sso | yes | 403 | `mismatching UUID` for other user |
| GET/POST | /api/sso/v1/user/self/addresses | sso | yes | 200/201 | `user` field ignored on create |
| PUT/DELETE | /api/sso/v1/user/self/addresses/{id} | sso | yes | 405/404 | other user's address protected |
| POST | /api/sso/v1/address/validator | sso | yes | 200 | address validation |
| POST | /api/sso/v1/user/self/token/setup | sso | yes | 400 | requires client-supplied `token` |
| POST | /api/sso/v1/user/self/token/login | sso | ? | - | not tested (no token) |
| POST | /api/sso/v1/passwordless/options | sso | no | 200 | WebAuthn challenge, `allowCredentials:[]` |
| POST | /api/sso/v1/suspicious/confirm/inspect | sso | yes | 400 | requires `confirm_token` |
| POST | /api/sso/v1/password/{user} | sso | no | 400 | requires `_ubiquiti_private_key`, `captcha`, `apple_devicecheck_token` |
| PUT | /api/sso/v1/verify/password/{uuid} | sso | no | 404 | body `{password}`; user uuid is not the reset token |
| POST | /api/sso/v2/users | sso | no | 403 | `CHALLENGE_RECAPTCHA_TOKEN_REQUIRED` |
| GET | /api/sso/v1/user/self/zendesk_user | sso | yes | 405 | |
| POST | /api/sso/v1/user/self/zendesk_user | account | yes | - | not tested |
| GET | /api/sso/v1/account-chooser | sso | yes | - | not tested |
| POST | /zendesk/user | account | yes | - | not tested |
| POST | /zendesk/ticket | account | yes | 201 | created ticket id 6133375 (test-owned, closed) |
| GET | /zendesk/tickets | account | yes | 200 | own tickets only |
| GET | /zendesk/tickets/closed | account | yes | 200 | |
| GET | /zendesk/tickets/ccd | account | yes | - | |
| GET | /zendesk/comments/{id} | account | yes | 403 | other user's ticket -> `FORBIDDEN` |
| POST | /zendesk/comment/{ticketId} | account | yes | 400 | requires `x-captcha-token` |
| PUT | /zendesk/ticket/{ticketId}/close | account | yes | 403 | other user's ticket |
| GET | /api/fabrics/base/msp/v1/msp | fabric | yes | 403 | `no_msp_membership` |
| GET | /api/fabrics/base/msp/v1/msp/idp-enforcement | fabric | yes | 405 | GET not allowed |
| GET | /api/fabrics/base/msp/v2/idp/directory/groups | fabric | yes | 403 | `no_msp_membership` |
| GET | /api/v2/customers/self | billing | yes | 404 | `Customer not found` |
| GET | /api/v2/customers/self/subscriptions | billing | yes | 404 | `Customer not found` |
| GET | /api/v2/products | billing | yes | 200 | public product list |
| GET | /api/v1/organizations | enterprise | yes | 200 | `{"data":[]}` |
| GET | /api/v1/devices/integrations/ssoa | cap | yes | 200 | empty collection |
| GET | /api/v1/users/integrations/ssoa/subscriptions | umr | yes | 200 | empty collection |
| GET | /api/v1/esim/devices | u5g-api | yes | 200 | empty collection |

## CORS observations
- `sso.ui.com` reflects any `Origin` whose host ends in `.ui.com` (e.g. `https://evil.ui.com`,
  `https://community.ui.com`, `https://store.ui.com`) and sets
  `Access-Control-Allow-Credentials: true`; preflight allows PUT/POST/PATCH/DELETE and
  `content-type`, `max-age=600`, `vary: origin`.
- Non-`ui.com` origins (`https://evil.com`, `null`, `https://account.ui.com.evil.com`) receive
  no `Access-Control-Allow-Origin`.
- `account.svc.ui.com` returns 403 for origins other than `https://account.ui.com`.
- Requires an attacker-controlled `*.ui.com` origin to be exploitable; no such origin identified.

## Session 9 additions (Site Manager paths config)
| Method | Path | Host | Auth | Status | Result / notes |
|--------|------|------|------|--------|----------------|
| GET | /api/sso/v1/jwt/token | sso | yes | 200 | HS512 JWT (uuid, is_verified, exp, ui_session_id); edge WAF needs browser UA |
| GET | /api/sso/v1/jwt/token?redirect=`<url>` | sso | yes | 302/200 | 302 only for `http(s)://*.ui.com`; -> `sso.ubnt.com/.../login/<jwt>?redirect=...` (ubnt hop 404). No external/relative/javascript redirect |
| GET | /api/sso/v1/user/{uuid} | sso | yes | 200/403 | self only; other uuid -> `mismatching UUID` |
| GET/POST | /api/sso/v1/user/{uuid}/address | sso | yes | 200/201/403 | self only; body `user` ignored on POST |
| GET/POST | /api/sso/v1/user/{uuid}/console_groups | sso | yes | 200/400/403 | self only; POST needs name+consoles |
| GET | /api/sso/v1/account-chooser?<param> | sso | yes | 200 | `{"accounts":[]}`; paramless GET -> edge 403; POST -> 405; rate-limited |
| POST | /api/sso/v1/user/self/token/login | sso | yes | 404 | no longer present |
| POST | /api/sso/v1/user/self/token/setup | sso | yes | 404 | no longer present |

## Session 10 additions
| Method | Path | Host | Auth | Status | Result / notes |
|--------|------|------|------|--------|----------------|
| PATCH | /api/sso/v1/user/self/settings | sso | yes | 200 | `passwordless_enabled` persists; privilege fields (role/is_admin/uuid/email/username) ignored; PUT/POST 405 |
| GET | /api/sso/v1/user/self/login/level | sso | yes | 200 | `{level,time_left_seconds}` |
| POST | /api/sso/v1/user/self/login/level | sso | yes | 200/499 | `{password}` re-auth to L2 (password only by design) |
| POST | /api/sso/v1/user/self/login/level/refresh | sso | yes | 200/499/401 | 200 extends at L2; L1 -> 499 L2_REQUIRED; pre-MFA 401 |
| DELETE | /api/sso/v1/user/self/login/level | sso | yes | 200 | returns `{level:1}` but is a no-op on the token |
| POST | /api/sso/v1/user/self/email/verify/send | sso | yes | 204/400 | sends confirmation code to new address; used address -> 400 unique |
| POST | /api/sso/v1/user/self/zendesk_user | sso | yes | 200 | empty; body ignored; account.svc Zendesk email unchanged |
| POST | /api/sso/v1/suspicious/confirm/inspect | sso | yes | 400 | requires emailed `confirm_token` |
| POST | /create-credentials | cloudaccess | cookie | 200 | mints AWS STS creds (us-west-2) for SigV4; CORS primitive |
| GET | /invitations?type=all | cloudaccess | SigV4 | 200 | `[]` for test account; `/api/v1/invitations` is 404 |
| POST | /confirm-invitation | cloudaccess | SigV4 | 400 | body `{deviceId,verificationToken,role}`; bogus device -> DEVICE_OFFLINE; role client-controlled (VULN-20261114-001) |
| GET | /api/v1/hosts | cloudaccess | SigV4 | 200 | `{"data":[],"nextToken":null}` |
| GET | /devices | cloudaccess | SigV4 | 200 | `[]` |
| GET | /sites | cloudaccess | SigV4 | 200 | `{"sites":[],"nextToken":null}` |

## Session 12 additions (L2 authenticated, recovered session)
| Method | Path | Host | Auth | Status | Result / notes |
|--------|------|------|------|--------|----------------|
| GET | /api/sso/v1/account-chooser | sso | UBIC_2FA | 200 | pre-MFA returns caller's own `{opaque_id,username,email,picture_url,remembered_at}`; by design, informational |
| GET | /api/sso/v1/user/self/mfa | sso | UBIC_2FA | 401 | `is not allowed` pre-MFA; L2 -> 200 authenticator metadata (no secrets) |
| POST | /api/sso/v1/user/self/mfa/totp | sso | UBIC_2FA | 401 | pre-MFA denied; not exercised at L2 (would alter account MFA) |
| POST | /api/sso/v1/user/self/mfa/email | sso | UBIC_2FA | 401 | pre-MFA denied |
| DELETE | /api/sso/v1/user/self/mfa/email/{id} | sso | UBIC_2FA | 401 | pre-MFA denied |
| POST | /create-credentials | cloudaccess | UBIC_2FA | 401 | pre-MFA cannot mint STS credentials |
| POST | /api/sso/v1/user/self/login/level | sso | L1 | 200 | `{password}` -> `{level:2,time_left_seconds:1800}` + new UBIC_AUTH; documented password-only L2 |
| GET | /api/sso/v1/user/self/{sessions,trusted_devices,activity,addresses} | sso | L2 | 200 | own data only |
| GET | /api/sso/v1/user/{uuid}/{address,console_groups} | sso | L2 | 403 | other account -> `mismatching UUID` |
| GET/POST | /api/sso/v1/user/{uuid}[/address]?uuid=...&user=... | sso | L2 | 200/403 | params ignored; own data or 403 |
| GET | /zendesk/comments/{ticket} | account | L2 | 200/403 | own 200; cross-account A<->B 403 `FORBIDDEN` |
| GET | /api/v2/customers/self[/subscriptions] | billing | L2 | 404 | `Customer not found`; host outside approved component scope, UI-observed only |
| GET | /api/v2/products | billing | L2 | 200 | public product list (UI-observed) |
| POST | /api/sso/v1/user/self/mfa/email/{id}/verify | sso | UBIC_2FA/L1 | 401/400 | pre-MFA denied; L1 body `oneTimePassword`; cross-account -> 404 |
| POST | /api/sso/v1/user/self/mfa/email/{id}/send | sso | UBIC_2FA/L1 | 204/404 | own 204; cross-account 404 |
| POST | /api/sso/v1/user/self/mfa/totp | sso | L1 | 499 | `L2_REQUIRED` |
| POST/DELETE | /api/sso/v1/user/self/mfa/{totp,email}/{id} | sso | L2 | 404/405 | cross-account B ids -> 404; PATCH -> 405 |
| POST | /api/sso/v1/user/self/mfa/totp/{id}/verify | sso | L2 | 404 | cross-account B totp -> 404 |
| GET | /api/sso/v1/user/self/mfa/push/poll-login | sso | L1 | 400 | `Invalid session` without login push |
| GET | /api/sso/v1/user/self/mfa/push/{id}/poll-setup | sso | L1 | 404 | missing/expired setup id |
| POST | /api/sso/v1/user/self/2fa/reset | sso | L1/L2 | 404 | no route |
| POST | /api/sso/v1/user/self/2fa/backup | sso | L1/L2 | 499/201 | L1 -> `L2_REQUIRED`; L2 -> new codes |
| POST | /chat/messaging/jwt | account | L1 | 200/401 | binds JWT to session; body `email/external_id/user_id` ignored; unauth 401 |

## Session 15 additions
| Method | Path | Host | Auth | Status | Result / notes |
|--------|------|------|------|--------|----------------|
| POST | /api/sso/v1/user/self/zendesk_user | sso | L2 | 200 | empty; body `external_id`/`email`/`role` ignored |
| POST | /api/sso/v1/verify/email/{email} | sso | no | 405 | `resendVerificationEmail` is config-only (no call site) |
| POST | /zendesk/user | account | L2 | 200 | body `external_id`/`email`/`role`/`id` ignored, no persistence |
| POST | /zendesk/ticket | account | L2 | 400/429 | baseline `BAD_REQUEST`; follow-up `RATE_LIMITED`; creation input/captcha-gated |

## Session 16 additions
| Method | Path | Host | Auth | Status | Result / notes |
|--------|------|------|------|--------|----------------|
| GET | /api/sso/v1/user/self/roles | sso | L1 | 200 | fixed beta role list for A and B (not privilege-bearing) |
| POST | /api/sso/v1/user/self/roles | sso | L1 | 405 | `METHOD_NOT_ALLOWED`; roles not client-writable here |
| POST | /api/sso/v1/address/validator | sso | none | 204/400 | unauthenticated address validation; field errors only; CORS reflects `*.ui.com` (known class) |
| POST | /api/sso/v2/user/self/mfa/email/{id}/send | sso | L1 | 200/404/401 | own 200 + `otp_prefix`; cross-account 404; unauth 401 |
| PUT | /api/sso/v1/user/self | sso | L1 | 204/499 | `scopes`/`account_type`/`is_staff`/`groups`/`mfa_required`/`is_superadmin` not persisted; `session_ttl_seconds` -> `L2_REQUIRED` |

## Session 17 additions
| Method | Path | Host | Auth | Status | Result / notes |
|--------|------|------|------|--------|----------------|
| POST | /api/sso/v1/passwordless/options | sso | none | 200 | `{user}` -> WebAuthn `publicKeyCredentialRequestOptions` (`rpId: ui.com`, `allowCredentials: []`); no user-existence oracle; unknown user hits shared 429 |
| POST | /api/sso/v1/passwordless/login | sso | none | 400/429 | `{}` -> 400 `Invalid credential payload`; malformed credential structs -> 400; schema-valid attempts -> 429 RATE_LIMITED |
| GET | /zendesk/tickets/ccd | account | L1 | 200 | `{"tickets":[],"totalTickets":0}` for A/B; no data |
| GET | /zendesk/comments?ticket_id={id} | account | L1 | 404 | query-param form not supported; path form remains owner-checked (`403` cross-account) |
| GET | /chat/queue | account | L1 | 404/200 | session-bound queue position; 404 when not queued |
| POST | /chat/queue | account | L1 | 201 | body `{userId,department}`; `userId` is optional and ignored (missing -> 201); queue/JWT remain the session user's; arbitrary `department` echoed in `queueInfo` |
| DELETE | /chat/queue | account | L1 | 204 | removes own session queue entry |
| OPTIONS | /chat/queue | account | none | 403 | `Origin: https://evil.ui.com` rejected (account.svc CORS strict) |

## Session 25 additions
| Method | Path | Host | Auth | Status | Result / notes |
|--------|------|------|------|--------|----------------|
| GET | /api/sso/v1/zendesk_login | sso | none/A | 302 | NEW (not in SPA config). unauth -> `account.ui.com/login`; auth -> `ubnt.zendesk.com/access/jwt?jwt=<name/email/external_id>`. `return_to` forwarded but Zendesk normalizes -> `help.ui.com/hc`; no open redirect. CORS reflects `*.ui.com`+`ACAC:true` on 302, JWT only in `Location` (not readable) -> Not Vulnerable |
| GET | /api/sso/v1/shopify_login | sso | none | 302 | `redirect`/`return_to`/`shop`/`//`/`javascript:` ignored; fixed `account.ui.com/login?shopify=true&region=us` -> Not Vulnerable |
| GET | /api/sso/v1/user/self?callback=/jsonp=/format= | sso | A | 406/404 | no JSONP; `Accept: application/javascript` -> `406 NOT_ACCEPTABLE` |
| PUT/DELETE | /api/sso/v1/user/{uuid}/address/{id} | sso | A/B | 404 | path-form route unsupported (HTML 404); no BOLA via this path |
| POST | /api/sso/v1/user/{uuid}/address | sso | A | 403 | A -> `/user/{B}/address` = `mismatching UUID` (uuid enforced) |
| POST | /api/sso/v1/user/self/addresses `{user:B}` | sso | A | 201 | created for caller A; body `user` ignored (no owner mass-assignment) |
| PUT/DELETE | /api/sso/v1/user/self/addresses/{id} | sso | B | 404 | B -> A's address `No SSOAddress matches` -> Not Vulnerable |
| GET | https://www.ui.com/ (hostile cookies/XFH/XFP/`//`) | www | none | 200/404 | middleware rewrite `/us/en`, cookies reset EN/US; `//`/`%2f%2f` -> 404; no redirect/poisoning |

## Session 26 additions
| Method | Path | Host | Auth | Status | Result / notes |
|--------|------|------|------|--------|----------------|
| POST | /api/sso/v1/password-strength | sso | none | 200 | zxcvbn score/warning only; input not reflected -> Not Vulnerable |
| POST | /api/sso/v2/password-strength | sso | none | 400 | returns policy `required` fields; input not reflected -> Not Vulnerable |
| POST | /api/sso/v1/user/self/email/verify/send `{email}` | sso | L2 | 204/400 | benign 204; CRLF -> 400 PARSE_ERROR; `%0d%0a` -> 400 invalid email; case-insensitive uniqueness -> no header injection / ATO |
| GET | /api/sso/v1/{health,version,config,csrf,user/self/*,admin,me,...} (20 paths) | sso | L2 | 404 | bounded discovery; no undocumented endpoints |
| GET | https://www.ui.com/_next/image | www | none | 404 | image optimizer disabled |
| GET | https://www.ui.com/api/* | www | none | 301 | redirects to store.ui.com (out-of-scope commerce host) |
| — | account-frame postMessage bridge (`Rw`/`Gge`/`Wge`/`kw`, Megaphone `$$`, popup `lIt`) | account | — | — | outbound PII gated by https+`NS()` allowlist (or `'*'` non-prod only); inbound `source===parent`+`kw(origin)`; popup targetOrigin=self -> Not Vulnerable |

## Session 28 additions (authenticated A L1, new build)
| Method | Path | Host | Auth | Status | Result / notes |
|--------|------|------|------|--------|----------------|
| GET | /api/sso/v1/user/self/device | sso | A L1 | 404 | route absent for GET; OPTIONS allows GET, POST |
| POST | /api/sso/v1/user/self/device | sso | A L1 | 400 | `{}` -> `DEVICE_ID_REQUIRED`; `{device_id}` -> `DEVICE_INFO_NOT_FOUND`; requires server-known device id; self-scoped |
| POST | /api/sso/v1/user/self/device | sso | unauth | 403 | not accessible unauthenticated |
| GET | /api/sso/v1/user/self/sessions | sso | A L1 | 200 | own sessions only; device_id null |
| GET | /api/sso/v1/user/self/trusted_devices | sso | A L1 | 200 | `[]` |

## Session 29 additions (builds unchanged; discovery + authz + type-juggling)
| Method | Path | Host | Auth | Status | Result / notes |
|--------|------|------|------|--------|----------------|
| GET | /.well-known/openid-configuration | sso | none | 200 | NEW. Minimal OIDC metadata: issuer, jwks_uri, `RS256` id_token, claims `sub/iss/exp`; **no** authorize/token/userinfo endpoints |
| GET | /.well-known/jwks.json | sso | none | 200 | single RSA-2048 `RS256` signing key (`kid MeSXSrMD…`); no weak/duplicate keys |
| GET | /oauth/{authorize,token,userinfo}, /api/sso/v1/oauth/authorize, /saml/metadata | sso | none | 404 | no OAuth/SAML flow exposed |
| GET | /api/fabrics/base/msp/v1/{msp,idp,idp/configuration,idp/credentials,idp/scim-token,idp/sync-targets,idp/sync-jobs/1}, /v2/idp/directory/groups | fabric | A L1 | 403 | all `no_msp_membership`; `idp/credentials` & `idp/scim-token` unauth `401` — no BAC leak |
| POST | /zendesk/search_tickets, /zendesk/search_ccd | account | A L1 | 400/403 | reCAPTCHA enforced before query (no token 400; dummy 403) |
| GET | /zendesk/tickets?requester_id={B uuid} | account | A L1 | 404 | query filter not accepted; no cross-account listing |
| POST | /api/sso/v1/login/2fa `{token: <non-string>}` | sso | pre-MFA A | 400/403 | strict string validation; `$ne`/`$gt`/array/bool rejected -> no NoSQL/type bypass |
| POST | /api/sso/v1/login & /login/email `{user/password: <non-string>}` | sso | none | 400/429 | strict string validation; no injection |
| POST | /api/sso/v1/user/self/login/level `{password}` | sso | A L1 | 403/400 | wrong/empty/missing password does not elevate; level stays 1 |
| POST | /api/sso/v1/user/self/login/level/refresh | sso | A L1 | 499 | L2 required; no refresh bypass |
| GET | /api/sso/v1/user/self?include=roles,permissions,scopes / expand=all | sso | A L1 | 200 | `include=roles` adds fixed beta role names only; `permissions`/`scopes`/`expand` null/unchanged; no secret/PII expansion |
| GET/PUT/DELETE/PATCH/POST | /api/sso/v1/user/{B uuid}/picture | sso | none | 200/405/401 | unauth GET returns public avatar URL (known excluded low); PUT/PATCH 405; DELETE/POST 401 |