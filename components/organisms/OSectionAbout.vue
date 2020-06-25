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

            <div
                v-if="sectionData.video"
                class="a-embed"
                v-html="sectionData.video.html"
            />

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

.a-embed {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
    border-radius: 10px;
}
@media screen and (min-width: 600px) {
    .a-embed {
        width: 480px;
        max-width: 480px;
        overflow: unset;
        padding-bottom: 0;
        position: unset;
        height: 270px;
    }
}

.a-embed >>> iframe,
.a-embed >>> object,
.a-embed >>> embed {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
}

@media screen and (min-width: 600px) {
    .a-embed >>> iframe,
    .a-embed >>> object,
    .a-embed >>> embed {
        left: unset;
        top: unset;
        width: 480px;
        height: 270px;
        position: unset;
    }
}
</style>
