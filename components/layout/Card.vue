<script setup lang="ts">
</script>

<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
  padding: 16px 15px;
  border-radius: 8px;
  background: var(--colors-bg-secondary, #1D1F22);
}
</style>