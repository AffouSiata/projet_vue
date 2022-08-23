<template>
    <div>
       <NavbarComponent/> 
       <BanniereComponent/>
    </div>
</template>
<script>
import NavbarComponent from "@/components/Navbar.vue"
import BanniereComponent from "@/components/Banniere.vue";
export default {
    name:'HeaderComponent',
    components:{
        NavbarComponent,
        BanniereComponent
       
    }
}
</script>