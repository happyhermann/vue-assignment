<template >
    <div v-if="switch" class="qr-container">
        <div class="qr-white-bg">
            <header class="qr-header">
                <span>탄소중립저울</span>
            </header>
            <main class="qr-main">
                <div class="qr-guide">
                    <i class="mdi mdi-information-outline"></i>
                    <span>도움이 필요해요</span>
                </div>
                <div class="qr-image-box">
                    <img class="qr" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="QR 코드"/>
                </div>
                <div class="qr-bottom">
                    <p class="qr-timer">{{this.minutes}} : {{this.seconds}} </p>
                    <button v-if="isDone"  @click="allDone()"  class="qr-done-btn ">배출완료</button>
                    <button v-else  @click="allDone()" class="qr-progress-btn ">배출완료</button>
                 </div>
            </main>
      </div>
    </div>
    <!-- 배출완료 것 조건부 렌더링 -->
    <div v-else class="qr-container">
        <div class="qr-white-bg">
            <header class="qr-header">
                <span>탄소중립저울</span>
            </header>
            <main class="qr-main">
                <div class="qr-done-guide">
                    <p class="qr-done-text">배출 완료!</p>
                </div>
                <div class="qr-done-image-box">
                    <img class="allsu-logo-3d"  :src="require(`../assets/allsu-logo-3d.png`)" alt="올수 로고"/>
                </div>
                <div class="qr-done-details">
                    <span>오늘의 배출량은  <strong>1300mL </strong>이며</span>
                    <br/><span>적립 금액은  <strong>130원 </strong>입니다</span>
                </div>
                <div class="qr-bottom">
                     <button @click="[allDone(), $emit('close')]"  class="qr-done-btn ">확인</button>
                </div>
            </main>
      </div>
    </div>
 
</template>
<script>

 
export default {


    data() {
        return {
            time: 30,
            // timer분으로 계산하는 것 만들기
            isDone: true,
            // 배출완료 state
            switch: false,
            // 모달창 배출 => 배출 완료 조건부 state

            // 시간 state
            minutes: 5,
            seconds : '00',
            counter : 300,
            
        }
        
    },
    
    methods: {

        onNext: function () {
            console.log(`배출 넥스트`);
            // 1. 이거 누르면 배출중 모달이 전체를 덮음 
            // 2. setTimeOut 7초 동안 loading components 돌아감
            // 3. 7초 뒤 모달이 꺼지고
            // 4. 배출완료 페이지 렌더링
        },
       
        allDone: function () {
            console.log(`배출완료 마무리`)
            this.switch = false;
            // QR 배출 화면으로 초기화 
            console.log(`배출완료 alldone : ${this.switch}`)
            
 
        },
        timer() {
            setInterval(() => {
                this.seconds = --this.counter % 60
                this.minutes = parseInt(this.counter / 60, 10) % 60
            }, 1000);
        }
    },
    created () {
        this.switch = true;
    },  
    mounted() {
        console.log(`마운트`)
        this.timer();
     

    },
    
}
</script>
<style>


    /* QR Background */
    .qr-container {
        width:100%;
        height:100%;
        position: fixed;
        background: rgba(0,0,0,0.43);
        top: 0;
        left: 0;
        
       
    }

    .qr-white-bg {
        position: fixed;
        border-radius: 12px;
        background: white;
        width: 90%;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);

        /*  */


   
    }

    /* QR Header */

    
    
    .qr-header {
        background-color: #A3CF4D;
        padding: 15px 50px;
        text-align: center;
        color: white;
        font-size: 22px;
        font-weight: 600;
        border-top-left-radius: 13px;
        border-top-right-radius: 13px;




       
    }
    .qr-guide {
         display: flex;
         justify-content: end;
         align-items: center;
         font-size: 14px;
    }

    .qr-quide > span {
        display: inline-block;
        margin-bottom: 5px;
    }

    .mdi-information-outline {
        font-size: 16px;

    }

  
    .qr-main {
        padding: 50px;
        text-align: center;
    }

    .qr-image-box {
        background: #FFFFFF;
        /* Brand Colors/Primary */

        border: 4px solid #FFBA00;
        border-radius: 13px;
    }

    .qr {
        width: 100%;
        height: 100%;
        margin: 0;
     }


     /* QR Bottom */

   

    .qr-timer {
        font-weight: 400;
        font-size: 20px;
        line-height: 35px;
        margin-top: 15px;
        margin-bottom: 25px;
   
         color: #FFBA00;
 
    }

    .qr-progress-btn {
        background: #E1DEE6;
    /* Gray Colors/White */

        border: 5px solid #FFFFFF;
        box-shadow: 0px 10px 20px 1px rgba(0, 0, 0, 0.1);
        border-radius: 50px;
        color: white;
        padding: 13px 45px;
        font-size: 20px;
        font-weight: 600;
    }

    /* 배출중 버튼 색 */

    .qr-done-btn {
        background: #A3CF4D;
        /* Gray Colors/White */

        border: 5px solid #FFFFFF;
        box-shadow: 0px 10px 20px 1px rgba(0, 0, 0, 0.1);
        border-radius: 50px;
        color: white;
        padding: 13px 45px;
        font-size: 20px;
        font-weight: 600;
    }
    /* 배출완료 버튼 색 */
    

    /* 배출완료 모달 */

    .qr-done-text {
        font-size: 33px;
        font-weight: 700;
    }

    .qr-done-image-box {
        width: 50%;
        height: auto;
        margin: 0 auto;

    }

    .allsu-logo-3d {
        width: 100%;
        height: auto;
        display: block;
    }

    .qr-done-details {
        font-size: 13px;
        color: gray;
        margin: 10px 0;
    }
    .qr-done-details strong {
        color: black;
    }

 </style>