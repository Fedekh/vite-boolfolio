<script>
import AppHeader from '../components/AppHeader.vue';

export default {
    name: "AboutPage",
    components: {
        AppHeader
    },
}
</script>

<template>
    <AppHeader />
    <div class="container text-center">
        <h2>About us</h2>
        <p>A presto nuove aggiornamenti ...</p>
    </div>
</template>

<style lang="scss" scoped>
div {
    color: rgb(238, 66, 23);

}
</style>