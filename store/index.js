export const state = () => ({
    blogPosts: [],
    home: []
})

export const mutations = {
    setBlogPosts (state, list) {
        state.blogPosts = list
    }
}

export const actions = {
    async nuxtServerInit ({ commit }) {
        const files = await require.context(
            '~/assets/content/blog/',
            false,
            /\.json$/
        )

        // const homeFile = await import('~/assets/content/home.json')

        // console.log('files', files.keys())
        // console.log('files', files.keys())

        const blogPosts = files.keys().map((key) => {
            const res = files(key)

            // console.log('files(key)', files(key))

            res.slug = key.slice(2, -5)
            return res
        })

        // console.log('blogPosts', blogPosts)

        await commit('setBlogPosts', blogPosts)
    }
}
