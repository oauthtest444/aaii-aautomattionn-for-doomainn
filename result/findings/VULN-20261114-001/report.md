# VULN-20261114-001 — Client-controlled `role` sent to `confirm-invitation` (candidate, Unresolved)

**Status:** Unresolved (candidate) — the client-controlled role is confirmed in code and
is transmitted to the server, but it could not be exercised end-to-end because the test
accounts have no pending console/netserver invitation.
**Type:** Potential broken access control / mass assignment (role escalation) on
accepting an invitation.
**Affected assets / scope:** `unifi.ui.com` Site Manager SPA (served on wildcard
`*.ui.com`) and `https://cloudaccess.svc.ui.com/confirm-invitation` (approved
`cloudaccess.svc.ui.com` component).
**Date tested:** 2026-11-14T13:40Z
**Auth context:** authenticated test Account A (ui.com SSO), AWS SigV4 STS credentials
minted by `POST /create-credentials` for the same test account.

## Summary
The "accept invitation" deep-link route
`/:InviteConsole|InviteNetserver/:verificationToken?/:hostId?` reads a `role` value
directly from the URL query string and forwards it, unmodified, into the
`POST https://cloudaccess.svc.ui.com/confirm-invitation` request body:

```
role (from ?role=owner)  ->  acceptFromDeepLink(hostId, verificationToken, isPc, role)
                         ->  M(...) -> (0,E.QA)(deviceId, verificationToken, role)
                         ->  POST /confirm-invitation
                             {"deviceId":..., "verificationToken":..., "role": role}
```

The role parser accepts only `admin` or `owner` (`d.k5(["admin","owner"]).optional()`).
The normal (non-deep-link) accept path sends the role that the inviter assigned to the
invitation; the deep-link path lets the invitee substitute `admin`/`owner` before the
accept request is sent. If the server trusts the client-supplied value instead of the
role stored on the invitation record, an invitee granted `admin` (or any lower role)
can accept the invitation and become `owner` of the console/netserver — a horizontal
privilege escalation across the organization's console fleet.

## Why this is Unresolved, not Confirmed
The test accounts (`tan.tiger5564@maildrop.cc` / `overrated.chinchilla337@maildrop.cc`)
have no consoles, sites, hosts, or pending invitations:
- `GET https://cloudaccess.svc.ui.com/invitations?type=all` (SigV4) -> `200 []`
- `GET /api/v1/hosts` -> `{"data":[]}`; `GET /devices` -> `[]`; `GET /sites` -> `{"sites":[]}`

Without a valid `deviceId` + `verificationToken`, the server rejects the request before
the role is evaluated, and the test account cannot create a console or invitation
(creating real infrastructure is out of policy for this engagement). Probes of
`POST /confirm-invitation` with a bogus token always returned `DEVICE_OFFLINE`,
regardless of the supplied role:

```
owner  -> 400 DEVICE_OFFLINE
admin  -> 400 DEVICE_OFFLINE
viewer -> 400 DEVICE_OFFLINE
(no role) -> 400 DEVICE_OFFLINE
```

This neither proves nor disproves server-side trust of the client `role`. Marked
**Unresolved** per AGENT.md §9.

## Evidence
- `evidence/confirm-invitation-code.txt` — `main-7` module `567899`: role schema,
  `fetchInvitations`, and `confirmInvitation` (`POST /confirm-invitation` body includes
  `role`).
- `evidence/deeplink-role-source.txt` — `main-2` component: `role` read from
  `new URLSearchParams(search).get("role")` and passed into `acceptFromDeepLink`.
- `evidence/confirm-invitation-probe.txt` — SigV4 probes showing the endpoint is
  reachable and rejects the bogus device before role handling.

## Reproduction (when an invitation is available)
1. Authenticate as the invited test user.
2. Open `https://unifi.ui.com/InviteConsole/<verificationToken>/<hostId>?role=owner`
   (or the `InviteNetserver` equivalent) instead of the plain invite link.
3. In DevTools, observe `POST https://cloudaccess.svc.ui.com/confirm-invitation` with
   body `{"deviceId":"<hostId>","verificationToken":"<token>","role":"owner"}`.
4. After acceptance, read the resulting membership role for the console. If it is
   `owner` while the invitation was created with a lower role, privilege escalation is
   confirmed.

## Remediation
- Derive the accepted role server-side from the invitation record; ignore any
  `role` supplied by the client in `confirm-invitation`.
- Remove the `role` query parameter from the deep-link acceptance path (it is only
  needed for UI display/polling).
- Add server-side authorization checks that the accepting user matches the invitation's
  target email and that the requested role is not higher than the invited role.

## confirmed-vuln.txt
Excluded — Unresolved candidate, not practically confirmed (no invitation available).
