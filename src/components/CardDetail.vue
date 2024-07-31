<script>
export default {
  props: ['squirrel'],
}
</script>

<template>
  <div class="w-50 m-auto">
    <div class="container w-100 m-auto">
      <div class="py-2">
        <router-link to="/">Back</router-link>
      </div>
      <h1 class="text-center w-100 p-2 m-auto">{{ squirrel.id }} {{ squirrel.name }}</h1>
      <div class="p-5 bg-dark">
        <img class="w-100" v-bind:src="squirrel.img" />
      </div>
      <h2 class="mt-3 py-2">Description</h2>
      <div class="py-2">
      <p>
        {{ squirrel.description }}
      </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
