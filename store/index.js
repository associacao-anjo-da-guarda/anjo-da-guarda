export const state = () => ({
    blogPosts: [],
    home: {},
    about: {}
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
    }
}

export const actions = {
    async nuxtServerInit ({ commit }) {
        const files = await require.context(
            '~/assets/content/blog/',
            false,
            /\.json$/
        )

        const { default: home } = await import('~/assets/content/home.json')
        const { default: about } = await import('~/assets/content/about.json')

        // console.log('files', files.keys())
        // console.log('homeFile', home)

        const blogPosts = files.keys().map((key) => {
            const res = files(key)

            // console.log('files(key)', files(key))

            res.slug = key.slice(2, -5)
            return res
        })

        // console.log('blogPosts', blogPosts)

        await commit('setBlogPosts', blogPosts)
        await commit('setHome', home)
        await commit('setAbout', about)
    }
}
