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

<style scoped>
@media screen and (min-width: 1200px) {
    .o-section-cases-body__wrapper {
        grid-template-columns: repeat(auto-fit, minmax(19rem, auto));
        justify-content: center;
        column-gap: calc(var(--space-grid) * 3);
    }
}

@media screen and (min-width: 1200px) {
    .section-illustration {
        position: fixed;
        bottom: 0;
        z-index: -1000;
    }
}

.o-section-intro__body {
    max-width: 43.75rem;
}
</style>
