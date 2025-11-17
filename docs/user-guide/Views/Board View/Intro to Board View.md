# Board View 
## Overview
Board View in 5day.io provides a visual, Kanban-style way to manage tasks.\
Each task appears as a card, and each column represents a group — such as Section, Status, Priority, Assignee, Task Type, Tags, Budget Type, or a supported Custom Field — based on the **Group By** selection you apply.

Board View is ideal for teams who prefer a drag-and-drop workflow to track progress, update attributes, and quickly organize work. By default, Board View is grouped by **Section**.

## Subscription Association
Board View is available on all subscription plans.


## Role & Permissions
What a user sees or can modify in Board View depends entirely on the **roles and permissions** assigned to them in your account.

Users can only view or modify the tasks and subtasks they have permission to access.\
All task visibility rules and allowed actions in Board View follow the **Task Roles & Permissions** configuration.

For complete details on task-level visibility and permissions, refer to the Task Roles & Permissions documentation:

[**https://github.com/5dayGit/5day_Docusaurus/blob/main/docs/user-guide/5day.io**](https://github.com/5dayGit/5day_Docusaurus/blob/main/docs/user-guide/5day.io) **Structure/Task/Roles and Permission of Task.md**



## How to Access Board View
1. Open any project.
1. Click **Board** from the top view selector.
1. Board View loads with cards organized by the currently selected **Group By** option (default: Section).

## What You Can Do in Board View
### 1\. View Tasks as Cards
Each task is shown as a card that includes key information such as:

- Task Name
- Assignee
- Status
- Due Date / Start Date
- Priority
- Budget Type (if enabled)
- Progress
- Custom Field values (e.g., Rating, Dropdown, Number, Radio Button, etc.)

If the task contains subtasks, a **subtask icon** appears on the card.\
Clicking this opens the subtask list inside the card.

Clicking the card opens the **Task Detail Panel**, where all information can be viewed and edited.

### 2\. Drag and Drop Tasks
You can drag a task card from one column to another to update values instantly.
### **Important Behaviour**
- Drag-and-drop is allowed across **all Group By fields**.
- However, if **Group By = Status** and the task type uses a different workflow, you can drop visually but the system **reverts the move** and shows an error.
- When Group By = Task Type, moving task from one task type to another type displays a **status mapping screen** to remap statuses.

### 3\. Group Tasks Visually
Board View is driven by **Group By**, which determines how columns are structured.
#### Supported Group By Fields
**Standard Fields**

- Section
- Assignee
- Status
- Priority
- Task Type
- Tags
- Budget Type

**Custom Fields (Supported Types Only):**

- Dropdown (single-select)
- Rating
- Radio Button

**Not Supported in Board Grouping:**

- Multi-select dropdowns
- Text fields
- Number fields
- Date or Date/Time
- URL, Email, Checkbox, Time fields

**None**

- All tasks appear under a single column titled **“None”**.
#### Additional Rules
- Grouping is **user-specific** (does not affect others).
- Grouping is **project-specific** when saved.
#### Notes: 
- Group By = None shows all tasks under a single column titled **“None”**.
- Dragging a task into a tag’s column does **not** replace its existing tags. Instead, the system **adds the new tag** to the task while keeping the tags it already has.
- Custom field grouping only supports **Dropdown**, **Rating**, and **Radio Button**.
