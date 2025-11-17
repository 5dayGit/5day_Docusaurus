
# Group By in Timeline View
## Overview
The Group By feature in Timeline View allows you to organize and visually segment your tasks. This helps you understand how work is distributed—whether by Section, Assignee, Status, Priority, or any supported custom field—directly on the timeline.

Grouping makes it easier to review workload distribution, identify scheduling gaps, and analyze how tasks are allocated across different categories.

Key highlights:

- **User-specific**: Each user can set their own grouping without affecting others.
- **Project-specific**: The selected grouping is saved only for that project.
- **Single grouping**: Only one Group By field can be applied at a time.
- **Option to reset**: Selecting **None** returns the Timeline View to an ungrouped layout.
## How to Access It
1. Navigate to any Project and open it in **Timeline View**.
1. At the top toolbar, click **Group By : `<current-value>`**.
1. A dropdown will appear showing all supported fields.
1. Select the field you want to group by.
1. Save the view when prompted.
## What Happens When Grouping Is Applied
- The Timeline View is reorganized into groups displayed in the **left panel**.
- Each group represents one value of the selected Group By field (e.g., each Assignee, each Status).
- Each group has:
  - Expand/Collapse icon
  - Group name
- Tasks that match the group appear as **task bars** in the timeline area.
- **Groups remain visible even if no tasks match** the selected date range or filters.
  - These groups show the text: **“No tasks available.”**

#### Supported Fields for Grouping
##### Standard Fields
- Section 
- Assignee
- Status
- Priority
- Task Type
- Budget Type\*
- Tags\*

\*Shown only when the corresponding project feature is enabled.
##### Custom Fields
Only the following custom field types support grouping:

- Dropdown
- Rating
- Radio Button
##### Special Option
**None**\
Selecting None removes grouping and returns the Timeline View to an ungrouped state.

#### Saving Your Changes
Whenever you change the Group By selection:
- A banner appears: **“This view has unsaved changes.”**
- You will see a **Save** button and a **Cancel (✖)** icon.
- Click **Save** to apply and store the grouping.

Saved grouping is specific to:

- That project
- That user

This ensures every user gets a personalized Timeline View.

### Important Notes
- Group By works together with Filters.
  - Groups still appear even if no tasks match the filter.
