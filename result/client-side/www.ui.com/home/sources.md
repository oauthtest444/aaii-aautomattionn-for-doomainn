# Sources — www.ui.com home

Regexes from `skills/client-side-skill.md` Phase 1 were run on the route JS.

## Result: no URL/query-driven DOM source on this route
- No `URLSearchParams` construction from `location.*`.
- No `location.search` / `location.hash` reads feeding DOM sinks.
- No `document.referrer` use.
- The only `location.*` reads are the router (`window.location.pathname` for route
  matching) and the language-switcher URL builder `ad()`:
  - `ad=(e,t,n)=>{ let r=new URL(n||window.location.href); ... r.pathname=Ln(o); r.searchParams.set('l',t); return r.toString().replace(r.origin,'') }`
  - Only pathname segments are reused; host/scheme are preserved and the returned
    value is same-origin. Not an external-navigation source.
- `vg=({to:e})=>(useEffect(()=>window.location.href=e),[e])` is fed only from the static
  route config (`yg` maps config entries where `to.startsWith('http')`). `to` is not
  derived from user input.

## Language / region params
- `l`, `s`, `region` are used to build same-origin language URLs. No open-redirect sink.
