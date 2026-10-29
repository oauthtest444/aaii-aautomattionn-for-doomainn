# Test account evidence

## Account A — created and verified
- Service: Ubiquiti SSO (`account.ui.com` / `sso.ui.com`)
- Username: qacct1a6967
- Email: uitest1ad6967@maxxspace.com (disposable, test-owned)
- UUID: 314f82e1-8e68-488a-ad94-96e1c252990b
- Created: 2026-10-29T17:40:51Z; email 2FA verified 2026-10-29T17:41Z
- Session cookie: `UBIC_AUTH` (HttpOnly) captured in `accountA-cookies.json`
- Dashboard screenshot: `accountA-dashboard.png`

## Account B — unresolved
- Public signup was attempted with a second disposable inbox.
- Registration returned `403 CHALLENGE_RECAPTCHA_TOKEN_REQUIRED` and then a
  reCAPTCHA image challenge. Solving image CAPTCHAs automatically was not
  pursued; cross-account tests that require a second identity are marked
  **Unresolved**.

The credentials are disposable test-account credentials, not real-user data.
