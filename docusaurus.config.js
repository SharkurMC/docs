// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const vsDark = require('prism-react-renderer/themes/vsDark');

const docsCommon = {
  breadcrumbs: true,
  editUrl: ({ docPath }) => `https://github.com/SharkurMC/docs/blob/main/docs/sharkur/${docPath}`,
  editCurrentVersion: true,
  showLastUpdateAuthor: true,
  showLastUpdateTime: true,
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SharkurMC Documentation',
  tagline: 'Documentation for Sharkur',
  url: 'https://sharkurmc.github.io/docs',
  baseUrl: '/docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  trailingSlash: false,
  noIndex: true,
  clientModules: [require.resolve("./src/css/custom.css")],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SharkurMC', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace 'en' with 'zh-Hans'.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("esbuild-loader"),
      options: {
        loader: "tsx",
        target: isServer ? "node12" : "es2017",
      },
    }),
  },

  themes: [
    [
      "classic",
      {
        respectPrefersColorScheme: true,
      },
    ]
  ],

  plugins: [
    [
      "content-docs",
      {
        ...docsCommon,
        id: "sharkur",
        path: "docs/sharkur",
        routeBasePath: "sharkur",
        sidebarPath: require.resolve("./config/sidebar.sharkur"),
      },
    ],
    [
      "content-pages",
      {
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      metadata: [
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:image:alt',
          content: 'SharkurMC Logo',
        },
      ],
      navbar: {
        title: 'SharkurMC',
        logo: {
          alt: 'SharkurMC Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: 'sharkur',
            label: 'Sharkur',
            position: 'left',
          },
          {
            href: 'https://github.com/SharkurMC/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                to: 'https://discord.gg/AjKJSBbGm2',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/SharkurMC',
              },
            ],
          },
          {
            title: 'Documentation',
            items: [
              {
                label: 'Documentation',
                href: '/',
              },
              {
                label: 'Javadooc',
                href: '/javadocs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                href: '/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/SharkurMC/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SharkurMC and Contributors. Built with Docusaurus.`,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      prism: {
        additionalLanguages: [
          'batch',
          'bash',
          'git',
          'java',
          'javastacktrace',
          'kotlin',
          'groovy',
          'log',
          'toml',
          'properties',
        ],
        theme: vsDark,
      },
    }),
};

module.exports = config;
