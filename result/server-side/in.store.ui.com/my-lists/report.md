# Route report: /in/en/my-lists (+ /my-lists/{listId}, /app/my-lists...)

Status: Not Vulnerable (authorization controls held) — 2026-10-30
Auth contexts: user A (customer 95b6d3ee-...), user B (overrated.chinchilla337).

## API surface (GraphQL)
- `GetWishlists(input: WishlistsInput!)` — `{storeId}`.
- `GetWishlist(input: WishlistInput!)` — `{id}`.
- `CreateWishlist(input: CreateWishlistInput!)` — `{storeId,name,isPublic}`.
- `UpdateWishlist(input: UpdateWishlistInput!)` — `{id,name,...}`.
- `DeleteWishlist(input: DeleteWishlistInput!)` — `{id}` (scalar result).
- `AddWishlistItem(input: AddWishlistItemInput!)` — `{wishlistIds:[...],sku,quantity,linkedItems}`.
- `AddWishlistItems(input: AddWishlistItemsInput!)` — `{wishlistIds:[...],items:[{sku,quantity,linkedItems}]}`.
- `RemoveWishlistItem(input: RemoveWishlistItemInput!)` — `{wishlistIds,sku,...}`.
- `GetWishlistMembership(input: WishlistMembershipInput!)`.

## Test-owned resources
- List A: `d4f69092-bcef-4406-9f7c-dd41001fc645` ("IDOR-Test-List", private), created by A, deleted by A after testing (state restored).

## Tests and results (as user B against A's list)
1. `GetWishlists({storeId:"in"})` => `[]` (A's private list not listed). Not Vulnerable.
2. `GetWishlist({id:A})` => `{"wishlist":null}`; no data disclosed. Not Vulnerable.
3. `UpdateWishlist({id:A,name:"HACKED"})` => `FORBIDDEN "Not authorized to modify this wishlist"`. Not Vulnerable.
4. `DeleteWishlist({id:A})` => `FORBIDDEN "Not authorized to delete this wishlist"`. Not Vulnerable.
5. `AddWishlistItem({wishlistIds:[A],sku:"UDR-EU"})` => `FORBIDDEN "Not authorized to modify this wishlist"`. Not Vulnerable.
6. `AddWishlistItems({wishlistIds:[A],items:[...]})` => same `FORBIDDEN`. Not Vulnerable.
7. Positive control: A created and deleted own list successfully, so the operation shapes and sessions are valid.

## Notes
- `DeleteWishlist` returns a scalar; selecting a subfield produces a generic `400 INTERNAL_SERVER_ERROR` that can mask the authz error. With the correct selection, authz is enforced. No security impact.

## Conclusion
Wishlist read/write/delete authorization is enforced per customer. No IDOR/BAC found.

Confirmed-vuln.txt: excluded — no confirmed high-impact finding.
