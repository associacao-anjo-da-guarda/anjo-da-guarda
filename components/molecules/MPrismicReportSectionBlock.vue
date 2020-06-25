<template>

    <o-section class="m-prismic-report-section-block">

        <o-wrapper class="m-prismic-report-section-block__wrapper">

            <section class="m-prismic-report-section-block__header">

                <a-title
                    tag="h2"
                    level4
                    left
                    class="a-prismic-report-section-block__title"
                    v-html="$prismic.asText(componentData.primary.report_section_title)"
                />

            </section>

            <o-section class="m-prismic-report-section-block__body">
                <o-wrapper
                    row-gap-normal
                    class="m-prismic-report-section-block-body__wrapper"
                >

                    <a-text
                        v-if="$prismic.asText(componentData.primary.report_section_text)"
                        caption
                        left
                        v-html="$prismic.asHtml(componentData.primary.report_section_text)"
                    />

                    <div>

                        <a-text
                            v-for="(field, index) in componentData.fields"
                            :key="index"
                            caption
                            left
                            class="a-section-item"
                        >
                            <a
                                :href="field.report_section_item_link ? field.report_section_item_link.url : ''"
                                target="_blank"
                                rel="nooppener nofolow"
                            >
                                <img
                                    src="@/assets/icon-pdf.svg"
                                    alt="Baixar PDF"
                                >
                            </a>
                            {{ $prismic.asText(field.report_section_item) || field.report_section_item_link.name }}
                        </a-text>

                    </div>

                </o-wrapper>

            </o-section>

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
.a-prismic-report-section-block__title {
    font-size: 20px;
}
.m-prismic-report-section-block__wrapper {
    /* grid-template-columns: repeat(auto-fit, minmax(50%, auto)); */
    /* padding: calc(var(--space)); */
    background-color: hsla(198, 80%, 63%, 0.1);
    border-radius: 10px;
}

.m-prismic-report-section-block__header {
    border-radius: 10px 10px;
    background-color: hsla(198, 80%, 63%, 0.2);
    padding: 16px;
    /* border-bottom: 1px solid hsla(198, 0%, 0%, 0.05); */
    align-self: start;
}
.m-prismic-report-section-block-body__wrapper {
    padding: 16px;
}

.a-section-item {
    display: grid;
    grid-template-columns: 24px auto;
    border-bottom: 1px solid hsla(198, 80%, 63%, 0.3);
    gap: 8px;
    padding: 8px 0;
}
</style>
