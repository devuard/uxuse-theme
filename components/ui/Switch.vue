<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
  label?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [boolean]
}>()

const value = useVModel(props, 'modelValue', emit)

</script>

<template>
  <label class="switch">
    <input v-model="value" class="switch-checkbox" type="checkbox" name="" id="">
    <span class="switch-toggle"></span>
    <span v-if="label" class="switch-label">{{ label }}</span>
  </label>
</template>

<style scoped>
.switch-checkbox {
  position: absolute;
  top: -100vh;
  left: -100vw;
}

.switch {
  display: inline-flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;
}

.switch-toggle {
  display: block;
  background: var(--colors-inputs, #00030a);
  border-radius: 12px;
  width: 36px;
  height: 22px;
  padding: 3px;
  box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.1),
    inset 0px 1px 0px 0px rgba(0, 0, 0, 0.5);
}
.switch-toggle::before {
  content: '';
  display: block;
  background-color: var(--colors-controls, #424245);
  border-radius: 9px;
  width: 16px;
  height: 16px;
  box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.2),
    0px 1px 0px 0px rgba(0, 0, 0, 0.5);
    transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;
}

.switch-checkbox:checked + .switch-toggle::before {
  transform: translateX(14px);
  background-color: var(--colors-primary, #2BBCAB);
}

.switch-label {
  font-size: 12px;
  padding-right: 12px;
}
</style>
