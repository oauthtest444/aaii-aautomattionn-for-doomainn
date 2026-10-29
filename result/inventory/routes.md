# Route Inventory

## Authorized target: ui.com (domain-only)

Recon: certificate transparency (`crt.sh`) + DNS resolution + single HTTPS GET per host.
Raw CT names: `result/recon/ct-raw-names.txt`. Live hosts: `result/recon/live-subdomains.txt`.
HTTP probe results: `result/recon/http-probe.tsv`, `result/recon/http-probe.json`.

## Live subdomains (status at first probe, 2026-10-29)

### Public application / login surfaces (priority)
| Host | Probe | Notes |
|---|---|---|
| account.ui.com | 200 | Ubiquiti Account (login/signup/SSO); redirect= param |
| unifi.ui.com | 302 -> account login | UniFi cloud portal |
| uid1.ui.com | 302 -> account login | Identity app |
| shared-ui.ui.com | 302 -> account login | Shared UI app |
| nca.ui.com | 302 -> account login | Network app |
| scoreboard.ui.com | 302 -> account login | |
| rma1.ui.com | 302 -> account login | |
| jp.ui.com | 302 -> account login | |
| microsites.ui.com | 302 -> account login | |
| gdpr.ui.com | 302 -> account login | |
| artifacts.ui.com | 302 -> account login | |
| triage.ui.com | 302 -> account login | |
| community.ui.com | 200 | Public community (UGC) |
| design.ui.com | 200 | UniFi Design Center |
| uisp.ui.com | 200 | UISP Portal login |
| training.ui.com | 200 | Ubiquiti Academy |
| status.ui.com | 200 | Atlassian Statuspage (third-party) |
| store.ui.com and regional store hosts | 307 | Shopify storefronts (third-party platform) |

### Small nginx apps
directrma.ui.com, rma.ui.com, material.ui.com, supplier.ui.com, var.ui.com, sso.ui.com

### Marketing / static / redirects
ui.com, www.ui.com, blog.ui.com, careers.ui.com, help.ui.com, faq.ui.com, dl.ui.com, sunmax.ui.com, unms.ui.com, critical.ui.com, plm.ui.com, community.status.ui.com

### Unreachable / 000 on probe (recorded, not tested)
beta.community.ui.com, community.status.ui.com, security.community.ui.com, docker*.dl.ui.com, www.* mirror hosts, stg.store.ui.com, crm.trunking.ui.com
