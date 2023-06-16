import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import SingleProjectsPage from "./pages/SingleProjectsPage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import NotFound from "./pages/NotFound.vue";


// il lazy loading significa che il componente viene caricato solo quando serve e occorre togliere l'import sopra 
//component: () => import('./pages/ProjectsPage.vue')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsPage
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProjectsPage, 
        },
        {
            path: "/about",
            name: "about",
            component: AboutPage, 
        },
        {
            path: "/contact",
            name: "contact",
            component: ContactPage,  
        },
        //not found viene inserito sempre per ultimo
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound 
        }

    ]
});

export { router };
