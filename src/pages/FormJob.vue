<template>
  <form>
    <div class="mb-3">
      <label for="company" class="form-label">Company Name</label>
      <input
        type="email"
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
        type="email"
        class="form-control"
        id="position"
        placeholder="Front-end Developer"
        required
        v-model="position"
      />
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="setJob">
      Generate
    </button>
  </form>
</template>

<script>
import { SET_JOB } from "../store/mutation-types";

export default {
  name: "FormJob",
  data() {
    return {
      company: "",
      position: "",
    };
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