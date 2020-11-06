import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Brazil from './views/Brazil'

Vue.use(Router);

export default new Router({
  routes: [ 
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/brazil",
      name: "brazil",
      component: Brazil
    }
  ]
})

