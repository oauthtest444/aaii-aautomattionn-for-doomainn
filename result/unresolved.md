# Unresolved Items

Items that could not be validated with the available authorization, accounts, or
tokens. None are claimed as vulnerabilities.

| ID | Item | Why unresolved | What would confirm/deny |
|----|------|----------------|--------------------------|
| U-01 | Authenticated routes | **Resolved for the test accounts** (2026-10-30): `/`, `/account`, `/security`, `/login/mfa`, `/login/trust-device`, `/billing`, `/subscriptions`, `/invoices`, `/requests` exercised. Still unexercised: org-scoped billing, payment methods, subscribe, backups, ticket detail (test accounts lack that data). | Provide an account with org/payment/subscription data |
| U-02 | Server-side/API testing of the SPA's backend hosts | **Decision (2026-10-30): exercised only the endpoints the authorized SPA calls**, with the provided test accounts; no unrelated-host pivoting or real customer data. | Revisit only if the program clarifies API-host scope |
| U-03 | Suspicious-login auto-confirm (`/security/suspicious/confirm?decision=yes`) | `inspect` requires a valid `confirm_token`; invalid token -> 400, no confirm call | A valid token for a test account's own suspicious-login event |
| U-04 | Zendesk ticket comment stored XSS via `html-react-parser` | Requires auth + creating/reading a ticket comment with HTML body; `POST /zendesk/ticket` and `/zendesk/comment` demand `x-captcha-token`; test accounts have 0 tickets | A captcha token or an existing HTML comment on our own ticket |
| U-05 | Clickjacking via `frame-ancestors 'self' *.ui.com uic.uidev.tools *.uic.uidev.tools` | `uic.uidev.tools` wildcard resolves to CloudFront and returns 403 on all probes; no evidence attacker can host content there | Proof that an attacker-controlled host on that domain/suffix can serve a frame |
| U-06 | reCAPTCHA registration breakage (CSP `connect-src` lacks `www.google.com`; only `recaptcha.net` allowed) | Functional/availability issue, not a security impact; no account created | Server-side confirmation of token issuance failure |
| U-07 | `uic.uidev.tools` wildcard DNS / possible subdomain takeover | Not enough evidence of dangling origin | DNS/CNAME takeover proof |
| U-08 | Email change completes without a password (OTP to new address) | `POST /user/self/email/verify/send` and the `PUT /user/self` completion worked at AAL2 level; at level 1 the send step returns `499 L2_REQUIRED`. Completion requires reading the new mailbox. | Judged intended; only revisit if a code can be replayed for a different address (binding not broken) |
| U-09 | Unauthenticated account enumeration via `GET /search/email/{email}` and `/search/username/{name}` | Existing -> 204, missing -> 404 (rate-limited after a few probes) | Low-value observation; most programs treat registration/login enumeration as accepted |
| U-10 | Cross-account MFA OTP send via `/api/sso/v2/user/self/mfa/email/{id}/send` | Tested A session with B's authenticator id -> 404 `No EmailAuthenticator matches the given query` | Negative; no cross-account send |
