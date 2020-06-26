<template>

    <main class="o-main">

        <component
            :is="getComponent"
            :pagina="pagina"
        />

    </main>

</template>

<script>
import { apollo } from '@/prismicConfig'
import query from '@/gql/allCases.gql'

export default {

    components: {
        TRepeteableContentHome: () => import('@/components/templates/TRepeteableContentHome')
    },

    async asyncData (context) {
        try {
            const { data: { allCases: { edges } } } = await apollo.query({
                query,
                fetchPolicy: 'no-cache'
            })

            if (edges[0]) {
                return {
                    pagina: {
                        title: 'Cases',
                        items: edges /** Array */
                    }
                }
            }
        } catch (e) {
            console.log('Erro ao consultar dados', e)
        }
    },

    computed: {
        getComponent () {
            return 'TRepeteableContentHome'
        }
    }

}
</script>
