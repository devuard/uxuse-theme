<script setup lang="ts">
const props = defineProps<{
  color?: 'primary' | 'secondary'
}>();

const emits = defineEmits(['click']);

const handleClick = () => {
  emits('click');
};
</script>

<template>
  <button :class="['button', color && `button-${color}`]" @click="handleClick">
      <slot />
  </button>
</template>

<style scoped>
.button {
  --color-background: var(--color-controls, #424245);
  --color-background-hover: var(--color-controls-fade, hsl(240, 2%, 21%));
}

.button {
  display: inline-block;
  border-radius: 4px;
  padding: 0 16px;
  height: 32px;
  /* position: relative; */
  background-color: var(--color-background, #424245);
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.25),
    inset 0px 1px 0px 0px rgba(255, 255, 255, 0.25);
  font-size: 12px;
  font-weight: 500;
  color: var(--colors-text, #e7e7e7);
  transition: background-color 0.2s ease-in-out;
}

.button:hover {
  background-color: var(--color-background-hover, --color-background);
}

.button-primary {
  --color-background: var(--color-primary, #2bbcab);
  --color-background-hover: var(--color-primary-fade, hsl(173, 63%, 35%));
}

.button-secondary {
  --color-background: var(--color-secondary, #8370ff);
  --color-background-hover: var(--color-secondary-fade, hsl(248, 100%, 62%));
}
</style>
