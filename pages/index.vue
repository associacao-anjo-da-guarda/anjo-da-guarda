<template>

    <main class="o-main">

        <section class="section intro">
            <div class="wrapper intro__wrapper">
                <!-- atomic design -->
                <!-- BEM -->

            </div>
        </section>

        <o-section class="o-section-cases">
            <o-wrapper
                padding-section
                centered-content
                row-gap-large
                boxed
            >

                <o-section>
                    <o-wrapper
                        centered-content
                        row-gap-normal
                    >

                        <a-title
                            tag="h2"
                            level2
                        >
                            Sua ajuda faz a diferença
                        </a-title>

                        <a-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh quam a habitasse et
                        </a-text>

                    </o-wrapper>
                </o-section>

                <o-section class="o-section-cases__body">
                    <o-wrapper
                        centered-content
                        row-gap-normal
                        class="o-section-cases-body__wrapper"
                    >

                        <m-card
                            image="image-crianca-brincando-de-superman.jpg"
                            title="Sua ajuda faz a diferença"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        />
                        <m-card
                            image="image-crianca-brincando-de-superman.jpg"
                            title="Sua ajuda faz a diferença"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        />
                        <m-card
                            image="image-crianca-brincando-de-superman.jpg"
                            title="Sua ajuda faz a diferença"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        />

                    </o-wrapper>
                </o-section>

                <o-section>
                    <o-wrapper
                        centered-content
                        row-gap-normal
                    >

                        <a-button
                            secondary
                            large
                        >
                            Doe agora!
                        </a-button>

                    </o-wrapper>
                </o-section>

            </o-wrapper>
        </o-section>

        <section class="section who">
            <div class="wrapper who__wrapper">
                <!-- atomic design -->
                <!-- BEM -->

            </div>
        </section>

    </main>

</template>

<script>
import MCard from '@/components/molecules/MCard'

export default {

    components: {
        MCard
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
.o-main {
    margin-top: 65px;
}
@media screen and (min-width: 1200px) {
    .o-main {
        margin-top: 81px;
    }
}

@media screen and (min-width: 1200px) {
    .o-section-cases-body__wrapper {
        grid-template-columns: repeat(auto-fill, minmax(19rem, auto));
        justify-content: center;
        column-gap: calc(var(--space-grid) * 3);
    }
}
</style>
