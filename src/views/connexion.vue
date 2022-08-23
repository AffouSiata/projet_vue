<template>
      <NavbarComponent class="nave"/>
    <div class="inscrire">
        <!-- <h1>connectez vous svp</h1> -->
        <form action="">
            <h2>Connexion</h2>
             <p>Veuillez créer un <a href="/inscription">compte SVP</a></p> 
           
             <div class="formes">
                <input type="email" placeholder="entrer l'Email">
               
            </div>
             <div class="formes">
                <input type="password" placeholder="entrer le mot de passe">
            </div>
             <div class="formes btn">
                <input type="submit">
            </div>

        </form>
    </div>
</template>
<script>
import NavbarComponent from "@/components/Navbar.vue"
export default {
    name:'connexion',
    components:{
        NavbarComponent,
    }
}
</script>
<style scoped>
 .nave{
       background-color: aliceblue;
    }
    .inscrire{
        height: 900px;
        margin-top: 120px;
        border: 1px solid black;
    }
    form{
        border: 2px solid #3DA3D4;
        background-color:white;
        margin: 200px auto;
        width: 500px;
        height: 500px;
        border-radius: 10px;
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    }
    h2{
        font-size: 40px;
        font-weight: bold;
        padding: 20px 0px;
        
    }
    p{
        margin-bottom: 20px;
    }
    .formes input{
        margin-top: 30px;
        width: 429px;
        padding: 20px; 
        font-size: 20px;
        border-radius: 15px;
        /* border: 2px solid red; */
        background-color: aliceblue;
    } 
    .btn input{
        margin-top: 30px;
        width: 429px;
        font-size: 30px;
        border-radius: 15px;
        background-color: #3DA3D4;
        font-weight: bold;
    }
    .btn input:hover{
        margin-top: 30px;
        width: 429px;
        font-size: 30px;
        border-radius: 15px;
        background-color:white;
        font-weight: bold;
        color: #3DA3D4;
        border: 2px solid #3DA3D4;
    }
</style>
