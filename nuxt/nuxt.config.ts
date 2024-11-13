// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@unocss/nuxt",
    "@nuxtjs/seo",
    '@nuxt/content',
    "@nuxt/eslint",
  ],
  site: {
    url: "https://niklausiff.ch",
    name: `niklaus iff`,
    description: `get well soon`,
    defaultLocale: "en",
  },
  ssr: false,
})