# Listeners — site-default-dashboard

See `result/inventory/listeners.md`.

- `app.js` module 1448 (`postMessage` service): `$window.onmessage` forwards
  `event.data` to registered listeners without origin/source/schema validation.
  Only one listener is registered in the codebase (`unifiIframePostMessage`),
  and its action is to send the bound model to its own iframe. No sensitive
  action was reachable or observed. Status: Not Vulnerable for this run.
- `components.js`: internal `"zero-timeout-message"` listener validates
  `event.source === window` and exact data. Library only.
- WebRTC/MQTT/WebSocket `.onmessage` handlers are transport handlers, not window
  message listeners, and were not reached because no console is active.
