# Sources — site-default-dashboard

Sources identified in the route-related JavaScript and startup path.

| Source | Transport | Location | Reachable at runtime? | Notes |
|--------|-----------|----------|-----------------------|-------|
| `redirect` query/state param | URL query | `base.js` BaseLoginController `$stateParams.redirect` | No (login route not reached; authenticated visit discards it) | `decodeURIComponent` then `$location.url()`; only rejects `/fatal/` |
| `redirect` query param (OAuth) | URL query | `app.js` OAuthLoginController `$stateParams.redirect` | No | Same `$location.url()` sink |
| `email`, `t` query params | URL query | `index.js` `URLSearchParams`; path must include `account/verify` | No (bootstrap fails first) | Would POST `{email, token}` to `/api/verify` |
| `:sso_token`, `:ubic_uuid`, `:site_id` | URL path | `app.js` `manage.ssologin` state / `resolveSsoLogin` | No (deviceId required) | Tokens in path; no DOM reflection observed |
| `:error` path param | URL path | `app.js` `manage.fatal` / FatalController | Out of scope redirect | Interpolated via `{{ }}` (auto-escaped) |
| `location.href` / `location.pathname` | Browser location | `index.js` startup; `base.js` webrtc error handler | Bootstrapping only | Used for host/site rewrite and fixed redirects |
| `window.onmessage` data | postMessage | `app.js` module 1448 | No listener with sensitive action reached | No origin/source validation |
| postMessage `event.data` (`appLoaded`) | postMessage | `app.js` module 494 | No | Triggers sending model to own iframe |

No attacker-controlled source was observed reaching a sensitive sink at runtime
because bootstrap fails before routing.
