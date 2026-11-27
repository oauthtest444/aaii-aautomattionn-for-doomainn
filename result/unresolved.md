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
- Session 22 re-confirmed the reflection (`https://evil.ui.com`, `https://ui.com`,
  `https://a.b.ui.com` -> `ACAC:true`; `http`, `evilui.com`, `ui.com.evil.com`,
  trailing-dot, `:8443`, `null`, non-`ui.com` rejected) and surveyed 21 non-`svc`
  `*.ui.com` CNAMEs (`ir`->investis, `secure-uploads`->SendSafely, `status`->Statuspage,
  `unifi.dev/stg`->CloudFront 403, `unifi.df` no record). Still no attacker-controlled
  `*.ui.com` origin.
- Detail: `result/findings/cors-credentialed-reflection.md`.
- Session 25: passive recon (94 hosts) again found no dangling/claimable `*.ui.com`
  CNAME (JFrog `artifacts`, Zendesk `help`, SendSafely `secure-uploads`, Statuspage
  `status`, CloudFront `unifi` all owned). Non-approved hosts (`blog/community/design/
  mobility/help.ui.com`) were only read/classified and are recorded in
  `out-of-scope.txt`. The CORS item therefore remains **blocked**, not exploitable.

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
- **Session 24:** B's full session is recoverable and B's MFA is email OTP to B's
  maildrop (`overrated.chinchilla337`), not TOTP. A still-valid B `UBIC_AUTH` was
  recovered from `result/logs/opencode.log` and validated (`/user/self` 200); a fresh
  B `UBIC_2FA` is mintable via the password step. See item 12.
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

## 11. Legacy www.ui.com profile HTML injection (self-XSS, Session 22)
- Legacy `main.min.js` `constructUserPopup()` injects `picture` via
  `.html('<img src="'+picture+'">')` and `first_name`/`last_name`/`email` via
  jQuery `.append()` using the `/user/self` response (cached in `localStorage`).
- Only the caller's own data is rendered, so it is self-XSS with no cross-user
  delivery found; excluded per policy. The Site Manager has no equivalent sink
  (only Release Notes uses `dangerouslySetInnerHTML`).

## 12. Zendesk search + second-account MFA (Session 23 status)
- `POST https://account.svc.ui.com/zendesk/search_tickets` / `search_ccd`
  (`{query,status}`, header `x-captcha-token`) exist in the bundle, but the caller
  is gated by `allowBillingSearch:false` and `/requests` redirects to `/`; no
  in-bundle invocation path. Cross-account IDOR remains **Unresolved** (needs a
  cross-account ticket plus a valid `x-captcha-token`).
- **Session 24 (resolved):** B's second-account session is now available. A valid B
  full-session `UBIC_AUTH` was recovered from `result/logs/opencode.log` and
  re-validated (`/user/self` 200). The earlier "`sendEmailV2` needs a full session"
  conclusion was wrong: with B's fresh pre-MFA `UBIC_2FA` token, `POST
  /api/sso/v2/user/self/mfa/email/{id}/send` returns `200` and emails an OTP (B MFA is
  email, authenticator `a646df96-...`), and `/login/2fa` completes the login. B does
  **not** use TOTP.
- The MFA flow is session/user-bound: B pre-MFA + A's authenticator id → `404`; a
  fresh A OTP under B's pre-MFA → `403 INVALID_CREDENTIAL` (same code under A → `200`).
  No cross-user OTP routing or MFA bypass. Pre-MFA tokens are rejected on sensitive
  endpoints (`/user/self`, `/addresses`, `/activity` 401; `/settings`, `/sessions`
  403; `/2fa/backup` 401), and `/2fa/backup` with a full token → `499 L2_REQUIRED`.
- Zendesk cross-account ticket **read** is Not Vulnerable for a known ticket id:
  `GET /zendesk/comments/{id}` → own `200`, other user `403 FORBIDDEN`, unauth `401`.
  Ticket comment **write** requires a valid reCAPTCHA (`400` absent / `403` invalid)
  before the ownership check, so no write IDOR is reachable; search-based IDOR remains
  Unresolved (captcha-gated, no caller).
- Registration bot score still blocks `POST /api/sso/v2/users` with the valid
  `score` site key (`CHALLENGE_RECAPTCHA_TOKEN_REQUIRED`); no new account minted.

## 13. Unauthenticated avatar lookup by UUID (Session 24, excluded)
- `GET https://sso.ui.com/api/sso/v1/user/{uuid}/picture` is reachable **without
  authentication** and returns the avatar URL for a valid account UUID
  (`200 {"picture":"https://account-cdn.svc.ui.com/<image-id>"}`) or `404 "No SSOUser
  matches the given query."` for an unknown UUID. All sibling user-scoped routes and
  writes are properly `401`/`403` (`mismatching UUID`), and query expansion
  (`?include=`, `?expand=`, `?full=`) does not add fields; a 28-name unauth subresource
  sweep found no other unauthenticated subresource.
- Impact is limited to a public CDN avatar URL plus a UUID-existence oracle; UUIDs are
  random v4 and not enumerable from an email/username, and no other PII or write is
  exposed. Documented and **excluded** from `confirmed-vuln.txt` per AGENT.md §9.
- Detail: `result/findings/VULN-20261123-001/report.md`.

## 14. `zendesk_login` return_to / CORS + JSONP probe (Session 25, Not Vulnerable)
- `GET https://sso.ui.com/api/sso/v1/zendesk_login` is a real server-side endpoint
  (not referenced in the SPA config; reached via the help-center SSO hop). Unauth →
  `302 account.ui.com/login`; authenticated → `302 ubnt.zendesk.com/access/jwt?jwt=<HS256>`
  carrying name/email/external_id. `return_to` is forwarded verbatim by sso, but the
  Zendesk hop normalizes it to `https://help.ui.com/hc`, so no open redirect and no
  `javascript:` execution.
- The `302` reflects `Origin: https://evil.ui.com` with `ACAC:true` (same known CORS
  class), but the JWT exists only in `Location`: `fetch(...,{redirect:'manual'})` yields
  an opaque redirect and `redirect:'follow'` lands on non-CORS Zendesk/help hosts, so the
  JWT is **not readable**. No chain to token theft.
- No JSONP: `callback`/`jsonp`/`format=jsonp|javascript` and
  `Accept: application/javascript` → `406 NOT_ACCEPTABLE` / `404`.
- `GET /api/sso/v1/shopify_login` re-confirmed fixed redirect (all params ignored).
- Address BOLA re-test: path-form `PUT/DELETE /user/{uuid}/address/{id}` → `404`;
  cross-uuid `POST /user/{B}/address` → `403 mismatching UUID`; body `user` override
  ignored; B modifying A's address → `404`. Test addresses cleaned up.
- Evidence: `result/server-side/account.ui.com/traffic/session25-zendesk-login-cors-jsonp.txt`.

## 15. Session 26 re-checks (no new unresolved risk; one mechanism documented safe)
- **Account-frame / postMessage bridge (Not Vulnerable, newly documented):** the account
  SPA names a framed instance `account-frame-<rand>` and stores state under a
  `window.name`-derived sessionStorage key. Its outbound emitter `Rw()` posts to
  `window.parent` with `targetOrigin = Gge()`, which is `'*'` **only** in non-`prd` builds
  and otherwise the `ancestorOrigins[0]`/`document.referrer` origin **only if** `kw()`
  passes (`https://` + host last-two-labels ∈ ui.com/ubnt.com/uisp.com). PII events
  (`sso.account.changed`) therefore cannot reach an attacker origin. Inbound Megaphone
  listener requires `event.source === window.parent` and `kw(event.origin)` (Zod-parsed);
  the SSO popup result handler posts with `targetOrigin = window.location.origin`. No
  authorization bypass or data leak found.
- **Email-change header injection / canonicalization (Not Vulnerable):**
  `POST /user/self/email/verify/send` rejects CR/LF (JSON parse error for raw CRLF; invalid
  email for `%0d%0a`), uniqueness is case-insensitive (`TAN.TIGER5564@...` -> unique), and
  the change stays pending until confirmed. A's email remained `tan.tiger5564@maildrop.cc`.
  (`s26probe1@maildrop.cc` was submitted as a code target but not confirmed.)
- **Bounded SSO endpoint discovery:** 20 plausible GET paths (`health`, `version`,
  `config`, `csrf`, `user/self/{email,username,phone,tenant,organizations,apps,api_keys,
  export,invitations,members,permissions}`, `invitations`, `organizations`, `users`,
  `admin`, `me`) all returned `404`; the documented inventory is complete for the SSO host.
- **Site Manager unaudited chunks (main-2..6, numeric):** user-sync `BroadcastChannel`
  (`user-change`/`logout`/`ws-changes`) is same-origin only; invite acceptance forwards
  `e.data.role`/`verificationToken` to `confirm-invitation` — the known
  **VULN-20261114-001**, still Unresolved (no valid pending invitation on A/B); the
  `Swai-Request-From-ServiceWorker` proxy is invoked by a same-origin service worker /
  message port, not an attacker-reachable cross-origin channel.
- `www.ui.com/_next/image` -> `404`; `www.ui.com/api/*` -> `301` to `store.ui.com`
  (out-of-scope commerce host; not tested).

## 16. Session 29 — OIDC discovery, MSP IdP authz, auth type-juggling (all negative)
- `GET https://sso.ui.com/.well-known/openid-configuration` is **newly discovered**
  (`200`): only `issuer`, `jwks_uri`, `RS256` id_token signing, claims `sub/iss/exp`.
  There is no `authorization_endpoint`/`token_endpoint`/`userinfo_endpoint`; sibling
  `/oauth/*`, `/api/sso/v1/oauth/*`, `/saml/metadata` are `404`. So there is no
  reachable OAuth/SAML authorization flow to attack (no `redirect_uri`/`aud` surface).
  JWKS is a single RSA-2048 key. Informational only.
- MSP IdP backend endpoints referenced by the in-scope account bundle
  (`fabric.svc.ui.com` `/api/fabrics/base/msp/v1/idp{,/configuration,/credentials,/scim-token,/sync-targets,/sync-jobs/1}`,
  `/v2/idp/directory/groups`) are all `403 no_msp_membership` for A/B and `401`
  unauthenticated. No broken-access-control leak of IdP credentials or SCIM tokens.
- Zendesk `search_tickets`/`search_ccd` enforce reCAPTCHA **before** the query
  (`400` no token, `403` invalid), so the search-based cross-account IDOR remains
  captcha-blocked (consistent with item 12). `GET /zendesk/tickets?requester_id=` -> `404`.
- Login/OTP/level endpoints validate JSON field types strictly (non-string
  `user`/`password`/`token` -> `400 "Not a valid string."`); `$ne`/`$gt`/array/bool
  payloads cannot reach a query. Wrong/empty password on `login/level` does not
  elevate; `login/level/refresh` at L1 -> `499`. No auth bypass.
- CT recon (`crt.sh %.ui.com`, 1,569 names / 393 non-UUID): still **no**
  attacker-controlled `*.ui.com` origin. `dev-store.ui.com` -> `ubnt-dev.myshopify.com`
  is a live password-protected Shopify store; `help.ui.com` -> `ubnt.zendesk.com`
  live; `training.ui.com` -> `saas.moonami.com`. The credentialed-CORS item (1)
  therefore remains **blocked**, not exploitable.

## 17. CyberSecure subscribe flow — org-scoped billing (Session 30)
- New route `/subscriptions/cyber-secure/subscribe` reads `org` from the URL and uses it as
  `scopeOrgId` for `enterprise.svc.ui.com/api/v1/organizations/{org}/billing/...`.
  With test account A, `/api/v1/organizations?status=active` is empty and a marker org
  returns `400 invalid_organization_id`; there is no eligible gateway either.
- Cannot confirm whether the enterprise billing endpoint enforces org membership without a
  second org/tenant and without testing `enterprise.svc.ui.com` (outside the approved
  component list). Marked **Out of Scope / Unresolved**, not a finding.
- Client-side route is Not Vulnerable (no reflection/sink; Stripe iframe `#url` only).

## 18. Session 31 — credentialed-CORS chain re-verified still blocked
- Fresh sink audit of the **current** Site Manager build (`main-0.b06362b8…`, `main-7.8d401a…`,
  runtime; S30 only diffed API paths): 0 `innerHTML`/`eval`/`new Function`/`document.write`/
  `srcdoc`/`insertAdjacentHTML`; the single `dangerouslySetInnerHTML` is the Zod-validated
  release-notes component (server-authored HTML). `window.open`/`location.assign` use the
  fixed `accountPortal.root` or validated internal paths; `navigation.requested` bridge
  requires `host==="unifi"` + path `/`-prefixed non-`//`. So there is **no URL-reachable DOM
  XSS** on any `*.ui.com` origin.
- Wildcard `*.ui.com` now 302s unauthenticated requests to
  `account.ui.com/login?redirect=<requested host/path>` (XFH/`X-Original-URL` ignored; no
  external `Location`), and with a session serves the fixed Site Manager SPA on any
  subdomain (e.g. `evil.ui.com`). It is still **not attacker-controlled content**, so the
  credentialed-CORS observation (item 1) remains blocked/not exploitable.

## 19. Session 32 — new in-scope endpoint and cross-account write checks (all negative)
- `GET https://account.svc.ui.com/zendesk/tickets/closed` was the only bundle API path missing
  from the inventory. It is correctly session-scoped: A sees only A's closed ticket, B only
  B's; `requester_id`, `user`, and `page` overrides do not widen scope; unauthenticated 401.
  **Not Vulnerable (no BOLA).**
- With A escalated to L2, cross-account writes remain blocked: `DELETE` B's session -> 404
  (`No SessionMetadata matches`), B's trusted device -> 404, B's TOTP/email authenticator ->
  404 (B MFA unchanged); `POST`/`DELETE` B's picture -> 403 `mismatching UUID` (`PUT` 405).
- SSO `verify`/`verification-code`/`search`/`password` POST bodies return 404 on `sso.ui.com`
  because the current bundle's SSO base is `sso.ubnt.com` (out of scope); registration
  (`/api/sso/v2/users`) still requires the private key + captcha + devicecheck attestation.
- No server-side HTML reflection of markers on account/sso/activate; `www.ui.com` 404 reflects
  the URL only inside escaped `content=` meta attributes. The credentialed-CORS item (1)
  therefore still has no attacker-controlled `*.ui.com` origin and remains **blocked**.
- **Passkey/WebAuthn (Session 32):** `POST /api/sso/v1/user/self/mfa/webauthn` is L2-gated
  (L1 -> 499 `L2_REQUIRED`), so a password-only/pre-MFA session cannot enroll a passkey to
  bypass email OTP. An L2 request creates a `pending` authenticator, but
  `/mfa/webauthn/options` returns 404 (`User or verified keys not found`) and the pending key
  is not usable for login. Test key deleted afterwards. Not Vulnerable.
