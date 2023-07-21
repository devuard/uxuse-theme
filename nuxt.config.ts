export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
  ],
  css: [
    '@unocss/reset/tailwind.css',
  ],
  typescript: {
    includeWorkspace: true
  }
})
