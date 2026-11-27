# Session 32 server-side ledger — 2026-11-27

Builds unchanged vs Session 31. Diffed the account SPA's 105 `/api/...` paths against the
97-endpoint inventory; extras are almost all on out-of-scope `*.svc.ui.com` hosts
(billing/enterprise/ips/fabric/ues/cap/u5g-api/storage/umr/megaphone). One genuinely
untested in-scope endpoint found and tested. A/B `UBIC_AUTH` recovered from the prior run
log and re-validated (`/user/self` 200); A re-escalated to L2 via `login/level`.

| Method | Path | Host | Auth | Result | Verdict |
|--------|------|------|------|--------|---------|
| GET | /zendesk/tickets/closed | account.svc | A | 200; only A's closed ticket (`requester_id 44644434942359`) | Not Vulnerable |
| GET | /zendesk/tickets/closed | account.svc | B | 200; only B's closed ticket (`44644404389911`) | Not Vulnerable |
| GET | /zendesk/tickets/closed?requester_id={B zendesk id} | account.svc | A | 200; requester filter ignored, still A's ticket | Not Vulnerable |
| GET | /zendesk/tickets/closed | account.svc | none | 401 UNAUTHORIZED | Not Vulnerable |
| DELETE | /user/self/sessions/{B session id} | sso | A L2 | 404 No SessionMetadata matches | Not Vulnerable |
| DELETE | /user/self/sessions (body `session_ids`/`user`=B) | sso | A L2 | 204; B session still valid, A still valid | Not Vulnerable |
| DELETE | /user/self/trusted_devices/{B device id} | sso | A L2 | 404 Not found | Not Vulnerable |
| DELETE | /user/self/mfa/totp/{B totp id} | sso | A L2 | 404 No TOTPAuthenticator matches | Not Vulnerable |
| DELETE | /user/self/mfa/email/{B email id} | sso | A L2 | 404 No EmailAuthenticator matches | Not Vulnerable |
| POST | /user/{B uuid}/picture | sso | A | 403 mismatching UUID | Not Vulnerable |
| DELETE | /user/{B uuid}/picture | sso | A | 403 mismatching UUID | Not Vulnerable |
| PUT | /user/{B uuid}/picture | sso | A | 405 METHOD_NOT_ALLOWED | Not Vulnerable |
| POST | /api/sso/v2/users | sso | none | 400 VALIDATION_ERROR (private key/captcha/devicecheck) | Not Vulnerable |
| POST | /api/sso/v1/verify (+verification-code/search/password) | sso | none | 404 on sso.ui.com (bundle base sso.ubnt.com, out of scope) | Not Vulnerable |

## Notes
- `requester_id`, `user`, and `page` query overrides on the closed-ticket endpoint do not
  change caller scoping; the server derives the Zendesk requester from the session.
- Cross-account deletes consistently return 404 (object not found in caller scope), so
  there is no session-revocation, trusted-device-removal, or MFA-removal IDOR.
- Picture writes are self-scoped by UUID comparison ("mismatching UUID"); PUT is not routed.
- No new high-impact finding; `confirmed-vuln.txt` unchanged; no Discord notification.

Evidence: `result/server-side/account.ui.com/traffic/session32-newtests.txt`

## Passkey / WebAuthn gating (new coverage)
| Method | Path | Auth | Result | Verdict |
|--------|------|------|--------|---------|
| POST | /api/sso/v1/user/self/mfa/webauthn | A L1 | 499 L2_REQUIRED | Not Vulnerable (no pre-MFA passkey registration) |
| POST | /api/sso/v1/user/self/mfa/webauthn | A L2 | 200 creates `status:pending` webauthn authenticator + creation options | Expected; pending key not usable |
| POST | /api/sso/v1/user/self/mfa/webauthn/options | A L1/L2 (no verified key) | 404 "User or verified keys not found" | Not Vulnerable (pending registration cannot log in) |
| DELETE | /api/sso/v1/user/self/mfa/webauthn/{pending id} | A L2 | 204 (cleanup) | — |

Passkey registration requires L2, so a password-only / pre-MFA session cannot add a passkey
to bypass email OTP. The pending authenticator was deleted after testing (A MFA list restored).
