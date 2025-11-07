# **Understanding Global and Feature Permission Types**

## **Global Permissions — Options**
Global permissions control access to **account-wide administrative areas** like Settings, People Management, Billing, Security, Integrations, and Custom Fields.

|**Option**|**Meaning**|
| :-: | :-: |
|**View**|Allows the user to view and read the settings but does not allow them to make changes.|
|**Manage**|Allows the user to fully modify, update, and configure the settings.|
|**None**|User cannot view or access the settings at all.|

## **Feature Permissions — Options**
Feature permissions control access to **work management areas** like Workspaces, Spaces, Projects, Tasks, Timesheets, Discussions, and Files.

<table><tr><th colspan="1"><b>Permission Type</b> </th><th colspan="1" valign="bottom"><b>Options</b></th><th colspan="1" valign="bottom"><b>Description</b></th></tr>
<tr><td colspan="1" rowspan="2">View (All / View Related) </td><td colspan="1" valign="bottom">View All</td><td colspan="1" valign="bottom">Allows the user to view all items across the account.</td></tr>
<tr><td colspan="1" valign="bottom">View Related</td><td colspan="1" valign="bottom">Allows the user to view only items where they are directly assigned or associated (e.g., as Workspace Owner, Project Owner, or Task Assignee).</td></tr>
<tr><td colspan="1">Add </td><td colspan="1" valign="bottom">Checkbox (Allow/Not Allow) </td><td colspan="1" valign="bottom">Allows the user to create new items (e.g., Workspaces, Projects, Tasks, Timesheets).</td></tr>
<tr><td colspan="1" rowspan="4">Edit (All / Owned / Related / None) </td><td colspan="1" valign="bottom">Edit All</td><td colspan="1" valign="bottom">Allows the user to edit all items across the workspace.</td></tr>
<tr><td colspan="1" valign="bottom">Edit Owned</td><td colspan="1" valign="bottom">Allows the user to edit items they have created.</td></tr>
<tr><td colspan="1" valign="bottom">Edit Related</td><td colspan="1" valign="bottom">Allows the user to edit items where they are assigned.</td></tr>
<tr><td colspan="1" valign="bottom">None</td><td colspan="1" valign="bottom">The user cannot edit any items.</td></tr>
<tr><td colspan="1" rowspan="4">Delete (All / Owned / Related / None) </td><td colspan="1" valign="bottom">Delete All </td><td colspan="1" valign="bottom">Allows the user to delete any item across the workspace.</td></tr>
<tr><td colspan="1" valign="bottom">Delete Owned </td><td colspan="1" valign="bottom">Allows the user to delete any item where they are assigned as the Owner of that item.</td></tr>
<tr><td colspan="1" valign="bottom">Delete Related </td><td colspan="1" valign="bottom">Allows the user to delete items where they are assigned.</td></tr>
<tr><td colspan="1" valign="bottom">None </td><td colspan="1" valign="bottom">The user cannot delete any items.</td></tr>
<tr><td colspan="1" rowspan="2">Other (Specific to certain features) </td><td colspan="1" valign="bottom">Move (for Projects and Tasks) </td><td colspan="1" valign="bottom">
  Allows the user to move a Project between Spaces and a Task between Projects or Sections.</td></tr>
<tr><td colspan="1" valign="bottom">Approve Timesheet (for Timesheets) </td><td colspan="1" valign="bottom">Allows the user to approve or reject submitted timesheets.</td></tr>
<tr><td colspan="1" rowspan="2">Discussion Permissions </td><td colspan="1" valign="bottom">View</td><td colspan="1" valign="bottom">Allows the user to view the Discussion panel and read comments.</td></tr>
<tr><td colspan="1" valign="bottom">Add</td><td colspan="1" valign="bottom">Allows the user to add new comments, edit and delete their own comments, and reply to any existing comments.</td></tr>
<tr><td colspan="1" rowspan="2">Files Permissions </td><td colspan="1" valign="bottom">View </td><td colspan="1" valign="bottom">Allows the user to view the Files and see uploaded files.</td></tr>
<tr><td colspan="1" valign="bottom">Upload </td><td colspan="1" valign="bottom">Allows the user to upload new files and delete files they uploaded. Project Owners and Account Owners can delete any uploaded files.</td></tr>
</table>

✅ **Note**:
- Some features like Projects and Tasks have an "Other" category (Move permission).
- Timesheets have an additional "Approve Timesheet" action under "Other".
