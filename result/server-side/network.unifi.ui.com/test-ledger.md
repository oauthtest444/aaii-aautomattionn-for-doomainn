# Server-Side Test Ledger

| # | Endpoint | Method | Auth | Bug class | Baseline | Test | Result | Status |
|---|----------|--------|------|-----------|----------|------|--------|--------|
| 1 | `/api/self` | GET | unauth | info/auth | n/a | fetch | 502 awselb | Unresolved |
| 2 | `/status` | GET | unauth | info | n/a | fetch | 502 awselb | Unresolved |
| 3 | `/v2/api/self` | GET | unauth | info | n/a | fetch | 502 awselb | Unresolved |
| 4 | `/api/sso/v1/user/self` | GET | unauth | auth boundary | n/a | fetch | 502 awselb | Unresolved |
| 5 | `/api/airos/v1/unifi/devices/` | GET | unauth | info | n/a | fetch | 502 awselb | Unresolved |
| 6 | controller create/edit endpoints | POST/PATCH | user | mass assignment | none | not reachable | no controller session | Unresolved |
| 7 | controller object endpoints | GET/PATCH/DELETE | user A/B | IDOR/BOLA | none | not reachable | no controller objects | Unresolved |
| 8 | controller admin endpoints | POST | admin | BAC | none | not reachable | no admin/controller context | Unresolved |

No server-side vulnerability was confirmed. A status code alone was not treated
as a finding.
