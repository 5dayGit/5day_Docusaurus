---
sidebar_position: 2
title: Notifications
---

# Notifications

Stay informed without being overwhelmed. Configure notifications to match your workflow.

## Notification Types

### Task Notifications
- ✅ Task assigned to you
- 📝 Task description changed
- ⏰ Due date approaching
- 🔄 Status changed
- ✔️ Task completed
- 🏷️ Labels added/removed

### Communication Notifications
- 💬 New comment
- @️⃣ Mentioned in comment
- ↩️ Reply to your comment
- ❤️ Reaction to your comment

### Project Notifications
- 📊 Project status changed
- 👥 Added to project
- 🗑️ Removed from project
- 📢 Project announcement

### Team Notifications
- 🤝 Added to team
- 👤 New team member
- 📅 Team meeting scheduled
- 📈 Team milestone reached

## Notification Channels

### In-App Notifications
```
🔔 Notifications (3 new)
────────────────────────────
@john mentioned you
  in "Design homepage"
  5 minutes ago

Task assigned: Bug fix
  by @sarah
  1 hour ago

Due tomorrow: Code review
  in Website Redesign
  2 hours ago
```

Features:
- Real-time updates
- Mark as read/unread
- Archive notifications
- Quick actions

### Email Notifications

#### Instant Emails
Get immediate notifications:
```
Subject: @john mentioned you in "Design homepage"

Hi Sarah,

John mentioned you in a comment on the task "Design homepage":

"@sarah can you review the latest mockup?"

[View Task] [Reply]
```

#### Daily Digest
Summary of the day's activity:
```
Subject: Your Daily Summary - Oct 14, 2025

📬 5 new tasks assigned
💬 8 comments and mentions
✅ 12 tasks completed by your team
⚠️ 2 tasks due tomorrow

[View Full Report]
```

#### Weekly Summary
High-level overview:
```
Subject: Weekly Report - Week of Oct 8

🎯 Completed: 47 tasks
🔄 In Progress: 23 tasks
⏰ Due Next Week: 15 tasks
👥 Team Productivity: ↑ 12%

[View Details]
```

### Mobile Push Notifications
```
📱 Your Product
   @john mentioned you
   "Can you review the design?"
   5 minutes ago
   [Reply] [View]
```

Settings:
- Sound: On/Off
- Vibration: On/Off
- Badge count: Yes/No
- Preview: Show/Hide
- Quiet hours: 10 PM - 8 AM

### Desktop Notifications
```
┌──────────────────────────┐
│ 🔔 New Task Assignment   │
│                          │
│ Bug Fix Required         │
│ by @sarah                │
│                          │
│ [View] [Dismiss]         │
└──────────────────────────┘
```

### Browser Notifications
Enable in your browser settings

Supported browsers:
- Chrome/Edge
- Firefox
- Safari
- Opera

## Notification Settings

### General Settings
```yaml
Notification Preferences:
  Email Frequency: Daily digest
  Mobile Push: High priority only
  Desktop: Enabled
  Browser: Enabled
  Quiet Hours: 10 PM - 8 AM
  Weekends: Pause non-urgent
```

### Custom Rules
Create notification rules:

**Rule 1: High Priority Tasks**
```
When: Task assigned to me
AND: Priority is High or Critical
Then: Send instant email + push notification
```

**Rule 2: Team Mentions**
```
When: @team-design mentioned
Then: Send in-app notification only
Time: During work hours only
```

**Rule 3: Project Updates**
```
When: Project status changes
AND: I'm a project admin
Then: Send email summary daily
```

### Per-Project Settings
Override defaults for specific projects:
```
Project: Website Redesign
  All updates: Instant
  Comments: Instant
  Status changes: Instant
  
Project: Internal Docs
  All updates: Daily digest
  Comments: Daily digest
  Status changes: Off
```

### Per-Task Settings
Watch/unwatch individual tasks:
```
Task: Design Homepage
Status: ⭐ Watching
Notifications: All activity

Task: Update Logo
Status: 🔇 Muted
Notifications: None
```

## Notification Management

### Notification Center
```
Today
  🔴 @john mentioned you (unread)
  ⚪ Task assigned: Bug fix (read)
  ⚪ Comment added to "Testing" (read)

Yesterday
  ⚪ 5 tasks completed (read)
  ⚪ Project status updated (read)

Archived (23)
```

Actions:
- Mark as read/unread
- Archive
- Delete
- Quick reply
- Open task

### Filtering Notifications
```
Show: All | Unread | Mentions | Assignments

Filter by:
  Project: [Website Redesign ▼]
  Type: [Comments ▼]
  Date: [Last 7 days ▼]
```

### Batch Actions
```
Select All | Select None

[x] @john mentioned you
[x] Task assigned: Bug fix
[x] Comment on "Testing"

Actions: Mark Read | Archive | Delete
```

## Smart Notifications

### Priority-Based
Automatically categorize:
```
🔴 Critical
  - Critical priority tasks
  - Overdue items
  - Direct mentions
  
🟡 Important
  - High priority tasks
  - Today's due dates
  - Project changes
  
🟢 Normal
  - Regular updates
  - Team activity
  - Completed tasks
```

### Time-Based Grouping
Bundle related notifications:
```
5 updates in Website Redesign (10 min ago)
  • @john completed "Homepage design"
  • @sarah added comment
  • 3 subtasks completed
[View All]
```

### Intelligent Filtering
Reduce noise by:
- Grouping similar notifications
- Hiding low-priority updates
- Surfacing urgent items
- Learning from your behavior

## Do Not Disturb

### Manual Mode
```
Do Not Disturb: On
  Until: Tomorrow 9 AM
  
Exceptions:
  ✓ Critical priority tasks
  ✓ Direct mentions
  ✗ All other notifications
```

### Schedule
```
Auto-Enable DND:
  Weekdays: 10:00 PM - 8:00 AM
  Weekends: All day
  Holidays: All day
  
Always Allow:
  • Critical priority
  • Mentions from managers
```

### Focus Mode
During focused work:
```
Focus Mode: Active
  • Pause all notifications
  • Auto-reply to mentions
  • Queue for later review
  
Duration: 2 hours
[End Now] [Extend]
```

## Integration Notifications

### Slack
```
#project-updates
  🤖 Product Bot
  @sarah assigned you "Bug fix"
  Priority: High | Due: Oct 16
  [View Task] [Accept]
```

### Microsoft Teams
```
Product App
New comment on your task
@john: "Can you review this?"
[Reply] [View in Product]
```

### Email Client
Integration with:
- Gmail
- Outlook
- Apple Mail

Create tasks from emails
Link emails to tasks

## Notification Best Practices

:::tip Managing Notifications

1. **Start conservative** - Begin with fewer notifications
2. **Use digests** - Reduce interruptions
3. **Set quiet hours** - Protect personal time
4. **Mute low-priority** - Focus on what matters
5. **Review weekly** - Adjust settings as needed
6. **Use channels wisely** - Different channels for different urgencies
7. **Archive regularly** - Keep notification center clean
8. **Leverage rules** - Automate what's important

:::

## Troubleshooting

### Not Receiving Notifications?

Check:
1. ✅ Notification settings enabled
2. ✅ Email not in spam folder
3. ✅ Mobile app permissions granted
4. ✅ Not in Do Not Disturb mode
5. ✅ Browser notifications allowed

### Too Many Notifications?

Solutions:
1. Switch to daily digest
2. Mute less important projects
3. Use smart filtering
4. Enable quiet hours
5. Customize per-project settings

### Missing Important Updates?

Tips:
1. Create rules for critical items
2. Watch important tasks
3. Enable multiple channels
4. Check notification center regularly
5. Subscribe to project announcements

## Next Steps

- [Set Up Integrations](../features/integrations)
- [Configure Automation](../features/automation)
- [Manage Your Workspace](../user-guide/settings)

