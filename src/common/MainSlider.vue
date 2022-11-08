<!-- @ 슬라이더 컴포넌트 -->

<template>
      <swiper
            effect="fade"
            slides-per-view="1"
            :space-between="30"
            :centered-slides="true"
            :autoplay="{
                  delay: 2000,
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
            <swiper-slide v-for="(slide, i) in 데이터" :key="i">
                  <img :src="slide.image" />
                  <h3>{{ slide.title }}</h3>
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

// import required modules
import {
      Autoplay,
      Pagination,
      Navigation,
      EffectFade,
      EffectCards,
} from "swiper";

export default {
      components: {
            Swiper,
            SwiperSlide,
      },
      setup() {
            return {
                  modules: [Autoplay, Pagination, Navigation, EffectFade],
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
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color: #000;
      margin: 0;
      padding: 0;
}

.swiper {
      width: 100%;
      height: 100%;
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
      height: 100%;
      object-fit: cover;
}
</style>
