# Unresolved


## Order / tax-exemption surfaces
- `/order/{id}/status`, `/order/{id}/payment`, `/order/{id}/returns/create`, `/app/order/{id}/status`: require a real test-owned order. Creating an order requires completing payment or choosing an invoice/COD method that may cause real fulfillment side effects, so it was not performed. Tested with nonexistent UUIDs only (404, no PII/redirect); real-order cross-account authz remains unresolved.
- `GetProtectedAssetSignedUrl(id)` / `UploadProtectedAsset`: requires a real ProtectedAsset ID owned by the test account. Creating a tax-exemption request is an external side effect (goes to store staff), so it was not performed. Random UUID returns generic 500, which does not prove or disprove authz.
- Tax-exemption request submission: unresolved for the same reason.

## Resolved this run
- `/checkout/{id}` and `/checkout/{id}/payment` were tested with a test-owned active checkout (no order placed). Page uses `in_active_checkout` cookie + its own secret; query `id`/`key` are ignored; cross-account checkout UUIDs produce a new checkout and no PII. No IDOR.
