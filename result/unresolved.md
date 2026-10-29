# Unresolved items

- **Account B / cross-account IDOR & BOLA tests** — second public signup hit
  `403 CHALLENGE_RECAPTCHA_TOKEN_REQUIRED` followed by an interactive reCAPTCHA
  image challenge. No second authenticated identity is available, so tests that
  require two accounts are marked Unresolved.
- **Account B registration mass-assignment test** — same CAPTCHA blocker.
- **Hosts returning 000 or 403 on first probe** (beta.community.ui.com,
  security.community.ui.com, docker*.dl.ui.com, crm.trunking.ui.com,
  stg.store.ui.com, community.status.ui.com) were not retried; recorded in
  `result/recon/`.
- **Store/storefront hosts** run on Shopify (third-party platform). Not deeply
  tested because the platform is external and outside the intended application
  surface.
