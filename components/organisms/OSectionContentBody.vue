<template>

    <o-section class="o-section-content__body">

        <o-wrapper
            row-gap-normal
            class="o-section-content-body__wrapper"
        >

            <component
                :is="getComponent(component.type)"
                v-for="(component, index) in pagina.body"
                :key="index"
                :component-data="{ primary: component.primary, fields: component.fields }"
            />

        </o-wrapper>

        <o-wrapper
            v-if="mediaGallery"
            class="o-section-content-body__gallery-wrapper"
        >

            <m-prismic-media-gallery-block :component-data="{primary: mediaGallery.primary, fields: mediaGallery.fields}" />

        </o-wrapper>

    </o-section>

</template>

<script>
export default {

    name: 'OSectionContentBody',

    components: {
        MPrismicTextBlock: () => import('@/components/molecules/MPrismicTextBlock'),
        MPrismicImageBlock: () => import('@/components/molecules/MPrismicImageBlock'),
        MPrismicEmbedBlock: () => import('@/components/molecules/MPrismicEmbedBlock'),
        MPrismicMediaGalleryBlock: () => import('@/components/molecules/MPrismicMediaGalleryBlock'),
        MPrismicReportSectionBlock: () => import('@/components/molecules/MPrismicReportSectionBlock')
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
            console.log('componentType = ', componentType)
            if (componentType === 'text') {
                return 'MPrismicTextBlock'
            } else if (componentType === 'image') {
                return 'MPrismicImageBlock'
            } else if (componentType === 'embed') {
                return 'MPrismicEmbedBlock'
            } else if (componentType === 'report_section') {
                return 'MPrismicReportSectionBlock'
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
.o-section-content-body__wrapper {
    max-width: calc((var(--padding-section) * 2) + 43.75rem);
    padding: 0 var(--padding-section);
}
.o-section-content-body__gallery-wrapper {
    padding: var(--space) 0;
}
</style>
