<template>
    <div>
        <card-detail v-bind:squirrel="squirrel" v-bind:key="squirrel.id"/>
    </div>
    <div class="text-center m-3 pb-2">
            <a target="_blank" href="https://matthew-burtonshaw.netlify.app/">
                <span>by Matthew Burtonshaw</span>
            </a>
        </div>
</template>

<script>
import CardDetail from '../components/CardDetail.vue';
export default {
    components: {
        CardDetail
    },
    computed: {
        squirrel() {
            let squirrelId = this.$route.params.id;
            let squirrel = this.$store.state.squirrels.find(item => item.id == squirrelId);
            return squirrel;
        }
    }
}
</script>

<style>
</style>