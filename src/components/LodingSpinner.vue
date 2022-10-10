<template>
  <v-progress-circular 
      v-if="loading"
      :size="50"
      :width="7"
      color="purple"
      indeterminate
    ></v-progress-circular>
</template>

<script>
    export default  {
        name: "LodingSpinner",

        props: {
            loading: {
                type: Boolean,
                required: true,
            }
        }
    };
</script>

<style scoped>
   .v-progress-circular {
    position: fixed;
    top: 35%;
    left: 45%;
   }
 

</style>