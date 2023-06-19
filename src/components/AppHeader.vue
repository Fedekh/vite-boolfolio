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
                <a id="fede" class="navbar-brand" href="/">Fedekh's Portfolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item" v-for="item in menuItems">
                            <router-link :to="{ name: item.routeName }" class="nav-link active" aria-current="page">{{
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

header {
    position: sticky;
    top: 0;
    margin-bottom: 30px;
    z-index: 100;

    #navv {
        background: linear-gradient(to right, #931893, #8054cd, #2be359, #ff8400);

        .navbar-brand {
            color: #3cf439;
            font-weight: bold;
        }

        .router-link-exact-active {
            color: #3cf439;
            text-decoration: underline;
            background-color: #4a5c4f;
            border-radius: 20px;
            padding-left: 10px;
        }
    }

}
</style>