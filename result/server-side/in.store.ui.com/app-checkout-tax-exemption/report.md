# Server-side route report — /in/en/app/checkout/tax-exemption

Tested: 2026-10-31T05:25–05:27Z (authenticated as Account A)
Route: https://in.store.ui.com/in/en/app/checkout/tax-exemption
Build: 8729322f82

## Endpoints observed
| Method | Operation | Variables | Auth | Result |
|---|---|---|---|---|
| GET https://in.store.ui.com/in/en/app/checkout/tax-exemption | - | - | Account A | 200, app shell |
| POST https://ecomm.svc.ui.com/graphql | GetTaxExemptionData | `{}` | Account A | 200, own exemptions empty; CA/US entity config |
| POST https://ecomm.svc.ui.com/graphql | GetCoreData | `{storeId:"in",platform:"Web"}` | Account A | 200 |
| POST https://ecomm.svc.ui.com/graphql | GetCountryTaxRate | `{storeId:"in",countryCode:"IN"}` | Account A | 200, rate 0.18 |

## Testing performed
- `GetTaxExemptionData` returned only the authenticated customer's exemption
  list (empty) plus public entity/region configuration for CA and US.
- The IN store has no eligible tax-exemption entity in this response, so the UI
  did not expose a submittable form.
- No `RequestCustomerTaxExemption` or `UploadProtectedAsset` mutation was sent;
  submitting one would create an external tax-exemption workflow side effect.
- No URL/query parameter was forwarded to GraphQL.

## Status
- No confirmed server-side vulnerability on this route.
- Unresolved: authenticated cross-account/exemption-IDOR testing for the
  request/upload mutations was not performed to avoid creating a real
  tax-exemption request.
