# Route report — /in/en/order/{id}/status | payment | returns/create | callback

Tested: 2026-10-31T21:40Z
Build: 8729322f82
Auth: unauthenticated probes; real-order flows deliberately not exercised.

## Tested surface
- `GET /in/en/order/11111111-1111-4111-8111-111111111111/status` -> 404 generic page.
- `GET .../payment` -> 404 generic page.
- `GET .../returns/create` -> 404 generic page.
- `GET .../callback` -> 200; callback chunk
  `pages/[store]/[language]/order/[id]/callback-f9fdf2b1b0e0314e.js` (3 KB)
  contains no query/URL source and only `window.parent.postMessage({event:...}, "/")`
  on mount. No attacker-controlled value reaches a sink.
- Random/nonexistent order UUIDs produced no PII, no redirect, and no marker
  reflection.

## Client-side
- Order status/payment/returns/callback chunks were previously scanned for
  sources/sinks; no `location.*`, `URLSearchParams`, `router.query`, `innerHTML`,
  `dangerouslySetInnerHTML`, `eval`, or `window.open` flow from query values.
  Callback's only sink is the fixed-target parent `postMessage`.

## Not tested / blocked
- Authorization of a real order owned by another account (status/payment/
  returns) was not tested because no order was created; placing an order has
  fulfillment/inventory side effects outside the safe testing boundary.
- `app/order/{id}/status` shares the order-status view; same limitation.

## Status
- Tested surface: **Not Vulnerable**.
- Real-order cross-account authz: **unresolved** (blocked by no-order policy).
