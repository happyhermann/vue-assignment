<template class="temp" lang="">
      <section class="login-container">
            <div data-aos="fade-up">
                  <header class="header">
                        <div class="login-top">
                              <div>
                                    <i
                                          class="mdi mdi-arrow-left"
                                          @click="goBack()"
                                    >
                                    </i>
                              </div>
                              <div><h5 class="login-title">로그인</h5></div>
                        </div>
                  </header>
            </div>
            <div data-aos="fade-up">
                  <div class="blur">
                        <main class="login-main">
                              <div class="logo-box">
                                    <img
                                          class="logo"
                                          src="https://cdn.quv.kr/oluwww1tm%2Fup%2F63218781ee0b0_1920.png"
                                          alt="올수 로고"
                                    />
                              </div>
                              <form
                                    class="login-form"
                                    @submit.prevent="onSubmit"
                              >
                                    <div class="login-box">
                                          <div
                                                id="login-item-id"
                                                class="login-item"
                                          >
                                                <div class="input-box">
                                                      <input
                                                            id="id"
                                                            v-model="id"
                                                            type="text"
                                                            class="input"
                                                            name="id"
                                                            placeholder="아이디를 입력해주세요"
                                                      />
                                                </div>
                                          </div>
                                          <div
                                                id="login-item-pw"
                                                class="login-item"
                                          >
                                                <div class="input-box">
                                                      <input
                                                            id="pw"
                                                            v-model="pw"
                                                            type="password"
                                                            class="input"
                                                            name="password"
                                                            placeholder="비밀번호를 입력해주세요"
                                                      />
                                                </div>
                                          </div>
                                    </div>
                                    <p class="errorMessage">{{ errors }}</p>

                                    <div class="login-option">
                                          <label class="login-label">
                                                <input
                                                      type="checkbox"
                                                      class="login-checkbox"
                                                />
                                                <img
                                                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3Ni4wMDAwMDAsIC0xMDkwLjAwMDAwMCkgdHJhbnNsYXRlKDEwMC4wMDAwMDAsIDkzNi4wMDAwMDApIHRyYW5zbGF0ZSg2MC4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIgZmlsbD0iIzVGMDA4MCIvPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                                                      alt=""
                                                      class="css-1wfsi82 e31wziv0 check-box-icon"
                                                />
                                                <span>아이디 저장</span>
                                          </label>
                                          <label class="login-label">
                                                <input
                                                      type="checkbox"
                                                      class="login-checkbox"
                                                />
                                                <img
                                                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjREREIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY5LjAwMDAwMCwgLTEwOTAuMDAwMDAwKSB0cmFuc2xhdGUoMTAwLjAwMDAwMCwgOTM2LjAwMDAwMCkgdHJhbnNsYXRlKDU1My4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                                                      alt=""
                                                      class="css-1wfsi82 e31wziv0 check-box-icon"
                                                />
                                                <span>자동 로그인</span>
                                          </label>
                                    </div>
                                    <div class="button-box">
                                          <button
                                                type="submit"
                                                class="login-button"
                                          >
                                                로그인
                                          </button>
                                          <!-- <button class="login-button button2">
                                          회원가입
                                    </button> -->
                                    </div>
                              </form>
                              <div class="search-info">
                                    <a class="search-info-text" href="#"
                                          >아이디 찾기</a
                                    >
                                    <span class="vertical-divider"></span>
                                    <a class="search-info-text" href="#"
                                          >비밀번호 찾기</a
                                    >
                              </div>
                              <a class="signup-text" href="#"
                                    >계정이 없으신가요? <span>가입하기</span></a
                              >

                              <div class="social-login-box">
                                    <span class="social-login-text"
                                          >소셜 로그인으로
                                          <strong>간편하게</strong>
                                          시작하세요</span
                                    >

                                    <button class="social-login kakao">
                                          <span> </span>카카오로 시작하기
                                    </button>
                                    <button class="social-login google">
                                          <span></span>구글 계정으로 시작하기
                                    </button>
                                    <button class="social-login facebook">
                                          <span></span>페이스북 계정으로
                                          시작하기
                                    </button>
                              </div>
                        </main>
                  </div>

                  <!-- 여백 채우기 article-->
            </div>
      </section>
</template>
<script>
export default {
      components: {},

      data() {
            return {
                  id: "",
                  pw: "",
                  errors: "",
            };
      },

      methods: {
            onSubmit(e) {
                  console.log(`로그인 submit`);

                  if (this.id == "") {
                        this.errors = "아이디를 입력해주세요";

                        return false;
                        // 아이디 입력 안되어있으면 submit 이벤트 중지
                  }
                  if (this.pw == "") {
                        this.errors = "비밀번호를 입력해주세요";
                        return false;
                  }
                  // 비밀번호 입력 안되어있으면 submit 이벤트 중지

                  if (this.id && this.pw) {
                        if (this.id !== "allsu") {
                              this.errors = "아이디가 유효하지 않습니다";
                        } else if (this.id == "allsu" && this.pw == "1234") {
                              this.errors = "";
                              alert("allsu님 환영합니다!");

                              let self = this;
                              self.$router.push("/barcode");
                        }
                  }
            },
            goBack() {
                  console.log(`뒤로 가기 함수`);
                  let self = this;
                  self.$router.go(-1);
                  // 한 단계 뒤로
                  // router.go 인자로 넘긴 숫자만큼 히스토릭 스택에서 앞, 뒤로 이동하는 메소드
            },
      },
};
</script>
<style>
/* header */
.header {
      display: flex;
      flex-direction: column;
      color: white;
}

.logo {
      width: 100%;
      height: auto;
      display: block;
}

.login-top {
      display: flex;
      position: relative;
      margin-top: 15px;
}

.login-top div:first-child {
      position: absolute;
      left: 5%;
}

.login-top div:last-child {
      width: 100%;
}

.login-top i {
      font-size: 18px;
      font-weight: 400;
      line-height: 1.2em;
}
.login-title {
      font-size: 14px;
      text-align: center;
      font-weight: 600;
}

/* login-main */

.logo-box {
      width: 50px;
      height: 50px;
      margin: 0 auto;
}
.login-box img {
      width: 150%;
}

.login-main {
      margin-top: 5px;
      padding: 0 20px;
}

.login-form {
      position: relative;
}
.login-box {
      position: relative;
      width: 100%;
      margin: 0 auto;
      border-radius: 6px;
      box-shadow: 0 2px 8px 0 rgb(0 0 0 / 5%);
      border: solid 1px #e6e6ea;
      background-color: #fff;
      box-sizing: border-box;
}

.login-item {
      position: relative;
}
.input-box {
      padding: 9px 18px 2px 20px;

      position: relative;
      display: block;
      height: 100%;
      border-top: 1px solid #f5f5f5;
      box-sizing: border-box;
      text-align: left;
}

.input-box:focus-within {
      outline: -webkit-focus-ring-color auto 1px !important;
}

.input {
      position: relative;
      display: block;
      width: 100%;
      height: 22px;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.53px;
      color: #303038;
      z-index: 5;
      border-radius: 0;
      border: none;
      background: 0 0;

      appearance: none;
      outline: 0;
      text-decoration: none;
      cursor: pointer;
      -webkit-text-size-adjust: none;
}

.login-option {
      display: flex;
      margin: 1px 0 2px;

      align-items: center;
}
.login-option span {
      margin-left: 5px;
      font-size: 11px;
}
.login-label {
      margin-right: 15px;
      font-size: 14px;
      padding: 14px 0 9px;
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      font-size: 16px;
      vertical-align: top;
      line-height: normal;
      color: #333;
}
.login-checkbox {
      box-sizing: border-box;
      padding: 0;
      overflow: hidden;
      position: absolute;
      clip: rect(0 0 0 0);
      -webkit-clip-path: inset(50%);
      clip-path: inset(50%);
      width: 1px;
      height: 1px;
      font-size: 14px;
      color: #333;
      color: inherit;
      font: inherit;
      margin: 0;
      -webkit-tap-highlight-color: transparent;
}
.check-box-icon {
      display: inline-block;
      width: 15px;
      height: 15px;
      margin-right: 12px;
      border: 0;
      vertical-align: top;
      max-width: 100%;
      box-sizing: border-box;
      margin: 0;
      font-size: 14px;
}

/* 버튼  */

.button-box {
      display: flex;
      flex-direction: column;
}

.login-button {
      margin-top: 5px;
      -webkit-box-shadow: 0 2px 4px 0 rgb(31 140 230 / 30%);
      box-shadow: 0 2px 4px 0 rgb(31 140 230 / 30%);

      letter-spacing: -0.03em;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
      appearance: none;
      border: 0;
      box-shadow: none;
      outline: 0;
      text-decoration: none;
      box-sizing: border-box;
      border-radius: 4px;
      font-weight: 700;
      display: inline-block;
      text-align: center;
      cursor: pointer;
      line-height: 1em;
      vertical-align: baseline;
      -webkit-transition: background 0.2s, color 0.2s;
      transition: background 0.2s, color 0.2s;
      color: #fff;
      background: #1f8ce6;
      border: 1px solid #0077d9;
      box-shadow: 0 1px 1px 0 rgb(31 140 230 / 30%);
      font-size: 13px;
      padding: 16px 34px;
      font-family: Helvetica Neue, Apple SD Gothic Neo, arial, "나눔고딕",
            Nanum Gothic, "돋움", Dotum, Tahoma, Geneva, sans-serif;
      letter-spacing: -0.03em;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
      appearance: none;
      border: 0;
      box-shadow: none;
      outline: 0;
      text-decoration: none;
      box-sizing: border-box;
      border-radius: 4px;
      font-weight: 700;
      display: inline-block;
      text-align: center;
      cursor: pointer;
      line-height: 1em;
      vertical-align: baseline;
      -webkit-transition: background 0.2s, color 0.2s;
      transition: background 0.2s, color 0.2s;
      color: #fff;
      background: #03c75b;
      border: 1px solid #0077d9;
      box-shadow: 0 1px 1px 0 rgb(31 140 230 / 30%);
      font-size: 16px;
      padding: 12px 28px;
      width: 100%;
      font-size: 12px;
      line-height: 0.5em;
      margin: 0 auto;
}
.button2 {
      color: #1f8ce6;
      background-color: white;
}

/* 회원정보 찾기 */

.vertical-divider {
      width: 1px;
      height: 13px;
      margin: 3px 8px 0;
      background-color: #ddd;
      font-size: 14px;
      color: #333;
}

.search-info {
      margin-top: 20px;
      display: flex;
      justify-content: center;
}

.search-info-text {
      display: flex;
      justify-content: center;
      outline: 0;
      color: #999;
      font-size: 12px;
      opacity: 0.5;
      background-color: transparent;
      text-decoration: none;
      color: inherit;
      margin-bottom: 5px;
}

.signup-text {
      margin-top: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 11px;
      font-weight: 600;
      opacity: 0.7;
}

.signup-text > span {
      margin-left: 7px;
      color: #0077d9;
      opacity: 1 !important;
      font-weight: 800;
      font-size: 12px;
}

.login-container {
      width: 100%;
      height: 100vh;
      background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
            url("https://cdn.issuenbiz.com/news/photo/202209/16866_17202_514.jpg");
      background-size: contain;
      background-repeat: no-repeat;
      z-index: -3;
      padding: 0;
}

.blur {
      margin-top: 50%;
      background-color: white;
      padding: 10px 5px;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
}

/* 소셜 로그인 */

.social-login-box {
      border-top: 1px solid rgb(245, 245, 245);
      margin-top: 10%;
      padding-top: 7%;
      text-align: center;
}

.social-login-text {
      display: inline-block;
      margin-bottom: 10px;
      font-size: 11px;
      font-weight: 500;
}

.social-login-text strong {
      color: #0077d9;
      font-size: 12px;
}

.social-login {
      display: block;
      padding: 0px 10px;
      text-align: center;
      overflow: hidden;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      font-weight: 800;
      color: rgb(25, 25, 25);
      margin-bottom: 10px;
      font-size: 13px;
}

.kakao {
      background-color: rgb(254, 229, 0);
      border: 1px solid rgb(254, 229, 0);
      color: black;
}
.google {
      background-color: white;
      border: 1px solid black;
}
.facebook {
      background-color: #4f75be;
      color: white;
}

/* 폼 유효성  */

.errorMessage {
      font-size: 13px;
      margin-top: 5px;
      margin-left: 3px;
}
</style>
