export const state = () => ({
    blogPosts: [],
    home: {}
})

export const mutations = {
    setBlogPosts (state, list) {
        state.blogPosts = list
    },
    setHome (state, home) {
        state.home = home
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

        console.log('files', files.keys())
        console.log('homeFile', home)

        const blogPosts = files.keys().map((key) => {
            const res = files(key)

            console.log('files(key)', files(key))

            res.slug = key.slice(2, -5)
            return res
        })

        console.log('blogPosts', blogPosts)

        await commit('setBlogPosts', blogPosts)
        await commit('setHome', home)
    }
}
