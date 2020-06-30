<template>
    <!-- navbar -->
    <nav
        id="o-navbar"
        class="o-navbar"
        :style="getStyle"
    >
        <section class="o-navbar__content">

            <!-- section logo -->
            <section class="o-navbar__logo">
                <img
                    class="o-navbar__logo-image o-navbar__logo-image--small"
                    src="@/assets/logo-small.svg"
                    alt="Associação Anjo da Guarda"
                    @click="goToHome"
                >
                <img
                    class="o-navbar__logo-image o-navbar__logo-image--large"
                    src="@/assets/logo-large.svg"
                    alt="Associação Anjo da Guarda"
                    @click="goToHome"
                >
            </section>

            <!-- section cta -->
            <section
                v-if="1"
                class="o-navbar__cta"
            >
                <!-- <a-button
                    outlined
                    fit-content
                    large
                    to="/seja-nosso-heroi"
                >
                    Quero ser herói
                </a-button> -->
                <a-button
                    outlined
                    fit-content
                    large
                    to="/eventos/categoria/covid-19"
                >
                    Anjos em Ação - Covid 19
                </a-button>
            </section>

            <a-divider
                vertical
                emphasis-medium
                class="a-divider__cta"
            />

            <!-- section social icons -->
            <section
                v-if="1"
                class="o-navbar__social-icons"
            >
                <MSocialIcons />
            </section>

            <a-divider
                vertical
                emphasis-medium
                class="a-divider__social-icons"
            />

            <!-- section controls -->
            <section class="o-navbar__controls">

                <!-- <img
                    src="@/assets/icon-search.svg"
                    alt="Busca"
                    class="o-navbarControls__control"
                    @click="showSearchOverlay"
                > -->
                <img
                    src="@/assets/icon-menu.svg"
                    alt="Menu"
                    class="o-navbarControls__control"
                    @click="showMenu=true"
                >

                <!-- <AIcon
                    class="o-navbar__search-button"
                >
                    <IconSearch/>
                </AIcon> -->

                <!-- <AIcon
                    @click="showMenu=true"
                    class="o-navbar__hamburger-button"
                >
                    <IconMenu/>
                </AIcon> -->

            </section>

            <!-- menu overlay -->
            <transition name="slide">
                <m-menu-main
                    v-show="showMenu"
                    class="o-navbar__menu--overlay"
                    @close-menu="showMenu=false"
                />
            </transition>

        </section>

        <!-- <transition name="fade">
            <o-section
                v-show="showInfoBar"
                centered-full
                class="o-navbar__info"
            >
                <o-wrapper
                    boxed
                    justify-center
                >
                    <a-title
                        :level="4"
                        class="o-navbarInfo__title"
                    >
                        {{ info }}
                    </a-title>
                </o-wrapper>
            </o-section>
        </transition> -->

    </nav>
</template>

<script>
import MMenuMain from '@/components/molecules/MMenuMain'
import MSocialIcons from '@/components/molecules/MSocialIcons'
import ADivider from '@/components/atoms/ADivider'
import AButton from '@/components/atoms/AButton'

export default {

    components: {
        MMenuMain,
        MSocialIcons,
        ADivider,
        AButton
    },

    props: {
        bgColor: {
            type: String,
            default: 'var(--color-surface, #ffffff)'
        },
        dividerColor: {
            type: String,
            default: 'transparent'
        }
    },

    data () {
        return {
            showMenu: false
        }
    },

    computed: {

        getStyle () {
            return {
                '--mainHeaderBgColor': this.bgColor,
                '--mainHeaderDividerColor': this.dividerColor
            }
        }

    },

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
/* o-navbar */
.o-navbar {
    width: 100%;
    display: grid;
    justify-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.95);
    z-index: 10000;
    box-shadow: 0 1px 0 0 rgba(33, 54, 56, 0.08);
}

/* o-navbar-content */
.o-navbar__content {
    width: 100%;
    max-width: 1320px;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: calc(var(--space) / 2);
    align-items: center;
}
@media screen and (min-width: 900px) {
    .o-navbar__content {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
@media screen and (min-width: 1200px) {
    .o-navbar__content {
        grid-template-columns: 1fr 1fr 1px 1fr 1px auto;
        grid-column-gap: calc(var(--space) * 1);
        padding: 16px 24px;
    }
}

.o-navbar__logo {
    height: 32px;
    width: auto;
    display: grid;
    align-items: center;
}
@media screen and (min-width: 1200px) {
    .o-navbar__logo {
        height: 48px;
    }
}

.o-navbar__logo-image {
    display: block;
    cursor: pointer;
}
.o-navbar__logo-image--small {
    height: 32px;
}
@media screen and (min-width: 1200px) {
    .o-navbar__logo-image--small {
        display: none;
    }
}

.o-navbar__logo-image--large {
    display: none;
}
@media screen and (min-width: 1200px) {
    .o-navbar__logo-image--large {
        display: block;
        height: 48px;
    }
}

.o-navbar__cta {
    display: none;
}
@media screen and (min-width: 1200px) {
    .o-navbar__cta {
        display: grid;
        grid-template-columns: 1fr;
        grid-column-gap: 0.5rem;
        align-items: center;
        justify-items: center;
    }
}

.o-navbar__social-icons {
    display: none;
}
@media screen and (min-width: 900px) {
    .o-navbar__social-icons {
        display: grid;
        align-items: center;
    }
}

.o-navbar__controls {
    display: grid;
    grid-template-columns: 24px;
    grid-column-gap: var(--space, 1.5rem);
    align-items: center;
    justify-content: end;
}

.o-navbarControls__control {
    cursor: pointer;
}

.o-navbar__hamburger-button {
    padding: 0;
}

.o-navbar__menu--inline {
    display: none;
}
@media screen and (min-width: 1200px) {
    .o-navbar__menu--inline {
        display: block;
    }
}

.cta-header {
    display: none;
}
@media screen and (min-width: 1200px) {
    .cta-header {
        display: block;
    }
}

.a-divider__cta {
    display: none;
    height: 24px;
}
@media screen and (min-width: 1200px) {
    .a-divider__cta {
        display: block;
    }
}

.a-divider__social-icons {
    display: none;
    height: 24px;
}
@media screen and (min-width: 1200px) {
    .a-divider__social-icons {
        display: block;
    }
}

.o-navbar__info {
    width: 100%;
    height: 4rem;
    padding: var(--space-grid);
    background-color: var(--color-primary);
    /* font-size: var(--title-level-4) */
}
.o-navbarInfo__title {
    color: var(--color-on-primary);
}

/* transitions */
/* slide */
.slide-enter-active {
    animation: slide-in 0.5s;
    animation-fill-mode: forwards;
}
.slide-leave-active {
    animation: slide-in 0.5s reverse;
    animation-fill-mode: forwards;
}
@keyframes slide-in {
    0% {
        opacity: 0;
        transform: translateX(100vw);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

/* transitions */
/* fade */
.fade-enter-active {
    animation: fade 0.8s;
    /* animation-fill-mode: forwards; */
}
.fade-leave-active {
    animation: fade 0.8s reverse;
    /* animation-fill-mode: forwards; */
}
@keyframes fade {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
