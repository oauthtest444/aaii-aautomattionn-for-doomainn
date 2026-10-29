# Subdomains discovered (duel.com)

Sources: operator note + passive DNS/CT (hackertarget, certspotter) + DNS.
Live check performed 2026-10-29.

| Host | Status | Notes |
|---|---|---|
| duel.com | 200 | Main SPA; API /api/v2; Cloudflare challenge passed in browser |
| www.duel.com | 200 | Cloudflare-fronted |
| pvp.duel.com | 200 | PvP games SPA; requires casino launch session |
| uat-us-pvp.duel.com | 200 | Same PvP SPA |
| sp.duel.com | 200 | Public bucket listing `duel-snowplow-js` (S3-compatible) |
| sports-proxy.duel.com | 403 | JSON `{"error":"access blocked"}` |
| clips.duel.com | 403 | XML access denied |
| roulette.duel.com | 404 | nginx |
| avatars.duel.com | 401 | HTML 401 |
| jobs.duel.com | 200 | Contact-only page |
| hiring.duel.com | DNS no response | |
| staging.duel.com | CF Access login | No credentials |
| uat.duel.com | CF Access login | No credentials |
| dev.duel.com | CF Access login | No credentials |
| clips.staging.duel.com | DNS resolves | not tested (staging behind access) |
| snowplow-collector.duel.com | collector | Analytics collector (POST only) |
| track.mail.duel.com | 404 | Mail tracking |
| sp.duel.com bucket keys | see sp-bucket.txt | public listing |
