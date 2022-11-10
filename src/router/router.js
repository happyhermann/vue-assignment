import { createWebHistory, createRouter } from "vue-router";

import MyHome from "../components/MyHome";
import SignIn from "../components/SignIn";
import MyBoss from "../components/MyBoss";
import MyPartner from "../components/MyPartner";
import Login from "../common/Login";

const routes = [
      {
            path: "/",
            name: "MyHome",
            component: MyHome,
      },
      {
            path: "/signin",
            name: "SignIn",
            component: SignIn,
      },
      {
            path: "/boss",
            name: "MyBoss",
            component: MyBoss,
      },
      {
            path: `/partner/:id`,
            name: "MyPartner",
            component: MyPartner,
      },
      {
            path: `/login`,
            name: "Login",
            component: Login,
      },
];

// 라우팅 패스, 컴포넌트 등 정의

const router = createRouter({
      history: createWebHistory(),
      routes,
});

export default router;
