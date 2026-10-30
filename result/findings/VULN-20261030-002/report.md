# VULN-20261030-002 — Verification URL (email + token) Sent to Google Analytics

- Status: **Unresolved** (behavior confirmed with dummy values; real-token impact
  not verified)
- Type: Sensitive data exposure to third-party analytics
- Asset: https://network.unifi.ui.com/6.1.71.0/unifi/account/verify
- Authentication: unauthenticated (page loaded without a valid session)
- Severity: Low–Medium (excluded from notification bar)
- Tested at: 2026-10-30T07:47:52Z

## Summary

When the account-verification route is loaded with `email` and `t` (token) query
parameters, the page's Google Analytics event sends the **full page URL** in the
`dl` parameter. That URL includes both the email address and the verification
token. If a real verification link is opened in a browser, the token and email
are transmitted to Google Analytics (`www.google-analytics.com`) via a
third-party request.

## Evidence

- `evidence/ga-collect-url.txt` — exact observed `POST` URL, decoded `dl` value,
  and the dummy page URL used.
- `evidence/ga-collect-response.network-response` — saved response (HTTP 200).
- Network log: `reqid=271 POST /j/collect` with
  `dl=https%3A%2F%2Fnetwork.unifi.ui.com%2F...%2Faccount%2Fverify%3Femail%3D...%26t%3D...`
  and `reqid=274 POST /g/collect` (GA4).

## Reproduction

1. Navigate (unauthenticated or authenticated) to:
   `https://network.unifi.ui.com/6.1.71.0/unifi/account/verify?email=security-test%40example.com&t=DUMMYTOKEN_ABC123`
2. Observe the outgoing request to `www.google-analytics.com/j/collect`.
3. Decode the `dl` parameter: it equals the full verify URL, including `email`
   and `t`.

Dummy values were used. No real user token or PII is stored in this report.

## Impact Assessment

- Confirmed: the app forwards the full verification URL, including email and
  token, to a third party.
- Not verified: whether real tokens remain usable, whether they are single-use,
  and whether the token grants a meaningful action. The verification endpoint at
  `/api/verify` was unreachable (HTTP 502 / no controller).
- Privacy leak of email + token to Google is real but low impact and outside the
  notification target classes.

Confirmed-vuln.txt: excluded — low/medium impact, no verified account takeover,
and outside the target classes.

## Remediation

- Strip query strings from analytics page-location values (use `dp` only, or a
  redacted route).
- Never place verification tokens in URLs that are sent to analytics; use a
  POST body or a short-lived, single-use token consumed server-side.
- Add a referrer/analytics allowlist and disable `send_page_view` on sensitive
  auth routes.
