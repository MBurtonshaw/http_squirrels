<script>
export default {

}
</script>

<template>
  <h1>Squirrels</h1>
  <div id='squirrel_cards' class="row justify-content-evenly">

    <div class="squirrel col py-2" v-for="squirrel in $store.state.squirrels" v-bind:key="squirrel.id">
      <router-link class='router_link' :to="'/' + squirrel.id">
        <div class="squirrel_card bg-danger text-white">
          <img class="pic_width" v-bind:src="squirrel.img" />

          <div class="px-3 py-1">
            <h3 class="pt-2 md-w-25">{{ squirrel.id }}</h3>
            <p class="w-100 fw-bold fs-6">{{ squirrel.name }}</p>
          </div>
        </div>
      </router-link>
    </div>

  </div>
</template>

<style scoped>
@media screen and (max-width: 500px) {
  p {
    text-align: center;
  }
}
</style>
