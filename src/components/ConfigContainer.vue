<template>
  <div class="accordion accordion-flush" id="configContainer">
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingOne">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded="false"
          aria-controls="flush-collapseOne"
        >
          Setup Template
        </button>
      </h2>
      <div
        id="flush-collapseOne"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingOne"
        data-bs-parent="#configContainer"
      >
        <form class="accordion-body" @submit.prevent="setTemplate">
          <div class="mb-3">
            <label for="template" class="form-label">Template</label>
            <textarea
              class="form-control"
              id="template"
              rows="3"
              v-model="template"
              required
            ></textarea>
            <div class="form-text">
              Add <span class="text-primary">&lt;company&gt;</span> for company
              name template.
              <br />
              Add <span class="text-info">&lt;position&gt;</span> for job
              position template.
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Set</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { SET_TEMPLATE } from "../store/mutation-types";

export default {
  name: "ConfigContainer",
  data() {
    return {
      template: "",
    };
  },
  mounted() {
    this.template = this.$store.state.template;
    this.$watch(
      () => this.$store.state.template,
      (template) => (this.template = template)
    );
  },
  methods: {
    setTemplate() {
      this.$store.commit(SET_TEMPLATE, this.template);
    },
  },
};
</script>