# Candidate (UNRESOLVED) — Credentialed CORS reflection on sso.ui.com

**Status:** Confirmed misconfiguration; exploitation impact Unresolved (no attacker-controlled `*.ui.com` origin found).
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

## Session 4 update (2026-11-10)
- Re-confirmed on `sso.ui.com`: `Origin: https://evil.ui.com` -> `ACAO: https://evil.ui.com`,
  `ACAC: true`; preflight allows `PUT, POST, PATCH, DELETE` with `content-type`.
  Arbitrary non-`ui.com` origins (`https://attacker.example`) and `null` are rejected.
- Also confirmed credentialed reflection on `cloudaccess.svc.ui.com`:
  `Origin: https://evil.ui.com` -> `ACAO: https://evil.ui.com`, `ACAC: true`,
  `Access-Control-Allow-Methods: GET,HEAD,OPTIONS,PUT,POST,DELETE`. This service exposes
  host/backup/credential endpoints, so the latent impact is higher than the SSO API alone.
- Wildcard DNS `*.ui.com` resolves to AWS CloudFront. Random names return
  `302 https://account.ui.com/login?redirect=https%3A%2F%2F<host>%2F`; `/index.html`
  is served from S3 (HTTP 200, `text/html`) and loads the fixed "UniFi Site Manager"
  SPA from the same wildcard origin. Direct `PUT`/`POST`/`DELETE` to that origin return
  `403`; no attacker-writable object or Host-header reflection was found.
- Conclusion unchanged: the CORS policy trusts the entire `*.ui.com` namespace, but no
  attacker-controlled `*.ui.com` origin (stored HTML/JS, takeover, or writable bucket)
  was identified. Kept as Unresolved rather than a standalone finding.
