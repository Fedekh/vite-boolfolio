<script>
import { RouterLink } from 'vue-router';


export default {
    name: "NotFound",
    components: { RouterLink },
    methods: {
        goBack() {
            this.$router.go(-2);
            // this.$router.back();
        }
    },
    mounted() {
        console.log(this.$router);
    }
}
</script>

.
<template>
    <div class="container">
        <h2>Not Found</h2>
        <router-link class="btn btn-danger" to="/">Go to Home (working link)</router-link>
        <a @click="goBack" class="btn btn-warning mx-4" href="">TORNA INDIETRO (not working routerback)</a>
    </div>
</template>


<style lang="scss" scoped>

</style>