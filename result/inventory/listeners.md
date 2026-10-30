# postMessage Listener Inventory — account.ui.com

Offsets are character offsets in `index-D5t7M7xo.js`.

| # | Offset | Handler | Origin check | Source check | Schema | Sink | Status |
|---|--------|---------|--------------|--------------|--------|------|--------|
| 1 | @5035298 | announcement / `org.select` megaphone bridge (`t1`) | `$he(e.origin)` = `https://` + registrable domain in `ubnt.com/ui.com/uisp.com` | `e.source === window.parent` | zod `Jhe`, result via `oge(e)` | React state callback (no HTML) | Not Vulnerable (allowlist + parent + schema) |
| 2 | @5476297 | MSP IdP setup result | `e.origin !== window.location.origin` -> ignore | none | `data.type === 'msp-idp-setup-result'`; reads `status`,`idpId`,`message` | toast text (`K`/values), no HTML | Not Vulnerable (same-origin only; React escapes) |
| 3 | @134407 | Sentry report dialog | Sentry-internal (`sentry-trace` handling) | n/a | n/a | Sentry internals | Not applicable |
| 4 | @549693 | axios async scheduler | `n === ky` (internal MessageChannel) | n/a | n/a | internal | Not applicable |

## Senders
- `@2595811` (`Yw` bridge): `window.parent.postMessage(t, computedOrigin)`; origin computed by `nge()` (not `*`).
- `@6516123` (MSP result page): `window.opener.postMessage(e, window.location.origin)` then `window.close()`; falls back to `location.replace('/#profile')`.
- `@549800` axios scheduler: `postMessage(e, '*')` internal MessageChannel (not page-controlled).

## Runtime test
- `/msp/idp/setup-result?status=error&message=<payload>` was source-analyzed; it
  posts to an opener. Without a same-origin opener it does not deliver to any
  victim tab. No cross-window delivery primitive found.
- `/security/suspicious/confirm?token=INVALID&decision=yes` did NOT post a
  confirm call; only `inspect` 400.
