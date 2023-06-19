<script>
import axios from 'axios';

export default {
    name: "ContactForm",
    data() {
        return {
            email: '',
            name: '',
            message: '',
            myApi: 'http://localhost:8000',
        }
    },
    methods: {
        sendForm() {
            const params = {
                email: this.email,
                name: this.name,
                message: this.message,
            }
            axios
                .post(`${this.myApi}/api/contacts`, params)
                .then(resp => {
                    console.log(resp);
                })
                .catch(err => {
                    console.log(err);
                }) 
                .finally(() => {
                    this.email = '';
                    this.name = '';
                    this.message = '';
                })
        }
    }
}

</script>


<template>
    <div class="container">

        <div class="my-5 w-50">

            <form @submit.prevent="sendForm()">
                <div class="row">

                    <!-- Email -->
                    <div class="col-6">
                        <label for="email">Email</label>
                        <input v-model="email" type="email" class="form-control" id="email" placeholder="Email">

                    </div>


                    <!-- Name -->
                    <div class="col-6">
                        <label for="name">Nome</label>
                        <input v-model="name" type="name" class="form-control" id="name" placeholder="Nome">
                    </div>


                    <!-- Message -->
                    <div class="col-6">
                        <label for="">Messaggio</label>
                        <textarea v-model="message" class="form-control" id="exampleFormControlTextarea1" rows="3"
                            placeholder="Messaggio"></textarea>
                    </div>

                </div>

                <button type="submit" class="btn my-4 btn-info">Invia</button>

            </form>

        </div>

    </div>
</template>


<style lang="scss" scoped></style>