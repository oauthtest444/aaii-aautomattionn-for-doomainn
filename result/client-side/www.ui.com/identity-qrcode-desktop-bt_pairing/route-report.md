# www.ui.com — /identity/qrcode/desktop/bt_pairing (Session 28)

- Route: `https://www.ui.com/identity/qrcode/desktop/bt_pairing`
- Status: **Done** (marketing/static page; no user-controlled source/sink)
- Tested at: 2026-11-25T08:2xZ
- Build: Next.js/Turbopack on Vercel, `dpl=cf2ef4894382a44b88f852eabec10b8a61099721`
  (previous session: `dpl=6f710854cbbfd59f08058493f6937313e2161848`)
- Auth: unauthenticated (page renders a marketing page for "UniFi Endpoint"; the
  only 401 observed is the expected `GET sso.ui.com/api/sso/v1/user/self` login probe).

## Route discovery
The route appears in the App Router route allowlist chunk `02aqcd17vx73t.js`:
`["/", ..., "/ui-care", "/endpoint", "/cloud-storage", "/identity/qrcode/desktop/bt_pairing", ...]`.
A sibling `/identity` request 302s to `/endpoint`; any unknown suffix under
`/identity/qrcode/desktop/` also 302s to `/endpoint`.

## Source / sink review (new build)
- Only query-string source consumed anywhere in the 36 initial www chunks is
  `appview` (already tested, inert). `dpl` is a Next.js internal.
- No `dangerouslySetInnerHTML` driven by URL/API data in this route; the page's
  `dangerouslySetInnerHTML` occurrences are static JSON-LD/style/consent literals.
- `?code=`/`?token=` markers are not reflected on the page (`marker_hits=0`).
- Path markers are not reflected; unknown path segments 302 to `/endpoint`.
- `postMessage` handlers found in `0cz1d0mv5g_q7.js` (axios same-window
  `source===window` + nonce) and `3racnxu1ero-m.js` (axios setImmediate shim) are
  library internals, not app listeners.
- `window.open(ee.f.UNIFI_SITE_MANAGER)` uses static config only.
- Download allowlist unchanged in the new build: `["dl.ubnt.com","dl.ui.com",
  "fw-download.ubnt.com"]`.

## Result
No client-side vulnerability. No new source-to-sink flow. Route marked Done.
