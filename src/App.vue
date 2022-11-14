<template>
      <div class="main-page">
            <transition name="slide-fade" mode="out-in">
                  <router-view></router-view>
            </transition>
      </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({ duration: 900 });

export default {
      name: "App",

      data: () => ({
            //
            
      }),
};
</script>

<style>

* {
      font-family: 'Noto Sans KR', sans-serif;

}

.fade-enter {
      opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
      transition: opacity 0.4s ease-out;
}

.fade-leave-to {
      opacity: 0;
}

.slide-fade-enter {
      transform: translateX(10px);
      opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
      transition: all 0.5s ease;
}

.slide-fade-leave-to {
      transform: translateX(-10px);
      opacity: 0;
}
</style>
