# Candidate (UNRESOLVED) — Credentialed CORS reflection on sso.ui.com

**Status:** Not confirmed — no impact demonstrated.
**Severity if exploitable:** unknown.
**Host:** `https://sso.ui.com`
**Date:** 2026-11-10

## Summary
`sso.ui.com` reflects the request `Origin` in `Access-Control-Allow-Origin` together with
`Access-Control-Allow-Credentials: true` whenever the origin's host ends in `.ui.com`.
This would allow a malicious page hosted on any `*.ui.com` subdomain to make
credentialed cross-origin reads of the victim's SSO API (profile, sessions, MFA list,
addresses, activity). No attacker-controlled `ui.com` subdomain was identified, so
this remains a defense-in-depth / trust-boundary observation rather than a confirmed vuln.

## Reproduction
```
curl -sSi https://sso.ui.com/api/sso/v1/user/self \
  -H 'Origin: https://evil.ui.com' \
  -H "Cookie: UBIC_AUTH=<redacted>"
```
Response includes:
```
access-control-allow-origin: https://evil.ui.com
access-control-allow-credentials: true
vary: origin, Accept-Encoding, Origin
```
Preflight:
```
curl -sSi -X OPTIONS https://sso.ui.com/api/sso/v1/user/self \
  -H 'Origin: https://evil.ui.com' \
  -H 'Access-Control-Request-Method: PUT' \
  -H 'Access-Control-Request-Headers: content-type'
```
allows `PUT, POST, PATCH, DELETE`, `content-type`, `max-age=600`.

## Negative checks
- `Origin: https://evil.com` -> no ACAO.
- `Origin: null` -> no ACAO.
- `Origin: https://account.ui.com.evil.com` -> no ACAO (suffix check is label-based).
- `Origin: https://evil.ubnt.com` -> not tested (out of scope; `ubnt.com` is out of scope).
- `account.svc.ui.com` rejects origins other than `https://account.ui.com` (403).

## Why not confirmed
Exploitation requires the attacker to control content on a `*.ui.com` origin
(user content, uploaded HTML, or a subdomain takeover). Wildcard DNS `*.ui.com` points to
AWS CloudFront and no such controllable origin was found. Without that, the reflected
CORS grants no capability beyond what the victim's own origin already has.
