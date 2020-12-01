import VueRouter from 'vue-router'
import Vue from 'vue'
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter)

// transitionName = 'slide' | 'zoom'

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    props: true
  },
  {
    path: "/destination/:slug",
    name: "destination",
    component: () => import(/* webpackChunkName: "hue" */ '../views/Destination.vue'),
    props: true,
    meta: { transitionName: `slide` },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
    meta: { transitionName: `slide` },
    props: true
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
