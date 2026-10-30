# Run Summary

- Run: `40967569143` (schedule), decision `preserved`
- Scope: `ui.com` domain only, per `data/targets.txt`
- Time spent: ~5h20m (start `2026-10-29T17:37:02Z`; resumed `22:40:46Z`)
- Confirmed high-impact vulnerabilities: **none**
- Excluded candidate: `VULN-20261029-001` (UISP `/adopt` open redirect)

## Tested surface

- Recon: 77 live subdomains, HTTP probing/header capture, CNAME review for
  dangling-takeover candidates. No obvious takeover candidate.
- account.ui.com: login/register, redirect (`MC`/`Wpe`) and postMessage origin
  checks, JWT algorithm-confusion tests (`UBIC_AUTH` RS256; `alg:none` and
  HS256-with-public-key rejected 401), security headers.
- sso.ui.com: `/api/sso/v1/user/self`, CORS origin reflection (only
  `https://uisp.ui.com` reflected), user/self IDOR probes.
- unifi.ui.com / artifacts.ui.com / nca.ui.com / microsites.ui.com /
  enterprise.svc.ui.com: Account A session; all show “Access Prohibited” and no
  org/console data.
- uisp.ui.com: `/adopt` device-adoption flow, URL/query validation, Cancel
  navigation sink, controller/connection-string flow, mock-controller attempts.
- community.ui.com: anonymous and Account A API probes (users, notifications,
  feed, member groups, content-risk reviews, escalations, admin integration
  users).
- design.ui.com, supplier.ui.com / material.svc.ui.com, training.ui.com
  (Moodle), var.ui.com, directrma.ui.com / rma.ui.com, cloudaccess.svc.ui.com:
  bundle/route review and unauthenticated probing.
- UID Enterprise dev surface: `team.df.ui.com`, `login.uid.df.ui.com`,
  `portal.uid.df.ui.com`, `api-gw.uid.df.ui.com`,
  `core-api-gw.uid.df.ui.com`; public status endpoints and JS route/endpoint
  inventory.
- Store/community/status/blog/careers hosts: platform checks (Shopify,
  Atlassian, CloudFront) and redirects; not deeply tested.

## Confirmed findings

None met the high-impact notification bar. `result/confirmed-vuln.txt` is
empty by design.

`VULN-20261029-001`: UISP `/adopt` Cancel follows an attacker-controlled
`deviceUrl` (http/https/ftp) to an external origin. Confirmed in-browser, but
`javascript:` is rejected by validator.js `isURL`, so impact is limited to an
open redirect. Full report and exclusion rationale in
`result/findings/VULN-20261029-001/report.md`.

## Unresolved

See `result/unresolved.md`. Main blockers:

- Account B signup blocked by reCAPTCHA enterprise; cross-account IDOR/BOLA
  untested.
- UISP connection-string exfiltration lead not provable without a controller
  (no paid trial created).
- UID Enterprise workspace signup gated; no enterprise credentials, so its
  authenticated API/auth surface remains untested.
- CloudFront/SigV4/third-party hosts inaccessible or outside intended app
  surface.

## 2026-10-30 design.ui.com revalidation

- Corrected the design session model: `ui|design-center|sid` + `UBIC_AUTH` +
  AWSALB stickiness, with a persistent cookie jar (`/tmp/jarA.txt`). Prior
  “temp users always 401” note was a harness artifact.
- Role escalation: Account A `PATCH /user/314f82e1-.../role` with
  `{"role":"admin"}` returned 401 `errors.user.access`; `/user/me` still
  `role:"nobody"`.
- Privileged endpoints `GET /user`, `POST /export/user`, `GET /admin/stats`
  returned 401 for Account A.
- Cross-tenant checks with a temp identity were denied: project share/invites
  403, plan copy/update 403, project export of A's project 403, socket room
  joins produced no events (A positive control received
  `PROJECT_UPDATE_SOCKET`).
- Invite flow requires a secret token; temp users cannot confirm/decline.
  A test invite to the owned test inbox was created and removed.
- Export test: A's own `/project/export` token was not retrievable via
  `/export/:exportId` (401); temp B request for A's project denied 403.
- Community writes remain blocked by `VPN_FORBIDDEN` (no content created).
  `CreateQuestionInput.content` is a `ContentInput` block array, not a string.
- No new confirmed finding.
