# Filters in List View
## **Overview**
Filters in **List View** allow you to narrow down tasks based on specific conditions so you can focus on exactly what you need. Whether you're trying to view tasks assigned to a specific person or filter by status, the Filter panel helps you filter your project data efficiently.

Filters are contextual, dynamic, and highly flexible. They support both **standard fields** (e.g., Assignee, Status, Due Date) and **custom fields** created for the project.\
Multiple filters can be combined using the **AND** operator, ensuring that only tasks matching **all conditions** appear in the List View.

Filter configuration is **user-specific**, meaning every user can apply their own filter set without affecting anyone else.

## **How to Access the Filter Panel**
1. Navigate to any **Project** and open it in **List View**
1. Click on the **Filter** icon located at the top-right of the screen.
1. The **Filter Panel** will open in an expanded view showing:
   1. Current applied filters (if any)
   1. “No filters applied yet” message (if none exist)
   1. The **+ Add** button to create new filter conditions

### Default State (When No Filters Are Applied)
When there are no filters applied:

- You will see a message: **“No filters applied yet”**
- A **+ Add** button will be available to create your first filter
- The panel will remain empty until a filter is added

You may start adding conditions immediately.

<img width="3560" height="2300" alt="image" src="https://github.com/user-attachments/assets/d3aa234e-87ae-4300-935d-304a1ad4c176" />


## Applying Filters
When you click **+ Add**, a new filter row appears.\
Each filter consists of **three parts**:
### 1\. Field Selector (Where)
This is the attribute you want to filter by, such as:

- Assignee
- Status
- Due Date
- Start Date
- Priority
- Tags
- Any Custom Field\
  …and more.

Once the field is selected, the next dropdown becomes active.

### 2\. Operator
Operators depend on the selected field.\
Examples:

- **Equals**
- **Not Equals**
- **Is One Of**
- **Is Not One Of**
- **On or Before**
- **On or After**
- **Before / After**
- **Is Empty / Is Not Empty**

(See detailed operator table below.)

### 3\. Value
This is the actual value used for filtering.\
Examples:

- Assignee → Jayesh
- Status → In Progress
- Due Date → 05–Nov–2025
- Tags → SEO, Design
- Priority → High

Values depend on the field and are populated dynamically.

#### Adding Multiple Filters
- Click **+ Add** to create additional filter rows.
- All filters use the **AND** condition, meaning:

Only tasks that satisfy **all** selected filter conditions will be shown.
## Editing or Removing Filters
### Edit a Filter
You can click on any dropdown (Field / Operator / Value) and change it.\
All validations are handled automatically — e.g., value must be selected.
### Delete a Filter
- Click the **Delete (🗑️) icon** next to a filter row.
- Filter will be removed **immediately** without confirmation.
### Clear All Filters
- Available only when at least **one filter** is applied.
- Click **Clear Filters** (bottom-right).
- All filters are removed instantly.
- The panel resets to default state.

### Auto-Save Behavior
There is **no Save button** for filters.

Filters use **auto-save**:

- Any change made is **saved automatically**
- Clicking **outside the filter panel**:
  - Closes the panel
  - Retains all applied filters
  - Applies the filtered view to the List View immediately

Your filter preferences persist until you manually clear them.

## Field–Operator Mapping
The table below shows which operators are supported for each field to ensure accurate filtering.
### **Standard Fields**

|**Field**|**Supported Operators**|
| :-: | :-: |
|Section|Equals, Not Equals, Is One Of, Is Not One Of|
|Assignee|Equals, Not Equals, Is One Of, Is Not One Of|
|Status|Equals, Not Equals, Is One Of, Is Not One Of|
|Priority|Equals, Not Equals, Is One Of, Is Not One Of|
|Task Type|Equals, Not Equals, Is One Of, Is Not One Of|
|Tags|Equals, Not Equals, Is One Of, Is Not One Of|
|Budget Type|Equals, Is One Of|
|Start Date|On or Before, On or After, Equals, Not Equals, Before, After, Is Empty, Is Not Empty|
|Due Date|On or Before, On or After, Equals, Not Equals, Before, After, Is Empty, Is Not Empty|
|Created On|On or Before, On or After, Equals, Not Equals, Before, After|
|Updated On|On or Before, On or After, Equals, Not Equals, Before, After, Is Empty, Is Not Empty|

### Custom Fields

|**Custom Field Type**|**Supported Operators**|
| :-: | :-: |
|Dropdown|Equals, Not Equals, Is One Of, Is Not One Of|
|Radio Button|Equals|
|Rating|Equals, Not Equals|
|Multiselect Dropdown|Equals, Not Equals, Is One Of, Is Not One Of|

### Filter Indicators
When at least one filter is active:

- The **Filter icon** becomes highlighted
- A small dot or indicator will show that filters are in use
- This helps users quickly identify that the view is filtered


<img width="3560" height="962" alt="image" src="https://github.com/user-attachments/assets/d76d9510-9e98-4e2b-9ae7-fb6143817508" />


### Important Notes
- Filters are **user-specific** — each user has their own filter preferences.
- Filters are **project-specific** — the filter set applied to one project won’t affect another.
- Feature-based fields (e.g., Tags, Budget Type, Story Points) only appear if those features are enabled in the Project Settings.
- Filtering applies instantly and updates the task list in real-time.

