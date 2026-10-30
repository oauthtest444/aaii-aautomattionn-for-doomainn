# Flows — site-default-dashboard

| ID | Source | Transform | Sink | Status | Evidence |
|----|--------|-----------|------|--------|----------|
| F-01 | `redirect` query param | `decodeURIComponent`; reject if contains `/fatal/` | `$location.url()` then `location.reload()` | Not Vulnerable | Authenticated `?redirect=https://example.com/` landed on `/6.1.71.0/unifi/`; `$location` cannot change origin |
| F-02 | `redirect` query param (OAuth route) | `decodeURIComponent`; reject `/fatal/` | `$location.url()` | Not Vulnerable (same code pattern; route unreachable) | Static analysis |
| F-03 | `email` + `t` query params on `account/verify` | none | `POST /api/verify` via WebRTC; redirect on success | Unresolved | Bootstrap fails before branch; no request issued |
| F-04 | `:sso_token` path param | unknown resolver | SSO login / API | Unresolved | Dummy token produced `$stateChangeError` after `deviceId required`; no DOM sink |
| F-05 | `:error` path param | none | `{{fatalCtrl.errorCode}}` + translate key | Not Vulnerable / Out of Scope | Redirected to `unifi.ubnt.com`; Angular interpolation escapes |
| F-06 | `message` event data | none | global listener dispatch | Not Vulnerable (no sensitive listener reached) | Static analysis; listener requires controller preview route |
| F-07 | `message` event `{appLoaded:true}` | none | `postMessage(model, "*")` to own iframe | Not Vulnerable | Static analysis |
