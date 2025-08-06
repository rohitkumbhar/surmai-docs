import {defineConfig, HeadConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Surmai",
  description: "Travel Planning Made Easy",
  // base: '/surmai-docs/', only needed if not publishing on the root domain
  head: [
    ['link', {rel: 'icon', href: '/logo.svg'}],
  ],
  transformHead: ({pageData}) => {
    const head: HeadConfig[] = []

    if (pageData.frontmatter.title && pageData.frontmatter.description) {
      head.push(['meta', {property: 'og:title', content: pageData.frontmatter.title}]);
      head.push(['meta', {property: 'og:description', content: pageData.frontmatter.description}])
    }
    head.push(['meta', {
      name: 'description',
      content: 'Surmai is a personal/family travel organizer. It allow collaborative planning between multiple people, easy access to all the necessary artifacts and keeps the data private.'
    }])
    head.push(['meta', {name: 'robots', content: 'index, follow'}])
    head.push(['meta', {name: 'og:url', content: 'https://surmai.app'}])
    head.push(['meta', {name: 'og:site_name', content: 'Surmai'}])
    head.push(['meta', {name: 'og:locale', content: 'en_US'}])

    return head
  },

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
        text: 'Screenshots',
        link: '/documentation/screenshots',
      },
      {
        text: 'Configuration',
        items: [
          {text: 'Site Configuration', link: '/documentation/configuration/site-configuration'},
          {text: 'Managing Users', link: '/documentation/configuration/managing-users'},
          {text: 'SMTP Settings', link: '/documentation/configuration/setting-up-email'},
          {text: 'Datasets', link: '/documentation/configuration/loading-datasets'},
          {text: 'Integrations', link: '/documentation/configuration/third-party-integrations'},
          {
            text: 'Pocketbase Administration',
            link: '/documentation/configuration/using-pocketbase-admin-portal'
          },
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
