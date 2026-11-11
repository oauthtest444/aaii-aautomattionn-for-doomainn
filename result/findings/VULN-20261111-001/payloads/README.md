# Payloads — VULN-20261111-001

No payload was submitted to the target this session. The finding is an Unresolved /
self-XSS candidate; submitting HTML into a ticket comment would only execute in the
test account's own session and would not prove cross-user impact.

If a future authenticated session is used to validate sanitization, use a harmless
marker only (no network beacon, no data access), e.g.:

```html
<img src=x onerror="document.title='PM_TRACE_TEST_12345'">
```

Do not deliver this to real users or support staff. Confirm server-side/Zendesk
sanitization first from the stored comment (`GET /zendesk/comments/{id}`).
