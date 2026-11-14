# cloudaccess.svc.ui.com — invitations / confirm-invitation (Session 10)

**Asset:** `https://cloudaccess.svc.ui.com` (approved `cloudaccess.svc.ui.com` component).
**Auth model:** cookie is NOT accepted for `/api/v1/*` and `/invitations`; requests must
be AWS SigV4-signed (`execute-api`, `us-west-2`). `POST /create-credentials` (cookie
`UBIC_AUTH`) returns STS credentials (`accessKeyId`, `secretKey`, `sessionToken`,
`expiration`, `roles`) for the session identity, which can then sign requests.

## Observed endpoints (test Account A)
| Method | Path | Result |
|--------|------|--------|
| POST | `/create-credentials` | 200 STS creds (us-west-2) — also the CORS credential-theft primitive |
| GET | `/invitations?type=all` | 200 `[]` (no pending invitations). Note: `/api/v1/invitations` -> 404 |
| POST | `/confirm-invitation` | 400 `DEVICE_OFFLINE` for a bogus device regardless of `role` |
| GET | `/api/v1/hosts` | 200 `{"data":[],"nextToken":null}` |
| GET | `/devices` | 200 `[]` |
| GET | `/sites` | 200 `{"sites":[],"nextToken":null}` |

## confirm-invitation
Request body (from SPA module 567899): `{"deviceId","verificationToken","role"}` where
`role` is `admin` | `owner` | unset. The `role` value is controlled by the invitee in
the deep-link flow (`?role=`), see `result/findings/VULN-20261114-001/`.

Probes with an invalid `deviceId`/`verificationToken` always returned
`{"code":"DEVICE_OFFLINE",...}` irrespective of `role` (`owner`, `admin`, `viewer`,
omitted), so server-side role handling could not be characterized. The test account has
no console/invitation with which to exercise a real acceptance; creating one is outside
policy. Recorded as Unresolved.

## Security notes
- No IDOR was reachable: all list endpoints are scoped to the authenticated identity and
  returned empty data for the no-console test account.
- SigV4 credentials are minted for the session identity; they are not recorded here.
