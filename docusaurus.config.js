// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import src from 'docusaurus-lunr-search';
import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '5day Product Help',
  tagline: 'Complete guide to using our product effectively',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  // For self-hosted GitLab Pages at git.rishabhsoft.com
  url: 'https://help.5day.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitLab Pages deployment config
  organizationName: 'reusable-components', // Your GitLab group name
  projectName: 'rishabh-product-help', // Your GitLab repo name

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        // title: '5day Product Help',
        logo: {
          alt: 'Product Logo',
          src: 'img/5day_logo_Regular.svg',
          srcDark: 'img/5day_logo_White.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'right',
            label: 'Documentation',
            className: 'nav-icon-link nav-doc-link',
          },
          //  {
          //    type: 'docSidebar',
          //    sidebarId: 'apiSidebar',
          //    position: 'left',
          //    label: 'API Reference',
          //  },
          //   {to: '/pricing', label: 'Pricing', position: 'left'},
          { to: '/contact', label: 'Contact Support', position: 'right', className: 'nav-icon-link nav-contact-link', },
          {
            type: 'html',
            value: ' ',
            position: 'right',
            className: 'color-mode-toggle-link navbar-link--colorModeToggle',
          },
          {
            type: 'search',
            position: 'right',
            className: 'nav-search',
          },
          {
            type: 'html',
            position: 'right',
            value: `
                  <div class="navbar-get-started-wrapper">
                  <a href="/" class="navbar-get-started-btn">
                  Start for free
                  </a>
                  </div>
                   `,
            className: 'navbar__item custom-new-button-position',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} 5-day. All Rights Reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

config.plugins = [
  [
    require.resolve('docusaurus-lunr-search'),
    {
      languages: ['en'],
      indexBaseUrl: true,
    },
  ],
  [
    '@docusaurus/plugin-client-redirects',
    {

      redirects: [
        {
          from: '/',
          to: '/docs/getting-started/introduction',
        },
      ],
    },
  ],
];

export default config;
