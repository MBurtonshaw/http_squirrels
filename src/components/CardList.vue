<script>
export default {

}
</script>

<template>
  <h1>Squirrels</h1>
  <div id='squirrel_cards' class="row justify-content-evenly">

    <div v-for="squirrel in $store.state.squirrels" v-bind:key="squirrel.id" v-bind:id="squirrel.id"
      class="squirrel col py-2">
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
@keyframes enter-animation {
  0% {
    transform: translateY(100px);
  }

  100% {
    transform: translateY(0);
  }
}

.http_card {
  animation-name: enter-animation;
  animation-duration: 0.7s;
}

@media screen and (max-width: 500px) {
  .squirrel {
    padding: 1em;
  }

  p {
    text-align: center;
  }

  .squirrel_card {
    margin: auto;
  }

  .bg-body-secondary {
    text-align: center;
  }

  h1 {
    text-align: center;
  }

  h3 {
    text-align: center;
  }
}
</style>
