# Summary — account.ui.com

Last updated: 2026-10-30T07:26Z
Agent/model: opencode / deepseek-v4.1-flash-free

## Scope
- Authorized: `account.ui.com` (domain-only, per `data/targets.txt`).
- The SPA has no same-origin API; its account data lives on cross-origin SSO
  hosts. To exercise the authorized UI's features, the APIs actually called by
  `account.ui.com` (`sso.ui.com`, `account.svc.ui.com`, billing/other
  `*.svc.ui.com`) were exercised at runtime with the provided test accounts.
  This is a documented, reversible interpretation; no unrelated hosts were
  pivoted to and no real customer data was accessed.
- Credentials in `creds/test-account.txt` are the intended `account.ui.com`
  Test Account A/B and were used for authenticated testing.

## Progress report
| Metric | Value |
|--------|-------|
| UI routes discovered | 39 + catch-all `*` (see `inventory/routes.md`) |
| Routes with runtime or source testing | 21 (public routes above + authenticated `/`, `/account`, `/security`, `/billing`, `/subscriptions`, `/invoices`, `/requests`, login MFA/trust-device steps) |
| Routes logged in / source-reviewed | 21 |
| Authenticated routes data-blocked | 9 (org billing, payments, subscriptions/subscribe, backups, invoice detail, ticket detail) |
| Authenticated routes device/token-blocked | 4 (create-passkey, change-email, change-email/confirm, reset-password token) |
| Pending public/token routes | `/reset-password/password-reset-uuid/:uuid` (valid token only) |
| JS bundles analyzed | 1 (7.12 MB, sha256 ce9950c9…c468) |
| API endpoints catalogued | ~100; authenticated endpoints exercised for profile, addresses, settings, roles/beta, MFA, sessions, trusted devices, activity, account chooser, email change, Zendesk/billing/enterprise/fabric/storage/ues reads |
| Server-side ledger (continuation) | 26 tests: 18 not vulnerable, 7 blocked-no-data, 1 unresolved (`server-side/account.ui.com/test-ledger.md`) |
| Confirmed vulnerabilities | 0 |
| Unresolved candidates | 2 (stored-XSS, suspicious-confirm) |

## Tested surface
1. `/login` — rendered; 31 network requests; no same-origin API; no reflection of
   `redirect`. Post-login redirect uses `MC` allowlist (`*.ui.com`, `*.ubnt.com`,
   `*.uisp.com`) -> not an external open redirect.
2. `/register` — UI and direct registration blocked by reCAPTCHA Enterprise
   (details in `account-creation.md` and `server-side/.../traffic/`).
3. `/idp/login-result?code=...&state=...` — server 400 `STATE_MISSING`; `state`
   bound to `sso_idp_state` cookie; no redirect.
4. `/security/suspicious/confirm?token=INVALID&decision=yes` — `inspect` 400
   `INVALID_CONFIRMATION_TOKEN`; the auto-confirm POST is gated on valid inspect.
5. `/msp/idp/setup-result` — source analysis: reflects query params into a
   same-origin `postMessage` to opener; no HTML sink.
6. `/payments/3ds` — source analysis: `return_url` validated by `MC` before use.
7. `/reset-password` — renders form; loads reCAPTCHA Enterprise; no API on load.
8. `/verify` — requires router state; without it redirects to `/login`; query
   input not reflected.
9. `/verify/verification-code/:uuid` — auto-fires
   `PUT sso.ui.com/api/sso/v1/verify/verification-code/<uuid>` on load; invalid
   uuid -> 404 then `/login`. GET-driven but token is secret.
10. `/verify/success` — not a registered route; CloudFront SPA fallback returns
    200 and the catch-all renders the in-app "Page not Found". Only used as a
    router-state navigation target.
11. `/msp/idp/setup-result` — unauth redirects to
    `/login?innerRedirect=%2Faccount` (private route).
12. `/supportform` / `/supportform-uisp` / `/supportform-umr` — redirect to
    `/requests` or `/login?innerRedirect=...`; no public form.
13. `/switch?redirect=https://example.com` — invalid external `redirect` dropped;
    only `login_hint` carried to `/login`.
14. `/activate` — fixed redirect to `https://activate.ui.com/`.

Authenticated (Test Accounts A/B):
15. `/login` + `/login/mfa` + `/login/trust-device` — completed email-MFA login;
    trust-device step was declined ("Not now"); no bypass.
16. `/account` — profile fields (`first_name`, `last_name`, `username`,
    `session_ttl_seconds`) and email change. Username/email uniqueness enforced
    case-insensitively (409 `fields_non_unique`). Email change requires a
    6-digit OTP sent to the new address and AAL2 on the send step.
17. `/security` — MFA list/default, sessions, trusted devices, activity,
    recovery-code generation. All sensitive mutations returned `499 L2_REQUIRED`
    on a level-1 session (server-side re-auth, not just a client modal).
18. `/billing` (Services nav) — subscriptions and invoices render empty states;
    no org-scoped billing data for the test accounts.
19. `/requests` — zero Zendesk tickets; `GET /zendesk/comments/{id}` enforces
    ownership (id 2 -> 403, others -> 404). Ticket creation/commenting remains
    blocked by `x-captcha-token`.
20. `/user/{uuid}` IDOR — A requesting B's uuid -> 403 `mismatching UUID`;
    nested `/user/{uuid}/{mfa,sessions,...}` -> 404. `?uuid=` overrides ignored.
21. `/api/sso/v2/user/self/mfa/email/{id}/send` — A using B's authenticator id
    -> 404, so no cross-account OTP send / MFA confusion.

Continuation 2026-10-30 07:13–07:25Z (A and B both logged in, AAL2; evidence in
`server-side/account.ui.com/traffic/continuation-20261030-early.txt`):

22. `PUT /user/self` — `twofa_enabled`, `is_verified`, `roles`, `organization`,
    `tenant` are ignored by the serializer; persisted values unchanged.
23. `PATCH /user/self/settings` — `suspicious_detection` ignored;
    `passwordless_enabled` is a user-facing preference (changed then restored).
24. `/user/self/addresses` — create/update forces `user` to the caller; cross-
    account read/update/delete -> 405/404; `/user/{B}/addresses` -> 403.
25. `/user/self/sessions/{B}` — A cannot revoke B's session (404).
26. `/user/self/mfa/{email,webauthn}/{B}` — A cannot delete B's authenticators
    (404 each).
27. `/user/{uuid}/roles/beta` — self opt-in 204; B's uuid 403 `mismatching UUID`.
28. Read-only empty surfaces for the test accounts: billing `customers/self`,
    subscriptions/invoices (404 no customer), payment-methods (422 needs type),
    enterprise organizations (empty), Zendesk tickets (empty, own user),
    fabric MSP (403 no membership), storage subscriptions (404), UES
    subscriptions (empty), sso addresses/activity (empty/own only).

## Client-side analysis
- Full sink scan: no `eval`/`new Function`/`document.write`/`insertAdjacentHTML`/
  `srcdoc`; `innerHTML`/`dangerouslySetInnerHTML` not fed by user input.
- Open redirect: allowlist (`MC`) plus internal-path validation (`Wpe`) block
  external redirects. No confirmed open redirect.
- postMessage: two app listeners; megaphone requires parent + https +
  `*.ui.com/ubnt.com/uisp.com` + schema; MSP result requires same origin.
- "SECRET"-named constants are reCAPTCHA **site keys** / public vendor keys, not
  secrets. Maps key is referer-restricted.
- Candidate stored XSS: `html-react-parser` renders Zendesk `html_body` without
  sanitizer (requires auth) — Unresolved.

## Confirmed findings
None. `result/confirmed-vuln.txt` intentionally unchanged.

## Negative results (tested, not vulnerable)
- Open redirect via `redirect`/`innerRedirect`: `MC` allowlist + `Wpe` internal
  path check; `https://example.com`, `//example.com`, backslash variants all
  rejected.
- Legacy hash mapping `S7e` (`#verify/verification-code/…`, `#reset-password/…`)
  builds `/${hash.slice(1)}` without `Wpe`, but `..`/backslash/encoded-slash
  traversal variants all resolved same-origin (`https://account.ui.com/…`), not
  to an external host.
- Reset-token leak via Referer: response sets `referrer-policy: origin` and
  `<meta name="referrer" content="same-origin">`; no cross-origin path leak.
- Static host: SPA fallback returns 200 index for unknown paths; no source maps
  (`.js.map` returns index HTML); no S3 bucket listing; `?versionId=` ignored;
  `robots.txt` disallows all; `x-robots-tag: noindex`.
- `login_hint` HTML payload reflected only as React-escaped input value.
- Cross-account IDOR on user/profile/MFA/session/activity paths: uuid mismatch
  -> 403, nested paths -> 404, `?uuid=` ignored, MFA email id scoped to self.
- Duplicate identifiers: username (including different case) and email changes
  to another account's values -> 409/400 uniqueness errors. No identifier
  collision ATO.
- AAL2 bypass attempts blocked: level-1 sessions receive `499 L2_REQUIRED` for
  session revoke, password change, email-verify send, recovery-code generation,
  and login-level refresh (no self-upgrade). Client `requireAal2` modal is
  backed by a server check.
- Email-change OTP is bound to the new address and cannot be completed without
  reading that mailbox; A was changed to a probe mailbox and reverted.
- Zendesk comment IDOR negative (ownership enforced); only a ticket-existence
  oracle in 403-vs-404.
- No client-controlled authenticator id in `/login/2fa` (body is `{token: code}`
  only), so cross-account MFA-id confusion is not reachable.
- Profile/settings mass assignment: protected fields (`twofa_enabled`,
  `is_verified`, `roles`, `organization`, `tenant`, `suspicious_detection`)
  are ignored; `passwordless_enabled` is a legitimate user preference.
- Address BOLA and ownership override: create/update cannot assign another
  user; cross-account object access -> 405/404/403. All test addresses deleted.
- Cross-account session revocation and MFA authenticator deletion -> 404.
- `roles/beta` cross-account write -> 403; self opt-in is self-service and was
  left applied on Test Account A only.
- Billing/payment/subscription/invoice/backup/ticket-detail routes remain
  untestable because the test accounts have no such data (not a security gap).

## Unresolved
See `result/unresolved.md` (U-01 … U-10; U-08–U-10 are observed/negative notes).

## Decisions
- Documented, reversible scope interpretation: exercise only the APIs the
  authorized SPA calls, using the provided test accounts; no pivoting to
  unrelated hosts or real customer data.
- Authenticated routes are now tested, not Unresolved; remaining gaps are
  org/payment data the test accounts do not have.
- Email change without a password is treated as intended (OTP to the new
  mailbox + server-side AAL2), not reported.
- No vulnerability is claimed; user-enumeration (204 vs 404 on
  `/search/{email,username}`) is noted only as a low-value observation.
