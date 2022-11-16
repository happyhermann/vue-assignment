<template lang="">
      <section class="container barcode-container">
            <div data-aos="fade-up">
                  <header class="barcode-header">
                        <div class="barcode-header-icons">
                              <i class="mdi mdi-menu"></i>
                        </div>
                        <h4>탄소중립저울</h4>
                        <div class="barcode-header-icons">
                              <i class="mdi mdi-account"></i>
                        </div>
                  </header>
            </div>

            <div class="barcode-top">
                  <p class="barcode-top-text">
                        <strong>백종석</strong>님 <br />안녕하세요!
                  </p>
                  <button class="barcode-top-button" @click="onDispose">
                        배출하기
                  </button>
            </div>
            <div data-aos="fade-up" class="barcode-main-anim">
                  <main class="barcode-main">
                        <ul class="barcode-detail-box">
                              <li class="barcode-detail-list">
                                    <span class="detail-list-title"
                                          >나의 단계</span
                                    >
                                    <span class="detail-list-text"
                                          >새싹 꿈나무</span
                                    >
                              </li>
                              <li class="barcode-detail-list">
                                    <span
                                          class="detail-list-title list-title-second"
                                          >현재 적립금</span
                                    >
                                    <span class="detail-list-text"
                                          >6,520 <span>원</span></span
                                    >
                              </li>
                              <li class="barcode-detail-list">
                                    <span class="detail-list-title"
                                          >누적 포인트</span
                                    >
                                    <span class="detail-list-text"
                                          >100 <span>P</span></span
                                    >
                              </li>
                        </ul>
                        <div class="divider"></div>
                        <div class="card-box">
                              <img
                                    class="card-img"
                                    :src="require(`../assets/card.png`)"
                                    alt="카드 이미지"
                              />
                              <div class="card-details">
                                    <span>탄소중립 포인트 카드</span>
                                    <span>실천 내역</span>
                              </div>
                              <span class="card-number"
                                    >1354 90** **** 7777</span
                              >
                              <img
                                    class="card-button"
                                    :src="require(`../assets/card-button.png`)"
                                    alt="card-button"
                              />
                        </div>
                  </main>
            </div>
            <QR v-if="isDispose" @close="isDispose = false" />
            <!-- <Loading/> -->
      </section>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import Loading from "../carbon/Loading.vue";
import QR from "../carbon/QR.vue";
// ..
AOS.init();

export default {
      components: {
            Loading,
            QR,
      },
      data() {
            return {
                  toggle: false,
                  isLoading: true,
                  isDispose: false,
            };
      },
      methods: {
            onDispose: function () {
                  console.log(`배출하기 클릭`);
                  this.isDispose = true;
                  document.documentElement.style.overflow = "hidden";
            },
            // QR 코드 여는 함수
            // + overflow = hidden으로 스크롤 고정

            autoClose: function () {
                  console.log(`자동 닫기 실행`);

                  setTimeout(() => {
                        this.isDispose = false;
                  }, 30000);
                  console.log(`자동 닫기 완료`);

                  document.documentElement.style.overflow = "auto";
            },

            // + 자동 닫기에서는 원상 복구
      },
};
</script>
<style>
.barcode-container {
      height: 100%;
      background-image: url("../assets/qr-background.png");
      padding: 0px;
      background-size: contain;
}

.barcode-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      font-size: 18px;
      font-weight: 800;
      background: white;
}

.barcode-header i {
      margin-right: 0.25rem;
}

.barcode-main-anim {
      padding: 15px;
      margin-top: -15%;
}

.barcode-main {
      border-top-left-radius: 13px;
      border-top-right-radius: 13px;
      background-color: white;
      height: 100vh;
      margin-top: 60px;
      box-shadow: 0px 10px 20px 1px rgba(0, 0, 0, 0.1);
}

/* 바코드 디테일 */

.barcode-detail-box {
      margin-top: 20px;
      background: white;
      display: flex;
      flex-direction: column;
      list-style: none;
      border-radius: 13px;
      padding: 20px;
}

.barcode-detail-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.1);
      border-radius: 13px;
      padding: 20px 25px;
      margin-bottom: 10px;
      padding: 20px 15px;
}

.barcode-top {
      padding: 40px 20px 20px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
}

.barcode-top-text {
      font-size: 20px;
}
.barcode-top-text strong {
      font-size: 25px;
      font-weight: 700;
}

.barcode-top-button {
      background: #a3cf4d;
      /* Gray Colors/White */

      border: 5px solid #ffffff;
      box-shadow: 0px 10px 20px 1px rgba(0, 0, 0, 0.1);
      border-radius: 50px;
      color: white;
      padding: 15px 25px;
      font-size: 20px;
      font-weight: 600;
}

.detail-list-title {
      font-size: 13px;
      font-weight: 700;
      color: #ffba00;
      line-height: 19px;
}

.list-title-second {
      color: #1a3365;
}

.detail-list-text {
      font-size: 15px;
      font-weight: 700;
}

.detail-list-text span:last-child {
      color: #6b7280;
}

.divider {
      margin-top: 30px;
      height: 1px;
      width: 226px;
      margin: 0 auto;
      border: 1px solid #e1dee6;
}

/* 카드 UI */

.card-box {
      padding: 20px;
      position: relative;
}

.card-details {
      display: flex;
      justify-content: space-between;
      align-content: center;
      padding: 13px;
}

.card-details span:first-child {
      font-size: 13px;
      font-weight: 600;
}
.card-details span:last-child {
      font-size: 10px;
      background-color: #a3cf4d;
      border-radius: 13px;
      padding: 5px 10px;
      color: white;
      font-weight: 600;
      line-height: 12px;
}

.card-img {
      width: 100%;
      margin-bottom: 13px;
      margin-top: 5px;
      padding: 13px;
}

.card-number {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      line-height: 14px;
      display: flex;
      align-items: center;
      padding: 0px 13px;
}

.card-button {
      position: absolute;
      top: 30%;
      right: 0;
      width: 63px;
      height: auto;
}

.testButton {
      margin-top: 50px;
      padding: 10px 30px;
      background-color: whitesmoke;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 20px;
      font-size: 15px;
      margin: 0 auto;
      width: 100%;
}

@media screen and (max-width: 768px) {
      .barcode-top-button:after {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 150%;
            height: 200%;
            border-radius: 20px;
            border: 1px dashed #ccc; /* 가상 요소 영역을 표시하기 위한 용도로 실제로는 필요 없음 */
            background-color: rgba(
                  255,
                  0,
                  0,
                  0.1
            ); /* 가상 요소 영역을 표시하기 위한 용도로 실제로는 필요 없음 */
      }
}
</style>
