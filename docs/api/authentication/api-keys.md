---
sidebar_position: 1
title: API Keys
---

# API Key Authentication

Learn how to create and manage API keys for accessing our API.

## What are API Keys?

API keys are secret tokens that authenticate your requests to our API. They act like passwords for your applications.

**Properties:**
- Unique to your account
- Bearer token authentication
- Can be revoked anytime
- Support different permissions

## Creating API Keys

### Via Dashboard

1. Go to Settings → **API**
2. Click **"Generate New Key"**
3. Configure key:
   ```yaml
   Name: Production App
   Description: Main application backend
   Permissions: Read/Write
   Rate Limit: Default
   Expires: Never (or set date)
   ```
4. Click **"Create Key"**
5. **Copy immediately** (shown only once!)

### Via API

```bash
POST /v1/api-keys
Authorization: Bearer EXISTING_API_KEY
Content-Type: application/json

{
  "name": "New Integration",
  "permissions": ["tasks:read", "tasks:write"],
  "expires_at": "2026-10-14T00:00:00Z"
}
```

**Response:**
```json
{
  "id": "key_abc123",
  "key": "sk_live_xyz789...",
  "name": "New Integration",
  "permissions": ["tasks:read", "tasks:write"],
  "created_at": "2025-10-14T10:30:00Z",
  "expires_at": "2026-10-14T00:00:00Z"
}
```

:::danger Save Your Key!
The full key is only shown once at creation.
Store it securely immediately.
:::

## Using API Keys

### Basic Usage

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.example.com/v1/tasks
```

### With JavaScript

```javascript
const response = await fetch('https://api.example.com/v1/tasks', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});
```

### With Python

```python
import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.example.com/v1/tasks', headers=headers)
```

### Using SDKs

Most SDKs handle authentication automatically:

```javascript
// JavaScript
import { ProductClient } from '@product/api-client';

const client = new ProductClient({
  apiKey: process.env.PRODUCT_API_KEY
});
```

```python
# Python
from product_api import Client

client = Client(api_key=os.environ['PRODUCT_API_KEY'])
```

## Key Types

### Live Keys

```
sk_live_abc123...
```

- Production use
- Real data
- Counts against quota
- Careful handling required

### Test Keys

```
sk_test_abc123...
```

- Development/testing
- Sandbox environment
- Doesn't affect production
- No real data

## Permissions

### Permission Scopes

Control what each key can access:

**Read Permissions:**
- `tasks:read` - View tasks
- `projects:read` - View projects
- `users:read` - View users

**Write Permissions:**
- `tasks:write` - Create/update tasks
- `projects:write` - Create/update projects
- `users:write` - Create/update users

**Delete Permissions:**
- `tasks:delete` - Delete tasks
- `projects:delete` - Delete projects

**Admin Permissions:**
- `admin:*` - Full access (dangerous!)

### Setting Permissions

```bash
POST /v1/api-keys
{
  "name": "Read-only Key",
  "permissions": [
    "tasks:read",
    "projects:read"
  ]
}
```

**Best practice:** Grant minimum required permissions

## Security Best Practices

### Storage

**DO:**
```javascript
// ✅ Use environment variables
const apiKey = process.env.PRODUCT_API_KEY;

// ✅ Use secret management
const apiKey = await getSecret('product-api-key');
```

**DON'T:**
```javascript
// ❌ Never hardcode
const apiKey = 'sk_live_abc123...';

// ❌ Never commit to git
// config.json
{
  "apiKey": "sk_live_abc123..."
}

// ❌ Never expose in frontend
<script>
  const apiKey = 'sk_live_abc123...';
</script>
```

### Key Rotation

Rotate keys regularly:

**Rotation process:**
1. Create new key
2. Update services to use new key
3. Test thoroughly
4. Revoke old key
5. Monitor for issues

**Recommended frequency:**
- Production: Every 90 days
- Development: Every 180 days
- Immediately if compromised

### Monitoring

Monitor key usage:

**Check for:**
- Unusual traffic patterns
- Requests from unexpected IPs
- Failed authentication attempts
- Rate limit hits

**Alert on:**
- Authentication failures
- Suspicious activity
- Quota exceeded
- Key used from new location

## Managing API Keys

### List All Keys

```bash
GET /v1/api-keys
Authorization: Bearer YOUR_API_KEY
```

**Response:**
```json
{
  "data": [
    {
      "id": "key_123",
      "name": "Production App",
      "prefix": "sk_live_abc...",
      "last_used": "2025-10-14T10:30:00Z",
      "created_at": "2025-01-01T00:00:00Z",
      "expires_at": null
    },
    {
      "id": "key_456",
      "name": "Mobile App",
      "prefix": "sk_live_def...",
      "last_used": "2025-10-14T09:15:00Z",
      "created_at": "2025-03-15T00:00:00Z",
      "expires_at": "2026-03-15T00:00:00Z"
    }
  ]
}
```

:::info Note
Full keys are never returned after creation.
Only the prefix is shown for identification.
:::

### Update Key

```bash
PATCH /v1/api-keys/key_123
{
  "name": "Production App (updated)",
  "permissions": ["tasks:read", "tasks:write", "projects:read"]
}
```

### Revoke Key

```bash
DELETE /v1/api-keys/key_123
```

All requests with this key will fail immediately.

### Key Details

```bash
GET /v1/api-keys/key_123
```

**Response:**
```json
{
  "id": "key_123",
  "name": "Production App",
  "permissions": ["tasks:read", "tasks:write"],
  "created_at": "2025-01-01T00:00:00Z",
  "last_used": "2025-10-14T10:30:00Z",
  "expires_at": null,
  "usage": {
    "requests_today": 1234,
    "requests_this_month": 45678
  }
}
```

## Rate Limits

Each API key has rate limits:

| Plan | Hourly | Per Minute |
|------|--------|------------|
| Free | 1,000 | 100 |
| Professional | 10,000 | 500 |
| Enterprise | Custom | Custom |

**Check limits:**
```bash
GET /v1/rate-limit
Authorization: Bearer YOUR_API_KEY
```

**Response:**
```json
{
  "limit": 10000,
  "remaining": 9847,
  "reset": 1634234567,
  "reset_at": "2025-10-14T11:00:00Z"
}
```

**Response headers:**
```
X-RateLimit-Limit: 10000
X-RateLimit-Remaining: 9847
X-RateLimit-Reset: 1634234567
```

## Expiration

### Setting Expiration

```bash
POST /v1/api-keys
{
  "name": "Temporary Key",
  "expires_at": "2025-12-31T23:59:59Z"
}
```

### Extending Expiration

```bash
PATCH /v1/api-keys/key_123
{
  "expires_at": "2026-12-31T23:59:59Z"
}
```

### Auto-Renewal

Enterprise feature:
- Keys auto-renew before expiration
- Notification sent 30 days before
- Seamless transition
- No downtime

## Troubleshooting

### "401 Unauthorized"

**Possible causes:**
1. Invalid API key
2. Expired key
3. Revoked key
4. Wrong format

**Check:**
```bash
# Correct format
Authorization: Bearer sk_live_abc123...

# Wrong formats
Authorization: sk_live_abc123...  # Missing "Bearer"
Authorization: Bearer abc123      # Invalid key format
```

### "403 Forbidden"

**Cause:** Insufficient permissions

**Solution:**
1. Check key permissions
2. Add required permission
3. Or create new key with correct permissions

### "429 Too Many Requests"

**Cause:** Rate limit exceeded

**Solution:**
1. Wait for rate limit reset
2. Implement exponential backoff
3. Cache responses
4. Upgrade plan for higher limits

## Best Practices

:::tip API Key Best Practices

1. **One key per application** - Easier to manage and revoke
2. **Minimum permissions** - Grant only what's needed
3. **Environment variables** - Never hardcode keys
4. **Rotate regularly** - Every 90 days minimum
5. **Monitor usage** - Watch for anomalies
6. **Revoke unused keys** - Reduce attack surface
7. **Use test keys** - For development
8. **Set expiration** - For temporary integrations
9. **Document keys** - Note what each key is for
10. **Never share** - Each developer gets their own

:::

## Examples

### Complete Example

```javascript
// Load from environment
const apiKey = process.env.PRODUCT_API_KEY;

if (!apiKey) {
  throw new Error('API key not found');
}

// Create client
async function makeRequest(endpoint, options = {}) {
  const response = await fetch(
    `https://api.example.com/v1${endpoint}`,
    {
      ...options,
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        ...options.headers
      }
    }
  );
  
  // Check rate limits
  const remaining = response.headers.get('X-RateLimit-Remaining');
  if (remaining < 100) {
    console.warn('Rate limit low:', remaining);
  }
  
  // Handle errors
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  
  return response.json();
}

// Use it
const tasks = await makeRequest('/tasks');
```

## Next Steps

- [OAuth Authentication](/docs/api/authentication/oauth) - User-based auth
- [Tasks Endpoint](/docs/api/endpoints/tasks) - Working with tasks
- [Rate Limits](/docs/api/rate-limits) - Understanding limits
- [Webhooks](/docs/api/webhooks) - Real-time events

Need help? Email api-support@example.com

