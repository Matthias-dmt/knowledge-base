import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Knowledge Base',
  tagline: 'System design, Node.js/TypeScript patterns, and architecture decisions',
  favicon: 'img/favicon.ico',

  // GitHub Pages deployment — replace with real values before deploying
  url: 'https://your-username.github.io',
  baseUrl: '/knowledge-base/',
  organizationName: 'your-username',
  projectName: 'knowledge-base',
  trailingSlash: false,

  // Wikilinks ([[file]]) are Obsidian syntax — Docusaurus won't resolve them,
  // but they won't break the build either; warn on standard broken links only.
  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          // Serve docs from the repo root, not the default /docs subfolder.
          path: '.',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',

          // Explicit allowlist — only content folders are included.
          include: [
            'system-design/**/*.md',
            'databases/**/*.md',
            'caching/**/*.md',
            'async-and-queues/**/*.md',
            'architecture/**/*.md',
            'api-design/**/*.md',
            'observability/**/*.md',
            'typescript/**/*.md',
            '_meta/**/*.md',
            '_templates/**/*.md',
          ],

          // Override the default exclude list so _meta and _templates
          // (underscore-prefixed dirs) are not silently dropped.
          exclude: [
            'README.md',
            'AGENTS.md',
            'node_modules/**',
            '.docusaurus/**',
            'src/**',
            'static/**',
            'build/**',
          ],

          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Knowledge Base',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/your-username/knowledge-base',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Built with Docusaurus.`,
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'forest' },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['typescript', 'bash', 'sql', 'yaml', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
