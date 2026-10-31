# Route report: /in/en/app/checkout/pay-by-invoice/edit (server-side)

Status: Not Vulnerable — 2026-10-31T05:47Z
Endpoint: `POST https://ecomm.svc.ui.com/graphql`
Auth contexts: A (customer 95b6d3ee-354c-47b6-a187-b80959d58f79), B (customer a038a8ec-3129-4928-8be7-92ddae3ef73b), unauthenticated.

## API operations (from route JS)
- `GetCustomerPayByInvoiceMetadata` — `customerPayByInvoiceMetadata` (no arguments; session-scoped).
- `CreateCustomerPayByInvoiceMetadata(input: CreateCustomerPayByInvoiceMetadataInput!)`.
- `UpdateCustomerPayByInvoiceMetadata(input: UpdateCustomerPayByInvoiceMetadataInput!)`.
- `DeleteCustomerPayByInvoiceMetadata(id: UUID!)`.

Input fields observed/used: `id`, `contactName`, `contactEmail`, `referenceNumber`, `note`.

## Test-owned resources
- A metadata: `216f683a-61dd-4e81-948c-297a17aae19b` (PM_TEST_9137).
- B metadata created for baseline: `55520d80-3691-49ca-be8d-93a9b6f9ee29`, updated then deleted.

## Tests and results
| # | Test | Context | Result |
|---|---|---|---|
| 1 | `customerPayByInvoiceMetadata` list | A | Only A's metadata |
| 2 | `customerPayByInvoiceMetadata` list | B | `[]` (no cross-account leak) |
| 3 | Update A's metadata id | B | `NOT_FOUND "Pay by Invoice details not found"` |
| 4 | Delete A's metadata id | B | `NOT_FOUND "Pay by Invoice details not found"` |
| 5 | Update own metadata id | B | Success (baseline; proves mutation works) |
| 6 | Delete own metadata id | B | `true` (baseline cleanup) |
| 7 | Create with `customerId` = A | B | `400 INTERNAL_SERVER_ERROR`; not persisted |
| 8 | Query/create without auth | none | `FORBIDDEN "Must be logged in to access resource"` |
| 9 | Re-read A's metadata after B tests | A | Unchanged (PM_TEST_9137 intact) |

## Conclusion
Authorization is enforced on read/update/delete by ownership; customer identity is taken from the session, not from client input. Unknown input fields are rejected. No IDOR/BOLA/mass assignment/business-logic issue.

Confirmed-vuln.txt: excluded — no confirmed high-impact finding.
