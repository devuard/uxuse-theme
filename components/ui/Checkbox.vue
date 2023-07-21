<script setup lang="ts" generic="T">
const props = defineProps<{
  modelValue: T
  value: any
  name?: string
  label?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [T]
}>()

const mValue = useVModel(props, 'modelValue', emit)

</script>

<template>
  <label class="checkbox">
    <input v-model="mValue" :value="value" class="checkbox-input" type="checkbox" :name="name" id="">
    <span class="checkbox-toggle">
      <svg class="checkbox-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M6.5 12L2 7.5L2.707 6.793L6.5 10.5855L13.293 3.793L14 4.5L6.5 12Z" fill="#2BBCAB"/>
      </svg>
    </span>
    <span v-if="label" class="checkbox-label">{{ label }}</span>
  </label>
</template>

<style scoped>
.checkbox {
  display: inline-flex;
  gap: 12px;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}

.checkbox-input {
  position: absolute;
  top: -100vh;
  left: -100vw;
}

.checkbox-toggle {
  display: grid;
  place-content: center;
  place-items: center;
  background-color: var(--colors-inputs, #00030a);
  border-radius: 4px;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  position: relative;
  box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.1),
    inset 0px 1px 0px 0px rgba(0, 0, 0, 0.5);
}

.checkbox-icon {
  opacity: 0;
  transform-origin: 50% 50%;
  transform: scale(0.25);
  transition: all 0.2s ease-in-out;
}

.checkbox-input:checked + .checkbox-toggle .checkbox-icon {
  opacity: 1;
  transform: scale(1);
}

.checkbox-label {
  font-size: 12px;
  padding-right: 12px;
}

</style>
