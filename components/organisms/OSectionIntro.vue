<template>

    <o-section class="o-section-intro">
        <o-wrapper
            padding-section
            centered-content
            row-gap-normal
            boxed
            class="o-section-intro__wrapper"
        >

            <a-title
                tag="h1"
                level1
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

    name: 'OSectionIntro',

    props: {
        sectionData: {
            type: Object,
            required: true
        }
    }

}
</script>

<style scoped>
.o-section-intro {
    color: var(--color-on-primary-hi);
    background: radial-gradient(
            100% 100% at 50% 0%,
            rgba(237, 0, 79, 0) 0%,
            #ed004f 72.4%
        ),
        url("~assets/girl-holding-dandelion-flower.jpg") no-repeat center;
    background-size: cover;
    /* background-position: 50% -100px; */
}

.o-section-intro__wrapper {
    height: 100vh;
    align-content: end;
}
</style>
