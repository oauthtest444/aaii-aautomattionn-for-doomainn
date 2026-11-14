# unifi.ui.com — invite / invite-network-server deep links

**Asset:** `https://unifi.ui.com/invite/:verificationToken?/:hostId?` and
`https://unifi.ui.com/invite-network-server/:verificationToken?/:hostId?`
(Site Manager SPA, served by the wildcard `*.ui.com` CloudFront/S3 distribution).
**Status:** Done (client-side review). One Unresolved candidate: VULN-20261114-001.
**Date:** 2026-11-14 (Session 10).

## Route behavior
- Both routes are the "accept invitation" landing pages for consoles
  (`InviteConsole -> /invite`) and network servers (`InviteNetserver ->
  /invite-network-server`).
- The component reads `role` directly from the URL query string:
  `(0,Y.vW)(new URLSearchParams(search).get("role") ?? void 0)` (parser accepts only
  `admin`/`owner`).
- On "Accept", the deep-link handler calls
  `acceptFromDeepLink(hostId, invitation.verificationToken, isPc, role)` and finally
  `POST https://cloudaccess.svc.ui.com/confirm-invitation` with body
  `{"deviceId": hostId, "verificationToken": token, "role": role}`.
- The normal (non-deep-link) accept path instead forwards `invitation.data.role`
  (the role assigned by the inviter). The deep-link path is the only place the invitee
  can substitute the role.

## Result
- No XSS/redirect sink in this route: `role` is parsed by a closed enum and only used in
  the accept request and in UI display.
- **Candidate VULN-20261114-001** (Unresolved): if `confirm-invitation` trusts the
  client `role` instead of the invitation record, an invitee can escalate to `owner`.
  Could not be exercised: test accounts have no pending invitation
  (`GET /invitations?type=all -> []`) and creating a console/invitation is outside
  policy.

## Evidence / snippets
- `javascript/snippets/invite-role-flow.txt` — route definitions, query `role` read,
  deep-link forwarding, module 567899 role schema and `confirmInvitation` body.
- `result/findings/VULN-20261114-001/report.md` — full candidate report + probe output.
