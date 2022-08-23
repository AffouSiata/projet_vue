<template>
      <div>
          <HeaderComponent/>
          <ProposComponent/>
          
      </div> 
</template>

<script>
import HeaderComponent from '@/components/Header.vue'
import ProposComponent from '@/components/Propos.vue'
export default {
  name: 'home',
  components:{
   HeaderComponent,
   ProposComponent
  }

  
}
</script>
<style scoped>

    h1{
      margin-top: 90px;
      font-size: 60px;
      color: rgb(27, 125, 210);
    }
   
</style>
