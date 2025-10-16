---
sidebar_position: 3
title: Users API
---

# Users API

Manage users and team members via the API.

## Endpoints

### List Users

```http
GET /v1/users
```

**Parameters:**
- `team_id` - Filter by team
- `role` - Filter by role
- `status` - `active`, `inactive`
- `limit` - Items per page
- `cursor` - Pagination cursor

**Example:**
```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  "https://api.example.com/v1/users?team_id=team_123"
```

**Response:**
```json
{
  "data": [
    {
      "id": "user_456",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "member",
      "avatar_url": "https://example.com/avatars/john.jpg",
      "created_at": "2025-01-01T00:00:00Z",
      "last_active": "2025-10-14T10:30:00Z"
    }
  ]
}
```

### Get User

```http
GET /v1/users/:id
```

### Get Current User

```http
GET /v1/users/me
```

Returns the authenticated user's information.

### Update User

```http
PATCH /v1/users/:id
```

**Body:**
```json
{
  "name": "John Smith",
  "email": "john.smith@example.com",
  "avatar_url": "https://example.com/new-avatar.jpg"
}
```

### Invite User

```http
POST /v1/users/invite
```

**Body:**
```json
{
  "email": "newuser@example.com",
  "role": "member",
  "team_ids": ["team_123", "team_456"]
}
```

See full [API documentation](/docs/api/overview) for more details.

