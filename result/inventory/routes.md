# UI Route Inventory (account.ui.com)

Source: `assets/index-D5t7M7xo.js` route table (sha256 `ce9950c9…c468`), Chrome MCP navigation.

| # | Route | Auth expected | Reachability (unauth) | Status |
|---|-------|---------------|-----------------------|--------|
| 1 | `/login` | public | 200 | in progress |
| 2 | `/register` | public | 200 | in progress |
| 3 | `/reset-password` | public | pending | pending |
| 4 | `/reset-password/password-reset-uuid/:uuid` | token | pending | pending |
| 5 | `/verify` | public | pending | pending |
| 6 | `/verify/verification-code/:uuid` | token | pending | pending |
| 7 | `/verify/success` | public | pending | pending |
| 8 | `/idp/login-result` | public callback | pending | pending |
| 9 | `/msp/idp/setup-result` | public callback | pending | pending |
| 10 | `/supportform` | likely public | pending | pending |
| 11 | `/supportform-uisp` | likely public | pending | pending |
| 12 | `/supportform-umr` | likely public | pending | pending |
| 13 | `/switch` | auth | pending | pending |
| 14 | `/profile` | auth | pending | pending |
| 15 | `/account` | auth | pending | pending |
| 16 | `/security` | auth | pending | pending |
| 17 | `/security/suspicious/confirm` | token | pending | pending |
| 18 | `/devices` | auth | pending | pending |
| 19 | `/subscriptions` | auth | pending | pending |
| 20 | `/subscriptions/:service` | auth | pending | pending |
| 21 | `/subscriptions/cloud-storage/subscribe` | auth | pending | pending |
| 22 | `/subscriptions/site-support/subscribe` | auth | pending | pending |
| 23 | `/billing` | auth | pending | pending |
| 24 | `/billing/:orgId` | auth | pending | pending |
| 25 | `/payments` | auth | pending | pending |
| 26 | `/payments/3ds` | callback | pending | pending |
| 27 | `/invoices` | auth | pending | pending |
| 28 | `/invoices/:invoiceId` | auth | pending | pending |
| 29 | `/requests` | auth | pending | pending |
| 30 | `/requests/:ticketId` | auth | pending | pending |
| 31 | `/mysupport` | auth | pending | pending |
| 32 | `/backups` | auth | pending | pending |
| 33 | `/logout` | auth | pending | pending |
| 34 | `/login/mfa` | auth step | pending | pending |
| 35 | `/login/trust-device` | auth step | pending | pending |
| 36 | `/login/create-passkey` | auth step | pending | pending |
| 37 | `/login/change-email` | auth step | pending | pending |
| 38 | `/login/change-email/confirm` | auth step | pending | pending |
| 39 | `/subscribe` | auth | pending | pending |
| 40 | `/activate` | public? | pending | pending |
| 41 | `/sso/account` | auth | pending | pending |
| 42 | `/sso/installs` | auth | pending | pending |
| 43 | `/sso/cancel_subscription` | auth | pending | pending |
