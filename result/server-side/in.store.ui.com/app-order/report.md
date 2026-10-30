# Server-side route report — /in/en/app/order

Tested: 2026-10-30T22:20–22:24Z (authenticated as Account A; app view)
Build: 8729322f82

## Endpoints observed
| Method | Operation | Variables | Auth | Result |
|---|---|---|---|---|
| GET https://in.store.ui.com/in/en/app/order | - | - | Account A session | 200, app order page SSR |
| POST https://ecomm.svc.ui.com/graphql | GetCustomerOrders | `{limit:50, offset:0, filter:{}}` | Account A | 200, `total: 0`, `items: []` |
| POST https://ecomm.svc.ui.com/graphql | GetCustomerHistoricalOrders | `{limit:50, offset:0, filter:{}}` | Account A | 200, `total: 0`, `items: []` |
| POST https://ecomm.svc.ui.com/graphql | GetCoreData | `storeId=in, platform=Web` | Account A | 200, customer + flags |
| POST https://ecomm.svc.ui.com/graphql | GetCountryTaxRate | `countryCode=IN, storeId=in` | Account A | 200, rate 0.18 |

## Identity handling
`GetCustomerOrders` and `GetCustomerHistoricalOrders` take no customer/owner
id: the server derives the customer from the `UBIC_AUTH` session. Both returned
only the caller's (empty) order set. `GetCoreData` confirms
`meCustomer.id=95b6d3ee-354c-47b6-a187-b80959d58f79`,
`ssoId=d8946fad-2b8e-4cf0-82c5-5d955b57b829`, `activeStoreCheckout=null`.
There is no client-supplied ownership parameter to tamper with on this route,
so no IDOR/BOLA surface is exposed here.

## Testing performed
- Baseline authenticated request with app-view cookies: empty order list.
- Response for both order queries is scoped by session and returned `total: 0`.
- No write operation is issued by the route (read-only order listing).
- No order ids exist on Account A, so the order-status/tracking navigation could
  not be exercised with real data.
- `?appview=true` only changes client rendering; it did not alter the GraphQL
  variables or return another customer's data.

## Status
- No confirmed server-side vulnerability on this route.
- Order-status/payment/returns IDOR remains untestable until an account with an
  order is available.
