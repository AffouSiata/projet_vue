<template>
      <!-- <div ></div> -->
      <div>
          <HeaderComponent/>
          <ProposComponent/>
          <!-- <ServoceComponent/> -->
          <doctorComponent/>
          <ContactComponent/>
          <FooterComponnent/>

          
      </div> 
</template>

<script>
import HeaderComponent from '@/components/Header.vue'
import ProposComponent from '@/components/Propos.vue'
// import ServoceComponent from '@/components/Servoce.vue'
import doctorComponent from '@/components/doctor.vue'

import ContactComponent from '@/components/Contact.vue'
import FooterComponnent from '@/components/Footer.vue'

export default {
  name: 'home',
  components:{
   HeaderComponent,
   ProposComponent,
  //  ServoceComponent,
   doctorComponent,
   ContactComponent,
   FooterComponnent
  }

  
}
</script>
<style scoped>
   
</style>
