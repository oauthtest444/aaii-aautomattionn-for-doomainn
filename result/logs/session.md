# Session

- Start (UTC): 2026-10-29T12:53:18Z
- Targets: duel.com (domain-only; operator authorizes subdomain enumeration/testing of duel.com subdomains)
- Agent/model: opencode / opencode/deepseek-v4.1-flash-free
- Environment: GitHub Actions ubuntu-latest, Node 22, headless Chrome, chrome-devtools MCP
- Tools: opencode, curl, git, node, npx, python3, jq, dig, openssl
- Resume state: decision=reset (target hash changed), fresh run

## Continuation 2026-10-29 (current session)
- Resumed after watchdog termination; target hash unchanged (preserved).
- Prior state: subdomain recon complete, test accounts A/B created, no confirmed findings saved, no route/API inventory persisted.
- Chrome DevTools MCP verified reachable at 127.0.0.1:9222.
- Plan: re-establish test sessions, build route/API inventory, client-side then server-side testing, checkpoint results continuously.

## Session 2026-10-29T14:08:33Z
- Logged in as test account A (dtestqa7412, id 5728773) on https://duel.com/.
- Chrome MCP reachable; browser fresh profile but account session restored via UI login.

## Session 2026-10-29T14:10Z (continued)
- Confirmed state-changing endpoints are blocked from this IP/country: PATCH /api/v2/user/settings -> 403 "IP or Country blocked custom page". All POST/PATCH/DELETE testing is therefore not possible from this runner; focus on client-side + read-only server-side.
- Session cookie `duel`: HttpOnly; Secure; SameSite=Lax (plus long-lived HttpOnly `do_not_share_this_with_anyone_not_even_staff` cookie). CSRF via cross-site POST is mitigated by SameSite=Lax.
- No CORS on /api/v2/user from pvp.duel.com origin (browser fetch -> TypeError).
- pvp.duel.com client-side review: query params session/st/game/return_url/code/replay; `game` is a fixed plugin registry (safe dynamic import); no v-html/DOM-XSS sink found; postMessage listeners check `event.source===window.parent` but not origin (low impact, invalid session).
- API `/api/v2/user/public/transaction/{id}`: public by numeric txn id (no sc required); non-public transaction types -> 403 "This transaction type is not publicly accessible". Public bet data includes server_seed after round end (has_ended=true), intended provably-fair reveal; no active-seed leak confirmed yet.
- New in-scope host observed in CSP: wildcard `*.betconstruct-proxy.duel.com` (Cloudflare Worker, version jackpot-origin-v7). Invalid label returns 500 JSON with stack trace: `Invalid proxy hostname: x` at decodeHostname (worker.js:63). Label encoding may map to upstream host (e.g. example-com -> example.com); needs verification after rate-limit cooldown.
- Third-party out-of-scope: d1bvoel1nv172p.cloudfront.net -> public S3 listing for bucket `spt77-static` (eu-central-1).

## Session 2026-10-29T14:28Z (continued)
- jobs.duel.com: static 565-byte page, only mailto link; no form/input.
- roulette.duel.com: nginx/Cloudflare, all probed paths 404 (empty body); /api/v2/* inherits 403 country block; no exposed API found.
- uat-us-pvp.duel.com: serves same static PvP SPA (HTTP 200) for invalid game/session params; unknown asset path returns plain nginx 404; no debug/stack trace.
- Attempted to mint a security token to enable PvP launch: POST /api/v2/user/security/token with session-auth / standard/code=0000 -> all 403 "IP or Country blocked custom page". Confirms all writes (incl. auth-token issuance) are IP/country blocked; PvP gameplay/BOLA testing remains impossible.
- Read-only API/user object confirms `extra_security_type=null`; self-only PII (email null, registration_ip, last_login) not exposed cross-user.
- No confirmed high-impact finding yet; result/confirmed-vuln.txt unchanged.
- Attempted account B login in isolated browser context: login POST blocked by Turnstile error 600010 (fresh context); B session could not be established. Not needed for further read-only tests because A can request B's IDs directly.
- Read-only BOLA/BAC param tests as A: `/api/v2/user?user_id=5728775` still returns A (5728773); `/settings`, `/rakeback`, `/kyc`, `/transactions`, `/client-seed`, `/zero-edge-rakeback/status` all ignore `user_id` and return A's own data. `/api/v2/user/profile/{username}/public` for B returns only public stats (id, avatar, totals, game_stats) with no email/PII. No BAC/IDOR found.
- Public transaction endpoint redacts `server_seed` (null even when `has_ended=true` and with matching `?sc=`), so no seed disclosure via that path. Rate limit (429) reached again; stopping active testing.
