<template>
    <div class="m-menu">

        <!-- <AIcon
            class="m-menu__buttonClose"
            @click="$emit('close-menu')"
        >
            <IconClose />
        </AIcon> -->

        <img
            class="m-menu__buttonClose"
            src="@/assets/icon-close.svg"
            alt="Fechar"
            @click="$emit('close-menu')"
        >

        <ul class="m-menu__items">

            <li @click="$emit('close-menu')">
                <a-button
                    text
                    large
                    to="/"
                    class="m-menu__item"
                >
                    Home
                </a-button>
            </li>

            <li @click="$emit('close-menu')">
                <a-button
                    text
                    large
                    to="/eventos/categoria/covid-19"
                    class="m-menu__item"
                >
                    Anjos em Ação - Covid 19
                </a-button>
            </li>

            <li @click="$emit('close-menu')">
                <a-button
                    text
                    large
                    to="/quem-somos"
                    class="m-menu__item"
                >
                    Quem somos
                </a-button>
            </li>

            <li @click="$emit('close-menu')">
                <a-button
                    text
                    large
                    to="/transparencia"
                    class="m-menu__item"
                >
                    Transparência
                </a-button>
            </li>

            <li @click="$emit('close-menu')">
                <a-button
                    text
                    large
                    to="/eventos"
                    class="m-menu__item"
                >
                    Eventos
                </a-button>
            </li>

            <li @click="$emit('close-menu')">
                <a-button
                    text
                    large
                    to="/galerias"
                    class="m-menu__item"
                >
                    Galerias
                </a-button>
            </li>

            <li @click="$emit('close-menu')">
                <a-button
                    text
                    large
                    to="/parceiros"
                    class="m-menu__item"
                >
                    Parceiros
                </a-button>
            </li>

            <li @click="$emit('close-menu')">
                <a-button
                    text
                    large
                    href="https://wa.me/5517997730213"
                    class="m-menu__item"
                >
                    Contato
                </a-button>
            </li>

        </ul>

    </div>
</template>

<script>
import AButton from '@/components/atoms/AButton'

export default {

    name: 'MMenuMain',

    components: {
        AButton
    }

}

</script>

<style scoped>
/* m-menu component */
.m-menu {
    z-index: 20000;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 48px auto 1fr;
    align-items: start;
    justify-items: start;
    padding: 30px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--color-bg);
    color: var(--color-onBg);
}
/* items */
.m-menu__items {
    width: 100%;
    display: grid;
    grid-row-gap: var(--space-grid);
    justify-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
}
/* item */
.m-menu__item {
    align-self: start;
}
/* buttonClose */
.m-menu__buttonClose {
    justify-self: start;
    padding: 0;
}
</style>
