# Summary — in.store.ui.com authorized test

Run: current continuation started 2026-10-31T05:15:00Z; cumulative testing began 2026-10-30T07:57:35Z. Build: `8729322f82`.
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


## Latest route coverage (2026-10-31)
- `/in/en/faq`, `/in/en/services/ui-care`, `/in/en/services/cybersecure`: static/local-state pages; no URL-controlled HTML or redirect sink; no write requests. No vuln.
- `/in/en/maintenance`: null-rendering client redirect; `redirect_uri` origin must equal `window.location.origin`; external host rejected, same-origin target accepted. Server 200, marker only in request query, no reflection. No vuln.
- `/in/en/app/faq`: fixed same-origin 307 to `/in/en/faq`; shared FAQ component. No vuln.
- `/in/en/top-10-accessories`: `collection` strict-matched to fixed/historical slugs; no sink; static preloaded data. No vuln.
- `/in/en/collections/top10-cables` and `/in/en/category/all-wifi/collections/top10-cables`: shared collection/product view; fixed server-selected product; query markers only in Next data; public GraphQL reads only. No vuln.
- `/in/en/app/search`: fixed same-origin 307 to `/in/en/search` with search query preserved; no open redirect. No vuln.
- `/in/en/app/checkout/tax-exemption`: app shell; Account A own exemption list empty; India rendered no form fields; only `GetTaxExemptionData` and baseline reads. Request/upload mutations not invoked to avoid external side effects. No vuln.
- `/in/en/previous-purchase`: arbitrary `x` dropped from Next query; `GetProductsForHomepagePro(hasPreviousPurchase:true)` session-scoped, 0 items; no client sink or write. No vuln.

## Unresolved
- Order IDOR/BAC (`/order/{id}/status|payment|returns/create`, `GetStorefrontOrder`, `CancelStorefrontOrder`, `CreateReturn`) — no test-owned order; creating one risks fulfillment side effects.
- Checkout IDOR/price manipulation — a test-owned checkout `5258ecf2-4feb-4c1f-8b39-d95035531fcc` was created, but no order was placed. Strict input validation blocked price/tax/customer mass assignment; wrong-secret reads return a cloned cart without PII.
- Protected assets/tax exemption (`UploadProtectedAsset`, `GetProtectedAssetSignedUrl`, `RequestCustomerTaxExemption`) — submitting a tax-exemption request is an external side effect; random UUID returns 500 and does not prove authz.
- Country-picker dynamic redirect was confirmed on 2026-10-30: external `redirectUri` was replaced by the selected store host; no open redirect. Sibling store pages were not tested.

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

## Latest route coverage (2026-10-31T05:47Z)
- `/in/en/app/checkout/pay-by-invoice/edit`: pay-by-invoice metadata editor. Client chunk has no URL source and no HTML/navigation/postMessage sink. Metadata list/create/update/delete are session-scoped: Account B update/delete of Account A's metadata id returned `NOT_FOUND`; create with `customerId` of A returned generic 400 and did not persist; unauthenticated calls returned `FORBIDDEN`; B's own create/update/delete baseline succeeded. No vuln. Reports: `result/client-side/in.store.ui.com/app-checkout-pay-by-invoice-edit/route-report.md`, `result/server-side/in.store.ui.com/app-checkout-pay-by-invoice-edit/report.md`.

## Latest route coverage (2026-10-31T05:57Z)
- `/in/en/app/checkout/pay-by-invoice/select`: session-scoped metadata picker; `selectedId` only preselects the caller's own list; no sink/write. Not vulnerable.
- `/in/en/app/checkout/address-picker`: Account B opening Account A's `addressId` rendered only B's empty list; address authorization held. Not vulnerable.
- `/in/en/tags/feature:wifi-6`: valid tag slug is `namespace:value`; SSR catalog listing only; route chunk has no URL source/sink. Not vulnerable.
- Product aliases (`category/.../products/{p}`, `collections/.../products/{p}`, `category/.../collections/.../products/{p}`): 200, shared already-tested product view; no new API/sink. Not vulnerable.
- App skeletons (`category`, `products`, `my-lists-detail`) and service modals (`cybersecure`, `ui-care`): static components; no source/sink/write. Not vulnerable.
- App checkout `address/billing` and `address/shipping`: app shell without active checkout; shared address authorization held; no sink. Not vulnerable (full submit flow unresolved).
- Stored-XSS probe: created a wishlist named `<img src=x onerror=window.__xss=1>` (id `a41af555-2e46-4576-a984-e665e29298bd`), reloaded `/in/en/my-lists`: React rendered it as escaped text (`img[src=x]` count 0, `window.__xss` undefined). Test wishlist deleted; list empty. Not vulnerable.
- `/api/opensearch` is `public, max-age=86400` but varies by query string (`store`), so no cache poisoning; unknown store maps to US template. Not vulnerable.
- `/api/app/categories-products-count-lookup` expects `storeId`+`productLine`; invalid `productLine` reflected only in JSON error (escaped); `<script>` blocked by WAF 403. Not vulnerable.
- `/api/has-ui-care` and `/api/geo-ip` are `private`/non-cacheable; XFF trust is low impact. Not vulnerable.
