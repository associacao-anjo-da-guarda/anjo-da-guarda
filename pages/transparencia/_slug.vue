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
import transparenciaQuery from '@/gql/transparencia.gql'

export default {

    components: {
        TTransparencia: () => import('@/components/templates/TTransparencia')
    },

    async asyncData ({ params, error }) {
        const uid = params.slug

        try {
            const { data: { transparencia: pagina } } = await apollo.query({
                query: transparenciaQuery,
                variables: {
                    uid,
                    lang: 'pt-br'
                },
                fetchPolicy: 'no-cache'
            })

            if (pagina) {
                return {
                    pagina /** single object */
                }
            }

            error({ statusCode: '404', message: 'Página não encontrada' })
        } catch (e) {
            console.log('Erro ao consultar dados da pagina', e)
        }
    },

    computed: {
        getComponent () {
            return 'TTransparencia'
        }
    }

}
</script>
