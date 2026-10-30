# CAND-002 — Zendesk ticket comment `html_body` rendered without sanitizer

Status: **Unresolved** (not a confirmed vulnerability)
Date: 2026-10-30
Asset: `account.ui.com` (client) -> `account.svc.ui.com` (API, out-of-scope)
Class: Stored XSS (candidate)

## Summary
The support ticket comment component `CLt` renders comment `html_body` using
`html-react-parser@6.1.9` via helper `yLt(i)`. No DOMPurify or equivalent
sanitizer is applied in the client bundle. If the backend stores attacker-
controlled HTML in a Zendesk comment and returns it to an agent/admin view, the
HTML could execute in the `account.ui.com` origin.

## Source references
- `html-react-parser` version and helper `yLt` / `CLt` (search
  `html-react-parser` @4182106)
- `innerHTML` uses elsewhere are not fed by this path.

## Why unresolved
Requires an authenticated account that can create/receive a Zendesk ticket
comment (support flow). No test account could be created (reCAPTCHA). The API
host `account.svc.ui.com` is out of scope for active testing.

## Fix direction
Sanitize `html_body` with a strict allowlist (DOMPurify) before passing to
`html-react-parser`, or render as plain text.
