# Client-side route report — /in/en/app/order

Tested: 2026-10-30T22:20–22:24Z (authenticated as Account A; app view)
Route: https://in.store.ui.com/in/en/app/order
Build: 8729322f82

## App-view context
The `/[store]/[language]/app/*` pages render only when the client is in app
view. `_app` derives this from a `pageProps.isAppView` value, the `appview`
cookie, or an `?appview=` query param (accepted values `android`, `ios`,
`true`, case-insensitive); `isStoreAppView` additionally requires a
`store_app_event_version` cookie. With `appview=true` and
`store_app_event_version=2` cookies set, `/app/order` renders its app page
instead of redirecting to the web route. This is UI gating only; the order
data still comes from the authenticated GraphQL session, so it does not grant
access to any additional data.

## Route JS
- `pages/[store]/[language]/app/order-5f1b384e0261c2cc.js` (copied to
  `javascript/raw/`)
- Shared chunks loaded by this page: `2141`, `8508`, `3224`, `900`, `4651`,
  `5750`, `400`, `2564`, `4618`, `07c2d338`, plus already-reviewed
  `_app`/framework/main chunks.

## Sources
- `statusPageUrl` from each order/historical-order item returned by
  `storefrontOrders` / `storefrontHistoricalOrders`.
- `orderData.fulfillments.fulfillmentLines[].carrierTrackingUrl`.
- `order.id`, `order.storeId`, `order.language` from the same GraphQL data.
- Route params `[store]`, `[language]` and local UI state.

## Sinks
- `window.open(o)` where
  `o = item.statusPageUrl ?? orderRouteHelper(item.id, storeId, language)`.
  `statusPageUrl` is server-supplied order data; the fallback is built by the
  store route helper from the order id/store/language. No URL/query/storage or
  cross-origin message value reaches it.
- `openStackView({url:o, carrierTrackingUrls})` for the same `o` after a
  `filter(W.hl)` on tracking URLs.
- No `dangerouslySetInnerHTML`, `innerHTML`, `document.write`, `eval`,
  `new Function`, `location.href`/`assign`, or `postMessage` listener in the
  route chunk.

## Runtime check
With `appview=true`, `/in/en/app/order` renders "You haven't placed any
orders." Account A has no orders, so no order item/tracking URL was returned
and the `window.open` path was not exercised with real data. No reflected
marker was rendered anywhere on the page.

## Status
- No confirmed client-side vulnerability on this route.
