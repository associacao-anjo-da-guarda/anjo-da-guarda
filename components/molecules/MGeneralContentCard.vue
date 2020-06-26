<template>

    <!-- card -->
    <article class="m-card">

        <section
            v-if="cardData.image"
            class="m-card__header"
        >

            <n-link :to="cardData.link">
                <a-image
                    is-bg
                    :src="cardData.image.url"
                    width="100%"
                    height="12.5rem"
                    class="a-card__image"
                />
            </n-link>

        </section>

        <section class="m-card__body">

            <a-title
                v-if="cardData.title"
                tag="h4"
                class="a-card__title"
            >
                <n-link :to="cardData.link">
                    {{ cardData.title }}
                </n-link>
            </a-title>

            <a-text v-if="cardData.text">
                {{ cardData.text }}
            </a-text>

        </section>

    </article>

</template>

<script>

export default {

    props: {
        cardData: {
            type: Object,
            default: () => ({
                image: {},
                title: '',
                text: '',
                link: '#'
            })
        }
    }

}
</script>

<style scoped>
.m-card {
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
.a-card__title {
    font-size: 1.25rem;
    font-weight: 900;
    text-transform: uppercase;
}
</style>
