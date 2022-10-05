const st = styled.div``

<!-- eslint-disable -->

 <!-- Main Page -->
 <template>
  <router-view>
    <router-link to="/boss" >사장님</router-link>
   <router-link to="/partner" >사장님</router-link>
 

  </router-view>

</template>

<script>

export default {
 
  name: 'MyHome',

  data: () => ({
 
   
  }),
}
</script>
