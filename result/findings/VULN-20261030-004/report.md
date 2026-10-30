# VULN-20261030-004 — Login `redirect` Parameter Open-Redirect Candidate

- Status: **Not Vulnerable** (tested; no external redirect)
- Type: Open redirect (candidate)
- Asset: https://network.unifi.ui.com/6.1.71.0/unifi/login?redirect=
- Authentication: authenticated user A
- Severity: None observed
- Tested at: 2026-10-30T07:42:00Z

## Summary

The login controller accepts a `redirect` parameter, decodes it, rejects only
values containing `/fatal/`, then passes it to AngularJS `$location.url()`.
`$location.url()` sets a same-origin pathname; it cannot change the origin.
Runtime testing with `?redirect=https://example.com/` landed on
`/6.1.71.0/unifi/`, not an external site.

## Evidence

- `evidence/redirect-code-snippets.txt` — extracted code and runtime result.

## Reproduction

1. With an authenticated session, visit:
   `https://network.unifi.ui.com/6.1.71.0/unifi/login?redirect=https%3A%2F%2Fexample.com%2F`
2. Observe final URL: `https://network.unifi.ui.com/6.1.71.0/unifi/`.
3. Variants `//example.com` and `javascript:alert(1)` are normalized to
   same-origin paths by `$location.url()` and do not execute.

## Impact Assessment

No external redirect and no `javascript:` execution. Not Vulnerable.

Confirmed-vuln.txt: excluded — protection held.

## Remediation

Even though `$location.url()` is safe here, validate `redirect` as a relative
same-origin path (must start with a single `/` and not `//`), and reject
schemes/backslashes.
