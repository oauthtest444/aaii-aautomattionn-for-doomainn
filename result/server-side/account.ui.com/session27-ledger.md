# Session 27 — 2026-11-24T09:37Z (continuation; no new high-impact finding)

Scope: approved components only (`ui.com`, `www.ui.com`, `account.ui.com`, `sso.ui.com`,
`account.svc.ui.com`, `cloudaccess.svc.ui.com`). Continuation of Session 26
(`run 45366850654`, `event=schedule`, `decision=preserved`); target hash `3353d9c6…` matches `result/logs/targets.sha256`.

- Account A: `testttt12`, `tan.tiger5564@maildrop.cc`, UUID `d8946fad-2b8e-4cf0-82c5-5d955b57b829`.
  `UBIC_AUTH` full-session token recovered from `result/logs/opencode.log`, validated
  (`GET /api/sso/v1/user/self` -> `200`, `is_verified=true`, `twofa_enabled=true`).
- Token held is L2-minted but past the L2 freshness window: write ops (e.g. username change)
  return `499 {"error":"L2_REQUIRED"}` for both the attempted change and the restore.

Build changes since Session 26:
- `www.ui.com` Next.js redeployed: `dpl=6f710854cbbfd59f08058493f6937313e2161848`
  (was `ebfbbf36…`), Next.js `16.4.6` + Turbopack. `16.4.6` is **>= 16.2.11 / 16.4.5**,
  i.e. patched for the July 2026 and Nov 2026 Next.js advisories — no applicable known CVE.
- `account.ui.com` `/assets/index-DUlTrD1u.js` sha256 `a26e5447…` **unchanged**.
- Site Manager `main-0.2678141fb293ea0d.js` **unchanged**.

## New / changed coverage
| Method | Endpoint | Auth | Test | Result | Status |
|--------|----------|------|------|--------|--------|
| GET | `/api/sso/v1/user/self` | A | baseline | `200` (`testttt12`, `is_verified=true`) | baseline |
| PUT | `/api/sso/v1/user/self` `{username:oc27tmp…}` | A | username change | `499 L2_REQUIRED` (no change persisted) | Gated (L2 freshness) |
| GET | `/api/sso/v1/user/self{,.css,...}` (cache deception) | A | suffix probing | `404`; responses `cache-control: private, no-cache`, `vary: Cookie` (no cache) | Not Vulnerable |
| POST | `/api/sso/v1/user/self/token/setup` `{}` | A | device-code flow | `400 VALIDATION_ERROR` `{"token":["This field is required."]}` | Not Vulnerable |
| POST | `/api/sso/v1/user/self/token/login` `{}` | A | device-code flow | `400 VALIDATION_ERROR` `{"token":["This field is required."]}` | Not Vulnerable |
| POST | `/api/sso/v1/user/self/token/setup` `{token:<random>}` | A | unknown token ×2 | `404` (generic), no `retry-after`/`x-ratelimit`; no valid-vs-invalid oracle | Not Vulnerable |
| POST | `/api/sso/v1/user/self/token/login` `{token:<random>}` | A | unknown token ×2 | `404` (generic), no rate-limit headers | Not Vulnerable |
| POST | `/api/sso/v1/user/self/token/{setup,login}` `{}` | none | unauth | `401` (` is not allowed`) | Not Vulnerable |
| OPTIONS | `/api/sso/v1/user/self/token/setup` | none | CORS preflight | `200`, ACAO reflects only `https://account.ui.com` + ACAC true (allowlisted) | Not Vulnerable |
| GET | `www.ui.com` + `X-Forwarded-Host/X-Host/Forwarded/X-Forwarded-Proto: evil.com` | none | host-header poisoning | `200`, `x-nextjs-cache: HIT`, `og:url` fixed `https://ui.com/`, `evil.com` absent | Not Vulnerable |
| GET | `www.ui.com/?{s,l,redirect,next,link}=https://evil.com` | none | open redirect | `200`, no `Location` | Not Vulnerable |
| GET | `sso.ui.com` `*.ui.com` wildcard | none | host reflection | `302` -> `https://account.ui.com/login?redirect=<https%3A%2F%2F<real-host>%2F…>`; rejects `evil.com`, `unifi.ui.com.evil.com`, `@`-trick (`403`); ignores XFH | Not external redirect |

## www Next.js 16.4.6 chunk audit (36 initial + 6 lazy chunks)
- `dangerouslySetInnerHTML` occurrences are static/i18n constant markup only — no user source.
- Only query param consumed by app code is `appview`; no `javascript:`/URL sink from it.
- No usable Server Actions (only RSC runtime `createServerReference` present).
- `/download/software/<slug>` is percent-encoded into the RSC payload (not executable).
- Link allowlist `u`: `decodeURIComponent` -> require `https:` -> hostname exact-match in
  `["dl.ubnt.com","dl.ui.com","fw-download.ubnt.com"]`. Strict; no open redirect/bypass.

## CORS primitive (still blocked)
- Credentialed ACAO reflection on `sso.ui.com`/`cloudaccess.svc.ui.com` remains
  **un-weaponizable**: requires an attacker page served from an allowed `*.ui.com`
  origin. Wildcard `*.ui.com` serves only the fixed account SPA; no dangling CNAME /
  user-content subdomain found across prior recon (94 hosts, Session 25) or this session.

## Status
- Username-change business logic (uniqueness/collision) **not testable** without a fresh L2
  re-auth (password) or mailbox OTP; deferred, not a finding. A's username remains `testttt12`.
- No state changed: no addresses/sessions/devices/tokens created; token/setup+login calls
  used random/empty tokens (all rejected).
- Route ledger unchanged: 47 account routes (32 done / 15 blocked).
- No new confirmed high-impact finding; `result/confirmed-vuln.txt` unchanged; no Discord
  notification (notification bar not met).
- Evidence: `result/server-side/account.ui.com/traffic/session27-www-sso-account.txt`.
