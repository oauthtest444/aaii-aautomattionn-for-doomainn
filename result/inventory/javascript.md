# JavaScript Inventory

| URL | SHA256 | Route | Tested | Notes |
|-----|--------|-------|--------|-------|
| https://account.ui.com/assets/index-BAUIMHQa.js | 29983e5e6456bd59b9c4ecbf8283cecf80afca76bbed01b48be19b092855c18a | all account.ui.com | yes | 7.1MB single bundle; Session 5 full-bundle sink pass (18 dangerouslySetInnerHTML, 4 message listeners, redirect sinks AC-gated) |
| https://account.ui.com/assets/index-CYDY7PBp.js | 14c9788ebdf32e9a2d9763821836589c4703e5910a2aade9f5e55ffce2d14a1b | all account.ui.com | yes | Session 14 current build (7,150,439 B); same routes/99 API paths; new MFA/chat paths; no new app sink |
| https://unifi.ui.com/main-0.4943c3d68170aaef.js | 43393b8a50cbef169c920d7fca36bc920cbb3774426fb06e85076205d35b9209 | Site Manager | yes | Session 14 build; account-bridge origin `.endsWith(".ui.com")`, `navigation.requested` host/path validated |
| https://www.ui.com/microsite/static/index-D-lz99wc.js | 851df604e5c21167cf0149398de31407dcef62953a4882c26ab5958e348f9ec2 | www home | yes | no URL-driven source; static-config redirect |
| https://www.ui.com/microsite/static/Landing-BaDyOaz_.js | be75267c9ec1564ff7bc6314b897dfce964aa0a554003976d6ea374d317be719 | www home | yes | no sinks |
| https://www.ui.com/microsite/static/layout-CgCwx8Gc.js | 2e611cc883b237f44314bd83bc5b361ef35498a8df146f8fca4c0c8ea6709f7a | www home | yes | no sinks |
| https://www.ui.com/microsite/static/index-BfxHSOgp.js | 0722ab3b72947505fffdf3b406b68d957e204215c00a26489eba112c8eae58f9 | www home | yes | Session 15/16 current build (934,244 B); HTML sinks static/i18n; download `link` https+allowlist |
| https://unifi.ui.com/main-0.2678141fb293ea0d.js | 5bccf419e7c7f1c80db476fb3c96cd1e329c38b0036a78fd562c9d2293993a1b | Site Manager | yes | Session 16 build (459,495 B); bridge origin `.endsWith(".ui.com")`, uid portal host constrained, no new sink |
| https://unifi.ui.com/main-7.89817c7552da11f1.js | c9b7ad08ce1ef1ce9a6d5a1aa67c53475cd1cddcef225d4cde0dc9c7cab61083 | Site Manager | yes | Session 16 build (1,774,615 B); same validated bridge/navigation logic; `?link=` stored only |
| https://account.ui.com/assets/index-DUlTrD1u.js (S26) | a26e5447814525949b83fe3e5b39dde4d2145fddfad86f6fd96596782b680f5c | account-frame bridge | yes | Session 26 re-audit of `VS/FS/IS/LS/RS/WS/KS`, `Rw/Gge/Wge/kw/Yge`, Megaphone `$$`, popup `lIt`: outbound PII only to https+ui.com/ubnt.com/uisp.com parents (`'*'` non-prod only); inbound requires `source===parent`+`kw(origin)`; no sink. Build unchanged from S18+. |
| https://unifi.ui.com/main-2.99fff016d6b090e8.js | (unchanged S16 build) | Site Manager invite/SW | yes | Session 26: invite `role` forward unchanged (VULN-20261114-001); SW fetch proxy same-origin scoped |
| https://unifi.ui.com/main-3.3960a4e87c585ec0.js | (unchanged S16 build) | Site Manager sync | yes | Session 26: `BroadcastChannel` user-sync same-origin only |
| https://account.ui.com/assets/index-YVfMK5j0.js | 5cb23f647dd2ec363085f9c31da9c8d6d7fc64c0d15811f9fb129a97316c7bfa | all account.ui.com | yes | Session 28 current build (6,961,507 B): 99 API paths + sink counts identical to index-DUlTrD1u.js; redirect validator identical (`ubnt.com/ui.com/uisp.com` + http/https); added strings only Sentry 11.x messages + inline passkey SVG assets -> dependency bump |
| https://www.ui.com/_next/static/chunks/* (36 initial chunks, dpl cf2ef489…) | n/a | www Next.js | yes | Session 28 redeploy: only query source `appview` (inert); message listeners are axios library internals; download allowlist `dl.ubnt.com/dl.ui.com/fw-download.ubnt.com` unchanged |

## Session 30 (2026-11-26) — new builds
| URL | SHA-256 | Notes |
|-----|---------|-------|
| https://account.ui.com/assets/index-CGj0vhTX.js | 970b5e85d8ffc487ace4411370a024fb8f7fa696ecea35157d26f417dd9c7375 | 7,278,468 B; adds CyberSecure (6 API paths on ips/billing, new route); sinks/validator unchanged |
| https://unifi.ui.com/main-0.b06362b80fbfc61f.js | d2ea5d543f196b3834a8ab78d33ff8418a9b6aa761ee3518e985e41defc5d048 | Site Manager new deploy; API paths unchanged |
| https://unifi.ui.com/main-7.8d401a13358c5b3e.js | 43cafdad00fb552b476909e0f65faecece40dc65aa3c88cbeb450be7c5c0658a | Site Manager new deploy |
| https://unifi.ui.com/runtime.393f084b414f2652.js | 275eb2e0bcaa4907e42e50bff399efdbdd8d6d272d343962172fe767be2ebcae | runtime |
| https://unifi.ui.com/chunk-resolve-legacy-pseudonym-sweep.e88f3e91.js | aa64d07ba8582fd1effc96b470667a4cf345cb2ee693a5f064f41c16d763ba87 | legacy pseudonym IndexedDB/localStorage sweep; no user input |
| https://www.ui.com/ (Next.js) | dpl=e1f4c3c34668db11c8c0f1d5e0bd0c3e76f6ce60 | 36 initial chunks; no new source/sink; `?link=` inert |
