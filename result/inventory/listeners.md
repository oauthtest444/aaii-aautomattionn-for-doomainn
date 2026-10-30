# postMessage Listener Inventory

| Location | Handler | Origin/source validation | Data flow | Status |
|----------|---------|--------------------------|-----------|--------|
| app.js module 1448 (`postMessage` service) | `$window.onmessage = function(e){ listeners.forEach(t => t.call(t, e.data)) }` | **None** (no `event.origin`, no `event.source` check) | Forwards `e.data` to registered listeners | Not Vulnerable (no sensitive listener reachable) |
| app.js module 494 (`unifiIframePostMessage` directive) | `r = n => { if (n.appLoaded === true) e.send(iframe.contentWindow, scope.model) }` | None on the message; target is the directive's own iframe | Sends the bound `model` to the iframe via `postMessage(model, "*")` | Not Vulnerable in tested state; preview route requires controller |
| components.js (AngularJS ngAnimate/$q library) | `window.addEventListener("message", ...)` for `"zero-timeout-message"` | Checks `t.source === window` and exact data | Internal scheduler only | Not Vulnerable (library) |
| initial.js / base.js / components.js | WebSocket/data-channel `.onmessage` | N/A (not window messages) | WebRTC/MQTT/WebSocket transport | Not Vulnerable (no controller reached) |

Notes:

- The global `window.onmessage` handler has no origin/source validation, but the
  only registered listener is the iframe preview directive, and the app never
  reaches any route that registers it because bootstrap fails with
  `deviceId required`.
- No cross-origin sensitive action could be demonstrated. Marked Not Vulnerable
  for this run, not Confirmed.
