# Server-side route report — /in/en/app/search

Tested: 2026-10-31T05:25Z (authenticated as Account A)
Route: https://in.store.ui.com/in/en/app/search
Build: 8729322f82

## Endpoints observed
| Method | Endpoint | Query | Result |
|---|---|---|---|
| GET https://in.store.ui.com/in/en/app/search | `search=PM_TRACE_APPSEARCH_9137` | `307` to `https://in.store.ui.com/in/en/search?search=PM_TRACE_APPSEARCH_9137` |

## Testing performed
- Verified the redirect host/path are fixed to the in-scope same-origin web
  search page.
- The marker is preserved only as the destination query string; the 67-byte
  redirect body contains no additional reflection or HTML sink.
- No GraphQL write or app-specific operation is issued before the redirect.

## Status
- No confirmed server-side vulnerability on this route.
