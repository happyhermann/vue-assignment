<!-- @ 슬라이더 컴포넌트 -->

<template>
      <swiper
            effect="card"
            slides-per-view="3"
            :free-mode="true"
            :space-between="5"
            :grab-cursor="true"
            :speed="2500"
            :autoplay="{
                  delay: 1,
                  disableOnInteraction: false,
            }"
            :pagination="{
                  clickable: true,
            }"
            loop="auto"
            :navigation="true"
            :modules="modules"
            class="mySwiper"
      >
            <swiper-slide v-for="(slide, i) in 데이터" :key="i" class="slide">
                  <img class="slide-image" :src="slide.image" />
            </swiper-slide>
      </swiper>
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
#app {
      height: 100%;
}
html,
body {
      position: relative;
      height: 100%;
}

body {
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color: #000;
      margin: 0;
      padding: 0;
}

.swiper {
      width: 100%;
      height: 120px;
}

.slide-title {
      font-size: 11px;
      text-align: center;
      background-color: #0079f2;
      color: white;
      padding: 2px 10px;
      width: 50%;
      margin: 0 auto;
      border-radius: 20px;
}

.swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
}

.swiper-slide img {
      display: block;
      width: 100%;
      height: 100px;
      margin-top: 6px;
}

.swiper-button-next {
      display: none;
}
.swiper-button-prev {
      display: none;
}
</style>
