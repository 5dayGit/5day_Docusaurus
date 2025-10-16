---
sidebar_position: 1
title: Projects API
---

# Projects API

Manage projects programmatically via the API.

## Endpoints

### List Projects

```http
GET /v1/projects
```

**Parameters:**
- `limit` - Items per page (default: 50, max: 200)
- `cursor` - Pagination cursor
- `status` - Filter by status: `active`, `archived`, `completed`
- `owner_id` - Filter by owner
- `sort` - Sort field: `name`, `created_at`, `-updated_at`

**Example:**
```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  "https://api.example.com/v1/projects?status=active&limit=20"
```

**Response:**
```json
{
  "data": [
    {
      "id": "proj_123",
      "name": "Website Redesign",
      "description": "Q4 marketing website update",
      "status": "active",
      "owner": {
        "id": "user_456",
        "name": "Sarah Johnson",
        "email": "sarah@example.com"
      },
      "created_at": "2025-10-01T00:00:00Z",
      "updated_at": "2025-10-14T10:30:00Z",
      "task_count": 45,
      "completed_tasks": 32
    }
  ],
  "pagination": {
    "next_cursor": "abc123",
    "has_more": true
  }
}
```

### Get Project

```http
GET /v1/projects/:id
```

**Example:**
```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.example.com/v1/projects/proj_123
```

### Create Project

```http
POST /v1/projects
```

**Body:**
```json
{
  "name": "Mobile App Development",
  "description": "iOS and Android apps",
  "owner_id": "user_456",
  "status": "active",
  "start_date": "2025-10-15",
  "due_date": "2025-12-31",
  "template_id": "tmpl_789" // optional
}
```

### Update Project

```http
PATCH /v1/projects/:id
```

### Delete Project

```http
DELETE /v1/projects/:id
```

See full [API documentation](/docs/api/overview) for more details.

