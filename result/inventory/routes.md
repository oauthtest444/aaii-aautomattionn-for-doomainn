# UI Route Inventory

Source: Next.js `_buildManifest.js` (build 8729322f82) + homepage link discovery.
Store prefix is `/{store}/{language}`; authorized store is `in/en`.

| Route pattern | Notes | Status |
|---|---|---|
| `/{store}/{language}` | Home / landing | tested (not vulnerable) |
| `/{store}/{language}/category/{category}` | Category listing (supports filter/sort/page/search/view/tag/compare query) | tested (not vulnerable; all-wifi) |
| `/{store}/{language}/category/{category}/collections/{collection}` | Category collection | tested (not vulnerable; top10-cables alias) |
| `/{store}/{language}/category/{category}/products/{product}` | Product under category | tested (not vulnerable; shared product view) |
| `/{store}/{language}/category/{category}/collections/{collection}/products/{product}` | Product under category+collection | tested (not vulnerable; shared product view) |
| `/{store}/{language}/collections/{collection}` | Collection | tested (not vulnerable; top10-cables) |
| `/{store}/{language}/collections/{collection}/products/{product}` | Collection product | tested (not vulnerable; shared product view) |
| `/{store}/{language}/products/{product}` | Product | tested (not vulnerable; uap-ac-hd) |
| `/{store}/{language}/search` | Search (`search`) | tested (not vulnerable) |
| `/{store}/{language}/top-10-accessories` | Accessory collection landing | tested (not vulnerable) |
| `/{store}/{language}/tags/{tag}` | Tag listing (valid slug `feature:wifi-6`) | tested (not vulnerable) |
| `/{store}/{language}/faq` | FAQ | tested (static) |
| `/{store}/{language}/account` | Account | tested (not vulnerable) |
| `/{store}/{language}/account/address/new` | Address create | tested (not vulnerable) |
| `/{store}/{language}/account/address/{id}` | Address detail | tested (not vulnerable) |
| `/{store}/{language}/my-lists` | Wishlists | tested (not vulnerable) |
| `/{store}/{language}/my-lists/{listId}` | Wishlist detail | tested (not vulnerable) |
| `/{store}/{language}/checkout` | Checkout | partially tested (static shell; no cart) |
| `/{store}/{language}/checkout/{id}` | Checkout step | unresolved (requires cart/checkout) |
| `/{store}/{language}/checkout/{id}/payment` | Checkout payment | unresolved (requires checkout) |
| `/{store}/{language}/app/checkout...` | App-embedded checkout variants (`/app/checkout` 307 -> `/checkout`) | tested except order/payment flow (no test order) |
| `/{store}/{language}/order/{id}/status` | Order status (guest access) | unresolved (no test-owned order) |
| `/{store}/{language}/order/{id}/payment` | Order payment | unresolved (random id 404; no test-owned order) |
| `/{store}/{language}/order/{id}/payment/address/billing` | Order payment billing address | unresolved (random id 404; no test-owned order) |
| `/{store}/{language}/order/{id}/callback` | Payment callback | partially tested (random id 200, no open redirect via redirect/returnUrl params) |
| `/{store}/{language}/order/{id}/returns/create` | Return creation | unresolved (no test-owned order) |
| `/{store}/{language}/previous-purchase` | Previous purchase | tested (static shell, no reflection) |
| `/{store}/{language}/country-picker` | Country/store picker (`redirectUri`) | code-review: no external redirect; dynamic confirmation skipped (would navigate out of scope) |
| `/{store}/{language}/services/ui-care` | UI Care service | tested (static) |
| `/{store}/{language}/services/cybersecure` | CyberSecure service | tested (static) |
| `/{store}/{language}/maintenance` | Maintenance | tested (no open redirect) |
| `/{store}/{language}/app/compare` | Compare app view | tested (not vulnerable) |
| `/{store}/{language}/app/search` | Search app view | tested (same-origin redirect) |
| `/{store}/{language}/app/my-lists` | Wishlists app view | tested (authz held; stored XSS escaped) |
| `/{store}/{language}/app/order` | Orders app view | tested (not vulnerable) |
| `/{store}/{language}/app/faq` | FAQ app view | tested (same-origin redirect) |
| `/{store}/{language}/app/checkout/address/billing` | App billing address | tested (shell; address authz held) |
| `/{store}/{language}/app/checkout/address/shipping` | App shipping address | tested (shell; address authz held) |
| `/{store}/{language}/app/checkout/address-picker` | App address picker | tested (not vulnerable) |
| `/{store}/{language}/app/checkout/pay-by-invoice/edit` | App invoice edit (metadata CRUD authz held) | tested (not vulnerable) |
| `/{store}/{language}/app/checkout/pay-by-invoice/select` | App invoice select | tested (not vulnerable) |
| `/{store}/{language}/app/checkout/tax-exemption` | App tax exemption | tested (shell; no form in IN) |
| `/{store}/{language}/app/modals/services/cybersecure` | App CyberSecure modal | tested (static) |
| `/{store}/{language}/app/modals/services/ui-care` | App UI Care modal | tested (static) |
| `/{store}/{language}/app/my-lists/add-to-another-list` | App wishlist add (AddWishlistItem(s) authz held) | tested (not vulnerable) |
| `/{store}/{language}/app/my-lists/add-to-list` | App wishlist add (AddWishlistItem(s) authz held) | tested (not vulnerable) |
| `/{store}/{language}/app/my-lists/{listId}` | App wishlist detail (GetWishlist authz held) | tested (not vulnerable) |
| `/{store}/{language}/app/order/{id}/status` | App order status | unresolved (no test-owned order) |
| `/{store}/{language}/app/skeletons/{category,products,my-lists-detail}` | Skeleton views | tested (static) |

Non-UI: `/.well-known/*`, `/404`, `/500`, `/_error`, `/ping`.
