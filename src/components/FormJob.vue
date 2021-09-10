<template>
  <div class="mb-3">
    <label for="position" class="form-label">Job Position</label>
    <input
      type="email"
      class="form-control"
      id="position"
      placeholder="Front-end Developer"
    />
  </div>
  <div class="mb-3">
    <label for="company" class="form-label">Company Name</label>
    <input
      type="email"
      class="form-control"
      id="company"
      placeholder="PT. XYZ"
    />
  </div>
  <button class="btn btn-primary">Generate</button>
</template>

<script>
export default {
  name: "FormJob",
};
</script>