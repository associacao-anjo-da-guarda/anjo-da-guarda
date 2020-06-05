<template>

    <component
        :is="tag"
        :class="{
            'a-image': 1,
            'a-image--bg': isBg
        }"
        :style="getStyle"
        @click="handleClick"
    >
        <img
            v-if="!isBg"
            class="a-image__image"
            :src="getSrc"
            :srcset="getSrcset"
            :alt="alt"
            :style="{'--width': width, '--height': height, '--margin': margin }"
        >
        <slot />
    </component>

</template>

<script>
const images = require.context('@/assets/', false, /[.svg|.jpg|.png|.gif]$/)

export default {

    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            default: 'Imagem'
        },
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: 'auto'
        },
        margin: {
            type: String,
            default: 'auto'
        },
        isBg: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        tag () {
            return this.isBg ? 'div' : 'figure'
        },
        getSrc () {
            return this.isExternal() ? this.src : images(`./${this.src}`)
        },
        getSrcset () {
            const [name, ext] = this.src.split('.')
            if (ext && ext !== 'svg') {
                return this.isExternal() ? undefined : images(`./${this.src}`) + ', ' + images(`./${name}-2x.${ext}`) + ', 2x'
            }

            return undefined
        },
        getStyle () {
            if (!this.isBg) {
                return null
            }
            return {
                backgroundImage: this.isExternal() ? `url('${this.src}')` : `url('${images('./' + this.src)}')`,
                '--width': this.width,
                '--height': this.height
            }
        }
    },

    methods: {
        isExternal () {
            return !!this.src.startsWith('http')
        },
        handleClick (event) {
            this.$emit('click', event)
        }
    }

}
</script>

<style>
/* a-image component */
.a-image {
    width: var(--width, 100%);
    height: var(--height, auto);
    margin: 0;
}
.a-image__image {
    display: block;
    width: var(--width, 100%);
    max-width: 100%;
    height: var(--height, auto);
    margin: var(--margin, auto);
}
.a-image--bg {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>
