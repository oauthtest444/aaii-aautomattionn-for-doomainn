# Route Report — https://www.ui.com/ (home)

- Tested: 2026-11-11T05:52–05:54Z
- Auth: unauthenticated
- JS reviewed: 7 same-origin bundles (see `javascript/manifest.md`)
- Phases: sources, sinks, flows, postMessage listeners

## Findings
None. The marketing microsite is a statically configured React app:
- no URL/query parameter is read into a DOM/navigation sink,
- the only redirect component (`vg`) consumes static route config,
- `dangerouslySetInnerHTML` uses bundled i18n/menu strings only,
- no in-scope postMessage listener.

## Server-side
Only public/static assets and third-party analytics were loaded. The app calls
`sso.ui.com/api/sso/v1/user/self` (401, expected) and `megaphone.svc.ui.com/v1/announcements`
(401). No new in-scope authenticated API surface. Out-of-scope third-party hosts recorded
in `result/out-of-scope.txt`.

## Status: Done (no vulnerability)

## Session 34 re-audit (2026-11-28) — new deploy `dpl=d6fbc335af54cb2739a6c9ebd9f765dc52426e14`
- Re-deploy of the marketing microsite (previous `dpl=e1f4c3c3…`). Audited the 36
  initial chunks (3.0 MB): 28 `dangerouslySetInnerHTML` (React/Next internals + static
  i18n; the app route-allowlist chunk `02aqcd17vx73t.js` is unchanged), 7 `.innerHTML=`
  (React setter, GTM, SendSafely, textContent helper); 0 insertAdjacentHTML/document.write/
  eval/new Function/srcdoc. Only app-consumed query param is `appview`; the rest are Next
  RSC internals. No app-level `message` listener. No real Server Actions.
- `_next/image`, `_next/data`, `/api/` -> 404; 404 and `/download/software/<slug>` paths
  are not reflected. Runtime (Chrome MCP) `?link=` allowlist on
  `/download/unifi/download-started` strips `https://evil.com/…` and
  `https://dl.ui.com@evil.com/…` (no evil anchor/iframe).
- Status: **Not Vulnerable** (content/dependency refresh; no new sink).
