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
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/introduction',
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/first-project',
      ]
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
          label: 'Custom Fields',
          items: [
            'user-guide/5day.io Features/Custom Fields/Intro to Custom Fields',
            'user-guide/5day.io Features/Custom Fields/Add Custom Field',
            'user-guide/5day.io Features/Custom Fields/Custom Field Types',
            'user-guide/5day.io Features/Custom Fields/List of Custom Fields',
            'user-guide/5day.io Features/Custom Fields/Edit Custom Field',
            'user-guide/5day.io Features/Custom Fields/Delete Custom Field',
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Views',
      items: [
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
      label: 'Integrations',
      items: [
        'user-guide/Integrations/Microsoft Teams/Intro to Integration with Microsoft Teams',
      ],
    },
    {
      type: 'category',
      label: 'My Space',
      items: [
        'user-guide/My Space/My Work',
        'user-guide/My Space/My Timesheet',
        'user-guide/My Space/My Reminder',
        'user-guide/My Space/My Calendar',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/collaboration',
        'features/notifications',
        'features/integrations',
        'features/automation',
        'features/test01'
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        'advanced/security',
        'advanced/performance',
        'advanced/customization',
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'faq/general',
        'faq/billing',
        'faq/technical',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/common-issues',
        'troubleshooting/error-messages',
      ],
    },
  ],

  // API Reference sidebar
  apiSidebar: [
    'api/overview',
    {
      type: 'category',
      label: 'Authentication',
      items: [
        'api/authentication/api-keys',
        'api/authentication/oauth',
      ],
    },
    {
      type: 'category',
      label: 'Endpoints',
      items: [
        'api/endpoints/projects',
        'api/endpoints/tasks',
        'api/endpoints/users',
      ],
    },
    'api/rate-limits',
    'api/webhooks',
  ],
};

export default sidebars;
