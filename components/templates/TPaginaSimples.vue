<template>

    <main class="o-main">

        <o-section>
            <o-wrapper>
                <a-image
                    width="100%"
                    height="50vh"
                    is-bg
                    :src="pagina.featured_image.url"
                />
            </o-wrapper>
        </o-section>

        <o-section class="o-section-intro">
            <o-wrapper
                padding-section
                centered-content
                row-gap-large
                boxed
                class="o-section-intro__wrapper"
            >

                <o-section>
                    <o-wrapper row-gap-normal>

                        <a-title
                            tag="h1"
                            level1
                            left
                            v-html="$prismic.asText(pagina.title)"
                        />

                        <a-text
                            v-show="pagina.description"
                            v-html="$prismic.asText(pagina.description)"
                        />

                    </o-wrapper>
                </o-section>

                <o-section>
                    <o-wrapper
                        row-gap-normal
                        class="o-section-intro__body"
                    >

                        <component
                            :is="getComponent(component.type)"
                            v-for="(component, index) in pagina.body"
                            :key="index"
                            :component-data="component.primary"
                        />

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
import MPrismicTextBlock from '@/components/molecules/MPrismicTextBlock'
import MPrismicImageBlock from '@/components/molecules/MPrismicImageBlock'
import MPrismicEmbedBlock from '@/components/molecules/MPrismicEmbedBlock'

export default {

    name: 'TpaginaSimples',

    components: {
        MPrismicTextBlock,
        MPrismicImageBlock,
        MPrismicEmbedBlock
    },

    props: {
        pagina: {
            type: Object,
            required: true
        }
    },

    methods: {
        getComponent (componentType) {
            if (componentType === 'text') {
                return 'MPrismicTextBlock'
            } else if (componentType === 'image') {
                return 'MPrismicImageBlock'
            } else if (componentType === 'embed') {
                return 'MPrismicEmbedBlock'
            } else {
                return 'div'
            }
            // return 'div'
        }
    }

}
</script>

<style>
</style>
