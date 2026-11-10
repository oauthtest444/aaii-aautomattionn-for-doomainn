# VULN-20261110-001 — Unauthenticated account existence oracle (email/username)

**Status:** Confirmed (low impact)
**Severity:** Low
**Host:** `https://sso.ui.com`
**Date:** 2026-11-10
**Authentication:** unauthenticated

## Summary
The SSO search endpoints return a distinguishable HTTP status for registered vs
unregistered identifiers, with no authentication:

- `GET /api/sso/v1/search/email/<email>` → `204 No Content` if the email is registered, `404` otherwise.
- `GET /api/sso/v1/search/username/<username>` → `204` if the username is registered, `404` otherwise.

This allows an unauthenticated attacker to confirm whether a given email address
or username has a Ubiquiti/UI account, which aids credential stuffing, phishing
and account-targeting. A rate limit (`429 RATE_LIMITED`) exists but only slows
enumeration slightly.

`Confirmed-vuln.txt: excluded — account-existence oracles are explicitly excluded by AGENT.md §9.`

## Reproduction
Existing test account A:
```
$ curl -s -o /dev/null -w '%{http_code}\n' \
  https://sso.ui.com/api/sso/v1/search/email/tan.tiger5564@maildrop.cc
204
```
Existing test account B:
```
$ curl -s -o /dev/null -w '%{http_code}\n' \
  https://sso.ui.com/api/sso/v1/search/email/overrated.chinchilla337@maildrop.cc
204
```
Unregistered address:
```
$ curl -s -o /dev/null -w '%{http_code}\n' \
  https://sso.ui.com/api/sso/v1/search/email/definitely-not-registered-9931@maildrop.cc
404
```
No cookies are sent in any request. Bursting requests returns
`429 {"error":"RATE_LIMITED","detail":"Too many requests"}`.

## Impact
Low: leaks account existence only. No credential or profile data is returned
(response bodies are empty). Mitigations: rate limiting present.

## Remediation
Return a constant response (e.g., always `204`/`200`) regardless of existence and
enforce the existing rate limit uniformly, or require authentication for these
lookups.

## Evidence
`evidence/enumeration.txt`
