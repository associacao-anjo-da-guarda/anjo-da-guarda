<template>

    <o-section class="o-section-about">
        <o-wrapper
            padding-section
            centered-content
            row-gap-normal
            boxed
        >

            <a-title
                tag="h2"
                level2
                v-html="$prismic.asText(sectionData.title)"
            />

            <a-text v-html="$prismic.asHtml(sectionData.text)" />

            <a-button
                primary
                large
                to="/quem-somos"
            >
                {{ $prismic.asText(sectionData.button_text) }}
            </a-button>

        </o-wrapper>
    </o-section>

</template>

<script>
export default {

    name: 'OSectionAbout',

    props: {
        sectionData: {
            type: Object,
            required: true
        }
    }

}
</script>

<style scoped>
.o-section-about {
    background-color: #f3f9d2;
}
</style>
