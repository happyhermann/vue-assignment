<!-- eslint-disable -->

<template>
      <v-container>
            <v-row class="text-center">
                  <img
                        src="https://cdn.quv.kr/oluwww1tm%2Fup%2F63218781ee0b0_1920.png"
                  />
                  <p>파트너님! 로그인 성공하였습니다</p>
            </v-row>
      </v-container>
      <div class="branch-status">
            <h3>지점 현황</h3>
            <v-col class="d-flex" cols="12" sm="6">
                  <select class="select" @click="onSelect($event)">
                        <option value="paris">파리바게트</option>
                        <option value="mom">맘스터치</option>
                        <option value="sn">샤니</option>
                        \
                  </select>
                  <!-- <v-select
        v-model="select"
          :items="items"
          id="foo"
         >
 
       </v-select> -->
            </v-col>
            <div class="branch_list" v-if="isOpen == false">
                  <div class="branch_details">
                        <span class="branch_header_info">일반 지점</span>
                        <span class="branch_header_info">{{
                              datas.jjmb_id
                        }}</span>
                        <br />
                        <span class="branch_agencyName">{{
                              datas.agencyName
                        }}</span>
                        <span class="branch_quantity"
                              >(거래량: {{ datas.boxsu }}통)</span
                        >
                        <div class="branch_address">
                              <span class="branch_address_text">{{
                                    datas.address
                              }}</span>
                        </div>
                  </div>
                  <div class="branch_call">
                        <i class="mdi mdi-phone"></i>
                  </div>
            </div>
            <div class="notfounded" v-else>
                  <i class="mdi mdi-alert-octagon" />
                  <p>담당 지점이 없습니다.</p>
            </div>
      </div>
      <div>
            <v-container>
                  <v-row class="text-center">
                        <form
                              class="test-form"
                              validation-schema="schema"
                              v-on:submit.prevent="onTest()"
                              v-if="(isLoginned = true)"
                        >
                              <h3>API 테스트용 form</h3>
                              <div>
                                    <input
                                          class="test-input user"
                                          type="text"
                                          name="id"
                                          placeholder="아이디"
                                          v-model="id"
                                    />
                              </div>
                              <div>
                                    <input
                                          class="test-input pw"
                                          type="text"
                                          name="password"
                                          placeholder="비밀번호"
                                          v-model="password"
                                    />
                              </div>
                              <button @click="onTest()">만든 api 부르기</button>
                        </form>
                        <div v-else class="test-success">
                              안녕하세요 테스트 "" 님!
                              <!-- 이게 성공했다는 뜻은 data flow를 다시보면 좋은 공부가 될듯 -->
                        </div>
                  </v-row>
                  <v-row class="text-center">
                        <h3>TestLee API</h3>
                  </v-row>
            </v-container>
      </div>
      <div class="back" v-if="isLoading">
            <div class="spinner-div">
                  <img
                        src="https://thumbs.gfycat.com/ConventionalOblongFairybluebird-size_restricted.gif"
                        alt="loading spinner"
                  />
                  <p>로딩중...</p>
            </div>
      </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";

var some = "";
var self = this;

export default {
      data: function () {
            return {
                  memberNo: 0,
                  // select states
                  items: ["파리바게트", "맘스터치", "샤니"],
                  select: "파리바게트",
                  memberKeys: 56,
                  // 초기값 파리바게트로 설정
                  datas: [""],

                  isLoading: false,
                  // api login test value

                  id: "",
                  password: "",

                  // 모달창
                  isClicked: 0,
                  isOpen: false,

                  // api 테스트용 value
                  isLoginned: false,

                  // 동적인 감지가 필요함
            };
      },

      created() {
            this.memberNo = this.$route.params.id;
            // url에서 id 추출하기
            this.datas;
      },

      methods: {
            // 마운트시 자동으로 axios 불러오는 함수 띄우기
            // 리액트에서 useEffect같은 것인가?

            onTest() {
                  console.log(this.id, this.passwrod);
                  let self = this;

                  const url = `/testLee/bbs/login_checking.php`;

                  axios.post(url, {
                        id: this.id,
                        pw: this.password,
                  })
                        .then(function (res) {
                              console.log(res.data);

                              console.log(res);

                              const test = () => {
                                    res.data.includes("로그인 실패")
                                          ? (self.isLoginned == false,
                                            console.log(
                                                  `이즈 로그인 값 : ${self.isLoginned}`,
                                            ),
                                            alert("API 테스트용 로그인 실패"))
                                          : (self.isLoginned == true,
                                            // issue 이 값이 변경되고 렌더링 되어서 조건문이 진행이 되어야한다.
                                            // 이 값 트루값으로 왜 변경 안될까
                                            console.log(
                                                  `이즈 로그인 값 : ${self.isLoginned}`,
                                            ),
                                            console.log("로그인 성공"),
                                            alert(
                                                  "일단 로그인 되긴함 ㅋ 니 아이디 test이고 비번 1234임 ㅋ",
                                            ));

                                            // 만약에 데이터에서 로그인 성공했다는 값을 (현재는 문자열로 걸러내지만, 나중에는 하나의 키로 되어있는
                                            // boolean === true 값으로 받으면 좋을듯)
                              };

                              test();

                              //   res.data.includes("로그인 실패") ?
                              //   (
                              //      self.isLoginned == false,
                              //      console.log(`이즈 로그인 값 : ${self.isLoginned}`),

                              //     alert("API 테스트용 로그인 실패")
                              //   )
                              //  :
                              //  (
                              //     self.isLoginned == true,
                              //     // issue 이 값이 변경되고 렌더링 되어서 조건문이 진행이 되어야한다.
                              //     // 이 값 트루값으로 왜 변경 안될까
                              //     console.log(`이즈 로그인 값 : ${self.isLoginned}`),
                              //     console.log("로그인 성공"),
                              //     alert("일단 로그인 되긴함 ㅋ 니 아이디 test이고 비번 1234임 ㅋ")

                              //     // 만약에 데이터에서 로그인 성공했다는 값을 (현재는 문자열로 걸러내지만, 나중에는 하나의 키로 되어있는
                              //     // boolean === true 값으로 받으면 좋을듯)

                              //   )
                        })
                        .catch(function (error) {
                              console.log(error);
                        });
            },

            onSelect: function (event) {
                  this.isClicked = event.target.value;
                  if (this.isClicked === "paris") {
                        console.log("파리바게트 셀렉트를 설정하였습니다.");
                        this.memberKeys = 56;
                  }
                  if (this.isClicked === "mom") {
                        console.log("맘스터치 클릭하였습니다.");
                        this.memberKeys = 60;
                  }
                  if (this.isClicked === "sn") {
                        console.log("샤니 클릭하였습니다.");
                        this.memberKeys = 470;
                  }

                  console.log(this.isClicked);
                  console.log(event.target.value);
                  console.log(`memberKeys의 상태값 변경 : ${this.memberKeys}`);
            },

            onAxios: function () {
                  let self = this;

                  const url = `/v1/member/getCo_Mem_Jj.php`;
                  const data = {
                        mode: "myAgencyList",
                        coMemberKey: this.memberKeys,
                        // coMemberKey는 셀렉트 누른 것에 따라 바꿔들어갈 것
                        mb_no: this.memberNo,
                  };

                  axios.post(url, data)
                        .then(function (res) {
                              // some = res.data.agencyList[0].addr1;
                              console.log(res);
                              self.datas = res.data.agencyList[0];
                        })
                        .catch(function (error) {
                              console.log(error);
                        });
            },
      },
      beforeMount() {
            this.onAxios();
      },

      // mount시 자동으로 호출

      // unmounted() {
      //   if(this.isLoginned == true) {
      //     alert("로그인 성공")
      //   }

      // },

      watch: {
            memberKeys: function (newMembers) {
                  this.onAxios();
            },
            //  isClicked: function (changedClicked) {
            //   if (this.isClicked == 470) {
            //     this.isOpen == true;

            //   }

            // watch 반응형 콜백, 단순히 콜백함수 역할
            // computed랑 다른 점은 computed는 이미 정의된 계산식에 따라 값을 반환할 떄 쓰지만,
            // watch는 특정조건에서 함수를 실행시키기 위한 것

            // memberKeys가 변경되는 것을 감지한 이후에 바뀐 body의 값을 넣은뒤
            // axios 호출
      },
      // 페이지로드시 안에 있는 것들을 실행해줌
};
</script>

<style>
 
.text-center p {
      font-size: 25px;
      font-weight: 800;
      text-align: center;
      margin: 0 auto;
}

/* branch styles */

.branch_list {
      width: 100%;
      position: relative;
      padding: 10px 20px;
      display: inline-block;
      flex: none;
      min-height: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
}

.branch_agencyName {
      font-size: 20px;
      font-weight: 800;
      margin-right: 5px;
}
.branch_quantity {
      font-size: 17px;
      font-weight: 800;
}

.branch_header_info {
      display: inline-block;
      color: black;
      padding: 2px 5px 4px;
      text-align: center;
      background-color: #e4e4e4 !important;
      margin-right: 5px;
      border-radius: 5px;
}

.branch_address_text {
      opacity: 0.4;
      font-weight: 500;
}

.mdi-phone {
      color: #0079f2 !important;
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
}

.select {
      -o-appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      width: 150px;
      height: 35px;
      background: url("https://freepikpsd.com/media/2019/10/down-arrow-icon-png-7-Transparent-Images.png")
            calc(100% - 5px) center no-repeat;
      background-size: 20px;
      padding: 5px 30px 5px 10px;
      border-radius: 4px;
      outline: 0 none;
}
.select option {
      background: black;
      color: #fff;
      padding: 3px 0;
}

.spinner-div {
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: fixed;
      top: 50%;
      left: 50%;
      background-color: rgba(0, 0, 0, 0.1);
      transform: translate(-50%, -50%);
      box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 9999px;
}

.test-form {
      width: 100%;
      padding: 20px;
      background-color: rgba(0, 0, 0, 0.1);
      margin-top: 50px;
      border-top: 2px solid black;
}

input {
      margin-bottom: 10px;
      height: 30px;
      width: 300px;
}

.mdi-alert-octagon {
      font-size: 6em;
      color: #dedede;
}
.notfounded {
      opacity: 0.5;
      font-size: 16px;
      text-align: center;
}
</style>
