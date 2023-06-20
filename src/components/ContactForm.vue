<script>
import axios from 'axios';
import LoadingPage from './LoadingPage.vue';

export default {
    name: "ContactForm",
    data() {
        return {
            loading: false,
            email: "",
            name: "",
            message: "",
            success: false,
            errors: null,
            myApi: 'http://localhost:8000'
        }
    },
    methods: {
        sendForm() {
            this.loading = true;
            this.success = false;
            this.errors = null;
            const data = {
                email: this.email,
                name: this.name,
                message: this.message
            };
            axios.post(`${this.myApi}/api/leads`, data).then(resp => {
                // console.log(resp);
                if (resp.data.success) {
                    this.success = true;
                    this.email = "";
                    this.name = "";
                    this.message = "";
                } else {
                    this.errors = resp.data.errors;
                }
            }).catch(error => {

            }).finally(() => {
                this.loading = false;
                setTimeout(() => {
                    this.success = false;
                }, 4000);
            })
        }
    }
}
</script>

<template>
    <div class="my-5">
        <div v-show="success" class="alert carletto carlo alert-success">
            Il tuo messaggio è stato inviato con successo!
        </div>

        <div v-if="errors" class="alert alert-danger">
            <ul>
                <li v-for="(error, index) in errors" :key="index">{{ error[0] }}</li>
            </ul>
        </div>

        <form @submit.prevent="sendForm()">
            <div class="row">

                <!-- Email -->
                <div class="col-6">
                    <label for="email">Email</label>
                    <input v-model="email" type="email" id="email" class="form-control"
                        :class="{ 'is-invalid': errors && errors.email }">
                    <div class="invalid-feedback" v-if="errors">{{ errors.email[0] }}</div>
                </div>

                <!-- Name -->
                <div class="col-6">
                    <label for="name">Nome</label>
                    <input v-model="name" type="text" id="name" class="form-control"
                        :class="{ 'is-invalid': errors && errors.name }">
                    <div class="invalid-feedback" v-if="errors">{{ errors.name[0] }}</div>
                </div>

                <!-- Message -->
                <div class="col-12">
                    <label for="message">Messaggio</label>
                    <textarea v-model="message" id="message" rows="10" class="form-control"></textarea>
                </div>
            </div>
            <div v-if="loading">
                <LoadingPage />
            </div>
            <div class=" mt-4 text-center">

                <button type="submit" class="btn btn-primary">Invia</button>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
@import "../style/general.scss";

.carlo {
    opacity: 0;
    animation: scomparsa 4s linear;
}

@keyframes scomparsa {
    0% {
        opacity: 1;
    }

    25% {
        opacity: 0.75;
    }

    50% {
        opacity: 0.5;
    }

    75% {
        opacity: 0.25;
    }

    100% {
        opacity: 0;
    }
}
</style>