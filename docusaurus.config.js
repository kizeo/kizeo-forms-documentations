// @ts-check
// Docusaurus site configuration
// See https://docusaurus.io/docs/api/docusaurus-config

const { themes } = require("prism-react-renderer");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Kizeo Forms Documentations",
  tagline: "Advanced features for developers",
  favicon: "img/favicon.svg",

  url: "https://kizeo.github.io",
  baseUrl: "/kizeo-forms-documentations/",

  organizationName: "kizeo",
  projectName: "kizeo-forms-documentations",

  onBrokenLinks: "warn",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    localeConfigs: {
      en: { label: "English" },
      fr: { label: "Français" },
    },
  },

  // List of showcase users, consumed by the homepage.
  customFields: {
    users: [
      { caption: "SNCF", image: "img/logo_sncf.png" },
      { caption: "Engie Ineo", image: "img/logo_engie.png" },
      { caption: "ESG Ecoles de commerce", image: "img/logo_esg.jpg" },
      { caption: "Mulhouse", image: "img/logo_mulhouse.jpg" },
      { caption: "Nexity", image: "img/logo_nexity.png" },
      { caption: "SUEZ", image: "img/logo_suez.png" },
      { caption: "Vinci Energies", image: "img/logo_vinci.png" },
      { caption: "Ayme Groupe", image: "img/logo_ayme.png" },
    ],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          // editUrl: 'https://github.com/kizeo/kizeo-forms-documentations/edit/master/',
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  scripts: [{ src: "https://buttons.github.io/buttons.js", async: true }],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      image: "img/kizeo-couleurs.png",
      navbar: {
        title: "Kizeo Forms Documentations",
        logo: {
          alt: "Kizeo Forms",
          src: "img/kizeo-white.png",
          srcDark: "img/kizeo-black.png",
        },
        items: [
          {
            type: "doc",
            docId: "installation",
            label: "Kizeo Connector",
            position: "left",
          },
          {
            type: "doc",
            docId: "restv3",
            label: "API Rest V3",
            position: "left",
          },
          {
            type: "doc",
            docId: "deep-linking",
            label: "Deep linking",
            position: "left",
          },
          { type: "localeDropdown", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              { label: "Kizeo Connector", to: "/docs/installation" },
              { label: "API (Web Service REST)", to: "/docs/restv3" },
              { label: "Deep linking", to: "/docs/deep-linking" },
            ],
          },
          {
            title: "More",
            items: [
              { label: "Kizeo Forms", href: "https://forms.kizeo.com" },
              { label: "GitHub", href: "https://github.com/kizeo" },
              { label: "Twitter", href: "https://twitter.com/kizeo" },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kizeo`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

module.exports = config;
