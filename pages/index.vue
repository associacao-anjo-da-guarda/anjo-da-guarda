<template>

    <main class="o-main">

        <o-section class="o-section-intro">
            <o-wrapper
                padding-section
                centered-content
                row-gap-normal
                boxed
                class="o-section-intro__wrapper"
            >

                <a-title
                    tag="h2"
                    level2
                >
                    {{ home.sectionIntro.title }}
                </a-title>

                <a-text color="--color-on-primary-hi">
                    {{ home.sectionIntro.text }}
                </a-text>

                <a-button
                    secondary
                    large
                >
                    {{ home.sectionIntro.buttonText }}
                </a-button>

            </o-wrapper>
        </o-section>

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
                            {{ home.sectionCases.title }}
                        </a-title>

                        <a-text>
                            {{ home.sectionCases.text }}
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
                            v-for="(story, index) in cases"
                            :key="index"
                            :image="story.image"
                            :title="story.title"
                            :text="story.text"
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
                            {{ home.sectionCases.buttonText }}
                        </a-button>

                    </o-wrapper>
                </o-section>

            </o-wrapper>
        </o-section>

        <o-section class="o-section-about">
            <o-wrapper
                padding-section
                centered-content
                row-gap-normal
                boxed
            >

                <a-title
                    tag="h2"
                    level2
                >
                    {{ home.sectionAbout.title }}
                </a-title>

                <a-text v-html="$md.render(home.sectionAbout.text)" />

                <a-button
                    primary
                    large
                >
                    {{ home.sectionAbout.buttonText }}
                </a-button>

            </o-wrapper>
        </o-section>

        <o-section class="o-section-waiting">
            <o-wrapper
                padding-section
                centered-content
                row-gap-normal
                boxed
                class="o-section-waiting__wrapper"
            >

                <a-title
                    tag="h2"
                    level2
                >
                    {{ home.sectionWaiting.title }}
                </a-title>

                <a-text color="--color-on-primary-hi">
                    {{ home.sectionWaiting.text }}
                </a-text>

                <a-button
                    secondary
                    large
                >
                    {{ home.sectionWaiting.buttonText }}
                </a-button>

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

    computed: {
        home () {
            return this.$store.state.home
        },
        cases () {
            return this.$store.state.home.sectionCases.cases
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
/* .o-main {
    margin-top: 65px;
}
@media screen and (min-width: 1200px) {
    .o-main {
        margin-top: 81px;
    }
} */

@media screen and (min-width: 1200px) {
    .o-section-cases-body__wrapper {
        grid-template-columns: repeat(auto-fill, minmax(19rem, auto));
        justify-content: center;
        column-gap: calc(var(--space-grid) * 3);
    }
}

.o-section-intro {
    color: var(--color-on-primary-hi);
    background: radial-gradient(
            73.14% 73.14% at 50% 26.86%,
            rgba(212, 17, 63, 0) 0%,
            #d4113f 61.46%
        ),
        url("~assets/girl-holding-dandelion-flower.jpg") no-repeat center;
    background-size: cover;
    /* background-position: 50% -100px; */
}

.o-section-intro__wrapper {
    height: 100vh;
    align-content: end;
}

.o-section-about {
    background-color: var(--color-secondary);
}

.o-section-waiting {
    color: var(--color-on-primary-hi);
    background: radial-gradient(
            73.14% 73.14% at 50% 26.86%,
            rgba(212, 17, 63, 0) 0%,
            #d4113f 61.46%
        ),
        url("~assets/image-criancas-em-roda.jpg") no-repeat top center;
    background-size: cover;
}

.o-section-waiting__wrapper {
    height: calc(100vh - 65px);
    align-content: end;
}

@media screen and (min-width: 1200) {
    .o-section-waiting__wrapper {
        height: calc(100vh - 81px);
        align-content: end;
    }
}
</style>
