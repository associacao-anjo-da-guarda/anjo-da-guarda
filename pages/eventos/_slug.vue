<template>

    <main class="o-main">

        <o-section class="o-section-intro">
            <o-wrapper
                padding-section
                centered-content
                row-gap-large
                class="o-section-intro__wrapper"
            >

                <o-section class="section-featured-image">
                    <o-wrapper boxed>
                        <a-image
                            width="100%"
                            height="50vh"
                            is-bg
                            :src="event.image"
                            class="section-featured-image__image"
                        />
                    </o-wrapper>
                </o-section>

                <o-section>
                    <o-wrapper boxed>

                        <a-title
                            tag="h1"
                            level1
                        >
                            {{ event.title }}
                        </a-title>

                    </o-wrapper>
                </o-section>

                <o-section v-if="event.body">

                    <o-wrapper
                        row-gap-normal
                        centered-content
                        boxed
                    >

                        <a-text v-html="$md.render(event.body)" />

                    </o-wrapper>

                </o-section>

                <o-section v-if="event.galleryMedias">

                    <o-wrapper
                        centered-content
                        class="o-section-intro-gallery__wrapper"
                    >

                        <a-image
                            v-for="(media, index) in event.galleryMedias"
                            :key="index"
                            :src="media.image"
                            is-bg
                            width="100%"
                            height="12.5rem"
                        />

                    </o-wrapper>

                </o-section>

                <o-section>
                    <o-wrapper
                        centered-content
                        row-gap-normal
                        boxed
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
    async asyncData ({ params, payload }) {
        if (payload) { return { event: payload } } else {
            return {
                event: await require(`~/assets/content/events/${params.slug}.json`)
            }
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

.o-section-intro-gallery__wrapper {
    gap: calc(var(--space-grid) * 0.5);
    grid-template-columns: repeat(auto-fit, minmax(19rem, auto));
    justify-content: center;
}
</style>
