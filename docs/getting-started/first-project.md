---
sidebar_position: 4
title: Create Your First Project
---

# Create Your First Project

Let's dive deeper into creating and managing a project. This guide will walk you through a complete project setup with best practices.

## Planning Your Project

Before creating a project in the system, it helps to plan:

1. **Define objectives** - What are you trying to achieve?
2. **Identify stakeholders** - Who needs to be involved?
3. **Set timeline** - When does it need to be completed?
4. **List deliverables** - What are the key outputs?
5. **Estimate resources** - What team members and tools do you need?

## Creating the Project

### Method 1: From Scratch

1. Click **"New Project"** in the sidebar
2. Select **"Blank Project"**
3. Fill in the details:

```yaml
Project Information:
  Name: Q4 Marketing Campaign
  Description: Launch our new product line with integrated marketing
  Owner: Sarah Johnson
  Status: Planning
  
Timeline:
  Start Date: October 15, 2025
  End Date: December 31, 2025
  
Settings:
  Visibility: Team (visible to all workspace members)
  Template: Marketing Campaign
  Color: #FF6B6B (for easy identification)
```

### Method 2: Using a Template

Templates provide pre-configured structures for common project types.

1. Click **"New Project"**
2. Select **"Choose Template"**
3. Browse available templates:

#### 🚀 Software Development Template
Includes:
- Sprint planning board
- Bug tracking system
- Code review workflow
- Release checklist
- Documentation section

#### 📱 Marketing Campaign Template
Includes:
- Campaign planning phase
- Content creation tasks
- Approval workflow
- Launch checklist
- Analytics tracking

#### 🎨 Design Project Template
Includes:
- Concept and ideation
- Design sprints
- Client review stages
- Revision tracking
- Final deliverables

4. Click **"Use This Template"**
5. Customize as needed

## Setting Up Project Structure

### Create Sections

Organize your project into logical sections:

```
📁 Q4 Marketing Campaign
  ├── 📋 Planning & Strategy
  ├── 🎨 Creative Development
  ├── 📝 Content Creation
  ├── 📊 Campaign Execution
  └── 📈 Analytics & Reporting
```

To create a section:
1. Click **"Add Section"**
2. Name it
3. Drag and drop to reorder

### Add Tasks

For each section, add relevant tasks:

**Example: Planning & Strategy Section**

```markdown
Task 1: Market Research
- Assignee: @research-team
- Due: Oct 20
- Priority: High
- Subtasks:
  - [ ] Competitor analysis
  - [ ] Target audience survey
  - [ ] SWOT analysis
  - [ ] Findings presentation

Task 2: Define Campaign Goals
- Assignee: @sarah
- Due: Oct 22
- Priority: High
- Description: Set measurable KPIs for campaign success
```

## Configuring Project Settings

### 1. Access Control

Control who can see and edit your project:

```
Access Levels:
- Private: Only invited members
- Team: All workspace members
- Public: Anyone with the link
```

**To add members:**
1. Click **"Share"** in the top right
2. Enter email or @mention username
3. Select role:
   - **Admin**: Full project control
   - **Editor**: Can create and edit tasks
   - **Commenter**: Can view and comment
   - **Viewer**: Read-only access

### 2. Custom Fields

Add custom fields to track project-specific data:

| Field Name | Type | Options | Purpose |
|------------|------|---------|---------|
| Budget | Number | Currency: USD | Track spending |
| Department | Select | Marketing, Sales, Engineering | Categorize work |
| Approval Status | Select | Pending, Approved, Rejected | Track approvals |
| Customer | Text | - | Associate with client |

**To add custom fields:**
1. Click project settings ⚙️
2. Select **"Custom Fields"**
3. Click **"Add Field"**
4. Configure and save

### 3. Project Tags

Use tags for organization and filtering:

```
Suggested Tags:
#urgent
#client-facing
#internal
#q4-2025
#high-budget
```

## Setting Up Task Dependencies

Link tasks that depend on each other:

```
Task A: Create design mockups
  ↓ (blocks)
Task B: Get client approval
  ↓ (blocks)
Task C: Begin development
```

**To create dependencies:**
1. Open a task
2. Click **"Add Dependency"**
3. Select **"Blocked by"** or **"Blocking"**
4. Choose the related task

## Configuring Workflows

Define how tasks move through your project:

### Example: Content Approval Workflow

```
To Do → In Progress → Ready for Review → In Review → Approved → Published
```

**To customize your workflow:**
1. Go to project settings
2. Click **"Workflow"**
3. Add/edit/remove statuses
4. Set automation rules:
   ```
   When status changes to "In Review"
     → Notify reviewers
     → Add due date (+2 days)
     → Add "needs-review" label
   ```

## Project Dashboard & Views

### Creating Custom Views

Save filtered views for quick access:

**Example Views:**

1. **My Tasks**
   - Filter: Assigned to me
   - Sort: Due date (ascending)
   - View: List

2. **This Week**
   - Filter: Due date = This week
   - Sort: Priority (descending)
   - View: Board

3. **Blocked Tasks**
   - Filter: Status = Blocked
   - Sort: Created date
   - View: List

**To save a view:**
1. Apply filters and sorting
2. Click **"Save View"**
3. Name it and set visibility

### Project Dashboard Widgets

Add widgets to your project dashboard:

- 📊 **Progress Chart**: Visual completion status
- 📈 **Burndown Chart**: Track work remaining
- 👥 **Team Workload**: See who's busy/available
- ⏰ **Upcoming Deadlines**: Tasks due soon
- 🎯 **Milestone Progress**: Track major goals

## Adding Resources

### Documents
Upload or link relevant documents:
- Project brief
- Meeting notes
- Requirement documents
- Design files

### Links
Save important links:
- Shared drives
- External tools
- Reference materials
- Client portals

### Files
Attach files directly:
- Drag and drop into project
- Or click **"Attach File"**
- Supports images, PDFs, docs, spreadsheets, etc.

## Project Communication

### Project Updates
Post regular updates to keep stakeholders informed:

```markdown
📢 Weekly Update - Oct 20, 2025

Progress This Week:
✅ Completed market research
✅ Finalized campaign goals
✅ Design mockups in progress

Coming Next Week:
🔄 Client review meeting
🔄 Content writing begins
🔄 Social media calendar

Blockers:
⚠️ Waiting for budget approval from finance
```

### Team Meetings
Use the built-in meeting feature:
1. Click **"Schedule Meeting"**
2. Add agenda items
3. Invite participants
4. Take notes during meeting
5. Assign action items

## Best Practices

:::tip Project Management Tips

1. **Start with a Template** - Don't reinvent the wheel
2. **Set Clear Milestones** - Break the project into phases
3. **Assign Ownership** - Every task should have an owner
4. **Update Regularly** - Keep task status current
5. **Use Descriptions** - Add context so others understand
6. **Review Weekly** - Hold regular project review meetings
7. **Close Completed Tasks** - Keep your board clean
8. **Document Decisions** - Use comments to record why choices were made

:::

## Example Project Structure

Here's a complete example for a software release:

```
🚀 Product v2.0 Release
├── 📋 Sprint 1 (Oct 15-29)
│   ├── User authentication redesign
│   ├── Database migration
│   └── API endpoint updates
├── 📋 Sprint 2 (Oct 30 - Nov 12)
│   ├── Frontend UI updates
│   ├── Payment integration
│   └── Notification system
├── 🧪 Testing Phase (Nov 13-26)
│   ├── QA testing
│   ├── Bug fixes
│   ├── Performance testing
│   └── Security audit
├── 📝 Documentation (Nov 27 - Dec 10)
│   ├── User guide updates
│   ├── API documentation
│   ├── Release notes
│   └── Video tutorials
└── 🎉 Launch (Dec 15)
    ├── Marketing announcement
    ├── Customer notifications
    ├── Internal training
    └── Monitoring & support
```

## Next Steps

Now that your project is set up:

1. 📊 [Explore the Dashboard](../user-guide/dashboard) - Learn about the main interface
2. ✅ [Master Task Management](../user-guide/tasks) - Advanced task features
3. 👥 [Manage Your Team](../user-guide/teams) - Team roles and permissions
4. 🤖 [Set Up Automation](../features/automation) - Automate your workflow

---

Questions? [Contact support](mailto:support@example.com) or check our [FAQ](../faq/general).

