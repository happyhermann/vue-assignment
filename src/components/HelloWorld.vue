 

<!-- eslint-disable -->

 <!-- Main Page -->
 <template>
   <router-link to="/boss" >사장님</router-link>
   <router-link to="/partner" >사장님</router-link>

</template>

<script>

export default {
 
  name: 'HelloWorld',

  data: () => ({

     items: [
        {
          icon: 'mdi-inbox',
          text: 'Inbox',
        },
        {
          icon: 'mdi-star',
          text: 'Star',
        }, 
      ],
      model: 1,
   
  }),
}
</script>
