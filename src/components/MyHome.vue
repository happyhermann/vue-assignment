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
                        <div class="image-box">
                              <img
                              class="image"
                             :src="require(`../assets/boss.png`)"
                             alt="사장님 버튼" />
                        </div>
                  </section>
            </router-link>
            <router-link to="/signin">
                  <section class="container container2">
                          <div class="image-box">
                              <img
                              class="image" 
                              :src="require(`../assets/partner.png`)"
                             alt="사장님 버튼" />
                        </div>
                  </section>
            </router-link>
            <router-link to="/login">
                  <section class="container container3">
                          <div class="image-box">
                              <img
                              class="image"
                             :src="require(`../assets/normal.png`)"
                             alt="사장님 버튼" />
                        </div>
                  </section>
            </router-link>
            <!-- <MainSlider /> -->
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
      padding: 50px 40px;
}

.allsu-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 17px;

}

.allsu-title > h2 {
      font-size: 24px;
}

.allsu-help {
      display: flex;
      
}

.allsu-help > i {
      font-size: 13px;
      margin-right: 5px;
      font-weight: 500;
      line-height: 19px;

}

.allsu-help > span {
      font-size: 14px;
      font-weight: 500;
}


.container {
      margin-bottom: 13px;
}


.container3 {
      margin-bottom: 20% ;
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

.img-box {
      width: 320px;
      height: auto;
      margin: 0;
}
 
.image {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0;
     
}

 
</style>
