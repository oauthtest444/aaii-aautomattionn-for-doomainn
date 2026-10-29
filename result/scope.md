# Scope and Authorization

## Target Entries
- `data/targets.txt`: `duel.com` (domain-only target).

## User Instructions (verbatim intent)
- Identify valid/interesting subdomains of duel.com; save them to a text file; test each discovered subdomain individually.
- For each subdomain, discover UI routes and API endpoints, then test client-side and server-side vulnerabilities.
- Create two test accounts on the target subdomain and save credentials for testing; if account creation is impossible, test unauthenticated endpoints only.
- Do not ask questions; decide independently; focus on valid, impactful, reportable vulnerabilities.
- Authorized scope per operator note: `duel.com` and its subdomains.

## Authorization Source / Assumptions
- `data/targets.txt` is the authorization source. Subdomains of duel.com are explicitly authorized by the operator note.
- No third-party origins, sibling domains, CDNs, or acquisition systems are tested. Origin assets required to exercise in-scope routes (same-origin JS/API) are in scope.
- Program policy not provided beyond `data/`; stricter safety rules from `skills/AGENT.md` apply. No destructive/DoS/brute-force/social-engineering testing.

## In-Scope Components (discovered)
- https://duel.com (main SPA, API under /api/v2)
- https://pvp.duel.com (PvP games SPA)
- https://uat-us-pvp.duel.com (same PvP app)
- https://sp.duel.com (public S3-style bucket `duel-snowplow-js`)
- https://avatars.duel.com
- https://sports-proxy.duel.com
- https://clips.duel.com
- https://roulette.duel.com
- https://jobs.duel.com
- https://staging.duel.com / uat.duel.com / dev.duel.com (behind Cloudflare Access - no credentials; recorded unresolved)
- https://snowplow-collector.duel.com, https://track.mail.duel.com

## Out of Scope
- Third-party hosts referenced by the app (clarity.ms, cookiebot.com, google-analytics, intercom, braze, etc.) are NOT tested.
- Non-duel sibling domains (duel.ag, duel.net, duel.vip, duelnews.com, cprx.online, seondnsresolve.com, etc.) are NOT in scope unless independently discovered as duel.com subdomains.
- Cloudflare infrastructure endpoints are not tested.

## Program Restrictions
- Gambling site; do not create real-money deposits or wagers. Test-owned only.
- No destructive or high-volume testing.
