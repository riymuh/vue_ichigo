// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({app: {
  pageTransition: { name: 'page', mode: 'out-in' },
  head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  devtools: { enabled: true },
})
