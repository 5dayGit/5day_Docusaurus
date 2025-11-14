// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Main documentation sidebar
  docsSidebar: [
    // {
    //   type: 'category',
    //   label: 'Onboarding',
    //   items: [
    //     'user-guide/Onboarding/Intro to Onboarding',
    //   ]
    // },
    {
      type: 'category',
      label: '5day.io Structure',
      items: [
        {
          type: 'category',
          label: '5day.io Structure',
          items: [
            'user-guide/5day.io Structure/5day.io Structure/Intro to 5day.io Structure'
          ],
        },
        {
          type: 'category',
          label: 'Workspace',
          items: [
            'user-guide/5day.io Structure/Workspace/Intro to Workspace',
            'user-guide/5day.io Structure/Workspace/Roles and Permission for Workspace',
            'user-guide/5day.io Structure/Workspace/Add Workspace',
            'user-guide/5day.io Structure/Workspace/Edit Workspace',
            'user-guide/5day.io Structure/Workspace/Delete Workspace',
            'user-guide/5day.io Structure/Workspace/List of Workspace',
            'user-guide/5day.io Structure/Workspace/Workspace Views',
            'user-guide/5day.io Structure/Workspace/People at Workspace',
            'user-guide/5day.io Structure/Workspace/Workspace Owner',
            'user-guide/5day.io Structure/Workspace/Workspace Details',
          ],
        },
        {
          type: 'category',
          label: 'Space',
          items: [
            'user-guide/5day.io Structure/Space/Intro to Space',
            'user-guide/5day.io Structure/Space/Roles and Permission of Space',
            'user-guide/5day.io Structure/Space/Add Space',
            'user-guide/5day.io Structure/Space/Edit Space',
            'user-guide/5day.io Structure/Space/Delete Space',
            'user-guide/5day.io Structure/Space/List of Spaces',
            'user-guide/5day.io Structure/Space/Space Views'
          ],
        },
        {
          type: 'category',
          label: 'Task',
          items: [
            'user-guide/5day.io Structure/Task/Intro to Task',
            'user-guide/5day.io Structure/Task/Roles and Permission of Task',
            'user-guide/5day.io Structure/Task/Add Task',
            'user-guide/5day.io Structure/Task/Edit Task',
            'user-guide/5day.io Structure/Task/Delete Task',
            'user-guide/5day.io Structure/Task/Move Task',
            'user-guide/5day.io Structure/Task/Duplicate Task',
            'user-guide/5day.io Structure/Task/Task Link',
            'user-guide/5day.io Structure/Task/Intro to Subtask',
            'user-guide/5day.io Structure/Task/Add Subtask',
            'user-guide/5day.io Structure/Task/Edit Subtask',
            'user-guide/5day.io Structure/Task/Delete Subtask',
            'user-guide/5day.io Structure/Task/List of Subtask',
            'user-guide/5day.io Structure/Task/Task Details',
            'user-guide/5day.io Structure/Task/Import Task',
            'user-guide/5day.io Structure/Task/Task Budget Type',
            'user-guide/5day.io Structure/Task/Task Assignee',
            'user-guide/5day.io Structure/Task/Task Dates',
            'user-guide/5day.io Structure/Task/Task Estimation',
            'user-guide/5day.io Structure/Task/Task Story Points',
            'user-guide/5day.io Structure/Task/Task Priority',
            'user-guide/5day.io Structure/Task/Task Tags',
            'user-guide/5day.io Structure/Task/Task Status',
            'user-guide/5day.io Structure/Task/Bulk Update',
            'user-guide/5day.io Structure/Task/Task Reminder',
            'user-guide/5day.io Structure/Task/Task Recurrence',
          ],
        },
        {
          type: 'category',
          label: 'Project',
          items: [
            "user-guide/5day.io Structure/project/Intro to Project",
            "user-guide/5day.io Structure/project/Create Project",
            "user-guide/5day.io Structure/project/Edit Project",
            "user-guide/5day.io Structure/project/Delete Project",
            "user-guide/5day.io Structure/project/Add People to a Project",
            "user-guide/5day.io Structure/project/Duplicate Project",
            "user-guide/5day.io Structure/project/Rename Project",
            "user-guide/5day.io Structure/project/Move Project",
            "user-guide/5day.io Structure/project/Manage Project Features",
            "user-guide/5day.io Structure/project/Manage Project Views",
            "user-guide/5day.io Structure/project/Project Settings",
            "user-guide/5day.io Structure/project/Import Tasks into a Project"
          ],
        },
        {
          type: 'category',
          label: 'Section',
          items: [
            "user-guide/5day.io Structure/section/Intro to Section",
            "user-guide/5day.io Structure/section/Section Details",
            "user-guide/5day.io Structure/section/Create Section",
            "user-guide/5day.io Structure/section/Edit Section",
            "user-guide/5day.io Structure/section/Delete Section",
            "user-guide/5day.io Structure/section/Manage Section",
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '5day.io Features',
      items: [
        {
          type: 'category',
          label: 'Automation',
          items: [
            'user-guide/5day.io Features/Automation/Intro to Automation',
            'user-guide/5day.io Features/Automation/Intro of Workflow',
            'user-guide/5day.io Features/Automation/Add Workflow',
            'user-guide/5day.io Features/Automation/Edit Workflow',
            'user-guide/5day.io Features/Automation/Delete Workflow',
            'user-guide/5day.io Features/Automation/List of Workflows',
            'user-guide/5day.io Features/Automation/Workflow Trigger',
            'user-guide/5day.io Features/Automation/Workflow Condition',
            'user-guide/5day.io Features/Automation/Workflow Action',
            'user-guide/5day.io Features/Automation/Workflow Usage',
            'user-guide/5day.io Features/Automation/Workflow Activity Stream',
          ]
        },
        {
          type: 'category',
          label: 'Clients',
          items: [
            "user-guide/5day.io Features/Clients/Clients",
            "user-guide/5day.io Features/Clients/Create Client",
            "user-guide/5day.io Features/Clients/Edit Client",
            "user-guide/5day.io Features/Clients/Delete Client",
          ],
        },
        {
          type: 'category',
          label: 'Custom Fields',
          items: [
            'user-guide/5day.io Features/Custom Fields/Intro to Custom Fields',
            'user-guide/5day.io Features/Custom Fields/Add Custom Field',
            'user-guide/5day.io Features/Custom Fields/Custom Field Types',
            'user-guide/5day.io Features/Custom Fields/List of Custom Fields',
            'user-guide/5day.io Features/Custom Fields/Edit Custom Field',
            'user-guide/5day.io Features/Custom Fields/Delete Custom Field',
          ]
        },
        {
          type: 'category',
          label: 'Import',
          items: [
            "user-guide/5day.io Features/Import/Data Import",
            "user-guide/5day.io Features/Import/Import People",
            "user-guide/5day.io Features/Import/Import Tasks",
          ]
        },
        {
          type: 'category',
          label: 'Sprint Management',
          items: [
            'user-guide/5day.io Features/Sprint Management/Sprint Management',
            'user-guide/5day.io Features/Sprint Management/Managing Sprint Management',
          ]
        },
        {
          type: 'category',
          label: 'Status Workflows',
          items: [
            'user-guide/5day.io Features/Status Workflows/Intro to Status Workflows',
            "user-guide/5day.io Features/Status Workflows/Add Status Workflow",
            "user-guide/5day.io Features/Status Workflows/Edit Status Workflow",
            "user-guide/5day.io Features/Status Workflows/Delete Status Workflow",
            "user-guide/5day.io Features/Status Workflows/Assign Status Workflow to Task Types",
          ]
        },
        {
          type: 'category',
          label: 'Task Types',
          items: [
            'user-guide/5day.io Features/Task Types/Intro to Task Types',
            "user-guide/5day.io Features/Task Types/Create Task Type",
            "user-guide/5day.io Features/Task Types/Edit Task Type",
            "user-guide/5day.io Features/Task Types/Delete Task Type",
            "user-guide/5day.io Features/Task Types/Add Task Type",
          ]
        },
        {
          type: 'category',
          label: 'Templates',
          items: [
            'user-guide/5day.io Features/Templates/Templates',
            "user-guide/5day.io Features/Templates/Create Project Template",
            "user-guide/5day.io Features/Templates/Edit Template",
            "user-guide/5day.io Features/Templates/Delete Template",
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Views',
      items: [
        {
          type: 'category',
          label: 'List View',
          items: [
            'user-guide/Views/List View/Intro to List View',
            'user-guide/Views/List View/Customize List View',
            'user-guide/Views/List View/Sort in List View',
            'user-guide/Views/List View/Filter in List View',
            'user-guide/Views/List View/Group By in List View',
            'user-guide/Views/List View/List View Features',
          ]
        },
        {
          type: 'category',
          label: 'Board View',
          items: [
            "user-guide/Views/Board View/Intro to Board View",
            "user-guide/Views/Board View/Customize Board View",
            "user-guide/Views/Board View/Sort in Board View",
            "user-guide/Views/Board View/Filter in Board View",
            "user-guide/Views/Board View/Group By in Board View",
            "user-guide/Views/Board View/Board View Features",
          ]
        },
        {
          type: 'category',
          label: 'Timeline View',
          items: [
            "user-guide/Views/Timeline View/Intro to Timeline View",
            "user-guide/Views/Timeline View/Filter in Timeline View",
            "user-guide/Views/Timeline View/Group By in Timeline View",
            "user-guide/Views/Timeline View/Timeline View Date Range",
            "user-guide/Views/Timeline View/Timeline View Zoom In-Zoom Out",
          ]
        },
        {
          type: 'category',
          label: 'Timesheet View',
          items: [
            "user-guide/Views/Timesheet View/Intro to Timesheet",
            "user-guide/Views/Timesheet View/Add Time Task Details",
            "user-guide/Views/Timesheet View/Bulk Time Entry Form",
            "user-guide/Views/Timesheet View/Time Entry Form",
            "user-guide/Views/Timesheet View/List View Timesheet",
            "user-guide/Views/Timesheet View/Day View Timesheet",
            "user-guide/Views/Timesheet View/Week View Timesheet",
            "user-guide/Views/Timesheet View/Month View Timesheet",
            "user-guide/Views/Timesheet View/Edit Time Entry",
            "user-guide/Views/Timesheet View/Delete Time Entry",
            "user-guide/Views/Timesheet View/Timesheet Feature",
            "user-guide/Views/Timesheet View/Timesheet Settings",
            "user-guide/Views/Timesheet View/Timesheet Summary",
            "user-guide/Views/Timesheet View/View Time Logged",
            "user-guide/Views/Timesheet View/Managing Time Approvals",
            "user-guide/Views/Timesheet View/Time Approval Settings",
            "user-guide/Views/Timesheet View/Time Approval",
            "user-guide/Views/Timesheet View/Time Entries Approval",
          ]
        },
        {
          type: 'category',
          label: 'Discussion View',
          items: [
            'user-guide/Views/Discussion View/Intro to Discussion',
            'user-guide/Views/Discussion View/Discussion View',
            'user-guide/Views/Discussion View/Add Message',
            'user-guide/Views/Discussion View/Edit Message',
            'user-guide/Views/Discussion View/Reply Message',
            'user-guide/Views/Discussion View/Delete Message',
            'user-guide/Views/Discussion View/Message Features'
          ]
        },
        {
          type: 'category',
          label: 'File View',
          items: [
            'user-guide/Views/File View/Intro to Files',
            'user-guide/Views/File View/File View',
            'user-guide/Views/File View/Upload File',
            'user-guide/Views/File View/Download File',
            'user-guide/Views/File View/Delete File'
          ]
        },
        {
          type: 'category',
          label: 'Activity Stream',
          items: [
            'user-guide/Views/Activity Stream/Intro to Activity Stream',
            'user-guide/Views/Activity Stream/Project Activity Stream',
            'user-guide/Views/Activity Stream/Section Activity Stream',
            'user-guide/Views/Activity Stream/Task Activity Stream',
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'Dashboard',
      items: [
        'user-guide/Analytics/Overview of Dashboard',
        'user-guide/Analytics/Dashboard View',
        'user-guide/Analytics/Overview of Widgets',
        'user-guide/Analytics/Add Widget',
        'user-guide/Analytics/Edit Widget',
        'user-guide/Analytics/Delete Widget',
        'user-guide/Analytics/Refresh Dashboard',
        'user-guide/Analytics/Resize Widget',
        'user-guide/Analytics/Move Widget',
        'user-guide/Analytics/Widget Types',
        'user-guide/Analytics/Chart Types - Bar Chart',
        'user-guide/Analytics/Chart Types - Line Chart',
        'user-guide/Analytics/Chart Types - Pie Chart',
        'user-guide/Analytics/Chart Types - Doughnut Chart',
        'user-guide/Analytics/Chart Types - Number Chart',
        'user-guide/Analytics/Chart Types - Table Chart',
        'user-guide/Analytics/Widget Filters'
      ],
    },
    {
      type: 'category',
      label: 'Account Management',
      items: [
        {
          type: 'category',
          label: 'Account Settings',
          items: [
            'user-guide/Account Management/Account Settings/Account Settings',
            'user-guide/Account Management/Account Settings/Account Profile',
            'user-guide/Account Management/Account Settings/Access Account Profile',
            'user-guide/Account Management/Account Settings/Manage Account Profile',
            'user-guide/Account Management/Account Settings/Work Schedule',
            'user-guide/Account Management/Account Settings/Create Work Schedule',
            'user-guide/Account Management/Account Settings/Edit Work Schedule',
            'user-guide/Account Management/Account Settings/Delete Work Schedule',
            'user-guide/Account Management/Account Settings/People Section',
            'user-guide/Account Management/Account Settings/Invite New User',
            'user-guide/Account Management/Account Settings/Remove User',
            'user-guide/Account Management/Account Settings/Change Account Owner',
            'user-guide/Account Management/Account Settings/Change Organization Logo',
          ],
        },
        {
          type: 'category',
          label: 'Roles and Permissions',
          items: [
            'user-guide/Account Management/Roles Permissions/Intro to Security Permissions',
            'user-guide/Account Management/Roles Permissions/Global and Feature Permission',
            'user-guide/Account Management/Roles Permissions/Create Custom Roles',
            'user-guide/Account Management/Roles Permissions/Account Admin Role',
            'user-guide/Account Management/Roles Permissions/Account Owner Role',
            'user-guide/Account Management/Roles Permissions/External Member Role',
            'user-guide/Account Management/Roles Permissions/Guest Role',
            'user-guide/Account Management/Roles Permissions/Manager Role',
            'user-guide/Account Management/Roles Permissions/Member Role',
            'user-guide/Account Management/Roles Permissions/Edit Roles',
            'user-guide/Account Management/Roles Permissions/Delete Role',
          ],
        }
      ],
    },
    {
      type: 'category',
      label: 'My Space',
      items: [
        'user-guide/My Space/My Work',
        'user-guide/My Space/My Timesheet',
        'user-guide/My Space/My Reminders',
        'user-guide/My Space/My Calendar',
      ],
    },
    {
      type: 'category',
      label: 'General',
      items: [
        "user-guide/General/Quick Add",
        "user-guide/General/Notifications",
        "user-guide/General/Global Search",
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        {
          type: 'category',
          label: 'Microsoft Teams',
          items: [
            "user-guide/Integrations/Microsoft Teams/Intro to Microsoft Teams Integration",
            "user-guide/Integrations/Microsoft Teams/Connect Microsoft teams account",
            "user-guide/Integrations/Microsoft Teams/Create Task via Teams",
            "user-guide/Integrations/Microsoft Teams/List of Commands",
          ]
        },
        {
          type: 'category',
          label: 'Slack',
          items: [
            "user-guide/Integrations/Slack/Intro to Slack Integration",
            "user-guide/Integrations/Slack/Connect slack account",
            "user-guide/Integrations/Slack/Create Task via Slack",
            "user-guide/Integrations/Slack/List of Commands",
          ]
        },
        {
          type: 'category',
          label: 'Zapier',
          items: [
            "user-guide/Integrations/Zapier/Intro to Zapier Integration",
            "user-guide/Integrations/Zapier/Triggers",
            "user-guide/Integrations/Zapier/Actions",
          ]
        },
        {
          type: 'category',
          label: 'Google Calendar',
          items: [
            "user-guide/Integrations/Google Calendar/Intro to Google Calendar Integration",
            "user-guide/Integrations/Google Calendar/Sync Google Calendars",
          ]
        }
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Use Cases',
    //   items: [
    //     'user-guide/Use Cases/Intro to Use Cases',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'Videos',
    //   items: [
    //     'user-guide/Videos/Videos',
    //   ],
    // }
  ],


};

export default sidebars;
