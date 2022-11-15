<template lang="">


    <div class="layerPopup">
        <v-progress-circular
        class="spinner"
        :size="80"
        :width="8"
      color="amber"
      
      indeterminate
    >
    <p class="spinner-text">배출중</p>
</v-progress-circular>

    </div>
</template>
<script>
export default {
    
}
</script>
<style>

.layerPopup {
    /* display :block; */
  
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    z-index: 3000;
    position: fixed;
    width: 100%;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

}

.spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
 
}

.spinner-text {
    color: white;
}
    
</style>