import "./bootstrap";
import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";

// Pinia
import { createPinia } from "pinia";
const pinia = createPinia();

// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: "mdi",
    },
    theme: {
        defaultTheme: "light",
        themes: {
            light: {
                colors: {
                    primary: "#ff521d",
                },
            },
        },
    },
});

createApp(App)
    .use(pinia)     
    .use(router)
    .use(vuetify)
    .mount("#app");
