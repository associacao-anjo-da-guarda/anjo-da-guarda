<template>

    <div
        class="m-prismic-embed-block"
        v-html="componentData.primary.embed.html"
    />

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
