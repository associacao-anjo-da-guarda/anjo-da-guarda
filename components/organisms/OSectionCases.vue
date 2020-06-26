<template>

    <o-section class="o-section-cases">
        <o-wrapper
            padding-section
            centered-content
            row-gap-large
            boxed
        >

            <o-section>
                <o-wrapper
                    centered-content
                    row-gap-normal
                >

                    <a-title
                        tag="h2"
                        level2
                        v-html="$prismic.asText(sectionData.title)"
                    />

                    <a-text v-html="$prismic.asHtml(sectionData.text)" />

                </o-wrapper>
            </o-section>

            <o-section
                v-if="sectionData.case1"
                class="o-section-cases__body"
            >
                <o-wrapper
                    centered-content
                    row-gap-normal
                    class="o-section-cases-body__wrapper"
                >

                    <m-card
                        :key="1"
                        :card-data="{
                            image: sectionData.case1.featured_image,
                            title: $prismic.asText(sectionData.case1.title),
                            text: $prismic.asText(sectionData.case1.description),
                            link: `/cases/${sectionData.case1._meta.uid}`
                        }"
                    />
                    <m-card
                        :key="2"
                        :card-data="{
                            image: sectionData.case2.featured_image,
                            title: $prismic.asText(sectionData.case2.title),
                            text: $prismic.asText(sectionData.case2.description),
                            link: `/cases/${sectionData.case2._meta.uid}`
                        }"
                    />
                    <m-card
                        :key="3"
                        :card-data="{
                            image: sectionData.case3.featured_image,
                            title: $prismic.asText(sectionData.case3.title),
                            text: $prismic.asText(sectionData.case3.description),
                            link: `/cases/${sectionData.case3._meta.uid}`
                        }"
                    />

                </o-wrapper>
            </o-section>

            <o-section>
                <o-wrapper
                    centered-content
                    row-gap-normal
                >

                    <a-button
                        large
                        to="/seja-nosso-heroi"
                    >
                        {{ $prismic.asText(sectionData.button_text) }}
                    </a-button>

                </o-wrapper>
            </o-section>

        </o-wrapper>
    </o-section>

</template>

<script>
import MCard from '@/components/molecules/MCard'

export default {

    name: 'OSectionCases',

    components: {
        MCard
    },

    props: {
        sectionData: {
            type: Object,
            required: true
        }
    }

}
</script>

<style scoped>
@media screen and (min-width: 1200px) {
    .o-section-cases-body__wrapper {
        grid-template-columns: repeat(auto-fit, minmax(19rem, auto));
        justify-content: center;
        column-gap: calc(var(--space-grid) * 3);
    }
}
</style>
