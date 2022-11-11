<template lang="">
      <section class="container barcode-container">
            <div data-aos="fade-up">
                  <header class="barcode-header">
                        <h4>스캔</h4>
                        <div class="barcode-header-icons">
                              <i class="mdi mdi-qrcode"></i>
                              <i class="mdi mdi-settings"></i>
                              <i class="mdi mdi-account-outline"></i>
                        </div>
                  </header>
            </div>
            <div data-aos="fade-up">
                  <main class="barcode-main">
                        <div class="item" data-aos="zoom-in">
                              <div v-if="toggle === false" class="card-box">
                                    <div class="card">
                                          <div class="card-img-box">
                                                <img
                                                      class="card-img"
                                                      src="https://images.squarespace-cdn.com/content/v1/5d25038878c2050001a82eaf/1614638251257-YZS0CG0SNCW801AKAYMF/Carbon+Zero+on+In+Good+Hands?format=1000w"
                                                />
                                          </div>
                                          <div class="card-details">
                                                <div class="card-details-texts">
                                                      <p>
                                                            탄소중립 포인트 카드
                                                      </p>
                                                      <p>1354 90** **** 7777</p>
                                                </div>
                                                <button
                                                      class="card-details-btn"
                                                >
                                                      실천 내역
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <div class="item" data-aos="fade-left">
                              <div v-if="toggle === true" class="barcode-box">
                                    <i
                                          class="mdi mdi-arrow-left"
                                          @click="onClose()"
                                    ></i>
                                    <span
                                          class="card-box-title"
                                          @click="onBardCode()"
                                          >바코드</span
                                    >

                                    <div class="barcode-img-box">
                                          <img
                                                class="barcode-img"
                                                src="https://pngimg.com/uploads/barcode/barcode_PNG7.png"
                                                alt="바코드"
                                          />
                                    </div>

                                    <div class="barcode-box-details">
                                          <div class="detail-top">
                                                <div class="detail-top-left">
                                                      <span
                                                            >탄소실천
                                                            포인트</span
                                                      >
                                                      <span>미표시</span>
                                                </div>

                                                <button
                                                      class="detail-top-button"
                                                >
                                                      보기
                                                </button>
                                          </div>
                                          <div class="detail-bottom">
                                                <span>포인트 계좌</span
                                                ><span>농협(5824)</span>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <!-- 바코드 -->

                        <!-- 조건부 렌더링 -->

                        <div v-if="toggle === false" class="barcode-button-box">
                              <button class="barcode-view" @click="onBarcode()">
                                    바코드 실행
                              </button>
                        </div>
                  </main>
            </div>
      </section>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default {
      data() {
            return {
                  toggle: false,
            };
      },
      methods: {
            onBarcode: function () {
                  console.log(`바코드 실행`);
                  this.toggle = true;
            },
            onClose: function () {
                  console.log(`바코드 종료`);
                  this.toggle = false;
            },
      },
};
</script>
<style>
.barcode-container {
      height: 100vh;
      background-color: #eec82f;
      padding: 0px;
}

.barcode-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      font-size: 22px;
      font-weight: 800;
}

.barcode-header i {
      margin-right: 0.25rem;
}

.barcode-main {
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      background-color: white;
      height: 100vh;
      margin-top: 60px;

      box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
            rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
            rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}

/* 바코드 디테일 */

.barcode-box {
      position: relative;
}

.barcode-box-details {
      padding: 35px;
      border-top: 1px solid rgb(245, 245, 245);
      border-bottom: 1px solid rgb(245, 245, 245);
}

.detail-top {
      display: flex;
      justify-content: space-between;
}

.detail-top > span,
.detail-bottom > span {
      font-size: 12px;
      opacity: 0.6;
      margin-right: 5px;
}

.detail-bottom > span {
      display: inline-block;
      margin-right: 20px;
}

.detail-top-left > span {
      font-size: 12px;
      opacity: 0.6;
      margin-right: 10px;
}

.detail-top button {
      padding: 1px 10px;
      background-color: white;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 13px;
      font-size: 12px;
}

/* 바코드 이미지 */

.barcode-img-box {
      width: 60%;
      margin: 0 auto;
      padding-top: 10px;
}

.barcode-img {
      width: 100%;
      height: auto;
      margin-top: 100px;
}
.barcode-button-box {
      text-align: center;
      margin-top: 10%;
}

.barcode-view {
      padding: 10px 30px;
      background-color: whitesmoke;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 20px;
      font-size: 15px;
      font-weight: 800;
}

/* 카드 박스 */

.card {
      padding: 30px;
      width: 100%;
}

.mdi-arrow-left {
      position: absolute;
      left: 5%;
      top: 2%;
      font-size: 23px;
}

.card-box-title {
      position: absolute;
      top: 4.3%;
      left: 45%;
      font-size: 15px;
      font-weight: 800;
}

.card-box {
      height: 285px;
      display: flex;
      justify-content: center;
      position: relative;
}

.card-img-box {
      width: 150px;
      height: 150px;
      margin: 0 auto;
}
.card-img {
      display: block;
      width: 100%;
      height: auto;
      box-shadow: rgb(0 0 0 / 25%) 0px 0.0625em 0.0625em,
            rgb(0 0 0 / 25%) 0px 0.125em 0.5em,
            rgb(255 255 255 / 10%) 0px 0px 0px 1px inset;
      border-radius: 30px;
      padding: 10px;
}
.card-details {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgb(245, 245, 245);
      padding-bottom: 15px;
}

.card-details-texts {
      font-size: 13px;
}
.card-details-texts p:last-child {
      font-size: 11px;

      opacity: 0.3;
}

.card-details-btn {
      font-size: 10px;
      padding: 1px 9px;
      border-radius: 10px;
}
</style>
