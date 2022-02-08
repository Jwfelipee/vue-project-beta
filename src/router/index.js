import { createRouter, createWebHistory } from "vue-router";
import Home from "../module/Home/View/Home.vue";
import Login from "../module/Login/view/Login.vue";
import Layout from "../components/Layout.vue";

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
    component: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
