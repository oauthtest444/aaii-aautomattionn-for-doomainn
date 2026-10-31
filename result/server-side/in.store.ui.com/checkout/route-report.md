# Server-side route report — /in/en/checkout/{id} and /in/en/checkout/{id}/payment

Tested: 2026-10-31T21:35–21:39Z
Build: 8729322f82
Auth: Account A and a fresh isolated Account B context; unauthenticated curl.

## Endpoint behavior
- `GET /in/en/checkout/<valid-uuid>` and `.../payment` (unauthenticated):
  - `307` to `/in/en/checkout/<new-checkout-id>/payment?store=in&language=en&id=<requested-uuid>&key=<new-checkout-secret>`
  - `cache-control: private, no-cache, no-store, max-age=0, must-revalidate`
  - Sets/deletes only checkout cookies for the new/requested checkout; no PII
    in the redirect body or HTML.
- `GET /checkout/not-a-uuid/payment` -> `404` (204 KB generic page).
- `GET /checkout/%2e%2e%2faccount/payment` -> `403` (WAF).
- Valid UUID + malicious `id` query -> `403` (WAF); no reflection observed.

## GraphQL ownership tests (GetCheckout / UpdateCheckout)
Prior note from 2026-10-30 already recorded: valid checkout UUID + wrong secret
returns a NEW checkout cloned with the same items; email/address are not copied.
This run re-tested the cross-account claim hypothesis cleanly:

1. Account A created checkout `77caa6c8-…` and set shipping/billing address
   `123 LeakTest-A Street` / `AliceLeak AccountA` / `+14155552671`.
2. Account B (existing context) called `GetCheckout` with A's id and **A's real
   secret**: returned A's id with B's email and a new secret (ownership transfer
   via the secret capability). Subsequent wrong/no-secret calls then returned the
   same checkout because B already owned it.
3. Clean re-test with a fresh B isolated context (`acctB2`) and a new A checkout
   `5132c695-…` carrying address `987 Secret-Test Lane` / `BobVictim Leak`:
   - B `GetCheckout({id: A_id})` (no secret) -> NEW checkout `a1f2ba5c-…`
     (B's email, no address), not A's checkout.
   - B `GetCheckout({id: A_id, secret: wrong})` -> NEW checkout `de906e9e-…`,
     not A's checkout.
   - B `UpdateCheckout({id: A_id, secret: B_secret, ...})` -> NEW checkout
     `8719a668-…`; A's checkout was unchanged.
   - Re-reading A's checkout as A returned the original `987 Secret-Test Lane`
     address. No cross-account read or write occurred.

## Conclusion
- The earlier "B claimed A's checkout with no/wrong secret" observation was a
  sequencing artifact: the first call used A's valid secret (a bearer
  capability), so later wrong/no-secret calls succeeded only after ownership had
  already transferred. UUID alone does not grant read or write access.
- A valid checkout secret transfers checkout ownership; this is expected
  capability behavior, not an IDOR. No PII disclosure without the secret.
- **Not Vulnerable** for the tested surfaces.
