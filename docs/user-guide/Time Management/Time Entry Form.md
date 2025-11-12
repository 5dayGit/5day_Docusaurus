## **Time Entry Form Overview**
The **Time Entry Form** in 5day.io provides a unified interface to log time across different use cases — whether you're tracking time on tasks, logging internal efforts (like meetings or reviews), or recording time off (such as sick leave or vacation).

Although this form can be accessed from multiple locations — like Quick Add, My Timesheet, or directly from a task — the layout remains consistent. The form is structured into **three tabs**, each designed for a specific time logging scenario:

1. **Task** – For logging time against a task that’s assigned to you
1. **Internal Time** – For logging time not tied to tasks, such as internal meetings
1. **Time Off** – For logging non-working time such as sick leave or vacation

Note: The options shown may vary slightly depending on where you access the form. For example, accessing from a task will only show the *Task* tab.

Across all tabs, the user can choose how to log time:

- **Duration** – Total hours worked (e.g., 2h)
- **Time Range** – Specific start and end times (e.g., 10:00 AM to 12:00 PM)

This form ensures a consistent time logging experience across your workspace, while adapting to the type of time entry you want to make.

###
###

### **Time Entry – Task Tab**
The **Task tab** in the Time Entry form allows you to log hours against a specific task in a project. This is ideal for tracking time spent on deliverables, meetings, or any billable/non-billable task work.
#### **How It Works**
There are two ways to log time under the Task tab:
#### **1. Duration Mode**
- Use the slider to drag and select the number of hours worked.
- The **Time Logged** field will auto-calculate based on the slider position.


#### **2. Time Range Mode**
- Enter a specific **Start Time** and **End Time** using hours and minutes.
- **Time Logged** is automatically calculated based on the entered range.

You can switch between these modes using the **Duration** or **Time Range** buttons.

#### **Fields in the Task Tab**

|**Field**|**Description**|
| :-: | :-: |
|**Time Logged**|Displays the total duration of the time entry. Auto-filled from the slider (in Duration mode) or calculated from start and end time (in Time Range mode).|
|**User**|Defaults to the logged-in user. Admins and project managers can log time for other users if permissions allow.|
|**Project**\*|Required. Select the project where the task exists.|
|**Task**\*|Once a project is selected, choose the task.|
|**Date**|Select the date the work was performed. Defaults to today.|
|**Budget Type**|Choose whether the time is **Billable** or **Non-Billable**.|
|**Note**|Optionally add comments or context for the time entry.|

ℹ️ **Note:** If Timesheet Approval is enabled, submitting this form does **not** automatically send it for approval. You’ll need to do that from **My Timesheet**.


## **Time Entry – Internal Time Tab**
The **Internal Time** tab lets users log time for activities not tied to a specific project — such as meetings, training, or internal work. This helps track how internal hours are being spent across your organization.
### **How It Works**
You can log internal time in two ways:

1. **Duration Mode**
   1. Drag the slider to set how much time was spent.
   1. The **Time Logged** field will update automatically.

<img width="3560" height="2300" alt="image" src="https://github.com/user-attachments/assets/e7090506-36f4-4e40-848f-a9942f7c51e7" />

   
1. **Time Range Mode**
   1. Manually input the **Start Time** and **End Time** in hours and minutes.
   1. Time Logged is auto-calculated based on the entered values.

<img width="3560" height="2300" alt="image" src="https://github.com/user-attachments/assets/5fc2ca65-1054-447c-b9fa-ffc1481a7307" />


Use the **Duration** or **Time Range** toggle to switch between modes.

### **Fields in the Internal Time Tab**

|**Field**|**Description**|
| :-: | :-: |
|**Time Logged**|Auto-filled based on slider or calculated from start and end time.|
|**User**|Defaults to the logged-in user. Admins and project managers with access can select a different user.|
|**Workspace**\*|Select the workspace this internal time entry applies to.|
|**Type**\*|Choose an internal time category (e.g., Meetings, Interview, etc.). Only categories created under *Internal Time* are shown here.|
|**Date**|Defaults to today’s date. You can select a different date if needed.|
|**Note**|(Optional) Add a note or comment to describe the internal activity.|


## **Time Entry – Time Off Tab**
The **Time Off** tab allows users to log time off such as vacations, sick days, or other personal time. This helps maintain a transparent record of availability across your team.
### **How It Works**
Users can log time off as either:

- **Half Day** – Logs approximately half of a workday (based on the organization’s working hours).
- **Full Day** – Logs a complete working day.
### **Fields in the Time Off Tab**

|**Field**|**Description**|
| :-: | :-: |
|**User**|Defaults to the current user. Admins or authorized managers can change this and log time off for others.|
|**Workspace**\*|Select the workspace the time off entry applies to.|
|**Type**\*|Select a time-off category like Sick Leave, Casual Leave, etc. (Categories must be pre-configured in Workspace Timesheet Settings > Categories).|
|**From**|Start date of the time off.|
|**To**|End date of the time off. If it's a one-day leave, both dates will be the same.|
|**Note**|(Optional) Add context or reason for taking time off.|
