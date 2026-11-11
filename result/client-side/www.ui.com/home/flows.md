# Flows — www.ui.com home

| # | Source | Sink | File | Status | Evidence |
|---|--------|------|------|--------|----------|
| 1 | static route config `to` | `window.location.href` (`vg`) | index-D-lz99wc.js | Not Vulnerable | `yg` only wraps config entries starting with `http` |
| 2 | `location.pathname` | language-switch URL (`ad`, same-origin) | index-D-lz99wc.js | Not Vulnerable | host preserved; only pathname/search mutated |

No user-controlled → sensitive-sink flow found.
