# VULN-20261110-003 — 2FA backup-code re-mint accepts CSRF-shaped requests without re-auth

**Status:** Confirmed behavior; exploitability requires a `*.ui.com` origin or a stolen session
**Severity:** Low (Informational)
**Host:** `https://sso.ui.com`
**Date:** 2026-11-10
**Authentication:** user A (full session)

## Summary
`POST /api/sso/v1/user/self/2fa/backup` generates a fresh set of 10 MFA backup
codes and returns them in the response. Two properties are noteworthy:

1. It requires **no re-authentication** (no password, TOTP, or step-up prompt),
   only the normal session cookie.
2. It accepts `Content-Type: application/x-www-form-urlencoded` with an empty
   body. That is a CORS "simple request", so no preflight is needed, and the
   endpoint does not require an anti-CSRF token.

Each call invalidates/replaces the previous backup-code set (new codes returned,
`codes_left` reset to 10) while keeping the same authenticator id, so a forged
same-site request can invalidate a victim's saved recovery codes (recovery DoS).

## Exploitability constraints
- The auth cookie is `UBIC_AUTH; Domain=.ui.com; HttpOnly; SameSite=Lax; Secure`.
  A cross-site (`evil.com`) form POST would **not** carry the cookie, so this is
  not exploitable from arbitrary third-party sites.
- It **is** triggerable from any same-site `*.ui.com` origin, and `sso.ui.com`
  reflects any `*.ui.com` Origin with `Access-Control-Allow-Credentials: true`,
  so an attacker with content on any `ui.com` subdomain could mint and read the
  victim's backup codes from a browser.
- A stolen full session already grants account access, so the incremental impact
  is persistence/MFA-recovery disruption rather than a standalone takeover.

## Reproduction
With a valid full session cookie:
```
POST https://sso.ui.com/api/sso/v1/user/self/2fa/backup
Content-Type: application/x-www-form-urlencoded
Content-Length: 0

HTTP/2 201
{"id":"ae514c45-…","created":"…","last_success":null,"type":"backup_code",
 "status":"backup","codes_left":10,"backup_codes":["cfd3b0-904a06", … 10 codes …]}
```
Repeating the request returns a different code set (same authenticator id),
demonstrating that old codes are replaced without re-auth.

## Negative checks
- `Content-Type: text/plain` → `415 UNSUPPORTED_MEDIA_TYPE`.
- Pre-MFA `UBIC_2FA` session → `401 " is not allowed"` (no MFA bypass).
- No `Origin`/`Referer` enforcement observed for same-site requests.

`Confirmed-vuln.txt: excluded — requires same-site origin control or an already-stolen session; below the high-impact bar.`

## Remediation
Require step-up re-authentication (password or current TOTP/backup code) before
regenerating backup codes, require JSON + a CSRF token, and validate
`Origin`/`Referer`. Consider not replacing existing codes until the new set is
confirmed by the user.

## Evidence
`evidence/backup-remint.txt`
