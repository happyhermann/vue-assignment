<!-- 재활용 가능하게 (두 개의 라우터) -->
<!-- @submit.prevent="login" -->


<template>
    <router-view>  
        <header class="header">
            <i class="mdi mdi-close"></i>
            <h3>로그인</h3>
        </header>
        <main class="form-box">
            <form 
            validation-schema="schema"
            v-on:submit.prevent="onSubmit"
          
            novalidate="novalidate"
            class="v-form">
             
                <!-- submit.prevent는 뷰 버전의 e.preventDefault  -->
                <section clas="v-form-box">
                     <div class="box-mb">
                      <label for="userPhone">휴대폰번호</label>
                      <input v-model="userPhone" id="userPhone" name="Phone"    type="text" placeholder="휴대폰번호를 '-'를 빼고 입력해주세요" class="input_num" />
                    </div>
                 </section>
                <section clas="v-form-box">
                     <div class="box-mb">
                      <label for="userPassword">비밀번호</label>
                      <input v-model="userPassword" id="userPassword"  name="Password"  type="text" placeholder="비밀번호를 입력해주세요" class="input_num" />
                     </div>
                 </section>
                <button  type="submit" class="button button-login">로그인</button>
                <button class="button button-signup">회원가입</button>
             </form>
        </main>
        <div class="toggle-box">        
            <span @click="isModalViewd=true" class="toggle-text">* 사장님으로 회원 가입합니다.</span>
        </div>
        <LoginModal v-if="isModalViewd" @close-modal="isModalViewd=false"/>
    </router-view>
</template>

<script>
    import axios from "axios"
    import LoginModal from "../components/LoginModal";
    // import {eventBus} from "../main";
     
    // import {Field, Form} from "vee-validate";
    // import {object, string} from 'yup';


 
    export default {
 
       
         data: function () {
 
            //  initial state of userDetails
            return {
                userPhone : '',
                userPassword: '',
                 // Phone: null,
                // Password: null,

                // modal 관리 상태값 
                isModalViewd: false,
                isLoggedIn: 0,
                type: 0,
                // 0이 초기값이자 로그인 되지 않았다는 value

                // props
              

                // validation state value
                valid : {
                  userPhone : false,
                  userPassword: false,
                }, 
                emailHasError : false,
                passwordHasError: false,
              }
          },
         components : {
            LoginModal,
            
         },


         watch : {
            userPhone (a) {
                if (!a) {
                    console.log("아이디 비었음")
                    // 여기서 값 true로 변경시키는 값을 props로 보내면 됨
                    // 데이터를 같이 담아서 

                }
            },
            userPassword (b) {
                if (!b) {
                    console.log('비밀번호 비었음')
                       // 여기서 값 true로 변경시키는 값을 props로 보내면 됨
                        // 데이터를 같이 담아서 

                        // props or slot
                }
            },
            
         
            
         },
         
         // watch 함수를 통해 특정 데이터 감시
         methods: {

           
 
          
           // 메서드에 파라미터를 넣어볼까? 그리고 axios에서 넣어서 실행 될 때,
           // 조건문에서 파라미터에 넣는 파라미터에 따라 값이 달라지는 것으로 하도록 하자
            onSubmit () {
            console.log(this.userPhone, this.userPassword);
 
            let self = this;
            // 여기에 인스턴스 생성? 가장 상위 스코프 변수 생성 

            const url = `group/bbs/login_check_mb.php`
             const data = {
                "mb_id": this.userPhone,
                "mb_password": this.userPassword,
                "autoLogin" : 0,
                "join_type": 1, 
                "mode" : "login",

            }
            // 01028725785
            // axios variables
            axios.post(url, data).
            then(function(res) {

            const type = res.data.member.joinType;
            // 사장님 or 파트너
            const memNumber = res.data.member.mb_no;
            // member_no 

            console.log(res)
 
            if (type == "1") {
                 self.$router.push('/boss')
             } else if (type == "2") {
              self.$router.push(`/partner/${memNumber}`)
              // self.$router.push({name: "Params", params: { name: 'parms', age : 2}});
              }
            })
            .catch(function(error) {
                console.log(error);
             });
            },
       
            // submit methods 
         },
 

     }

 
     // issue 

     // 1. 아이디, 비밀번호 require
     // 2. error 호출 (아이디 입력, 비밀번호 입력)


     // modal state를 true로 만들면 modal이 뜨는데 이것이 뜨는 기준은 
     // errors가 떴을때 즉, 입력 안 받았을 때, 그렇다면 
     // form validation 조건문안에 state를 변경해주는 것이 같이 있을 ㅓㄱ시앋.,
</script>
 
<style scoped>
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