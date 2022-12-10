// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        pageTransition: {name: 'page', mode: 'out-in'},
        head: {
            link: [{
                rel: "stylesheet",
                type: "text/css",
                href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
            }]
        }
    },
    runtimeConfig: {
        API_URL: "https://someurl.ru"
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/scss/_final_exporter.scss" as *;'
                }
            }
        }
    },

})