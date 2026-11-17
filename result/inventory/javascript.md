# JavaScript Inventory

| URL | SHA256 | Route | Tested | Notes |
|-----|--------|-------|--------|-------|
| https://account.ui.com/assets/index-BAUIMHQa.js | 29983e5e6456bd59b9c4ecbf8283cecf80afca76bbed01b48be19b092855c18a | all account.ui.com | yes | 7.1MB single bundle; Session 5 full-bundle sink pass (18 dangerouslySetInnerHTML, 4 message listeners, redirect sinks AC-gated) |
| https://account.ui.com/assets/index-CYDY7PBp.js | 14c9788ebdf32e9a2d9763821836589c4703e5910a2aade9f5e55ffce2d14a1b | all account.ui.com | yes | Session 14 current build (7,150,439 B); same routes/99 API paths; new MFA/chat paths; no new app sink |
| https://unifi.ui.com/main-0.4943c3d68170aaef.js | 43393b8a50cbef169c920d7fca36bc920cbb3774426fb06e85076205d35b9209 | Site Manager | yes | Session 14 build; account-bridge origin `.endsWith(".ui.com")`, `navigation.requested` host/path validated |
| https://www.ui.com/microsite/static/index-D-lz99wc.js | 851df604e5c21167cf0149398de31407dcef62953a4882c26ab5958e348f9ec2 | www home | yes | no URL-driven source; static-config redirect |
| https://www.ui.com/microsite/static/Landing-BaDyOaz_.js | be75267c9ec1564ff7bc6314b897dfce964aa0a554003976d6ea374d317be719 | www home | yes | no sinks |
| https://www.ui.com/microsite/static/layout-CgCwx8Gc.js | 2e611cc883b237f44314bd83bc5b361ef35498a8df146f8fca4c0c8ea6709f7a | www home | yes | no sinks |
