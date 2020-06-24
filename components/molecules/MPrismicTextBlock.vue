<template>

    <o-section class="m-prismic-text-block">
        <o-wrapper
            class="m-prismic-text-block__wrapper"
            row-gap-normal
            v-html="$prismic.asHtml(componentData.primary.text)"
        />
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
.m-prismic-text-block__wrapper >>> p {
    color: var(--color-on-surface-medium);
    text-align: left;
    font-size: var(--text);
    line-height: 1.4;
    word-break: break-word;
}
</style>
