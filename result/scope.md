# Scope

## Target entries (from `data/targets.txt`)
- Domain-only target: `ui.com`
- Operator note references account subdomain: `https://account.ui.com/login`
- Credentials available for `https://account.ui.com/login` (Test Account A and B).

## Classification
- Domain-only target: `ui.com` and its explicitly approved components (same-origin
  hosts discovered within the ui.com domain, e.g. `www.ui.com`, `account.ui.com`).
- No URL list provided.

## User Instructions (restated)
- Discover all interesting and unique UI routes and API endpoints on the target.
- Visit each UI route one-by-one with Chrome MCP; wait 5-10s for JS to load.
- Test both client-side and server-side bugs per route, completing one route fully
  (test + document) before moving to the next.
- Maintain a progress report: total routes, fully tested, pending, which are done.
- Before testing each route, read client-side and server-side skill files and
  follow them exactly.
- Per-route report: client-side findings, server-side findings, route completion status.
- Create two test accounts on the target subdomain and save credentials for
  testing; if account creation is not possible, test unauthenticated endpoints only.
- Do not ask questions; make reasonable decisions.
- Final goal: identify valid, impactful, reportable vulnerabilities.
- If a confirmed vuln is found, send a Discord notification to the provided webhook.

## Authorization source / assumptions
- Authorization is asserted by the repository's `data/` scope. Only assets under
  the `ui.com` domain that are explicitly part of the target are tested.
- Test accounts in `creds/test-account.txt` are disposable/public test accounts.

## In-scope components
- `ui.com` (apex, redirects to www)
- `www.ui.com`
- `account.ui.com` (login/account flows; explicitly referenced in operator note and creds)

## Out-of-scope components
- Any third-party origin, CDN, partner, acquisition, or unrelated subdomain not
  explicitly listed. Discovered out-of-scope assets are recorded in
  `result/out-of-scope.txt`.

## Program restrictions
- No destructive/disruptive testing, no DoS/load/stress, no brute force, no mass
  fuzzing, no real-user data access, no social engineering.
- Use only test-owned data/accounts; harmless payloads.
- Respect rate limits and program policy; stricter rule wins.
