<!-- eslint-disable -->

<template>
      <div class="app-main">
            <header class="allsu-title">
                  <h2>올수</h2>
                  <div class="allsu-help">
                        <i class="mdi mdi-information-outline"></i>
                        <span>도움이 필요해요</span>
                  </div>
            </header>
            <router-link to="/signin">
                  <section class="container container1">
                        <div class="main"></div>
                  </section>
            </router-link>
            <router-link to="/signin">
                  <section class="container container2">
                        <div class="main"></div>
                  </section>
            </router-link>
            <router-link to="/login">
                  <section class="container container3">
                        <div class="main"></div>
                  </section>
            </router-link>
            <MainSlider />
      </div>
</template>

<script>
import MainSlider from "../common/MainSlider.vue";

export default {
      name: "MyHome",

      components: {
            MainSlider,
      },

      data: () => ({}),

      // 라우터 마운트되면 자동으로 로딩 띄우는 useEffect같은 것 만들기
};
</script>

<style>
.app-main {
      width: 100%;
      padding: 15px;
}
.container {
      margin-bottom: 15px;
}

.container1 > .main {
      background-image: url("../assets/boss.png");
      background-repeat: no-repeat;
      background-size: cover;
      padding: 70px 0;
}

.container2 > .main {
      background-image: url("../assets/partner.png");
      background-repeat: no-repeat;
      background-size: cover;
      padding: 70px 0;
}

.container3 > .main {
      background-image: url("../assets/normal.png");
      background-repeat: no-repeat;
      background-size: cover;
      padding: 70px 0;
}

.main {
      background-color: white;
      padding: 10px;
      border-radius: 15px;
      width: 100%;
}

nav {
      background: linear-gradient(-80deg, #f4b037 37%, #f0ebd9 20%);
      padding: 30px 20px;
}

nav {
      display: flex;
      justify-content: space-between;
}

ul {
      display: flex;
      justify-content: space-around;
}

a {
      text-decoration: none;
      color: inherit;
}

i {
      font-size: 28px;
}
/* right arrow icons */

h3:first-child {
      font-size: 15px;
      text-align: center;
      margin-bottom: 10px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.25);
      padding-bottom: 5px;
}

.list {
      display: flex;
      justify-content: space-between;
}

.list-left {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      margin-right: 19px;
}

.list-texts > span {
      font-size: 13px;
      font-weight: 700;
      display: block;
      margin-bottom: 3px;
}
.list-texts p {
      font-size: 10px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.4);
}

.list-img {
      width: 67px;
      height: 80px;
      margin: 0 auto;
      margin-bottom: 15px;
}
.img {
      width: 100%;
}

.button {
      display: flex;
      flex-direction: row;
      font-size: 9px;
      justify-content: center;
      align-items: center;
      padding: 6px 10px;
      gap: 10px;

      margin: 0 auto;
      margin-top: 10px;
      /* Amarillo Oro */

      background: black;
      border-radius: 8px;
      font-weight: 800;
      margin-top: 5px;

      /* Inside auto layout */
      color: white;
      flex: none;
      order: 2;
      flex-grow: 0;
}
</style>
