<script>
import AppHeader from '../components/AppHeader.vue';
import ContactPage from '../components/ContactPage.vue';

export default {
    name: "ContactPage",
    components: {
        AppHeader,
        ContactPage

    },
}
</script>

<template>
<AppHeader/>

    <h2>Contattaci</h2>
    <ContactPage/>
</template>

<style lang="scss" scoped></style>