<template>

    <component
        :is="tag"
        :class="{
            'a-title': 1,
            'a-title--level-1': level1,
            'a-title--level-2': level2,
            'a-title--level-3': level3,
            'a-title--level-4': level4,
            'a-title--center': center,
            'a-title--left': left,
            'a-title--right': right,
        }"
        :style="{'--color': color}"
    >
        <slot />
    </component>

</template>

<script>
export default {

    name: 'ATitle',

    props: {

        tag: {
            type: String,
            default: 'h1'
        },

        level1: {
            type: Boolean
        },

        level2: {
            type: Boolean
        },

        level3: {
            type: Boolean
        },

        level4: {
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
            default: null
        }

    }

}
</script>

<style>
/* a-title component */
.a-title {
    font-family: var(--font-family-title);
    font-weight: var(--font-weight-title);
    line-height: var(--line-height-title);
    text-transform: uppercase;
    letter-spacing: -0.02em;
}

.a-title--level-1 {
    font-size: var(--title-level-1);
}

.a-title--level-2 {
    font-size: var(--title-level-2);
}

.a-title--level-3 {
    font-size: var(--title-level-3);
}

.a-title--level-4 {
    font-size: var(--title-level-4);
}

.a-title--center {
    text-align: center;
}

.a-title--left {
    text-align: left;
}

.a-title--right {
    text-align: right;
}
</style>
