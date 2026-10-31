# Route report: /in/en/app/checkout/pay-by-invoice/edit

Status: Not Vulnerable — 2026-10-31T05:47Z
Auth context: Account A `tan.tiger5564@maildrop.cc` (customer 95b6d3ee-354c-47b6-a187-b80959d58f79); Account B `overrated.chinchilla337@maildrop.cc` (customer a038a8ec-3129-4928-8be7-92ddae3ef73b) in an isolated browser context.
App-view gating: `?appview=true` / `appview` cookie (UI gating only).

## UI surface
Pay-by-invoice metadata editor: Contact Name, Contact Email, Reference / PO Number, Note (Optional).

## JavaScript reviewed
- `pages/[store]/[language]/app/checkout/pay-by-invoice/edit-3ca59a7394a4ed06.js` (thin wrapper -> module 10400).
- `400-876a998c59a2fad0.js` (form/list component), `_app-061d1aa423d330d2.js` (GraphQL documents).
- Saved under `javascript/raw/`.

## Client-side findings
- No source reads from `location.search/hash/href/pathname`, `URLSearchParams`, `useSearchParams`, `router.query`, or `document.referrer` in the route chunk.
- No sinks: no `innerHTML`, `dangerouslySetInnerHTML`, `insertAdjacentHTML`, `document.write`, `eval`, `new Function`, `window.open`, `location.assign/replace`, `srcdoc`, `postMessage`, or `message` listener in the route chunk.
- Form data is sent through GraphQL mutations only. No DOM XSS / open redirect / CSTI / postMessage issue.

## Server-side findings
See `result/server-side/in.store.ui.com/app-checkout-pay-by-invoice-edit/report.md`.
Summary: metadata CRUD is session-scoped; cross-account update/delete by ID returns `NOT_FOUND`; create with `customerId` returns generic 400 and does not persist; unauthenticated calls return `FORBIDDEN`. No IDOR/BOLA/mass assignment.

## Route completion status
- Route URL: `https://in.store.ui.com/in/en/app/checkout/pay-by-invoice/edit?appview=true`
- Client-side testing: complete (no sink)
- Server-side testing: complete (no vuln)
- Final status: Not Vulnerable

Confirmed-vuln.txt: excluded — no confirmed high-impact finding.
