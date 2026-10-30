# JavaScript Inventory

Route context: `https://network.unifi.ui.com/6.1.71.0/unifi/site/default/dashboard`
(app shell / `manage` module). All files are same-origin and in scope.

| File | URL | SHA-256 | Size (bytes) | Tested |
|------|-----|---------|--------------|--------|
| index.js | https://network.unifi.ui.com/6.1.71.0/unifi/angular/js/index.js | b1f7b878e6f46b0f7985c69f5f096800dacb865b0540baee5a9150bf24bca509 | 67574 | Yes (static) |
| initial.js | https://network.unifi.ui.com/6.1.71.0/unifi/angular/js/initial.js | d4b29cfd00f00cc09929034e0ceee503288eb8e081b2f8eb4f23def1a5da0e9d | 355063 | Yes (static) |
| components.js | https://network.unifi.ui.com/6.1.71.0/unifi/angular/js/components.js | 72d18913a9f87367c7d36a2ec8f03b4c73e753b900a9a95c7d4b9d092121b8d5 | 1514409 | Yes (static) |
| base.js | https://network.unifi.ui.com/6.1.71.0/unifi/angular/js/base.js | a92670e0d9f1c98ec9a53866b68b0ac57e79ceb7d77eafa7ac7297b3564d242e | 1315819 | Yes (static) |
| dynamic.settings.js | https://network.unifi.ui.com/6.1.71.0/unifi/angular/js/dynamic.settings.js | 86fd6406702e333619a52934123cc42173ae2037ec03a95cb5f428304aac1a46 | 936248 | Yes (static) |
| dynamic.dpi.js | https://network.unifi.ui.com/6.1.71.0/unifi/angular/js/dynamic.dpi.js | 640302c0b93bce39a62731f0a25d6aa9e679acbc8ff931feb8c715b643505f53 | 97015 | Yes (static) |
| app.js | https://network.unifi.ui.com/6.1.71.0/unifi/angular/js/app.js | 295a5f03193ba058db715949967db4a2dad741897d14bb194505444dc95b476c | 4072955 | Yes (static) |
| dynamic.maps.js | https://network.unifi.ui.com/6.1.71.0/unifi/angular/js/dynamic.maps.js | (loaded during sso_login probe; not downloaded) | - | No (runtime only) |

Source maps: `app.js.map`, `index.js.map` return HTTP 403 (not exposed).
