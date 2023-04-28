import "@/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "@/assets/css/style.css";

import "bootstrap/dist/js/bootstrap.js";
import AOS from "aos";
import "aos/dist/aos.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const aos: any = AOS.init();

app.use(aos);

app.use(createPinia());
app.use(router);

app.mount("#app");
