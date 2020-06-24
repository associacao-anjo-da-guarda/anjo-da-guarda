import config from './common/config'

export default {

    mode: 'universal',

    target: 'static',

    // router: {
    //     trailingSlash: true
    // },

    /*
   ** Headers of the page
   */
    head: {
        title: config.app.siteTitle,
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: config.app.siteDescription
            },

            // OpenGraph
            {
                hid: 'og:title',
                property: 'og:title',
                content: config.app.siteTitle
            },
            {
                hid: 'og:site_name',
                property: 'og:site_name',
                content: config.app.siteName
            },
            {
                hid: 'og:type',
                property: 'og:type',
                content: 'website'
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: config.app.siteUrl
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: `${config.app.siteUrl}/${config.app.siteSocialImage}`
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: config.app.siteDescription
            },

            // Twitter card
            {
                hid: 'twitter:card',
                name: 'twitter:card',
                content: 'summary_large_image'
            },
            {
                hid: 'twitter:site',
                name: 'twitter:site',
                content: config.app.twitterUser
            },
            {
                hid: 'twitter:title',
                name: 'twitter:title',
                content: config.app.siteTitle
            },
            {
                hid: 'twitter:description',
                name: 'twitter:description',
                content: config.app.siteDescription
            },
            {
                hid: 'twitter:image:src',
                name: 'twitter:image:src',
                content: `${config.app.siteUrl}/${config.app.siteSocialImage}`
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    generate: {
        fallback: '404.html' // Netlify reads a 404.html, Nuxt will load as an SPA
        // routes () {
        //     const fs = require('fs')
        //     const blogRoutes = fs.readdirSync('./assets/content/blog').map((file) => {
        //         return {
        //             route: `/blog/${file.slice(2, -5)}`,
        //             payload: require(`./assets/content/blog/${file}`)
        //         }
        //     })
        //     const eventRoutes = fs.readdirSync('./assets/content/events').map((file) => {
        //         return {
        //             route: `/eventos/${file.slice(2, -5)}`,
        //             payload: require(`./assets/content/events/${file}`)
        //         }
        //     })
        //     const galleryRoutes = fs.readdirSync('./assets/content/galleries').map((file) => {
        //         return {
        //             route: `/galerias/${file.slice(2, -5)}`,
        //             payload: require(`./assets/content/galleries/${file}`)
        //         }
        //     })

        //     return [
        //         ...blogRoutes,
        //         ...eventRoutes,
        //         ...galleryRoutes
        //     ]
        // }
    },

    /*
   ** Customize the progress-bar color
   */
    loading: { color: '#fff' },
    /*
   ** Global CSS
   */
    css: ['~/assets/css/theme.css'],
    /*
   ** Plugins to load before mounting the App
   */
    plugins: [
        '~/plugins/loadGlobalComponents'
    ],
    /*
   ** Nuxt.js dev-modules
   */
    buildModules: [
        ['@nuxtjs/google-analytics', {
            id: 'UA-26818222-5'
        }]
        // modules for full static before `nuxt export` (coming in v2.12)
        // '@/modules/static',
        // '@/modules/crawler'
    ],
    /*
   ** Nuxt.js modules
   */
    modules: [
        '@nuxtjs/pwa',
        // https://prismic-nuxt.js.org/
        '@nuxtjs/prismic'
    ],
    // @nuxtjs/pwa module options
    pwa: {
        manifest: {
            name: 'Anjo da Guarda',
            short_name: 'Anjo'
        }
    },
    // @nuxtjs/prismic module options
    prismic: {
        endpoint: 'https://anjo.cdn.prismic.io/api/v2',
        linkResolver: '@/plugins/link-resolver',
        htmlSerializer: '@/plugins/html-serializer',
        components: false,
        preview: false
    },
    /*
   ** Build configuration
   */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend (config, ctx) {
            config.module.rules.push({
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader'
            })
        }
    }
}
