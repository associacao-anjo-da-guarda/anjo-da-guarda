<template>

    <component
        :is="tag"
        :class="{
            'a-text': 1,
            'a-text--large': large,
            'a-text--caption': caption,
            'a-text--center': center,
            'a-text--left': left,
            'a-text--right': right,
        }"
        :style="{'--color': color}"
    >

        <slot />

    </component>

</template>

<script>
export default {

    name: 'AText',

    props: {

        tag: {
            type: String,
            default: 'p'
        },

        large: {
            type: Boolean
        },

        caption: {
            type: Boolean
        },

        center: {
            type: Boolean
        },

        left: {
            type: Boolean
        },

        right: {
            type: Boolean
        },

        color: {
            type: String,
            default: 'var(--color-on-surface-medium)'
        }

    }

}
</script>

<style>
/* a-text component */
.a-text {
    font-size: var(--text);
    line-height: 1.4;
    color: var(--color);
    word-break: break-word;
}

.a-text--large {
    font-size: var(--text-large);
}

.a-text--caption {
    font-size: var(--caption);
}

.a-text--center {
    text-align: center;
}

.a-text--left {
    text-align: left;
}

.a-text--right {
    text-align: right;
}
</style>
