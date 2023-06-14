<script >
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
import LoadingPage from './components/LoadingPage.vue';
import Pagination from './components/Pagination.vue';

export default {
  name: 'App',
  components: {
    ProjectCard,
    LoadingPage,
    Pagination
  },

  data() {
    return {
      myApi: 'http://localhost:8000',
      projects: [],
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
  },
  methods: {
    getProject(pageNumber = 1) {

      this.loading = true;

      axios
        .get(`${this.myApi}/api/projects`, {
          params: {
            page: pageNumber
          }
        })
        .then(resp => {
          console.log(resp);
          this.projects = resp.data.results.data;
          this.datiArray.currentPage = resp.data.results.current_page;
          this.datiArray.lastPage = resp.data.results.last_page;
          this.totalProjects = resp.data.results.total;
        })
        .finally(() => {
          this.loading = false;

        })
    }
  }
}

</script>

<template>
  <div class="container">
    <section v-if="!loading">
      <h1 class="text-center my-2 container ">Lista dei progetti :</h1>
      <div class="text-end container project-number me-4">
        Trovati : {{ totalProjects }} progetti
      </div>

      <div class="row row-cols-4 gap-3">
        <div class="project col" v-for="project in projects" :key="project.id">
          <ProjectCard :myProject="project" />
        </div>
      </div>


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
@use "./style/general.scss" as *;
@use "./style/partials/variables" as *;

section {
  color: rgb(153, 253, 13);

  .project-number {
    color: #e56729;
    font-size: 1.2rem;
    margin: 50px;
    padding-right: 90px;
  }
}

.project {
  width: calc(100% / 4 - 20px);
}
</style>