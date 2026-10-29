# Endpoint Inventory

## account.ui.com / sso.ui.com (Ubiquiti SSO)

Base app JS: `https://account.ui.com/assets/index-D5t7M7xo.js`
(sha256 ce9950c975a42cac66f5c2ea759d655e96c441d34df6a6b8190b09d60ea1c468)

| Method | Path | Auth | Notes | Status |
|---|---|---|---|---|
| POST | /api/sso/v2/users | none (+captcha) | Registration | Rate-limited by reCAPTCHA challenge after tests |
| GET | /api/sso/v1/legal | none | Terms revisions | Tested |
| GET | /api/sso/v1/search/email/{email} | none | Email existence oracle (low impact; excluded) | Tested |
| GET | /api/sso/v1/search/username/{u} | none | Username existence oracle (low impact) | Tested |
| POST | /api/sso/v2/password-strength | none | Password policy check | Tested |
| GET | /api/sso/v1/user/self | user | Profile | Tested |
| PUT | /api/sso/v1/user/self | user | Profile update | Tested (mass assignment negative) |
| PATCH | /api/sso/v1/user/self/settings | user | Settings update | Not yet tested |
| GET | /api/sso/v1/user/self/roles | user | Own roles | Tested |
| POST | /api/sso/v1/user/{uuid}/roles/beta | user | Self-service beta roles | Tested (UUID match enforced) |
| GET | /api/sso/v1/user/self/2fa, /mfa, /sessions, /activity, /addresses, /trusted_devices, /device | user | Own security data | Tested (read-only) |
| GET/POST | /api/sso/v1/account-chooser | none | Returns empty accounts list | Tested |

Other discovered service bases in JS (not yet tested): account.svc.ui.com,
fabric.svc.ui.com, billing.svc.ui.com, enterprise.svc.ui.com, lte-api.svc.ui.com,
u5g-api.svc.ui.com, trunking.svc.ui.com, storage.svc.ui.com, ips.svc.ui.com,
feedback.svc.ui.com, nca/cloudaccess.svc.ui.com, ues.svc.ui.com, umr.svc.ui.com,
cap.svc.ui.com, megaphone.svc.ui.com, ecomm.svc.ui.com.

## account.svc.ui.com (tested)

| Method | Path | Auth | Notes | Status |
|---|---|---|---|---|
| GET | /zendesk/user | user | Own Zendesk user (id 44629467972247) | Tested, own data |
| GET | /zendesk/tickets, /tickets/closed | user | Own tickets only (empty) | Tested |
| GET | /chat/messaging/jwt | user | 404 | Tested |
| GET | /zendesk/comments/{id} | user | 404 for id 1 and 999999999999; no IDOR without own ticket id | Tested |

## billing.svc.ui.com (tested)

| Method | Path | Auth | Notes | Status |
|---|---|---|---|---|
| GET | /api/v2/customers/self | user | 404 "Customer not found." code 1001 | Tested |
| GET | /api/v2/customers/self/invoices | user | 404 | Tested |
| GET | /api/v2/products | none | Public Stripe product catalog | Tested |

## enterprise.svc.ui.com (tested)

| Method | Path | Auth | Notes | Status |
|---|---|---|---|---|
| GET | /api/v1/organizations | user | 200 `{"data":[]}` (no orgs) | Tested |

## design.svc.ui.com (design.ui.com API, tested)

Base `https://design.svc.ui.com`; `/user/me` auto-creates a temp user (anonymous, `isTemp:true`) and sets signed `ui|design-center|sid` (Domain=ui.com, HttpOnly). Project endpoints need the same session cookie jar plus `UBIC_AUTH`; temp users get 401.

| Method | Path | Auth | Notes | Status |
|---|---|---|---|---|
| GET | /user/me | none/user | Anon temp user; auth returns own profile | Tested |
| PATCH | /user/me | user | role/isTemp mass assignment ignored | Tested |
| GET | /project | user | Own project list | Tested |
| POST | /project | user | Creates project (test project `60b8c381-2101-4dd2-92ed-e032c8a575a6`) | Tested |
| GET | /project/all | admin | 401 "User doesn't have access" | Tested |
| GET | /project/filter-counts, /project/switcher | user | 401 without session; gated | Tested |
| GET | /api/project/fabric-share/{projectId} | user | Own project 200; anon 401 | Tested |
| POST | /api/project/share/{projectId} | user | Requires `shareKey` (400 if absent); no unauth read | Tested |
| GET | /api/project/guide/{data} | none | 403 `errors.blueprint.invalid` on non-token input | Tested |
| GET | /admin/stats, /user, /feedback, /order, /developer/*, /export/* | admin/user | 401 "User not authenticated" / "doesn't have access" | Tested |
| GET | /api/countries | none | Public country list | Tested |

## community.svc.ui.com (GraphQL, tested)

Endpoint: `POST https://community.svc.ui.com/` (`credentials: include`, `UBIC_AUTH`). Introspection disabled. `userSelf` returns own community id `281f5e1b-9409-4d0d-beb9-56392e9488e3`.

| Operation | Type | Auth | Result |
|---|---|---|---|
| GetAppUserSelf | query | user | Own profile incl. `extraData.email` (own data) |
| GetPermissions | query | none/user | Returns permission key/value map (info only) |
| GetUserExtra | query | user | `user` null for self/random (requires extended-access permission) |
| GetUserPermissions | query | user | Own groups/alphas only |
| UpdateUserPermissions | mutation | admin | `Admins only` (403) for user and anon |
| BanUser / CreateRestriction / CreateTag | mutation | admin | Input validation before authz; not tested further |
| CreateAttachmentDownloadUrl | mutation | user | 500-ish generic error for external URLs; not conclusive |
| CreateConversation | mutation | user | Requires `id` + `receiverId`; not exercised |
| admin/internal REST `/api/v1/admin/*`, `/api/v1/escalations*`, `/api/v1/content-risk-reviews*` | REST | admin | anon 401, user 403 |

## material.svc.ui.com / rma.svc.ui.com (tested)

| Host | Path | Auth | Result |
|---|---|---|---|
| material.svc.ui.com | POST /graphql | required | 401 Unauthorized; CORS reflects only `https://material.ui.com` |
| rma.svc.ui.com | POST /graphql | required | 401 Unauthorized |
| datasheets-api.ui.com | GET /health | none | 200 `ok` |
| datasheets-api.ui.com | GET /api/datasheets | token | 401 "No token, authorization denied" |
| datasheets-api.ui.com | other paths | none | 404 `{"datasheets":"generator"}` |

## Self-service hosts (authenticated probe batch, Account A)

All requested with `UBIC_AUTH`; `/self` endpoints are token-scoped and returned only own/empty data.

| Host | Path | Auth | Result |
|---|---|---|---|
| storage.svc.ui.com | GET /v1/users/self/subscription-plans | user | 422 UNPROCESSABLE_ENTITY |
| storage.svc.ui.com | GET /v1/users/self/{subscriptions,settings,usage} | user | 404 (not exposed) |
| megaphone.svc.ui.com | GET /v1/announcements | user | 200 global announcements; anon 401 |
| ues.svc.ui.com | GET /api/v2/products/plans | user | 400 INVALID_INPUT |
| lte-api.svc.ui.com | GET /subscriptions, /devices | none | 404 / 405 |
| u5g-api.svc.ui.com | GET /api/v1/esim/{plans,devices} | user | 200; plans public, devices empty/own |
| trunking.svc.ui.com | GET /sso/account, /sso/installs | user | 400 invalid service record; installs 200 [] |
| umr.svc.ui.com | GET /api/v1/users/integrations/ssoa/subscriptions | user | 200 empty collection |
| cap.svc.ui.com | GET /api/v1/devices/integrations/ssoa | user | 200 empty collection |
| fabric.svc.ui.com | GET /api/fabrics/base/msp/v1/msp | user | 403 no_msp_membership |
| account.svc.ui.com | GET /zendesk/tickets/ccd | user | 200 empty |
| images.svc.ui.com | GET /?u={hash}&w=100&q=75 | none | 400 for known hash/URL/traversal; key-based proxy, no SSRF |

Note: `images.svc.ui.com` expects an opaque image key (`u=2a5e9ed7...` from the product image map), not a URL; all supplied keys/URLs returned 400, so the proxy is not an SSRF primitive.
