<template>

    <main class="o-main">

        <o-section v-if="pagina.featured_image">
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
                centered-content
                row-gap-large
                class="o-section-intro__wrapper"
            >

                <o-section class="o-section-intro__header">
                    <o-wrapper
                        row-gap-normal
                        class="o-section-intro-header__wrapper"
                    >

                        <a-title
                            tag="h1"
                            level1
                            left
                            v-html="$prismic.asText(pagina.title)"
                        />

                        <a-text
                            v-show="pagina.description"
                            left
                            v-html="$prismic.asText(pagina.description)"
                        />

                    </o-wrapper>
                </o-section>

                <o-section class="o-section-intro__body">
                    <o-wrapper
                        row-gap-normal
                        class="o-section-intro-body__wrapper"
                    >

                        <component
                            :is="getComponent(component.type)"
                            v-for="(component, index) in pagina.body"
                            :key="index"
                            :component-data="{ primary: component.primary, fields: component.fields }"
                        />

                    </o-wrapper>

                    <!-- <o-section v-if="mediaGallery"> -->
                    <o-wrapper
                        v-if="mediaGallery"
                        class="o-section-intro-body__gallery-wrapper"
                    >

                        <m-prismic-media-gallery-block :component-data="{primary: mediaGallery.primary, fields: mediaGallery.fields}" />

                    </o-wrapper>
                    <!-- </o-section> -->

                </o-section>

                <o-section class="o-section-intro__footer">
                    <o-wrapper
                        centered-content
                        row-gap-normal
                        class="o-section-intro-footer__wrapper"
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

        <!-- <o-section class="section-illustration">
            <o-wrapper>
                <a-image
                    width="383px"
                    height="auto"
                    margin="0"
                    src="menina-cacheada.svg"
                />
            </o-wrapper>
        </o-section> -->

    </main>
</template>

<script>

export default {

    name: 'TPaginaSimples',

    components: {
        MPrismicTextBlock: () => import('@/components/molecules/MPrismicTextBlock'),
        MPrismicImageBlock: () => import('@/components/molecules/MPrismicImageBlock'),
        MPrismicEmbedBlock: () => import('@/components/molecules/MPrismicEmbedBlock'),
        MPrismicMediaGalleryBlock: () => import('@/components/molecules/MPrismicMediaGalleryBlock')
    },

    props: {
        pagina: {
            type: Object,
            required: true
        }
    },

    computed: {
        mediaGallery () {
            if (!this.pagina.body) {
                return
            }
            return this.pagina.body.filter((component) => {
                return component.type === 'image_gallery'
            })[0]
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
            } else if (componentType === 'image_gallery') {
                return null
            } else {
                return 'div'
            }
        }
    }

}
</script>

<style scoped>
@media screen and (min-width: 1200px) {
    .section-illustration {
        position: fixed;
        bottom: 0;
        z-index: -1000;
    }
}

.o-section-intro-header__wrapper {
    max-width: calc((var(--padding-section) * 2) + 43.75rem);
    padding: var(--padding-section);
    padding-bottom: 0;
}

.o-section-intro-body__wrapper {
    max-width: calc((var(--padding-section) * 2) + 43.75rem);
    padding: 0 var(--padding-section);
}
</style>
