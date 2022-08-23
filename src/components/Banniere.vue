<template>
    <div class="banniere">
       
       <img src="../assets/slider.jpg" alt="">
        <BanTextComponent/>
    </div>
</template>
<script>
import BanTextComponent from "@/components/BanText.vue"
export default {
    name:'BanniereComponent',
    components:{
        BanTextComponent
    }
  
}
</script>

<style scoped>

    img{ 
        width: 100%;
        height: 95vh;
        object-fit: cover;
    }
</style>