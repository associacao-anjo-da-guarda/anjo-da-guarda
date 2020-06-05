<template>

    <main class="o-main">

        <o-section class="section-featured-image">
            <o-wrapper>
                <!-- <a-image
                    width="100%"
                    height="50vh"
                    is-bg
                    src="image-crianca-superman-lg.jpg"
                    class="section-featured-image__image"
                /> -->
            </o-wrapper>
        </o-section>

        <o-section class="o-section-intro">
            <o-wrapper
                padding-section
                centered-content
                row-gap-large
                boxed
                class="o-section-intro__wrapper"
            >

                <o-section>
                    <o-wrapper>

                        <a-title
                            tag="h1"
                            level1
                        >
                            Deposite sua doação
                        </a-title>

                    </o-wrapper>
                </o-section>

                <o-section>
                    <o-wrapper
                        row-gap-normal
                        centered-content
                        class="o-section-intro__body"
                    >

                        <!-- <a-text v-html="$md.render(about.body)" /> -->
                        <a-title
                            tag="h4"
                            level4
                        >
                            Dados para depósito
                        </a-title>

                        <a-text>
                            Banco: Santander
                        </a-text>

                        <a-text>
                            Associação Anjo da Guarda
                        </a-text>

                        <a-text>
                            CNPJ: 00.734.532/0001-52
                        </a-text>

                        <a-text>
                            Agência: 0715
                        </a-text>

                        <a-text>
                            Conta: 13001577-7
                        </a-text>

                    </o-wrapper>
                </o-section>

                <o-section>
                    <o-wrapper
                        centered-content
                        row-gap-normal
                    >

                        <!-- <a-button
                            outlined
                            large
                            to="/transparencia"
                        >
                            {{ about.button1Text }}
                        </a-button>

                        <a-button
                            outlined
                            large
                            to="/contato"
                        >
                            {{ about.button2Text }}
                        </a-button> -->

                        <!-- <a-button
                            secondary
                            large
                            to="/seja-nosso-heroi"
                        >
                            {{ about.buttonCtaText }}
                        </a-button> -->

                    </o-wrapper>
                </o-section>

            </o-wrapper>
        </o-section>

        <o-section class="section-illustration">
            <o-wrapper>
                <a-image
                    width="383px"
                    height="auto"
                    margin="0"
                    src="menina-cacheada.svg"
                />
            </o-wrapper>
        </o-section>

    </main>

</template>

<script>

export default {

    computed: {
        about () {
            return this.$store.state.about
        }
    },

    head () {
        return {
            script: [
                { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
            ]
        }
    }

}
</script>

<style scoped>
@media screen and (min-width: 1200px) {
    .o-section-cases-body__wrapper {
        grid-template-columns: repeat(auto-fit, minmax(19rem, auto));
        justify-content: center;
        column-gap: calc(var(--space-grid) * 3);
    }
}

@media screen and (min-width: 1200px) {
    .section-illustration {
        position: fixed;
        bottom: 0;
        z-index: -1000;
    }
}

.o-section-intro__body {
    max-width: 43.75rem;
}

.section-featured-image {
    width: 100%;
    height: 50vh;
    background: radial-gradient(
            100% 316.05% at 100% 0%,
            rgba(240, 119, 171, 0.91) 0%,
            rgba(255, 206, 0, 0.25) 100%
        ),
        url("~assets/image-crianca-superman-lg.jpg") no-repeat center, #d4113f;
    background-size: cover;
}
</style>
