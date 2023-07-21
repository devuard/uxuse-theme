 <script setup lang="ts" generic="T">
const props = defineProps<{
  modelValue: T
  value: any
  name: string
  label?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [T]
}>()

const mValue = useVModel(props, 'modelValue', emit)

</script>

<template>
  <label class="radio">
    <input v-model="mValue" :value="value" class="radio-input" type="radio" :name="name">
    <span class="radio-toggle">
      <div class="radio-icon"></div>
    </span>
    <span v-if="label" class="radio-label">{{ label }}</span>
  </label>
</template>

<style scoped>
.radio {
  display: inline-flex;
  gap: 12px;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}

.radio-input {
  position: absolute;
  top: -100vh;
  left: -100vw;
}

.radio-toggle {
  display: grid;
  place-content: center;
  place-items: center;
  background-color: var(--colors-inputs, #00030a);
  border-radius: 10px;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  position: relative;
  box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.1),
    inset 0px 1px 0px 0px rgba(0, 0, 0, 0.5);
}

.radio-icon {
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 9px;
background: var(--colors-primary, #2BBCAB);
box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.50) inset, 0px 1px 0px 0px rgba(0, 0, 0, 0.50);
  opacity: 0;
  transform-origin: 50% 50%;
  transform: scale(0.25);
  transition: all 0.2s ease-in-out;
}

.radio-input:checked + .radio-toggle .radio-icon {
  opacity: 1;
  transform: scale(1);
}

.radio-label {
  font-size: 12px;
  padding-right: 12px;
}

</style>
