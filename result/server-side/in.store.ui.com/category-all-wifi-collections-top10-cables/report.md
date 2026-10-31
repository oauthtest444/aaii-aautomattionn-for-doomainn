# Server-side route report — /in/en/category/all-wifi/collections/top10-cables

Tested: 2026-10-31T05:24–05:26Z (authenticated as Account A)
Route: https://in.store.ui.com/in/en/category/all-wifi/collections/top10-cables
Build: 8729322f82

## Endpoints observed
| Method | Endpoint | Query/Operation | Auth | Result |
|---|---|---|---|---|
| GET https://in.store.ui.com/in/en/category/all-wifi/collections/top10-cables | `x=PM_TRACE_CATCOLL_9137` | Account A | 200, 384,767-byte HTML |
| POST https://ecomm.svc.ui.com/graphql | public product FAQ / wishlist / core / tax reads | Account A | 200 |

## Testing performed
- The marker appeared only in `__NEXT_DATA__.query`; it was absent from
  `pageProps` and from visible HTML.
- `page` was
  `/[store]/[language]/category/[category]/collections/[collection]`.
- Server-selected `collection.slug` was `top10-cables` and
  `currentProductId` was the fixed product
  `4436004e-b03e-41e8-bc14-50d82fcdfe0c`.
- Category and collection are resolved server-side from fixed route slugs; the
  arbitrary query parameter is not forwarded to GraphQL.
- Only public catalog/session reads were issued. No write, IDOR, or
  mass-assignment surface was exposed.

## Status
- No confirmed server-side vulnerability on this route.
