 <!-- eslint-disable -->


 <div></div>
<template>
  <v-app>
    <v-main>
      <HelloWorld/>
     </v-main>
  </v-app>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue';
  // import MyBoss from './components/MyBoss.vue'
  // import MyPartner from './components/MyPartner.vue'

export default {
  name: 'App',
 
  components: {
    HelloWorld,
    // MyBoss,
    // MyPartner,
    
  },

  data: () => ({
    //
  }),
}
</script>
