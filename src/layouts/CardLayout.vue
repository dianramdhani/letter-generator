<template>
  <div class="container py-5">
    <div class="card m-auto">
      <h4 class="card-header d-flex justify-content-between">
        Letter Generator <small>2021</small>
      </h4>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "CardLayout",
};
</script>