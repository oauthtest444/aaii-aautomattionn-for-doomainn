# Sink Inventory

| Sink | File:line | Source | Status | Notes |
|------|-----------|--------|--------|-------|
| html-react-parser (`BLt`) on Zendesk `html_body` | account index-BAUIMHQa.js ~offset 6404335 (`WLt`) | GET account.svc.ui.com/zendesk/comments/{id} | Unresolved (self-XSS) | no DOMPurify/sanitizer in bundle; own-ticket scoped -> VULN-20261111-001 |
| `dangerouslySetInnerHTML` (Radix scroll-area) | account bundle ~offset 3396856 | static CSS string | Not Vulnerable | constant |
| `window.location.href` (`vg`) | www index-D-lz99wc.js | static route config | Not Vulnerable | `to` from config only |
| `dangerouslySetInnerHTML` menu description | www index-D-lz99wc.js | bundled i18n/static menu config | Not Vulnerable | not URL/API controlled |
