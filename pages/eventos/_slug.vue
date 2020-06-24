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
import eventoQuery from '@/gql/evento.gql'

export default {

    components: {
        TPaginaSimples: () => import('@/components/templates/TPaginaSimples')
    },

    async asyncData ({ params, error }) {
        const uid = params.slug

        try {
            const { data: { evento: pagina } } = await apollo.query({
                query: eventoQuery,
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
            return 'TPaginaSimples'
        }
    }

}
</script>
