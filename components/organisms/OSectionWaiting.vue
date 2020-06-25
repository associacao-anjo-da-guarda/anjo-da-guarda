<template>

    <o-section class="o-section-waiting">
        <o-wrapper
            padding-section
            centered-content
            row-gap-normal
            boxed
            class="o-section-waiting__wrapper"
        >

            <a-title
                tag="h2"
                level2
                v-html="$prismic.asText(sectionData.title)"
            />

            <a-text
                color="--color-on-primary-hi"
                v-html="$prismic.asHtml(sectionData.text)"
            />

            <a-button
                secondary
                large
                to="/seja-nosso-heroi"
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
.o-section-waiting {
    color: var(--color-on-primary-hi);
    background: radial-gradient(
            100% 100% at 50% 0%,
            rgba(237, 0, 79, 0) 0%,
            #ed004f 72.4%
        ),
        url("~assets/image-criancas-em-roda.jpg") no-repeat top center;
    background-size: cover;
}

.o-section-waiting__wrapper {
    height: calc(100vh - 65px);
    align-content: end;
}

@media screen and (min-width: 1200) {
    .o-section-waiting__wrapper {
        height: calc(100vh - 81px);
        align-content: end;
    }
}
</style>
