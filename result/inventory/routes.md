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
| 13 | /profile | yes | done | client-side redirect to `/account` |
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
| 28 | /supportform | yes | done | client-side redirect to `/requests` |
| 29 | /supportform-uisp | yes | done | redirect to `/requests` with `isUISPForm` state |
| 30 | /supportform-umr | yes | done | redirect to `/requests` |
| 31 | /mysupport | yes | done | client-side redirect to `/requests` |
| 32 | /backups | yes | partial | renders backups page; test account has no cloud backups |
| 33 | /switch | yes | partial | account-chooser cookie; not deeply tested |
| 34 | /activate | no | done | fixed client-side redirect to `https://activate.ui.com` (no user-controlled target) |
| 35 | /logout | yes | done | GET logout clears `.ui.com` auth cookies (VULN-20261110-004, low) |
| 36 | /idp/login-result | no | pending | |
| 37 | /msp/idp/setup-result | no | pending | |

## unifi.ui.com (Site Manager SPA, wildcard `*.ui.com`) — Session 10
| # | Route | Auth | Status | Notes |
|---|-------|------|--------|-------|
| U1 | /invite/:verificationToken?/:hostId? | yes | done | `?role=` (admin\|owner) forwarded to `confirm-invitation`; VULN-20261114-001 (Unresolved) |
| U2 | /invite-network-server/:verificationToken?/:hostId? | yes | done | same deep-link role flow |
| U3 | /create-cloud-console | yes | pending | not created (would provision real infra) |
| U4 | /consoles, /network-servers, /vantage-points, /iam, /invitations/organizations | yes | done | SPA routes; API access via SigV4, empty for test account |

## www.ui.com marketing microsite (Session 11 refresh) — bundle `index-Dyxt5MIq.js`
| Route | Status | Notes |
|-------|--------|-------|
| `/download` (+ `?product_line=`) | done | param inert (no reflection) |
| `/download/releases/:slug` | done | slug only into React `<Head>` (escaped `<meta>`); no injection |
| `/download/software/:slug` | done | same as above |
| `/download/:productGroupId` | done | static |
| `/download/unifi/download-started` (+ `?link=`) | done | `link` requires https + host allowlist `dl.ubnt.com/dl.ui.com/fw-download.ubnt.com`; stripped otherwise |
| `/` and static pages (`?s=`,`?l=`,`appview=`) | done | store/language enum-validated then stripped; no open redirect |

## activate.ui.com (newly observed `ui.com` host; S3 SPA `index-1CNh1WqS.js`) — Session 11
| Item | Status | Notes |
|------|--------|-------|
| `/` + arbitrary paths | done | 200 SPA fallback; `serial/code/token/redirect/next` markers not reflected |
| Device-login code entry | observed | `POST sso.ui.com/api/sso/v1/user/self/token/setup` -> `device_name`, then `/token/login`; auth required |
| CORS on token endpoints | observed | reflects any `*.ui.com` Origin with credentials (known CORS class, Unresolved) |
