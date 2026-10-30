# Server-Side Notes

- Login is handled by UI SSO at `account.ui.com`; MFA email OTP was retrieved from
  the disposable `maildrop.cc` inbox for both test accounts.
- After SSO, the in-scope app calls
  `POST https://cloudaccess.svc.ui.com/create-credentials` (third-party, out of
  scope) and receives ephemeral AWS/TURN credentials. The response body contained
  temporary `accessKeyId`, `secretKey`, `sessionToken`, and TURN username/password.
  These are **redacted** here; they are short-lived and scoped, and no real secret
  is stored in this repository.
- `getActiveDevice()` returned `undefined`; the console logs
  `Option 'deviceId' is required.` and the app shows `Connection failed.`
- Both Account A and Account B behave identically. No console is linked.
- No controller data, no write operations, and no cross-account objects were
  available. IDOR/mass-assignment/BAC tests remain Unresolved.
- `unifi.ubnt.com` was observed as a redirect target for `/fatal/:error`; it is a
  different origin and was not tested (see `result/out-of-scope.txt`).
