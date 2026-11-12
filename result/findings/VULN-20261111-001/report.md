# VULN-20261111-001 — Zendesk comment HTML rendered unsanitized (Not Vulnerable)

**Status:** Not Vulnerable (Session 7: Zendesk escapes user HTML in `html_body`)
**Type:** DOM/Stored XSS candidate
**Asset:** https://account.ui.com/requests/:ticketId
**Authentication:** user (test Account A/B)
**Severity:** None / Not Vulnerable
**Tested at:** 2026-11-11T05:56Z (initial); 2026-11-12T00:47Z (re-test, closed)

## Summary
The account SPA renders Zendesk comment bodies with `html-react-parser`, with no
client-side sanitizer present in the bundle. `html_body` is taken from
`GET https://account.svc.ui.com/zendesk/comments/{id}` and parsed to React elements.
If attacker-controlled HTML could be delivered into a ticket comment that a *different*
user/support agent views in this UI, it would be stored XSS. As tested, ticket comments
are strictly per-owner (cross-account access returns 403), so an injected payload only
executes in the attacker's own session, which is not reportable per AGENT.md §9.

## Evidence
- Bundle: `result/client-side/account.ui.com/login/javascript/index-BAUIMHQa.js`
  (SHA256 `29983e5e...855c18a`).
- Component `WLt` (~offset 6404335):
  `({author_type:t,...,html_body:i,attachments:a})=>... jsx(G,{children: BLt(i)})`
- `BLt` = bundled `html-react-parser` (`domToReact(htmlToDOM(html,...))`).
- Sanitizer grep: `DOMPurify`=0, `dompurify`=0, `sanitize-html`=0, `xss(`=0.
- Source endpoint path from SPA config: `zendeskComments: 'zendesk/comments'`
  on base `https://account.svc.ui.com`.

## Negative / limiting checks (from prior sessions)
- `GET /zendesk/comments/{id}` for another account's ticket -> `403 FORBIDDEN`.
- `POST /zendesk/comment/{ticketId}` requires `x-captcha-token`; write attempted only
  on the test account's own ticket.
- Zendesk normally sanitizes stored comment HTML server-side; not bypass-tested this run
  (no new authenticated session established).

## Why not confirmed
No delivery path to another user/support agent was found, and no JavaScript execution was
observed. Self-XSS without a delivery vector is excluded by AGENT.md §9.

`Confirmed-vuln.txt: excluded — self-XSS / no cross-user delivery, impact unresolved.`

## Session 7 re-test (2026-11-12T00:47Z) — closed as Not Vulnerable
Created ticket `6138711` with the harmless payload
`Marker <b>XACC1413</b> and <img src=x alt="XACC1413">` and fetched it back via
`GET https://account.svc.ui.com/zendesk/comments/6138711`.

Observed response (evidence `evidence/zendesk-html-escaping.json`):
```
"html_body": "<div class=\"zd-comment\" dir=\"auto\"><p dir=\"auto\">... Marker
 &lt;b&gt;XACC1413&lt;/b&gt; and &lt;img src=x alt=\"XACC1413\"&gt;. Please ignore.</p></div>",
"body": "... Marker <b>XACC1413</b> and <img src=x alt=\"XACC1413\">. Please ignore."
```
Zendesk server-side **escapes** the user-supplied tags in `html_body` (`&lt;b&gt;`,
`&lt;img ...&gt;`), which is the field the SPA feeds to `html-react-parser`. The escaped
entities render as literal text, so the client-side parser cannot create elements or
execute JavaScript. The raw `body`/`description` fields are not used by the comment
renderer. No JavaScript execution is possible; the candidate is **Not Vulnerable**.

`Confirmed-vuln.txt: excluded — Not Vulnerable (server-side escaping).`

## Remediation
Sanitize `html_body` before parsing (DOMPurify with an allowlist) or render as plain
text; enforce the same sanitization for any future admin/agent rendering of ticket HTML.
