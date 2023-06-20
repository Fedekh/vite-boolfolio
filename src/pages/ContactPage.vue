<script>
import AppHeader from '../components/AppHeader.vue';
import ContactForm from '../components/ContactForm.vue';

export default {
    name: "ContactPage",
    components: {
        AppHeader,
        ContactForm

    },
}
</script>

<template>
    <AppHeader />

    <div class="row container mx-auto">
        <h2 class="text-center fs-1">Contattaci : </h2>
        <div class="row row-cols-2 justify-content-center">
            <ContactForm />
        </div>
    </div>
</template>

<style lang="scss" scoped>

h2{
    color: rgb(188, 46, 236);

}
</style>