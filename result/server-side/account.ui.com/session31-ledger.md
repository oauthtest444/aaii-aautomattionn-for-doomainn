# Session 31 ledger — 2026-11-26T21:20Z (continuation, decision=preserved)

## Environment
- Tools: opencode, curl, git, node, npx, python3, google-chrome-stable; Chrome DevTools MCP connected.
- Auth: fresh A email-OTP login (password → 499 → OTP 804448 → /login/2fa 200 → UBIC_AUTH);
  `GET /api/sso/v1/user/self` → 200 (uuid d8946fad-2b8e-4cf0-82c5-5d955b57b829).

## Build verification (unchanged vs Session 30)
| Asset | Hash / id | Result |
|-------|-----------|--------|
| account.ui.com `assets/index-CGj0vhTX.js` | sha256 970b5e85…7375 (7,278,468 B) | identical |
| unifi.ui.com `main-0.b06362b80fbfc61f.js` | sha256 d2ea5d54…5d048 | identical |
| unifi.ui.com `main-7.8d401a13358c5b3e.js` | sha256 43cafdad…c0658a | identical |
| unifi.ui.com `runtime.393f084b414f2652.js` | sha256 275eb2e0…ebcae | identical |
| activate.ui.com `index-1CNh1WqS.js` | unchanged | identical |
| www.ui.com chunk `02aqcd17vx73t.js` | present | same build |

## Client-side sink re-audit (current Site Manager build)
- main-0/2/3/4/5/6/7 + runtime: 0 `innerHTML`, 0 `eval(`, 0 `new Function(`, 0
  `document.write(`, 0 `srcdoc`, 0 `insertAdjacentHTML`.
- 1 `dangerouslySetInnerHTML` (main-7): release-notes component; `blocks` validated by a
  Zod schema (`content` string) from server-authored release data. Not attacker-controlled.
- `window.open` / `location.assign` sinks: fixed `accountPortal.root`/config bases or
  validated internal paths; `navigation.requested` bridge requires `host==="unifi"` and
  `path` starting `/` but not `//`. No URL-param -> dangerous-sink flow.
- => No DOM XSS reachable on any `*.ui.com` origin; credentialed-CORS chain stays blocked.

## Wildcard `*.ui.com` behavior
- Unauthenticated `GET https://<random>.ui.com/<path>` → `302 account.ui.com/login?redirect=<requested host+path>`
  (CloudFront function). `X-Forwarded-Host`/`X-Original-URL` ignored; `//`-path reflected as
  same-host path; no external `Location`.
- With a session cookie → fixed UniFi Site Manager SPA (S3) served on the arbitrary
  subdomain (e.g. `evil.ui.com`). No attacker-controlled content.

## New in-scope www routes
- `/ccpa-request/`, `/gdpr-request/`, `/global-request/`: static legacy microsite pages that
  embed a third-party OneTrust privacy-portal iframe (`privacyportal.onetrust.com`). No
  app-level source/sink; query/cookie markers inert. Not Vulnerable.

## Negative probes
- www cookie-driven redirect (`store-referer`, `microsite-language`, `country-code-session`)
  and `?redirect/?next/?s/?l` → no external Location (only `/us/en` rewrite). Inert.
- account.ui.com ignores `X-Forwarded-Host`, `X-Original-URL`, `X-Rewrite-URL` on `/login`.
- sso.ui.com sends restrictive CSP (`default-src 'self'`, `script-src 'self' 'unsafe-inline'`)
  and `X-Frame-Options: DENY`; no reflection.

## Conclusion
No new confirmed high-impact finding. `result/confirmed-vuln.txt` unchanged; no Discord
notification. Route ledger: 57 routes (42 done / 15 blocked).
