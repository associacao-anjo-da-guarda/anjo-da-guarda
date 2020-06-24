<template>

    <a-image
        class="m-prismic-image-block"
        :src="componentData.primary.image.url"
        :alt="componentData.primary.image.alt"
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
