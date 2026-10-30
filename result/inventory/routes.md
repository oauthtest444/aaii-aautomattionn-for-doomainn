# UI Route Inventory

Discovered by parsing the ui-router state definitions in
`https://network.unifi.ui.com/6.1.71.0/unifi/angular/js/app.js` (SHA-256
`295a5f03193ba058db715949967db4a2dad741897d14bb194505444dc95b476c`).

- Total UI state routes discovered: **120**
- Fully tested: **0**
- Unresolved (blocked at app bootstrap): **120**
- Not Vulnerable (reached but no issue): login/verify/sso_login variants (see
  route report)

**Reason for all Unresolved rows:** the app calls
`webrtc.unifiWebRtcConnector.connect(getActiveDevice())` before Angular routing.
Neither test account has an active console, so `getActiveDevice()` is `undefined`
and the console logs `Option 'deviceId' is required.` Every data/settings route
therefore fails before its resolvers run. See `result/unresolved.md`.

All URLs below are relative to the app base
`https://network.unifi.ui.com/6.1.71.0/unifi/`.

| State | URL template | Status |
|-------|--------------|--------|
| `manage` | `/` | Unresolved |
| `manage.home` | `/` | Unresolved |
| `manage.account` | `/account` | Unresolved |
| `manage.account.login` | `/login?redirect` | Not Vulnerable (no open redirect observed) |
| `manage.account.2fa` | `/login/2fa?redirect` | Unresolved |
| `manage.account.verify` | `/verify?email&t` | Unresolved |
| `manage.account.forgotpassword` | `/forgotpassword` | Unresolved |
| `manage.oauthlogin` | `/oauth?redirect` | Unresolved |
| `manage.ssologin` | `/sso_login/:sso_token/:ubic_uuid/:site_id` | Unresolved |
| `manage.site` | `/site/:site` | Unresolved |
| `manage.site.director` | `/director` | Unresolved |
| `manage.site.dashboard` | `/dashboard/{action:view\|edit}/{id:[0-9a-f]{24}}/{panel:dashboards\|none}` | Unresolved |
| `manage.site.statistics` | `/statistics` | Unresolved |
| `manage.site.statistics.overview` | `/systemstats/:granularity/:startOrPreset/:end` | Unresolved |
| `manage.site.statistics.dpi` | `/dpi/{view}/{categoryId}/{applicationId}/{userId}` | Unresolved |
| `manage.site.statistics.performance` | `/performance/:deviceId/:granularity/:startOrPreset/:end` | Unresolved |
| `manage.site.statistics.client` | `/client/:clientId/:granularity/:startOrPreset/:end` | Unresolved |
| `manage.site.statistics.switch` | `/switch/:switchId/:granularity/:startOrPreset/:end` | Unresolved |
| `manage.site.statistics.speedtest` | `/speedtest/:startOrPreset/:end` | Unresolved |
| `manage.site.statistics.debugging` | `/debugging` | Unresolved |
| `manage.site.ips` | `/ips` | Unresolved |
| `manage.site.ips.overview` | `/overview/:startOrPreset/{end}` | Unresolved |
| `manage.site.ips.list` | `/list/:startOrPreset/{end}/{country}/{severity}/{ip}` | Unresolved |
| `manage.site.maps` | `/maps` | Unresolved |
| `manage.site.maps.physical` | `/physical/:mapId/:deviceId` | Unresolved |
| `manage.site.maps.topology` | `/topology` | Unresolved |
| `manage.site.devices` | `/devices` | Unresolved |
| `manage.site.devices.paginated` | `/{layout}/{page}/{pageSize}/:type/:view` | Unresolved |
| `manage.site.clients` | `/clients` | Unresolved |
| `manage.site.clients.paginated` | `/{layout}/{page}/{pageSize}/{wired}/{guest}/{radio}/{active}` | Unresolved |
| `manage.site.insights` | `/insights` | Unresolved |
| `manage.site.insights.dynamicdns` | `/dynamicdns/{page}/{pageSize}` | Unresolved |
| `manage.site.insights.knownclients` | `/clienthistory/{page}/{pageSize}/{within}/{wired}/{guest}/{configuration}/{blocked}/{noted}/{fixedIp}` | Unresolved |
| `manage.site.insights.neighboringaps` | `/neighboraps/{page}/{pageSize}/{within}/{radioType}` | Unresolved |
| `manage.site.insights.pastconnections` | `/pastconnections/{page}/{pageSize}/:startOrPreset/:end/{guest}` | Unresolved |
| `manage.site.insights.pastguests` | `/pastguests/{page}/{pageSize}/:startOrPreset/:end` | Unresolved |
| `manage.site.insights.portforwardstats` | `/portforwardstats/{page}/{pageSize}/{view}` | Unresolved |
| `manage.site.insights.staticrouting` | `/staticrouting/{page}/{pageSize}` | Unresolved |
| `manage.site.insights.streams` | `/streams/{page}/{pageSize}/{stream}` | Unresolved |
| `manage.site.insights.switchstats` | `/switchstats/{page}/{pageSize}/{device}/{linkStatus}/{view}` | Unresolved |
| `manage.site.insights.remoteuservpn` | `/remoteuservpn/{page}/{pageSize}` | Unresolved |
| `manage.site.insights.logs` | `/logs/` | Unresolved |
| `manage.site.events` | `/events` | Unresolved |
| `manage.site.alerts` | `/alerts` | Unresolved |
| `manage.site.settings` | `/settings` | Unresolved |
| `manage.site.ufsdn` | `/v2` | Unresolved |
| `manage.site.ufsdn.wifiman` | `/wifiman{path:any}` | Unresolved |
| `manage.site.ufsdn.ips` | `/ips/{path:any}` | Unresolved |
| `manage.site.settings.backup` | `/backup` | Unresolved |
| `manage.site.settings.site` | `/site` | Unresolved |
| `manage.site.settings.wlans` | `/wlans/{action}/:id` | Unresolved |
| `manage.site.settings.networks` | `/networks/{action}/:id` | Unresolved |
| `manage.site.settings.routingAndFirewall` | `/routing/{action}/:id` | Unresolved |
| `manage.site.settings.routingAndFirewall.routing` | `/routing/{action}/:id` | Unresolved |
| `manage.site.settings.routingAndFirewall.firewall` | `/firewall` | Unresolved |
| `manage.site.settings.routingAndFirewall.firewall.rulesIpv4` | `/rules/ipv4/{action}/:ruleset/:id` | Unresolved |
| `manage.site.settings.routingAndFirewall.firewall.rulesIpv6` | `/rules/ipv6/{action}/:ruleset/:id` | Unresolved |
| `manage.site.settings.routingAndFirewall.firewall.groups` | `/groups/{action}/:id` | Unresolved |
| `manage.site.settings.routingAndFirewall.firewall.settings` | `/settings` | Unresolved |
| `manage.site.settings.routingAndFirewall.portforward` | `/portforward/{action}/:id` | Unresolved |
| `manage.site.settings.routingAndFirewall.geoipfiltering` | `/geoipfiltering` | Unresolved |
| `manage.site.settings.guestcontrol` | `/guestcontrol` | Unresolved |
| `manage.site.settings.services` | `/services` | Unresolved |
| `manage.site.settings.services.radius` | `/radius` | Unresolved |
| `manage.site.settings.services.radius.users` | `/users/{action}/:id` | Unresolved |
| `manage.site.settings.services.radius.server` | `/server` | Unresolved |
| `manage.site.settings.services.hotspot2` | `/hotspot2/{action}/:id` | Unresolved |
| `manage.site.settings.services.dhcp` | `/dhcp` | Unresolved |
| `manage.site.settings.services.dhcp.dhcpOptions` | `/options/{action}/:id` | Unresolved |
| `manage.site.settings.services.dhcp.dhcpRelay` | `/relay` | Unresolved |
| `manage.site.settings.services.dhcp.dhcpServer` | `/server` | Unresolved |
| `manage.site.settings.services.dynamicdns` | `/dynamicdns/{action}/:id` | Unresolved |
| `manage.site.settings.services.sip` | `/sip` | Unresolved |
| `manage.site.settings.services.sip.settings` | `/settings` | Unresolved |
| `manage.site.settings.services.sip.endpoints` | `/endpoints/{action}/:id` | Unresolved |
| `manage.site.settings.services.snmp` | `/snmp` | Unresolved |
| `manage.site.settings.services.upnp` | `/upnp` | Unresolved |
| `manage.site.settings.services.mdns` | `/mdns` | Unresolved |
| `manage.site.settings.services.ntp` | `/ntp` | Unresolved |
| `manage.site.settings.services.upgrades` | `/upgrades/{action}/:id` | Unresolved |
| `manage.site.settings.profiles` | `/profiles` | Unresolved |
| `manage.site.settings.profiles.radius` | `/radius/{action}/:id` | Unresolved |
| `manage.site.settings.profiles.ports` | `/ports/{action}/:id` | Unresolved |
| `manage.site.settings.admins` | `/admins/{action}/:id` | Unresolved |
| `manage.site.settings.usergroups` | `/usergroups/{action}/:id` | Unresolved |
| `manage.site.settings.dpi` | `/dpi` | Unresolved |
| `manage.site.settings.dpi.settings` | `/settings` | Unresolved |
| `manage.site.settings.dpi.restrictions` | `/restrictions` | Unresolved |
| `manage.site.settings.dpi.restrictions.groups` | `/groups` | Unresolved |
| `manage.site.settings.dpi.restrictions.assignments` | `/assignments` | Unresolved |
| `manage.site.settings.controller` | `/controller` | Unresolved |
| `manage.site.settings.ips` | `/ips` | Unresolved |
| `manage.site.settings.cloudaccess` | `/cloudaccess` | Unresolved |
| `manage.site.settings.elitedevice` | `/elitedevice` | Unresolved |
| `manage.site.settings.maintenance` | `/maintenance` | Unresolved |
| `manage.site.settings.ui` | `/ui` | Unresolved |
| `manage.fatal` | `/fatal/:error` | Out of Scope (redirected to unifi.ubnt.com) |
| `manage.overview` | `/sites-overview` | Unresolved |
| `manage.overview.base` | `/home` | Unresolved |
| `manage.overview.base.home` | `/home` | Unresolved |
| `manage.overview.base.sites` | `/sites` | Unresolved |
| `manage.overview.base.admins` | `/admins` | Unresolved |
| `manage.overview.account` | `/account` | Unresolved |
| `manage.overview.account.login` | `/login?redirect` | Unresolved |
| `manage.overview.account.2fa` | `/login/{site}/2fa?redirect` | Unresolved |
| `manage.overview.account.forgotpassword` | `/forgotpassword` | Unresolved |
| `manage.overview.fatal` | `/fatal/:error` | Out of Scope (redirected to unifi.ubnt.com) |
| `manage.hotspot_redirect` | `/hotspot?d` | Unresolved |
| `manage.hotspot` | `/hotspot-manager?d` | Unresolved |
| `manage.hotspot.home` | `/home` | Unresolved |
| `manage.hotspot.account` | `/account` | Unresolved |
| `manage.hotspot.account.login` | `/login/{site}?redirect` | Unresolved |
| `manage.hotspot.account.2fa` | `/login/{site}/2fa?redirect` | Unresolved |
| `manage.hotspot.site` | `/site/:site` | Unresolved |
| `manage.hotspot.site.analytics` | `/analytics/:start/:end/:currency` | Unresolved |
| `manage.hotspot.site.guests` | `/guests/{within}/{page}/{pageSize}` | Unresolved |
| `manage.hotspot.site.operators` | `/operators/{page}/{pageSize}` | Unresolved |
| `manage.hotspot.site.transactions` | `/transactions/{within}/{page}/{pageSize}/:transactionType` | Unresolved |
| `manage.hotspot.site.vouchers` | `/vouchers/{page}/{pageSize}` | Unresolved |
| `manage.hotspot.fatal` | `/fatal/:error` | Out of Scope (redirected to unifi.ubnt.com) |

## Modal / dialog states (`$modal.when(...)`, no URL)

44 modal states were also discovered, e.g. `addClient`, `addSite`, `addSshKey`,
`alerts`, `apGroups`, `autoChannels`, `confirmRemoveAdmin`, `confirmRestart`,
`createOperator`, `createVouchers`, `exportSite`, `importSite`, `radiusProfile`,
`speedTest`, `systemConfig`, `wirelessNetworkMacFilterAddBatch`, and others.
They are only reachable from authenticated controller routes and are therefore
also Unresolved.
