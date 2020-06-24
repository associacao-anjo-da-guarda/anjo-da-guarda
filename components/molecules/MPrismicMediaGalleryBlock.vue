<template>

    <o-section class="m-prismic-media-gallery-block">

        <o-wrapper
            centered-content
            class="m-prismic-media-gallery-block__wrapper"
        >

            <a-image
                v-for="(field, index) in componentData.fields"
                :key="index"
                :src="field.gallery_image.url"
                is-bg
                width="100%"
                height="12.5rem"
            />

        </o-wrapper>

    </o-section>

</template>

<script>
export default {

    props: {
        componentData: {
            type: Object,
            required: true
        }
    }

}
</script>

<style scoped>
.m-prismic-media-gallery-block__wrapper {
    gap: calc(var(--space-grid) * 0.5);
    grid-template-columns: repeat(auto-fit, minmax(19rem, auto));
    justify-content: center;
}
</style>
