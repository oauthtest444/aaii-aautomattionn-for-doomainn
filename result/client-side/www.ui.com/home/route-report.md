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
