---
sidebar_position: 4
title: Team Management
---

# Team Management

Learn how to build, organize, and manage your teams effectively.

## Creating a Team

### Basic Team Setup
1. Navigate to **"Teams"** in the sidebar
2. Click **"Create Team"**
3. Enter team details:

```yaml
Team Name: Frontend Development
Description: Responsible for all UI/UX development
Team Lead: @sarah
Members: 8 people
Privacy: Private (team members only)
```

## Team Structure

### Typical Organization

```
🏢 Company Workspace
  ├── 👥 Engineering
  │   ├── 💻 Frontend Team
  │   ├── ⚙️ Backend Team
  │   └── 🔧 DevOps Team
  ├── 🎨 Design Team
  ├── 📊 Marketing Team
  └── 🤝 Sales Team
```

## Team Roles & Permissions

| Role | Add Members | Manage Projects | Delete Team | View Analytics |
|------|-------------|-----------------|-------------|----------------|
| **Team Lead** | ✅ | ✅ | ✅ | ✅ |
| **Admin** | ✅ | ✅ | ❌ | ✅ |
| **Member** | ❌ | Limited | ❌ | Limited |
| **Guest** | ❌ | View only | ❌ | ❌ |

## Inviting Team Members

### Individual Invites
1. Click **"Invite Member"**
2. Enter email address
3. Select role
4. Add personal message (optional)
5. Click **"Send Invitation"**

### Bulk Invites
Import multiple members:

```csv
email,role,team
john@example.com,member,frontend
jane@example.com,member,frontend
alex@example.com,admin,frontend
```

### Invitation Links
Generate shareable invite link:
1. Team Settings → **"Invite Link"**
2. Set expiration date
3. Copy and share link

## Team Collaboration

### Team Projects
Projects visible to all team members:
- Shared workspace
- Common goals
- Team visibility

### Team Discussions
Central place for team communication:
```
📢 Announcements
💬 General Discussion
🎯 Sprint Planning
🐛 Bug Reports
```

### Shared Resources
Access team-wide resources:
- Documentation
- Templates
- File library
- Code snippets

## Team Workload

### Capacity View
See who's available:

```
Team Member    | Tasks | Capacity | Status
---------------|-------|----------|--------
@sarah         | 8     | 90%      | 🟡 Busy
@john          | 5     | 60%      | 🟢 Available
@jane          | 12    | 120%     | 🔴 Overloaded
@alex          | 3     | 30%      | 🟢 Available
```

### Workload Balancing
Redistribute work:
1. View team workload
2. Identify overloaded members
3. Reassign tasks
4. Monitor capacity

## Team Performance

### Metrics Dashboard

#### Completion Rate
```
This Week: 87% (32/37 tasks completed)
Last Week: 92% (45/49 tasks completed)
Trend: ↓ -5%
```

#### Velocity
```
Sprint 12: 45 story points
Sprint 11: 38 story points
Sprint 10: 42 story points
Average: 42 points/sprint
```

#### Response Time
```
Average response to tasks: 2.3 hours
Average time to complete: 1.8 days
```

### Team Reports
Generate reports on:
- Task completion
- Time tracking
- Project progress
- Individual contributions

## Team Calendar

### Shared Events
- Team meetings
- Sprint planning
- Deadlines
- Company holidays
- Time off

### Scheduling
See when team members are available:
```
Monday, Oct 16
  9:00 AM - Team Standup (All)
  2:00 PM - Design Review (@sarah, @jane)
  4:00 PM - Sprint Planning (All)
```

## Team Settings

### Notification Preferences
Set team-wide defaults:
- New task assignments
- Project updates
- Mentions and comments
- Deadline reminders

### Working Hours
Define team schedule:
```
Time Zone: PST (UTC-8)
Working Hours: 9:00 AM - 5:00 PM
Working Days: Monday - Friday
```

### Integrations
Connect team tools:
- Slack channel
- GitHub organization
- Google Drive folder
- Jira board

## Guest Access

### Adding Guests
For external collaborators:
1. Click **"Invite Guest"**
2. Enter email
3. Select specific projects
4. Set expiration (optional)

### Guest Limitations
Guests can:
- View assigned projects
- Comment on tasks
- Upload files

Guests cannot:
- See other projects
- Invite others
- Access team settings
- View analytics

## Best Practices

:::tip Team Success Tips

1. **Clear roles** - Define responsibilities
2. **Regular check-ins** - Daily standups or weekly sync
3. **Shared goals** - Align on objectives
4. **Open communication** - Encourage discussions
5. **Balance workload** - Monitor capacity
6. **Celebrate wins** - Recognize achievements
7. **Document decisions** - Keep context
8. **Cross-training** - Share knowledge

:::

## Team Templates

### Agile/Scrum Team
- Sprint planning tools
- Daily standup checklist
- Retrospective templates
- Burndown charts

### Marketing Team
- Campaign calendars
- Content workflows
- Approval processes
- Analytics dashboard

### Design Team
- Design sprints
- Review processes
- Asset libraries
- Brand guidelines

## Next Steps

- [Create Reports](./reports)
- [Configure Settings](./settings)
- [Set Up Integrations](../features/integrations)

