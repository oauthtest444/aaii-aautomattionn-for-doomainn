# Flow Inventory

| ID | Source | Transform | Sink | Status | Evidence |
|----|--------|-----------|------|--------|----------|
| F-01 | `redirect` query param | `decodeURIComponent`; reject `/fatal/` | `$location.url()` | Not Vulnerable | `result/findings/VULN-20261030-004/` |
| F-02 | `redirect` query param (OAuth) | same pattern | `$location.url()` | Not Vulnerable | `result/findings/VULN-20261030-004/` |
| F-03 | `email` + `t` query params | none | `POST /api/verify` (WebRTC) | Unresolved | `result/unresolved.md` |
| F-04 | `sso_token`/`ubic_uuid`/`site_id` path params | resolver | SSO login/API | Unresolved | `result/unresolved.md` |
| F-05 | `error` path param | none | `{{fatalCtrl.errorCode}}` | Out of Scope | `result/out-of-scope.txt` |
| F-06 | `window` message `event.data` | none | listener dispatch | Unresolved | `result/findings/VULN-20261030-003/` |
| F-07 | `window` message `{appLoaded:true}` | none | `postMessage(model,"*")` | Unresolved | `result/findings/VULN-20261030-003/` |
| F-08 | full verify URL | GA page-location capture | Google Analytics `dl` param | Unresolved | `result/findings/VULN-20261030-002/` |
