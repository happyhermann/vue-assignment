<template>
  <div class="main-page">
    <router-view></router-view>
  </div>
  <div class="footer">
    <my-footer/>
  </div>


</template>

<script>

 import MyFooter from "./components/MyFooter.vue";

 
 
export default {
  name: 'App',

  components: {
     MyFooter,
 },

  data: () => ({
    //
  
  }),
}
</script>
