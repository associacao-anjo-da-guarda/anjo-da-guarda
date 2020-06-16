<template>

    <main class="o-main">

        <component
            :is="getComponent(section.type)"
            v-for="(section, index) in body"
            :key="index"
            :section-data="section.primary"
        />

    </main>

</template>

<script>
import { apollo } from '@/prismicConfig'
import allHomesQuery from '@/gql/allHomes.gql'
import OSectionIntro from '~/components/organisms/OSectionIntro.vue'
import OSectionCases from '~/components/organisms/OSectionCases.vue'
import OSectionAbout from '~/components/organisms/OSectionAbout.vue'
import OSectionWaiting from '~/components/organisms/OSectionWaiting.vue'

export default {

    components: {
        OSectionIntro,
        OSectionCases,
        OSectionAbout,
        OSectionWaiting
    },

    async asyncData (context) {
        try {
            const { data: { allHomes: { edges } } } = await apollo.query({
                query: allHomesQuery,
                fetchPolicy: 'no-cache'
            })

            if (edges[0]) {
                return {
                    meta: edges[0].node._meta,
                    body: edges[0].node.body /** Array */
                }
            }
        } catch (e) {
            console.log('Erro ao consultar dados da home', e)
        }
    },

    methods: {

        getComponent (type) {
            if (type === 'section_intro') {
                return 'OSectionIntro'
            } else if (type === 'section_cases') {
                return 'OSectionCases'
            } else if (type === 'section_about') {
                return 'OSectionAbout'
            } else if (type === 'section_waiting') {
                return 'OSectionWaiting'
            }
        }

    }

}
</script>
