<template>

    <component
        :is="getComponent"
        :card-data="cardData"
    />

</template>

<script>

export default {

    components: {
        MGeneralContentCard: () => import('@/components/molecules/MGeneralContentCard'),
        MTransparencyCard: () => import('@/components/molecules/MTransparencyCard')
    },

    props: {

        cardData: {
            type: Object,
            required: true
        },

        transparencyCard: {
            type: Boolean
        }

    },

    computed: {
        getComponent () {
            return this.transparencyCard ? 'MTransparencyCard' : 'MGeneralContentCard'
        }
    }

}
</script>
