<template>
    <div class="partie1">
        <img alt="Vue" src="../assets/logo2.png">
        <nav>
            <div class="menu-item"><router-link to="/" class="lien" >Home</router-link></div>
            <div class="menu-item"><router-link to="#about" class="lien" >About</router-link></div>
            <div class="menu-item"><router-link to="#contact" class="lien" >Contact</router-link></div>  
        </nav>
        <div class="menu-item consul"><router-link to="/connexion">Consultation Medicale en ligne</router-link></div> 
    </div>
</template>
<!-- <i class="fa fa-sign-in"></i> -->
<script>
import "@/assets/main.js"
export default {
    name:'NavbarComponent'
}
</script>

<style scoped>

    .partie1{
        position: fixed;
        width:100vw ;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin: 0px auto;
        padding: 1rem 0;
        top:0;
        box-shadow: rgb(44, 44, 43);
        font-family: 'Didot', serif;
        z-index: 5;
    }
    .partie1-active{
        background-color: #b2e2f8;
        transition: 0.5s ease-in;
    }
    .partie1 img{
        background-color: transparent;
        height: 70px;
    }

    nav{
       
        display:flex;
        align-items: center;
        justify-content: center;
    }
    nav .menu-item{
        color: black;
        padding: 10px  20px;
        position: relative;
        text-align: center;
        border-bottom:3px solid transparent;
        display: flex;
        transition: 0.4s ;
    }
    nav .menu-item:hover{
        color: white;
      }
    nav .menu-item a{
        color: inherit;
        font-size: 20px;
        font-weight: bold;
         
    }
    nav .menu-item.active, 
    nav .menu-item:hover{
        background-color: rgb(144, 141, 141);
        border-bottom-color: #3DA3D4 ;
        border-radius: 10px;
       
    }
    .consul{
        background-color: #46b4e7;
        padding: 10px;
        border-radius: 10px;
       
    }.consul:hover{
        border: 2px solid #46b4e7;
        background-color: #fff;
    }
    .consul a{
        color: #fff;
        font-weight: bold;
    }
    .consul a:hover{
        color: #3DA3D4;
    }
  
   
    

    
</style>

 