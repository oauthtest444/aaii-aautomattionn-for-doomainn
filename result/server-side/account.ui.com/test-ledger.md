# Server-Side Test Ledger — continuation 2026-10-30

Legend: NV = Not Vulnerable (protection held), UN = Unresolved, BL = blocked by
missing data/access. Evidence in `traffic/continuation-20261030-early.txt`.

| # | Method | Path (host) | Auth | Variant | Baseline -> Test | Status | Evidence |
|---|--------|-------------|------|---------|------------------|--------|----------|
| 1 | PUT | `/api/sso/v1/user/self` (sso.ui.com) | A L2 | `twofa_enabled:false` | true -> true | NV | traffic §Profile |
| 2 | PUT | `/api/sso/v1/user/self` | A L2 | `is_verified:false` | true -> true | NV | traffic §Profile |
| 3 | PUT | `/api/sso/v1/user/self` | A L2 | `roles:["admin"]` | `[]` -> `[]` | NV | traffic §Profile |
| 4 | PUT | `/api/sso/v1/user/self` | A L2 | `organization`/`tenant` | null/[] -> unchanged | NV | traffic §Profile |
| 5 | PATCH | `/api/sso/v1/user/self/settings` | A L2 | `suspicious_detection:[]` | `["signin"]` -> unchanged | NV | traffic §Settings |
| 6 | PATCH | `/api/sso/v1/user/self/settings` | A L2 | `passwordless_enabled` | UI preference; changed then restored | NV | traffic §Settings |
| 7 | POST | `/api/sso/v1/user/self/addresses` | A L2 | `user:<B_uuid>` on create | owner forced to A | NV | traffic §Address |
| 8 | PUT | `/api/sso/v1/user/self/addresses/{A}` | A L2 | `user:<B_uuid>` on update | owner stays A | NV | traffic §Address |
| 9 | GET | `/api/sso/v1/user/self/addresses/{B}` | A L2 | B object read | 405 method / 404 object | NV | traffic §Address |
| 10 | PUT | `/api/sso/v1/user/self/addresses/{B}` | A L2 | B object update | 404 No SSOAddress | NV | traffic §Address |
| 11 | DELETE | `/api/sso/v1/user/self/addresses/{B}` | A L2 | B object delete | 404 No SSOAddress | NV | traffic §Address |
| 12 | GET | `/api/sso/v1/user/{B}/addresses` | A L2 | UUID swap | 403 mismatching UUID | NV | traffic §Address |
| 13 | DELETE | `/api/sso/v1/user/self/sessions/{B}` | A L2 | B session revoke | 404 No SessionMetadata | NV | traffic §Session |
| 14 | DELETE | `/api/sso/v1/user/self/mfa/email/{B}` | A L2 | B MFA remove | 404 No EmailAuthenticator | NV | traffic §MFA |
| 15 | DELETE | `/api/sso/v1/user/self/mfa/webauthn/{B}` | A L2 | B MFA remove | 404 No WebAuthnAuthenticator | NV | traffic §MFA |
| 16 | POST | `/api/sso/v1/user/{uuid}/roles/beta` | A L2 | self opt-in | 204 (self-service) | NV | traffic §roles |
| 17 | POST | `/api/sso/v1/user/{B}/roles/beta` | A L2 | cross-account opt-in | 403 mismatching UUID | NV | traffic §roles |
| 18 | GET | `/api/v2/customers/self{,/subscriptions,/invoices}` (billing) | A | read | 404 Customer not found | BL | traffic §Empty |
| 19 | GET | `/api/v1/organizations` (enterprise) | A | read | 200 empty | BL | traffic §Empty |
| 20 | GET | `/zendesk/tickets{,/closed}`, `/zendesk/user` | A | read | 200 empty / own user | BL | traffic §Empty |
| 21 | GET | `/api/fabrics/base/msp/v1/msp` (fabric) | A | read | 403 no_msp_membership | BL | traffic §Empty |
| 22 | GET | `/v1/users/self/subscriptions` (storage) | A | read | 404 | BL | traffic §Empty |
| 23 | GET | `/api/v1/subscriptions` (ues) | A | read | 200 empty | BL | traffic §Empty |
| 24 | GET | `/api/sso/v1/user/self/addresses` | A | read | 200 empty after cleanup | NV | traffic §Address |
| 25 | GET | `/api/sso/v1/user/self/activity` | A | read | 200 own activity only | NV | traffic §Empty |
| 26 | POST | `/zendesk/comment/{id}` | A | XSS via comment HTML | requires `x-captcha-token`; no ticket | UN | CAND-002 |
