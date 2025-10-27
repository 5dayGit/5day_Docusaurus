## Who can Manage

In 5day.io, **workspace management capabilities** are controlled through **user roles and permission sets**. These define what each user can view, create, edit, or delete within the workspace environment.

Understanding these permissions ensures the right level of control is maintained across different user roles — such as Admins, Managers, or Collaborators — while keeping the workspace secure and structured.

### Key Permission Types
|**Permission Type** |Description  |
|--|--|
|View  | Controls which workspaces user can view in the account. |
| Add |Controls whether user is allowed to create new workspace. |
| Edit |Controls the ability to manage and update workspace.  |
|Delete  |Controls the ability to delete  workspace  |

Each of these permissions has granular levels like `All`, `Own`, `Related`, or `None` depending on how much access a user should have.

### Permission Levels
|Permission Level  | Description |
|--|--|
|All |Applies to **all workspaces** in the account, regardless of ownership or membership.  |
|Own  |Applies only to workspaces where user is listed as the **workspace owner**. |
|Related  |Applies to workspaces where user is either the **workspace owner** or a **workspace member**.  |
|None  |The user does **not have any access** for the selected action  |

### Workspace Permission Matrix

| Type | All  | Own  | Related | None |
|--|--| -- | -- | -- |
| View | Can view all workspaces in the account | - | Can view only workspaces where you are workspace owner or workspace member | Cannot view any workspace |
| Add | Can create new workspaces | - | - | Cannot create new workspace |
| Edit | Can edit all workspaces | Can edit workspaces where you are workspace owner | Can edit workspaces where you are a member or owner | Cannot edit any workspace |
| Delete | Can delete any workspace | Can delete only workspaces where you are workspace owner | Can delete workspaces where you are workspace owner or workspace member | Cannot delete any workspace |

**Note**: “Workspace Edit” permission grants access to modify the core settings of a workspace, including timesheets, workflows, and task types.

### Best Practices

**Account Owner or Admins** should have **All** permissions for full control.

**Department heads** or **project managers** can be given **Own** or **Related** permissions based on their roles in organization.

**General team members** should typically have **None** for sensitive actions like editing or deleting workspaces.

Ensure only limited users have **Delete** permissions to prevent accidental data loss.
