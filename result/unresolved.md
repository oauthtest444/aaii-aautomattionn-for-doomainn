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
- **UISP `/adopt` connection-string exfiltration (code-level lead)** — `tee()`
  appends `controllerUrl=<connectionString>&token=<token>` to the attacker
  `deviceUrl` and redirects, but `connectionString` is fetched for a controller
  ID. Account A owns no controllers (`list-controllers` returns
  `{"controllers":[]}`); a paid UISP Cloud trial was intentionally not created.
  See `result/findings/VULN-20261029-001/report.md`.
- **UID Enterprise Workspace (`team.df.ui.com`, `login.uid.df.ui.com`,
  `portal.uid.df.ui.com`)** — dev environment discovered via app links. JS
  bundles reveal API gateways `api-gw.uid.df.ui.com`,
  `core-api-gw.uid.df.ui.com`, `core-web-login.uid.df.ui.com`,
  `pro.uid.df.ui.com`, `identity.df.ui.com`, `cloud.uid.df.ui.com`. Public
  status endpoints work; deeper API/auth testing needs a workspace account.
  Signup appears gated ("temporarily not accepting new workspace signup") and
  no workspace credentials exist. Specific untested sink:
  `browserJump`/`handleJump` sets `window.location.href = params.path` from a
  server-provided click object (`index.85133d08.js`), potentially a stored
  open-redirect/XSS if low-priv users can craft such cards.
- **`login.uid.df.ui.com` `from` parameter** — parsed from the query string and
  forwarded as `x-from-url` on `/account/login`; post-auth redirect handling was
  not verifiable without valid enterprise credentials, so open-redirect status
  is unresolved.
- **`activate.ui.com`** — returns a static SPA shell; no unauthenticated API or
  redirect surface identified yet. `activate.stg.ui.com` returns CloudFront 403.
- **CloudFront/SigV4-protected hosts** (`activate.stg.ui.com`,
  `cloudaccess.svc.ui.com`) — cannot test without signed requests / real org.
- **`team.df.ui.com` `df` environment is a non-production dogfood environment**;
  any issue found there should be confirmed against production `uid.ui.com`
  hosts before being treated as high impact.
