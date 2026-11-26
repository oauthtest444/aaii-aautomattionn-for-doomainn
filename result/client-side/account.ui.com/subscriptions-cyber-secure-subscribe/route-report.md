# Route report — `https://account.ui.com/subscriptions/cyber-secure/subscribe`

- Session: 30 (2026-11-26T08:00Z)
- Bundle: `assets/index-CGj0vhTX.js` (7,278,468 B, sha256 `970b5e85…7375`)
- Auth context: test Account A (`tan.tiger5564@maildrop.cc`, L1 session)
- Status: **Not Vulnerable (client-side)**; server-side calls land on `ips.svc.ui.com` /
  `enterprise.svc.ui.com`, which are outside the approved component list → **Out of Scope**

## Discovery
New route in the Session-30 account bundle delta (was not in `index-YVfMK5j0.js`).
Route registered conditionally under feature flag `allowCyberSecureSubscribe` (true):

```
/subscriptions/cyber-secure/subscribe   ->  RKt
```

`RKt` reads the query object, takes `org` as `scopeOrgId`, and wraps the component in
an org context (`F8 orgId`) only when `org` is present.

## Sources (user-controlled)
| Source | File location | Transport | Use |
|---|---|---|---|
| `gateway_hardware_id` / `host_id` | `Y9()` (bundle ~6891139) | URL query | first truthy, trimmed; device lookup against the caller's own owned devices |
| `org` | `RKt` (bundle ~6905466) | URL query | `scopeOrgId`; builds enterprise billing URL |
| `open` | `B$='open'` | URL query | React key/cache-buster only (`crypto.randomUUID()` appended by app) |
| `payment_intent` | `IKt` | URL query | selects recovery UI state |

## Sinks / data flow
- No app-level HTML sink is reached. `dangerouslySetInnerHTML` count is unchanged
  (18) vs the previous bundle; none consume these params.
- `gateway_hardware_id`/`host_id` → `n$()` owned-device list → `CKt.find()` →
  `ips.svc.ui.com` (out of scope). Client-side guard requires the device to be in the
  caller's own device list (`h = p && !loading && !match` → "Gateway not available").
- `org` → `enterprise.svc.ui.com/api/v1/organizations/{org}/billing/v2/customers/self/...`
  (out of scope). Server rejected the marker value with
  `400 {"code":"invalid_organization_id"}`; `/api/v1/organizations?status=active`
  returned `{"data":[]}` for A (no org).
- `open` is only used as a React `key` (`${gateway}:${open}`); not rendered.
- In-scope call caused by the route: `GET cloudaccess.svc.ui.com/api/v1/sites?includeStatistics=true`
  → `200 {"data":[],"nextToken":null}` (A owns no sites).

## Runtime evidence
- Unauth: `302 -> /login?innerRedirect=<percent-encoded route+query>` (safe internal path).
- Auth A: page renders `Gateway not available` / "We couldn't find a gateway eligible
  for CyberSecure…"; body text does not contain the marker params.
- Marker reflection check with `gateway_hardware_id=PMREFLECT1&host_id=PMREFLECT2&org=PMREFLECT3&open=PMREFLECT4`:
  no app DOM text/HTML reflection. The only attribute containing the markers is the
  third-party Stripe iframe `src` fragment (`js.stripe.com/v3/m-outer-…#url=<page-url>`),
  which is expected Stripe.js behavior and outside scope.

## Conclusion
- Client-side: **Not Vulnerable** — no DOM XSS, open redirect, CSTI, prototype pollution,
  or unsafe postMessage introduced by the route.
- Server-side: **Out of Scope / Blocked** — the sensitive flow is implemented on
  `ips.svc.ui.com` / `enterprise.svc.ui.com` (not approved components) and requires an
  owned eligible gateway / org that the test accounts do not have. No scope expansion
  was performed.
