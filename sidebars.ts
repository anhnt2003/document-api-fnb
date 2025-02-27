import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

import apiSidebar from './docs/getting-started/apis/openapi/sidebar';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Getting started',
      items: [
        {
          type: 'doc',
          id: 'getting-started/authentication',
          label: 'Authentication',
        },
        {
          type: 'category',
          label: 'API endpoints',
          items: [
            ...apiSidebar,
          ],
        },
        {
          type: 'doc',
          id: 'getting-started/http-response-codes',
          label: 'HTTP response codes',
        },
      ],
    },
  ],
};

export default sidebars;
