<template>
      <div v-if="switch" class="qr-container">
            <div class="qr-white-bg">
                  <header class="qr-header">
                        <i
                              class="mdi mdi-close qrClose"
                              @click="[$emit('close'), onClose()]"
                        ></i>
                        <!-- 이거 누르면 모달 자체를 끄게 -->

                        <span>탄소중립저울</span>
                  </header>
                  <div class="item" data-aos="zoom-in">
                        <main class="qr-main">
                              <div class="qr-guide">
                                    <i class="mdi mdi-information-outline"></i>
                                    <span>도움이 필요해요</span>
                              </div>
                              <div class="qr-image-box">
                                    <img
                                          class="qr"
                                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                                          alt="QR 코드"
                                    />
                              </div>
                              <div class="qr-bottom">
                                    <!-- <p class="qr-timer">
                                          {{ minutes }} : {{ seconds }}
                                    </p> -->
                                    <button
                                          v-if="isDone"
                                          class="qr-done-btn"
                                          @click="allDone()"
                                    >
                                          배출완료
                                    </button>
                              </div>
                        </main>
                  </div>
            </div>
      </div>
      <!-- 배출완료 것 조건부 렌더링 -->
      <div v-else class="qr-container">
            <div class="qr-white-bg">
                  <div class="item" data-aos="flip-right">
                        <header class="qr-header">
                              <i
                                    class="mdi mdi-close qrClose"
                                    @click="[$emit('close'), onClose()]"
                              ></i>
                              <!-- 이거 누르면 모달 자체를 끄게 -->

                              <span>탄소중립저울</span>
                        </header>
                  </div>
                  <div class="item" data-aos="flip-right">
                        <main class="qr-main">
                              <div class="qr-done-guide">
                                    <p class="qr-done-text">배출 완료!</p>
                              </div>
                              <div class="qr-done-image-box">
                                    <img
                                          class="allsu-logo-3d"
                                          :src="
                                                require(`../assets/allsu-logo-3d.png`)
                                          "
                                          alt="올수 로고"
                                    />
                              </div>
                              <div class="qr-done-details">
                                    <span
                                          >오늘의 배출량은
                                          <strong>1300mL </strong>이며</span
                                    >
                                    <br /><span
                                          >적립 금액은
                                          <strong>130원 </strong>입니다</span
                                    >
                              </div>
                              <div class="qr-bottom">
                                    <button
                                          class="qr-done-btn"
                                          @click="
                                                [
                                                      allDone(check),
                                                      $emit('close'),
                                                      scrollReset(),
                                                ]
                                          "
                                    >
                                          확인
                                    </button>
                              </div>
                        </main>
                  </div>
            </div>
      </div>
      <Loading v-if="response === true" />
</template>
<script>
import Loading from "./Loading.vue";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

var timerFunction = "";

export default {
      components: {
            Loading,
      },

      data() {
            return {
                  time: 30,
                  // timer분으로 계산하는 것 만들기
                  isDone: false,
                  // 배출완료 state
                  switch: false,
                  // 모달창 배출 => 배출 완료 조건부 state

                  // 시간 state
                  minutes: 0,
                  seconds: "00",
                  counter: 10,
                  response: false,
            };
      },
      created() {
            this.switch = true;

            setTimeout(() => {
                  this.isDone = true;
            }, 4000);
      },
      mounted() {
            console.log(`마운트`);
            this.timer();
      },

      methods: {
            onClose: function () {
                  console.log(`QR 단순 닫기 for clearInterval`);
                  clearInterval(timerFunction);
                  document.documentElement.style.overflow = "auto";
            },

            allDone: function (check) {
                  console.log(`배출완료 마무리`);
                  clearInterval(timerFunction);
                  // 중복되지 않게 타이머 중단+
                  document.documentElement.style.overflow = "hidden";

                  this.response = true;

                  setTimeout(() => {
                        this.response = false;
                        this.switch = false;

                        // 배출완료 후 스크롤 고정 풀어줌
                  }, 5000);

                  // QR 배출 화면으로 초기화
                  console.log(`배출완료 alldone : ${this.switch}`);
            },
            scrollReset: function () {
                  document.documentElement.style.overflow = "auto";
            },
            timer() {
                  timerFunction = setInterval(() => {
                        this.seconds = --this.counter % 60;
                        this.minutes = parseInt(this.counter / 60, 10) % 60;

                        if (this.counter <= 0) {
                              clearInterval(timerFunction);
                              this.response = true;

                              setTimeout(() => {
                                    this.response = false;
                                    this.switch = false;

                                    // 배출완료 후 스크롤 고정 풀어줌
                              }, 5000);

                              // 자동으로 완료창으로
                        }
                        if (this.switch === false) {
                              clearInterval(timerFunction);

                              this.switch = false;

                              document.documentElement.style.overflow = "auto";
                        }

                        // 배출 누르고도 interval 안되게 버튼 누르면 clearInterval 종료
                  }, 1000);
            },
      },
};
</script>
<style>
/* QR Background */
.qr-container {
      width: 100%;
      height: 100%;
      position: fixed;
      background: rgba(0, 0, 0, 0.43);
      top: 0;
      left: 0;
}

.qr-white-bg {
      position: fixed;
      border-radius: 12px;
      background: white;
      width: 90%;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);

      /*  */
}

/* QR Header */

.qr-header {
      position: relative;
      background-color: #a3cf4d;
      padding: 15px 50px;
      text-align: center;
      color: white;
      font-size: 22px;
      font-weight: 600;
      border-top-left-radius: 13px;
      border-top-right-radius: 13px;
      align-items: center;
      display: flex;
      justify-content: center;
}

.qr-header > i {
      position: absolute;
      left: 4%;
}
.qr-guide {
      display: flex;
      justify-content: end;
      align-items: center;
      font-size: 14px;
}

.qr-quide > span {
      display: inline-block;
      margin-bottom: 5px;
}

.mdi-information-outline {
      font-size: 16px;
}

.qr-main {
      padding: 50px;
      text-align: center;
}

.qr-image-box {
      background: #ffffff;
      /* Brand Colors/Primary */

      border: 4px solid #ffba00;
      border-radius: 13px;
}

.qr {
      width: 100%;
      height: 100%;
      margin: 0;
}

/* QR Bottom */

.qr-timer {
      font-weight: 400;
      font-size: 20px;
      line-height: 35px;
      margin-top: 15px;
      margin-bottom: 25px;

      color: #ffba00;
}

.qr-timer-red {
      color: red;

      transform: scale(1.2);
      transition: all ease 2s 0s;
}

.qr-progress-btn {
      background: #a3cf4d;
      /* Gray Colors/White */

      border: 5px solid #ffffff;
      box-shadow: 0px 10px 20px 1px rgba(0, 0, 0, 0.1);
      border-radius: 50px;
      color: white;
      padding: 13px 45px;
      font-size: 20px;
      font-weight: 600;
}

/* 배출중 버튼 색 */

.qr-done-btn {
      background: #ffba00;
      /* Gray Colors/White */
      margin-top: 18px;
      border: 5px solid #ffffff;
      box-shadow: 0px 10px 20px 1px rgba(0, 0, 0, 0.1);
      border-radius: 50px;
      color: white;
      padding: 13px 45px;
      font-size: 20px;
      font-weight: 600;
}
/* 배출완료 버튼 색 */

/* 배출완료 모달 */

.qr-done-text {
      font-size: 33px;
      font-weight: 700;
}

.qr-done-image-box {
      width: 50%;
      height: auto;
      margin: 0 auto;
}

.allsu-logo-3d {
      width: 100%;
      height: auto;
      display: block;
}

.qr-done-details {
      font-size: 13px;
      color: gray;
      margin: 10px 0;
}
.qr-done-details strong {
      color: black;
}
</style>
