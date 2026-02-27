## Overview
A Table Chart displays data in a structured tabular format inside the Dashboard.

It allows users to view task, subtask, or time entry data in rows and columns.

Unlike graphical charts, Table Charts focus on detailed records instead of visual trends.

You can customize columns, apply grouping, define sorting rules, and display aggregated summaries.

Table Charts are useful for reviewing detailed data such as logged hours, task lists, assignees, and estimations.
## **Subscription Association**
The Chart Type – Table Chart is available across all subscription plans.
## **Create Table Chart**
To configure the Table Chart in the Dashboard, follow these steps:

1. Navigate to the Dashboard module.
1. Click on **Add Widget**.
1. Enter a name for the widget.
1. Select **Table Chart** from the available chart options.
1. Choose between the **Data** and **Format** tabs to configure the widget.
1. Configure the required settings.
1. Click **Update Widget** to save or **Discard** to cancel.
## **Configuration of Table Chart**
The Table Chart configuration is divided into two primary categories:

- **Task** – Displays task and subtask-related data.
- **Timesheet** – Displays time entry-related data.

### **Data Configuration**

|**Field Name**|**Settings**|**Description**|
| :-: | :-: | :-: |
|Based On|Task & Subtask / Time Entry|Defines the dataset used for the table.|
|Include Subtask|Checkbox (Yes/No)|Determines whether subtasks are included in the dataset.|
|Type|Simple / Summary|Defines whether the table displays raw data (Simple) or grouped data (Summary).|
|Select Columns|List of available fields|Allows users to choose which columns appear in the table.|
|Group By\*|Assignee / Task Name (Summary only)|Available only in Summary type. Groups data based on the selected field.|
|Default Sort By|Selected column|Allows sorting based on any selected column.|
|Order|Ascending / Descending / None|Defines the sorting order of the selected column.|
|Show Summary|Checkbox|Displays aggregated values for numeric columns.|
|Summary Type|Sum / Avg / Min / Max / Count|Available for numeric fields such as Logged Hours or Estimation.|
### **Simple vs Summary Type**
**Simple Type**

- Displays detailed records.
- No grouping is applied.
- Data appears row by row.

**Summary Type**

- Enables **Group By** option.
- Groups data based on Assignee or Task Name.
- Allows aggregation of numeric fields.
- Works with the Show Summary option.
### **Show Summary Behavior**
When enabled:

- Users can apply aggregation to numeric fields.
- Available functions: 
  - Sum
  - Average
  - Minimum
  - Maximum
  - Count

For example, Logged Hours can display the total sum or average based on selection.
### **Filters**
Users can click **+ Add Filter** to apply conditions.

Filters allow refining the dataset before displaying it in the table.
## **Format of Table Chart**
The Format settings allow users to customize the appearance of the Table Chart.

|**Field Name**|**Settings**|**Description**|
| :-: | :-: | :-: |
|Background Color|Color Selection|Sets the background color of the widget.|
|Header BG Color|Color Selection|Sets the background color of the table header.|
|Header Font Color|Color Selection|Sets the font color of the header text.|
|Font Color|Color Selection|Sets the font color of table content.|
|Font Size|Numeric value (e.g., 15px)|Defines the size of the table text.|
|Apply Stripe Rows|Checkbox|Adds alternating row colors for better readability.|
