<img width="3560" height="2300" alt="image" src="https://github.com/user-attachments/assets/1324e9fa-f610-4cab-9b3d-58c11cf18e03" />### Timesheet Settings
**Overview**

In 5day.io, all timesheet configuration is managed from the workspace level. Admins can fine-tune how time entries are logged, what’s allowed for past and future dates, and enable key features like overtime tracking or timesheet approval.

To access Timesheet Settings:

1. Go to **Workspace Settings**
1. Click on **Timesheet Settings** from the left sidebar
1. Under Timesheet Settings, you will find three tabs:
   1. **Basic Settings**
   1. **Reminders**
   1. **Categories**

<img width="3560" height="2300" alt="image" src="https://github.com/user-attachments/assets/6e0b1085-7165-47b1-9c0c-a7cb84800101" />

   
## **Basic Settings (Timesheet Settings)**
### **Overview**
The **Basic Settings** tab in Timesheet Settings allows workspace admins to define key preferences for how time logging works across the organization. These settings govern logging behavior for closed projects, tasks, weekends, and holidays, and offer flexibility in handling past and future entries.

### **Basic Preferences**

|**Setting**|**Description**|
| :-: | :-: |
|**Allow to add time entry in closed project**|Enable this toggle if you want users to log time in projects that are already marked as closed. Default: **Off**|
|**Allow to add time entry in closed task/subtask**|Allows time entries to be logged even when a task or subtask is closed. Default: **Off**|
|**Allow to log time in**|Choose whether to allow time logging on **Weekends** and/or **Holidays** (checkboxes).|
|**Time log entry for past dates**|Toggle this ON to allow time entries for previous dates. You can set the limit in days. Default: **30 days**|
|**Time log entry for future dates**|Toggle this ON to allow future time entries. You can set the number of days allowed. Default: **7 days**|

###  Overtime

|**Setting**|**Description**|
| :-: | :-: |
|**Overtime**|Enable this toggle to allow tracking of overtime hours. Default: **Off**|

### **✅ Timesheet Approval**

|**Setting**|**Description**|
| :-: | :-: |
|**Timesheet Approval**|Enable this toggle if timesheets should be approved by a higher manager. Default: **Off**|
|**Allow to edit time log for approved timesheet**|Lets users modify time entries even after approval. Default: **Off**|
|**Allow to edit time log for 'Pending Approval'**|Lets users modify time entries that are pending approval. Default: **On**|


## **Reminders (Timesheet Settings)**
**Overview**\
The **Reminders** tab under Timesheet Settings allows workspace admins to send automated alerts to users and managers to encourage timely time logging and approval actions. You can configure reminder frequency and schedule for each type.

### **Reminder Types and Settings**

|**Reminder Type**|**Purpose**|**Frequency Options**|**When**|
| :-: | :-: | :-: | :-: |
|**Missing Time Entries**|Sends reminders to users who haven’t logged time.|- Never<br />- Daily<br />- Weekly|- For **Daily**: choose time (e.g. 10:00 AM)<br />- For **Weekly**: select day(s) (e.g. Monday) and time|
|**Unsubmitted Time Reminders**|Reminds users to submit their logged time for approval.|- Never<br />- Daily<br />- Weekly|- For **Daily**: choose time<br />- For **Weekly**: select day(s) (e.g. Monday) and time|
|**Pending Approvals**|Reminds project managers and users with approval rights to review and approve pending timesheets.|- Never<br />- Daily<br />- Weekly|- For **Daily**: choose time<br />- For **Weekly**: select day(s) (e.g. Monday) and time|

✅ **Who receives Pending Approvals reminders?**\
Users with project manager roles or those granted **timesheet approval rights** in project settings will get these notifications.

<img width="3560" height="2300" alt="image" src="https://github.com/user-attachments/assets/d1ea24b2-3544-45de-947d-0a0f781ee940" />


## **Categories (Timesheet Settings)**
### Overview
In 5day.io, the **Categories** tab under Timesheet Settings allows admins to define meaningful labels for time entries. These categories help users accurately log internal activities (like training or meetings) and time-off types (like leaves or holidays), making timesheet reports clearer and more actionable.

Categories are grouped into two types:

- **Internal Time**: For tracking non-project work like admin time, internal meetings, or training.
- **Time Off**: For logging leaves, vacations, or other time-off entries.

###  Creating Categories
You can add custom categories for both Internal Time and Time Off:

|**Action**|**Description**|
| :-: | :-: |
|**Add Category**|Click the **+ Add** button under either Internal Time or Time Off section.|
|**Input Field**|Enter the **name** of the category you wish to create. *(e.g., "Team Meeting", "Sick Leave")*|
|**Post-Creation Options**|Once created, each category can be further customized:|
|→ **Color**|A default color is assigned automatically, but you user can update it using the color picker.|
|→ **Icon**|Choose from a predefined set of icons to visually represent the category.|

<img width="3560" height="2300" alt="image" src="https://github.com/user-attachments/assets/6d2e2a37-0dfe-4fe0-880c-3e36caf253e8" />


###  Managing Categories
Each category entry includes a three-dot menu (⋮) where you can manage it:

|**Option**|**Function**|
| :-: | :-: |
|**Delete**|Removes the category from the list. Useful if a category is no longer relevant.|
|**Edit Color or Icon**|Click on the color square or icon to make changes as needed.|

✅ **Note:** Categories are immediately reflected in the timesheet logging interface. Users will be able to select from these categories when logging Internal Time or Time Off.
