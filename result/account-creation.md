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

## New source finding (2026-10-30T06:20Z) — likely cause of the 403

The registration component uses two different reCAPTCHA Enterprise site keys:

- Initial submit: `Jzt = GOOGLE_RECAPTCHA_SECRET_SCORE` =
  `6LfGZXojAAAAAEtQpgRueRxoFwnjwe58b1exZGsS`, action `submit`.
- On `CHALLENGE_RECAPTCHA_TOKEN_REQUIRED`, the UI renders the `X5` challenge
  widget and resubmits with `site_key: qzt = GOOGLE_RECAPTCHA_SECRET_CHALLENGE` =
  `6LdWhNglAAAAAJB_RK6EWYVnSVyrohxdwy9WEkP8` (see offsets @6530807, @6542161,
  @6545443).

Attempts 2–3 used the SCORE key only, so a 403 challenge response is expected.
A future run should obtain a token from the **CHALLENGE** site key via the
rendered widget / `grecaptcha.enterprise.execute('6LdWhNgl…',{action:'submit'})`
and submit it with `site_key=6LdWhNgl…`. Even then, email verification is
required before login (`is_verified`), so a reachable test mailbox is also
needed. No further attempts were made this run (avoids email side effects).

## Decision

Per operator instructions ("if you are still unable to create accounts ... test only unauthenticated endpoints"), authenticated-only routes are marked **Unresolved** and testing proceeds on unauthenticated surface.

No real user accounts were used. The registration attempts contained only generated test identifiers.
