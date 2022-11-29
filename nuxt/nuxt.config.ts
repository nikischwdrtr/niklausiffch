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
  target: 'static',
  ssr: true,
})
