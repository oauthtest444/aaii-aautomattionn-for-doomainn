# VULN-20261029-001 — UISP /adopt Cancel button open redirect

- **Status:** Confirmed (open redirect), explicitly excluded from `result/confirmed-vuln.txt`
- **Type:** Open Redirect
- **Asset:** `https://uisp.ui.com/adopt`
- **Severity:** Medium (open redirect); not eligible for the project notification bar
- **Authentication:** Authenticated UISP user (Account A, `qacct1a6967`)
- **Tested at:** 2026-10-29T22:48Z
- **Bundle:** `https://uisp.ui.com/home/static/js/main.ca315773.js`
  - SHA-256: `a88cae365fd9a42f0a39605da3e1649004d57151e1a158f2c6cdcfdc1a3c4dd1`

## Summary

The UISP `/adopt` route reads `deviceUrl` from the query string and uses it as
the destination of a top-level navigation when the user clicks **Cancel**:

```js
onClick: function () {
  const e = new URL(s);
  window.location.href = e.href;
}
```

`s` is `URLSearchParams.get("deviceUrl")`. `deviceUrl` is checked with
validator.js `isURL()`, whose default accepted protocols are `http`, `https`,
and `ftp`. Any attacker-controlled `http(s)://` or `ftp://` URL is therefore
accepted and the user is redirected there from the trusted `uisp.ui.com`
origin after clicking Cancel.

## Reproduction

1. Authenticate to `https://uisp.ui.com/` as a normal UISP user.
2. Visit:

   ```text
   https://uisp.ui.com/adopt?deviceUrl=http%3A%2F%2F127.0.0.1%3A8765%2F&deviceName=TESTDEVICE123&token=abc123
   ```

3. The page renders "Add device 127.0.0.1 to your UISP?" with a **Cancel**
   button (`01-adopt-page-with-attacker-deviceUrl.png`).
4. Click **Cancel**.
5. The top-level URL becomes `http://127.0.0.1:8765/`, which serves the
   `UISP_REDIRECT_REACHED` marker (`02-cancel-redirected-to-local-server.png`).

## Why this is excluded from `confirmed-vuln.txt`

`skills/AGENT.md` Section 9 only accepts client-side open redirects that permit
a dangerous `javascript:` URL. This sink does not:

- `isURL("javascript:document.title='UISPXSS'")` is rejected; the app redirects
  to `/setup` and `document.title` stays `UISP Portal`.
- A leading-tab variant (`\tjavascript:...`) is also rejected.
- validator.js is configured with `require_valid_protocol: true` and the
  default protocol allowlist (`http`, `https`, `ftp`).

The confirmed impact is limited to redirecting the victim to an external
`http`/`https`/`ftp` destination.

## Related unresolved concern (not confirmed)

The same component contains an automatic redirect after the connection string
is fetched:

```js
function tee(e, t, r) {
  const n = new URL(e);
  n.searchParams.append("controllerUrl", t);
  n.searchParams.append("token", r);
  window.location.href = n.href;
}
```

When a UISP controller is selected and the user clicks **Add to UISP**, the app
requests:

```text
GET https://unms-go.ubnt.com/api/installations/unifi-controllers/<id>/connection-string
```

and then re-renders, calling `tee(s, connectionString, token)`. That sends the
controller `connectionString` to the attacker-controlled `deviceUrl` as
`controllerUrl`, and the attacker-supplied `token` as `token`. If the
connection string contains a usable controller credential, this would be a
one-click credential exfiltration issue.

**Why unresolved:** Account A has no controllers (`list-controllers` returns
`{"controllers":[]}`). Creating a paid UISP Cloud Hosting trial (the UI
requires a payment method) was intentionally not performed. The client-side
data flow is verified statically; end-to-end sensitivity of
`connectionString` was not verified.

## Remediation

- Validate `deviceUrl` against an application allowlist of expected device
  origins, not a generic URL parser.
- Never forward server-issued `connectionString` values to a
  user-controlled URL. Bind the destination to the selected controller or
  ignore external `deviceUrl` values after adoption starts.

## Evidence

- `evidence/01-adopt-page-with-attacker-deviceUrl.png`
- `evidence/02-cancel-redirected-to-local-server.png`
- `evidence/notes.txt`
- `payloads/poc-url.txt`
- `payloads/javascript-rejection-tests.txt`
