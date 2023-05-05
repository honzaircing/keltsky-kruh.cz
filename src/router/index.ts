import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

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
      },
    },
    {
      path: "/o-festivalu",
      name: "about",
      component: HomeView,
      meta: {
        title: "O Festivalu",
        scrollTo: "#about-info",
      },
    },
    {
      path: "/o-festivalu-detail",
      name: "about-datail",
      component: () => import("../views/AboutView.vue"),
      meta: {
        title: "O Festivalu",
        scrollTo: "#schedule",
      },
    },
    {
      path: "/program",
      name: "program",
      component: HomeView,
      meta: {
        title: "Program",
        scrollTo: "#schedule",
      },
    },
    {
      path: "/vstupenky",
      name: "vstupenky",
      component: HomeView,
      meta: {
        title: "Vstupenky",
        scrollTo: "#buy-tickets",
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
  document.title = `${to.meta.title} - Keltský kruh - Celtic Circle`;
  const tag = document.createElement("meta");
  tag.setAttribute(
    "og:title",
    `${to.meta.title} - Keltský kruh - Celtic Circle`
  );
  document.head.appendChild(tag);
  next();
});

export default router;
