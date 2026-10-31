# Route report: /in/en/tags/{tag}

Status: Not Vulnerable — 2026-10-31T05:51Z
Auth context: Account A.

## Discovery
- Valid tag slug format is `<namespace>:<value>` (for example `feature:wifi-6`). `wifi-6` alone returns 404.
- Valid examples returning 200: `feature:wifi-6`, `feature:10-stream`, `pro-sort-weight:4870`.

## Client-side
- Route chunk `pages/[store]/[language]/tags/[tag]-3bbf8006f11cf7fa.js` (20 KB) has no `location.*`/`URLSearchParams`/`router.query` source and no `innerHTML`/`dangerouslySetInnerHTML`/`eval`/`window.open`/`location.assign/replace`/`postMessage` sink.
- Unknown tag marker returns the 404 page; marker only appears in third-party analytics URLs (URL-encoded), not in page text/HTML.

## Server-side
- The route is a server-rendered product listing (same catalog data as category/collection views). Requests observed: `GetCoreData`, `GetCountryTaxRate`, and public catalog queries. No write or owner-scoped operation.
- No user-controlled parameter is passed to a sensitive server operation.

## Completion
- Client-side: complete
- Server-side: complete
- Final: Not Vulnerable

Confirmed-vuln.txt: excluded — no confirmed high-impact finding.
