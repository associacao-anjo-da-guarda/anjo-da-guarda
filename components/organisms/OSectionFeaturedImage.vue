<template>

    <o-section>

        <o-wrapper v-if="featuredImage">

            <a-image
                width="100%"
                height="50vh"
                is-bg
                :src="featuredImage.url"
            />

        </o-wrapper>

        <o-wrapper
            v-else
            padding-section
        />

    </o-section>

</template>

<script>
export default {

    name: 'OSectionFeaturedImage',

    props: {

        featuredImage: {
            type: Object,
            default: () => { }
        }
    }

}
</script>
