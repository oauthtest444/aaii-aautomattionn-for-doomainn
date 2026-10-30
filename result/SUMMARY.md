# Summary — in.store.ui.com authorized test

Run: 2026-10-30T07:57:35Z (start). Build: `8729322f82`.
Scope: `in.store.ui.com` only (domain-only authorization). `account.ui.com` used solely for SSO login/MFA of the disposable test accounts; no security testing performed there. `ecomm.svc.ui.com/graphql` tested only as the storefront's own API backend.

## Confirmed findings
None. `result/confirmed-vuln.txt` contains no entries.

## Tested surface
| Area | What was tested | Result |
|---|---|---|
| Home `/in/en` | 35 route JS chunks downloaded + scanned for sources/sinks (searchParams, innerHTML, postMessage, window.open, redirect params); network flows | No confirmed client-side sink. `embed-override` hides footer only; PagBrasil message listener checks `source`; country-picker code discards external host. |
| Account `/account` | `GetCoreData`, address CRUD, orders/tax lists, preferences. Cross-account tests A vs B (read/update/delete/create mass assignment) | Authorization held: `FORBIDDEN`/`null`, no state change. Report: `result/server-side/in.store.ui.com/account/report.md`. |
| Address new/detail | `CreateCustomerAddress`, `UpdateCustomerAddress`, `DeleteCustomerAddress`, `GetCustomerAddress(addressId)` | Cross-account reads/updates/deletes blocked. |
| My Lists `/my-lists` + `/{listId}` | `GetWishlists`, `GetWishlist`, `CreateWishlist`, `UpdateWishlist`, `DeleteWishlist`, `AddWishlistItem(s)`; cross-account read/update/delete/add | Authorization held: `FORBIDDEN`/`null`. Report: `result/server-side/in.store.ui.com/my-lists/report.md`. |
| Search `/search?q=` | Server-rendered HTML reflection check with benign and HTML-encoded markers; JS chunk scan | `q` is not reflected in SSR HTML; no sink. |
| Country picker | Code review of `home-21.js` `redirectUri` handling | External/host component discarded; target path rebuilt under selected store. No open redirect by inspection; dynamic click skipped to avoid navigating to another store host (out of scope). |
| Product/category/collection/tags | Query-param reflection probes | Canonicalizing 307 redirects; markers not reflected. `tags/pro` 404. |
| Checkout / previous-purchase | Static fetch + headers; random order/checkout IDs | Static, unauthenticated-safe shells; `s-maxage` pages contain no PII. Random order/checkout IDs => 404/200 shell, no redirect via `redirect`/`returnUrl`. |
| Platform / HTTP | CORS on ecomm GraphQL with foreign/null origins; X-Forwarded-Host; cache headers | CORS does not reflect foreign origins; no Host reflection (307 to real host); storefront HTML `private, no-store`. |

## Notable non-vulnerabilities (documented, excluded)
- Address-ID existence oracle: `GetCustomerAddress` returns `FORBIDDEN` for an existing non-owned ID vs `null` for a random UUID. Low impact; UUIDs unguessable. Excluded from `confirmed-vuln.txt`.
- GraphQL unknown/extra input fields or invalid selection sets return generic `400 INTERNAL_SERVER_ERROR` instead of validation errors. Robustness issue only; no data/state impact observed.
- `window.open` in account order UI uses server-provided `statusPageUrl`, not user input.

## Unresolved
- Order IDOR/BAC (`/order/{id}/status|payment|returns/create`, `GetStorefrontOrder`, `CancelStorefrontOrder`, `CreateReturn`) — no test-owned order; creating one risks fulfillment side effects.
- Checkout IDOR/price manipulation — no cart/checkout created for the same reason.
- Protected assets/tax exemption (`UploadProtectedAsset`, `GetProtectedAssetSignedUrl`, `RequestCustomerTaxExemption`) — submitting a tax-exemption request is an external side effect; random UUID returns 500 and does not prove authz.
- Country-picker dynamic redirect confirmation (would require navigating to another store host).

## Assumptions
- The disposable test accounts in `creds/test-account.txt` are authorized for login and creating test data.
- `ecomm.svc.ui.com/graphql` is an authorized component of the in-scope storefront; testing kept to operations invoked by in-scope UI routes.
- Test-owned data was used only; the created address remains on account A (test data). Wishlist was deleted after testing.

## Artifacts
- `result/inventory/routes.md` — route table with statuses.
- `result/testing-inventory.json` — routes/endpoints inventory.
- `result/server-side/in.store.ui.com/account/report.md`, `.../my-lists/report.md`.
- `result/client-side/in.store.ui.com/{home,account,search}/javascript/raw/` — saved JS.
- `result/unresolved.md`, `result/scope.md`, `result/logs/session.md`.
