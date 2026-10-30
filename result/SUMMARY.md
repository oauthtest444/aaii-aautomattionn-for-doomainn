# Summary — account.ui.com

Last updated: 2026-10-30T06:24Z
Agent/model: opencode / deepseek-v4.1-flash-free

## Scope
- Authorized: `account.ui.com` (domain-only, per `data/targets.txt`).
- All APIs are cross-origin to the SPA (sso.ui.com, sso.ubnt.com, *.svc.ui.com,
  billing.svc.ui.com, fabric.svc.ui.com, …) and were NOT actively tested per
  AGENT.md Section 2.2. See `result/out-of-scope.txt`.
- Credentials in `creds/` are for console.byteplus.com and were not used.

## Progress report
| Metric | Value |
|--------|-------|
| UI routes discovered | 39 + catch-all `*` (see `inventory/routes.md`) |
| Routes with runtime or source testing | 14 (`/login`, `/register`, `/reset-password`, `/verify`, `/verify/verification-code/:uuid`, `/verify/success`, `/idp/login-result`, `/msp/idp/setup-result`, `/security/suspicious/confirm`, `/supportform`, `/supportform-uisp`, `/supportform-umr`, `/switch`, `/activate`, `/payments/3ds`) |
| Routes logged in / source-reviewed | 14 |
| Authenticated routes blocked (no account) | 23 |
| Pending public/token routes | `/reset-password/password-reset-uuid/:uuid` (valid token only) |
| JS bundles analyzed | 1 (7.12 MB, sha256 ce9950c9…c468) |
| API endpoints catalogued | ~100 (observed, not actively tested) |
| Confirmed vulnerabilities | 0 |
| Unresolved candidates | 2 |

## Tested surface
1. `/login` — rendered; 31 network requests; no same-origin API; no reflection of
   `redirect`. Post-login redirect uses `MC` allowlist (`*.ui.com`, `*.ubnt.com`,
   `*.uisp.com`) -> not an external open redirect.
2. `/register` — UI and direct registration blocked by reCAPTCHA Enterprise
   (details in `account-creation.md` and `server-side/.../traffic/`).
3. `/idp/login-result?code=...&state=...` — server 400 `STATE_MISSING`; `state`
   bound to `sso_idp_state` cookie; no redirect.
4. `/security/suspicious/confirm?token=INVALID&decision=yes` — `inspect` 400
   `INVALID_CONFIRMATION_TOKEN`; the auto-confirm POST is gated on valid inspect.
5. `/msp/idp/setup-result` — source analysis: reflects query params into a
   same-origin `postMessage` to opener; no HTML sink.
6. `/payments/3ds` — source analysis: `return_url` validated by `MC` before use.
7. `/reset-password` — renders form; loads reCAPTCHA Enterprise; no API on load.
8. `/verify` — requires router state; without it redirects to `/login`; query
   input not reflected.
9. `/verify/verification-code/:uuid` — auto-fires
   `PUT sso.ui.com/api/sso/v1/verify/verification-code/<uuid>` on load; invalid
   uuid -> 404 then `/login`. GET-driven but token is secret.
10. `/verify/success` — not a registered route; CloudFront SPA fallback returns
    200 and the catch-all renders the in-app "Page not Found". Only used as a
    router-state navigation target.
11. `/msp/idp/setup-result` — unauth redirects to
    `/login?innerRedirect=%2Faccount` (private route).
12. `/supportform` / `/supportform-uisp` / `/supportform-umr` — redirect to
    `/requests` or `/login?innerRedirect=...`; no public form.
13. `/switch?redirect=https://example.com` — invalid external `redirect` dropped;
    only `login_hint` carried to `/login`.
14. `/activate` — fixed redirect to `https://activate.ui.com/`.

## Client-side analysis
- Full sink scan: no `eval`/`new Function`/`document.write`/`insertAdjacentHTML`/
  `srcdoc`; `innerHTML`/`dangerouslySetInnerHTML` not fed by user input.
- Open redirect: allowlist (`MC`) plus internal-path validation (`Wpe`) block
  external redirects. No confirmed open redirect.
- postMessage: two app listeners; megaphone requires parent + https +
  `*.ui.com/ubnt.com/uisp.com` + schema; MSP result requires same origin.
- "SECRET"-named constants are reCAPTCHA **site keys** / public vendor keys, not
  secrets. Maps key is referer-restricted.
- Candidate stored XSS: `html-react-parser` renders Zendesk `html_body` without
  sanitizer (requires auth) — Unresolved.

## Confirmed findings
None. `result/confirmed-vuln.txt` intentionally unchanged.

## Negative results (tested, not vulnerable)
- Open redirect via `redirect`/`innerRedirect`: `MC` allowlist + `Wpe` internal
  path check; `https://example.com`, `//example.com`, backslash variants all
  rejected.
- Legacy hash mapping `S7e` (`#verify/verification-code/…`, `#reset-password/…`)
  builds `/${hash.slice(1)}` without `Wpe`, but `..`/backslash/encoded-slash
  traversal variants all resolved same-origin (`https://account.ui.com/…`), not
  to an external host.
- Reset-token leak via Referer: response sets `referrer-policy: origin` and
  `<meta name="referrer" content="same-origin">`; no cross-origin path leak.
- Static host: SPA fallback returns 200 index for unknown paths; no source maps
  (`.js.map` returns index HTML); no S3 bucket listing; `?versionId=` ignored;
  `robots.txt` disallows all; `x-robots-tag: noindex`.
- `login_hint` HTML payload reflected only as React-escaped input value.

## Unresolved
See `result/unresolved.md` (U-01 … U-07).

## Decisions
- Strict scope interpretation for API hosts (documented, reversible).
- Continue unauthenticated client-side testing only; authenticated routes marked
  Unresolved.
