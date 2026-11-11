# Sinks — www.ui.com home

Regexes from `skills/client-side-skill.md` Phase 2 were run on the route JS.

| Sink | Location | Data | Status | Notes |
|------|----------|------|--------|-------|
| `window.location.href = e` | `index-D-lz99wc.js` (`vg` component) | static route-config `to` | Not Vulnerable | only `to` values from `yg` config that start with `http`; not user-controlled |
| `window.location.assign/replace` | index bundle | router paths | Not Vulnerable | React-router internal navigation; same-origin |
| `dangerouslySetInnerHTML` | header site-map / menu descriptions | `formatMessage(description)` from static menu/i18n config | Not Vulnerable | strings originate from bundled i18n JSON and static menu config, not URL/API input |
| `document.createElement('script')` | none (app) | — | — | no app use |
| `eval` / `new Function` / `document.write` / `insertAdjacentHTML` | none | — | — | not present |

## Conclusion
No source-to-sink flow is reachable from attacker-controlled input on this route.
No confirmed client-side vulnerability.
