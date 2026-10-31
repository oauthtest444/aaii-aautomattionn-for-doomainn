# Client-side route report — /in/en/app/checkout/tax-exemption

Tested: 2026-10-31T05:25–05:27Z (authenticated as Account A)
Route: https://in.store.ui.com/in/en/app/checkout/tax-exemption
Build: 8729322f82

## Route JS
`pages/[store]/[language]/app/checkout/tax-exemption-aa04ccc628206e8a.js`
(783-byte wrapper) plus shared module `62485` from `home-17.js`.
Raw wrapper in `javascript/raw/`; shared code already saved in
`result/client-side/in.store.ui.com/home/javascript/raw/home-17.js`.

## Sources and sinks
- The page uses checkout/store context, not URL query parameters, for its
  `checkoutId` and `forceStoreId`.
- Shared module `62485` provides the tax-exemption form. Submission calls
  `RequestCustomerTaxExemption` and then `UploadProtectedAsset` for selected
  files. Those operations were **not invoked**.
- No `dangerouslySetInnerHTML`, URL-controlled redirect, or postMessage sink is
  present in the route wrapper.

## Runtime checks
- Page rendered an `Eligible Store` selector with value `IN`; no exemption form
  fields were shown for the IN store.
- No file upload or exemption request was submitted.

## Status
- XSS/CSTI: **Not Vulnerable** on normal render.
- No client-side redirect/upload trigger was found.
