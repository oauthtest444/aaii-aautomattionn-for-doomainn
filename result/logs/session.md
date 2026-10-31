# Session Metadata

- Start time (UTC): 2026-10-30T07:57:35Z
- Target(s): in.store.ui.com (domain target); working URL https://in.store.ui.com/in/en?s=in&l=en
- Agent/model: opencode / deepseek-v4.1-flash-free
- Run ID: 41023199715 (workflow_dispatch)
- Target state decision: reset (target hash 575c39e0a7294a2ae908629c606dc88d7fb008e1df9a2b9e5c26fcdaeae79c1e)
- Environment: GitHub Actions runner, Linux, headless Chrome
- Tool versions:
  - opencode: /home/runner/.opencode/bin/opencode
  - curl: /usr/bin/curl
  - git: /usr/bin/git
  - node: v22.23.4
  - python3: /usr/bin/python3
  - Chrome: /usr/bin/google-chrome-stable

## MCP

- chrome-devtools MCP reachable (list_pages returned about:blank).

## Continuation run 41056940053
- Start time (UTC): 2026-10-30T12:40:00Z
- Target state decision: preserved (same target hash)
- Chrome DevTools endpoint: http://127.0.0.1:9222 (Chrome 156.0.8078.73)
- Resuming from PROGRESS.md/testing-inventory.json; 7 routes tested, ~24 pending.

## Continuation run 41060194849
- Start time (UTC): 2026-10-30T13:05:19Z
- Target state decision: preserved (same target hash)
- Chrome DevTools MCP reachable: list_pages -> about:blank
- Resuming from PROGRESS.md/testing-inventory.json; 7 routes tested, ~24 pending.

## Checkpoint 2026-10-30T13:25:00Z
- Reviewed product (`ucg-ultra`, `u6-pro`) and category (`all-wifi`) pages; no XSS (marker only in analytics URLs; `dangerouslySetInnerHTML` source is server label; `window.open` server-built).
- postMessage scan: only same-origin BroadcastChannel and PagBrasil listener validating iframe source — no weak handler.
- GraphQL: introspection blocked. `CreateCheckout` + `UpdateCheckout` explored with test checkout `5258ecf2-4feb-4c1f-8b39-d95035531fcc` (no order placed).
- Strict input validation blocks price/tax/customer mass assignment (generic 500). No secret bypass for writes. Wrong-secret read returns cloned cart without email/address (no PII).
- Next: resume route-by-route testing of remaining public routes (product/category/collection/faq/app-embedded, search) and update inventory.

## Continuation run 41136418720
- Start time (UTC): 2026-10-30T22:12:00Z
- Target state decision: preserved (same target hash)
- Chrome DevTools MCP reachable: list_pages -> about:blank; endpoint 127.0.0.1:9222 (Chrome 156.0.8078.73)
- Resuming from PROGRESS.md/testing-inventory.json; 7 routes tested, ~24 pending.

## Route testing 2026-10-30T22:12-22:17Z
- Completed /in/en/products/uap-ac-hd (client and server): query markers only in __NEXT_DATA__; sinks use server product content; public GraphQL catalog ops only.
- Completed /in/en/category/all-wifi (client and server): sort/tag/view/page only __NEXT_DATA__; search propagated URL-encoded into product links then client-redirects to /search with escaped rendering; unknown category 307 /404; WAF blocks angle/quote probes.
- Rechecked search with the real `?search=` parameter (previous notes used `q`): escaped text/input only.

## 2026-10-30T22:25Z — app-view + app/order
- Solved app-view gating: `_app` accepts `appview` cookie/query of `android`/`ios`/`true`; `isStoreAppView` also needs `store_app_event_version` cookie. Set both on `.store.ui.com` to render `/app/*` pages. UI gating only, data still session-scoped.
- `/in/en/app/my-lists` still 307s to `/in/en/my-lists` even in app view.
- `/in/en/app/order` authenticated as Account A: both order GraphQL queries return total 0; only sink `window.open` uses server `statusPageUrl`/route helper. No vuln. Reports written.
- Probed unknown `/tags/PM_TRACE_TAG_9137` and `/collections/wifi-flagship`: both 404 pages; markers appeared only in third-party analytics URLs (URL-encoded), not page text. Valid slugs still need enumeration.
- Country-picker open-redirect test selected Canada with redirectUri=https://example.com; browser auto-navigated to ca.store.ui.com (out-of-scope sibling). Returned immediately to in.store.ui.com without testing the CA store.

## Continuation run 41171793013
- Start time (UTC): 2026-10-31T05:15:00Z
- Target state decision: preserved (same target hash 575c39e0…)
- Chrome DevTools MCP reachable: list_pages -> about:blank; endpoint 127.0.0.1:9222
- Resuming from PROGRESS.md/testing-inventory.json; prior confirmed findings: 0
- Account A authenticated via SSO + maildrop MFA, device trusted; Account B remains available via isolated context.
- MCP bootstrap OK (existing session); no restart required.

## Route testing 2026-10-31T05:21-05:24Z
- Completed /in/en/maintenance (client and server). Route component renders null and assigns `window.location.href`; `redirect_uri` is accepted only when its `new URL(...).origin` equals `window.location.origin`. External example.com rejected, same-origin marker accepted. Server returns 200 empty Next page, marker not reflected, `__NEXT_DATA__.query`/`pageProps` empty, strong CSP. No vuln.
- Completed /in/en/app/faq (client and server). Server issues a fixed same-origin 307 to `/in/en/faq` with the query preserved; shared FAQ component was already tested. No vuln.
- Completed /in/en/top-10-accessories: `collection` strict-matched against fixed/historical slugs; unknown falls back; marker only in `__NEXT_DATA__.query`; static preloaded collections; no vuln.
- Completed /in/en/collections/top10-cables and /in/en/category/all-wifi/collections/top10-cables: both use shared collection/product view; valid slug resolves to fixed product `4436004e-b03e-41e8-bc14-50d82fcdfe0c`; query markers only in `__NEXT_DATA__.query`; only public catalog/session GraphQL reads; no vuln.

## Route testing 2026-10-31T05:25-05:32Z
- Completed /in/en/app/search: fixed same-origin 307 to /in/en/search, preserving search query; route prefetch helper enforces same origin. No vuln.
- Completed /in/en/app/checkout/tax-exemption: app shell; GetTaxExemptionData returned Account A's empty exemption list plus public CA/US config; India exposes no form fields; RequestCustomerTaxExemption and UploadProtectedAsset not invoked. No vuln.
- Completed /in/en/previous-purchase: arbitrary x parameter dropped from __NEXT_DATA__.query; GetProductsForHomepagePro(hasPreviousPurchase:true) session-scoped and returned total 0; no client sink or write. No vuln.
- Inventory now 25 routes: 24 tested, 1 partial (/tags/{tag}).

## Continuation run (2026-10-31T05:40Z, manual workflow_dispatch)
- Start time (UTC): 2026-10-31T05:40:00Z
- Target state decision: preserved (same target hash 575c39e0…)
- Chrome DevTools MCP reachable: list_pages -> about:blank; endpoint 127.0.0.1:9222
- Resuming from PROGRESS.md/testing-inventory.json; prior confirmed findings: 0
- Next: complete partially-downloaded /in/en/app/checkout/pay-by-invoice/edit, then remaining app checkout/address/modals/skeleton routes.

## 2026-10-31T05:57Z — final route batch
- Tested: pay-by-invoice/select, address-picker, tags/feature:wifi-6, product aliases, app skeletons, app service modals, app checkout address billing/shipping.
- Stored-XSS probe on wishlist name (`<img src=x onerror=...>`): escaped by React; test wishlist deleted.
- API header/reflection probes: opensearch (public but query-keyed), count-lookup (JSON-escaped), has-ui-care (private), geo-ip (private).
- All results Not Vulnerable. No confirmed finding; Discord notification not sent.
