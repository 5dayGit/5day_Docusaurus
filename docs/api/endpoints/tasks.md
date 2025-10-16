---
sidebar_position: 2
title: Tasks API
---

# Tasks API

Manage tasks via the API.

## Endpoints

### List Tasks

```http
GET /v1/tasks
```

**Query Parameters:**
- `project_id` - Filter by project
- `assignee_id` - Filter by assignee  
- `status` - Filter by status
- `priority` - Filter by priority
- `due_after` - Tasks due after date
- `due_before` - Tasks due before date
- `label` - Filter by label
- `limit` - Items per page
- `cursor` - Pagination cursor

**Example:**
```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  "https://api.example.com/v1/tasks?assignee_id=user_123&status=open"
```

**Response:**
```json
{
  "data": [
    {
      "id": "task_789",
      "name": "Design homepage mockup",
      "description": "Create responsive design",
      "status": "in_progress",
      "priority": "high",
      "project_id": "proj_123",
      "assignee": {
        "id": "user_456",
        "name": "John Doe"
      },
      "due_date": "2025-10-30",
      "created_at": "2025-10-14T10:30:00Z",
      "updated_at": "2025-10-14T10:30:00Z"
    }
  ],
  "pagination": {
    "next_cursor": "def456",
    "has_more": true
  }
}
```

### Get Task

```http
GET /v1/tasks/:id
```

### Create Task

```http
POST /v1/tasks
```

**Body:**
```json
{
  "name": "Implement login page",
  "description": "Create responsive login UI",
  "project_id": "proj_123",
  "assignee_id": "user_456",
  "due_date": "2025-10-25",
  "priority": "high",
  "status": "todo",
  "labels": ["frontend", "urgent"]
}
```

### Update Task

```http
PATCH /v1/tasks/:id
```

### Delete Task

```http
DELETE /v1/tasks/:id
```

### Complete Task

```http
POST /v1/tasks/:id/complete
```

See full [API documentation](/docs/api/overview) for more details.

