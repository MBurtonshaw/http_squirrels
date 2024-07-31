<template>
    <div>
        <card-detail v-bind:squirrel="squirrel" v-bind:key="squirrel.id"/>
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