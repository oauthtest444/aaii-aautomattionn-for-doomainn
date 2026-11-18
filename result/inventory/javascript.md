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
