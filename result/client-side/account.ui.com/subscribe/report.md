# Client-side review — `/subscribe` (new inventory coverage)

Date: 2026-11-20T07:02Z
Bundle: `https://account.ui.com/assets/index-DUlTrD1u.js`
SHA256: `a26e5447814525949b83fe3e5b39dde4d2145fddfad86f6fd96596782b680f5c`

`/subscribe` was present in the route config but missing from
`result/testing-inventory.json`. It is a client-side redirect helper.

## Router entry

```js
(0,_g,{path:`/subscribe`,element:(0,I.jsx)(NBt,{})})
```

## Redirect logic

```js
MBt=(e,{isCloudStorageEnabled:t=ABt}={})=>{
  let n=e.get(`product`);
  if(n===`cloud-storage`&&t)return r1({org_id:e.get(`org`)||e.get(`org_id`)});
  if(n===`site-support`&&jBt){
    let t=e.get(`site_id`);
    if(t)return crt({site_id:t,host_id:e.get(`host_id`)??void 0})
  }
  return`/subscriptions`
}
```

`r1`/`crt` produce fixed in-app subscription routes. `NBt` only chooses between
`/subscriptions` and those internal builders based on `?product=`. The `org`,
`org_id`, `site_id`, and `host_id` values are passed as route/query data, not as an
external URL or `window.location` target.

## Result

- No `window.location` / `window.open` sink.
- No external, protocol-relative, backslash, or `javascript:` target derived from
  query parameters.
- No HTML sink in this component.

**Not Vulnerable** (no open redirect / DOM XSS). Server-side purchase APIs remain
blocked by missing billing/subscription data and out-of-scope `billing.svc.ui.com`.
