<script>
export default {
    name: "AppHeader",
    data() {
        return {
            menuItems: [
                {
                    label: "Home",
                    routeName: "home"
                },
                {
                    label: "Projects",
                    routeName: "projects"
                },
                {
                    label: "About us",
                    routeName: "about"
                },
                {
                    label: "Contact us",
                    routeName: "contact"
                }
            ]
        }
    }
}
</script>

<template>
    <header>
        <nav id="navv" class="navbar navbar-expand-lg">
            <div class="container sottonav ">
                <a class="navbar-brand text-white" href="/">Boolpress</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto text-white">
                        <li class="nav-item text-white" v-for="item in menuItems">
                            <router-link :to="{ name: item.routeName }" class="nav-link text-white  active" aria-current="page">{{
                                item.label }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;


header{
    position: sticky;
    top: 0;
    margin-bottom: 30px;
    z-index: 100;
    #navv{
        background-color: #0c3469;
        color: white !important;
        .router-link-exact-active{
            text-decoration: underline !important;
            background-color: #4ecb6f !important;
        }
        .collapse{
            margin: 0 auto
        }
    }
}


</style>