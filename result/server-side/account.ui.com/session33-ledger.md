# Session 33 server-side ledger — 2026-11-27

Build delta: `account.ui.com` `index-D7cQ-F1j.js` (sha256 `f75b4c9c…303a`) vs
`index-CGj0vhTX.js` (`970b5e85…`). 116 API path literals and all sink counts are
identical; only minifier variable renames differ. `unifi.ui.com` and `www.ui.com`
builds unchanged. No new route/feature. Fresh A email-OTP login was used.

| Method | Path | Host | Auth | Result | Verdict |
|--------|------|------|------|--------|---------|
| POST | /chat/messaging/jwt | account.svc | A (L1) | 200; HS256 JWT `{external_id:A uuid,email:A email,scope:user,name:A name}` | Not Vulnerable |
| POST | /chat/messaging/jwt `{external_id:B uuid}` | account.svc | A | 200; JWT still A identity | Not Vulnerable |
| POST | /chat/messaging/jwt `{externalId:B uuid}` | account.svc | A | 200; still A | Not Vulnerable |
| POST | /chat/messaging/jwt `{user:B uuid}` / `{uuid:B uuid}` | account.svc | A | 200; still A | Not Vulnerable |
| POST | /chat/messaging/jwt `{email:B email}` | account.svc | A | 200; still A | Not Vulnerable |
| POST | /chat/messaging/jwt `{scope:"admin",name:"PWNED_MARKER"}` | account.svc | A | 200; still `scope:user`, A name | Not Vulnerable |
| POST | /chat/messaging/jwt `{metadata,custom}` / form body | account.svc | A | 200; no extra claims | Not Vulnerable |
| POST | /chat/messaging/jwt `?external_id/user/email=` | account.svc | A | 200; still A | Not Vulnerable |
| POST | /chat/messaging/jwt `X-User-Id` / `X-Identity-Id: B uuid` | account.svc | A | 200; still A | Not Vulnerable |
| GET | /chat/messaging/jwt | account.svc | A | 404 | Not Vulnerable |
| POST | /chat/messaging/jwt | account.svc | pre-MFA/none | 401 `Failed to authorize request` | Not Vulnerable |
| GET | /zendesk/user | account.svc | A | 200; only A's Zendesk user (`44644434942359`, end-user, external_id A uuid) | Not Vulnerable |
| POST | /zendesk/user `{}` | account.svc | A | 200; same A user | Not Vulnerable |
| POST | /zendesk/user `{name:"ZUSERMARKER123"}` | account.svc | A | 200; name unchanged | Not Vulnerable |
| POST | /zendesk/user `{email:B email}` | account.svc | A | 200; email unchanged (A) | Not Vulnerable |
| POST | /zendesk/user `{external_id:B uuid}` | account.svc | A | 200; external_id unchanged (A) | Not Vulnerable |
| POST | /zendesk/user `{role:"admin"}` | account.svc | A | 200; role unchanged (`end-user`) | Not Vulnerable |
| GET | /zendesk/tickets/ccd | account.svc | A | 200; `{"tickets":[],"totalTickets":0}` | Not Vulnerable |
| GET | /zendesk/search_tickets, /zendesk/search_ccd | account.svc | A | 404 (POST/captcha-gated, known) | Not Vulnerable |
| GET | /api/sso/v1/account-chooser | sso | A | 200; `{"accounts":[]}` | Not Vulnerable |
| GET | /api/sso/v1/account-chooser | sso | none | 200; `{"accounts":[]}` (no leak) | Not Vulnerable |
| GET | /devices/{id}/application-devices | cloudaccess.svc | none/A | 403 `Missing Authentication Token` (SigV4/STS required; no devices) | Not Vulnerable / Unresolved |
| GET | /geo | sso | A | 404 (real geo base is geo.svc, out of scope) | Not Vulnerable |

## Notes
- `chat/messaging/jwt` is a session-derived token mint: no client-controlled identity,
  scope, or claims. The token is consumed by a third-party chat service, which is out of
  scope; no secret/`kid` confusion was attempted (brute force prohibited).
- `zendesk/user` is create-or-fetch for the session's linked Zendesk user and ignores all
  body fields; no cross-account link or role change.
- Site Manager same-origin `/api/...` strings are SPA fallback on `unifi.ui.com`; actual
  API bases are out-of-scope `*.svc.ui.com` hosts or console `/proxy/` routes.
- No new high-impact finding; `confirmed-vuln.txt` unchanged; no Discord notification.

Evidence: `result/server-side/account.ui.com/traffic/session33-newtests.txt`
