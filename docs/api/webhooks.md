---
sidebar_position: 5
title: Webhooks
---

# Webhooks

Receive real-time notifications when events occur in your workspace.

## What are Webhooks?

Webhooks send HTTP POST requests to your server when events occur. Instead of polling our API, we notify you instantly.

**Benefits:**
- Real-time updates
- Reduced API calls
- Lower latency
- More efficient

## Creating Webhooks

### Via Dashboard

1. Settings → **Webhooks**
2. Click **"Create Webhook"**
3. Configure:
   ```yaml
   URL: https://your-server.com/webhooks
   Events: task.created, task.updated
   Secret: auto-generated
   Active: Yes
   ```
4. Save

### Via API

```bash
POST /v1/webhooks
{
  "url": "https://your-server.com/webhooks",
  "events": ["task.created", "task.updated", "task.completed"],
  "secret": "your_webhook_secret"
}
```

## Available Events

### Task Events
- `task.created` - New task created
- `task.updated` - Task modified
- `task.completed` - Task marked done
- `task.deleted` - Task removed
- `task.assigned` - Task assigned to user

### Project Events
- `project.created`
- `project.updated`
- `project.archived`
- `project.deleted`

### Comment Events
- `comment.created`
- `comment.updated`
- `comment.deleted`

### User Events
- `user.added`
- `user.removed`
- `user.role_changed`

## Webhook Payload

### Example Payload

```json
{
  "event": "task.created",
  "timestamp": "2025-10-14T10:30:00Z",
  "webhook_id": "webhook_123",
  "data": {
    "id": "task_789",
    "name": "Design homepage",
    "status": "todo",
    "priority": "high",
    "project_id": "proj_123",
    "assignee_id": "user_456",
    "created_by": "user_789",
    "due_date": "2025-10-30"
  }
}
```

## Handling Webhooks

### Verify Signature

**Important:** Always verify webhook signatures!

```javascript
const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
    
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

app.post('/webhooks', (req, res) => {
  const signature = req.headers['x-webhook-signature'];
  const payload = JSON.stringify(req.body);
  
  if (!verifyWebhook(payload, signature, WEBHOOK_SECRET)) {
    return res.status(401).send('Invalid signature');
  }
  
  // Process webhook
  const { event, data } = req.body;
  
  if (event === 'task.created') {
    console.log('New task:', data.name);
  }
  
  res.status(200).send('OK');
});
```

### Respond Quickly

Return 200 response immediately:

```javascript
app.post('/webhooks', async (req, res) => {
  // Respond first
  res.status(200).send('OK');
  
  // Process async
  processWebhook(req.body).catch(console.error);
});
```

### Retry Logic

We retry failed webhooks:
- Retry 1: After 1 minute
- Retry 2: After 5 minutes
- Retry 3: After 30 minutes

After 3 failures, webhook is disabled.

## Security

### Signature Verification

Headers include signature:
```
X-Webhook-Signature: sha256=abc123...
X-Webhook-ID: webhook_123
X-Webhook-Timestamp: 1634234567
```

### IP Whitelist

Our webhook IPs:
```
203.0.113.0/24
198.51.100.0/24
```

### HTTPS Only

Webhooks must use HTTPS in production.

## Testing

### Test Webhook

Send test payload:

```bash
POST /v1/webhooks/:id/test
```

### Webhook Logs

View recent deliveries:

```bash
GET /v1/webhooks/:id/deliveries
```

Response:
```json
{
  "data": [
    {
      "id": "delivery_123",
      "event": "task.created",
      "timestamp": "2025-10-14T10:30:00Z",
      "status": "success",
      "response_code": 200,
      "response_time_ms": 145
    }
  ]
}
```

## Best Practices

:::tip Webhook Best Practices

1. **Verify signatures** - Always!
2. **Respond quickly** - Return 200 ASAP
3. **Process async** - Don't block response
4. **Handle duplicates** - Use idempotency keys
5. **Monitor failures** - Alert on errors
6. **Use HTTPS** - Security first
7. **Log events** - For debugging
8. **Handle retries** - Expect duplicate deliveries

:::

## Troubleshooting

### Not Receiving Webhooks?

Check:
1. URL is accessible
2. Returns 200 status
3. HTTPS (production)
4. Firewall allows our IPs
5. Webhook is active

### Webhook Disabled?

After 3 consecutive failures, webhooks auto-disable.

**To reactivate:**
1. Fix your endpoint
2. Test webhook
3. Re-enable in dashboard

## Next Steps

- [API Overview](/docs/api/overview) - API basics
- [Authentication](/docs/api/authentication/api-keys) - API keys
- [Events](/docs/api/endpoints/tasks) - Available resources

Questions? Email api-support@example.com

