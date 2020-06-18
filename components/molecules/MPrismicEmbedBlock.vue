<template>

    <div
        class="m-prismic-embed-block"
        v-html="componentData.embed.html"
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
