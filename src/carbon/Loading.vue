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
     position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    z-index: 1000;
    justify-content: center;
    align-items: center;
    margin: -30px 0 0 -30px;
}

.spinner {
    position: absolute;
    top: 50%;
    left: 50%;
 
}

.spinner-text {
    color: white;
}
    
</style>