# SSO API test ledger — sso.ui.com

Auth context: Account A (verified user), cookie `UBIC_AUTH`.
All requests included `Origin: https://account.ui.com`. Test traffic is under
`traffic/`.

| Endpoint | Method | Variant | Status | Result |
|---|---|---|---|---|
| /api/sso/v1/user/self | GET | settings=true&include=tenant | Not Vulnerable | Returns own profile only |
| /api/sso/v1/user/self/roles | GET | - | Not Vulnerable | Returns own roles |
| /api/sso/v1/user/self/settings | GET | - | Not Vulnerable | Own settings |
| /api/sso/v1/user/self/2fa | GET | - | Not Vulnerable | 409 MFA already enabled |
| /api/sso/v1/user/self/addresses | GET | - | Not Vulnerable | Own addresses |
| /api/sso/v1/user/self/sessions | GET | - | Not Vulnerable | Own session only |
| /api/sso/v1/user/self/activity | GET | - | Not Vulnerable | Own activity |
| /api/sso/v1/user/self/mfa | GET | - | Not Vulnerable | Own authenticators |
| /api/sso/v1/user/self/trusted_devices | GET | - | Not Vulnerable | Empty own list |
| /api/sso/v1/user/self/device | GET | - | Not Vulnerable | Own device |
| /api/sso/v1/user/{uuid}/roles/beta | POST | own uuid, {} | Not Vulnerable | 204, self-service beta role; random UUID -> 403 "mismatching UUID" |
| /api/sso/v1/user/self | PUT | {"first_name":"Qa"} | Not Vulnerable | 204, own field updated as expected |
| /api/sso/v1/user/self | PUT | is_admin / is_staff / roles / permissions / is_superuser / email_verified / is_verified / twofa_enabled | Not Vulnerable | Fields ignored or rate-limited (429); persisted state unchanged |
| /api/sso/v1/user/self | PATCH | {"first_name":"Qa"} | Not Vulnerable | 405 method not allowed |

Notes:
- `POST /api/sso/v1/user/{uuid}/roles/beta` adds self-service beta roles when
  the UUID matches the authenticated user; random UUIDs are rejected with 403.
- SSO write endpoints rate-limited after several rapid PUTs (429); further
  mutation tests were paused and spaced out.
- Cross-account IDOR/BOLA tests require Account B (Unresolved due to reCAPTCHA).
