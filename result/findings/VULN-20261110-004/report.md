# VULN-20261110-004 — Logout CSRF: `GET /api/sso/v1/logout` clears `.ui.com` auth cookies

**Status:** Confirmed
**Severity:** Low (Informational)
**Host:** `https://sso.ui.com`
**Date:** 2026-11-10
**Authentication:** unauthenticated request is sufficient to receive cookie-clearing headers

## Summary
The logout endpoint accepts `GET` (advertised in `Allow: GET, POST, HEAD, OPTIONS`)
and responds with `Set-Cookie` headers that expire the shared `.ui.com` authentication
cookies (`UBIC_AUTH`, `UBIC_2FA`, and `CloudFront-*` signed-cookie values). No CSRF
token, `Origin` check, or session validation is required; the same clearing headers
are returned even when the request carries no session or a syntactically invalid
`UBIC_AUTH` value.

A third-party page can therefore log a victim out of all `ui.com` properties with a
top-level navigation (or a link) to `https://sso.ui.com/api/sso/v1/logout`. The
cookies are `SameSite=Lax`, so a cross-site top-level `GET` includes them and the
browser processes the clearing response; cross-site subresource loads may be blocked
by third-party-cookie policy depending on browser version.

Impact is limited to forced logout / session disruption; it does not leak data or
grant access.

## Reproduction
```
GET https://sso.ui.com/api/sso/v1/logout
```
Response (abridged):
```
HTTP/2 302
location: https://account.ui.com/login
set-cookie: UBIC_AUTH=""; Domain=.ui.com; Max-Age=0; Path=/
set-cookie: UBIC_2FA=""; Domain=.ui.com; Max-Age=0; Path=/
set-cookie: CloudFront-Policy=; Domain=.ui.com; Max-Age=0; Path=/
...
allow: GET, POST, HEAD, OPTIONS
```
`POST` returns `204` and also clears the cookies, but the `GET` method is the
CSRF-relevant issue.

## Negative checks
- No `Origin`/`Referer` validation was observed.
- Response is `Cache-Control: private, max-age=0, no-cache` (not cacheable).
- No user data is disclosed; only logout/DoS impact.

`Confirmed-vuln.txt: excluded — logout CSRF is below the high-impact notification bar (no XSS/CSTI/IDOR/BAC/open redirect).`

## Remediation
Require `POST` with a CSRF token (and/or strict `Origin` validation) for logout;
do not accept state-changing `GET` requests.

## Evidence
`evidence/logout-get.txt`
