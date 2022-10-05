import { createWebHistory, createRouter } from "vue-router";

import HelloWorld from "../components/HelloWorld";
import MyBoss from "../components/MyBoss";
import MyPartner from "../components/MyPartner";

const routes = [
  {
    path: "/",
    component: HelloWorld,
  },
  {
    path: "/boss",
    component: MyBoss,
  },
  {
    path: "/partner",
    component: MyPartner,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
