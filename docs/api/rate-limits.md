---
sidebar_position: 4
title: Rate Limits
---

# Rate Limits

Understand API rate limits and how to handle them.

## Limits by Plan

| Plan | Per Hour | Per Minute | Burst |
|------|----------|------------|-------|
| Free | 1,000 | 100 | 20 |
| Professional | 10,000 | 500 | 100 |
| Enterprise | 100,000+ | Custom | Custom |

## Checking Rate Limits

Response headers show your rate limit status:

```http
X-RateLimit-Limit: 10000
X-RateLimit-Remaining: 9847
X-RateLimit-Reset: 1634234567
X-RateLimit-Reset-After: 3600
```

## Handling Rate Limits

### 429 Response

When rate limited:

```json
{
  "error": {
    "type": "rate_limit_error",
    "message": "Rate limit exceeded",
    "retry_after": 3600
  }
}
```

### Best Practices

```javascript
async function fetchWithRetry(url, options, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    const response = await fetch(url, options);
    
    if (response.status === 429) {
      const retryAfter = response.headers.get('Retry-After') || 60;
      await sleep(retryAfter * 1000);
      continue;
    }
    
    return response;
  }
}
```

## Optimization Tips

1. **Cache responses** - Don't request same data repeatedly
2. **Use webhooks** - Instead of polling
3. **Batch requests** - Combine multiple operations
4. **Filter results** - Request only what you need
5. **Monitor usage** - Track remaining quota

See [API Overview](/docs/api/overview) for more details.

