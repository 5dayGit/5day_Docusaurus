---
sidebar_position: 4
title: Automation
---

# Automation

Save time and reduce manual work with powerful automation rules that handle repetitive tasks automatically.

## What is Automation?

Automation lets you create rules that trigger actions automatically based on specific conditions. Think of it as "if this happens, then do that."

```
When [trigger] happens
  And [conditions] are met
  Then [actions] are performed
```

## Creating Automation Rules

### Basic Rule Structure

**Example: Auto-assign to team lead**
```yaml
Rule Name: Assign high-priority bugs to lead
Trigger: Task created
Conditions:
  - Label contains "bug"
  - Priority is "High" or "Critical"
Actions:
  - Assign to @team-lead
  - Send notification
  - Add comment: "High priority bug detected"
```

### Step-by-Step Creation

1. Go to Project Settings → **"Automation"**
2. Click **"Create Rule"**
3. Choose trigger
4. Add conditions (optional)
5. Select actions
6. Name and save rule

## Triggers

### Task Triggers
```
✓ Task created
✓ Task updated
✓ Task completed
✓ Task deleted
✓ Task assigned
✓ Status changed
✓ Due date approaching
✓ Task overdue
```

### Project Triggers
```
✓ Project created
✓ Project status changed
✓ Milestone reached
✓ Budget threshold exceeded
✓ Deadline approaching
```

### Time Triggers
```
✓ Specific date/time
✓ Daily at [time]
✓ Weekly on [day]
✓ Monthly on [date]
✓ X days before due date
✓ X hours after creation
```

### Comment Triggers
```
✓ Comment added
✓ Comment mentions @user
✓ Comment contains keyword
```

## Conditions

### Task Conditions
```
Field        | Operators           | Examples
-------------|---------------------|-------------------
Status       | is, is not          | "In Progress"
Priority     | is, is not          | "High", "Critical"
Assignee     | is, is not, is empty| @john, @team
Due Date     | is, before, after   | Tomorrow, Oct 30
Labels       | contains, not       | "bug", "urgent"
Project      | is, is not          | "Website Redesign"
Created by   | is, is not          | @sarah
Custom field | is, contains        | Budget > 1000
```

### Logical Operators
```
AND - All conditions must be true
OR  - At least one condition must be true
NOT - Condition must not be true
```

**Example:**
```
When task created
AND priority is "High"
OR  label contains "urgent"
AND assignee is empty
Then assign to @manager
```

## Actions

### Task Actions
```
✓ Assign to user/team
✓ Change status
✓ Set due date
✓ Update priority
✓ Add/remove labels
✓ Add comment
✓ Create subtask
✓ Duplicate task
✓ Move to project
✓ Archive task
```

### Notification Actions
```
✓ Send email notification
✓ Send Slack message
✓ Send push notification
✓ Create announcement
```

### Integration Actions
```
✓ Create GitHub issue
✓ Send webhook
✓ Update CRM
✓ Post to calendar
✓ Update spreadsheet
```

### Custom Actions
```
✓ Call API endpoint
✓ Run custom script
✓ Execute webhook
```

## Example Automation Rules

### 1. Welcome New Team Members
```yaml
Trigger: User added to workspace
Actions:
  - Send welcome email
  - Assign onboarding tasks
  - Add to #general Slack channel
  - Schedule intro meeting
```

### 2. Bug Triage
```yaml
Trigger: Task created
Conditions:
  - Label is "bug"
Actions:
  - Set priority to "High"
  - Assign to @qa-lead
  - Add to "Bug Triage" project
  - Send Slack notification to #bugs
  - Add comment: "Please triage within 24h"
```

### 3. Deadline Reminders
```yaml
Trigger: 1 day before due date
Conditions:
  - Status is not "Done"
  - Status is not "Cancelled"
Actions:
  - Send email to assignee
  - Send push notification
  - Add comment: "⏰ Due tomorrow!"
  - Notify project manager
```

### 4. Auto-close Completed Tasks
```yaml
Trigger: Status changed to "Done"
Actions:
  - Add completion timestamp
  - Archive after 7 days
  - Send congrats message
  - Update project progress
  - Log time spent
```

### 5. Escalation Rule
```yaml
Trigger: Task overdue
Conditions:
  - Priority is "High" or "Critical"
  - Overdue by 2+ days
Actions:
  - Notify manager
  - Change priority to "Critical"
  - Add label "escalated"
  - Send urgent email
  - Post in #urgent Slack channel
```

### 6. Client Approval Workflow
```yaml
Trigger: Status changed to "Ready for Review"
Actions:
  - Assign to client
  - Send approval request email
  - Set due date: +3 days
  - Add comment: "Please review and approve"
  - Create calendar reminder
```

### 7. Sprint Automation
```yaml
Trigger: Every Monday at 9:00 AM
Actions:
  - Create sprint planning task
  - Send meeting invite to team
  - Generate last week's report
  - Move incomplete tasks to new sprint
  - Update sprint board
```

### 8. Time Tracking Reminder
```yaml
Trigger: Task completed
Conditions:
  - Time tracked is 0
  - Project requires time tracking
Actions:
  - Send reminder to log time
  - Prevent task closure
  - Notify project manager
```

## Advanced Automation

### Conditional Branching
```yaml
When: Task status changed
  
If status is "Done":
  - Mark complete
  - Archive
  - Send notification
  
Else if status is "Blocked":
  - Assign to manager
  - Add "needs-help" label
  - Send urgent notification
  
Else:
  - Continue normal workflow
```

### Chained Automation
```yaml
Rule 1: Task completed
  → Action: Create follow-up task

Rule 2: Follow-up task created (triggered by Rule 1)
  → Action: Assign to reviewer
  → Action: Set due date +2 days
```

### Variable Actions
Use variables in automation:
```yaml
Actions:
  - Add comment: "Assigned to {{assignee.name}}"
  - Send email to: {{task.creator.email}}
  - Set due date: {{today + 7 days}}
  - Create subtask: "Review {{task.name}}"
```

Available variables:
```
{{task.name}}
{{task.assignee}}
{{task.creator}}
{{task.due_date}}
{{project.name}}
{{today}}
{{now}}
{{user.name}}
```

### Bulk Actions
Apply rules to multiple tasks:
```yaml
Trigger: Manual bulk action
Selection:
  - All tasks in project
  - With label "migration"
Actions:
  - Change status to "In Progress"
  - Assign to @migration-team
  - Set due date: Oct 31
  - Add comment: "Migration wave 1"
```

## Templates

### Pre-built Templates

#### Agile/Scrum
```
✓ Auto-move tasks through sprint
✓ Daily standup reminders
✓ Sprint planning automation
✓ Velocity tracking
✓ Burndown updates
```

#### Bug Tracking
```
✓ Bug triage workflow
✓ Severity assignment
✓ Auto-assign to developers
✓ QA verification
✓ Release notes generation
```

#### Content Publishing
```
✓ Draft → Review → Approve → Publish
✓ Editorial calendar sync
✓ SEO checklist
✓ Social media posting
✓ Analytics tracking
```

#### Sales Pipeline
```
✓ Lead assignment
✓ Follow-up reminders
✓ Deal stage progression
✓ Contract generation
✓ Onboarding trigger
```

## Testing Automation

### Test Mode
Test rules before activating:
```
Test Rule: Bug assignment
Test Data:
  Task: Sample bug report
  Priority: High
  Label: bug

Expected Result:
  ✓ Assigned to @qa-lead
  ✓ Slack notification sent
  ✓ Comment added

Actual Result:
  ✓ All actions completed successfully
```

### Dry Run
Preview automation effects:
```
Dry Run Mode: ON
  
Would perform:
  ✓ Assign task #123 to @sarah
  ✓ Send email to sarah@example.com
  ✓ Add comment "Auto-assigned"
  ✓ Update status to "In Progress"

[Cancel] [Run for Real]
```

## Monitoring Automation

### Automation Log
Track all automated actions:
```
Oct 14, 10:30 AM - Rule: Bug triage
  Trigger: Task #456 created
  Conditions: Met (label="bug")
  Actions: 3 completed successfully
  Duration: 0.5s

Oct 14, 10:15 AM - Rule: Deadline reminder
  Trigger: Scheduled (daily)
  Actions: 12 emails sent
  Duration: 2.1s

Oct 14, 10:00 AM - Rule: Auto-assign
  Trigger: Task #455 created
  Conditions: Not met (skipped)
```

### Performance Metrics
```
Rule: Bug triage
Executions: 47
Success rate: 100%
Avg duration: 0.7s
Time saved: ~3.2 hours/week
```

### Error Handling
```
Error: Failed to send Slack notification
Rule: Bug assignment
Task: #789
Timestamp: Oct 14, 10:45 AM
Reason: Slack API rate limit

Retry: Scheduled in 5 minutes
Status: ⚠️ Pending retry
```

## Rate Limits & Quotas

```
Plan: Professional
Automation Limits:
  Rules per workspace: 100
  Executions per day: 10,000
  API calls per rule: 50
  
Current Usage:
  Rules: 23/100 (23%)
  Executions today: 1,847/10,000 (18%)
```

## Best Practices

:::tip Automation Tips

1. **Start simple** - Begin with basic rules
2. **Test thoroughly** - Use test mode first
3. **Monitor regularly** - Check automation logs
4. **Avoid loops** - Don't create circular rules
5. **Use conditions** - Be specific to avoid unintended triggers
6. **Document rules** - Explain why they exist
7. **Review periodically** - Clean up unused rules
8. **Optimize performance** - Combine similar rules

:::

## Common Pitfalls

### ❌ Don't Do This
```
Bad Rule: Too broad
  Trigger: Task updated
  Action: Send email to team
  
Problem: Sends email on EVERY update (too noisy)
```

### ✅ Do This Instead
```
Good Rule: Specific and useful
  Trigger: Task updated
  Conditions:
    - Status changed to "Blocked"
    - Priority is "High"
  Action: Send email to manager
  
Result: Only notifies when important
```

## Troubleshooting

### Rule Not Triggering?
Check:
1. ✅ Rule is enabled
2. ✅ Conditions are correct
3. ✅ Trigger event occurred
4. ✅ No conflicting rules
5. ✅ Permissions are sufficient

### Actions Not Working?
Verify:
1. ✅ Integration is connected
2. ✅ API quotas not exceeded
3. ✅ User has required permissions
4. ✅ Target resources exist
5. ✅ No rate limiting

## Next Steps

- [API Documentation](../api/overview)
- [Webhook Setup](../api/webhooks)
- [Integration Guide](../features/integrations)

