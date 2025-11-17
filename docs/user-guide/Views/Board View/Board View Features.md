# Board View Features
## Overview
Board View provides additional controls that let you fine-tune how tasks, subtasks, and columns are displayed. These settings allow you to show or hide completed work, choose how subtasks appear, and manage or reset your saved Board View layout.

These configurations are:

- **User-specific** (each user can maintain personal preferences)
- **Project-specific** (changes apply only to the currently opened project)

The Board View features menu helps every user tailor the Kanban board to match their working and reviewing style.

## How to Access the Additional Features
1. Navigate to any **Project → Board View**.
1. Click the **three-dot menu (⋮)** located in the top-right corner.
1. A menu will open showing all available Board View configuration options.

### Feature Details
Below are detailed explanations of every option available in the three-dot menu.
#### 1\. Show Completed Tasks
Controls the visibility of tasks whose Status belongs to any **Done** stage.

**Behavior:**

- **Enabled (✓)** → Completed tasks appear on the board.
- **Disabled** → Completed tasks are hidden from all board columns.

**Notes:**

- This is a visibility toggle only — no data is removed.
- Useful for decluttering the board when focusing on active work.

#### 2\. Show Completed Subtasks
Works exactly like Show Completed Tasks, but applies to **subtasks**.

**Behavior:**

- **Enabled (✓)** → Completed subtasks appear either:
  - Inside parent task cards
  - Or as separate cards (if “Show Subtask as a Separate Task” is enabled)
- **Disabled** → Completed subtasks are hidden from the board.

#### 3\. Show Completed Sections
Sections also have statuses (New, In Progress, Done).

**Behavior:**

- **Enabled (✓)** → Columns representing completed Sections are visible.
- **Disabled** → Columns belonging to Sections in the “Done” stage are hidden.

**Note:**\
` `This setting affects **column visibility**, not task visibility.

#### 4\. Show Subtask as a Separate Task
Determines how subtasks appear in Board View.

### **Enabled (✓):**
- Subtasks appear as **standalone task cards** directly on the board.
- They appear in the correct Group By column based on their own attributes (Status, Assignee, Priority, etc.).
- Subtasks remain linked to their parent task.
### **Disabled:**
- Subtasks appear **only inside the parent task card**.
- They are visible when you expand the subtask icon on the card.

**Notes:**

- Very useful when subtasks follow separate workflows or must be tracked visually.
- This matches agile/sprint workflows where subtasks move independently.

#### 5\. Save View
Use **Save View** to save all the board configuration preferences currently applied, such as:

- Filters
- Sort order
- Group By selection
- Customize settings (field visibility / card layout)
- Show/Hide Completed Tasks
- Show/Hide Completed Subtasks
- Show/Hide Completed Sections
- Show Subtask as Separate Task
- Column order (Section-only), if supported in your product
- Any view-level preference that affects how the board is displayed

#### 6\. Set as Default View
Allows the user to set the current Board View layout as their **default** for this project.

### **Behavior:**
Every time the user opens this project, the chosen Board View will load automatically.

The default view can include:

- Group By field
- Sort field
- Filters
- Customize selections
- Show Completed Tasks / Subtasks
- Show Completed Sections
- Subtasks as separate tasks setting
- Any display preferences previously saved

#### 7\. Reset to Default View
Restores the **system’s original Board View** configuration for this project.

#### **This resets:**
- All filters
- Sort order
- Group By selection
- Customize settings
- Subtask display options
- Completed tasks/subtasks/section visibility toggles
- Any additional unsaved or saved user configurations

Use this option to clear all personal modifications and revert to the default Board view layout.
