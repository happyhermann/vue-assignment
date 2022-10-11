 

<!-- eslint-disable -->
  <template>
  <section class="container">
    <h3>기타, 가입유형을 정확하게 선택해주세요</h3>
    <div class="main">
      <ul>
        <router-link to="/signin">
          <li class="list">
          <div class="list-left">   
            <div class="list-img">        
               <img class="img" src="http://175.118.126.222/m/img/avatar1.ecd893ee.png" alt="사장님 아이콘" />
            </div>
            <div class="list-texts">
              <span>사장님</span>
              <p>폐식용유(동물성유지)</p>
              <p>배출을 원하시나요?</p>
            </div>
          </div>
          <div class="list-arrow">
            <i class="mdi mdi-chevron-right"></i>
          </div>
        </li>
        </router-link>
        <router-link to="/signin">
          <li class="list">
            <div class="list-left">   
                <div class="list-img">   
                  <img class="img" src="http://175.118.126.222/m/img/avatar2.c7eb09db.png" alt="수거 파트너 아이콘" />
                </div>
                <div class="list-texts">
                  <span>수거파트너(중상)</span>
                  <p>폐식용유(동물성유지)</p>
                  <p>수거를 원하시나요?</p>
                </div>
              </div>
            <div class="list-arrow">
                <i class="mdi mdi-chevron-right"></i>
            </div>
          </li>
         </router-link> 
        <li class="list">
          <div class="list-left">   
              <div class="list-img">    
                <img class="img" src="http://175.118.126.222/m/img/avatar3.35075558.png" alt="협력파트너 아이콘" />
              </div>
              <div class="list-texts">
                <span>협력파트너(좌상)</span>
                <p>수거협력사</p>
              </div>
            </div>
            <div class="list-arrow">
              <i class="mdi mdi-chevron-right"></i>
            </div>
        </li>
      </ul>
    </div>
  </section>



 
</template>

<script>

export default {
  
 
  name: 'MyHome',

  data: () => ({
 
   
  }),
  // 라우터 마운트되면 자동으로 로딩 띄우는 useEffect같은 것 만들기 
}
</script>



<style>
  
  .container {
    width:100vw;
  }

  a {
    text-decoration : none;
    color: inherit;
  }
 
  i {
    font-size: 28px;
  }
  /* right arrow icons */

  h3:first-child {
    font-size: 20px;
   padding: 15px 20px;
  }

  .list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    border-bottom: 1px solid #e5e5e5;
  }
  

  .list-left {
    display: flex;
    align-items: center;

  }

  .list-texts > span {
    font-size: 16px;
    font-weight: 700;
    display: block;
    margin-bottom: 3px;
  }
  .list-texts p {
    font-size: 16px;
    font-weight: 600;
    color: rgba(0,0,0,0.4)
  }

  .list-img {
    width:60px;
    height:90px;
    margin-right:15px;
  
  }
  .img {
    
    width:100%;
  }

</style>