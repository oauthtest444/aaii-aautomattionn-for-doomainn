# VULN-20261123-001 — Unauthenticated avatar lookup by user UUID (Low; excluded)

**Status:** Confirmed behavior, **Low impact — excluded from `confirmed-vuln.txt`**.
**Type:** Broken access control / information disclosure (avatar URL + account-existence
oracle by UUID).
**Affected asset:** `https://sso.ui.com/api/sso/v1/user/{uuid}/picture` (approved
`sso.ui.com` component; same backend as `account.ui.com` profile).
**Date tested:** 2026-11-23T07:29Z
**Auth context:** unauthenticated, plus cross-account tests with test Account A and B.

## Summary
`GET /api/sso/v1/user/{uuid}/picture` returns any account's avatar URL **without any
authentication**, and returns `200` for a valid account UUID vs `404
"No SSOUser matches the given query."` for an unknown UUID. Sibling user-scoped routes
(`/user/{uuid}`, `/user/{uuid}/address`, write methods, `/roles/beta`) correctly require
authentication and enforce the "self" UUID check (`401` unauth / `403 mismatching UUID`),
so this single endpoint is the outlier.

The disclosed value is only an avatar image URL
(`https://account-cdn.svc.ui.com/<image-id>`) that is already served publicly by the
image CDN, plus a UUID-existence boolean. UUIDs are random v4 and are not otherwise
enumerable from an email/username. No email, name, address, phone, session, role, or
write capability is exposed, and query expansion (`?include=`, `?expand=`, `?full=`) does
not add fields.

## Why excluded (`confirmed-vuln.txt`)
Per `skills/AGENT.md` §9, `confirmed-vuln.txt` accepts only high-impact classes with
practical impact. This is a limited disclosure (a public CDN avatar URL + existence
oracle keyed by a non-secret random UUID) with no path to account takeover, PII beyond
the avatar, or cross-account write. Documented here and excluded.

`Confirmed-vuln.txt: excluded — low-impact public-avatar disclosure / UUID existence oracle; no PII or write impact`.

## Reproduction
1. Without any cookies:
   `GET https://sso.ui.com/api/sso/v1/user/7c5aab2b-e568-40de-a7a5-ec27df1db94b/picture`
   → `200 {"picture":"https://account-cdn.svc.ui.com/7559541d-9df5-4f4e-a2bb-573eab97626e"}`
2. Without any cookies:
   `GET https://sso.ui.com/api/sso/v1/user/11111111-1111-1111-1111-111111111111/picture`
   → `404 {"detail":"No SSOUser matches the given query.","error":"ERROR"}`
3. With Account A's `UBIC_AUTH` cookie, the same URL returns B's avatar (same body);
   `GET /user/{B}` and `GET /user/{B}/address` return `403 mismatching UUID`; `POST
   /user/{B}/picture` returns `403`; `DELETE /user/{B}/picture` returns `403`.

## Evidence
- `evidence/picture-unauth.txt` — raw requests/responses for the unauth lookup, the
  UUID existence oracle, the baseline 401/403 on sibling routes, and the subresource
  sweep (only `picture` is unauthenticated).

## Remediation
Scope `GET /user/{uuid}/picture` to the authenticated self user (`/user/self/picture`)
or require authentication and an explicit avatar-sharing entitlement. If public avatar
lookup is intended, return `404` for unknown UUIDs uniformly and consider non-guessable
image tokens rather than exposing account UUID existence.

## Notes / negative results from the same session (2026-11-23)
- `POST /api/sso/v2/user/self/mfa/email/{authenticatorId}/send` is scoped to the session
  user: B's pre-MFA session + A's email-authenticator id → `404 No EmailAuthenticator
  matches the given query.` (no cross-user OTP routing).
- `POST /api/sso/v1/login/2fa {token}` binds the OTP to the session/user: A's fresh OTP
  (`717101`) → `403 INVALID_CREDENTIAL` under B's pre-MFA session, but the same code →
  `200` + fresh `UBIC_AUTH` under A's session. No MFA bypass.
- `UBIC_2FA` (pre-MFA) token is rejected by sensitive endpoints (`/user/self` 401,
  `/addresses` 401, `/activity` 401, `/settings` 403, `/sessions` 403, `/2fa/backup`
  401, Zendesk `tickets`/`user` 401); `/2fa/backup` with a full token returns
  `499 L2_REQUIRED`.
- `GET /zendesk/comments/{ticketId}` enforces ownership: own ticket A → `200`;
  B → `403 FORBIDDEN`; unauth → `401`. `POST /zendesk/comment/{ticketId}` requires a
  valid reCAPTCHA (`400` if absent, `403` if invalid) — no write IDOR reachable.
- Header impersonation (`X-User-Id`, `X-Forwarded-User`, `X-Remote-User`, etc.) does not
  change `/user/self` identity.
- Login redirect validator (`NS`): `new URL().hostname`, last two labels must be in
  `{ui.com, ubnt.com, uisp.com}` and scheme must be http/https; `https://evil.ui.com`
  is allowed (real subdomain) but `evil.example`, `//evil.example`, `ui.com.evil.example`,
  `javascript:`, `@`-userinfo, and backslash tricks are rejected.
