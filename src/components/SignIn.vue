<!-- 재활용 가능하게 (두 개의 라우터) -->

<template>
    <router-view>  
        <header class="header">
            <i class="mdi mdi-close"></i>
            <h3>로그인</h3>
        </header>
        <main class="form-box">
            <form class="v-form">
                <section clas="v-form-box">
                  <div class="box-mb">
                    <label>휴대폰번호</label>
                    <input type="number" placeholder="휴대폰번호를 '-'를 빼고 입력해주세요" class="input_num" />
                  </div>
                </section>
                <section clas="v-form-box">
                  <div class="box-mb">
                    <label>비밀번호</label>
                    <input type="number" placeholder="비밀번호를 입력해주세요" class="input_num" />
                  </div>
                </section>
                <button class="button button-login">로그인</button>
                <button class="button button-signup">회원가입</button>
            </form>
        </main>
        <div class="toggle-box">        
            <span class="toggle-text">* 사장님으로 회원 가입합니다.</span>
        </div>

    </router-view>
</template>

<script>
  
    export default {
      name: 'SignIn',
    
      data: () => ({
       
      }),
    }
</script>
 
<style>
 header {
    display : flex;
    align-items: center;
    padding: 20px;
    justify-content: center;
    position: relative;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 32px;

 }

 header i {
    position: absolute;
    left: 5%;
    font-size: 24px;

 }

 header h3 {
    font-size: 19px;
    font-weight: 700;
    text-align : center;
 }

 .v-form {
    padding: 0 20px;
 }

 .box-mb {
    display: flex;
    flex-direction : column;
    margin-bottom: 15px;
    

 }
 .box-mb label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
  }
 .box-mb input {
    width: 100%;
    padding: 12px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    height: 48px;
  }

  .button {
    color: #1f1f1f;
    font-size: 16px;
    width: 100%;
    font-weight: 400;
    height: 52px!important;
    border-radius: 8px;
    padding: 0;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .button-login {
    background: #ffba00!important;
    margin-bottom: 10px;
  }
  .button-signup {
    background: #42b863!important;

  }
  .toggle-box {
    text-align: center;
  }
  .toggle-text {
    font-size: 14px;
    color: red;
    font-weight: 400;
   }

 


</style>