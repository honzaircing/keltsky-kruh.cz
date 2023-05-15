import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PerformesrsDetail from "@/components/PerformersDetail.vue";
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
        scrollTo: "#about",
        "og:title": "O Festivalu - Keltský kruh",
        "og:description": "Kdo na festivalu pracuje",
      },
    },
    {
      path: "/poradatel",
      name: "poradatel",
      component: HomeView,
      meta: {
        title: "Pořadatel",
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
      path: "/vystupujici",
      name: "vystupujici",
      component: HomeView,
      meta: {
        title: "Vystupujici",
        scrollTo: "#speakers",
        "og:title": "Vystupující - Keltský kruh",
        "og:description": "Kdo je kdo?",
      },
    },
    {
      path: "/vystupujici/:performer",
      name: "vystupujici-detail",
      component: PerformesrsDetail,
      meta: {
        title: "Vystupujici",
        scrollTo: "#speakers-details",
        "og:title": "Vystupující - Keltský kruh",
        "og:description": "Kdo je kdo?",
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
        "og:description": "Předprodej vstupenek za zvýhodněnou cenu",
      },
    },
    {
      path: "/informace",
      name: "informace",
      component: HomeView,
      meta: {
        title: "Informace",
        scrollTo: "#info",
        "og:title": "Informace - Keltský kruh",
        "og:description": "Co je dobré ještě vědět",
      },
    },
    {
      path: "/kontakt",
      name: "kontakt",
      component: HomeView,
      meta: {
        title: "Kontakt",
        scrollTo: "#contact",
        "og:title": "Kontakt - Keltský kruh",
        "og:description": "Kam se obrátit",
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
        "og:description": "Předprodej vstupenek za zvýhodněnou cenu",
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.meta.scrollTo) {
      return { el: to.meta.scrollTo, top: 20 };
    }
  },
});

router.beforeEach((to, from, next) => {
  //document.title = `${to.meta.title} - Keltský kruh - Celtic Circle`;
  changeMetaTags(to.meta);

  next();
});

export default router;
