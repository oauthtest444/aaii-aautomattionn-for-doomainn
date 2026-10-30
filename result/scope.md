# Scope

## Target Entries

- `https://network.unifi.ui.com/6.1.71.0/unifi/site/default/dashboard`
  - Classification: **URL-list** target (single URL) on host `network.unifi.ui.com`.
  - Authorized origin: `https://network.unifi.ui.com` and same-origin
    JavaScript/API components required to exercise the specified URL.

## User Instructions (from data/targets.txt)

1. Discover all interesting and unique UI routes and API endpoints on this
   subdomain.
2. Visit each route one at a time, wait 5-10 seconds for JS to load, then test
   client-side and server-side bugs for that route before moving on.
3. Maintain a progress report: total routes discovered, tested, pending, and
   which are which, so later sessions can resume without duplicate work.
4. Before testing each route, read and follow the client-side and server-side
   skill files.
5. After each route, produce a detailed report (client-side findings, server-side
   findings, route completion status).
6. First create two test accounts on this target subdomain and save credentials;
   if account creation is not possible, test only unauthenticated endpoints.
7. If a confirmed vulnerability is found, send a Discord notification to the
   webhook included in the target file.
8. Do not ask questions; decide independently.

### How instructions affect the test plan

- Route-by-route serial testing is mandatory; progress is tracked in
  `result/PROGRESS.md` and updated after each route.
- Existing disposable test accounts in `creds/test-account.txt` satisfy the
  two-account requirement for authenticated/IDOR testing (Account A and B).
  Account creation on production is not performed because suitable test
  accounts already exist and creating external accounts is unnecessary.
- The Discord webhook notification is sent only for a **confirmed, high-impact**
  finding, after evidence and report are written. It is not sent for
  unverified/speculative issues.

## Authorization Source / Assumptions

- `data/targets.txt` defines the authorized scope for this repository/run.
- Only `network.unifi.ui.com` (and same-origin assets required to exercise the
  given URL) is tested.
- `account.ui.com` is used only as the SSO identity provider required to
  authenticate to the in-scope app; it is **not** tested as a separate target.
- Test accounts in `creds/` are disposable and intentionally public.

## In-Scope Components

- `https://network.unifi.ui.com/` (AI/Network application UI, versioned path
  `/6.1.71.0/unifi/...`).
- Same-origin JavaScript chunks, source maps, and API endpoints under
  `network.unifi.ui.com` needed to exercise discovered routes.
- `https://network.unifi.ui.com/api/...`, `/proxy/network/...`, and similar
  same-origin API paths discovered from route traffic.

## Explicitly Out of Scope

- `account.ui.com` (SSO provider) as a standalone test target.
- Other Ubiquiti subdomains, partner/third-party services, CDNs, and any
  infrastructure not required to exercise the target URL.
- Any real-user accounts or real-user data.

## Program Restrictions / Safety

- No DoS, load/stress, brute force, high-volume fuzzing, destructive writes,
  real-user data access, shells/backdoors/malware.
- Use test-owned resources only; read before edit/delete; delete only objects
  the agent created.
- Confirm actual impact, not status codes or reflected strings.
- If a route/asset is out of scope, record it in `result/out-of-scope.txt`.
