# Route report: product aliases

Routes:
- `/in/en/category/{category}/products/{product}`
- `/in/en/collections/{collection}/products/{product}`
- `/in/en/category/{category}/collections/{collection}/products/{product}`

Status: Not Vulnerable — 2026-10-31T05:52Z
Auth context: unauthenticated / Account A.

## Test
- `/in/en/category/all-wifi/products/uap-ac-hd` -> 200, renders UAP-AC-HD (same product view already tested).
- `/in/en/collections/top10-cables/products/unifi-ethernet-patch-cable-with-bendable-booted-rj45` -> 200.
- `/in/en/category/all-wifi/collections/top10-cables/products/unifi-ethernet-patch-cable-with-bendable-booted-rj45` -> 200.
- All three are aliases of the shared product/category/collection components already tested in `result/client-side/in.store.ui.com/products-uap-ac-hd/` and `result/client-side/in.store.ui.com/category-all-wifi/` (query params only reach `__NEXT_DATA__`; sinks use server product/CMS content; public GraphQL catalog reads only).
- No new API operation, write, or user-controlled sink is introduced by the alias path segments.

## Completion
- Client-side: complete (shared component)
- Server-side: complete (public catalog only)
- Final: Not Vulnerable

Confirmed-vuln.txt: excluded — no confirmed high-impact finding.
