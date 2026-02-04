# Account Admin Role — Permissions
## **Overview**
In 5day.io, the **Account Admin** is a key role responsible for managing users, workspace configuration, project operations, and platform-wide settings.\
Unlike the Account Owner, Account Admins **do not have full access to subscription and billing**.

The Account Admin has full rights assigned by default across:

- **Global Permissions** (with limited access to Subscription & Billing)
- **Feature Permissions** (identical to Account Owner with minor display difference for Discussions and Files)

## **About Global and Feature Permission Options**
- **Manage (Global Permissions):**\
  "Manage" allows the user to fully **view, configure, update, and control** the corresponding account setting area.
- **All (Feature Permissions):**\
  "All" means the user can **view, add, edit, and delete** **any** work item across the workspace,\
  not just the ones assigned to or created by them.

🔵 Note:\
In the **Account Admin** role, the **Subscription and Billing** permission is **limited to View** access.

📖 *For detailed explanations of "Manage," "All," "Owned," "Related," and other permission types, [*click here*](https://help.5day.io/docs/user-guide/Account%20Management/Roles%20Permissions/Global%20and%20Feature%20Permission).*

## **Global Permissions for Account Admin**

|**Global Permission Area**|**Access Level**|
| :-: | :-: |
|Account Settings|Manage|
|People Management|Manage|
|Subscription and Billing|View|
|Security and Permissions|Manage|
|Integration Center|Manage|
|Custom Fields & Templates|Manage|

✅ Account Admins can fully configure administrative settings **except** for subscription and billing, which they can **view but not modify**.

## **Feature Permissions for Account Admin**

|**Feature**|**View Access**|**Add Access**|**Edit Access**|**Delete Access**|**Other Actions**|
| :-: | :-: | :-: | :-: | :-: | :-: |
|Workspace|All|✔️|All|All|Not Applicable|
|Space|All|✔️|All|All|Not Applicable|
|Project|All|✔️|All|All|Move (✔️)|
|Section|All|✔️|All|All|Not Applicable|
|Task|All|✔️|All|All|Move (✔️)|
|Timesheet|All|✔️|All|All|Approve Timesheet (✔️)|
|Discussion|✔️ (Checkbox)|✔️ (Checkbox)|||Not Applicable|
|File|✔️ (Checkbox)|✔️ (Checkbox)|||Not Applicable|


<img width="3560" height="2300" alt="image" src="https://github.com/user-attachments/assets/0366d8ab-c724-49cd-92d4-a8cd610632d7" />


Note: In Discussions and Files, Edit and Delete access are automatically included when Add permission is enabled.

✅ In **Discussions** and **Files**, the user has **only two options**: View and Add (both via checkbox). Add access implies permission to comment, reply, edit own comments (in Discussions), and upload/manage own files (in Files).
