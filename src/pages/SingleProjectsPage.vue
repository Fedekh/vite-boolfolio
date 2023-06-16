<script>
import axios from 'axios';
import AppHeader from '../components/AppHeader.vue';

export default {
    name: "ContactPage",
    components: {
        AppHeader
    },
    data() {
        return {
            myApi: 'http://localhost:8000',
            project: [],
            errorMesage: ""   //se c'è un errore, lo salvo qui
        }
    },
    mounted() {
        const slug = this.$route.params.slug;
        axios
            .get(`${this.myApi}/api/projects/${slug}`)
            .then((resp) => {
                console.log(resp);
                if (resp.data.success) {
                    this.project = resp.data.results
                } else {
                    this.errorMesage = resp.data.error
                }
            },
                error => {
                    if (error.response.status == 404) {
                        //errore not found, sto cerca di accedere ad un progetto che non esiste
                        //reindirizzo alla pagina not found
                        this.errorMesage = "Project not found"
                        this.$router.push({ name: 'not-found' })
                    } else {
                        this.errorMesage = "OOPs.. Something went wrong"
                    }
                }
            )
    },
    methods: {
        goBack() {
            this.$router.go(-1);
            // this.$router.back();
        }
    }
}
</script>

<template>
    <AppHeader />

    <section class="container ">
        <div class="wrapper ">

            <div v-if="project">
                <h2 class="my-4"> <span>TITOLO : </span> {{ project.title }}</h2>
                <!-- <span>User: {{ project.user }}</span> -->
                <div class='my-4'>
                    <img class="w-50" v-if="project.image" :src="`${myApi}/storage/${project.image}`" alt="">
                    <p v-else>Nessuna immagine</p>
                </div>
                <p class="my-4"> <span class="me-4">DESCRIZIONE : </span> {{ project.content }} </p>
                <div class="my-4 d-flex gap-4">
                    <span>TECNOLOGIE USATE: </span>
                    <ul class="tags list-unstyled">
                        <li v-for="(technology, index) in project.technologies" class="px-2">{{ technology.name_technologies
                        }}
                        </li>
                    </ul>
                </div>
            </div>
            <div v-else-if="errorMesage" class="my-4">
                {{ errorMesage }}
            </div>

            <!-- 2 modi per tornare indietro: -->
            <router-link :to="{ name: 'projects' }" class="btn btn-success mb-3">Back</router-link>
            <a class="btn btn-warning mx-3 mb-3" @click.prevent="goBack" href="">Back II</a>
            
        </div>
    </section>
</template>

<style lang="scss" scoped>
.container {
    span {
        color: red;
    }

    ul {
        margin-left: 20px;

        li::marker {
            content: '🎃';

        }
    }
}
</style>