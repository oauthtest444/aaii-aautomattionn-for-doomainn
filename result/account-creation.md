# Test Account Creation

Status: **Blocked (Unresolved)** — reCAPTCHA Enterprise challenge prevents registration from the automated browser and from a direct API request.

## Attempts

1. UI registration at https://account.ui.com/register (2026-10-30T05:31Z)
   - Filled username `bbtest20261030a`, email `bbtest20261030a@fearlessmails.com`, password.
   - Clicking "Create Account" triggered reCAPTCHA Enterprise.
   - Browser console shows CSP violations: `connect-src` does not allow `https://www.google.com/recaptcha/enterprise/clr`.
   - Button remained disabled and no registration request completed.

2. Direct API `POST https://sso.ui.com/api/sso/v2/users` (2026-10-30T05:32:39Z)
   - Retrieved a valid reCAPTCHA Enterprise token from the page context for site key `6LfGZXojAAAAAEtQpgRueRxoFwnjwe58b1exZGsS` and action `submit`.
   - Server returned `403 {"error_code":"CHALLENGE_RECAPTCHA_TOKEN_REQUIRED","error":"PERMISSION_DENIED"}`.
   - Baseline request with empty captcha returned the identical error.
   - Evidence: `result/server-side/account.ui.com/traffic/register-probe.*`, `register-attempt1.*`, `register-attempt2.*`.

3. Direct API with action `SUBMIT` (case variant) also returned 403.

## Decision

Per operator instructions ("if you are still unable to create accounts ... test only unauthenticated endpoints"), authenticated-only routes are marked **Unresolved** and testing proceeds on unauthenticated surface.

No real user accounts were used. The registration attempts contained only generated test identifiers.
