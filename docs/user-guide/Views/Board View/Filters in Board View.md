# Filters in Board View
## Overview
Filters in Board View allow you to narrow down tasks based on specific conditions so you can focus on exactly what you need. Whether you're trying to view tasks assigned to a specific person or filter by status, the Filter panel helps you refine your board efficiently.

Filters are contextual, dynamic, and highly flexible. They support both standard fields (e.g., Assignee, Status, Due Date) and any custom fields configured for the project.

Multiple filters can be combined using the **AND** operator, ensuring that only tasks matching **all** conditions appear on the board.

Filter configuration is **user-specific**, meaning each user can apply their own filter set without affecting anyone else.

## How to Access the Filter Panel
1. Navigate to any Project.
1. Open the project in **Board View**.
1. Click on the **Filter** icon at the top of the screen.

The Filter Panel opens in an expanded view and shows:

- Currently applied filters (if any)
- A “No filters applied yet” message when empty
- The **+ Add** button to create new filter conditions

## Default State (When No Filters Are Applied)
When no filters are active:

- You will see the message: **“No filters applied yet”**
- A **+ Add** button is available to start adding conditions
- The panel remains empty until your first filter row is added

You can add filters immediately.

## Applying Filters
When you click **+ Add**, a new filter row appears.

Each filter contains three parts:
#### 1\. Field Selector (Where)
Choose the attribute to filter by, such as:

- Assignee
- Status
- Due Date
- Start Date
- Priority
- Tags
- Task Type
- Budget Type
- Any Custom Field\
  ` `…and more.

Once a field is selected, the Operator dropdown becomes active.

#### 2\. Operator
Operators vary depending on the selected field.\
Examples include:

- Equals
- Not Equals
- Is One Of
- Is Not One Of
- On or Before
- On or After
- Before / After
- Is Empty / Is Not Empty

(See the detailed operator table below.)

#### 3\. Value
This is the value used to filter the board.\
Examples:
- **Assignee → Jayesh**
- **Status → In Progress**
- **Due Date → 05–Nov–2025**
- **Tags → SEO, Design**
- **Priority → High**

Values update dynamically based on the selected field.

### Adding Multiple Filters
Click **+ Add** to add more filter rows.

All filters use the **AND condition**, meaning:

Only tasks that satisfy all filter conditions will appear on the board.

Filters apply across **all Board columns**, regardless of Group By selection.

## Editing or Removing Filters
### Edit a Filter
Click any dropdown (Field / Operator / Value) and update the selection.\
All validations are applied automatically.
### Delete a Filter
Click the **Delete (🗑️)** icon next to a filter row.\
The filter is removed immediately.
#### Clear All Filters
Appears only when at least one filter is applied.

- Click **Clear Filters** at the bottom-right
- All filters reset instantly
- Board returns to its default unfiltered state

## Auto-Save Behavior
Filters do not require a Save button.

They are automatically saved when you:

- Change a filter
- Click outside the panel
- Close the panel

The filtered Board View updates instantly and stays active until you clear it manually.

### Field–Operator Mapping
#### Standard Fields

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
|Created On|Equals, Not Equals, On or Before, On or After, Before, After|
|Updated On|Equals, Not Equals, On or Before, On or After, Before, After, Is Empty, Is Not Empty|

#### Custom Fields

|**Custom Field Type**|**Supported Operators**|
| :-: | :-: |
|Dropdown|Equals, Not Equals, Is One Of, Is Not One Of|
|Radio Button|Equals|
|Rating|Equals, Not Equals|
|Multiselect Dropdown|Equals, Not Equals, Is One Of, Is Not One Of|

(Only the custom field types supported by Board View appear in the filter panel.)

### Filter Indicators
When at least one filter is active:

- The **Filter icon becomes highlighted**
- A small indicator dot shows filters are in use

This helps users quickly identify that the board is filtered — even when scrolling across multiple columns.

### Important Notes
- Filters are **user-specific** — your filters only affect your view.
- Filters are **project-specific** — filters applied in one project do not affect another.
- Filtering applies instantly and updates visible task cards in real time.
- Some columns may appear empty when filters are applied, depending on results.
- Filters only control visibility. They do **not** limit drag-and-drop.\
  You can still move tasks between columns when filters are active.
