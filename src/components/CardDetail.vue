<script>
export default {
  props: ['squirrel'],
}
</script>

<template>
  <div id="main_detail" class="m-auto">
    <div class="container w-100 m-auto">
      <div class="py-2 text-center">
        <router-link to="/">Back</router-link>
      </div>
      <h1 class="text-center w-100 p-2 m-auto">{{ squirrel.id }} {{ squirrel.name }}</h1>
      <div class="p-1 md-p-5 bg-dark">
        <img class="w-100" v-bind:src="squirrel.img" />
      </div>
      <h2 class="mt-3 py-2">Description</h2>
      <div class="py-2">
      <p>
        {{ squirrel.description }}
      </p>
      </div>
    </div>
    <div class="pb-4 text-center">
        <router-link to="/">Back</router-link>
      </div>
  </div>
</template>

<style scoped>
  #main_detail {
    width: 50%;
  }
@media screen and (max-width: 500px) {
  #main_detail {
    width: 80%;
  }
}
</style>
