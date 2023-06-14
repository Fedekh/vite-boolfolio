<script>

export default {
    name: 'LoadingPage'
}

</script>



<template>
    <div class="container text-center my-5">
        <div class="banner my-5">
            LOADING
            <div class="banner-left"></div>
            <div class="banner-right"></div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
// @use "./style/general.scss" as *;
@use "../style/general.scss";
@use "../style/partials/variables" as *;


.container {

    .banner {
        position: relative;
        padding: 10px 20px;
        animation: loader 1s cubic-bezier(0.5, 0.1, 0.15, 1) alternate infinite;

        &::before {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            transform: skewX(-15deg);
            background-color: $background-color;
        }

        .banner-left,
        .banner-right {
            width: 60px;
            height: 100%;
            position: absolute;
            z-index: -2;
            bottom: -30%;
            transform: skewX(-15deg);
            background-color: $secondary-color;

            &::before {
                content: '';
                width: 0;
                height: 0;
                position: absolute;
                top: -1px;
                border: 22px solid;
                border-color: transparent;
            }
        }

        .banner-left {
            animation: sub-banner-left 1s cubic-bezier(0.5, 0.1, 0.15, 1) alternate infinite;

            &::before {
                left: -1px;
                border-left-color: $primary-color;
            }
        }

        .banner-right {
            animation: sub-banner-right 1s cubic-bezier(0.5, 0.1, 0.15, 1) alternate infinite;

            &::before {
                right: -1px;
                border-right-color: $primary-color;
            }
        }

        @keyframes loader {
            0% {
                letter-spacing: -1px;
            }

            100% {
                letter-spacing: 15px;
            }
        }

        @keyframes sub-banner-left {
            0% {
                right: 82%;
            }

            100% {
                right: 90%;
            }
        }

        @keyframes sub-banner-right {
            0% {
                left: 82%;
            }

            100% {
                left: 90%;
            }
        }
    }
}
</style>