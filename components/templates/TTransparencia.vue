<template>

    <main class="o-main">

        <o-section-featured-image :featured-image="pagina.featured_image" />

        <o-section class="o-section-intro">
            <o-wrapper
                centered-content
                row-gap-large
                class="o-section-intro__wrapper"
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

.o-section-intro >>> .o-section-content-body__wrapper {
    max-width: none;
    padding: 0 var(--space);
    grid-template-columns: repeat(auto-fit, minmax(272px, auto));
    gap: var(--space);
}
@media screen and (min-width: 600px) {
    .o-section-intro >>> .o-section-content-body__wrapper {
        grid-template-columns: repeat(auto-fit, minmax(368px, auto));
    }
}
</style>
