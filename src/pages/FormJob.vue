<template>
  <div class="alert alert-warning" role="alert" v-if="!templateIsSet">
    Please set template before generate letter!
  </div>
  <form ref="formJob" @submit.prevent="setJob">
    <div class="mb-3">
      <label for="company" class="form-label">Company Name</label>
      <input
        type="text"
        class="form-control"
        id="company"
        placeholder="PT. XYZ"
        required
        v-model="company"
      />
    </div>
    <div class="mb-3">
      <label for="position" class="form-label">Job Position</label>
      <input
        type="text"
        class="form-control"
        id="position"
        placeholder="Front-end Developer"
        required
        v-model="position"
      />
    </div>
    <button type="submit" class="btn btn-primary">Generate</button>
  </form>
</template>

<script>
import { SET_JOB } from "../store/mutation-types";
import { TEMPLATE_IS_VALID } from "../store/getter-types";

export default {
  name: "FormJob",
  data() {
    return {
      company: "",
      position: "",
      templateIsSet: false,
    };
  },
  mounted() {
    const toggleForm = () => {
      this.templateIsSet = this.$store.getters[TEMPLATE_IS_VALID];
      const form = this.$refs.formJob;
      const inputs = form.getElementsByTagName("input");
      inputs.forEach((input) => {
        input.disabled = !this.templateIsSet;
      });
      const button = form.querySelector('button[type="submit"]');
      button.disabled = !this.templateIsSet;
    };
    toggleForm();
    this.$watch(() => this.$store.state.template, toggleForm);
  },
  methods: {
    setJob() {
      this.$store.commit(SET_JOB, {
        company: this.company,
        position: this.position,
      });
      this.$router.push("/letter-result");
    },
  },
};
</script>