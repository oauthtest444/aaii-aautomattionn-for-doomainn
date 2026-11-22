# Session 23 server-side ledger — 2026-11-22

Target: `ui.com` (domain-only), continuation. Auth: fresh Account A session
reproduced via Maildrop OTP (`499` email-OTP -> `657747`/`308629` -> `200`
`UBIC_AUTH`), plus a browser session established by same-origin `fetch` from
`https://sso.ui.com` and confirmed at `GET /api/sso/v1/user/self` (`200`,
username `testttt12`, uuid `d8946fad-2b8e-4cf0-82c5-5d955b57b829`).

## Bundle state
- `account.ui.com` still serves `index-DUlTrD1u.js` (6,941,256 B, sha256
  `a26e5447814525949b83fe3e5b39dde4d2145fddfad86f6fd96596782b680f5c`); `www.ui.com`
  Next.js `dpl=ebfbbf36027ab2a83433657d390f79e21132f9c6`. Unchanged from Session 22;
  no new code to diff.

## Client-side redirect/sink re-review (current bundle)
- Login result handler `xQ()` does `i = n?.redirect ?? r?.redirect;
  i ? window.location.replace(i) : e(innerRedirect || '/')`. Both `redirect` and
  `innerRedirect` are populated only via `TQ(window.location.href)`, which applies
  `NS()` to `redirect` and `IS()` to `innerRedirect`. `n`/`r` values are the same
  validated fields.
- `NS()`: `hostname.split('.').slice(-2).join('.')` must be `ui.com`, `ubnt.com`, or
  `uisp.com`, and protocol `http:`/`https:`. Rejects `javascript:`, `evil.com`,
  `ui.com.evil.com`, `ui.com@evil.com`, backslash/trailing-dot tricks.
- `IS()`: must start with `/`, must not start with `//`, must not contain `\`, and
  must match a known internal route prefix. No scheme-relative/absolute escape.
- `/switch` (`HVt`) uses `NS(o)` before `window.location.replace(s)`, else
  `t('/')`. Safe.
- Remaining `location.assign/replace/href` sites are server-provided IdP/Stripe/
  MFA-setup URLs (`enforcedIdpRedirectUrl`, `paymentIntent.next_action...`,
  `setup_uri`/`provisioning_uri`) from authenticated API responses; not
  attacker-controlled from an unauthenticated position.
- `dangerouslySetInnerHTML` remains only Radix style injection + `html-react-parser`
  for Zendesk content; `innerHTML` matches are React/GTM/jQuery internals or
  self-XSS. No new source->sink flow.

## New / changed coverage
| Method | Endpoint | Auth | Test | Result | Status |
|--------|----------|------|------|--------|--------|
| POST | `https://sso.ui.com/api/sso/v1/login` | none | fresh A login | `499` 2FA; OTP via Maildrop; `200` `UBIC_AUTH` | Not Vulnerable |
| POST | `https://sso.ui.com/api/sso/v1/login/2fa` | `UBIC_2FA` | read email OTP | `200`; session valid | Not Vulnerable |
| POST | `https://account.ui.com/api/sso/v2/users` | none | `site_key=score` (valid) | `403 CHALLENGE_RECAPTCHA_TOKEN_REQUIRED` | Blocked (bot score) |
| POST | `https://account.ui.com/api/sso/v2/users` | none | `site_key=account_backend` (valid) | `403` "invalid captcha" | Blocked (bot score) |
| POST | `https://cloudaccess.svc.ui.com/create-credentials` | L1 | obtain STS | identity `prd-unifi-cloud-access`, acct `297616773877`, region `us-west-2`, `roles:['BETA']` | Not Vulnerable |
| POST | `.../execute-api` IAM | STS | `iam:GetRole`, list policies, `s3:ListAllMyBuckets`, `apigateway:GET` | `AccessDenied` on all | Not Vulnerable (tight scope) |
| GET | `/ucore/backups`, `/ucore/archived-backups` | STS | A tenant | `{"backups":[]}` | No data |
| GET | `/devices`, `/api/v1/hosts`, `/sites` | STS | A tenant | empty lists | No data |
| GET | `/devices/{id}/application-devices` | STS | random id | `404` "User has no such device" | Not Vulnerable |
| POST | `/ucore/backup` | STS | create | `404` no method | Not Vulnerable |
| POST | `https://account.svc.ui.com/zendesk/search_tickets` | L1 | locate caller | caller gated by `allowBillingSearch:false`; `/requests` redirects to `/` | Blocked |

## reCAPTCHA Enterprise key classification
- Valid site keys on `account.ui.com`: `account_backend`
  `6LfyUkwpAAAAAJ6-mN1q_IAe0bM8pit_lxc0anmv`, `feedback`
  `6Lds3SIqAAAAAHfRgpqDddgy3knKY51oQVLoI6JC`, `score`
  `6LfGZXojAAAAAEtQpgRueRxoFwnjwe58b1exZGsS`.
- Invalid as site keys (secret/domain-restricted, not site keys): `high_risk`
  `6LdaPy4jAAAAAEWMtLxQ8T2gnkeAK6viQVjAnk1v`, `medium_risk`
  `6LfKMy4jAAAAAJarRZift6kKBImrh6JA4-TV3ABc`, `challenge`
  `6LdWhNglAAAAAJB_RK6EWYVnSVyrohxdwy9WEkP8`.
- `site_key=score` is the registration key and is rejected by the server's bot
  score; no bypass found.

## Notes
- B email-MFA at pre-MFA is not reachable: the "verify with email" action calls
  `sendEmailV2` (`/api/sso/v2/user/self/mfa/email/{id}/send`), which requires an
  authenticated session (`401` at `499`); `loginMFA` accepts only `{token}`. B's
  default MFA is TOTP with an unknown secret, so a second-account session remains
  unavailable.
- Zendesk `search_tickets` cross-account IDOR remains untested because the caller
  is feature-flagged off in the bundle and needs a cross-account ticket + a valid
  `x-captcha-token`.
- cloudaccess STS role is tightly scoped (no IAM/S3/API-Gateway read), and all A
  tenant resources are empty; no cross-tenant path identified without enumerating
  real device IDs (prohibited).

## Evidence
- `result/logs/session.md` (Session 23), `result/logs/opencode.log`.
- Working bundle `/tmp/s23/acct.js` (same sha256 as above); A cookie jar
  `/tmp/s23/jarA.txt`; STS creds `/tmp/s23/cc.json` (ephemeral).

## Conclusion
No new confirmed high-impact vulnerability (no XSS/CSTI/IDOR/BAC/open redirect).
`confirmed-vuln.txt` unchanged; no Discord notification sent.
