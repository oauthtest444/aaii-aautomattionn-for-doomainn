# Scope

## Target entries and classification

- `ui.com` — domain-only target (from `data/targets.txt`).
- Operator notes explicitly request: enumerate valid/interesting subdomains, save them to a text file, then test each discovered subdomain individually for UI routes, API endpoints, client-side and server-side issues.

## User Instructions

Restated from `data/targets.txt`:

1. Identify valid and potentially interesting subdomains of ui.com and save them in a text file.
2. Test each discovered subdomain individually.
3. For each subdomain, discover all UI routes and API endpoints first.
4. Then test for both client-side and server-side vulnerabilities.
5. Do not ask questions; make reasonable independent decisions.
6. First try to create two test accounts on the target subdomain and save their credentials in a file for testing. If account creation is not possible, test only unauthenticated endpoints.
7. Final goal: identify valid, impactful, reportable vulnerabilities.

These notes are followed only within the safe, authorized interpretation below.

## Authorization source / assumptions

- Authorized scope comes from `data/targets.txt` (`ui.com`).
- Subdomains of `ui.com` are treated as explicitly approved components because the operator notes explicitly instruct subdomain discovery and per-subdomain testing.
- Scope does NOT extend to sibling/registrable domains, third-party services, CDNs, partner systems, or unrelated origins. Any discovered asset not under `ui.com` is recorded in `result/out-of-scope.txt` and not tested.
- `creds/test-account.txt` contains BytePlus console credentials for `console.byteplus.com`, which is NOT in `data/`. They are out of scope and are not used on ui.com.

## In-scope components

- `ui.com` and discovered subdomains resolving under `ui.com`, subject to the safety rules in `skills/AGENT.md` Section 2.

## Explicitly out-of-scope components

- Any non-`ui.com` domain (including byteplus.com and console.byteplus.com).
- Third-party CDNs/analytics/payment providers and their origins.
- Anything requiring destructive testing, real-user data, DoS, brute force, or high-volume fuzzing.

## Program restrictions discovered

- No formal program policy file was provided in `data/` or `vulnebleti/`.
- Binding safety restrictions from `skills/AGENT.md`: test-owned data only, no destructive/disruptive tests, respect rate limits, no real-user harm, no account creation where prohibited, practical evidence only.
- Account creation will only be attempted through normal public signup using disposable test identities if such a flow exists and behaves safely; otherwise unauthenticated testing only.
