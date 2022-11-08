<template>
      <div class="modal">
            <div class="overlay" @click="$emit('close-modal')"></div>
            <div class="modal-card">
                  <slot />
                  <div class="error-texts">
                        <h3></h3>
                  </div>
                  <!-- 재사용 데이터 바인딩, 아이디 비번에 따라 상태값 바뀜 -->
                  <p>확인</p>
            </div>
      </div>
</template>

<script>
export default {
      name: "LoginModal",
};
</script>

<style>
.modal,
.overlay {
      width: 100%;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0;
}
.overlay {
      opacity: 0.4;
      background-color: black;
}
.modal-card {
      position: relative;
      max-width: 80%;
      margin: auto;
      margin-top: 80%;
      padding: 20px;
      background-color: white;
      min-height: 10%;
      z-index: 999;
      opacity: 1;
      text-align: center;
}
.error-texts {
      border-bottom: 1px solid #e5e5e5;
      margin-bottom: 15px;
}
</style>
