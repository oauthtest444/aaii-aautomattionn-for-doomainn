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
