<template>

    <o-section :class="{'o-section-featured-image--gradiente': gradiente}">

        <o-wrapper
            v-if="featuredImage"
            :boxed="boxed"
            :class="{'o-section-featured-image-wrapper--boxed': boxed}"
        >

            <a-image
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
        },

        boxed: {
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

.o-section-featured-image-wrapper--boxed {
    padding-top: 64px;
}
@media screen and (min-width: 1200px) {
    .o-section-featured-image-wrapper--boxed {
        padding-top: 84px;
    }
}
@media screen and (min-width: 1350px) {
    .o-section-featured-image-wrapper--boxed {
        padding-top: calc(84px + var(--padding-section));
    }
}

.a-image.a-image--bg {
    width: 100%;
    height: 56.25vw;
}
@media screen and (min-width: 1350px) {
    .a-image.a-image--bg {
        width: 100%;
        height: 760px;
        border-radius: 20px;
    }
}
</style>
