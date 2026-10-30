# Unresolved Items

Items that could not be validated with the available authorization, accounts, or
tokens. None are claimed as vulnerabilities.

| ID | Item | Why unresolved | What would confirm/deny |
|----|------|----------------|--------------------------|
| U-01 | All authenticated routes (profile, account, security, billing, payments, invoices, requests, backups, devices, subscribe, MSP/IdP, login steps) | No test account; registration blocked by reCAPTCHA Enterprise | A valid test account, or a captcha-bypass/test-mode site key |
| U-02 | Server-side/API testing of `sso.ui.com`, `sso.ubnt.com`, `*.svc.ui.com`, `billing.svc.ui.com`, `fabric.svc.ui.com` | Cross-origin sibling hosts; AGENT.md Section 2.2 forbids scope expansion | Explicit authorization for those API hosts |
| U-03 | Suspicious-login auto-confirm (`/security/suspicious/confirm?decision=yes`) | `inspect` requires a valid `confirm_token`; invalid token -> 400, no confirm call | A valid token for a test account's own suspicious-login event |
| U-04 | Zendesk ticket comment stored XSS via `html-react-parser` | Requires auth + creating/reading a ticket comment with HTML body | Test account + Zendesk ticket comment creation |
| U-05 | Clickjacking via `frame-ancestors 'self' *.ui.com uic.uidev.tools *.uic.uidev.tools` | `uic.uidev.tools` wildcard resolves to CloudFront and returns 403 on all probes; no evidence attacker can host content there | Proof that an attacker-controlled host on that domain/suffix can serve a frame |
| U-06 | reCAPTCHA registration breakage (CSP `connect-src` lacks `www.google.com`; only `recaptcha.net` allowed) | Functional/availability issue, not a security impact; no account created | Server-side confirmation of token issuance failure |
| U-07 | `uic.uidev.tools` wildcard DNS / possible subdomain takeover | Not enough evidence of dangling origin | DNS/CNAME takeover proof |
