import type * as OpenApiPlugin from 'docusaurus-plugin-openapi-docs';
import { themes as prismThemes } from 'prism-react-renderer';

import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import type * as Plugin from '@docusaurus/types/src/plugin';

import { kvOpenApiMdGenerator } from './customMdGenerators';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'KiotViet FnB Developer',
  tagline: 'Build for developers, by developers.',
  favicon: 'img/logo.jpeg',

  // Set the production url of your site here
  url: 'https://developer.fnb.kiotviet.vn',
  // Set the /<baseUrl>/ pathname under which your site is serv
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kiotviet', // Usually your GitHub org/user name.
  projectName: 'kvfnb-open-api', // Usually your repo name.

  onBrokenLinks: 'throw',
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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          docItemComponent: "@theme/ApiItem",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "openapi",
        docsPluginId: "classic", // configured for preset-classic
        config: {
          openapi: {
            specPath: "src/schemas/openapi.json",
            outputDir: "docs/getting-started/apis/openapi",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "auto" 
            },
            disableCompression: true,
            template: "api.mustache",
            markdownGenerators: { createApiPageMD: kvOpenApiMdGenerator },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions
      },
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'KiotViet FnB Developer',
      logo: {
        alt: 'KiotViet FnB Developer',
        src: 'img/icon.svg',
        srcDark: 'img/icon-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left', 
          label: 'Docs',
        },
        // {
        //   type: 'custom',
        //   component: InputSearch,
        //   position: 'right',
        // }
      ],
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.nightOwlLight,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
