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
    path: "/brazil",
    name: "brazil",
    component: () => import(/* webpackChunkName: "about" */ '../views/Brazil.vue')
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
