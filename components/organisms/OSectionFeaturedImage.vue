<template>

    <o-section :class="{'o-section-featured-image--gradiente': gradiente}">

        <o-wrapper v-if="featuredImage">

            <a-image
                width="100%"
                height="60vh"
                is-bg
                :src="featuredImage.url"
            />

        </o-wrapper>

        <o-wrapper
            v-else
            class="o-section-featured-image-wrapper--no-image"
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
        },

        gradiente: {
            type: Boolean
        }
    }

}
</script>

<style scoped>
.o-section-featured-image--gradiente {
    width: 100%;
    height: 60vh;
    background: radial-gradient(
            100% 316.05% at 100% 0%,
            rgba(240, 119, 171, 0.91) 0%,
            rgba(255, 206, 0, 0.25) 100%
        ),
        url("~assets/image-crianca-superman-lg.jpg") no-repeat center, #d4113f;
    background-size: cover;
}
.o-section-featured-image-wrapper--no-image {
    padding-top: var(--padding-section);
}
</style>
