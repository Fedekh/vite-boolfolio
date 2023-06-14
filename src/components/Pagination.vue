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

            <li class="page-item" :class="{ 'active': pageNum === datiArray.currentPage }" v-for="(pageNum,index) in datiArray.lastPage">
                <a class="page-link" href="#" @click.prevent="$emit('dati', index+1 )">{{ index+1 }}</a>
            </li>

            <li class="page-item" :class="{ 'disabled': datiArray.currentPage == datiArray.lastPage }">
                <a class="page-link" href="#" @click.prevent="$emit('dati', datiArray.currentPage + 1)">Next</a>
            </li>

        </ul>

    </nav>
</template>