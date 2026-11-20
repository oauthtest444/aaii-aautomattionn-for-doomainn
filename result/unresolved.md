# Unresolved items

## 1. Credentialed CORS on sso.ui.com / cloudaccess.svc.ui.com
- `sso.ui.com` reflects any `https://*.ui.com` Origin with
  `Access-Control-Allow-Credentials: true`; preflight allows write methods.
- Session 5 re-test: `https://ui.com.evil.com`, `https://account.ui.com.evil.com`,
  `https://notui.com`, `http://evil.ui.com`, and `null` are all rejected. Only real
  `*.ui.com` https origins are reflected.
- Exploitability still requires an attacker-controlled `*.ui.com` origin (stored
  HTML/JS, writable bucket, or subdomain takeover). Wildcard `*.ui.com` currently
  serves a fixed SPA. No such origin found.
- Session 16 adds the unauthenticated `POST /api/sso/v1/address/validator` to the
  same reflection set (OPTIONS/preflight reflects any `https://*.ui.com` Origin
  with credentials); still needs an attacker-controlled `*.ui.com` origin.
- Detail: `result/findings/cors-credentialed-reflection.md`.

## 2. Zendesk comment HTML renderer (VULN-20261111-001)
- `account.ui.com` renders Zendesk `html_body` via `html-react-parser` with no
  client-side sanitizer.
- Cross-account comment access is 403 and tickets are own-scoped, so only self-XSS was
  reachable. Server-side (Zendesk) sanitization was not bypass-tested.
- Detail: `result/findings/VULN-20261111-001/report.md`.

## 3. Authenticated-only routes with no test data
- Billing / invoices / payments / subscriptions were revisited at L2 in Session 12:
  the UI loads, but `billing.svc.ui.com` returns `404 Customer not found` and that
  host is outside the approved component list, so only UI-observed calls were made.
  `/invoices`, `/payments`, `/subscriptions` redirect to `/billing`.
- MSP IdP and passkey routes remain blocked: no MSP membership, no registered
  passkeys.

## 4. Account creation
- `POST /api/sso/v2/users` requires a reCAPTCHA token; the two test accounts in
  `creds/test-account.txt` were used instead. No brute force attempted (policy).

## 5. Passwordless login API (Session 8)
- `POST /api/sso/v1/passwordless/options` (`{user}`) and
  `POST /api/sso/v1/passwordless/login` (credential payload) exist and validate input,
  but both returned `429 RATE_LIMITED` (`retry_after:0`) with schema-valid bodies.
- No call site in the SPA bundle (config-only). Not retried repeatedly to respect the
  documented login rate limits; flow remains untested.

## 6. Invite deep-link `role` forwarded to confirm-invitation (VULN-20261114-001)
- `/invite/:verificationToken?/:hostId?` and `/invite-network-server/...` read `?role=`
  (parser allows `admin`|`owner`) and send `{deviceId,verificationToken,role}` to
  `POST https://cloudaccess.svc.ui.com/confirm-invitation`.
- If the server uses this client value instead of the role stored on the invitation,
  an invitee can escalate to `owner`. Unverified: test accounts have no pending
  invitation and creating a console/invitation is outside policy. Bogus-device probes
  returned `DEVICE_OFFLINE` regardless of role.
- Detail: `result/findings/VULN-20261114-001/report.md`.

## 7. Device-login token endpoints + credentialed CORS (Session 11)
- `activate.ui.com` (S3 SPA) implements a device-code login: user enters a 5-char code,
  `POST https://sso.ui.com/api/sso/v1/user/self/token/setup {token}` returns
  `device_name`, then `POST .../token/login {token}` approves the device.
- Both endpoints require an authenticated session (unauthenticated -> `401`) and use
  `withCredentials`. Preflight reflects any `https://*.ui.com` Origin with
  `Access-Control-Allow-Credentials: true`, extending the credentialed-CORS issue
  (item 1) to the device-login flow. Still not exploitable without attacker-controlled
  `*.ui.com` content.
- Code space / rate limiting not tested (would need authenticated requests and risks
  account lockout). Device-code consent phishing is inherent to the flow (device name is
  shown only after approval), not counted as a vulnerability.

## 8. Clickjacking allowlist on account.ui.com (Session 11)
- `account.ui.com` CSP `frame-ancestors 'self' *.ui.com uic.uidev.tools *.uic.uidev.tools`
  (XFO `SAMEORIGIN` is overridden by CSP in modern browsers). Any `*.ui.com` subdomain
  can therefore frame the account portal.
- Not exploitable as-is: wildcard `*.ui.com` serves a fixed SPA and no attacker-controlled
  `*.ui.com` content was found (same prerequisite as the CORS item).
- `uic.uidev.tools` is a third-party domain resolving to CloudFront (`52.85.193.0/24`) and
  currently returns `403`; `uidev.tools` has no A record. Observed only (out of scope).
  No takeover was demonstrated (CloudFront alternate-domain takeover requires ACM/DNS
  control).

## 9. Test-account session/MFA operational blockers (updated Session 19)
- OTP delivery recovered. A full mobile-UA login of Account A succeeded
  (password -> `499` MFA -> email OTP -> `/login/2fa` 200 -> `UBIC_AUTH`); maildrop
  now receives MFA and email-change codes again. Fresh interactive login works for A.
- Session 19 made OTP retrieval reproducible without a browser:
  `POST https://api.maildrop.cc/graphql` with
  `{"query":"query { inbox(mailbox:\"tan.tiger5564\") { id subject date } }"}`
  and `message(mailbox:\"tan.tiger5564\", id:\"<id>\"){ html }`. Login with
  `remember_me:true` also sets an HttpOnly `ACCOUNT_CHOOSER` cookie (Domain
  `sso.ui.com`, SameSite=Strict); `GET /account-chooser` is cookie-scoped and
  `DELETE /account-chooser/{opaque_id}` is an idempotent no-op across accounts
  (not an IDOR).
- The login `499` body still lacks `email_changeable`, so `/login/change-email` and
  the legacy `POST /legacy/user/self/email/send` endpoint remain unreachable
  (`403`). The current profile email-change flow is reachable with a session but
  sends a code to the new mailbox and binds confirmation to that address; it is not
  an ATO primitive. The pending test change to `opencode-s13@maildrop.cc` was not
  confirmed and its 10-minute code has expired.
- B's TOTP secret is unknown and backup codes are stale (rotated Session 10), so
  there is no alternate interactive MFA path for B. No passkeys are registered.
- A self-enrolled in early access (`Beta Testers`) while testing
  `POST /user/{uuid}/roles/beta`; the endpoint only adds this fixed role and rejects
  other UUIDs. This is a test artifact, not a privilege escalation.

## 10. Support-file helper consoleID IDOR (Session 17)
- The account SPA's Ada support handoff calls
  `POST https://cloudaccess.svc.ui.com/devices/{consoleID}/support-files` (and a
  cap/umr equivalent) with `consoleID` taken from chat `user_data`, returning a
  `download_url`.
- Not testable: A/B have no cloudaccess hosts/devices/consoles (`/devices`,
  `/api/v1/hosts`, `/sites` all empty), and guessing/enumerating real device IDs is
  prohibited. Cross-tenant ownership of this endpoint remains **Unresolved**.
- `POST /chat/queue {userId,department}` was tested and is session-bound (body
  `userId` optional/ignored); no cross-account impact. Arbitrary `department` is
  stored in the queue but no in-scope HTML sink renders it.
