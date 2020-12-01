import VueRouter from 'vue-router'
import Vue from 'vue'
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: "/hue",
    name: "hue",
    component: () => import(/* webpackChunkName: "about" */ '../views/Hue.vue'),
    meta: { transitionName: `slide` },
  },
  {
    path: "/hanoi",
    name: "hanoi",
    component: () => import(/* webpackChunkName: "about" */ '../views/Hanoi.vue'),
    meta: { transitionName: `slide` },
  },
  {
    path: "/saigon",
    name: "saigon",
    component: () => import(/* webpackChunkName: "about" */ '../views/Saigon.vue'),
    meta: { transitionName: `slide` },
  },
  {

    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
