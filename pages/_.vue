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
import paginaSimplesQuery from '@/gql/paginaSimples.gql'
import TPaginaSimples from '@/components/templates/TPaginaSimples'

export default {

    components: {
        TPaginaSimples
    },

    async asyncData ({ route, error }) {
        let uid = route.path

        // remove the '/' char
        uid = uid.slice(1)

        try {
            const { data: { pagina_simples: pagina } } = await apollo.query({
                query: paginaSimplesQuery,
                variables: {
                    uid,
                    lang: 'pt-br'
                },
                fetchPolicy: 'no-cache'
            })

            if (pagina) {
                return {
                    pagina
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
