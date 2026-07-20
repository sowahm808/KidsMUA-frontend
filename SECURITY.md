# Security
Refresh tokens are never stored in browser storage. API calls use `/api/v1`, credentials, bearer access tokens in memory, correlation IDs, and idempotency keys for sensitive submissions. Frontend role checks are usability controls only; backend authorization is authoritative.
