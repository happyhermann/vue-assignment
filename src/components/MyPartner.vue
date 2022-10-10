 <!-- eslint-disable -->

<template>
    <v-container>
       <v-row class="text-center">
        <img src="https://cdn.quv.kr/oluwww1tm%2Fup%2F63218781ee0b0_1920.png" />
          <p>파트너님! 로그인 성공하였습니다</p>
       </v-row>
      <LodingSpinner/>
    </v-container>
    <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          :items="items"
          label="리스트"
          solo
        ></v-select>
        
      </v-col>
 
    <!-- <buttom v-on:click="onClick">테스트 클릭</buttom> -->
     <!-- <h4>{{this.$store.state.isMember}}</h4> -->
  </template>
  
  <script>

  /* eslint-disable */ 
  import axios from "axios"

  import LodingSpinner from "../components/LodingSpinner"
  
  var memberNo = 0;
  var some = "";
  var self = this;
  
  export default {

  
    data: function () {
      return {
        items: [""],

      }
    },
    
    components : {
      LodingSpinner,
     },  

     created() {
      memberNo = this.$route.params.id;
      // url에서 id 추출하기 
      },

      methods: {
        // 마운트시 자동으로 axios 불러오는 함수 띄우기
        // 리액트에서 useEffect같은 것인가?
        
        onAxios : function () {
          let self = this;
 
          const url = `/v1/member/getCo_Mem_Jj.php`;
          const data = {
            "mode":"myAgencyList",
            "coMemberKey": 60, 
            "mb_no": memberNo,
          }

          axios.post(url, data).
          then(function(res) {
          some = res.data.agencyList[0].addr1;
          self.items.unshift(some);

            console.log(res)
           
   
          }).
          catch(function(error) {
            console.log(error);
          });
        },
      },
      beforeMount() {
        this.onAxios();
      },
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
    
  
  </style>