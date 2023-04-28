import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/o-festivalu',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'O Festivalu'
      }
    },
    {
      path: '/',
      name: 'program',
      component: HomeView,
      meta: {
        title: 'O Festivalu'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // BEFORE:
      // return { selector: to.hash }

      return { el: to.hash }
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Keltský kruh - Celtic Circle`
  next()
})

export default router
