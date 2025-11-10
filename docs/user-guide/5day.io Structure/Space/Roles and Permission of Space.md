
# Roles and Permission of Space

## Who can Manage

In 5day.io, a **Space** is a unit nested within a Workspace - typically used to group related projects, departments, or modules. Just like Workspace, **Space management** is governed by user roles and their **associated permission sets**.

These permissions ensure the right people have the right level of access, from visibility to full management rights, over each Space within a Workspace.

### Key Permission Types
|**Permission Type** |Description  |
|--|--|
|View  | Controls which space user can view in the workspace. |
| Add |Controls whether user is allowed to create new space. |
| Edit |Controls the ability to manage and update space.  |
|Delete  |Controls the ability to delete  space.|

Each of these permissions has granular levels like `All`, `Own`, `Related`, or `None` depending on how much access a user should have.

<img width="3560" height="2300" alt="image" src="https://github.com/user-attachments/assets/1f069ac3-b04e-412b-a2e8-70226e851947" />


### Permission Levels
|Permission Level  | Description |
|--|--|
|All |Applies to **all spaces** in the workspace, regardless of ownership or membership.  |
|Related  |Applies to all the associated project's spaces where user is either the **project owner** or a **project member**.  |
|None  |The user does **not have any access** for the selected action  |

### Space Permission Matrix

| Type | All  | Related | None |
|--|--| -- | -- | -- |
| View | Can view all spaces in the workspace| Can view only project associated spaces where you are either project owner or project member |
| Add | Can create new space| - | Cannot create new space|
| Edit | Can edit all spaces| Can edit project associated spaces where you are either project owner or project member | Cannot edit any space|
| Delete | Can delete any space in workspace| Can delete project associated spaces where you are either project owner or project member | Cannot delete any space. |

**Note**: “Space Edit” permission grants access to modify the core settings of a Projects, including timesheets, workflows, and task types.

### Best Practices

**Account Owner or Admins** should have **All** permissions for full control.

**Department heads** or **project managers** can be given  **Related** permissions based on their roles in organization.

**General team members** should typically have **None** for sensitive actions like editing or deleting workspaces.

Ensure only limited users have **Delete** permissions to prevent accidental data loss.

## Other References
