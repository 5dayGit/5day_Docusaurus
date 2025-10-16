---
sidebar_position: 3
title: Task Management
---

# Task Management

Master the art of task management to boost your productivity.

## Creating Tasks

### Quick Add
Type anywhere in a project:
```
Design homepage [Enter]
```

### Detailed Creation
1. Click **"Add Task"** or press `C`
2. Fill in details:

```yaml
Task Name: Design homepage mockup
Description: Create responsive design for new homepage
Assignee: @designer
Due Date: Oct 25, 2025
Priority: High
Status: To Do
Labels: design, frontend, urgent
```

### Task from Email
Forward emails to: `tasks@yourworkspace.example.com`

### Task from Template
Use saved templates for recurring tasks:
- Weekly report
- Code review
- Client update
- Bug fix

## Task Properties

### Basic Properties

| Property | Description | Example |
|----------|-------------|---------|
| **Name** | Task title | "Write blog post" |
| **Description** | Details and context | "500 words on new feature" |
| **Assignee** | Who's responsible | @john |
| **Due Date** | Deadline | Oct 30, 2025 |
| **Priority** | Importance level | High |
| **Status** | Current state | In Progress |

### Advanced Properties

#### Custom Fields
Add fields specific to your workflow:
- Story points (for agile)
- Budget
- Client name
- Approval status
- Environment (dev, staging, prod)

#### Dependencies
Link related tasks:
```
Task A (Design mockup)
  ↓ blocks
Task B (Get approval)
  ↓ blocks
Task C (Start development)
```

#### Subtasks
Break tasks into smaller steps:
```
✅ Research competitors
✅ Draft outline
🔄 Write content
☐ Add images
☐ Proofread
```

## Task Organization

### Using Labels
Categorize tasks with labels:

**By Type:**
- `bug` - Something broken
- `feature` - New functionality
- `improvement` - Enhancement
- `documentation` - Docs update

**By Status:**
- `blocked` - Waiting on something
- `urgent` - High priority
- `needs-review` - Ready for review

**By Area:**
- `frontend` - UI work
- `backend` - Server-side
- `database` - DB changes
- `design` - Creative work

### Filtering Tasks

Create custom filters:

```
My Urgent Tasks
  Assignee: Me
  Priority: High or Critical
  Status: Not Done
  Due: Next 7 days
```

### Sorting Options
- Due date (ascending/descending)
- Priority (high to low)
- Created date
- Alphabetical
- Custom order (drag and drop)

## Task Details

### Rich Text Description
Format your descriptions:

```markdown
## Overview
Create a responsive design for the new homepage

## Requirements
- Mobile-first approach
- Brand guidelines compliance
- A/B test ready

## Resources
- [Design System](https://example.com/design)
- [Figma File](https://figma.com/file)

## Acceptance Criteria
- [ ] Works on mobile, tablet, desktop
- [ ] Passes accessibility audit
- [ ] Approved by design lead
```

### Attachments
Add files to tasks:
- Images
- Documents
- Spreadsheets
- Links
- Code snippets

Drag and drop or click to upload.

### Comments & Activity
Track discussions and changes:

```
@john added a comment:
"Should we use the blue or green theme?"

@sarah replied:
"Let's go with blue based on user testing"

✓ Task status changed: To Do → In Progress
✓ Due date changed: Oct 30 → Oct 28
```

## Task Workflows

### Simple Workflow
```
To Do → In Progress → Done
```

### Advanced Workflow
```
Backlog → Selected → In Progress → 
Code Review → Testing → Done
```

### Approval Workflow
```
Draft → Review → 
Changes Requested ↺
Approved → Published
```

## Task Assignment

### Assigning to Individuals
Click the assignee field and select a team member.

### Multiple Assignees
Some tasks require multiple people:
```
Task: Launch campaign
Assignees: @marketing (lead), @designer, @writer
```

### Unassigned Tasks
Tasks without an owner show in the "Unassigned" section.

### Assigning to Teams
Assign to a team and let them decide who takes it:
```
Assigned to: @frontend-team
```

## Task Scheduling

### Due Dates
Set when a task must be completed:
- Specific date: Oct 30, 2025
- Relative: "In 3 days"
- Recurring: "Every Monday"

### Start Dates
When work should begin (useful for planning).

### Time Estimates
How long a task should take:
```
Estimated: 4 hours
Actual: 5.5 hours
```

### Recurring Tasks
Set tasks to repeat:
- Daily (e.g., check emails)
- Weekly (e.g., team standup)
- Monthly (e.g., reports)
- Custom (e.g., every 2 weeks)

## Task Priorities

```
🔴 Critical - Drop everything
🟠 High - Important, do soon
🟡 Medium - Normal priority
🟢 Low - Nice to have
⚪ None - No urgency
```

Set priority based on:
- Urgency (time-sensitive?)
- Impact (affects many people?)
- Dependencies (blocking others?)

## Task Collaboration

### Comments
Discuss task details:
```
@john: "Which design version should we use?"
@sarah: "Let's go with option B"
@manager: "Agreed, looks good!"
```

### @Mentions
Notify specific people:
```
@john can you review this?
@team-design FYI
```

### Watching Tasks
Get notified of changes even if not assigned.

### Task Links
Reference other tasks:
```
Related to #123
Duplicate of #456
Blocked by #789
```

## Bulk Actions

Select multiple tasks to:
- Change assignee
- Update status
- Set due dates
- Add labels
- Move to project
- Archive
- Delete

```
Select: [✓] Task 1  [✓] Task 2  [✓] Task 3
Actions: [Assignee] [Status] [Due Date] [Labels]
```

## Task Views

### My Tasks
See all tasks assigned to you across all projects.

### Today View
Tasks due today with focus mode.

### Upcoming
Next 7 days of tasks.

### Completed
Recently finished tasks.

### Custom Views
Save your own filtered views:
```
"Frontend Bugs"
  Labels: bug, frontend
  Status: Open
  Sort: Priority (high to low)
```

## Time Tracking

### Manual Entry
Click the timer icon and log time:
```
Time Spent: 2.5 hours
Notes: "Completed design mockup"
```

### Timer
Start/stop timer while working:
```
⏱️ 01:23:45 [Stop]
Task: Design homepage
```

### Time Reports
See where time is spent:
- By task
- By project
- By person
- By date range

## Task Templates

Save common task structures:

### Code Review Template
```markdown
## Changes
[Describe what changed]

## Testing
- [ ] Unit tests pass
- [ ] Manual testing complete
- [ ] No console errors

## Checklist
- [ ] Code follows style guide
- [ ] Documentation updated
- [ ] No breaking changes
```

### Bug Report Template
```markdown
## Description
[What's broken?]

## Steps to Reproduce
1. Step one
2. Step two
3. Step three

## Expected Behavior
[What should happen]

## Actual Behavior
[What actually happens]

## Environment
- Browser: Chrome 118
- OS: Windows 11
- Version: 2.1.3
```

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `C` | Create task |
| `Cmd/Ctrl + Enter` | Save task |
| `E` | Edit task |
| `A` | Assign to me |
| `D` | Set due date |
| `Cmd/Ctrl + Shift + C` | Add comment |
| `Space` | Mark complete |
| `Del` | Delete task |

## Best Practices

:::tip Task Management Tips

1. **One task, one action** - Keep tasks focused
2. **Write clear titles** - Make it obvious what needs doing
3. **Add context** - Use descriptions and comments
4. **Set realistic deadlines** - Include buffer time
5. **Break down large tasks** - Use subtasks
6. **Review daily** - Start each day reviewing tasks
7. **Close completed tasks** - Keep your list clean
8. **Use templates** - Save time on recurring tasks

:::

## Common Workflows

### Getting Things Done (GTD)
```
Inbox → Next → Scheduled → Waiting → Done
```

### Kanban
```
To Do → In Progress → Review → Done
```

### Agile/Scrum
```
Backlog → Sprint → In Progress → Review → Done
```

## Next Steps

- [Organize Your Team](./teams)
- [View Reports & Analytics](./reports)
- [Set Up Automation](../features/automation)

