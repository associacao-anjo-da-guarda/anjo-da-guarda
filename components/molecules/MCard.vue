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
        MTransparencyCard: () => import('@/components/molecules/MTransparencyCard'),
        MLogoCard: () => import('@/components/molecules/MLogoCard')
    },

    props: {

        cardData: {
            type: Object,
            required: true
        },

        transparencyCard: {
            type: Boolean
        },

        logoCard: {
            type: Boolean
        }

    },

    computed: {
        getComponent () {
            return this.transparencyCard ? 'MTransparencyCard' : this.logoCard ? 'MLogoCard' : 'MGeneralContentCard'
        }
    }

}
</script>
