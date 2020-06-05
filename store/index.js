export const state = () => ({
    blogPosts: [],
    home: {},
    about: {},
    events: []
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
    }
}

export const actions = {
    async nuxtServerInit ({ commit }) {
        const blogFiles = await require.context(
            '~/assets/content/blog/',
            false,
            /\.json$/
        )

        const eventFiles = await require.context(
            '~/assets/content/events/',
            false,
            /\.json$/
        )

        const { default: home } = await import('~/assets/content/home.json')
        const { default: about } = await import('~/assets/content/about.json')

        // console.log('blogFiles', blogFiles.keys())
        // console.log('homeFile', home)

        const blogPosts = blogFiles.keys().map((key) => {
            const res = blogFiles(key)

            // console.log('blogFiles(key)', blogFiles(key))

            res.slug = key.slice(2, -5)
            return res
        })
        const events = eventFiles.keys().map((key) => {
            const res = eventFiles(key)

            // console.log('eventFiles(key)', eventFiles(key))

            res.slug = key.slice(2, -5)
            return res
        })

        // console.log('blogPosts', blogPosts)
        // console.log('events', events)

        await commit('setBlogPosts', blogPosts)
        await commit('setEvents', events)
        await commit('setHome', home)
        await commit('setAbout', about)
    }
}
