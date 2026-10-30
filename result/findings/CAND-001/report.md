# CAND-001 — Suspicious-login confirmation auto-executes `decision` from URL

Status: **Unresolved** (not a confirmed vulnerability)
Date: 2026-10-30
Asset: `account.ui.com` (client) -> `sso.ui.com` (API, out-of-scope)
Class: CSRF / one-click state change

## Summary
The `/security/suspicious/confirm` page reads `token` and `decision` from the
URL. When `decision=yes`, the `oUt` component fires
`POST /api/sso/v1/suspicious/confirm {confirm_token, decision:'yes'}` in a
`useEffect` on mount, with no additional user confirmation. When `decision=no`,
`sUt` does the same with `'no'`.

If an attacker can obtain a valid `confirm_token` for a victim's pending
suspicious-login event, a single victim click on
`https://account.ui.com/security/suspicious/confirm?token=<TOKEN>&decision=yes`
would approve the attacker's login. The token appears to be delivered only to
the account owner (email/device), which currently blocks exploitation.

## Evidence (runtime)
Request:
```
POST https://sso.ui.com/api/sso/v1/suspicious/confirm/inspect
{"confirm_token":"OPENCODE_INVALID_TOKEN_12345"}
-> 400 {"detail":"Invalid token","error_code":"invalid_token","error":"INVALID_CONFIRMATION_TOKEN"}
```
No `POST /api/sso/v1/suspicious/confirm` was issued (auto-confirm is gated on a
successful inspect). Page text: "Invalid link / This confirmation link is
invalid."

## Source references
- `oUt` useEffect (`index-D5t7M7xo.js` @6696930), `sUt` (@6697631), `cUt` (@6698335)
- API paths `suspiciousConfirmInspect` / `suspiciousConfirm` (@724397)

## Why unresolved
Needs a valid `confirm_token`. The token is not present in the login API
response (only referenced by the confirm page), and the API host is out of scope
for active testing. No token was available.

## Fix direction
Require an explicit user action (button/confirm dialog) and/or a CSRF token;
do not perform a state change from a page-load GET parameter.
