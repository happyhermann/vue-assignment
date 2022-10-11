 <!-- eslint-disable -->

<template>
    <v-container>
       <v-row class="text-center">
        <img src="https://cdn.quv.kr/oluwww1tm%2Fup%2F63218781ee0b0_1920.png" />
          <p>파트너님! 로그인 성공하였습니다</p>
       </v-row>
     </v-container>
    <div class="branch-status">
    <h3>
      지점 현황 
    </h3>
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
      <select
      class="select"
      @click="onSelect($event)"
      >
        <option value="paris">파리바게트</option>
        <option value="mom">맘스터치</option>
        <option value="sn">샤니</option>\
      </select>
        <!-- <v-select
        v-model="select"
          :items="items"
          id="foo"
         >
 
       </v-select> -->
      </v-col>
      <div class="branch_list">
          <div class="branch_details">
            <span class="branch_header_info">일반 지점</span>
            <span class="branch_header_info">{{datas.jjmb_id}}</span>
          <br/>
          <span class="branch_agencyName">{{datas.agencyName}}</span>
          <span class="branch_quantity">(`거래량:  {{datas.boxsu}}통`)</span>
          <div class="branch_address">
            <span class="branch_address_text">{{datas.address}}</span>
          </div>
        
        </div>
        <div class="branch_call">
          <i class="mdi mdi-phone"></i>
        </div>
      </div>
      
    </div>
    <div class="back" v-if="isLoading">
      <div class="spinner-div">
       <img src="https://thumbs.gfycat.com/ConventionalOblongFairybluebird-size_restricted.gif" alt="loading spinner" />
       <p>로딩중...</p>
    </div>
    </div>
    

   </template>
  
  <script>

  /* eslint-disable */ 
  import axios from "axios"

   
  var some = "";
  var self = this;
  
  export default {

  
    data: function () {
      return {
        memberNo : 0,
        // select states
        items: ["파리바게트", "맘스터치", "샤니"],
        select: "파리바게트",
        memberKeys : 56,
        // 초기값 파리바게트로 설정
        datas: [""],

        isLoading: false,

      }
    }, 
    
   

     created() {
      this.memberNo = this.$route.params.id;
      // url에서 id 추출하기 
      this.datas;
       },

      methods: {
        // 마운트시 자동으로 axios 불러오는 함수 띄우기
        // 리액트에서 useEffect같은 것인가?
 

        onSelect: function (event) {
            const isClicked = event.target.value;
            if (isClicked === "paris") {
              console.log("파리바게트 셀렉트를 설정하였습니다.")
              this.memberKeys = 56
            } 
            if(isClicked === "mom") {
              console.log("맘스터치 클릭하였습니다.")
              this.memberKeys = 60
 
            }
            if(isClicked === "sn") {
              console.log("샤니 클릭하였습니다.")
              this.memberKeys = 470

            }
        
            console.log(isClicked)
            console.log(event.target.value)
            console.log(`memberKeys의 상태값 변경 : ${this.memberKeys}`)
         },
        
        onAxios : function () {
          let self = this;


          const url = `/v1/member/getCo_Mem_Jj.php`;
          const data = {
            "mode":"myAgencyList",
            "coMemberKey": this.memberKeys,
            // coMemberKey는 셀렉트 누른 것에 따라 바꿔들어갈 것
            "mb_no": this.memberNo,
          }

          axios.post(url, data).
          then(function(res) {
          // some = res.data.agencyList[0].addr1;
          console.log(res)
          self.datas = res.data.agencyList[0];

      
   
          }).
          catch(function(error) {
            console.log(error);
          });
        },
      },
      beforeMount() {
        this.onAxios();
      },
      // mount시 자동으로 호출 
      watch : {
       memberKeys: function (newMembers) {
        this.onAxios();
        
  
       },
       // watch 반응형 콜백, 단순히 콜백함수 역할
       // computed랑 다른 점은 computed는 이미 정의된 계산식에 따라 값을 반환할 떄 쓰지만,
       // watch는 특정조건에서 함수를 실행시키기 위한 것

       // memberKeys가 변경되는 것을 감지한 이후에 바뀐 body의 값을 넣은뒤 
       // axios 호출
 

      }
      // 페이지로드시 안에 있는 것들을 실행해줌
   
      

  }
  </script>
   

    
  <style>

   
   
    img {
      width: 80%;
      display: block;
      margin: 0 auto;
      margin-top: 30%;
      margin-bottom: 30px;
      
    }
    

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
      padding: 2px 0px 2px;
      width: 70px;
      text-align: center;
      background-color: #e4e4e4!important;
      margin-right: 5px;
      border-radius: 5px;

    }

    .branch_address_text {
      opacity: 0.4;
      font-weight: 500;
    }

    .mdi-phone {
      color: #0079f2!important;
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
      background: url('https://freepikpsd.com/media/2019/10/down-arrow-icon-png-7-Transparent-Images.png') calc(100% - 5px) center no-repeat;
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
      background-color:rgba(0, 0, 0, 0.1);
      transform: translate(-50%, -50%);
      box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 9999px;
    }

 
  
 

   
    
  
  </style>