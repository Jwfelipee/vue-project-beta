import { createRouter, createWebHistory } from "vue-router";
import Home from "../module/Home/View/Home.vue";
import Login from "../module/Login/view/Login.vue";
import Layout from "../components/Layout.vue";
import ListCollaborator from "../module/Collaborator/sub-module/list/ListCollaborator.vue";
import FormCollaborator from "../module/Collaborator/sub-module/form/FormCollaborator.vue";

const routes = [
  {
    path: "/",
    component: <Login />,
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
  {
    path: "/collaborator",
    component: (
      <Layout>
        <ListCollaborator />
      </Layout>
    ),
  },
  {
    path: "/collaborator/form",
    component: (
      <Layout>
        <FormCollaborator />
      </Layout>
    ),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
