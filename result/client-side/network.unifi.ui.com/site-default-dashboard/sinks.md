# Sinks — site-default-dashboard

See `result/inventory/sinks.md` for the full count table. App-specific sinks
reviewed:

| Sink | Location | Source | Runtime result |
|------|----------|--------|----------------|
| `$location.url(redirect)` | `base.js` BaseLoginController; `app.js` OAuthLoginController | `redirect` param | External `http(s)` redirect discarded; lands on `/6.1.71.0/unifi/` |
| `window.location.href = "https://"+AccountHostname+"/login?redirect="+...` | `base.js` `unifiWebRtcErrorHandler.redirectToAccount` | stored current URL | Fixed host (`account.ui.com`), out of scope |
| `ng-bind-html` in templates | many | translation/model values | No URL-controlled binding reached |
| `postMessage(model, "*")` | `app.js` `unifiIframePostMessage` | bound iframe model | Destination is the directive's own iframe; no attacker control reached |
| `{{fatalCtrl.errorCode}}` | `app.js` fatal template | `:error` param | Angular escapes; route redirects out of scope |

No XSS, CSTI, or dangerous `javascript:` open redirect was confirmed.
