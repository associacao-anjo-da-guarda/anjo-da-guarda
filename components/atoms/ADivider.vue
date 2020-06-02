<template>

    <div
        id=""
        :class="{
            'a-divider': 1,
            'a-divider--vertical': vertical,
            'a-divider--emphasis-low': emphasisLow,
            'a-divider--emphasis-medium': emphasisMedium,
            'a-divider--emphasis-hi': emphasisHi,
        }"
    />

</template>

<script>
export default {

    props: {
        vertical: {
            type: Boolean
        },
        emphasisLow: {
            type: Boolean
        },
        emphasisMedium: {
            type: Boolean
        },
        emphasisHi: {
            type: Boolean
        }
    }

}
</script>

<style>
.a-divider {
    width: 100%;
    height: 1px;
    display: block;
    background-color: var(--color-onSurface);
    opacity: calc(var(--color-contrast-low, 0.2) / 2);
}
.a-divider--vertical {
    width: 1px;
    height: 100%;
}
.a-divider--emphasis-low {
    opacity: calc(var(--color-contrast-low, 0.2) / 2);
}
.a-divider--emphasis-medium {
    opacity: calc(var(--color-contrast-medium, 0.4) / 2);
}
.a-divider--emphasis-hi {
    opacity: calc(var(--color-contrast-hi, 0.87) / 2);
}
</style>
