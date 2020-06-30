<template>

    <main class="o-main">

        <o-section-featured-image
            boxed
            :featured-image="pagina.featured_image"
        />

        <o-section class="o-section-content">
            <o-wrapper
                centered-content
                row-gap-large
                class="o-section-content__wrapper"
            >

                <o-section-content-header :pagina="pagina" />

                <o-section-content-body :pagina="pagina" />

                <o-section-content-footer :pagina="pagina" />

            </o-wrapper>
        </o-section>

        <!-- <o-section class="section-illustration">
            <o-wrapper>
                <a-image
                    width="383px"
                    height="auto"
                    margin="0"
                    src="menina-cacheada.svg"
                />
            </o-wrapper>
        </o-section> -->

    </main>
</template>

<script>

export default {

    name: 'TPaginaSimples',

    components: {
        OSectionFeaturedImage: () => import('@/components/organisms/OSectionFeaturedImage'),
        OSectionContentHeader: () => import('@/components/organisms/OSectionContentHeader'),
        OSectionContentBody: () => import('@/components/organisms/OSectionContentBody'),
        OSectionContentFooter: () => import('@/components/organisms/OSectionContentFooter')
    },

    props: {
        pagina: {
            type: Object,
            required: true
        }
    }

}
</script>

<style scoped>
@media screen and (min-width: 1200px) {
    .section-illustration {
        position: fixed;
        bottom: 0;
        z-index: -1000;
    }
}
</style>
