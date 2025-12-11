# Dates

Start Date and Due Date are essential scheduling attributes in 5day.io that define the planned timeline for a task or subtask.

The **Start Date** indicates when work is expected to begin, while the **Due Date** represents the target completion deadline.

These dates help teams plan, prioritize, and execute work more effectively. Each task and subtask comes with its own independent date range.

Dates play a vital role in generating views, filters, workload balancing, and time-sensitive reports across the system. They also directly influence status indicators like **Overdue**.

## Permission Set

The ability to assign or edit dates is governed by the **Edit Task** permission set:

-   **Edit All** – User can assign/change dates for any task or subtask.
-   **Edit Owned** – User can manage dates only for tasks/subtasks they own.
-   **Edit Related** – User can update dates for tasks within their associated projects.
-   **Edit None** – User cannot add or modify dates.

Refer [Roles and Permission](https://github.com/5dayGit/5day_Docusaurus/blob/main/docs/user-guide/5day.io%20Structure/Task/Roles%20and%20Permission%20of%20Task.md) for more details.

## Generic Details

Every task and subtask in 5day.io includes **Start Date** and **Due Date** as default fields.

These fields are **non-removable** and are part of the core task framework.

The **date format** displayed is based on user preference and can be configured via:  
**My Profile → Display Settings → Date Format**.

Dates are validated automatically:

-   **Due Date cannot be earlier than Start Date.**
-   It’s recommended to align task dates within the parent **project’s date range** for consistency.

## Add Dates

### Task/Subtask Details

1.  Open a **Task or Subtask** Details.
2.  Locate the **Start Date** and **Due Date** fields.
3.  Select dates using the system calendar and save the task.
<img width="3360" height="2300" alt="image" src="https://github.com/user-attachments/assets/11aa7ea0-6b05-4688-9aec-8e2902491170" />


### List View / Board View

1.  If dates are not visible in the selected view, click **Customize**.
2.  Enable **Start Date** and **Due Date** from the list of fields.
3.  Reorder fields using drag and drop, then save the view.
4.  Click into the field to select and assign a date.

<img width="3360" height="1228" alt="image" src="https://github.com/user-attachments/assets/a5f48b24-4938-4a7e-9fd9-16d2303f382b" />


### My Work

1.  Navigate to **My Work**.
2.  Select the task you wish to update.
3.  In the detail view, add or update **Start Date** and **Due Date** accordingly.

### Bulk Update

1.  Select multiple tasks/subtasks in list or board view.
2.  Click **Bulk Update** from the action toolbar.
3.  Choose either **Start Date** or **Due Date** as required.
4.  Apply the date; all selected tasks/subtasks will be updated with that value.

<img width="3360" height="1014" alt="image" src="https://github.com/user-attachments/assets/0e9a5dfc-8a74-456f-952e-1a2132e2133a" />


### Quick Add (During Task Creation)

1.  While creating a new task, after adding **name** and **location**,  
    locate the **Date** field.
2.  Select the **Start Date** and **Due Date** from the date picker.

<img width="3360" height="1753" alt="image" src="https://github.com/user-attachments/assets/a22bba0f-d810-45d1-a50d-1f03d7c57d7d" />


## Remove Dates

Note: Start Date and Due Date cannot be entirely removed, but values can be cleared.

### Task/Subtask Details

1.  Open the task/subtask and clear the existing date from the field.

### List View / Board View

1.  Click into the date field and clear the selection if previously added.

### My Work

1.  Access the task from My Work and remove the date fields by clearing their content.

## Overdue

A task or subtask is considered **Overdue** when the **Due Date** has passed, and the item is **not marked as Completed**.

**Generic Points**

If a task’s **Due Date** has passed and its status is still **Open**, **In Progress**, or any other non-final state,  
the system will automatically tag it as **Overdue**.

This tag will be visible across the platform in:

-   **List View**
-   **Board View**
-   **Task/Subtask Detail View**
-   **My Work** _(Refer to the “My Work” help guide for details on filtering Overdue items.)_

**Quick Notes**

-   **Due Date cannot be earlier than Start Date.**
-   For effective planning, align task dates with their **parent project’s timeline**.
-   Tasks with missed Due Dates that are not marked as **Completed** will automatically reflect **Overdue** status.

-   ## Other References
