# Route / API Progress — account.ui.com (2026-10-30 07:26Z)

39 routes + catch-all. 21 routes exercised at runtime or source; the remaining
authenticated routes are blocked by missing test-account data, not by lack of an
account. See `routes.md`, `endpoints.md`, and
`server-side/account.ui.com/test-ledger.md`.

## Summary

| Category | Count | Status |
|----------|-------|--------|
| Public / token routes tested | 15 | tested or blocked-recaptcha |
| Authenticated routes exercised | 21 | tested (incl. `/`, `/account`, `/security`, `/billing`, `/subscriptions`, `/invoices`, `/requests`) |
| Authenticated, data-blocked | 9 | unresolved — no org/payment/subscription/invoice/backup/ticket |
| Authenticated, device/token-blocked | 4 | unresolved — passkey/WebAuthn or reset token required |
| Confirmed findings | 0 | — |
| Unresolved candidates | 2 | CAND-001, CAND-002 |

## Data-blocked routes (backing API evidence)

- `/billing/:orgId` — billing `customers/self` 404 `Customer not found`.
- `/payments` — `payment-methods` 422 `type` required; no customer.
- `/subscriptions/:service`, `/subscriptions/site-support/subscribe`,
  `/subscriptions/cloud-storage/subscribe`, `/subscribe` — no subscriptions.
- `/backups` — no backup/org data; fabric MSP 403 `no_msp_membership`.
- `/invoices/:invoiceId` — invoices 404 `Customer not found`.
- `/requests/:ticketId` — Zendesk tickets empty; comments need captcha.

## Device/token-blocked routes

- `/login/create-passkey` — requires WebAuthn device registration state.
- `/login/change-email`, `/login/change-email/confirm` — require unverified
  account/OTP state not present on verified test accounts.
- `/reset-password/password-reset-uuid/:uuid` — requires a valid reset token.

## Persistent test-account side effects

- Test Account A has `roles/beta` opt-in roles (self-service 204). No removal
  endpoint found; re-create the account for a pristine state.
- All created addresses were deleted; both accounts show `{"addresses":[]}`.
- `passwordless_enabled` restored to `true`; profile/MFA/sessions unchanged.
