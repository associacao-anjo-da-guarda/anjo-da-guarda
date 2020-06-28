<template>

    <main class="o-main">

        <o-section-featured-image gradiente />

        <o-section class="o-section-intro">
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
                            {{ pagina.title }}
                        </a-title>

                    </o-wrapper>
                </o-section>

                <o-section>

                    <o-wrapper
                        v-if="pagina.items[0]"
                        row-gap-normal
                        centered-content
                        class="o-section-intro-body__wrapper"
                    >

                        <m-card
                            v-for="(item, index) in pagina.items"
                            :key="index"
                            :card-data="cardData(item)"
                            logo-card
                        />

                    </o-wrapper>

                    <o-wrapper
                        v-else
                        row-gap-normal
                        centered-content
                    >

                        <a-text large>
                            Oops, não existe nada aqui!
                        </a-text>
                    </o-wrapper>

                </o-section>

                <o-section>
                    <o-wrapper
                        centered-content
                        row-gap-normal
                    >

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

export default {

    components: {
        MCard: () => import('@/components/molecules/MCard'),
        OSectionFeaturedImage: () => import('@/components/organisms/OSectionFeaturedImage')
    },

    props: {
        pagina: {
            type: Object,
            required: true
        }
    },

    methods: {

        cardData (item) {
            return {
                image: item.node.logo,
                title: this.$prismic.asText(item.node.name),
                text: this.$prismic.asText(item.node.description),
                link: ''
            }
        }

    }

    // async asyncData (context) {
    //     try {
    //         const { data: { allCases: { edges } } } = await apollo.query({
    //             query: allCasesQuery,
    //             fetchPolicy: 'no-cache'
    //         })

    //         if (edges[0]) {
    //             return {
    //                 pagina.items: edges /** Array */
    //             }
    //         }
    //     } catch (e) {
    //         console.log('Erro ao consultar dados', e)
    //     }
    // }

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
