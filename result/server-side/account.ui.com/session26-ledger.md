# Session 26 — 2026-11-23T23:44Z (continuation; no new high-impact finding)

Scope: approved components only (`ui.com`, `www.ui.com`, `account.ui.com`, `sso.ui.com`,
`account.svc.ui.com`, `cloudaccess.svc.ui.com`). Accounts A/B recovered and validated.
A was escalated to L2 for the session (password re-auth, 30-min window) to test the
email-change flow.

- Account A: `testttt12`, `tan.tiger5564@maildrop.cc`, UUID `d8946fad-2b8e-4cf0-82c5-5d955b57b829`.
- Account B: `test-account-b`, `overrated.chinchilla337@maildrop.cc`, UUID `7c5aab2b-e568-40de-a7a5-ec27df1db94b`.
- A/B `UBIC_AUTH` full-session tokens recovered from `result/logs/opencode.log` and validated
  (`GET /api/sso/v1/user/self` -> `200`). A L2 minted via `POST /user/self/login/level` -> `200`.

Builds unchanged (no new code to diff):
- `account.ui.com` `/assets/index-DUlTrD1u.js` 6,941,256 B sha256 `a26e5447814525949b83fe3e5b39dde4d2145fddfad86f6fd96596782b680f5c`.
- Site Manager `unifi.ui.com` still `main-0.2678141fb293ea0d.js` + `main-7.89817c7552da11f1.js` (Session 16 build).
- `www.ui.com` Next.js build unchanged (same route/chunk behavior).

## New / changed coverage
| Method | Endpoint | Auth | Test | Result | Status |
|--------|----------|------|------|--------|--------|
| POST | `/api/sso/v1/password-strength` | none | `abc`, `<img onerror>`, 72×`A` | `200` zxcvbn score/warning only; no reflection of input | Not Vulnerable |
| POST | `/api/sso/v2/password-strength` | none | same | `400 VALIDATION_ERROR` with policy requirements; no reflection | Not Vulnerable |
| POST | `/api/sso/v1/user/self/email/verify/send` | A (L2) | benign `s26probe1@maildrop.cc` | `204` (code sent; change NOT applied) | baseline |
| POST | same | A (L2) | CRLF literal in JSON email | `400 PARSE_ERROR` (invalid control char) | Not Vulnerable |
| POST | same | A (L2) | `%0d%0aBcc:` URL-encoded | `400 VALIDATION_ERROR` (`Enter a valid email address`) | Not Vulnerable |
| POST | same | A (L2) | A email upper-case (`TAN.TIGER5564@...`) | `400` `This field must be unique.` (case-insensitive) | Not Vulnerable |
| POST | same | A (L2) | B email | `400` `This field must be unique.` | Not Vulnerable |
| GET | bounded SSO discovery (20 paths: health/version/config/csrf/user-self-email/username/phone/tenant/organizations/apps/api_keys/export/invitations/members/permissions/invitations/organizations/users/admin/me) | A (L2) | GET only | all `404 Not Found` (framework HTML) | no hidden endpoints |
| GET | `https://www.ui.com/_next/image?url=https://example.com/&w=64` | none | image optimizer | `404` (no optimizer) | Not Vulnerable |
| GET | `https://www.ui.com/api/health[/status/version/download/search]` | none | handler probe | `301` -> `store.ui.com` (out-of-scope commerce host) | Out of Scope |
| — | `account.ui.com/login?redirect=<v>` | none | runtime (Chrome) `https://evil.com`, `//evil.com`, `javascript:alert(1)` | final URL stays `account.ui.com/login`; no `Location`, no dialog, no execution | Not Vulnerable |
| — | `www.ui.com/download/unifi` | none | runtime (Chrome) | renders "Software Downloads"; no new sink | Done |

## Client-side bridge re-analysis (account bundle, previously undocumented mechanism)
- `FS()` => `window.self !== window.top` (embedded). `VS()` stores values under a
  `window.name`-derived `account-frame-<rand>@...` sessionStorage key (per-frame isolation).
- Outbound event emitter `Rw()` posts to `window.parent` with
  `targetOrigin = Gge()`; `Gge()` returns `'*'` only when build env `Tw.Prod !== 'prd'`
  (prod build => `'prd'`), else `Wge()` (ancestor origin / `document.referrer` origin)
  **only if** `kw()` passes: `https://` **and** `NS()` (host last two labels ∈
  ui.com/ubnt.com/uisp.com). ⇒ PII events (`sso.account.changed` first/last/username/
  email/picture) cannot be delivered to a non-allowlisted/attacker origin.
- Inbound Megaphone listener `$$()` requires `event.source === window.parent` **and**
  `kw(event.origin)`; message parsed with Zod (`Yge`). ⇒ no unauthorized listener sink.
- SSO popup result handler `lIt()` posts `{type,status,idpId,message}` with
  `targetOrigin = window.location.origin` (self) and closes; if no opener it
  `location.replace('/#profile')`. ⇒ safe.
- Conclusion: the account-frame/postMessage bridge is **Not Vulnerable** (no PII leak,
  no origin bypass). This documents a mechanism not covered in prior session summaries.

## Site Manager unaudited-chunk pass (main-2..6, numeric chunks; Site Manager build unchanged)
- `BroadcastChannel` user-sync (`main-3`): `user-change` / `logout` / `ws-changes`
  messages — same-origin only by spec; not cross-origin exploitable.
- Invite acceptance (`main-2`): `accept` reads `e.data.role` / `e.data.verificationToken`
  from invitation data and `M(deviceId, verificationToken, isPC, role)` calls
  `E.QA` -> `confirm-invitation`; `acceptFromDeepLink` forwards caller-supplied
  `{deviceId, verificationToken, isPC, role}`. This is the same client-side role-forward
  already tracked as **VULN-20261114-001 (Unresolved)** — still untestable without a valid
  pending invitation (none on A/B; creating one is outside policy).
- Service-worker fetch proxy (`main-2`, `Swai-Request-From-ServiceWorker`) selects an
  adapter by `origin.endsWith('.mqtt.unifi.serviceworker')` or `findAdapterByServiceWorkerOrigin`;
  messages originate from the same-origin SW/message port — no attacker-reachable
  cross-origin path. Not a finding.

## Status
- Disposable/pending: `s26probe1@maildrop.cc` was submitted as an email-change code target
  but **not confirmed**; A's email remains `tan.tiger5564@maildrop.cc` (verified via
  `/user/self`). No addresses/sessions/devices created or deleted this session.
- Route ledger unchanged: 47 routes (32 done / 15 blocked); blocked items still require
  unavailable data (billing customer, invitation token, emailed token, passkey, captcha,
  server-issued state).
- No new confirmed high-impact finding; `result/confirmed-vuln.txt` unchanged; no Discord
  notification (notification bar not met).
- Evidence: `result/server-side/account.ui.com/traffic/session26-newcover.txt`.
