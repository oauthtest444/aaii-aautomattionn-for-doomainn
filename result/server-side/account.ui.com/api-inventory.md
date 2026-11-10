# API Inventory — account.ui.com / sso.ui.com

Base hosts: `https://sso.ui.com` (SSO), `https://account.svc.ui.com` (account BE), `https://geo.svc.ui.com`.

## SSO endpoints (from JS config)
| Method | Path | Auth | Notes |
|--------|------|------|-------|
| GET | /api/sso/v1/user/self?settings=true&include=tenant | yes | current user |
| GET | /api/sso/v1/account-chooser | yes | saved accounts |
| POST | /api/sso/v1/login/email | no | user existence/login methods |
| POST | /api/sso/v1/login | no | password login -> 2fa |
| POST | /api/sso/v1/login/2fa | partial | MFA |
| POST | /api/sso/v1/logout | yes | |
| GET/POST | /api/sso/v2/users | no | create account |
| POST | /api/sso/v1/password | no | reset password request |
| POST | /api/sso/v1/verify/password | no | verify reset |
| POST | /api/sso/v1/verify/verification-code | no | verify registration |
| POST | /api/sso/v1/verify | no | resend verification |
| GET | /api/sso/v1/user/self/settings | yes | |
| PUT/PATCH | /api/sso/v1/user/self | yes | update profile (TBD) |
| GET/POST/DELETE | /api/sso/v1/user/self/2fa | yes | |
| GET | /api/sso/v1/user/self/roles | yes | |
| GET/POST | /api/sso/v1/user/{uuid}/roles/beta | yes | roles beta |
| GET/POST/PUT/DELETE | /api/sso/v1/user/self/addresses | yes | |
| GET | /api/sso/v1/user/self/activity | yes | |
| GET | /api/sso/v1/user/self/sessions | yes | |
| GET/POST | /api/sso/v1/user/self/trusted_devices | yes | |
| GET/POST | /api/sso/v1/user/self/mfa | yes | |
| POST | /api/sso/v2/user/self/mfa/email/{id}/send | yes | |
| POST | /api/sso/v1/passwordless/options | no | |
| POST | /api/sso/v1/passwordless/login | no | |
| POST | /api/sso/v1/suspicious/confirm/inspect | yes | |
| POST | /api/sso/v1/suspicious/confirm | yes | |
| GET | /api/sso/v1/search/username | no | username check |
| GET | /api/sso/v1/search/email | no | email check |
| POST | /api/sso/v2/password-strength | no | |
| POST | /api/sso/v1/user/self/token/setup | yes | |
| POST | /api/sso/v1/user/self/token/login | yes | |
| POST | /api/sso/v1/address/validator | yes | |
| GET | /api/sso/v1/legal | no | |

## Account BE endpoints
| Method | Path | Auth | Notes |
|--------|------|------|-------|
| * | https://account.svc.ui.com/zendesk/user | yes | |
| * | .../zendesk/ticket | yes | |
| * | .../zendesk/tickets | yes | |
| * | .../zendesk/tickets/closed | yes | |
| * | .../zendesk/tickets/ccd | yes | |
| * | .../zendesk/search_tickets | yes | |
| * | .../zendesk/search_ccd | yes | |
| * | .../zendesk/comments | yes | |
| * | .../zendesk/comment | yes | |
| * | .../zendesk/ticket/{ticketId}/close | yes | |
| * | .../chat/messaging/jwt | yes | |
