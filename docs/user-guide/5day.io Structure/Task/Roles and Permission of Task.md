# Roles and Permission 

## Who can Manage

In 5day.io, **task management capabilities** are controlled through **user roles and permission sets**. These define what each user can view, create, edit, or delete in the project environment.

Understanding these permissions ensures the right level of control is maintained across different user roles — such as Admins, Managers, or Collaborators — while keeping the project secure and structured.

## Key Permission Types

|**Permission Type** |Description  |
|--|--|
| View | Controls which tasks user can view in the project. |
| Add |Controls whether user is allowed to create new task. |
| Edit |Controls the ability to manage and update task. |
|Delete |Controls the ability to delete  task. |

Each of these permissions has granular levels like `All`, `Own`, `Related`, or `None` depending on how much access a user should have.

## Permission Levels
|Permission Level  | Description |
|--|--|
|All |Applies to **all tasks** in the project, regardless of ownership. |
|Own  |Applies only to tasks where user is **Task Owner**. |
|Related  |Applies to tasks in which user is added as **Project Owner** or **Project member**  |
|None  |The user does **not have any access** for the selected action  |

## Project Permission Matrix

| Type | All  | Own  | Related | None |
|--|--| -- | -- | -- |
| View | Can view all tasks in the project | - | Can view only tasks where user is task owner | - |
| Add | Can create new task| - | - | Cannot create new task|
| Edit | Can edit all tasks | Can edit only task where user is task owner | Can edit tasks where user is project owner or project member | Cannot edit any task |
| Delete | Can delete any task | Can delete only tasks where user is task owner | Can delete tasks where user is project owner or project member | Cannot delete any task |

**Note**: “Task Edit” permission grants access to modify all the details associated to task and subtask.

<img width="3560" height="2300" alt="image" src="https://github.com/user-attachments/assets/ac90679c-30f1-441f-8b7b-9cb0fe70157f" />


## Best Practices

**Account Owner or Admins** should have **All** permissions for full control.

**Department heads** or **project managers** can be given **Edit - Related** permissions based on their roles in organization.

**General team members** should typically have **Edit - Own** for sensitive actions like editing or deleting workspaces.

Ensure only limited users have **Delete** permissions to prevent accidental data loss.
