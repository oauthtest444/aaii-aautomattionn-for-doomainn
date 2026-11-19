# Session 17 server-side ledger — 2026-11-19

Target: ui.com (domain-only), continuation (target hash `3353d9c6...`, preserved).
Auth: recovered still-valid A (`d8946fad...`, tan.tiger5564) and B
(`7c5aab2b...`, overrated.chinchilla337) `UBIC_AUTH` JWTs from the prior session log;
`GET /api/sso/v1/user/self` -> 200 for both.

## Bundles
- `account.ui.com` `index-CYDY7PBp.js` unchanged (sha256 `14c9788e...2d14a1b`, 7,150,439 B).
- `www.ui.com` `index-BfxHSOgp.js` unchanged (sha256 `0722ab3b...eae58f9`).
- `activate.ui.com` `index-1CNh1WqS.js` (sha256 `7ebf64bb...7dcd90`, 462,915 B).
No new code bundle to diff.

## Phase 1 — API extraction diff
Full endpoint set re-extracted from the account bundle config (123 paths). Newly
inventoried/under-tested endpoints selected for testing:
`chat/queue`, `chat/messaging/jwt`, `passwordless/options`, `passwordless/login`,
`passwordless` validation, `zendesk/tickets/ccd`, `devices/{id}/support-files`
(client call site `createSupportFile`).

## Tests and results
| Method | Endpoint | Auth | Baseline | Test | Result | Status |
|--------|----------|------|----------|------|--------|--------|
| POST | `/api/sso/v1/passwordless/options` | none | `{user}` -> 200 with `publicKeyCredentialRequestOptions` (`rpId: ui.com`, `allowCredentials: []`) | unknown user | 429 (shared rate limit) | Not Vulnerable (no oracle; allowCredentials empty) |
| POST | `/api/sso/v1/passwordless/login` | none | `{}` -> 400 `Invalid credential payload` | fake credential structs | 400 validation / 429 | Not Vulnerable (schema validated; blocked by rate limit) |
| GET | `/zendesk/tickets/ccd` | L1 | A -> `{"tickets":[],"totalTickets":0}` | B | empty | Not Vulnerable (no data) |
| GET | `/zendesk/comments?ticket_id=<own>` | L1 | - | own ticket | 404 `Not found` | Not Vulnerable (param not supported; path form is owner-checked) |
| GET | `/chat/queue` | L1 | A/B -> 404 `User not found in queue` | after POST | 200 own `queueInfo` | Not Vulnerable (session-bound) |
| POST | `/chat/queue` | L1 | body `{userId:A_uuid, department}` -> 201 | body `{userId:B_uuid, department}` -> 201; body missing `userId` -> 201 | GET as B still 404; `X-User-Id` ignored; `chat/messaging/jwt` still A's `external_id` | **Not Vulnerable** — `userId` is not required and does not affect queue ownership or JWT; server keys queue to the session |
| DELETE | `/chat/queue` | L1 | -> 204 | verify GET -> 404 | cleanup OK | Not Vulnerable |
| OPTIONS | `/chat/queue` | - | `Origin: https://evil.ui.com` -> **403** | - | account.svc CORS is strict (no `*.ui.com`) | Not Vulnerable |
| OPTIONS | `sso.ui.com/*` | - | `Origin: https://evil.ui.com` -> ACAO reflected + credentials | - | known credentialed-CORS class; still needs attacker `*.ui.com` origin | Unresolved (known) |

## Observation (not a finding)
- `POST /chat/queue` stores an arbitrary, unvalidated `department` string in the
  support queue (`GET` echoes it). The value only feeds the in-page queue overlay as
  text (`textContent`) and the Ada/Zendesk agent side is third-party/out-of-scope, so
  no in-scope sink or stored-XSS execution was demonstrated.
- Support-file helper `createSupportFile` posts to `cloudaccess.svc.ui.com/devices/{consoleID}/support-files`
  (and the cap/umr equivalent) with `consoleID` taken from Ada chat `user_data`.
  Cross-tenant IDOR was **Unresolved**: the test accounts have no console/device IDs
  (cloudaccess `/devices`, `/api/v1/hosts`, `/sites` all empty), and guessing or
  enumerating real device IDs is prohibited.

## Evidence
- `result/server-side/account.ui.com/traffic/session17-chat-queue.txt`
- This ledger.

## Conclusion
No new confirmed high-impact vulnerability (no IDOR/BOLA/BAC/mass-assignment/XSS).
`confirmed-vuln.txt` unchanged; no Discord notification sent.
