# Progress

Updated: 2026-10-30T13:25:00Z
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
Checkout/cart GraphQL negatives recorded in `result/server-side/in.store.ui.com/checkout/report.md`. Search route loads normally for plain terms; angle-bracket payload yields WAF `403 Forbidden` (no reflection). Remaining: product/category/collection/faq/app-embedded variants and country-picker dynamic redirect check.

## Checkout / GraphQL investigation (2026-10-30T13:05-13:25Z)
- Created test checkout via `CreateCheckout` (`input:{storeId,language,items:[{storeProductVariantId,quantity}]}`); in-stock variant `e1e25a23-9869-463a-bcab-50cab0196115` (USW-Ultra-210W-EU, 2105400 INR). Other India products SoldOut.
- Working checkout `5258ecf2-4feb-4c1f-8b39-d95035531fcc` / secret `5bd406a6...` (test-owned). No order placed.
- Valid `UpdateCheckout` minimal document (unused-variable rejection was the earlier 400 cause):
  `mutation UpdateCheckout($input:StorefrontUpdateCheckoutInput!){storefrontUpdateCheckout(input:$input){checkout{id email items{id sku quantity}totals{summary{total{amount currency}}}}}}`
- Input validation is strict: unknown top-level fields (`items`, `totals`, `orderId`, `taxCalculated`, `hasCustomer`, item `price`) → generic `500 INTERNAL_SERVER_ERROR`, state unchanged. No mass assignment.
- `updateItems` quantity 0/-1 → 500; quantity 129 accepted server-side despite UI "order 21 max" (no stock cap at checkout update; order creation not attempted).
- `discountCode` invalid/empty → 500; no coupon bypass established.
- Checkout secret is enforced for writes. `GetCheckout`/`UpdateCheckout` with a valid checkout UUID + wrong secret returns a NEW checkout (new id/secret) cloned with same items; email/shipping set on the original are NOT copied. No PII/IDOR impact; UUID alone yields only a fresh cart clone.
- `storefrontUpdateCheckout` input spreads checkout object client-side, but server rejects non-schema fields → no price/tax override.

## Notable non-vuln notes
- Address-ID existence oracle (FORBIDDEN vs null) — excluded, low impact.
- GraphQL unknown-input-field returns generic 500 — robustness only.
- CORS on ecomm.svc.ui.com does not reflect foreign origins (verified with curl).
- No cache headers on storefront HTML (`private, no-store`); X-Forwarded-Host triggers canonical 307 to real host, not reflected.
