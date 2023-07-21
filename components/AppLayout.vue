<script setup lang="ts">
// const toggleSwitch = ref(false)
// const checkboxValue = ref([])
// const radioValue = ref('one')
// const inputValue = ref('')

const values = reactive({
  switch: false,
  checkbox: ['one'],
  radio: 'one',
  input: 'Hello, im an input',
})
</script>

<template>
  <div class="theme-layout">
    <div class="grid gap-4">
      <button class="bg-primary text-text">hello</button>
      <LayoutCard>
        <div>
          <h3 class="text-3 fw-100">Switch</h3>
          <p class="mb-1 text-3 font-mono text-gray">value: {{ values.switch }}</p>
          <UiSwitch v-model="values.switch" label="true/false switch" />
        </div>
        <hr class="w100% border-gray my2" />
        <div class="mb-2">
          <h3 class="text-3 fw-600">Checkbox</h3>
          <p class="mb-1 text-3 font-mono text-gray">value: {{ values.checkbox }}</p>
          <UiCheckbox v-model="values.checkbox" value="one" label="One" />
          <UiCheckbox v-model="values.checkbox" value="two" label="Two"  />
        </div>
        <div class="mb-2">
          <h3 class="text-3 fw-600">Radio</h3>
          <p class="mb-1 text-3 font-mono text-gray">value: {{ values.radio }}</p>
          <UiRadio v-model="values.radio" value="one" name="field-name" label="One" />
          <UiRadio v-model="values.radio" value="two" name="field-name" label="Two" />
        </div>
        <div class="w100%">
          <h3 class="text-3 fw-600">Input</h3>
          <p class="mb-1 text-3 font-mono text-gray">value: {{ values.input }}</p>
          <UiInput class="w100%" v-model="values.input" placeholder="Placeholder" />
        </div>
      </LayoutCard>

      <LayoutCard>
        <div class="w100%">
            <h3 class="text-3 fw-600 mb-1">Button</h3>
            <div class="grid gap-2">
              <UiButton>Default</UiButton>
              <UiButton color="primary">Primary</UiButton>
              <UiButton color="secondary">Secondary</UiButton>
            </div>
        </div>
      </LayoutCard>
    </div>
    <div class="flex align-stretch w100% h100%">
      <LayoutCard>
        <slot />
      </LayoutCard>
    </div>
  </div>
</template>

<style scoped>
.theme-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  place-content: start;
  gap: 16px;
  padding: 16px;
}
</style>