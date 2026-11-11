# VULN-20261111-001 — Zendesk comment HTML rendered unsanitized (Unresolved / self-XSS)

**Status:** Unresolved (defense gap confirmed; cross-user impact not demonstrated)
**Type:** DOM/Stored XSS candidate (self-XSS only as tested)
**Asset:** https://account.ui.com/requests/:ticketId
**Authentication:** user (test Account A/B)
**Severity:** Low (self-XSS; excluded from confirmed-vuln.txt)
**Tested at:** 2026-11-11T05:56Z

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

## Remediation
Sanitize `html_body` before parsing (DOMPurify with an allowlist) or render as plain
text; enforce the same sanitization for any future admin/agent rendering of ticket HTML.
