  <!-- eslint-disable -->


  <template>
    <router-view>   
        <v-container>
          <v-row class="text-center">
            <h3>my footer</h3>
            <button @click="onTest()">api 테스트</button>
          </v-row>
        </v-container>
      </router-view>
    
    </template>
    
    <script>
    import axios from "axios"
     
    export default {
      name: 'MyFooter',
    
      data: () => ({
        id : 'test',
        pw: '1234',
       
      }),
      methods: {

        onTest () {
          console.log(this.id, this.pw);
          

          const url = `/testLee/bbs/login_checking.php`
          // const data = {
          //   "id": this.id,
          // }

          axios.post(url, {
            id: this.id,
            pw: this.pw,

          }).
          then(function(res) {
            console.log(res)
           }).catch(function(error) {
            console.log(error)
          });
        }   
      }
    }
    </script>
    