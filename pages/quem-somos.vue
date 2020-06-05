<template>

    <main class="o-main">

        <o-section>
            <o-wrapper>
                <a-image
                    width="100%"
                    height="50vh"
                    is-bg
                    :src="about.image"
                />
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
                            {{ about.title }}
                        </a-title>

                    </o-wrapper>
                </o-section>

                <o-section>
                    <o-wrapper>

                        <a-text color="--color-on-primary-hi">
                            {{ about.body }}
                        </a-text>

                    </o-wrapper>
                </o-section>

                <o-section>
                    <o-wrapper
                        centered-content
                        row-gap-normal
                    >

                        <a-button
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
                        </a-button>

                        <a-button
                            secondary
                            large
                        >
                            {{ about.buttonCtaText }}
                        </a-button>

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
        grid-template-columns: repeat(auto-fill, minmax(19rem, auto));
        justify-content: center;
        column-gap: calc(var(--space-grid) * 3);
    }
}

@media screen and (min-width: 1200px) {
    .section-illustration {
        position: fixed;
        bottom: 0;
    }
}
</style>
