<template>

    <a-image
        class="m-prismic-image-block"
        :src="componentData.image.url"
        :alt="componentData.image.alt"
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
