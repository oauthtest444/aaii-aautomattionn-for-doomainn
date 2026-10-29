# API Endpoints (duel.com main SPA) — discovered from JS/network

Base: https://duel.com

| Method | Path | Auth | Params/Notes | Status |
|---|---|---|---|---|
| GET | /api/v2/user | user | full user object | baseline ok |
| GET | /api/v2/metadata | anon | turnstile_sitekey, tos_version, rooms | ok |
| POST | /api/v2/auth/login | anon | username/email, password, turnstile_token (cData=sha256(username)) | ok |
| POST | /api/v2/auth/register | anon | email, username, password, tos_agreed, tos_version, turnstile_token | prior used |
| POST | /api/v2/auth/password/email | anon | password reset request | discovered |
| POST | /api/v2/auth/password/reset | anon | reset | discovered |
| POST | /api/v2/auth/password/update | user | update | discovered |
| POST | /api/v2/auth/attach/email | user | email, onetime_token, current_password | discovered |
| POST | /api/v2/user/username | user | {username} | discovered |
| GET | /api/v2/check-username-availability | user/anon | ?username= | discovered |
| PUT | /api/v2/user/avatar | user | avatar payload | discovered |
| POST | /api/v2/user/email/resend-verification | user | - | discovered |
| POST | /api/v2/user/email/update | user | email, onetime_token, current_password | discovered |
| POST | /api/v2/user/welcome | user | onboarding | discovered |
| GET | /api/v2/user/{username}/profile-link | user | - | discovered |
| POST | /api/v2/user/self-lock | user | - | discovered |
| POST | /api/v2/user/security/token | user | {type} | discovered |
| POST | /api/v2/user/security/two-factor-setup | user | security_token | discovered |
| POST | /api/v2/user/security/2fa-verify | user | - | discovered |
| POST | /api/v2/user/security/two-factor-enable | user | - | discovered |
| POST | /api/v2/user/security/two-factor-disable | user | - | discovered |
| POST | /api/v2/user/security/two-factor-recovery-code | user | - | discovered |
| GET | /api/v2/user/settings | user | - | prior tested |
| PATCH | /api/v2/user/settings | user | {settings:[{setting_name,setting_value}]} | prior tested |
| POST | /api/v2/user/chat/tip | user | amount,username,currency,onetime_token | prior tested (negative) |
| POST | /api/v2/user/chat/host-tip | user | - | discovered |
| POST | /api/v2/user/chat/tip-block | user | - | discovered |
| GET | /api/v2/user/kyc | user | - | prior probed |
| GET | /api/v2/user/payouts | user | - | prior probed |
| GET | /api/v2/referrals/referred-users | user | - | prior probed |
| GET | /api/v2/trade/gift-codes | user | - | prior probed |
| GET | /api/v2/user/profile/{username}/public | anon/user | public profile | discovered |
| GET | /api/v2/user/security/seon-session | user | - | discovered |
| GET | /api/v2/user/surveys | user | - | discovered |
| GET | /api/v2/user/zero-edge-rakeback/status | anon/user | - | observed 200 |
| GET | /api/v2/slots | anon | - | observed |
| GET | /api/v2/games | anon | start,filter | observed |
| POST | /api/v2/store/credit | user | amount,email,currency,onetime_token | discovered |
