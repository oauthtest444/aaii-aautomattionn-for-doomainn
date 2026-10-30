# Scope

## Target Entries

| Entry | Type | In-scope components |
|-------|------|---------------------|
| account.ui.com | domain-only | account.ui.com and same-origin components needed to exercise its routes |

## User Instructions (from data/targets.txt)

- Discover interesting/unique UI routes and API endpoints on account.ui.com using Chrome MCP.
- Visit each route one by one; wait 5-10 seconds per route for JS to load.
- For each route perform complete client-side then server-side testing, document, then move on.
- Maintain a progress report (total routes, tested, pending, which).
- Read the client-side and server-side skill files before testing each route.
- Create two test accounts on the target and save credentials; if impossible, test unauthenticated endpoints only.
- If a confirmed vulnerability is found, send a Discord notification to the webhook in the note.
- Do not ask questions; decide independently.

## Authorization Source / Assumptions

- `data/targets.txt` authorizes account.ui.com and its explicitly approved components.
- Same-origin JS and API endpoints required to exercise in-scope routes are in scope.
- No sibling/related subdomains outside account.ui.com are in scope.
- Credentials in `creds/` reference console.byteplus.com; that host is NOT in scope, so those accounts are not used against it. Account creation will be attempted only on account.ui.com if its own flow permits.

## Out-of-Scope

- All other subdomains of ui.com, console.byteplus.com, third-party/CDN origins not required to render account.ui.com routes.
- Real user data, destructive testing, DoS, brute force.

## Program Restrictions

- Follow AGENT.md Sections 2 and 9: no destructive tests, test-owned data only, practical evidence only.
- Discord notification only after a genuinely confirmed finding; never fabricate.
