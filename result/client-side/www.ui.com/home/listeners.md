# postMessage Listeners — www.ui.com home

Enumerated `message` listeners in the route-related JS.

- No application `window.addEventListener('message', ...)` listener found in
  `index-D-lz99wc.js`, `Landing`, `layout`, `helpers`, `constants`, `dist`, or `utils`.
- No `window.opener`/`window.parent.postMessage` senders in the app code.
- Library bundles (gtag/OneTrust/Hotjar/Reddit) are third-party and out of scope.

Status: Not Vulnerable (no in-scope listener).
