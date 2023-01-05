export default defineNuxtConfig({
  app: {
    head: {
      title: 'niklaus iff',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
      ],
    },
  },
  modules: [
    '@vueuse/nuxt',
  ],
  css: [
    '~/assets/css/main.scss',
  ],
  ssr: false,
})
