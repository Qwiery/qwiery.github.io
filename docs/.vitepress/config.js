export default {
    title: 'Qwiery',
    description: 'Qwiery is a powerful framework for managing graph-like data in the browser and server-side.',
    cleanUrls: true,
    ignoreDeadLinks: true,
    base: "/",
    themeConfig: {
        logo: '/QwierySmall.png',
        socialLinks: [
            {icon: 'github', link: 'https://github.com/Qwiery/'},
            {icon: 'twitter', link: 'https://twitter.com/TheOrbifold'}
        ],
        sidebar: [
            {
                text: 'Guide',
                items: [
                    {text: 'Getting Started', link: '/guide/getting-started'},
                    {text: 'Graph Databases', link: '/guide/graphdatabases'},
                    {text: "Schema's", link: '/guide/schemas'},
                    {text: "Triple Stores", link: '/guide/triplestores'},
                    {text: "Graphs", link: '/guide/graphs'},

                ]
            },
            {
                text: 'Qwiery DAL',
                items: [
                    {text: 'Introduction', link: '/dal/index'},
                    {text: 'Getting Started', link: '/dal/getting-started'},
                    {text: 'Plugins', link: '/dal/plugins'},
                    {text: 'Adapters', link: '/dal/adapters'},
                    {text: 'Graphs', link: '/dal/graphs'},
                    {text: 'Utilities', link: '/dal/utils'},
                    {text: 'Clients', link: '/dal/clients'},
                    {text: 'Browser', link: '/dal/browser'}
                ]
            },
            {
                text: 'Nuxt Client',
                items: [
                    {text: 'Overview', link: '/clients/nuxt/index'},
                    {text: 'Web API', link: '/clients/nuxt/webapi'},
                    {text: 'Schema Viz', link: '/clients/nuxt/schemaviz'},

                ]
            }

        ],
        footer: {
            message: '',
            copyright: 'By <a href="https://graphsandnetworks.com" target="_blank">Orbifold Consulting</a>'
        },
        editLink: {
            pattern: 'https://github.com/Qwiery/qwiery.github.io/blob/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        nav: [
            {text: 'Guide', link: '/guide/getting-started'},
            {
                text: 'Dashboards',
                items: [
                    {text: 'Overview', link: '/dashboards/index'},
                    {text: 'Application', link: '/dashboards/application'},
                    {text: 'Graph Widget', link: '/dashboards/graph-widget'},
                    {text: 'Chart Widget', link: '/dashboards/chart-widget'},
                    {text: 'Markdown Widget', link: '/dashboards/markdown-widget'}
                ]
            },
            {
                text: 'Adapters',
                items: [

                    {text: 'Json', link: '/adapters/json/index'},
                    {text: 'Cypher', link: '/adapters/cypher/index'},
                    {text: 'Sparql', link: '/adapters/sparql/index'},
                    {text: 'Sql', link: '/adapters/sql/index'}
                ]
            },
            {
                text: 'Plugins',
                items: [
                    {text: 'Schema', link: '/plugins/schema/index'},
                    {text: 'Semantic', link: '/plugins/Semantic/index'}
                ]
            },
            {
                text: 'Clients',
                items: [
                    {text: 'Nuxt', link: '/clients/nuxt/index'},
                    {text: 'React', link: '/clients/react/index'},
                    {text: 'Angular', link: '/clients/angular/index'}
                ]
            },
            {
                text: 'Graphviz',
                items: [
                    {text: 'Cytoscape', link: '/graphviz/cytoscape/index'},
                    {text: 'Ogma', link: '/graphviz/ogma/index'},
                    {text: 'yFiles', link: '/graphviz/yfiles/index'},
                    {text: 'Graph View API', link: '/graphviz/graphView'}
                ]
            }
        ]
    },
    head: [
        ['link', {rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png"}],
        ['link', {rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png"}],
        ['link', {rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png"}],
        ['link', {rel: "manifest", href: "/favicons/site.webmanifest"}],
        ['link', {rel: "mask-icon", href: "/favicons/safari-pinned-tab.svg", color: "#3a0839"}],
        ['link', {rel: "shortcut icon", href: "/favicons/favicon.ico"}],
        ['meta', {name: "msapplication-TileColor", content: "#3a0839"}],
        ['meta', {name: "msapplication-config", content: "/favicons/browserconfig.xml"}],
        ['meta', {name: "theme-color", content: "#ffffff"}],
        [
            'script',
            {async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-7FDQLS78J0'}
        ],
        [
            'script',
            {},
            "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-7FDQLS78J0');"
        ]
    ]
}
