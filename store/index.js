export const state = () => ({
    blogPosts: [],
    home: {},
    about: {},
    events: [],
    galleries: []
})

export const mutations = {
    setBlogPosts (state, list) {
        state.blogPosts = list
    },
    setHome (state, home) {
        state.home = home
    },
    setAbout (state, about) {
        state.about = about
    },
    setEvents (state, events) {
        state.events = events
    },
    setGalleries (state, galleries) {
        state.galleries = galleries
    }
}

export const actions = {
    // async nuxtServerInit ({ commit }) {
    //     const blogFiles = await require.context(
    //         '~/assets/content/blog/',
    //         false,
    //         /\.json$/
    //     )

    //     const eventFiles = await require.context(
    //         '~/assets/content/events/',
    //         false,
    //         /\.json$/
    //     )

    //     const galleryFiles = await require.context(
    //         '~/assets/content/galleries/',
    //         false,
    //         /\.json$/
    //     )

    //     const { default: home } = await import('~/assets/content/home.json')
    //     const { default: about } = await import('~/assets/content/about.json')

    //     const blogPosts = blogFiles.keys().map((key) => {
    //         const res = blogFiles(key)

    //         res.slug = key.slice(2, -5)
    //         return res
    //     })
    //     const events = eventFiles.keys().map((key) => {
    //         const res = eventFiles(key)

    //         res.slug = key.slice(2, -5)
    //         return res
    //     })
    //     const galleries = galleryFiles.keys().map((key) => {
    //         const res = galleryFiles(key)

    //         res.slug = key.slice(2, -5)
    //         return res
    //     })

    //     await commit('setBlogPosts', blogPosts)
    //     await commit('setEvents', events)
    //     await commit('setGalleries', galleries)
    //     await commit('setHome', home)
    //     await commit('setAbout', about)
    // }
}
