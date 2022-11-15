<!-- @ 슬라이더 컴포넌트 -->

<template>
       <p class="slide-title">올수 협력 프랜차이즈</p>
       <div class="slide-box">
            <div v-for="img in 데이터" class="slide-img-box" key="img.id">
                  <img id="iogo-imgs"  :src="img.image" alt="프랜차이즈 로고"/>
            </div>
       </div>
        
</template>

<script>
import data from "../data.js";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";

// import required modules
import { Autoplay, Navigation, EffectFade, EffectCoverflow } from "swiper";

export default {
      components: {
            Swiper,
            SwiperSlide,
      },
      setup() {
            return {
                  modules: [Autoplay, Navigation, EffectFade, EffectCoverflow],
            };
      },
      data() {
            return {
                  데이터: data,
            };
      },
      mounted() {
            this.test();
      },
      methods: {
            test: function () {
                  console.log(data);
            },
      },
};
</script>

<style>
 
.slide-title {
      
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 0px;
      padding-bottom: 23px; 
      border-bottom: 1px solid #e1dee6;
    
}

 

.slide-box {
      display: flex;
      justify-content: space-between;
      width: 100%;
  }
 .slide-img-box {
      width: 100%;
      margin-top: 12px;
       background: #FFFFFF;
      box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.05);
      border-radius: 12px;
      padding: 0px 5px; 
      margin-right: 15px;
  }
 .slide-img-box:last-child {
      margin-right: 0;
 }
 
 .slide-img-box > img {
      width: 100%;
      height: 100%;
      display: block;
      margin-top: 0% !important;
      margin-bottom: 0% !important;
      padding: 5px;
      
  }



</style>
 