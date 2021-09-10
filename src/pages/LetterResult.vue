<template>
  <div class="mb-3">
    <label for="template" class="form-label">Letter</label>
    <textarea
      class="form-control"
      id="template"
      rows="3"
      v-model="letter"
    ></textarea>
  </div>
  <div class="alert alert-primary" role="alert" v-if="copySuccess">
    Copy success!
  </div>
  <button class="btn btn-primary mb-1" @click="copy">Copy</button>
  <router-link class="btn btn-secondary" to="/">Back</router-link>
</template>

<script>
import { copyText } from "vue3-clipboard";
import {} from "../store";
import { GET_LETTER, TEMPLATE_IS_VALID } from "../store/getter-types";

export default {
  name: "LetterResult",
  data() {
    return {
      letter: "",
      copySuccess: false,
    };
  },
  mounted() {
    if (this.$store.getters[TEMPLATE_IS_VALID]) {
      this.letter = this.$store.getters[GET_LETTER];
    }
  },
  methods: {
    copy() {
      copyText(this.letter, undefined, (error) => {
        this.copySuccess = !error;
        setTimeout(() => (this.copySuccess = false), 3000);
      });
    },
  },
};
</script>