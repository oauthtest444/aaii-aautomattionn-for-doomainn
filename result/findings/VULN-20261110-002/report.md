# VULN-20261110-002 — Pre-MFA login response discloses account UUID and MFA metadata

**Status:** Confirmed (low impact)
**Severity:** Low / Informational
**Host:** `https://sso.ui.com`
**Date:** 2026-11-10
**Authentication:** pre-MFA (password only)

## Summary
`POST /api/sso/v1/login` with a correct email + password returns HTTP `499`
with `required: "2fa"` and a body that discloses identifiers and MFA metadata
before the second factor is satisfied:

- `user.id` / account UUID (`d8946fad-…`) and `user.default_mfa`
- every active authenticator: its internal `id`, `type` (`email`, `backup_code`),
  `status`, `created`, `last_success`, `blocked_reason`, and for email the
  partially masked address (`ta·········64@maildrop.cc`)
- backup-code authenticator `codes_left`
- a WebAuthn `publicKeyCredentialRequestOptions.challenge` and `rpId`

An attacker who knows only the account password (e.g. from a credential-stuffing
list) learns the account UUID, which MFA methods are enrolled, and how many
backup codes remain, without possessing the second factor.

## Reproduction
```
POST https://sso.ui.com/api/sso/v1/login
Content-Type: application/json

{"user":"<test-account-email>","password":"<test-password>"}
```
Response: `HTTP/2 499`
```json
{"required":"2fa","authenticators":[
  {"id":"b82c4c7d-…","type":"email","status":"active","email":"ta·········64@maildrop.cc",
   "created":"2025-01-12T17:14:04Z","last_success":"…","blocked_reason":null},
  {"id":"ae514c45-…","type":"backup_code","status":"backup","codes_left":10}],
 "publicKeyCredentialRequestOptions":{"challenge":"…","timeout":60000,"rpId":"ui.com",…},
 "user":{"default_mfa":"b82c4c7d-…","id":"d8946fad-…"}}
```
The session created here is the restricted `UBIC_2FA` cookie (10 min, `.ui.com`,
SameSite=Lax). Verified that this pre-MFA session **cannot** access
`/api/sso/v1/user/self/**` (`401 " is not allowed"`), so this is disclosure only,
not an authentication bypass. JWT forgery attempts (`alg:none`) were rejected.

## Impact
Low: information disclosure that lowers the cost of targeted phishing / MFA
social engineering. No account access is gained.

`Confirmed-vuln.txt: excluded — low-impact metadata disclosure, below notification bar.`

## Remediation
Return only the minimum needed to render the MFA step (e.g. the authenticator
`type` and a fully masked hint). Do not return the account UUID, internal
authenticator IDs, `last_success` timestamps, or backup-code counts until the
second factor is complete.

## Evidence
`evidence/pre-mfa-login-response.txt`
