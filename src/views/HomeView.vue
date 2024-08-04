<template>
    <div id='main_container'>
        <h1 class="text-center">HTTP Squirrels</h1>
        <div>
            <h3 class="mt-5">Usage: </h3>
            <div class="bg-body-secondary">
                <p class="p-3 py-4 fs-5">localhost:3000/[status_code]</p>
            </div>
        </div>
        <card-list/>
        <div class="text-center m-3 pb-2">
            <a target="_blank" href="https://verdant-cranachan-f205b0.netlify.app/">
                <span>by Matthew Burtonshaw</span>
            </a>
        </div>
    </div>
</template>

<script>
import CardList from '../components/CardList.vue';
export default {
    components: {
        CardList
    }
}
</script>

<style scoped>
@media screen and (max-width: 500px) {
    #main_container {
        padding: 1em;
    }
    h3 {
        text-align: center;
    }
    p {
        text-align: center;
    }
}
</style>