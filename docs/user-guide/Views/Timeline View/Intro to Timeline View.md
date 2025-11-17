# Timeline View
## Overview
Timeline View shows all project tasks and subtasks on a calendar-based timeline.

Each task appears as a bar between its start date and due date.

This helps you:

- Track when the task starts and ends.
- See overlaps and gaps between tasks.
- Understand how work is distributed across weeks and months.

By default, Timeline opens in a **3-week view**, so you can see recent past, today, and upcoming work together.

Note: The exact number of days visible depends on your screen resolution and zoom level.

## Subscription Association
Timeline View is available for all plans where:

- The **Timeline** view is enabled for that project in **Project Settings → Views**.
## Role & Permissions
Timeline View follows the same task-level roles and permissions defined in [5day.io](http://5day.io/).

What a user can **view** and what they can **modify** in Timeline View depends entirely on their assigned **Task Roles and Permissions**.

- Users can only see the tasks and subtasks they have permission to view.
- Actions such as dragging tasks, resizing dates, or editing details depend on their edit permissions.

For complete details on task visibility and allowed actions, refer to the Task Roles & Permissions documentation:

[**](https://github.com/5dayGit/5day_Docusaurus/blob/main/docs/user-guide/5day.io%20Structure/Task/Roles%20and%20Permission%20of%20Task.md)[https://github.com/5dayGit/5day_Docusaurus/blob/main/docs/user-guide/5day.io Structure/Task/Roles and Permission of Task.md**](https://github.com/5dayGit/5day_Docusaurus/blob/main/docs/user-guide/5day.io%20Structure/Task/Roles%20and%20Permission%20of%20Task.md**)
## How to Enable and Access Timeline View
### Enable Timeline for a Project
1. Open the project.
1. Click the **three-dot menu (⋮)** next to the project name.
1. Select **Project Settings**.
1. Go to the **Views** section.
1. Turn on the **Timeline** toggle.
1. Save and return to the project.
### How to access Timeline View
1. Open the project where you want to view the timeline.
1. In the project, click **Timeline** in the view.
1. The project opens in Timeline View with a default 3-week range.
## Layout Overview
Timeline View is divided into three main areas:

1. **Top Toolbar** 
   1. **Today** selector
   1. Selector: **Week / Month**
   1. **Previous / Next** navigation arrows
   1. **Filter**
   1. **Group By** (defaults to Section)
1. **Left Panel (Groups)** 
   1. Shows groups based on the selected **Group By** field (for example, Section, Assignee).
   1. Each group has: 
      1. Expand / collapse icon
      1. Group name
   1. If a group has no tasks, it shows **“No tasks available.”**
1. **Timeline Area** 
   1. Horizontal axis shows dates.
   1. Vertical axis shows groups and their tasks.
   1. Each task or subtask is displayed as a coloured bar with: 
      1. Task type icon
      1. Task name (trimmed if long)
      1. Subtask indication icon along with Subtask count
      1. Assignee avatar

A horizontal scrollbar at the bottom lets you move left and right across the timeline.

### Navigation: Previous / Next, Scroll
#### Previous / Next
- **Previous (‹)**: moves to the previous range. 
  - Week View → previous week.
  - Month View → previous month.
- **Next (›)**: moves to the next week or next month.

The timeline updates immediately with tasks for the new date range.
#### Horizontal Scroll
- Use the scrollbar at the bottom or drag/scroll with mouse/trackpad to move left or right.
- The date header and task bars move together so you always see correct alignment of dates and tasks.
## Working with Tasks and Subtasks
### Task Bars
For each task, Timeline shows a bar from its **start date** to its **due date**.

You can:

- **Hover** to see task complete task/subtask title.
- **Click** to open the full **Task/Subtask Details** panel on the right.
#### Subtask Indicator and Expand / Collapse
If a task has subtasks, Timeline shows a **subtask indicator** on the task bar.

- Clicking the indicator **expands** the parent task to show its subtasks.
- Subtasks appear as separate bars **under the parent**, each with its own start and due dates.
- The same drag and resize interactions apply to subtasks, subject to permissions.
- You can **collapse** the parent again to hide subtasks and keep the view compact.

Subtasks are always accessed through their parent task via the subtask indicator.
## Rescheduling Tasks on Timeline
Timeline allows direct date editing by drag-and-drop.
### Move Task or Subtask to New Dates
1. Hover over a task or subtask bar until the drag cursor appears.
1. Click and hold the bar.
1. Drag it left or right to the new date range.
1. Release to drop.

Both start and due dates move together, keeping the same duration.

Changes are saved automatically and reflected in other views.
### Change Duration by Resizing
1. Hover over the **left or right edge** of the bar.
1. When the resize handle appears: 
   1. Drag the **left edge** to change the **start date**.
   1. Drag the **right edge** to change the **due date**.
1. Release to save the new duration.

Resizing works for both tasks and subtasks, based on your edit permissions.
## Auto Horizontal Scroll While Dragging
If you drag a task towards the **left or right edge** of the visible timeline:

- The timeline will **auto-scroll** in that direction.
- This allows you to move tasks to dates that are currently outside the viewport without stopping the drag operation.
- Scrolling stops as soon as you move the cursor away from the edge or drop the bar.

Note: Timeline currently works on dates, not time-of-day. Tasks are treated as full-day events in this view.
