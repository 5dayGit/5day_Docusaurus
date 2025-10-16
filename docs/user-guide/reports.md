---
sidebar_position: 5
title: Reports & Analytics
---

# Reports & Analytics

Track progress, measure performance, and gain insights with powerful reporting tools.

## Overview Dashboard

Your analytics homepage shows:
- Key metrics
- Recent trends
- Team performance
- Project health

## Report Types

### 📊 Project Reports

#### Progress Report
```
Project: Website Redesign
Completion: 67%
────────────────────────────
Completed:  24 tasks ✅
In Progress: 8 tasks  🔄
To Do:       4 tasks  ☐
Overdue:     2 tasks  ⚠️
```

#### Timeline Report (Gantt)
Visual project schedule showing:
- Task dependencies
- Milestones
- Critical path
- Resource allocation

### 👥 Team Reports

#### Workload Report
```
Team Member | Assigned | Completed | Overdue | Capacity
------------|----------|-----------|---------|----------
Sarah       | 12       | 8         | 1       | 95%
John        | 8        | 6         | 0       | 70%
Jane        | 15       | 10        | 3       | 120% ⚠️
```

#### Performance Report
- Tasks completed per week
- Average completion time
- Response time to assignments
- Quality metrics

### ⏰ Time Reports

#### Time Tracking Summary
```
This Week: 156 hours logged
By Project:
  Website Redesign:  68h (44%)
  Mobile App:        52h (33%)
  Bug Fixes:         36h (23%)

By Team Member:
  Sarah:  42h
  John:   38h
  Jane:   40h
  Alex:   36h
```

#### Billable Hours
For client work:
- Total hours
- Billable vs non-billable
- Hourly rates
- Invoice generation

### 📈 Productivity Reports

#### Velocity Chart
Track team capacity over time:
```
Sprint | Completed | Trend
-------|-----------|-------
12     | 45 pts    | ↑ +7
11     | 38 pts    | ↓ -4
10     | 42 pts    | ↑ +2
 9     | 40 pts    | --
```

#### Burndown Chart
```
│
50│ ╲
40│  ╲
30│   ╲___
20│      ╲___
10│         ╲___
 0│____________╲___
  Day1 Day3 Day5 Day7
```

Shows work remaining vs time.

## Custom Reports

### Creating Custom Reports

1. Click **"New Report"**
2. Select report type
3. Configure filters:

```yaml
Report Name: High Priority Bugs
Type: Task List
Filters:
  - Label: bug
  - Priority: High or Critical
  - Status: Open
  - Created: Last 30 days
Group By: Assignee
Sort By: Priority (descending)
```

### Report Filters

Available filters:
- Date range
- Projects
- Team members
- Task status
- Priority level
- Labels
- Custom fields

### Saving Reports
Save frequently used reports:
1. Configure your filters
2. Click **"Save Report"**
3. Name it
4. Set sharing permissions

## Visual Analytics

### Charts & Graphs

#### Pie Chart
Task distribution by status:
```
     Done (65%)
    ████████████
In Progress (20%)  To Do (15%)
   ████              ████
```

#### Bar Chart
Tasks completed per week:
```
Week 1: ████████ 24
Week 2: ██████████ 30
Week 3: ████████████ 36
Week 4: ██████ 18
```

#### Line Chart
Completion trend over time

#### Burnup Chart
Work completed vs total scope

### Dashboard Widgets

Add widgets to your dashboard:
- Summary cards
- Progress bars
- Charts
- Task lists
- Calendars
- Team activity

## Scheduled Reports

### Email Reports
Receive reports automatically:

```yaml
Report: Weekly Team Summary
Recipients:
  - team@example.com
  - manager@example.com
Schedule: Every Monday at 9 AM
Format: PDF + Excel
```

### Report Frequency
- Daily
- Weekly
- Monthly
- Quarterly
- Custom schedule

## Exporting Data

### Export Formats

#### CSV
```csv
Task,Assignee,Status,Due Date,Priority
Design homepage,Sarah,In Progress,2025-10-30,High
Write content,John,Done,2025-10-28,Medium
```

#### Excel (.xlsx)
Includes:
- Multiple sheets
- Formatting
- Charts
- Formulas

#### PDF
Professional formatted reports:
- Cover page
- Charts and graphs
- Executive summary
- Detailed tables

#### JSON
For programmatic access:
```json
{
  "tasks": [
    {
      "id": "123",
      "name": "Design homepage",
      "status": "in_progress",
      "assignee": "sarah"
    }
  ]
}
```

## Key Metrics

### Project Health Score
Composite score based on:
- ✅ On-time completion rate (30%)
- 📊 Progress vs schedule (25%)
- 👥 Team capacity (20%)
- 🐛 Bug rate (15%)
- 💬 Communication activity (10%)

```
Project Health: 87/100 (Excellent)
```

### Team Velocity
Average work completed per sprint:
```
Current: 45 story points
Average: 42 story points
Trend: ↑ +7% (improving)
```

### Completion Rate
```
Overall: 92%
This Month: 94%
Last Month: 89%
Trend: ↑ +5%
```

### Time to Complete
```
Average: 2.3 days
Fastest: 0.5 days
Slowest: 7.2 days
```

## Report Sharing

### Sharing Options
- **Private**: Only you
- **Team**: Your team members
- **Workspace**: Everyone in workspace
- **Public Link**: Anyone with link
- **Scheduled Email**: Regular distribution

### Permissions
- View only
- Can edit
- Can share
- Can delete

## Best Practices

:::tip Analytics Tips

1. **Review regularly** - Check reports weekly
2. **Set benchmarks** - Define success metrics
3. **Track trends** - Look for patterns over time
4. **Share insights** - Discuss findings with team
5. **Take action** - Use data to improve processes
6. **Keep it simple** - Start with basic reports
7. **Automate delivery** - Schedule important reports
8. **Compare periods** - Week over week, month over month

:::

## Example Reports

### Executive Summary
For leadership:
- High-level overview
- Key achievements
- Challenges and blockers
- Resource needs
- Budget status

### Sprint Retrospective
For team review:
- What went well
- What to improve
- Action items
- Velocity and capacity
- Team morale

### Client Report
For external stakeholders:
- Milestone progress
- Deliverables completed
- Upcoming work
- Timeline status
- Budget tracking

## Next Steps

- [Customize Settings](./settings)
- [Learn About Automation](../features/automation)
- [Explore Integrations](../features/integrations)

