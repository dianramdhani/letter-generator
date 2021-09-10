<template>
  <card-layout>
    <div class="card-body"><router-view></router-view></div>
    <config-container />
  </card-layout>
</template>

<script>
import ConfigContainer from "./components/ConfigContainer.vue";
import CardLayout from "./layouts/CardLayout.vue";

export default {
  name: "App",
  components: {
    ConfigContainer,
    CardLayout,
  },
};
</script>

<style>
.card {
  max-width: 30rem;
}

.btn {
  width: 100%;
}

small {
  font-size: 0.8rem;
}
</style>
