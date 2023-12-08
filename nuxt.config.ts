const { OWM_API_KEY } = process.env

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      owmApiKey: OWM_API_KEY
    }
  }
})
