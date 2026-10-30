# JavaScript Inventory — account.ui.com

## Main bundle

| Field | Value |
|-------|-------|
| URL | `https://account.ui.com/assets/index-D5t7M7xo.js` |
| Saved | `result/client-side/account.ui.com/_app/javascript/index-D5t7M7xo.js` |
| Size | 7,121,868 bytes (6,872,370 chars, 6302 lines) |
| SHA-256 | `ce9950c975a42cac66f5c2ea759d655e96c441d34df6a6b8190b09d60ea1c468` |
| Retrieved | 2026-10-30T05:54Z (session 1) |
| Framework | React 19.3.1 + React Router + TanStack Query + styled-components/stitches |
| Source maps | none observed |

Note: `result/client-side/account.ui.com/_app/javascript/manifest.json` is saved
SPA HTML (1634 bytes), not a JSON manifest.

## Notable dependencies (from embedded version list @4182106)

`axios@1.20.0`, `html-react-parser@6.1.9`, `lodash-es@4.18.1`,
`luxon@3.7.2`, `qrcode.react@4.2.0`, `country-flag-icons@1.6.20`,
`is-mobile@5.0.0`, `aws4fetch@1.0.20`.

## Secrets / keys found in the bundle (verified PUBLIC-BY-DESIGN or restricted)

| Name | Value (partial) | Assessment |
|------|-----------------|------------|
| GOOGLE_MAPS_SECRET | `AIzaSyBE3JpOF...Pr0-w` | Google Maps JS key. Geocoding with no referer -> `REQUEST_DENIED: API keys with referer restrictions`. Public key, referer-restricted. Not a finding. |
| GOOGLE_RECAPTCHA_SECRET_HIGH_RISK_TEST / MEDIUM_RISK_TEST / SCORE / CHALLENGE | `6LdaPy4j...`, `6LfKMy4...`, `6LfGZXo...`, `6LdWhNg...` | Despite the name, these are used client-side as reCAPTCHA Enterprise **site keys** (`j5(siteKey)` -> `grecaptcha.enterprise.render/execute`). Public by design. Not a finding. |
| RECAPTCHA_ACCOUNT_BACKEND_SITE_KEY_ID / RECAPTCHA_FEEDBACK_SITE_KEY_ID | `6LfyUkw...`, `6Lds3SI...` | reCAPTCHA site keys. Public. |
| STRIPE_PUBLISHABLE_KEYS (per-region) | `pk_live_...` | Stripe publishable keys. Public by design. |
| TAPPAY_PUBLISHABLE_KEYS | appId 156757, appKey `app_...` | TapPay publishable app key. Public by design. |
| SEND_SAFELY_DZ_ID | `ffj-Vz...` | SendSafely dropzone id. Public. |
| ZENDESK_FALLBACK_FORM_KEY | `31131542026135` | Zendesk form id. Public. |
| IRONCLAD_CYBERSECURE / ESIM / SITE_SUPPORT / CLOUD_STORAGE | accessId + groupKey | Ironclad embedded widget ids. Public. |
| GOOGLE_ANALYTICS_KEY | `G-ET365PNYN5`, `G-RV9R9H7W4C` | Public. |

Conclusion: a manual "SECRET"-named scan produced no real secret exposure.

## Redirect / navigation helpers

- `MC(e)` — allowlist: URL parses; protocol http/https; registrable last two
  labels in `['ubnt.com','ui.com','uisp.com']` (any subdomain).
- `$he(e)` — `e.startsWith('https://') && MC(e)`.
- `Wpe(e)` — `innerRedirect` allowlist against internal path list; rejects
  `//` prefix and backslash.
- `CQ` post-login: `i = redirect ?? redirect`; `i ? location.replace(i) : nav(innerRedirect||'/')`;
  redirect comes from `DQ(location.href)` validated by `MC`.
- `KC` -> `fme` -> external if http/https and origin != location.origin; else
  internal router. Inputs found are validated/server-provided.
- `Hw(e)` external `window.open`; `tge(e)` requires origin under fixed
  `externalUrls` targets; else plain `window.open(e,'_blank','noopener')`.
- `IGt` -> `location.replace(activate.ui.com)` fixed.

No unvalidated user-controlled client-side open redirect found.

## Sinks of interest (source -> sink)

See `sinks.md`. Key conclusion: no `eval`, `new Function`, `document.write`,
`insertAdjacentHTML`, `srcdoc`. `innerHTML` uses are React internals, GTM,
SendSafely, and screen-reader logs (not user-controlled).

`html-react-parser@6.1.9` is used at `yLt(i)` to render Zendesk ticket comment
`html_body` (`CLt` component) with no DOMPurify -> candidate stored XSS requiring
authentication + a ticket comment (Unresolved).

## postMessage

See `listeners.md`.
