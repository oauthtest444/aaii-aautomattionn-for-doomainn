# Session 5 — Deep client-side sink review (account.ui.com SPA)

Date: 2026-11-11T05:54Z
Bundle: `result/client-side/account.ui.com/login/javascript/index-BAUIMHQa.js`
SHA256: `29983e5e6456bd59b9c4ecbf8283cecf80afca76bbed01b48be19b092855c18a`

Prior notes said the bundle had "no app dangerousSetInnerHTML / no eval". A full-bundle
scan corrects that: the bundle does contain `dangerouslySetInnerHTML` and `message`
listeners. This pass classified every occurrence and traced the data sources.

## Counts (whole bundle)
- `dangerouslySetInnerHTML`: 18 (17 React DOM / Radix / react-html-attributes internals, 1 app-level)
- `innerHTML`: 23 (React DOM internals)
- `postMessage` sends: 8 (3 app-level; rest React scheduler/axios)
- `message` listeners: 4 (Sentry dialog, axios scheduler, Megaphone, MSP IdP)
- `document.write` / `eval(` / `new Function` / `insertAdjacentHTML`: 0

## App-level HTML sink (candidate)
`WLt` (~offset 6404335) renders Zendesk comment HTML:

```js
WLt=e=>{let{author_type:t,created_at:n,author_name:r,html_body:i,attachments:a}=e,...;
  ...(0,F.jsx)(G,{color:`text-2`,children:BLt(i)})...}
```

`BLt` is the bundled `html-react-parser` default export (`domToReact(htmlToDOM(...))`).
There is **no DOMPurify / sanitize-html / xss library** in the bundle (0 matches).
`html_body` comes from `GET https://account.svc.ui.com/zendesk/comments/{id}`.

Reachability:
- The `/requests/:ticketId` view loads the test account's own ticket comments.
- Cross-account comment access was tested in Session 4 and returns `403 FORBIDDEN`;
  ticket creation/listing is own-ticket scoped.
- Therefore the only content an attacker can place in this sink is their own comment
  (`author_type` END_USER) rendered in their own session → self-XSS at best.
- Agent/`UNKNOWN` comments are rendered too, but are authored by support, not the attacker.

Result: **Unresolved / self-XSS only**, not added to `confirmed-vuln.txt`.
Candidate report: `result/findings/VULN-20261111-001/report.md`.
Note: Zendesk also sanitizes stored comment HTML server-side; this was not bypass-tested
(no authenticated session was established this run).

## postMessage listeners (all validated)
| # | Location | Check | Verdict |
|---|----------|-------|---------|
| 1 | Sentry `__sentry_reportdialog_closed__` | message equality only, same-window dialog | Not app-controlled / Not Vulnerable |
| 2 | axios scheduler | `source===window` + nonce equality | Not Vulnerable |
| 3 | Megaphone (`$$`, ~offset 5039212) | `e.source===window.parent` AND `e.origin.startsWith('https://')` AND `AC(origin)`; payload validated by Zod schema `Zhe` (eventName enum) | Weak-but-bounded: accepts any https `*.ui.com`/`*.ubnt.com`/`*.uisp.com` parent; data limited to `{unread_count}`-style events. No sink reached. |
| 4 | MSP IdP setup (~offset 5484083) | `r.origin !== window.location.origin` reject; requires `type==='msp-idp-setup-result'` | Not Vulnerable |

Sender `qw` posts with a computed target origin; `Qzt` uses `window.location.origin`.
No listener reached an HTML/navigation sink.

## Redirect sinks (no open redirect)
All external-navigation sinks are gated by `AC()` (~offset 763223):

```js
AC=e=>{let t=new URL(e),n=t.hostname.split('.').slice(-2).join('.'),r=Vpe.includes(n),
       i=t.protocol==='http:'||t.protocol==='https:';return r&&i}
```

- `Vpe` = `ui.com`, `ubnt.com`, `uisp.com` registrable domains.
- `/switch?redirect=`, login `redirect`/`innerRedirect` (parsed by `parseLoginState`,
  redirect via `AC`, innerRedirect via `qpe`), subscription `return_url` (rejects and
  redirects to origin when `!AC`), and account-chooser `redirect` all use `AC`.
- `idp/login-result` uses server-returned `next` after a signed `state` exchange.
- No `javascript:`/`data:` acceptance found (protocol gate is http/https only).

## Conclusion
No new high-impact client-side vulnerability. The one unsanitized HTML renderer is
self-scoped. The broad `*.ui.com` origin trust in CORS and the Megaphone listener remains
the main latent issue (see `result/findings/cors-credentialed-reflection.md`).
