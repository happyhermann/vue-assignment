<!-- eslint-disable -->
<<<<<<< Updated upstream
  <template>
  <section class="container">
    <h3>기타, 가입유형을 정확하게 선택해주세요</h3>
    <div class="main">
      <ul>
        <router-link to="/signin">
          <li class="list">
          <div class="list-left">   
            <div class="list-img">        
               <img class="img" src="http://175.118.126.222/m/img/avatar1.ecd893ee.png" alt="사장님 아이콘" />
            </div>
            <div class="list-texts">
              <span>사장님</span>
              <p>폐식용유(동물성유지)</p>
              <p>배출을 원하시나요?</p>
            </div>
          </div>
          <div class="list-arrow">
            <i class="mdi mdi-chevron-right"></i>
          </div>
        </li>
        </router-link>
        <router-link to="/signin">
          <li class="list">
            <div class="list-left">   
                <div class="list-img">   
                  <img class="img" src="http://175.118.126.222/m/img/avatar2.c7eb09db.png" alt="수거 파트너 아이콘" />
                </div>
                <div class="list-texts">
                  <span>수거파트너(중상)</span>
                  <p>폐식용유(동물성유지)</p>
                  <p>수거를 원하시나요?</p>
                </div>
              </div>
            <div class="list-arrow">
                <i class="mdi mdi-chevron-right"></i>
            </div>
          </li>
         </router-link> 
        <li class="list">
          <div class="list-left">   
              <div class="list-img">    
                <img class="img" src="http://175.118.126.222/m/img/avatar3.35075558.png" alt="협력파트너 아이콘" />
              </div>
              <div class="list-texts">
                <span>협력파트너(좌상)</span>
                <p>수거협력사</p>1asd2
              </div>
            </div>
            <div class="list-arrow">
              <i class="mdi mdi-chevron-right"></i>
=======
<template>
      <section class="container franchise">
            <MainSlider />
      </section>
      <!-- <section class="container">
            <div class="main main2">
                  <h3>사장님/수거파트너, 협력파트너</h3>
                  <nav>
                        <router-link to="/signin">
                              <ul>
                                    <li class="list">
                                          <div class="list-left">
                                                <div class="list-img">
                                                      <img
                                                            class="img"
                                                            src="http://175.118.126.222/m/img/avatar1.ecd893ee.png"
                                                            alt="사장님 아이콘"
                                                      />
                                                </div>
                                                <div class="list-texts">
                                                      <span
                                                            style="
                                                                  margin-bottom: 22px;
                                                            "
                                                            >사장님</span
                                                      >
                                                      <p></p>
                                                </div>
                                          </div>
                                          <div class="list-arrow"></div>
                                    </li>
                                    <li class="list">
                                          <div class="list-left">
                                                <div class="list-img">
                                                      <img
                                                            class="img"
                                                            src="http://175.118.126.222/m/img/avatar2.c7eb09db.png"
                                                            alt="수거 파트너 아이콘"
                                                      />
                                                </div>
                                                <div class="list-texts">
                                                      <span
                                                            >수거파트너
                                                            <br />(중상)</span
                                                      >
                                                </div>
                                          </div>
                                    </li>
                              </ul>
                        </router-link>

                        <router-link to="/signin">
                              <ul>
                                    <li class="list">
                                          <div class="list-left">
                                                <div class="list-img">
                                                      <img
                                                            class="img"
                                                            src="http://175.118.126.222/m/img/avatar3.35075558.png"
                                                            alt="협력파트너 아이콘"
                                                      />
                                                </div>
                                                <div class="list-texts">
                                                      <span
                                                            >협력파트너
                                                            <br />
                                                            (좌상)</span
                                                      >
                                                </div>
                                          </div>
                                    </li>
                              </ul>
                        </router-link>
                  </nav>
>>>>>>> Stashed changes
            </div>
      </section> -->

      <!-- <section class="container container3">
            <div class="main"></div>
      </section> -->
      <BannerLogin />
</template>

<script>
import MainSlider from "../common/MainSlider.vue";
import BannerLogin from "./BannerLogin.vue";

export default {
      name: "MyHome",

      components: {
            MainSlider,
            BannerLogin,
      },

      data: () => ({}),

      // 라우터 마운트되면 자동으로 로딩 띄우는 useEffect같은 것 만들기
};
</script>

<style>
.container {
      width: 100%;
      padding: 6px 8px;
      background-color: white;
}

.container1 > main {
      padding: 10px 30px;
}

.container3 > .main {
      background-image: url("https://img.freepik.com/premium-vector/co-neutral-balance-concept_118813-3413.jpg?w=2000");
      background-repeat: no-repeat;
      background-size: cover;
      padding: 85px 0;
}

.main {
      background-color: white;
      padding: 10px;
      border-radius: 15px;
      width: 100vw;
      margin: 0 auto;
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
      margin-top: 5spx;

      /* Inside auto layout */
      color: white;
      flex: none;
      order: 2;
      flex-grow: 0;
}
</style>
