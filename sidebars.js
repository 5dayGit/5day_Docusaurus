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
      collapsed: false,
      items: [
        'getting-started/introduction',
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/first-project',
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      collapsed: false,
      items: [
        'user-guide/dashboard',
        'user-guide/projects',
        'user-guide/tasks',
        'user-guide/teams',
        'user-guide/reports',
        'user-guide/settings',
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
