<script >


export default {
  name: 'ProjectCard',
  props: {
    myProject: Object

  },
  data() {
    return {
      myApi: 'http://localhost:8000', //funziona cn entrambi server php
      isThere: false  //flag per immagine non disponibile
    }
  },
  computed: { //calcola valori derivati basati su dati di input e mantenerli automaticamente aggiornati.

    preview() {
      //massimo 100 caratteri per la descrizione, poi si aggiunge ...
      if (!this.myProject.content) {
        return 'Nessun contenuto'
      } else if (this.myProject.content.length > 100) {
        return this.myProject.content.substring(0, 99) + "...";
      } else {
        return this.myProject.content
      }
    },

    imgSrc() { //questa funzione serve per gestire l'immagine non disponibile
      if (!this.myProject.image) {
        this.isThere = true;
      } else {
        return `${this.myApi}/storage/${this.myProject.image}`;
      }
    }
  }

}
</script>

<template>
  <div class="card d-flex flex-column">

    <img v-show="myProject.image" :src="imgSrc" :alt="myProject.title" />
    <div v-if="isThere" class="position-relative">
      <img class="w-100" src="https://pbs.twimg.com/media/FS8zh8laQAAjjkK.jpg" alt="">
      <p class="position-absolute top-50 start-50 translate-middle text-white">IMMAGINE NON TROVATA</p>
    </div>


    <div class="card-body d-flex flex-column mt-3">
      <h6 class="my-2"><span>Titolo: </span> {{ myProject.title }}</h6>

      <h6 class="my-2"><span>Descrizione: </span> {{ preview }}</h6>

      <p v-if="myProject.type">
        <span>Tipologia: </span> {{ myProject.type.name }}
      </p>

      <div v-if="myProject.technologies && myProject.technologies.length > 0">
        <span>Tecnologie usate:</span>
        <ul>
          <li v-for="technology in myProject.technologies"> {{ technology.name_technologies }} </li>
        </ul>
      </div>
      <router-link :to='{ name: "single-project", params: { slug: myProject.slug } }'
        class="btn btn-primary w-50 mx-auto my-5">Dettagli</router-link>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "../style/general.scss";

.card {

  background-color: rgba(25, 22, 22, 0.75);
  flex: none;
  height: 680px;


  h5 {
    color: rgb(164, 201, 228);
  }

  img {
    max-width: 100%;
  }

  .card-body {

    ul {
      color: aquamarine;

      li {
        &::marker {
          content: '🎃 ';
        }
      }
    }

    h6 {
      color: green;
    }

    p {
      color: orange;
      font-size: 1.3rem;

    }

    span {
      color: rgb(227, 69, 69);
      font-size: 1.3rem;
    }
  }
}
</style>