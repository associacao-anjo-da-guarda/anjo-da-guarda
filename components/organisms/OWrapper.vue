<template>

    <div
        id=""
        :class="{
            'o-wrapper': 1,
            'o-wrapper--centered-content': centeredContent,
            'o-wrapper--padding-section': paddingSection,
            'o-wrapper--row-gap--normal': rowGapNormal,
            'o-wrapper--row-gap--small': rowGapSmall,
            'o-wrapper--row-gap--large': rowGapLarge,
            'o-wrapper--boxed': boxed,
            'o-wrapper--columns': columns,
        }"
    >

        <slot />

    </div>

</template>

<script>
export default {

    name: 'OWrapper',

    props: {

        // Justify child items to the center
        centeredContent: {
            type: Boolean
        },

        // Adds a padding: --padding-section
        paddingSection: {
            type: Boolean
        },

        // Adds a default row gap: 2 grid spaces
        rowGapNormal: {
            type: Boolean
        },

        // Adds a small row gap: 1 grid space
        rowGapSmall: {
            type: Boolean
        },

        // Adds a large row gap: 4 grid spaces
        rowGapLarge: {
            type: Boolean
        },

        // Adds a max-width: --boxed-width
        boxed: {
            type: Boolean
        },

        // Adds a default grid columns
        columns: {
            type: Boolean
        }
    }

}
</script>

<style>
/* o-wrapper component */
.o-wrapper {
    width: 100%;
    display: grid;
}

.o-wrapper--centered-content {
    justify-items: center;
    text-align: center;
}

.o-wrapper--padding-section {
    padding: var(--padding-section);
}

.o-wrapper--row-gap--normal {
    /* row-gap: calc(var(--space-grid) * 2); */
    row-gap: calc(var(--space) * 1);
}

.o-wrapper--row-gap--small {
    /* row-gap: calc(var(--space-grid) * 1); */
    row-gap: calc(var(--space) / 2);
}

.o-wrapper--row-gap--large {
    /* row-gap: calc(var(--space-grid) * 4); */
    row-gap: calc(var(--space) * 2);
}

.o-wrapper--boxed {
    max-width: var(--boxed-width);
}

@media screen and (min-width: 600px) {
    .o-wrapper--columns {
        grid-template-columns: repeat(8, 1fr);
        column-gap: 1rem;
    }
}

@media screen and (min-width: 1200px) {
    .o-wrapper--columns {
        grid-template-columns: repeat(12, 1fr);
        column-gap: 1.5rem;
    }
}
</style>
