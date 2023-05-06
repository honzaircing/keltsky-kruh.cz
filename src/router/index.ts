import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { changeMetaTags } from "@/utils/utils";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Home",
        scrollTo: "#hero",
        "og:title": "Festivalu - Keltský kruh",
        "og:description":
          "Jedinečný festival keltské hudby a kultury na Vodním hradě Budyně nad Ohří",
      },
    },
    {
      path: "/o-festivalu",
      name: "about",
      component: HomeView,
      meta: {
        title: "O Festivalu",
        scrollTo: "#about-info",
        "og:title": "O Festivalu - Keltský kruh",
        "og:description": "Kdo na festivalu pracuje",
      },
    },
    {
      path: "/o-festivalu-detail",
      name: "about-datail",
      component: () => import("../views/AboutView.vue"),
      meta: {
        title: "O Festivalu",
        scrollTo: "#about-info",
        "og:title": "O Festivalu - Keltský kruh",
        "og:description": "S jakými myšlenkami festival tvoříme",
      },
    },
    {
      path: "/program",
      name: "program",
      component: HomeView,
      meta: {
        title: "Program",
        scrollTo: "#schedule",
        "og:title": "Program - Keltský kruh",
        "og:description": "Program je na 99% hotov",
      },
    },
    {
      path: "/vstupenky",
      name: "vstupenky",
      component: HomeView,
      meta: {
        title: "Vstupenky",
        scrollTo: "#buy-tickets",
        "og:title": "Vstupenky - Keltský kruh",
        "og:description": "Předprojed vstupenek za zvýhodněnou cenu",
      },
    },
    {
      path: "/#buy-tickests",
      name: "vstupenky2",
      component: HomeView,
      meta: {
        title: "Vstupenky",
        scrollTo: "#buy-tickets",
        "og:title": "Vstupenky - Keltský kruh",
        "og:description": "Předprojed vstupenek za zvýhodněnou cenu",
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.meta.scrollTo) {
      return { el: to.meta.scrollTo, top: 15 };
    }
  },
});

router.beforeEach((to, from, next) => {
  //document.title = `${to.meta.title} - Keltský kruh - Celtic Circle`;
  changeMetaTags(to.meta);

  next();
});

export default router;
