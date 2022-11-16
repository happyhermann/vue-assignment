<!-- eslint-disable -->

<template>
      <router-view>
            <v-container>
                  <v-row class="text-center">
                        <img
                              src="https://cdn.quv.kr/oluwww1tm%2Fup%2F63218781ee0b0_1920.png"
                        />
                        <p>사장님! 로그인 성공하였습니다</p>
                  </v-row>

                  <!-- 1초뒤 로그인 성공화면 보여주기, react의 jsx + 연산자 useeffect-->
            </v-container>
      </router-view>
</template>

<script>
export default {
      name: "MyBoss",

      data: () => ({}),
};
</script>

<style>
 
</style>
