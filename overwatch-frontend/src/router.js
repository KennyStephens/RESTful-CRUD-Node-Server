import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Second from "../views/Second.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/second",
      name: "second",
      component: Second
    }
  ]
});