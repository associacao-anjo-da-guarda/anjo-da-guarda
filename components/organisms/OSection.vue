<template>

    <section class="o-section">

        <slot />

    </section>

</template>

<script>
export default {

    name: 'OSection'

}
</script>

<style scoped>
/* o-section component */
.o-section {
    width: 100%;
    display: grid;
    justify-items: center;
}
</style>
