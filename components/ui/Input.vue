<script setup lang="ts" generic="T">
const props = defineProps<{
  modelValue: T
  placeholder?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [T]
}>()

const value = useVModel(props, 'modelValue', emit)
</script>

<template>
  <input class="input" v-model="value" :placeholder="placeholder" />
</template>

<style scoped>
.input {
  display: block;
  padding: 0 12px;
  height: 32px;
  border-radius: 4px;
  background: var(--colors-inputs, #00030a);
  box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.1);
  border: none;
  outline: 0;
  font-size: 12px;
}
</style>
