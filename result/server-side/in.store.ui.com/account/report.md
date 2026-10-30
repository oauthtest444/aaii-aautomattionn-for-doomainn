# Route report: /in/en/account (+ /account/address/new, /account/address/{id})

Status: Not Vulnerable (authorization controls held) — 2026-10-30
Auth contexts: user A `tan.tiger5564@maildrop.cc` (customer 95b6d3ee-354c-47b6-a187-b80959d58f79), user B `overrated.chinchilla337@maildrop.cc`.

## UI surface
- Account dashboard: Order History, My Addresses, Tax Exemption, Notification Preference.
- Address create/edit/delete via `account/address/new` and `account/address/{id}`.

## API surface (GraphQL, POST https://ecomm.svc.ui.com/graphql)
- `GetCoreData` — returns `meCustomer` (own record only), config flags, `activeStoreCheckout`.
- `GetCustomerAddresses` — returns only caller's addresses.
- `GetCustomerAddress(addressId: UUID!)` — single address by ID.
- `CreateCustomerAddress(input: CreateCustomerAddressInput!)`.
- `UpdateCustomerAddress(input: UpdateCustomerAddressInput!)`.
- `DeleteCustomerAddress(input: DeleteCustomerAddressInput!)`.
- `GetCustomerOrders`, `GetCustomerHistoricalOrders`, `GetTaxExemptionData` (order/tax lists, caller-scoped).
- `ChangeCustomerPreferences` (notification acceptsMarketing/locale).

## Test-owned resources
- Address A: `83bcfac2-818b-4557-ba1c-3a2e7be54226` ("123 Test Rd", Richmond IN, US).
- Address B: none.

## Tests and results
1. Cross-account read `GetCustomerAddress(addressId=A)` as B:
   - `200 {"errors":[{"message":"You can only view your own addresses","code":"FORBIDDEN"}]}`. Not Vulnerable.
2. Cross-account update `UpdateCustomerAddress` as B on A's address (minimal and full input):
   - Full valid input => `FORBIDDEN "You can only view your own addresses"`. Not Vulnerable.
   - Minimal/unknown-field inputs => `400 INTERNAL_SERVER_ERROR` (see robustness note).
3. Cross-account delete `DeleteCustomerAddress({id:A})` as B:
   - `FORBIDDEN "You can only view your own addresses"`. Not Vulnerable.
4. Mass assignment on create as B (`customerId` of A):
   - `400 INTERNAL_SERVER_ERROR`; B address list stayed empty (`customerAddresses: []`). Not Vulnerable.
5. Random non-existent UUID read as B:
   - `200 {"data":{"customerAddress":null}}` (vs `FORBIDDEN` for an existing non-owned ID). This is an address-ID existence oracle.
   - Excluded from confirmed-vuln.txt: low impact; UUIDs are unguessable and no data is disclosed.
6. `GetCustomerAddresses` B => empty; A => only A's address. No cross-tenant leakage.

## Robustness note (not a vulnerability)
Unknown fields on GraphQL create input (e.g. `zzz:1`) return `400` with generic `INTERNAL_SERVER_ERROR` repeated N times instead of a GraphQL validation message. No data exposure or state change observed; documented only.

## Client-side
- Address delete uses `DeleteCustomerAddress({id})`; response scalar. No DOM sinks reachable from server data without escaping.
- Order status links use `window.open(statusPageUrl)` where value is server-provided, not user-controlled. No confirmed sink.
- Inline JS scan of downloaded account/address chunks found no `innerHTML`/`dangerouslySetInnerHTML`/`eval` flows tied to route params.

## Conclusion
No IDOR/BAC/mass-assignment on address objects; authorization is enforced consistently for read, update, and delete. No client-side finding.

Confirmed-vuln.txt: excluded — no confirmed high-impact finding.
