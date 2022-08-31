<template>
      <NavbarComponent class="nave"/>
    <div class="inscrire">
        <!-- <h1>connectez vous svp</h1> -->
        
        <form action="">
            <h2>Inscrire Toi</h2>
            <span class="error"></span>
            <!-- <p>Veuillez créer un <a href="">compte SVP</a></p> -->
            <div class="forme">
               <div class="forme1">
                    <input type="text" placeholder="Entrer le nom" v-model="nom">
                    <small v-if="v$.nom.$error">{{v$.nom.$errors[0].$message}}</small><br>
               </div>
               <div class="forme2">
                    <input type="text" placeholder="Entrer le prenom" v-model="prenom">
                    <small v-if="v$.prenom.$error">{{v$.prenom.$errors[0].$message}}</small><br>
               </div>
            </div>
             <div class="formes">
                <input type="email" placeholder="Entrer l'Email" v-model="email">
                <small v-if="v$.email.$error">{{v$.email.$errors[0].$message}}</small><br>
               
            </div>
             <div class="formes">
                <input type="password" placeholder="Entrer le mot de passe" v-model="password">
                <small v-if="v$.password.$error">{{v$.password.$errors[0].$message}}</small><br>
            </div>
             <div class="btn">
                 <button @click.prevent="register">signup</button>
                <!-- <input type="submit" @submit="register"> -->
            </div>
            <!-- <span>or go back to <router-link to="/connexion">login</router-link>.</span> -->

        </form>
    </div>
</template>
<script>
import  NavbarComponent from "@/components/Navbar.vue";  

import useVuelidate from '@vuelidate/core';
import {mdp_plex,champvaleur,champemail,longminNom,longmaxNom,longmaxprenom,longminprenom} from "../nosfonctions/regle";
 

import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase';

export default {
    name: "inscription",
    components:{
        NavbarComponent
    },
    data() {
        return {
            nom: "",
            prenom: "",
            email: "",
            password: "",
            
            v$: useVuelidate()
        };
    },
    validations: {
        nom: { champvaleur, longmin: longminNom(4), longmax: longmaxNom(10)
        },
        prenom: { champvaleur, longPmin: longminprenom(6), longPmax: longmaxprenom(20)
        },
        email: { champvaleur, champemail
        },
        password: { champvaleur, mdp_plex
        }
    },
    methods: {
        async register() {
            this.v$.$touch();
            if (this.v$.$errors.length === 0) {
                // console.log("c'est bon tu peux pas passer a la suite");
            }
            /* backend */
            function showerror(errorMe) {
                document.querySelector(".error").innerHTML = errorMe;
                if (errorMe.code == "auth/email-already-in-use") {
                    showerror("l'email existe déja");
                    return false;
                }
                // if(){
                // showerror("le mot de passe existe déja")
                // return false;
                // }
                // if(errorMe.code=="auth/invalid-email"){
                // showerror("l'email est invalid")
                // return false;
                // }
                // if(errorMe.code=="auth/invalid-email" || errorMe.code=="auth/internal-error"){
                // showerror("les champs ne doivent pas etre vide")
                // return false;
                // }
                // if(errorMe.code=="auth/weak-password"){
                // showerror("le mot passe est trés court")
                // return false;
                // }
            }
            createUserWithEmailAndPassword(auth, this.email.trim(), this.password)
                .then((user) => {
                console.log(user);
                this.$router.replace("/connexion");
            })
                .catch((e) => {
                console.log(e.code);
                showerror(e);
            });
            /*  fin backend */
        }
    },
};
</script>
<style scoped>
    .nave{
        background-color:aliceblue
    }
    .inscrire{
      
        margin-top: 100px;
        background: rgba(175, 172, 172, 0.7) url('../assets/bg.jpg') no-repeat center;
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
        width: 700px;
        height: 700px;
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
        margin-bottom: 20px;
    }
    .forme{
        width: 100%;
        display: flex;
    }
    .forme1 input{
        margin-top: 30px;
        width: 300px;
        margin-left: 20px;
        padding: 20px;
        font-size: 20px;
        border-radius: 15px;
        background-color: aliceblue;
        border: none; 
        display: flex;
       
  
    }
    .forme2 input{
        margin-top: 30px;
        width: 300px;
        margin-left: 20px;
        padding: 20px;
        font-size: 20px;
        border-radius: 15px;
        background-color: aliceblue;
        border: none;
        display: flex; 
       
  
    }
    .formes input{
        margin-top: 20px;
        width: 629px;
        padding: 20px; 
        font-size: 20px;
        border-radius: 15px;
        background-color: aliceblue;
        margin-left: 20px;
        border: none; 
        display: flex;
    } 
    
    .btn {
        margin-top: 30px;
        width: 629px;
        font-size: 30px;
        border-radius: 15px;
        background-color: #3DA3D4;
      
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
        background-color: white;
        color: #3DA3D4;
        border: 2px solid #3DA3D4;
    }
    span {
        display: block;
        margin-top: 20px;
        font-size: 21px;
    }
    .error{
        color: red;
        font-weight: bold;
    }
    small{
        color: red;
        font-weight: bold;
    }
</style>
