<template>

    <div class="container">

        <o-navbar />

        <nuxt />

        <footer class="o-main-footer">
            <OCookieConsentBanner />
        </footer>

    </div>

</template>

<script>
import ONavbar from '@/components/organisms/ONavbar'
import OCookieConsentBanner from '@/components/organisms/OCookieConsentBanner.vue'

export default {

    name: 'Default',

    components: {
        ONavbar,
        OCookieConsentBanner
    }
}
</script>

<style>
.o-main-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.95);
}
</style>
