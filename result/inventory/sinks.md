# Source-to-Sink Inventory — account.ui.com SPA

All line/offset references are character offsets in
`index-D5t7M7xo.js` (sha256 `ce9950c9…c468`).

## Dangerous sink scan

| Sink | Count | Result |
|------|-------|--------|
| `eval(` | 0 | none |
| `new Function(` | 0 | none |
| `document.write` | 0 | none |
| `insertAdjacentHTML` | 0 | none |
| `outerHTML =` | 0 | none |
| `srcdoc` | 0 | none |
| `innerHTML =` | 16 | React internals (`@301929`,`@359454`,`@362372`), GTM (`@409752`+), screen-reader logs (`@2657653`), jQuery-style `html()` (`@3465614`+), SendSafely dropzone (`@4985802`,`@4987484`), template helpers (`@6368506`+). No user/URL-controlled source found. |
| `dangerouslySetInnerHTML` | 18 | React internals + one static radix scrollbar `<style>` (`@3393236`). No user source. |
| `window.open` | 7 | `mme`/`Hw` (`@2594777`,`@776401`), MSP consent popup (`@5476558`), billing link builder (`@6016762`), passkey blank window (`@6349117`), Ada support (`@6357287`). Inputs validated/static. |
| `location.assign` | 5 | Router internals, `Hw` self-target, `enforcedIdpRedirectUrl` (server), `idp.loginUrl` (server). |
| `location.replace` | 7 | `mme`, post-login redirect (`@4778200`, validated by `MC`), 3DS (`@5634611`, validated by `MC`), idp login-result (`@6441039`, next from server), MSP result (`@6516196`), switch (`@6853317`, validated), activate (`@6871446`, fixed). |
| `location.href =` | 11 | Router internals, MSP popup reuse (`@5476521`), Stripe/TapPay redirect URLs (from payment provider), passkey blank window, 3DS `return_url` (validated by `MC`), MFA `setup_uri`/`provisioning_uri` (server), billing redirect (server). |

## Unique data flows

1. **Post-login redirect** — source: `redirect` query/hash via `DQ(location.href)` ->
   `MC` allowlist -> `location.replace`. Status: Not Vulnerable (allowlist).
2. **innerRedirect** — source: query -> `Wpe` internal-path allowlist (rejects
   `//`, `\`) -> router. Status: Not Vulnerable.
3. **IDP login result** — source: `code`,`state` query -> API -> `next` from
   server -> `location.replace` unvalidated. Runtime: server binds `state` to
   `sso_idp_state` cookie; invalid state -> 400, no redirect. Status: Not
   Vulnerable in practice (Unresolved only if server can be made to return
   attacker URL; out-of-scope API).
4. **Suspicious login confirm** — source: `token`,`decision` query. `decision=yes`
   auto-fires `POST /suspicious/confirm` on mount (`oUt`), gated on a successful
   inspect of a valid token. Candidate CSRF/one-click state change requiring a
   valid token; invalid token -> inspect 400 -> no confirm call (verified).
   Status: Unresolved (needs valid token; API out-of-scope).
5. **MSP IdP setup result** — source: `status`,`idpId`,`message` query ->
   `postMessage({type:'msp-idp-setup-result',...}, location.origin)` to opener ->
   opener listener shows toast. No `dangerouslySetInnerHTML`; React escapes.
   Status: Not Vulnerable (needs same-origin opener).
6. **Megaphone/announcement org select** — `postMessage` listener t1 requires
   `e.source === window.parent` and `$he(e.origin)` (https + *.ui.com/ubnt.com/
   uisp.com) and zod schema. Status: Not Vulnerable / limited by allowlist.
7. **Zendesk ticket comment HTML** — source: stored Zendesk `html_body` ->
   `html-react-parser` `yLt(i)` in `CLt` with no sanitizer. Candidate stored XSS
   requiring auth + comment. Status: Unresolved.
8. **3DS return** — source: `return_url` query -> `MC` -> `location.href` on
   success. Allowlist only, so not external. Status: Not Vulnerable.
9. **Switch account** — source: `redirect`,`login_hint` query -> `MC` / email
   match -> `location.replace` / login. Status: Not Vulnerable.

## Client-side result

No confirmed client-side vulnerability. Two candidates remain Unresolved and are
blocked by missing valid token / authentication. No XSS execution was observed.
