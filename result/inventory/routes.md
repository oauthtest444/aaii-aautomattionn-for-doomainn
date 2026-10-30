# UI Route Inventory

Source: Next.js `_buildManifest.js` (build 8729322f82) + homepage link discovery.
Store prefix is `/{store}/{language}`; authorized store is `in/en`.

| Route pattern | Notes | Status |
|---|---|---|
| `/{store}/{language}` | Home / landing (tested: home) | in progress |
| `/{store}/{language}/category/{category}` | Category listing (supports filter/sort/page/search/view/tag/compare query) | pending |
| `/{store}/{language}/category/{category}/collections/{collection}` | Category collection | pending |
| `/{store}/{language}/category/{category}/products/{product}` | Product under category | pending |
| `/{store}/{language}/category/{category}/collections/{collection}/products/{product}` | Product under category+collection | pending |
| `/{store}/{language}/collections/{collection}` | Collection | pending |
| `/{store}/{language}/collections/{collection}/products/{product}` | Collection product | pending |
| `/{store}/{language}/products/{product}` | Product | pending |
| `/{store}/{language}/search` | Search (`q`) | tested (not vulnerable) |
| `/{store}/{language}/top-10-accessories` | Accessory collection landing | pending |
| `/{store}/{language}/tags/{tag}` | Tag listing | pending |
| `/{store}/{language}/faq` | FAQ | pending |
| `/{store}/{language}/account` | Account | tested (not vulnerable) |
| `/{store}/{language}/account/address/new` | Address create | tested (not vulnerable) |
| `/{store}/{language}/account/address/{id}` | Address detail | tested (not vulnerable) |
| `/{store}/{language}/my-lists` | Wishlists | tested (not vulnerable) |
| `/{store}/{language}/my-lists/{listId}` | Wishlist detail | tested (not vulnerable) |
| `/{store}/{language}/checkout` | Checkout | partially tested (static shell; no cart) |
| `/{store}/{language}/checkout/{id}` | Checkout step | unresolved (requires cart/checkout) |
| `/{store}/{language}/checkout/{id}/payment` | Checkout payment | unresolved (requires checkout) |
| `/{store}/{language}/app/checkout...` | App-embedded checkout variants | pending |
| `/{store}/{language}/order/{id}/status` | Order status (guest access) | unresolved (no test-owned order) |
| `/{store}/{language}/order/{id}/payment` | Order payment | unresolved (no test-owned order) |
| `/{store}/{language}/order/{id}/callback` | Payment callback | partially tested (random id 200, no open redirect via redirect/returnUrl params) |
| `/{store}/{language}/order/{id}/returns/create` | Return creation | unresolved (no test-owned order) |
| `/{store}/{language}/previous-purchase` | Previous purchase | tested (static shell, no reflection) |
| `/{store}/{language}/country-picker` | Country/store picker (`redirectUri`) | code-review: no external redirect; dynamic confirmation skipped (would navigate out of scope) |
| `/{store}/{language}/services/ui-care` | UI Care service | pending |
| `/{store}/{language}/services/cybersecure` | CyberSecure service | pending |
| `/{store}/{language}/maintenance` | Maintenance | pending |
| `/{store}/{language}/app/compare` | Compare app view | pending |
| `/{store}/{language}/app/search` | Search app view | pending |
| `/{store}/{language}/app/my-lists` | Wishlists app view | pending |
| `/{store}/{language}/app/order` | Orders app view | pending |
| `/{store}/{language}/app/faq` | FAQ app view | pending |
| `/{store}/{language}/app/checkout/address/billing` | App billing address | pending |
| `/{store}/{language}/app/checkout/address/shipping` | App shipping address | pending |
| `/{store}/{language}/app/checkout/address-picker` | App address picker | pending |
| `/{store}/{language}/app/checkout/pay-by-invoice/edit` | App invoice edit | pending |
| `/{store}/{language}/app/checkout/pay-by-invoice/select` | App invoice select | pending |
| `/{store}/{language}/app/checkout/tax-exemption` | App tax exemption | pending |
| `/{store}/{language}/app/modals/services/cybersecure` | App CyberSecure modal | pending |
| `/{store}/{language}/app/modals/services/ui-care` | App UI Care modal | pending |
| `/{store}/{language}/app/my-lists/add-to-another-list` | App wishlist add | pending |
| `/{store}/{language}/app/my-lists/add-to-list` | App wishlist add | pending |
| `/{store}/{language}/app/my-lists/{listId}` | App wishlist detail | pending |
| `/{store}/{language}/app/order/{id}/status` | App order status | pending |
| `/{store}/{language}/app/skeletons/{category,products,my-lists-detail}` | Skeleton views | pending |

Non-UI: `/.well-known/*`, `/404`, `/500`, `/_error`, `/ping`.
