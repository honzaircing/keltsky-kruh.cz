import "@/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "@/assets/css/style.css";

import "bootstrap/dist/js/bootstrap.js";
import AOS from "aos";
import "aos/dist/aos.css";

import VueScrollTo from "vue-scrollto";

import VueEasyLightbox from "vue-easy-lightbox";

import { createApp } from "vue";
import { renderToString } from "vue/server-renderer";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const aos: any = AOS.init();

app.use(aos);

app.use(VueScrollTo);

app.use(VueEasyLightbox);

app.use(createPinia());
app.use(router);

app.mount("#app");

renderToString(app).then((html) => {});
