<template>

    <main class="o-main">

        <o-section class="section-featured-image">
            <o-wrapper>
                <!-- <a-image
                    width="100%"
                    height="50vh"
                    is-bg
                    src="image-crianca-superman-lg.jpg"
                    class="section-featured-image__image"
                /> -->
            </o-wrapper>
        </o-section>

        <o-section
            v-if="items[0]"
            class="o-section-intro"
        >
            <o-wrapper
                padding-section
                centered-content
                row-gap-large
                boxed
                class="o-section-intro__wrapper"
            >

                <o-section>
                    <o-wrapper>

                        <a-title
                            tag="h1"
                            level1
                        >
                            Eventos{{ items[0].node.category.category_name ? ` / ${items[0].node.category.category_name}` : '' }}
                        </a-title>

                    </o-wrapper>
                </o-section>

                <o-section>

                    <o-wrapper
                        v-if="items[0]"
                        row-gap-normal
                        centered-content
                        class="o-section-intro-body__wrapper"
                    >

                        <m-card
                            v-for="(item, index) in items"
                            :key="index"
                            :card-data="cardData(item)"
                        />

                    </o-wrapper>

                    <o-wrapper
                        v-else
                        row-gap-normal
                        centered-content
                    >

                        <a-text large>
                            Ainda não existem eventos cadastrados
                        </a-text>
                    </o-wrapper>

                </o-section>

                <o-section>
                    <o-wrapper
                        centered-content
                        row-gap-normal
                    >

                        <a-button
                            v-if="pageInfo.hasNextPage"
                            secondary
                            large
                            @click="showMore"
                        >
                            Ver mais
                        </a-button>

                        <!-- <a-button
                            outlined
                            large
                            to="/transparencia"
                        >
                            {{ about.button1Text }}
                        </a-button>

                        <a-button
                            outlined
                            large
                            to="/contato"
                        >
                            {{ about.button2Text }}
                        </a-button> -->

                        <!-- <a-button
                            secondary
                            large
                            to="/seja-nosso-heroi"
                        >
                            {{ about.buttonCtaText }}
                        </a-button> -->

                    </o-wrapper>
                </o-section>

            </o-wrapper>
        </o-section>

        <o-section class="section-illustration">
            <o-wrapper>
                <a-image
                    width="383px"
                    height="auto"
                    margin="0"
                    src="menina-cacheada.svg"
                />
            </o-wrapper>
        </o-section>

    </main>

</template>

<script>
import { apollo } from '@/prismicConfig'
import allEventosQuery from '@/gql/allEventos.gql'
import eventCategoryQuery from '@/gql/eventCategory.gql'
import MCard from '@/components/molecules/MCard'

export default {

    components: {
        MCard
    },

    async asyncData ({ params, redirect }) {
        try {
            const uid = params.slug

            const { data: { event_category: { _meta: { id: categoryId } } } } = await apollo.query({
                query: eventCategoryQuery,
                variables: {
                    uid,
                    lang: 'pt-br'
                },
                fetchPolicy: 'no-cache'
            })

            const { data: { allEventos: { edges, totalCount, pageInfo } } } = await apollo.query({
                query: allEventosQuery,
                variables: {
                    categoryId
                },
                fetchPolicy: 'no-cache'
            })

            if (edges[0]) {
                return {
                    items: edges, /** Array */
                    totalCount,
                    pageInfo,
                    categoryId
                }
            }
        } catch (e) {
            console.log('Erro ao consultar dados', e)
            return redirect('/eventos')
        }
    },

    methods: {

        cardData (item) {
            return {
                image: item.node.featured_image,
                title: this.$prismic.asText(item.node.title),
                text: this.$prismic.asText(item.node.description),
                link: `/eventos/${item.node._meta.uid}`,
                interval: this.$prismic.asText(item.node.interval)
            }
        },

        async showMore () {

            const { categoryId } = this
            const after = this.items[this.items.length - 1].cursor

            const { data: { allEventos: { edges, pageInfo } } } = await apollo.query({
                query: allEventosQuery,
                variables: {
                    categoryId,
                    after,
                    first: 20
                },
                fetchPolicy: 'no-cache'
            })

            if (!edges[0]) {
                return
            }

            this.items = [...this.items, ...edges]
            this.pageInfo = pageInfo

        }

    }

}
</script>

<style scoped>
.o-section-intro-body__wrapper {
    max-width: 43.75rem;
}
@media screen and (min-width: 1200px) {
    .o-section-intro-body__wrapper {
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

.section-featured-image {
    width: 100%;
    height: 50vh;
    background: radial-gradient(
            100% 316.05% at 100% 0%,
            rgba(240, 119, 171, 0.91) 0%,
            rgba(255, 206, 0, 0.25) 100%
        ),
        url("~assets/image-crianca-superman-lg.jpg") no-repeat center, #d4113f;
    background-size: cover;
}
</style>
