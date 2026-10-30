# Sink Inventory (static analysis, route-related JS)

Scope: the seven same-origin bundles listed in `inventory/javascript.md`.
Counts are raw matches across the bundles and include third-party libraries.

| Sink | Count | Notes / reachability |
|------|-------|----------------------|
| `innerHTML` | 45 | Mostly vendor/library + template strings; no user-controlled source reached at runtime |
| `outerHTML` | 5 | Same |
| `insertAdjacentHTML` | 0 | - |
| `document.write` | 0 | - |
| `eval(` | 88 | AngularJS/lodash/vendor; no user-controlled input reached at runtime |
| `new Function` | 10 | Vendor/library |
| `$sce.trustAsHtml` / `trustAsHtml` | 1 | `pascalprecht.translate` sanitization strategy; not attacker-controlled |
| `ng-bind-html` | 40 | Bindings use translation strings, model fields, and icons; no URL-controlled value reached |
| `srcdoc` | 3 | Library/preview templates; unreachable |
| `document.createElement("iframe"/"script")` | 1 / 8 | Vendor/dynamic loader |
| `location.href =` | multiple | See `flows.md`; redirect targets are fixed hosts or Angular `$location` |

## Notable source/sink candidates reviewed

1. **Login redirect** — `base.js` `BaseLoginController.login()`:
   `redirect = decodeURIComponent($stateParams.redirect)` then
   `$location.url(redirect)`; only rejects strings containing `/fatal/`.
   - Tested with `?redirect=https://example.com/` while authenticated.
   - Result: app navigated to `/6.1.71.0/unifi/` (redirect discarded), no
     external navigation. `$location.url()` cannot change origin.
   - Status: Not Vulnerable (open redirect not observed).

2. **OAuth login redirect** — `app.js` `OAuthLoginController.login()` uses the
   same `$location.url()` pattern. Same conclusion.

3. **`manage.ssologin` path parameters** — `:sso_token/:ubic_uuid/:site_id`.
   Dummy values produced a `$stateChangeError` after `deviceId required`; no
   reflection into DOM. Unresolved due to controller requirement.

4. **`unifiIframePostMessage`** — model is posted with target origin `"*"` to the
   directive's own iframe. The iframe URL comes from
   `getPortalPreviewUrl()` (hotspot portal preview), which requires controller
   settings and admin access. Unresolved.

5. **Fatal error template** — `{{fatalCtrl.errorCode}}` is interpolated
   (Angular auto-escapes). The `/fatal/:error` route redirected to
   `unifi.ubnt.com` (out of scope) during testing. Not Vulnerable in observed
   behavior.
