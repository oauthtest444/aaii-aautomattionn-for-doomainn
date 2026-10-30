# Unresolved


## Order / checkout / tax-exemption surfaces
- `/order/{id}/status`, `/order/{id}/payment`, `/order/{id}/returns/create`, `/checkout/{id}`, `/checkout/{id}/payment`: require a real test-owned order/checkout. Creating an order requires completing payment or choosing an invoice/COD method that may cause real fulfillment side effects, so it was not performed.
- `GetProtectedAssetSignedUrl(id)` / `UploadProtectedAsset`: requires a real ProtectedAsset ID owned by the test account. Creating a tax-exemption request is an external side effect (goes to store staff), so it was not performed. Random UUID returns generic 500, which does not prove or disprove authz.
- Tax-exemption request submission: unresolved for the same reason.
