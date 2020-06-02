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

        <o-section class="o-section-about">
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
                            Quem somos
                        </a-title>

                    </o-wrapper>
                </o-section>

                <o-section class="o-section-about__body">
                    <o-wrapper
                        centered-content
                        row-gap-normal
                        class="o-section-about-body__wrapper"
                    >

                        <a-text>
                            Somos a Associação <strong>Anjo da Guarda</strong>, uma entidade não governamental e sem fins lucrativos, que ajuda crianças e adolescentes em situação de vulnerabilidade social, na região de São José do Rio Preto.
                        </a-text>

                        <a-text>
                            Promovemos atividades e oficinas de recreação nas áreas de artes, cultura, esporte e lazer, além de fornecer assistência psicológica, social e alimentação para crianças e adolescentes de 6 a 14 anos.
                        </a-text>

                    </o-wrapper>
                </o-section>

                <o-section>
                    <o-wrapper
                        centered-content
                        row-gap-normal
                    >

                        <a-button
                            primary
                            large
                        >
                            Nossa história!
                        </a-button>

                    </o-wrapper>
                </o-section>

            </o-wrapper>
        </o-section>

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

.o-section-about {
    background-color: var(--color-secondary);
}
</style>
