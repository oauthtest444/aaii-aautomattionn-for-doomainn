# Session 16 — Server-side ledger (2026-11-18)

Auth context: disposable test Accounts A/B (`creds/test-account.txt`). `UBIC_AUTH`
recovered from prior session logs (RS256, exp ~2026-12-15) and verified with
`GET /api/sso/v1/user/self` (A `tan.tiger5564@maildrop.cc`, B
`overrated.chinchilla337@maildrop.cc`).

Bundle state: `account.ui.com` `index-CYDY7PBp.js` unchanged
(sha256 `14c9788e...2d14a1b`); `www.ui.com` `index-BfxHSOgp.js` unchanged
(`0722ab3b...eae58f9`); Site Manager build rotated to
`main-0.2678141fb293ea0d.js` (`5bccf419...3993a1b`) / `main-7.89817c7552da11f1.js`
(`c9b7ad08...c61083`), audited below.

## New / retested endpoint results

| Method | Path | Host | Auth | Status | Result / notes | Duplicate |
|--------|------|------|------|--------|----------------|-----------|
| GET | /api/sso/v1/user/self/roles | sso | L1 | 200 | Returns fixed beta role list (`Beta - EdgeRouter`, `Beta - airCRM`, `Beta - airFiber`, `Beta - mFi`, `Beta Testers`, `Beta-RocketAC`) for both A and B; not privilege-bearing | new |
| POST | /api/sso/v1/user/self/roles | sso | L1 | 405 | `METHOD_NOT_ALLOWED`; roles are not client-writable via this path | new |
| POST | /api/sso/v1/address/validator | sso | **none** | 204/400 | Unauthenticated address validation: valid US address → `204`; missing country → `country: required`; `ZZ` → invalid country; overlong postal code → `max 10 chars`. No reflection, injection, or object access | new |
| OPTIONS | /api/sso/v1/address/validator | sso | none | 200 | Credentialed CORS reflects any `https://*.ui.com` Origin (same class as known CORS observation) | extends CORS |
| POST | /api/sso/v2/user/self/mfa/email/{id}/send | sso | L1 | 200/404/401 | Own email id → `200` + `otp_prefix`; B's email id from A → `404 No EmailAuthenticator matches`; unauthenticated → `401` | v2 variant of prior v1 test |
| PUT | /api/sso/v1/user/self | sso | L1 | 204 | Mass assignment probes `scopes`, `account_type`, `is_staff`, `groups`, `mfa_required`, `is_superadmin` all return `204` but do **not** persist (re-read `null`); `is_verified`/`twofa_enabled` unchanged | new variants; base endpoint tested before |
| PUT | /api/sso/v1/user/self | sso | L1 | 499 | `session_ttl_seconds` change → `499 L2_REQUIRED`; not persisted | new variant |

## Site Manager (unifi.ui.com) client-side re-audit — new build

- `account-bridge` origin validator reconfirmed:
  `v = e => new URL(e).hostname.endsWith(".ui.com")`; envelope requires
  `reporter === "unifi-account"`, protocol version 1, per-event Zod schemas.
- `?from=uid&domain=&env=&token=` flow: portal URL is built as
  `https://${domain}${suffix}/portal` and accepted only when
  `new URL(i).href === i` **and** `hostname === \`${domain}${suffix}\``, where the
  suffix comes from a fixed map (`.ui.com`, `.uidpreview.com`, `.dev.*`). No
  external-host open redirect; result is always a `*.ui.com`-style host.
- `?link=` is only stored as a localStorage flag (`resolve:mcp:open-on-load` /
  `open-activity-on-load`); no direct navigation/HTML sink consumes it. `?appview=`
  is reduced to a boolean. `?debug-crossorigin=` is enum-validated
  (`anonymous|use-credentials`) and `?debug-search=` is regex-limited
  (`^[a-zA-Z0-9_-]+$`), only used as script tag attributes.
- Only app-level HTML sink remains the release-notes `dangerouslySetInnerHTML`;
  no `innerHTML`/`eval`/`srcdoc`; no new `message` listener beyond the validated
  account bridge.

## Status

No confirmed high-impact finding this session. No IDOR/BOLA, BAC, mass-assignment
persistence, XSS, or open redirect. `confirmed-vuln.txt` unchanged; no Discord
notification sent.

Evidence:
- `result/server-side/account.ui.com/traffic/session16-endpoints.txt`
- `result/server-side/account.ui.com/traffic/session16-mass-assignment.txt`
