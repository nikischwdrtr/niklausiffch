export default defineNuxtConfig({
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
    base: 'https://raw.githubusercontent.com/nikischwdrtr/niklausiffch_api/main'
  },
  target: 'static',
  ssr: true,
})
