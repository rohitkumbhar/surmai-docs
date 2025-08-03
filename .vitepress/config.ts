import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Surmai",
  description: "Travel Planning Made Easy",
  head: [['link', {rel: 'icon', href: '/logo.svg'}]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    search: {
      provider: 'local'
    },
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Documentation', link: '/documentation'},
      {text: 'Demo', link: 'https://demo.surmai.app'}

    ],
    sidebar: [
      {
        text: 'Installation',
        link: '/documentation/installation',
      },
      {
        text: 'Configuration',
        items: [
          {text: 'Site Configuration', link: '/documentation/configuration/site-configuration'},
          {text: 'Managing Users', link: '/documentation/configuration/managing-users'},
          {text: 'SMTP Settings', link: '/documentation/configuration/setting-up-email'},
          {text: 'Datasets', link: '/documentation/configuration/loading-datasets'},
          {text: 'Integrations', link: '/documentation/configuration/third-party-integrations'},
          {text: 'Pocketbase Administration', link: '/documentation/configuration/using-pocketbase-admin-portal'},
        ]
      },
      {
        text: 'User Documentation',
        items: [
          {text: 'Managing Trips', link: '/documentation/usage/managing-trips'},
          {text: 'Collaboration', link: '/documentation/usage/collaborating-on-a-trip'},
          {text: 'Offline Access', link: '/documentation/usage/offline-access'},
          {text: 'Calendar Integration', link: '/documentation/usage/calendar-integration'},
          {text: 'Import/Export', link: '/documentation/usage/import-export-trip'},
          {text: 'User Profile', link: '/documentation/usage/user-profile'},
          {text: 'Mobile Apps', link: '/documentation/usage/mobile-apps'},
        ]
      },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-Present Rohit Kumbhar'
    },
    socialLinks: [
      {icon: 'github', link: 'https://github.com/rohitkumbhar/surmai'}
    ]
  }
})
