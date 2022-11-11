<template>
      <div class="form-validation">
            <form @submit="formSubmit">
                  <div>
                        <label for="id">아이디</label>
                        <input id="id" v-model="id" type="text" />
                  </div>
                  <div>
                        <label for="pw">비밀번호</label>
                        <input id="pw" v-model="pw" type="text" />
                  </div>
                  <button type="submit">로그인</button>
            </form>
      </div>
</template>

<script>
export default {
      name: "FormValidation",
      components: {},
      data() {
            return {
                  id: "",
                  pw: "",
            };
      },
      methods: {
            formSubmit(e) {
                  e.preventDefault();

                  // code..
                  if (this.id == "") {
                        alert("아이디를 입력해 주세요.");
                  }

                  if (!/^[a-zA-Z0-9]{8,20}$/.test(this.pw)) {
                        alert(
                              "비밀번호는 영문 or 숫자 8자 이상 20자 미만으로 입력해 주세요.",
                        );
                  }

                  return true;
            },
      },
};
</script>

<style scoped></style>
