<template>
  <card-layout>
    <div class="card-body">
      <form-job />
      <letter-result />
    </div>
    <config-container />
  </card-layout>
</template>

<script>
import ConfigContainer from "./components/ConfigContainer.vue";
import FormJob from "./components/FormJob.vue";
import LetterResult from "./components/LetterResult.vue";
import CardLayout from "./layouts/CardLayout.vue";

export default {
  name: "App",
  components: {
    ConfigContainer,
    FormJob,
    LetterResult,
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
