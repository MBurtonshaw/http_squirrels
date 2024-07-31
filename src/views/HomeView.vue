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

<style>
</style>