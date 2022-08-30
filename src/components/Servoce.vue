<template>
    <div class="services">
        <div class="text">
            <h3></h3>
            <div class="menu-item lienne" onclick="lien()"><a href="/connexion">Consultation Medicale en ligne</a></div> 
        </div>
    </div>
</template>
<script>
import "@/assets/main.js"
export default {
    name:"ServoceComponent"
}
</script>
<style scoped>
    .services{
        margin-top: 50px;
        width: 100%;
        height: 300px;
        background-color: aliceblue;
    }
    .text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       
    }
    h3{
        font-size: 40px;
        margin-top: 80px;
    } 
    .text.menu-item:hover{
          background-color: white;
          border: 2px solid #3DA3D4;;
          
          
     }
     .text .menu-item{
        margin-top: 30px;
     }
    .text .menu-item a{
        background-color: #3DA3D4;
        color: white;
        font-size: 35px;
        text-align: center;
        /* margin-left: 30px; */
        font-weight: bold;
        padding: 5px;
        width: 280px;
        
    }
    .text .menu-item a:hover{
        background-color: white;
        border: 2px solid #3DA3D4;
        color: #3DA3D4;      
    }
</style>