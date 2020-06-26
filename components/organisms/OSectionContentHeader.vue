<template>

    <o-section class="o-section-content__header">
        <o-wrapper
            row-gap-normal
            class="o-section-content-header__wrapper"
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
                large
                class="a-page-description"
                v-html="$prismic.asText(pagina.description)"
            />

        </o-wrapper>
    </o-section>

</template>

<script>
export default {

    name: 'OSectionContentHeader',

    props: {
        pagina: {
            type: Object,
            required: true
        }
    }

}
</script>

<style scoped>
.o-section-content-header__wrapper {
    max-width: calc((var(--padding-section) * 2) + 43.75rem);
    padding: var(--padding-section);
    padding-bottom: 0;
}

.a-text.a-page-description {
    color: var(--color-on-surface-hi);
}
</style>
