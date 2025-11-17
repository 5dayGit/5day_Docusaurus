# Group By in List View
## Overview
The **Group By** feature in List View allows you to organize and visually segment your tasks based on a specific field. This helps you quickly understand how task is distributed—whether by Section, Assignee, Status, Priority, or any custom categorization configured in the project.

Grouping is especially useful for project managers and team members who want a structured view of tasks, identify bottlenecks, or review workload distribution across team members or categories.

Key highlights:

- **User-specific:** Each user can set their own grouping without affecting others.
- **Project-specific:** The selected grouping is saved only for that particular project.
- **Single grouping at a time:** Only one field can be applied for grouping.
- **Option to remove grouping:** Selecting **None** resets the List View to a flat, ungrouped state.

## How to Access It
1. Navigate to any **Project** and open it in **List View**.
1. At the top of the screen, click on **Group By : <current-value>**.
1. A dropdown will appear showing all standard fields and supported custom fields.
1. Select the field you want to group the tasks by.
1. Save the view when prompted to apply the grouping.

## What Happens When Grouping Is Applied
- The List View is reorganized into expandable sections, each representing the selected field’s values.
- Tasks automatically move into their respective groups.
- Any fields dependent on project features (e.g., **Budget Type**) appear only when those project features are enabled.

### Supported Fields for Grouping
#### Standard Fields
1. **Section**
1. **Assignee**
1. **Status**
1. **Priority**
1. **Task Type**
1. **Budget Type** \*
1. **Tags \***

Note: Some standard fields appear only if their related project feature is enabled.

#### Supported Custom Fields
Only the following custom field types are supported for Group By:

- **Dropdown**
- **Rating**
- **Radio Button**

#### Special Option
- **None**\
  Selecting **None** removes all grouping and returns the List View to its default, ungrouped layout.

### Saving Your Changes
Whenever you change the Group By selection:

- A banner appears: **“This view has unsaved changes.”**
- You will see a **Save** button and a **Cancel (❌)** icon.
- Click **Save** to apply the grouping.
- If you navigate away without saving, the changes will **not** persist.
- Once saved, the grouping is stored for:
  - **That project**
  - **That specific user**

This ensures every user can have their own personalized List View experience.
