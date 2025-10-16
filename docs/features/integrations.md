---
sidebar_position: 3
title: Integrations
---

# Integrations

Connect your favorite tools and streamline your workflow with powerful integrations.

## Popular Integrations

### 💬 Communication

#### Slack
Connect your Slack workspace:

**Features:**
- Create tasks from Slack messages
- Get notifications in Slack channels
- Update task status from Slack
- Link conversations to tasks

**Setup:**
1. Go to Settings → Integrations
2. Click **"Connect Slack"**
3. Authorize workspace
4. Choose default channel
5. Configure notifications

**Commands:**
```
/product create Design homepage
/product assign @sarah
/product list my tasks
/product complete [task-id]
```

#### Microsoft Teams
Integration with Microsoft Teams:
- Post updates to channels
- Create tasks from messages
- Bot commands
- Status sync

#### Discord
For gaming/community teams:
- Task notifications
- Webhook support
- Bot integration

### 📧 Email

#### Gmail
Sync with Gmail:
- Create tasks from emails
- Link emails to tasks
- Send task updates via email
- Two-way sync

#### Outlook
Microsoft Outlook integration:
- Email to task conversion
- Calendar sync
- Contact sync
- Meeting integration

### 📅 Calendar

#### Google Calendar
Sync deadlines and meetings:
```
Sync Settings:
  ✓ Task due dates → Calendar events
  ✓ Project milestones → Calendar
  ✓ Team meetings → Calendar
  ✓ Time blocks for focused work
  
Calendar: work@example.com
Update: Real-time
```

#### Outlook Calendar
Microsoft calendar integration

#### Apple Calendar
iCal feed for Apple devices

### 🔧 Development Tools

#### GitHub
Connect repositories:

**Features:**
- Link commits to tasks
- Track pull requests
- Auto-close tasks on merge
- Sync issues

**Configuration:**
```yaml
Repository: your-org/your-repo
Branch: main
Auto-link commits: Yes
PR templates: Enabled
Issue sync: Two-way
```

**Example:**
```bash
git commit -m "Fix homepage bug #TASK-123"
# Automatically links to task #123
```

#### GitLab
Similar to GitHub:
- Issue tracking
- Merge request linking
- Pipeline status
- Code review integration

#### Bitbucket
Atlassian's Git solution:
- Repository sync
- Build status
- Deployment tracking

### 💻 IDE Integrations

#### VS Code Extension
Install from marketplace:

**Features:**
- View tasks in sidebar
- Create tasks from TODOs
- Link code to tasks
- Time tracking

**Commands:**
```
// TODO: @TASK-123 Fix login validation
// FIXME: @TASK-456 Update API endpoint
```

#### JetBrains
Plugin for IntelliJ, WebStorm, PyCharm:
- Task management
- Time tracking
- Context switching

### ☁️ Cloud Storage

#### Google Drive
Sync files and folders:
```
Connected Account: user@example.com

Auto-sync:
  ✓ Task attachments → Drive
  ✓ Project folders → Drive
  
Folder: /Product/Projects
Permission: Team can edit
```

#### Dropbox
File synchronization:
- Attach Dropbox files
- Auto-upload attachments
- Shared folders

#### OneDrive
Microsoft cloud storage:
- SharePoint integration
- Office 365 sync
- Team folders

### 📊 Analytics

#### Google Analytics
Track product usage:
- User behavior
- Feature adoption
- Conversion tracking

#### Mixpanel
Product analytics:
- Event tracking
- Funnel analysis
- User cohorts

### 🎨 Design Tools

#### Figma
Design collaboration:
- Embed Figma files
- Link designs to tasks
- Version tracking
- Comment sync

#### Adobe Creative Cloud
Creative suite integration:
- Asset management
- Version control
- Review workflows

### 📱 Mobile

#### iOS Shortcuts
Create custom shortcuts:
```
Shortcut: Add Task
  1. Ask for task name
  2. Ask for due date
  3. Create task via API
  4. Show confirmation
```

#### Android Tasker
Automate with Tasker:
- Voice commands
- Location-based tasks
- Time triggers

## API Integration

### REST API
Full API access:

**Authentication:**
```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.example.com/v1/tasks
```

**Endpoints:**
- `/tasks` - Task management
- `/projects` - Project operations
- `/users` - User management
- `/comments` - Comments
- `/files` - File uploads

**Example: Create Task**
```javascript
fetch('https://api.example.com/v1/tasks', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Design homepage',
    assignee: 'sarah@example.com',
    due_date: '2025-10-30',
    priority: 'high'
  })
})
```

### Webhooks
Receive real-time updates:

**Setup:**
1. Go to Settings → Webhooks
2. Click **"Add Webhook"**
3. Enter URL: `https://your-server.com/webhook`
4. Select events:
   - task.created
   - task.updated
   - task.completed
   - comment.added
5. Save webhook

**Payload Example:**
```json
{
  "event": "task.created",
  "timestamp": "2025-10-14T10:30:00Z",
  "data": {
    "id": "task_123",
    "name": "Design homepage",
    "assignee": "sarah@example.com",
    "project_id": "proj_456"
  }
}
```

### GraphQL API
Query exactly what you need:

```graphql
query GetMyTasks {
  tasks(assignee: "me", status: "open") {
    id
    name
    dueDate
    priority
    project {
      name
    }
  }
}
```

## Zapier Integration

### What is Zapier?
Connect 5,000+ apps without code.

### Popular Zaps

#### Zap 1: Email to Task
```
Trigger: New email in Gmail
  Label: "To-Do"
  
Action: Create task in Product
  Name: Email subject
  Description: Email body
  Priority: High
```

#### Zap 2: Form to Project
```
Trigger: New response in Google Forms
  Form: Project request form
  
Action: Create project in Product
  Name: Form response
  Assign to: Form submitter
```

#### Zap 3: Completion to Slack
```
Trigger: Task completed in Product
  Project: Website Redesign
  
Action: Send message to Slack
  Channel: #wins
  Message: "🎉 {task.name} completed by {user.name}"
```

### Setting Up Zapier
1. Sign up at zapier.com
2. Search for "Product" integration
3. Connect your account
4. Create your first Zap
5. Test and activate

## Integration Marketplace

Browse all integrations:
```
Categories:
  📱 Communication (15)
  📊 Analytics (8)
  🔧 Development (12)
  ☁️ Storage (6)
  📧 Email (4)
  🎨 Design (7)
  📈 Marketing (10)
  💰 Finance (5)
```

### Featured Integrations
- ⭐ Slack (Most popular)
- ⭐ Google Workspace
- ⭐ GitHub
- ⭐ Zoom
- ⭐ Salesforce

### Coming Soon
- Notion
- Linear
- Airtable
- Miro
- Loom

## Custom Integrations

### Build Your Own
Use our API to create custom integrations:

**Example: Custom Dashboard**
```javascript
// Fetch data from Product API
const tasks = await fetch('/api/tasks');
const projects = await fetch('/api/projects');

// Display in your custom UI
renderDashboard(tasks, projects);
```

### OAuth 2.0
Secure authentication for your app:
1. Register your application
2. Get client credentials
3. Implement OAuth flow
4. Request access tokens

### SDK Libraries
Official libraries:
- JavaScript/TypeScript
- Python
- Ruby
- PHP
- Go

**Python Example:**
```python
from product_api import Client

client = Client(api_key='YOUR_API_KEY')
tasks = client.tasks.list(assignee='me')

for task in tasks:
    print(f"Task: {task.name}")
```

## Integration Best Practices

:::tip Integration Tips

1. **Start simple** - Connect one tool at a time
2. **Test thoroughly** - Verify data flows correctly
3. **Monitor usage** - Check integration logs
4. **Secure credentials** - Rotate API keys regularly
5. **Handle errors** - Implement retry logic
6. **Rate limits** - Respect API limits
7. **Document** - Keep notes on your setup
8. **Update regularly** - Keep integrations current

:::

## Troubleshooting

### Integration Not Working?

**Check:**
1. ✅ Credentials are valid
2. ✅ Permissions granted
3. ✅ Integration is enabled
4. ✅ No rate limit reached
5. ✅ Service is online

**Common Issues:**
- **401 Unauthorized** - Check API key
- **403 Forbidden** - Check permissions
- **429 Too Many Requests** - Rate limit hit
- **500 Server Error** - Service issue

### Debug Mode
Enable detailed logging:
```
Settings → Integrations → Debug Mode
  ✓ Log all requests
  ✓ Log responses
  ✓ Include headers
  ✓ Mask sensitive data
```

## Security

### OAuth Security
- Tokens expire after 1 hour
- Refresh tokens valid for 30 days
- Revoke access anytime

### API Key Security
- Use environment variables
- Never commit to git
- Rotate keys quarterly
- Limit key permissions

### Audit Log
Track integration activity:
```
Oct 14, 10:30 AM - GitHub integration
  Action: Task created
  Commit: abc123
  User: @john

Oct 14, 10:15 AM - Slack integration
  Action: Notification sent
  Channel: #updates
```

## Next Steps

- [API Documentation](../api/overview)
- [Set Up Automation](../features/automation)
- [Configure Webhooks](../api/webhooks)

