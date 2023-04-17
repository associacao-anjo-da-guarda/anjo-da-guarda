<template>

    <div class="container">

        <o-navbar />

        <nuxt />

        <o-footer-main />

        <div class="o-cookie-banner">
            <client-only placeholder="Carregando...">
                <OCookieConsentBanner />
            </client-only>
        </div>

    </div>

</template>

<script>
import ONavbar from '@/components/organisms/ONavbar'
import OCookieConsentBanner from '@/components/organisms/OCookieConsentBanner.vue'
import OFooterMain from '@/components/organisms/OFooterMain'

export default {

    name: 'Default',

    components: {
        ONavbar,
        OFooterMain,
        OCookieConsentBanner

    }
}
</script>

<style>
.o-cookie-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.95);
}
</style>
