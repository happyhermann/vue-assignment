  <!-- eslint-disable -->


<template>
  <router-view>   
      <v-container>
        <v-row class="text-center">
          <img src="https://cdn.quv.kr/oluwww1tm%2Fup%2F63218781ee0b0_1920.png" />
          <p>사장님! 로그인 성공하였습니다</p>
        </v-row>

        <LodingSpinner :loading="LoadingStatus" />
        <!-- 1초뒤 로그인 성공화면 보여주기, react의 jsx + 연산자 useeffect-->
      </v-container>
    </router-view>
  
  </template>
  
  <script>
     import LodingSpinner from "../components/LodingSpinner"
    //  import bus from '../utils/EventBus'
     // import bus from "../utils/bus.js"
 
  
  export default {
    


   

    name: 'MyBoss',

    components: {
      LodingSpinner,
 
    },

    
  
    data: () => ({
      LoadingStatus: false,

      methods: {
      
        startSpinner() {
          this.LoadingStatus = true;
        },
        endSpinner() {
          this.LoadingStatus = false;
        }
      },
      
     
    }),
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