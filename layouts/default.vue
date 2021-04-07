<template>

    <div class="container">

        <o-navbar />

        <nuxt />

        <o-footer-main />

    </div>

</template>

<script>
import ONavbar from '@/components/organisms/ONavbar'
import OFooterMain from '@/components/organisms/OFooterMain'

export default {

    name: 'Default',

    components: {
        ONavbar,
        OFooterMain
    }
}
</script>
