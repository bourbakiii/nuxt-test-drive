// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        API_URL: "https://someurl.ru"
    },
    app: {
        pageTransition: {name: 'page', mode: 'out-in'}
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/_variables.scss" as *;'
                }
            }
        }
    }
})