export default defineNuxtConfig({
  ssr: false,
    nitro: {
      preset: 'service-worker'
  },
  app: {
    head: {
      title: 'niklaus iff',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
      ],
    },
  },
  css: [
    '~/assets/css/main.scss',
  ],
  modules: [
    '@nuxt/content',
  ],
  content: {
    apiPrefix: 'content-api',
  },
  target: 'static',
})
