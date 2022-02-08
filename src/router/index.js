import { createRouter, createWebHistory } from "vue-router";
import Home from "../module/Home/View/Home.vue";
import Login from "../module/Login/view/Login.vue";

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
