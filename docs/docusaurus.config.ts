import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {

  // Add custom fields for site-wide context
  customFields: {
      description: 'Learn generative AI concepts from the ground up. Complete quickstart tutorials. Tear down open-source projects. Week-long sprrints. 30-day roadmaps.'
  },

  // Pre-defined site-wide context fields
  title: 'Deconstructing AI',
  tagline: 'Build it up · Break it down · Make it better.',
  favicon: 'img/logo.png',

  url: 'https://30daysof.github.io',
  baseUrl: '/generative-ai/',
  trailingSlash: false,

  organizationName: '30daysof',  // -- For GitHub Usage
  projectName: 'generative-ai', 
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {

    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },

    navbar: {

      title: 'Deconstructing AI',
      logo: {
        alt: 'Deconstructing AI Logo',
        src: 'img/logo.png',
      },
      style: 'primary',

      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorials',
        },
        {to: '/blog', label: 'Roundups', position: 'right'},
        {to: 'https://aka.ms/ai-studio/collection', label: 'Collection', position: 'right'},
        {
          href: 'https://github.com/30daysof/generative-ai',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          label: `Azure AI Collection`,
          to: "https://aka.ms/ai-studio/collection",
        },
        {
          label: `Responsible AI Collection`,
          to: "https://aka.ms/rai-hub/collection",
        },
        {
          label: `AI Developer Hub`,
          to: "https://learn.microsoft.com/ai/",
        },
        {
          label: 'Azure AI Discord',
          to: 'https://discord.gg/yrTeVQwpWm',
        },
        {
          label: `© ${new Date().getFullYear()} Nitya Narasimhan`,
          to: "https://github.com/nitya",
        },
      ],
    },
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
