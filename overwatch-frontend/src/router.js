import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import OwAddCharacter from "../views/OwAddCharacter.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/add-character",
      name: "addCharacter",
      component: OwAddCharacter
    }
  ]
});