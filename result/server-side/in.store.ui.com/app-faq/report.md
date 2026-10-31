# Server-side route report — /in/en/app/faq

Tested: 2026-10-31T05:22–05:24Z (authenticated as Account A)
Route: https://in.store.ui.com/in/en/app/faq
Build: 8729322f82

## Endpoints observed
| Method | Endpoint | Query | Result |
|---|---|---|---|
| GET https://in.store.ui.com/in/en/app/faq | `search=PM_TRACE_APPFAQ_9137` | `307` to `https://in.store.ui.com/in/en/faq?search=PM_TRACE_APPFAQ_9137` |

## Testing performed
- Verified the redirect `Location` is fixed to the same-origin web FAQ path.
- Query preservation does not create an open redirect; the host/path are not
  attacker-controlled.
- The 61-byte redirect body contains the destination URL but no additional
  reflection or HTML injection surface.
- No GraphQL request or write is triggered before the redirect.
- `X-Robots-Tag: noindex, noarchive` and the standard CSP/security headers are
  present.

## Status
- No confirmed server-side vulnerability on this route.
