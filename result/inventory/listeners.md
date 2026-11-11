# postMessage Listener Inventory

| File:line | Origin check | Source check | Status | Notes |
|-----------|--------------|--------------|--------|-------|
| account index-BAUIMHQa.js ~5039212 (Megaphone `$$`) | `origin.startsWith('https://') && AC(origin)` | `event.source===window.parent` | Not Vulnerable | AC accepts any https *.ui.com/*.ubnt.com/*.uisp.com; payload Zod-validated; no sink reached |
| account index-BAUIMHQa.js ~5484083 (MSP IdP setup) | exact `origin===window.location.origin` | none (origin sufficient) | Not Vulnerable | requires `type==='msp-idp-setup-result'` |
| account bundle Sentry dialog | message equality only | same-window | Not Vulnerable | library |
| account bundle axios scheduler | `source===window` + nonce | same-window | Not Vulnerable | library |
| www.ui.com route JS | — | — | Not Vulnerable | no in-scope listener |
