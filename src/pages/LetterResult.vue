<template>
  <div class="mb-3">
    <label for="template" class="form-label">Letter</label>
    <textarea class="form-control" id="template" rows="3"></textarea>
  </div>
  <div class="alert alert-primary" role="alert">Copy success!</div>
  <button class="btn btn-primary mb-1">Copy</button>
  <router-link class="btn btn-secondary" to="/">Back</router-link>
</template>

<script>
export default {
  name: "LetterResult",
};
</script>