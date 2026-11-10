# Route Inventory — account.ui.com (SPA)

Discovered from route config in `assets/index-BAUIMHQa.js`.

| # | Route | Auth | Status | Notes |
|---|-------|------|--------|-------|
| 1 | /login | no | done | login email+password; 2FA; rate limit |
| 2 | /login/mfa | partial | done | email OTP accepted |
| 3 | /login/change-email | partial | done | legacy self-scoped email change |
| 4 | /login/change-email/confirm | partial | pending | |
| 5 | /login/create-passkey | partial | pending | |
| 6 | /login/trust-device | partial | pending | |
| 7 | /register | no | pending | account creation |
| 8 | /verify | no | pending | |
| 9 | /verify/verification-code/:uuid | no | pending | |
| 10 | /reset-password | no | blocked | reCAPTCHA + anti-bot required |
| 11 | /reset-password/password-reset-uuid/:uuid | no | done | needs emailed reset id; user uuid -> 404 |
| 12 | /account | yes | done | self profile; mass-assignment ignored |
| 13 | /profile | yes | pending | |
| 14 | /security | yes | done | MFA/sessions/devices/addresses; IDOR protected |
| 15 | /security/suspicious/confirm | yes | pending | |
| 16 | /billing | yes | pending | |
| 17 | /billing/:orgId | yes | pending | |
| 18 | /invoices | yes | pending | |
| 19 | /invoices/:invoiceId | yes | pending | |
| 20 | /payments | yes | pending | |
| 21 | /payments/3ds | yes | pending | |
| 22 | /subscriptions | yes | pending | |
| 23 | /subscriptions/:service | yes | pending | |
| 24 | /subscriptions/cloud-storage/subscribe | yes | pending | |
| 25 | /subscriptions/site-support/subscribe | yes | pending | |
| 26 | /requests | yes | done | Zendesk own tickets only |
| 27 | /requests/:ticketId | yes | done | cross-account comments 403 |
| 28 | /supportform | yes | pending | |
| 29 | /supportform-uisp | yes | pending | |
| 30 | /supportform-umr | yes | pending | |
| 31 | /mysupport | yes | pending | |
| 32 | /backups | yes | pending | |
| 33 | /switch | yes | partial | account-chooser cookie; not deeply tested |
| 34 | /activate | no | pending | |
| 35 | /logout | yes | pending | |
| 36 | /idp/login-result | no | pending | |
| 37 | /msp/idp/setup-result | no | pending | |
