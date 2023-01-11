// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        API_URL: "Some api URL right there"
    },
    css: ["bootstrap/dist/css/bootstrap.min.css"], // add
    vite: {
        define: {
            "process.env.DEBUG": false,
        },
    },
});