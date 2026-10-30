# Scope

## Target entries and classification

- `in.store.ui.com` — **domain-only** target (authorized scope is this host and its explicitly approved components).
- Working URL: `https://in.store.ui.com/in/en?s=in&l=en`

## User Instructions (from data/targets.txt)

- Focus on the `in.store.ui.com` subdomain.
- First discover all interesting and unique UI routes and API endpoints using Chrome MCP.
- Then visit each route one by one, waiting 5–10 seconds per route for JavaScript to fully load.
- Test both client-side and server-side bugs for each route.
- Strict one-by-one process: visit route → wait → complete client-side + server-side testing → document → next route.
- Maintain a progress report: total UI routes discovered, fully tested, not yet tested, which are tested, which are pending.
- Before testing each route, follow `skills/client-side-skill.md` and `skills/server-side-skill.md` exactly.
- For each route produce a report covering client-side findings, server-side findings, and route completion status.
- Do not mark a route fully tested until both client-side and server-side testing and documentation are complete.
- Keep the progress report updated after every route for seamless continuation.
- Do not ask questions; decide independently.
- Create two test accounts on this target subdomain and save credentials for testing. If account creation is impossible, test only unauthenticated endpoints.
- On a confirmed vulnerability, send a Discord notification to the operator-provided webhook URL.

## Authorization source / assumptions

- `data/targets.txt` is the authorization source. The authorized asset is `in.store.ui.com` and same-origin components required to exercise its working URL.
- `creds/test-account.txt` references `account.ui.com` and maildrop inboxes; `account.ui.com` is **not** in the authorized scope and must not be tested. Credentials may be used only where they apply to in-scope account flows on `in.store.ui.com`.
- Program restrictions: AGENT.md safety rules apply. No destructive/DoS/brute-force testing, no real-user data, test-owned resources only.

## In-scope components

- `https://in.store.ui.com/*` and same-origin JS/API endpoints required to exercise authorized routes.
- Registration/login flows hosted on `in.store.ui.com` (for creating the requested test accounts).

## Explicitly out-of-scope components

- `account.ui.com` (referenced only in creds; not authorized by data/).
- Other Ubiquiti subdomains, third-party origins, CDNs, payment processors, analytics third parties.
- Any discovered asset not on `in.store.ui.com` — record in `result/out-of-scope.txt`.

## Notification directive

- Operator-provided Discord webhook is an authorized reporting channel for confirmed vulnerabilities only. Never send speculative/unverified items.
