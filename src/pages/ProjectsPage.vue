<script >
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import LoadingPage from '../components/LoadingPage.vue';
import Pagination from '../components/Pagination.vue';
import AppHeader from '../components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    ProjectCard,
    LoadingPage,
    Pagination,
    AppHeader
  },

  data() {
    return {
      myApi: 'http://localhost:8000',
      projects: [],
      types: [],
      technologies: [],
      typeSelected: 'TUTTI',
      technologySelected: [],
      datiArray: {
        currentPage: 1,
        lastPage: null,
      },
      totalProjects: 0,
      loading: false,

    }
  },
  mounted() {
    this.getProject();
    this.getType();
    this.getTechnology();
  },
  methods: {
    getProject(pageNumber = 1) {
      this.loading = true;

      const params = {
        page: pageNumber,
      }

      if (this.typeSelected !== 'TUTTI') {
        params.type_id = this.typeSelected;
      }

      if (this.technologySelected.length > 0 ){
        params.technologies = this.technologySelected;

      }

      axios
        .get(`${this.myApi}/api/projects`, { params })
        .then(resp => {
          this.projects = resp.data.results.data;
          this.datiArray.currentPage = resp.data.results.current_page;
          this.datiArray.lastPage = resp.data.results.last_page;
          this.totalProjects = resp.data.results.total;
        })
        .finally(() => {
          this.loading = false;

        })
    },

    getType() {
      axios
        .get(`${this.myApi}/api/types`)
        .then((resp) => {
          this.types = resp.data.results;
        })
    },

    getTechnology() {
      axios
        .get(`${this.myApi}/api/technologies`)
        .then((resp) => {
          this.technologies = resp.data.results
          console.log(this.technologies);
        })
    }

  }
}

</script>

<template>
  <AppHeader />

  <div class="container">
    <section v-if="!loading">
      <h1 class="text-center my-2 container ">Lista dei progetti :</h1>
      <router-link class="btn btn-info my-5" :to="{ name: 'home' }">Home</router-link>


      <div class="d-flex justify-content-between filter align-items-center">
        <div class="filters">

          <!-- fitro tipologia-->
          <div class="d-flex align-items-center justify-content-between">

            <label for="type" class="w-100">Seleziona per tipologia :</label>

            <select v-model="typeSelected" class="form-select" aria-label="Default select example" @change="getProject()">
              <option value="TUTTI">Tutti</option>
              <option :value="tipe.id" v-for="(tipe, index) in types" :key="tipe.id" >{{ tipe.name }}  </option>
            </select>

          </div>

          <!-- fitro tecnologie-->
          <div class="my-4 d-flex justify-content-between">
            <p>Seleziona per tecnologie: </p>
            <div >
              <div class="d-flex mx-3" v-for="technology in technologies" :key="technology.id">
                <label for="{{technology.id}}" class="w-100 mx-3">{{ technology.name_technologies }}</label>
                <input v-model="technologySelected" type="checkbox" id="{{technology.id}}" :value="technology.name_technologies"  @change="getProject()">
              </div>
            </div>

          </div>
        </div>

        <p class="project-number me-4">
          Trovati : {{ totalProjects }} progetti
        </p>
      </div>

      <!-- ProjectCard Component -->
      <div class="d-flex flex-row flex-wrap gap-3">
        <div class="project " v-for="project in projects" :key="project.id">
          <ProjectCard :myProject="project" />
        </div>
      </div>
      <!-- /ProjectCard Component -->


      <!-- Handle pagination -->
      <Pagination :datiArray="datiArray" @dati="getProject" />
      <!-- /Handle pagination -->
    </section>



    <!-- LoadingPage -->

    <section v-else>
      <LoadingPage />
    </section>

    <!--/ LoadingPage -->

  </div>
</template>



<style lang="scss">
@use "../style/general.scss" as *;
@use "../style/partials/variables" as *;

section {
  color: rgb(153, 253, 13);

  .filter {

    .form-select {
      width: 200px; // Larghezza della select
      background-color: #5296e3;

      & option {
        background-color: #1b1b3e;
        color: #15d361f0;
      }

      &:focus {
        outline: none;
      }
    }

    .project-number {
      color: #e56729;
      font-size: 1.2rem;
      margin: 50px;
      padding-right: 90px;
    }
  }
}



.project {
  width: calc(100% / 4 - 20px);

  @media screen and (max-width: 1200px) {
    width: calc(100% / 3 - 20px);
  }

  @media screen and (max-width: 992px) {
    width: calc(100% / 2 - 20px);
  }

  @media screen and (max-width: 768px) {
    width: calc(100% - 20px);
  }
}
</style>