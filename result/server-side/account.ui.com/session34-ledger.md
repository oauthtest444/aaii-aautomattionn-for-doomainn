# Session 34 ledger — 2026-11-28T07:30Z (continuation, decision=preserved)

## Build deltas
- `account.ui.com`: unchanged `assets/index-D7cQ-F1j.js`
  (7,279,731 B, sha256 `f75b4c9c740a61e5794cd7a707e81d17dad65972fe8349a39c3da8fa82fd303a`;
  identical to Session 33). No new account JS to diff.
- `www.ui.com`: **REDEPLOYED** `dpl=d6fbc335af54cb2739a6c9ebd9f765dc52426e14`
  (previous Session 33 `dpl=e1f4c3c3...`). Next.js `16.4.6` + Turbopack (patched).
- `unifi.ui.com` Site Manager: unchanged (`main-0.b06362b80fbfc61f.js`,
  `main-7.8d401a13358c5b3e.js`, runtime `393f084b...`; same as S31–S33).
- `activate.ui.com`: unchanged `assets/index-1CNh1WqS.js`.

## Sessions
- Fresh Account A + Account B full sessions established end-to-end
  (password -> `499` email-OTP -> `/login/2fa` `200` -> `UBIC_AUTH`);
  `/user/self` `200` for both (A `d8946fad-...`, B `7c5aab2b-...`). Tokens not written to files.

## www.ui.com new deploy audit (36 initial chunks, 3.0 MB)
- Sinks: 28 `dangerouslySetInnerHTML` (React/Next internals + static i18n; the app
  route-allowlist chunk `02aqcd17vx73t.js` is unchanged), 7 `.innerHTML=`
  (React `dangerouslySetInnerHTML` setter, GTM `script.innerHTML`, SendSafely
  dropzone, React `textContent` helper). 0 `insertAdjacentHTML` / `document.write` /
  `eval` / `new Function` / `srcdoc`.
- Sources: only URL param consumed by app code is `appview` (layout toggle);
  remaining `searchParams.get(...)` are Next RSC internals (`NEXT_RSC_UNION_QUERY`,
  `dpl`, `x-action-*`). No new user-controlled source -> sink flow.
- Message listeners: only React scheduler (`MessageChannel`), axios, and
  `setImmediate` internals; **no app-level `message` listener**.
- No real Server Actions: the single `createServerReference` is the RSC client
  runtime function definition (`r.createServerReference=function(e,t){...}`), no
  action IDs bound.
- `/_next/image` -> 404; `/_next/data` -> 404; `/api/` -> 404.
- 404 page does not reflect the requested path; `/download/software/<slug>`
  breakout payloads are percent-encoded/escaped (no raw `<script>`).
- Runtime (Chrome DevTools MCP) on `/download/unifi/download-started`:
  `?link=https://evil.com/s34.zip` and `?link=https://dl.ui.com@evil.com/s34.zip`
  are stripped (final URL has no query, no `evil.com` anchor/iframe, `hasEvil:false`).
  Download-link allowlist (lazy chunk) held for external + userinfo bypass.
- Status: **Not Vulnerable** (new deploy is a content/dependency refresh; no new sink).

## sso / account redirect handling (safe GET probes)
- `GET sso /api/sso/v1/zendesk_login?return_to=<x>`: sso forwards `return_to`
  verbatim into the `Location` (`ubnt.zendesk.com/access/jwt?jwt=...&return_to=<x>`).
  Following the hop, Zendesk returns `302 -> help.ui.com/access/return_to?...&return_to=
  https://help.ui.com/hc` (normalized), so no open redirect and the single-use JWT is
  not exposed to the attacker. Matches Session 25 conclusion.
- `GET sso /api/sso/v1/jwt/token?redirect=https://evil.com|//evil.com` -> `200`
  (no redirect). `shopify_login?redirect=https://evil.com` -> fixed
  `us.shop.ui.com/account/login/multipass/...`. `logout?redirect=...` -> fixed
  `account.ui.com/login`. `sso /login` -> 404.
- `account.ui.com/login?redirect=https://evil.com|//evil.com|javascript:alert(1)`
  -> `200` (client-side validator rejects; no `Location`).
- Status: **Not Vulnerable** (no open redirect).

## account.svc Zendesk create — mass-assignment variants (blocked)
- `GET /zendesk/user` -> A linked Zendesk user `44644434942359` (end-user,
  `external_id` = A uuid). `GET /zendesk/tickets` -> A's own ticket `6138711`.
- `POST /zendesk/ticket` with `{subject,comment,requester_id:44644404389911,
  organization_id:1,assignee_id:1,status:"closed",priority:"urgent",
  collaborators:[B email],tags:["s34"]}` -> `400 BAD_REQUEST`
  (`Invalid input, please check and try again.`). `x-ratelimit-limit: 1`,
  `x-ratelimit-remaining: 0`, reset `1795855605` (~2026-11-28T08:46Z).
- Test is **rate-limited / rejected**; no ticket created, no persisted change.
  (Different variant from Session 7's `requester.email`; create quota exhausted.)
  Marked **Unresolved (rate-limited)**, not a finding.

## account.svc / sso mass assignment (negative)
- `PUT /api/sso/v1/user/self {"picture":"https://example.com/s34.png"}` -> `204`,
  but re-read `picture` unchanged (`https://account-cdn.svc.ui.com/dee2279c-...`):
  `picture` is server-managed / ignored. Not Vulnerable.
- `PUT /api/sso/v1/user/self {"first_name":"<img src=x onerror=alert(1)>"}` -> `429
  RATE_LIMITED`; re-read `first_name` unchanged (`OpenCodeTest`); restored `204`.
  No stored value change.

## Result
- No new confirmed high-impact finding. `confirmed-vuln.txt` unchanged.
- Route ledger unchanged: **57 routes (42 done / 15 blocked)**.
- No Discord notification sent (notification bar not met).
