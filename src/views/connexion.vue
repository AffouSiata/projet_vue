<template>
      <NavbarComponent class="nave"/>
    <div class="inscrire">
        <form action="">
            <h2>Connexion</h2>
             <p>Veuillez créer un <a href="/inscription">compte SVP</a></p> 
             <span class="erreur"></span>
           
             <div class="formes">
                <input type="email" placeholder="entrer l'Email" v-model="email">
               
            </div>
             <div class="formes">
                <input type="password" placeholder="entrer le mot de passe" v-model="password">
            </div>
             <div class="btn">
                <button @click.prevent="loginne">Connection</button>
            </div>

        </form>
    </div>
</template>
<script>
import NavbarComponent from "@/components/Navbar.vue"

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase';
const auth = getAuth(app);

export default {
    name:'connexion',
    components:{
        NavbarComponent,
    },
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        

        async loginne(){


            function showerror(errorMe){
                    document.querySelector(".erreur").innerHTML = errorMe;
                    if (errorMe.code == "auth/user-not-found") {
                        showerror("l'utilsateur n'existe pas");
                        return false;
                    }
                    if (errorMe.code == "auth/wrong-password") {
                        showerror("Mauvais mot de passe");
                        return false;
                    }
                    
                    
            }
            signInWithEmailAndPassword(auth, this.email, this.password)
            .then((user)=>{
                console.log(user);
                this.$router.replace('/consulte');
            })
            .catch((e)=>{
                console.log(e.code);
                showerror(e)
            })
        }
    }

}
</script>
<style scoped>
    .nave{
       background-color: aliceblue;
    }
    .inscrire{
        margin-top: 100px;
        background:  rgba(175, 172, 172, 0.7)url('../assets/bg.jpg') no-repeat center;
        background-size: cover;
        background-attachment: scroll;
        height: 90vh;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        text-align: center;
        background-blend-mode: darken;


       
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
        text-align: center;
        
    }
    p{
        text-align: center;
        margin-bottom: 20px;
    }
    .formes input{
        margin-top: 30px;
        width: 429px;
        padding: 20px; 
        font-size: 20px;
        border-radius: 15px;
        background-color: aliceblue;
        margin-left: 20px;
    } 
   .btn {
        margin-top: 30px;
        width: 429px;
        font-size: 30px;
        border-radius: 15px;
        background-color: #3DA3D4;
        margin-left: 20px;
    }
    .btn button{
        background: none;
        font-size: 34px;
        font-weight: bold;
        border: none;
    }
     .btn button:hover{
        color: #3DA3D4;
     }
    .btn:hover{
        
        background-color:white;
        font-weight: bold;
        border: 2px solid #3DA3D4;
    }
    .erreur{
        color: red;
        font-weight: bold;
    }
</style>
