/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [{
  caption: 'SNCF',
  // You will need to prepend the image path with your baseUrl
  // if it is not '/', like: '/test-site/img/image.jpg'.
  image: '/kizeo-forms-documentations/img/logo_sncf.png',
  // infoLink: 'https://www.sncf.com',
  pinned: true,
}, 
{
  caption: 'Engie Ineo',
  // You will need to prepend the image path with your baseUrl
  // if it is not '/', like: '/test-site/img/image.jpg'.
  image: '/kizeo-forms-documentations/img/logo_engie.png',
  // infoLink: 'https://www.engie-ineo.fr',
  pinned: true,
}, 
{
  caption: 'ESG Ecoles de commerce',
  // You will need to prepend the image path with your baseUrl
  // if it is not '/', like: '/test-site/img/image.jpg'.
  image: '/kizeo-forms-documentations/img/logo_esg.jpg',
  pinned: true,
}, 
{
  caption: 'Mulhouse',
  // You will need to prepend the image path with your baseUrl
  // if it is not '/', like: '/test-site/img/image.jpg'.
  image: '/kizeo-forms-documentations/img/logo_mulhouse.jpg',
  pinned: true,
}, 
{
  caption: 'Nexity',
  // You will need to prepend the image path with your baseUrl
  // if it is not '/', like: '/test-site/img/image.jpg'.
  image: '/kizeo-forms-documentations/img/logo_nexity.png',
  pinned: true,
}, 
{
  caption: 'SUEZ',
  // You will need to prepend the image path with your baseUrl
  // if it is not '/', like: '/test-site/img/image.jpg'.
  image: '/kizeo-forms-documentations/img/logo_suez.png',
  pinned: true,
}, 
{
  caption: 'Vinci Energies',
  // You will need to prepend the image path with your baseUrl
  // if it is not '/', like: '/test-site/img/image.jpg'.
  image: '/kizeo-forms-documentations/img/logo_vinci.png',
  pinned: true,
}, 
{
  caption: 'Ayme Groupe',
  // You will need to prepend the image path with your baseUrl
  // if it is not '/', like: '/test-site/img/image.jpg'.
  image: '/kizeo-forms-documentations/img/logo_ayme.png',
  pinned: true,
} 
];

const siteConfig = {
  title: 'Kizeo Forms Documentations', // Title for your website.
  tagline: 'Advanced features for developers',
  url: 'https://kizeo.github.io', // Your website URL
  baseUrl: '/kizeo-forms-documentations/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'kizeo-forms-documentations',
  organizationName: 'kizeo',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [{
      doc: 'installation',
      label: 'Kizeo Connector'
    },
    {
      doc: 'restv3',
      label: 'Web Service'
    },
    {
      languages: true
    },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/kizeo-white.png',
  footerIcon: 'img/kizeo-couleurs.png',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#a1c639',
    secondaryColor: '#617723',
  },

  editUrl: 'https://github.com/kizeo/kizeo-forms-documentations/edit/master/docs/',

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Kizeo`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  twitter: 'true',
  twitterUsername: 'kizeo',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;