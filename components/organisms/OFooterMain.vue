<template>

    <footer class="o-footer-main">

        <o-section>
            <o-wrapper
                centered-content
                padding-section
                boxed
                row-gap-normal
            >

                <img
                    class="o-footer-main__logo-image o-footer-main__logo-image--small"
                    src="@/assets/logo-small.svg"
                    alt="Associação Anjo da Guarda"
                    @click="goToHome"
                >

                <img
                    class="o-footer-main__logo-image o-footer-main__logo-image--large"
                    src="@/assets/logo-large.svg"
                    alt="Associação Anjo da Guarda"
                    @click="goToHome"
                >

                <a-text caption>
                    CNPJ: 00.734.532/0001-52
                </a-text>

            </o-wrapper>
        </o-section>

    </footer>

</template>

<script>
export default {

    name: 'OFooterMain',

    methods: {
        goToHome () {
            if (this.$route.path === '/') {
                window.scrollTo(0, 0)
            } else {
                this.$router.push('/')
            }
        }
    }

}
</script>

<style scoped>
.o-footer-main__logo-image {
    display: block;
    cursor: pointer;
}
.o-footer-main__logo-image--small {
    height: 32px;
}
@media screen and (min-width: 1200px) {
    .o-footer-main__logo-image--small {
        display: none;
    }
}

.o-footer-main__logo-image--large {
    display: none;
}
@media screen and (min-width: 1200px) {
    .o-footer-main__logo-image--large {
        display: block;
        height: 48px;
    }
}
</style>
