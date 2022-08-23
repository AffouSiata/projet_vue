<template>
    <div class="partie1">
        <img alt="Vue" src="../assets/logo1.png">
        <nav>
            <div class="menu-item"><a href="/">Home</a></div>
            <div class="menu-item"><a href="/about">About</a></div>
            <div class="menu-item"><a href="/contact">Services</a></div>  
            <div class="menu-item"><a href="/contact">Contact</a></div>  
        </nav>
        <div class="menu-item login"><a href="/connexion"><i class="fa fa-sign-in"></i>Connexion</a></div> 
    </div>
</template>
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
        /* background-color: #FFF; */
        box-shadow: rgb(44, 44, 43);


      

       
    
    }
    .partie1-active{
        background-color: #FFF;
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
    .login a{
        font-size: 20px;
        color: black;
        font-weight: bold;
    }
     .login a i{
        margin-right: 10px;
     }
    .login a:hover{
        color: #3DA3D4;
     }
    

    
</style>

 