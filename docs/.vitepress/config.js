export default {
  title: 'Qwiery',
  description: 'Qwiery is a powerful framework for managing graph-like data in the browser and server-side.',
  cleanUrls: true,
  base: "/",
  themeConfig: {
    logo: '/QwierySmall.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Qwiery/qwiery' },
      { icon: 'twitter', link: 'https://twitter.com/TheOrbifold' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/index' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Plugins', link: '/guide/plugins' },
          { text: 'Adapters', link: '/guide/adapters' },
        ]
      }
    ],
    footer: {
      message: '',
      copyright: 'By <a href="https://graphsandnetworks.com" target="_blank">Orbifold Consulting</a>'
    },
    editLink: {
      pattern: 'https://github.com/Qwiery/qwiery.github.io/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    nav: [
      { text: 'Guide', link: '/guide/index' },
      {
        text: 'Adapters',
        items: [
          { text: 'LevelDB', link: '/adapters/LevelDB/index' },
          { text: 'LocalStorage', link: '/adapters/LocalStorage/index' },
          { text: 'Memory', link: '/adapters/Memory/index' },
          { text: 'Neo4j', link: '/adapters/Neo4j/index' },
          { text: 'RDF', link: '/adapters/RDF/index' },
          { text: 'SQL', link: '/adapters/SQL/index' }
        ]
      },
      {
        text: 'Plugins',
        items: [
          { text: 'Schema', link: '/plugins/Schema/index' },
          { text: 'Semantic', link: '/plugins/Semantic/index' }
        ]
      }
    ]
  },
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png" }],
    ['link', { rel: "manifest", href: "/favicons/site.webmanifest" }],
    ['link', { rel: "mask-icon", href: "/favicons/safari-pinned-tab.svg", color: "#3a0839" }],
    ['link', { rel: "shortcut icon", href: "/favicons/favicon.ico" }],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839" }],
    ['meta', { name: "msapplication-config", content: "/favicons/browserconfig.xml" }],
    ['meta', { name: "theme-color", content: "#ffffff" }],
    [
      'script',
      { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-7FDQLS78J0' }
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-7FDQLS78J0');"
    ]
  ]
}
