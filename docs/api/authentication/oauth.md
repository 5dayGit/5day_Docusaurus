---
sidebar_position: 2
title: OAuth 2.0
---

# OAuth 2.0 Authentication

Use OAuth 2.0 to authenticate users and access their data on their behalf.

## When to Use OAuth

**Use OAuth when:**
- Building user-facing applications
- Need user-specific permissions
- Users log in with their account
- Don't want to manage passwords

**Use API keys when:**
- Server-to-server communication
- Background jobs
- Internal tools
- System integrations

## OAuth Flow

### Authorization Code Flow

**Recommended for:**
- Web applications
- Mobile apps
- Desktop applications

**Flow diagram:**
```
1. Your App → User → Login Page (our site)
2. User grants permission
3. Redirect back with authorization code
4. Your App → Exchange code for access token
5. Use access token to make API requests
```

## Implementation

### Step 1: Register Your Application

1. Go to Settings → **Developers** → **OAuth Apps**
2. Click **"New OAuth App"**
3. Fill in details:
   ```yaml
   Application Name: My Awesome App
   Homepage URL: https://myapp.com
   Authorization Callback URL: https://myapp.com/oauth/callback
   Description: My integration with Product
   ```
4. Save and get:
   - Client ID
   - Client Secret

### Step 2: Authorize User

Redirect user to:
```
https://app.example.com/oauth/authorize?
  client_id=YOUR_CLIENT_ID&
  redirect_uri=YOUR_CALLBACK_URL&
  response_type=code&
  scope=tasks:read tasks:write projects:read&
  state=RANDOM_STRING
```

**Parameters:**
- `client_id`: Your application's client ID
- `redirect_uri`: Where to send user after authorization
- `response_type`: Always `code` for authorization code flow
- `scope`: Space-separated permissions
- `state`: Random string to prevent CSRF

### Step 3: Handle Callback

User will be redirected to:
```
https://myapp.com/oauth/callback?
  code=AUTHORIZATION_CODE&
  state=RANDOM_STRING
```

**Verify:**
1. `state` matches what you sent
2. `code` is present

### Step 4: Exchange Code for Token

```bash
POST https://app.example.com/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code&
code=AUTHORIZATION_CODE&
client_id=YOUR_CLIENT_ID&
client_secret=YOUR_CLIENT_SECRET&
redirect_uri=YOUR_CALLBACK_URL
```

**Response:**
```json
{
  "access_token": "at_abc123...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "rt_def456...",
  "scope": "tasks:read tasks:write projects:read"
}
```

### Step 5: Use Access Token

```bash
curl -H "Authorization: Bearer at_abc123..." \
  https://api.example.com/v1/tasks
```

## Scopes

### Available Scopes

**Tasks:**
- `tasks:read` - View tasks
- `tasks:write` - Create/edit tasks
- `tasks:delete` - Delete tasks

**Projects:**
- `projects:read` - View projects
- `projects:write` - Create/edit projects
- `projects:delete` - Delete projects

**Users:**
- `users:read` - View user info
- `users:write` - Update user info

**Files:**
- `files:read` - View files
- `files:write` - Upload files
- `files:delete` - Delete files

**Admin:**
- `admin:*` - Full access (requires approval)

### Requesting Scopes

```
scope=tasks:read tasks:write projects:read
```

**Best practice:** Request only needed scopes

## Refresh Tokens

Access tokens expire after 1 hour. Use refresh tokens to get new access tokens without user interaction.

### Refreshing Token

```bash
POST https://app.example.com/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token&
refresh_token=rt_def456...&
client_id=YOUR_CLIENT_ID&
client_secret=YOUR_CLIENT_SECRET
```

**Response:**
```json
{
  "access_token": "at_new789...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "rt_new012...",
  "scope": "tasks:read tasks:write projects:read"
}
```

## Token Management

### Revoking Tokens

```bash
POST https://app.example.com/oauth/revoke
Content-Type: application/x-www-form-urlencoded

token=at_abc123...&
client_id=YOUR_CLIENT_ID&
client_secret=YOUR_CLIENT_SECRET
```

### Token Info

```bash
GET https://api.example.com/v1/oauth/token/info
Authorization: Bearer at_abc123...
```

**Response:**
```json
{
  "client_id": "YOUR_CLIENT_ID",
  "user_id": "user_123",
  "scopes": ["tasks:read", "tasks:write"],
  "expires_at": "2025-10-14T11:30:00Z"
}
```

## Code Examples

### JavaScript/Node.js

```javascript
// Step 1: Redirect to authorization
app.get('/login', (req, res) => {
  const state = generateRandomString();
  req.session.oauthState = state;
  
  const authUrl = new URL('https://app.example.com/oauth/authorize');
  authUrl.searchParams.append('client_id', CLIENT_ID);
  authUrl.searchParams.append('redirect_uri', REDIRECT_URI);
  authUrl.searchParams.append('response_type', 'code');
  authUrl.searchParams.append('scope', 'tasks:read tasks:write');
  authUrl.searchParams.append('state', state);
  
  res.redirect(authUrl.toString());
});

// Step 2: Handle callback
app.get('/oauth/callback', async (req, res) => {
  const { code, state } = req.query;
  
  // Verify state
  if (state !== req.session.oauthState) {
    return res.status(400).send('Invalid state');
  }
  
  // Exchange code for token
  const tokenResponse = await fetch('https://app.example.com/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI
    })
  });
  
  const tokens = await tokenResponse.json();
  
  // Store tokens securely
  req.session.accessToken = tokens.access_token;
  req.session.refreshToken = tokens.refresh_token;
  
  res.redirect('/dashboard');
});

// Step 3: Use token
app.get('/my-tasks', async (req, res) => {
  const response = await fetch('https://api.example.com/v1/tasks', {
    headers: {
      'Authorization': `Bearer ${req.session.accessToken}`
    }
  });
  
  const tasks = await response.json();
  res.json(tasks);
});
```

### Python

```python
from flask import Flask, redirect, request, session
import requests

app = Flask(__name__)
app.secret_key = 'your-secret-key'

CLIENT_ID = 'your-client-id'
CLIENT_SECRET = 'your-client-secret'
REDIRECT_URI = 'http://localhost:5000/oauth/callback'

@app.route('/login')
def login():
    state = generate_random_string()
    session['oauth_state'] = state
    
    auth_url = (
        f'https://app.example.com/oauth/authorize'
        f'?client_id={CLIENT_ID}'
        f'&redirect_uri={REDIRECT_URI}'
        f'&response_type=code'
        f'&scope=tasks:read tasks:write'
        f'&state={state}'
    )
    
    return redirect(auth_url)

@app.route('/oauth/callback')
def callback():
    code = request.args.get('code')
    state = request.args.get('state')
    
    # Verify state
    if state != session.get('oauth_state'):
        return 'Invalid state', 400
    
    # Exchange code for token
    token_response = requests.post(
        'https://app.example.com/oauth/token',
        data={
            'grant_type': 'authorization_code',
            'code': code,
            'client_id': CLIENT_ID,
            'client_secret': CLIENT_SECRET,
            'redirect_uri': REDIRECT_URI
        }
    )
    
    tokens = token_response.json()
    
    # Store tokens
    session['access_token'] = tokens['access_token']
    session['refresh_token'] = tokens['refresh_token']
    
    return redirect('/dashboard')

@app.route('/my-tasks')
def my_tasks():
    response = requests.get(
        'https://api.example.com/v1/tasks',
        headers={
            'Authorization': f"Bearer {session['access_token']}"
        }
    )
    
    return response.json()
```

## Security Best Practices

:::tip OAuth Security

1. **Validate state parameter** - Prevents CSRF attacks
2. **Use HTTPS only** - Never use HTTP in production
3. **Secure client secret** - Never expose in frontend
4. **Short-lived access tokens** - Reduces risk if compromised
5. **Validate redirect_uri** - Prevent token hijacking
6. **Store tokens securely** - Encrypt in database
7. **Rotate refresh tokens** - On each use
8. **Implement token expiry** - Check before use
9. **Use PKCE** - For mobile/SPA apps
10. **Monitor for abuse** - Alert on suspicious activity

:::

## PKCE (For Mobile/SPA)

Proof Key for Code Exchange adds security for public clients.

### Flow with PKCE

1. **Generate code verifier:**
```javascript
const codeVerifier = generateRandomString(128);
```

2. **Create code challenge:**
```javascript
const codeChallenge = base64UrlEncode(sha256(codeVerifier));
```

3. **Authorization request:**
```
https://app.example.com/oauth/authorize?
  client_id=YOUR_CLIENT_ID&
  redirect_uri=YOUR_CALLBACK&
  response_type=code&
  code_challenge=CODE_CHALLENGE&
  code_challenge_method=S256
```

4. **Token exchange:**
```bash
POST /oauth/token
{
  "grant_type": "authorization_code",
  "code": "AUTHORIZATION_CODE",
  "client_id": "YOUR_CLIENT_ID",
  "code_verifier": "CODE_VERIFIER"
}
```

## Troubleshooting

### "invalid_client"

- Check client ID and secret
- Ensure credentials are correct
- Verify app is not disabled

### "invalid_redirect_uri"

- Must exactly match registered URI
- Include protocol (https://)
- No trailing slash unless registered

### "invalid_scope"

- Requested scope not allowed
- Check available scopes
- Request approval for restricted scopes

### "access_denied"

- User declined authorization
- Handle gracefully in your app
- Don't retry automatically

## Testing

### Test Mode

Use test credentials for development:
```
Client ID: test_abc123
Client Secret: test_secret_def456
```

- Separate from production
- Safe for testing
- No real data affected

## Next Steps

- [API Keys](/docs/api/authentication/api-keys) - Server authentication
- [Endpoints](/docs/api/endpoints/tasks) - API resources
- [Rate Limits](/docs/api/rate-limits) - Usage limits
- [Webhooks](/docs/api/webhooks) - Real-time events

Need help? Email api-support@example.com

