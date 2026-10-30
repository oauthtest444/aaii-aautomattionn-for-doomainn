# API Endpoint Inventory (extracted from account.ui.com JS)

Source: `assets/index-D5t7M7xo.js` config object (`api:{...}`).
All hosts below are CROSS-ORIGIN to account.ui.com and are treated as
out-of-scope for active testing (see `result/out-of-scope.txt`). This file is
for completeness and for understanding client-side behavior only.

## sso.ui.com
`base https://sso.ui.com`
- `/api/sso/v1/user/self/email`
- `/api/sso/v1/passwordless/options`
- `/api/sso/v1/passwordless/login`
- `/api/sso/v1/suspicious/confirm/inspect`  (POST `{confirm_token}`)
- `/api/sso/v1/suspicious/confirm`         (POST `{confirm_token, decision}`)
- `/api/sso/v1/account-chooser`

## sso.ubnt.com
`base https://sso.ubnt.com`
- `/api/sso/v1/legal`
- `/api/sso/v1/login/email`
- `/api/sso/v1/idp/login-result`
- `/api/sso/v1/login`
- `/api/sso/v1/shopify_login`
- `/api/sso/v1/logout`
- `/api/sso/v1/login/2fa`
- `/api/sso/v1/user/self`
- `/api/sso/v1/user/self/settings`
- `/api/sso/v1/user/self/2fa`
- `/api/sso/v1/user/self/2fa/backup`
- `/api/sso/v1/user/self/2fa/reset`
- `/api/sso/v1/user/self/roles`
- `/api/sso/v1/user/{uuid}/roles/beta`
- `/api/sso/v1/password`
- `/api/sso/v1/verify/password`
- `/api/sso/v1/verify/verification-code`
- `/api/sso/v1/verify`
- `/api/sso/v2/users` (create account)
- `/api/sso/v1/user/self/picture`
- `/api/sso/v1/search/username`
- `/api/sso/v1/search/email`
- `/api/sso/v2/password-strength`
- `/api/sso/v1/password-strength`
- `api/sso/v1/user/self/token/setup`
- `api/sso/v1/user/self/token/login`
- `/api/sso/v1/user/self/mfa`
- `/api/sso/v2/user/self/mfa/email/{id}/send`
- `/api/sso/v1/user/self/login/level`
- `/api/sso/v1/user/self/login/level/refresh`
- `/api/sso/v1/user/self/addresses`
- `/api/sso/v1/user/self/activity`
- `/api/sso/v1/user/self/email/verify/send`
- `/api/sso/v1/address/validator`
- `/api/sso/v1/user/self/sessions`
- `/api/sso/v1/user/self/zendesk_user`
- `/api/sso/v1/user/self/trusted_devices`
- `/api/sso/v1/user/self/device`
- `/api/sso/v1/legacy/user/self/email/send`
- `/api/sso/v1/legacy/user/self/email`

## account.svc.ui.com
`base https://account.svc.ui.com`
- `zendesk/user`, `zendesk/ticket`, `zendesk/tickets`, `zendesk/tickets/closed`,
  `zendesk/tickets/ccd`, `zendesk/search_tickets`, `zendesk/search_ccd`,
  `zendesk/comments`, `zendesk/comment`, `zendesk/ticket/{ticketId}/close`,
  `chat/messaging/jwt`

## fabric.svc.ui.com (MSP/IdP)
`base https://fabric.svc.ui.com`
- `/api/fabrics/base/msp/v1/msp`
- `/api/fabrics/base/msp/v1/msp/idp-enforcement`
- `/api/fabrics/base/msp/v1/logo`
- `/api/fabrics/base/msp/v1/idp`
- `/api/fabrics/base/msp/v1/idp/configuration`
- `/api/fabrics/base/msp/v1/idp/credentials`
- `/api/fabrics/base/msp/v1/idp/rebind`
- `/api/fabrics/base/msp/v1/idp/retry-configure`
- `/api/fabrics/base/msp/v1/idp/sync`
- `/api/fabrics/base/msp/v1/idp/sync-jobs/{jobId}`
- `/api/fabrics/base/msp/v1/idp/sync-targets`
- `/api/fabrics/base/msp/v2/idp/directory/groups`
- `/api/fabrics/base/msp/v1/idp/domain/verify`
- `/api/fabrics/base/msp/v1/idp/scim-token`
- `/api/fabrics/base/msp/v1/idp/scim-token/regenerate`

## billing.svc.ui.com
`base https://billing.svc.ui.com`
- `/api/v2/subscriptions`
- `/api/v2/customers/self`
- `/api/v2/customers/self/payment-methods/cards`
- `/api/v2/customers/self/payment-methods/tappay`
- `/api/v2/customers/self/payment-methods`
- `/api/v2/customers/self/subscriptions`
- `/api/v2/products`
- `/api/v2/customers/self/invoices`

## Other services (host -> paths)
- `enterprise.svc.ui.com` -> `/api/v1/organizations`
- `lte-api.svc.ui.com` -> `/subscriptions`, `/devices`
- `u5g-api.svc.ui.com` -> `/api/v1/esim/plans|devices|orders|renewals`
- `trunking.svc.ui.com` -> `/sso/account`, `/sso/installs`, `/sso/cancel_subscription`
- `status.ui.com` -> `/api/v2/scheduled-maintenances/{active,upcoming}.json`, `/api/v2/incidents/unresolved.json`
- `config.ubnt.com` -> `/cloudAccessConfig.json`
- `static.ui.com` -> `/fingerprint/ui/public.json`, `/fingerprint/ui/icons`
- `cloudaccess.svc.ui.com` -> `/create-credentials`, `/ucore/backup`, `/devices`, `/api/v1/hosts`, `/sites`, `/ucore/backups`, `/ucore/archived-backups`
- `umr.svc.ui.com` -> `/api/v1/users/integrations/ssoa/subscriptions`
- `cap.svc.ui.com` -> `/api/v1/devices/integrations/ssoa`
- `ues.svc.ui.com` -> `/api/v1/subscriptions`, `/api/v1/msps/subscriptions`, `/api/v2/products/plans`, `/api/v1/licenseCodes/validation`
- `storage.svc.ui.com` -> `/v1/users/self/{subscription-availability,subscription-plans,storage-regions,subscriptions,settings,usage}`
- `megaphone.svc.ui.com` -> `/v1/announcements`
- `ips.svc.ui.com` -> `/api/v2/subscribe`
- `feedback.svc.ui.com` -> `/v1/sso-issue`
- `help.ui.com/hc/en-us`, `viacep.com.br`, `activate.ui.com`, `store.ui.com`, `unifi.ui.com`

## Already observed at runtime (unauthenticated)
- `GET https://sso.ui.com/api/sso/v1/user/self?settings=true&include=tenant` -> 401
- `GET https://sso.ui.com/api/sso/v1/account-chooser` -> 200
- `GET https://geo.svc.ui.com/geo` -> 200
- `POST https://sso.ui.com/api/sso/v1/idp/login-result` `{code,state}` -> 400 STATE_MISSING
- `POST https://sso.ui.com/api/sso/v1/suspicious/confirm/inspect` `{confirm_token}` -> 400 INVALID_CONFIRMATION_TOKEN (invalid token)
