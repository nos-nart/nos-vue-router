import { createRouter } from 'vue-router'
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: "/brazil",
    name: "brazil",
    component: () => import(/* webpackChunkName: "about" */ '../views/Brazil.vue')
  },
  {

    path: '/:pathMatch(.*)*',
    name:'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  routes
})

export default router
