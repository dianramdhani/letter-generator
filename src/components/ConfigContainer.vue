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
        <div class="accordion-body">
          <label for="template" class="form-label">Template</label>
          <textarea class="form-control" id="template" rows="3"></textarea>
          <div class="form-text">
            Add <span class="text-primary">&lt;company&gt;</span> for company
            name template.
            <br />
            Add <span class="text-info">&lt;position&gt;</span> for job position
            template.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfigContainer",
};
</script>