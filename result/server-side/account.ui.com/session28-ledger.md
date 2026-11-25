# Session 28 server-side ledger (2026-11-25)

Continuation. Prior state: 47 routes (32 done / 15 blocked); `confirmed-vuln.txt` empty.
Build deltas found this session:
- `account.ui.com` bundle rotated `index-DUlTrD1u.js` (a26e5447…) ->
  `index-YVfMK5j0.js` sha256 `5cb23f647dd2ec363085f9c31da9c8d6d7fc64c0d15811f9fb129a97316c7bfa`
  (6,961,507 B). 99 API paths and sink counts identical (dangerouslySetInnerHTML 18,
  .innerHTML= 16, eval 0, new Function 0, document.write 0). Redirect validator logic
  identical (`[ubnt.com,ui.com,uisp.com]` + http/https only). Only added strings:
  Sentry SDK 11.x error messages + inline passkey/browser SVG assets -> dependency bump.
- `www.ui.com` redeployed `dpl=cf2ef4894382a44b88f852eabec10b8a61099721` (was
  `6f710854…`). New marketing route `/identity/qrcode/desktop/bt_pairing` (static; no
  input sink). Download `link` allowlist and `appview` handling unchanged.

Endpoint tests (Account A L1, test-owned):
| Method | Path | Auth | Result |
|--------|------|------|--------|
| GET | `/api/sso/v1/user/self/device` | A L1 | `404` |
| OPTIONS | `/api/sso/v1/user/self/device` | A L1 | `403`; `Allow: GET, POST, HEAD, OPTIONS` |
| GET | `/api/sso/v1/user/self/device` | unauth | `403` |
| POST `{}` | `/api/sso/v1/user/self/device` | A L1 | `400 {"error":"DEVICE_ID_REQUIRED"}` |
| POST `{device_id}` | `/api/sso/v1/user/self/device` | A L1 | `400 {"error":"DEVICE_INFO_NOT_FOUND"}` |
| POST `{}` | `/api/sso/v1/user/self/device` | unauth | `403` |
| GET | `/api/sso/v1/user/self/sessions` | A L1 | `200` (own sessions only; device_id null) |
| GET | `/api/sso/v1/user/self/trusted_devices` | A L1 | `200 []` |

Result: `/user/self/device` is self-scoped and requires a server-known `device_id`
(populated during login); no object is created with an arbitrary id and no cross-account
surface was reachable. **Not Vulnerable** (no persisted/security-relevant change).

DNS recon (passive, 50 hosts): all resolve to AWS/CloudFront/JFrog-owned infrastructure.
No dangling/claimable CNAME -> the `sso.ui.com` credentialed-CORS primitive remains
blocked (needs attacker-controlled `*.ui.com` origin). Newly observed non-approved hosts
(`alpha.ui.com`, `*.uid.alpha.ui.com`, `billing-admin.ui.com`, `accout.ui.com`,
`airlink-be.ui.com`, `cell0-3.ui.com`) were only DNS-resolved/classified and are recorded
in `result/out-of-scope.txt`; they were not tested (not in the approved component list).

No confirmed high-impact finding. No Discord notification (notification bar not met).
