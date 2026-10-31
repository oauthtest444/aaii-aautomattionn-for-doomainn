# Route report: /in/en/app/checkout/pay-by-invoice/select

Status: Not Vulnerable — 2026-10-31T05:48Z
Auth context: Account A (customer 95b6d3ee-354c-47b6-a187-b80959d58f79).

## UI
Lists the caller's saved pay-by-invoice contacts with Edit/Remove and "Create New Contact".

## Client-side
- Chunk `pages/[store]/[language]/app/checkout/pay-by-invoice/select-dcce54051795c0d3.js` is a thin wrapper -> module 62564.
- Shared picker logic in `2564-2f4e6349660584d6.js` reads `router.query.selectedId` only to preselect a row from the session-scoped list. No HTML/navigation sink.
- No `innerHTML`, `dangerouslySetInnerHTML`, `eval`, `window.open`, `location.assign/replace`, or `message` listener in the route chunks.

## Server-side
- `GetCustomerPayByInvoiceMetadata` (no arguments) returns only Account A's metadata.
- No write mutation is fired on this route; selection is local state/checkout context.
- Metadata CRUD authorization was proven separately (`result/server-side/in.store.ui.com/app-checkout-pay-by-invoice-edit/report.md`).

## Completion
- Client-side: complete
- Server-side: complete
- Final: Not Vulnerable

Confirmed-vuln.txt: excluded — no confirmed high-impact finding.
