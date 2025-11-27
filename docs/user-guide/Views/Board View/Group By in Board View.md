# Group By in Board View
## Overview
The **Group By** feature in Board View organizes your tasks into vertical columns based on a selected field. Each column represents one value of that field—such as Section, Status, Assignee, Priority, Task Type, Tags, or supported Custom Fields.

Grouping helps you quickly understand how tasks are distributed across categories, identify bottlenecks, and visually track progress using a Kanban-style workflow.

Board View relies heavily on **Group By** for layout. By default, Board View is grouped by **Section**.
### Key Highlights
- **User-specific**: Each user’s grouping applies only to their own view.
- **Project-specific**: Grouping is saved only for that project.
- **One grouping at a time**: Only a single Group By field can be active.
- **Default = Section**: When no grouping is selected or grouping is reset.
- **Remove grouping**: Selecting **None** shows all tasks in a single column titled None.

## How to Access Group By
1. Open any Project in **Board View**.
1. At the top of the board, click **Group By : `<current-value>`**.
1. A dropdown appears showing all supported fields.
1. Select the field you want to group tasks by.
1. Save your view when prompted.

<img width="3560" height="1386" alt="image" src="https://github.com/user-attachments/assets/14d4ceaf-5fca-44f4-9b97-d8f27e854d6b" />


## What Happens When Grouping Is Applied
- The board reorganizes into **vertical Kanban columns**, each representing one value of the selected field.
- Tasks automatically move into their respective columns based on their current values.
- You can **drag and drop tasks** between columns to update the field value instantly.
- If a project feature controls certain fields (e.g., Budget Type), related grouping options appear only when that feature is enabled.
- Empty columns remain visible to help with planning and clarity.

### Supported Fields for Grouping
#### Standard Fields
You can group by the following built-in fields:

- Section
- Assignee
- Status
- Priority
- Task Type
- Budget Type \*
- Tags \*

\* Appears only if the corresponding project feature is enabled.
#### Supported Custom Fields
Only the following custom field types support Group By in Board View:

- **Dropdown** (single-select)
- **Rating**
- **Radio Button**

#### Notes:
- Drag-and-drop automatically updates the underlying task field based on the Group By setting. For example, when the board is grouped by Task Type, dropping a task into a different Task Type column updates the task’s type. If the new type uses a different status workflow, the system prompts you to remap the status before completing the change.
- **Tags are additive** in Board View:\
  Moving a task into a Tag column **adds** the tag while keeping existing tags.
- **Status + Task Type rules**:\
  If a task type uses a different workflow, dragging into an incompatible status column **fails and reverts automatically**.

#### Special Option: None
Selecting **None** removes all grouping.

- Selecting **None** removes all grouping.
- All tasks appear in a single column titled **“None.”**
- **Drag-and-drop is allowed**, and while it does **not** update any task field (since no grouping is applied), it **does change the visual order of tasks** within the column.
- Sorting and filtering continue to work normally.


## Saving Your Changes
When you change the **Group By** option in Board View, a banner appears at the top of the screen saying: **“This view has unsaved changes.”**

You will also see a **Save** button and a **Cancel (❌)** icon.
### **Save**
Click **Save** to store your selected Group By preference.\
Your selection is saved for:

- This project
- Your user account only
### **Cancel**
Click **Cancel** to discard the changes. Board View will return to the previously saved grouping.

