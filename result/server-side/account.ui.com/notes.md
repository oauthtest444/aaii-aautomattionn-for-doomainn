# Server-Side Notes — account.ui.com SPA APIs (continuation 2026-10-30)

Scope note: `data/targets.txt` authorizes `account.ui.com`. The SPA is static and
calls its account backend on `sso.ui.com` / `*.svc.ui.com`. As documented in
`SUMMARY.md` and `out-of-scope.txt`, only endpoints actually called by the
authorized SPA were exercised, with the provided disposable test accounts A/B.
No unrelated host, identifier enumeration, or real-user data was touched.

Test accounts (from `creds/test-account.txt`):
- A: `tan.tiger5564@maildrop.cc` uuid `d8946fad-2b8e-4cf0-82c5-5d955b57b829`
- B: `overrated.chinchilla337@maildrop.cc` uuid `7c5aab2b-e568-40de-a7a5-ec27df1db94b`

## Confirmed server-side weaknesses
None. All authorization/ownership boundaries below held.

## Negative / held results (this continuation)

### 1. Mass assignment on profile self-update
`PUT https://sso.ui.com/api/sso/v1/user/self` (A, level 2)
- `{"twofa_enabled":false}` -> 204, persisted `twofa_enabled` stayed `true`.
- `{"is_verified":false}` -> 204, persisted `is_verified` stayed `true`.
- `{"roles":["admin"]}` -> 429 on the burst; `/user/self/roles` still `{"roles":[]}` once retried.
- `{"organization":{...}}`, `{"tenant":[...]}` -> 429 during the burst; re-read
  showed `organization:null`, `tenant:[]` (unchanged).
- `session_ttl_seconds`, `trusted_session_ttl_seconds`, `default_mfa`,
  `accounts` were not freely writable in the same test.
Conclusion: serializer whitelist ignores protected fields. Not vulnerable.

### 2. Settings patch
`PATCH /api/sso/v1/user/self/settings` (A)
- `{"suspicious_detection":[]}` -> 200 but response/persisted value stayed
  `["signin"]` (ignored).
- `{"passwordless_enabled":false}` -> 200 and persisted `false`; this is a
  user-facing security preference the UI can also toggle, so it was reverted to
  `true` (verified). Not mass assignment, not a finding.

### 3. Addresses: BOLA and mass assignment/ownership
Created test addresses with test-owned values.
- A `POST /user/self/addresses` -> 201, `user` forced to A even when body
  contained `user:"<B_uuid>"`.
- A `PUT /user/self/addresses/<A_id>` with `user:"<B_uuid>"` -> 204, owner
  remained A (ownership override ignored).
- A `GET /user/self/addresses/<B_id>` -> 405 (GET not allowed on detail).
- A `PUT /user/self/addresses/<B_id>` -> 404 `No SSOAddress matches the given query`.
- A `DELETE /user/self/addresses/<B_id>` -> 404; deleting A's own address -> 204.
- A `GET /user/<B_uuid>/addresses` -> 403 `mismatching UUID`.
All created addresses were deleted afterwards; both accounts are back to
`{"addresses":[]}`.

### 4. Session revocation BOLA
- A at level 2: `DELETE /user/self/sessions/<B_current_session_id>` -> 404
  `No SessionMetadata matches the given query`.
- B's own session list had 3 entries; B's current session was not affected.

### 5. MFA authenticator BOLA
- A `DELETE /user/self/mfa/email/<B_default_mfa_id>` -> 404
  `No EmailAuthenticator matches the given query`.
- A `DELETE /user/self/mfa/webauthn/<B_id>` -> 404
  `No WebAuthnAuthenticator matches the given query`.
- Prior continuation also showed A `POST /user/self/mfa/email/<B_id>/send` -> 404.

### 6. `roles/beta` cross-account write
- A `POST /user/{A_uuid}/roles/beta` -> 204; A's roles then include the beta
  opt-in roles (`Beta Testers`, `Beta - ...`). This is the UI early-access
  opt-in, self-service.
- A `POST /user/{B_uuid}/roles/beta` -> 403 `mismatching UUID` (blocked).
Not a finding; note that A's test account now carries the beta opt-in roles.

### 7. Empty-data authenticated surfaces (read-only probes)
- `billing.svc.ui.com /api/v2/customers/self`, `/subscriptions`, `/invoices`
  -> 404 `Customer not found` (no billing customer for the test account).
- `/payment-methods` -> 422 `type` required (needs a `type` query param).
- `/api/v2/products` -> 200 public product catalogue.
- `enterprise.svc.ui.com /api/v1/organizations` -> 200 `data: []`.
- `account.svc.ui.com /zendesk/tickets` and `/tickets/closed` -> 200 empty.
- `/zendesk/user` -> 200, test account's own Zendesk end-user object.
- `fabric.svc.ui.com /msp/v1/msp` -> 403 `no_msp_membership`.
- `storage.svc.ui.com /v1/users/self/subscriptions` -> 404 (route not present).
- `ues.svc.ui.com /api/v1/subscriptions` -> 200 empty.
- `sso.ui.com /user/self/addresses` -> 200 empty.
- `sso.ui.com /user/self/activity` -> 200 own activity only.

### 8. Zendesk ticket-comment stored-XSS candidate (CAND-002)
Still unresolved. Source confirms ticket `create` sends
`{ticket_form_id, requester, tags, subject, comment.body, custom_fields}` with no
`x-captcha-token`, while `createComment`/`search` require the header. No ticket
was created because that would notify support (external side effect) and the
only rendered sink would be the attacker's own comment (self-XSS without
delivery). No execution was claimed.
