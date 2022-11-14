<template lang="">
    <div class="qr-container">
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
                    <p class="qr-timer">{{this.timer}}</p>
                    <button class="qr-done-btn">배출완료</button>
                 </div>
            </main>
      </div>
    </div>
</template>
<script>
export default {

    data() {
        return {
            timer: 30,
            // timer분으로 계산하는 것 만들기
        }
    },
    methods: {
        setTime : function () {
     
         
        },
    }
    
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
        background: white;
        top: 0;
        left: 0;
        width: 80%;
         margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        border-radius: 13px;


   
    }

    /* QR Header */

    
    
    .qr-header {
        background-color: #A3CF4D;
        padding: 15px 50px;
        text-align: center;
        color: white;
        font-size: 20px;
        font-weight: 600;
       
    }
    .qr-guide {
         display: flex;
         justify-content: end;
         align-items: center;
         font-size: 14px;
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
    
 </style>