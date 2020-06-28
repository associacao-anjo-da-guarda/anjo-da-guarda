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
import query from '@/gql/allParceiros.gql'

export default {

    components: {
        TParceirosHome: () => import('@/components/templates/TParceirosHome')
    },

    async asyncData (context) {
        try {
            const { data: { allParceiros: { edges } } } = await apollo.query({
                query,
                fetchPolicy: 'no-cache'
            })

            if (edges[0]) {
                return {
                    pagina: {
                        title: 'Parceiros',
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
            return 'TParceirosHome'
        }
    }

}
</script>
