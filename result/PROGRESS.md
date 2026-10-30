# Progress

Updated: 2026-10-30T08:15:00Z
Start: 2026-10-30T07:57:35Z

- Total UI routes discovered: 35
- Fully tested: 7 (home [client-side], account, account/address/new, account/address/{id}, my-lists, my-lists/{listId}, search)
- Partially tested / unresolved: checkout, order status/payment/returns, country-picker dynamic, protected-asset/tax-exemption
- Not yet tested: ~24 (public product/category/collection/faq/app-embedded variants)
- Confirmed vulnerabilities: 0
- Accounts: A logged in (customer 95b6d3ee-354c-47b6-a187-b80959d58f79); B logged in (isolated context), both via maildrop MFA.

## Tested (no confirmed vuln)
| Route | Client-side | Server-side | Report |
|---|---|---|---|
| /in/en | reviewed 35 chunks, no confirmed sink | GetCoreData, geo-ip, megaphone | result/client-side/in.store.ui.com/home/ |
| /in/en/account | account chunks scanned | address CRUD IDOR/BAC/mass-assignment held | result/server-side/in.store.ui.com/account/report.md |
| /account/address/new + /{id} | address chunk | Create/Update/Delete/Get authz held | same |
| /in/en/my-lists + /{listId} | - | wishlist CRUD/add IDOR held | result/server-side/in.store.ui.com/my-lists/report.md |

## Current task
Search route (GetSearchProducts/GetCollectionsMetadata captured). Then product/category/collection routes, country-picker dynamic redirect check, then order/checkout surfaces.

## Notable non-vuln notes
- Address-ID existence oracle (FORBIDDEN vs null) — excluded, low impact.
- GraphQL unknown-input-field returns generic 500 — robustness only.
- CORS on ecomm.svc.ui.com does not reflect foreign origins (verified with curl).
- No cache headers on storefront HTML (`private, no-store`); X-Forwarded-Host triggers canonical 307 to real host, not reflected.
