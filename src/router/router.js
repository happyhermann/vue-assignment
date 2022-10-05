import { createWebHistory, createRouter } from "vue-router";

import MyHome from "../components/MyHome";
import SignIn from "../components/SignIn";
import MyBoss from "../components/MyBoss";
import MyPartner from "../components/MyPartner";

const routes = [
  {
    path: "/",
    component: MyHome,
  },
  {
    path: "/signin",
    component: SignIn,
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

// 라우팅 패스, 컴포넌트 등 정의

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
