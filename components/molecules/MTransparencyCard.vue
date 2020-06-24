<template>

    <!-- card -->
    <article class="m-card">

        <section class="m-card__header">

            <n-link :to="link">
                <div class="a-card__no-image">
                    <span class="a-card-header__text">{{ interval }}</span>
                    <img
                        src="@/assets/icon-graphic.svg"
                        alt="'Ícone de gráfico'"
                        class="a-card-header__icon"
                    >
                </div>
                <div v-if="image">
                    <a-image
                        is-bg
                        :src="image.url"
                        width="100%"
                        height="12.5rem"
                        class="a-card__image"
                    />
                </div>
            </n-link>

        </section>

        <section class="m-card__body">

            <a-title
                v-if="title"
                tag="h4"
                class="a-card__title"
            >
                <n-link :to="link">
                    {{ title }}
                </n-link>
            </a-title>

            <a-text v-if="text">
                {{ text }}
            </a-text>

        </section>

    </article>

</template>

<script>

export default {

    props: {
        image: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        link: {
            type: String,
            default: '#'
        },
        interval: {
            type: String,
            default: ''
        }
    }

}
</script>

<style scoped>
.m-card {
    width: 100%;
    border-radius: 1.25rem;
    max-width: 22.5rem;
    border: 1px solid var(--color-on-surface-low);
    text-align: center;
}
.m-card__header {
    border-radius: 1.25rem;
}
.m-card__body {
    display: grid;
    row-gap: calc(var(--space-grid) * 2);
    padding: calc(var(--space-grid) * 3);
}
.m-card__footer {
    text-align: center;
    padding-left: var(--defaultSpace, 1.875rem);
    padding-right: var(--defaultSpace, 1.875rem);
    padding-bottom: var(--defaultSpace, 1.875rem);
}
.a-card__image {
    border-radius: 1.25rem;
}
.a-card__image:hover {
    filter: grayscale(80%);
    transition: all 0.3s;
}
.a-card__no-image {
    display: grid;
    width: 100%;
    height: 12.5rem;
    background-color: hsla(198, 80%, 63%, 0.9);
    border-radius: 1.25rem;
    position: relative;
    top: 0;
    left: 0;
    z-index: 10;
    font-size: 50px;
    justify-items: center;
    align-items: center;
    color: hsla(198, 100%, 100%, 1);
}
.a-card-header__icon {
    position: relative;
    top: 16px;
    right: 16px;
    z-index: 20;
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: start;
    justify-self: end;
}
.a-card-header__text {
    grid-column: 1/2;
    grid-row: 1/2;
}
.a-card__title {
    font-size: 1.25rem;
    font-weight: 900;
    text-transform: uppercase;
}
</style>
