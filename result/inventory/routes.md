# Route Inventory — account.ui.com (SPA)

Discovered from route config in `assets/index-BAUIMHQa.js`.

| # | Route | Auth | Status | Notes |
|---|-------|------|--------|-------|
| 1 | /login | no | done | login email+password; 2FA; rate limit |
| 2 | /login/mfa | partial | done | email OTP accepted |
| 3 | /login/change-email | partial | done | legacy self-scoped email change |
| 4 | /login/change-email/confirm | partial | blocked | email_changeable absent; confirm not exposed |
| 5 | /login/create-passkey | partial | blocked | no registered passkeys; webauthn options -> not found |
| 6 | /login/trust-device | partial | done | device registration (204); trusted-device TTL 1y |
| 7 | /register | no | blocked | POST /api/sso/v2/users needs private-key+captcha+devicecheck attestation |
| 8 | /verify | no | blocked | verification id is emailed request id; auth user -> / |
| 9 | /verify/verification-code/:uuid | no | blocked | uuid= user/zero/1 -> 404; needs emailed request id |
| 10 | /reset-password | no | blocked | reCAPTCHA + anti-bot required |
| 11 | /reset-password/password-reset-uuid/:uuid | no | done | needs emailed reset id; user uuid -> 404 |
| 12 | /account | yes | done | self profile; mass-assignment ignored |
| 13 | /profile | yes | done | client-side redirect to `/account` |
| 14 | /security | yes | done | MFA/sessions/devices/addresses; IDOR protected |
| 15 | /security/suspicious/confirm | yes | blocked | inspect/confirm need emailed confirm_token |
| 16 | /billing | yes | blocked | L2 UI loads; billing.svc 404 Customer not found; billing.svc outside approved scope |
| 17 | /billing/:orgId | yes | blocked | no billing org on test account |
| 18 | /invoices | yes | done | L2: redirects to /billing (empty) |
| 19 | /invoices/:invoiceId | yes | blocked | no invoice ids (no billing customer) |
| 20 | /payments | yes | done | L2: redirects to /billing; no payment methods |
| 21 | /payments/3ds | yes | blocked | no payment/3DS flow without billing customer |
| 22 | /subscriptions | yes | done | L2: redirects to /billing (empty) |
| 23 | /subscriptions/:service | yes | blocked | no subscriptions on test account |
| 24 | /subscriptions/cloud-storage/subscribe | yes | blocked | no subscription context; no purchase path exercised |
| 25 | /subscriptions/site-support/subscribe | yes | blocked | feature flag allowSiteSupportSubscribe=false |
| 26 | /requests | yes | done | Zendesk own tickets only |
| 27 | /requests/:ticketId | yes | done | cross-account comments 403 |
| 28 | /supportform | yes | done | client-side redirect to `/requests` |
| 29 | /supportform-uisp | yes | done | redirect to `/requests` with `isUISPForm` state |
| 30 | /supportform-umr | yes | done | redirect to `/requests` |
| 31 | /mysupport | yes | done | client-side redirect to `/requests` |
| 32 | /backups | yes | done | L2: page renders; no backups; cloudaccess hosts/backups empty |
| 33 | /switch | yes | done | logout + login_hint; redirect AC()-validated |
| 34 | /activate | no | done | fixed client-side redirect to `https://activate.ui.com` (no user-controlled target) |
| 35 | /logout | yes | done | GET logout clears `.ui.com` auth cookies (VULN-20261110-004, low) |
| 36 | /idp/login-result | no | blocked | POST needs server-issued state (STATE_MISSING) |
| 37 | /msp/idp/setup-result | no | done | postMessage targetOrigin = window.location.origin |

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

## www.ui.com Next.js/Turbopack rebuild (Session 21) — App Router on Vercel
| Item | Status | Notes |
|------|--------|-------|
| `/` + static routes (`/us/en/...`) | done | middleware rewrites to `/us/en`; no user-input sinks |
| `/download/[productFamily]` | done | unknown -> 404; param percent-encoded in RSC payload + `canonical`/`og:url`; no breakout |
| `/download/software/[slug]` | done | same encoding; no HTML/JSON-LD injection |
| `/download/unifi` | done | 200 (5.5MB); data from `download.svc` `/v2/downloads` (out of scope) |
| `/download/unifi/download-started` (`?link=`) | done | allowlist re-confirmed in chunk `3h4qiliw__8ql.js` (https + dl.ubnt.com/dl.ui.com/fw-download.ubnt.com) |
| `x-middleware-subrequest` (CVE-2025-29927) | done | payloads ineffective; middleware still rewrites `/us/en` |
| Open-redirect probes (`//`, `%2f%2f`, `?redirect=`) | done | 404/inert, no `Location` |
| Next.js Server Actions | done | none present (0 `createServerReference` ids) |
