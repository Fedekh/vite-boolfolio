<script>

export default {
    name: 'Pagination',
    emits: ["dati"],
    props: {
        datiArray: Object

    }

}

</script>

<template>
    <nav class="my-5 d-flex justify-content-center" aria-label="Page navigation example">
        <ul class="pagination">

            <li class="page-item" :class="{ 'disabled': datiArray.currentPage === 1 }">
                <a class="page-link" href="#" @click.prevent="$emit('dati', datiArray.currentPage - 1)">Previous</a>
            </li>

            <li class="page-item" :class="{ 'active': pageNum === datiArray.currentPage }"
                v-for="(pageNum, index) in datiArray.lastPage">
                <a class="page-link" href="#" @click.prevent="$emit('dati', index + 1)">{{ index + 1 }}</a>
            </li>

            <li class="page-item" :class="{ 'disabled': datiArray.currentPage == datiArray.lastPage }">
                <a class="page-link" href="#" @click.prevent="$emit('dati', datiArray.currentPage + 1)">Next</a>
            </li>

        </ul>

    </nav>
</template>

<style scoped lang="scss">
.pagination {
    .page-link {
        color: #eead15;
        background-color: #5100ff3c;
        border-color: #aca0c6;
    }

    .page-link.active,
    .active>.page-link {
        z-index: 3;
        color: #444b55;
        background-color: #0ede2a;
        border-color: #0ede2a;
    }
}
</style>