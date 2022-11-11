import { createWebHistory, createRouter } from "vue-router";

import MyHome from "../components/MyHome";
import SignIn from "../components/SignIn";
import MyBoss from "../components/MyBoss";
import MyPartner from "../components/MyPartner";

// 탄소중립 라우터
import Login from "../carbon/Login";
import Barcode from "../carbon/Barcode";
import Valid from "../carbon/Valid";

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
      {
            path: `/barcode`,
            name: "Barcode",
            component: Barcode,
      },
      {
            path: `/valid`,
            name: "Valid",
            component: Valid,
      },
];

// 라우팅 패스, 컴포넌트 등 정의

const router = createRouter({
      history: createWebHistory(),
      routes,
      scrollBehavior(to, from, savedPosition) {
            return { top: 0 };
            //원하는 위치 설정
      },
});

export default router;
