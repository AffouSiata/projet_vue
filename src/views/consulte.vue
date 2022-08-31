<template>
  
    <div class="consulte">
        <div class="consulte1"></div>
        <div class="consulte2">
            <div class="con">
                <p class="mise">25/08/2022</p>
                <div class="con1">
                    <a href=""> Mon Profil</a>
                    <a href=""> Logout</a>
                </div>
            </div>
            <div class="conn">
                <div class="header">
                    <legend>Bienvenue</legend>
                </div>

               





                <div class="content">
                <!-- <form action=""> -->
                    <div class="form-group">
                        <label for="" class="special">Spécialité</label>
                        <select name="" id="" v-model="specialite">
                            <option value="">Spécialité</option>
                            <option value="Gyneco">Gyneco</option>
                            <option value="Pédiatrie">Pédiatrie</option>
                            <option value="Médecine Génrale">Médecine Génrale</option>
                            <option value="Sexologie">Sexologie</option>
                            <option value="ORL">ORL</option>
                            <option value="Ophtalmologie">Ophtalmologie</option>
                            <option value="Dermatologie">Dermatologie</option>
                            <option value="Dentaire">Dentaire</option>
                            <option value="Homéopathie">Homéopathie</option>
                            <option value="Psychologie">Psychologie</option>
                            <option value="Autres">Autres</option>
                        </select>
                        <!-- <small v-if="v$.specialiste.$error">{{v$.specialiste.$errors[0].$message}}</small><br> -->
                         
                    </div>
                   
                    <legend>Votre Question :</legend>
                    <div class="form-group">
                        <label for="">La Question</label>
                        <textarea v-model="description"   placeholder="Tapez ici votre question. Pensez à nous fournir le maximum d'informations détaillées pour que notre réponse soit la plus pertinente possible."></textarea>
                        <!-- <small v-if="v$.description.$error">{{v$.description.$errors[0].$message}}</small><br> -->
                    </div>
                         <legend>Informations Patient:</legend>
                    <fieldset>
                        <div class="form-group">
                            <label for="" class="special"> sexe</label>
                            <select name="" id="" v-model="genre">
                                <option value="">Votre genre</option>
                                <option value="Femme">Femme</option>
                                <option value="Homme">Homme</option>
                            </select>
                            <!-- <small v-if="v$.genre.$error">{{v$.genre.$errors[0].$message}}</small><br> -->
                             <div class="blocke">
                                <div class="b">
                                    <div class="c">poids</div>
                                    <div class="d">
                                        <input type="text" placeholder="Entrer votre poids" v-model="poids">
                                        <!-- <small v-if="v$.poids.$error">{{v$.poids.$errors[0].$message}}</small><br> -->
                                    </div>
                                    <div class="e">kg</div>
                                </div>
                                 <div class="b">
                                    <div class="c">Taille</div>
                                    <div class="d">
                                        <input type="text" placeholder="Entrer votre Taille" v-model="taille">
                                        <!-- <small v-if="v$.taille.$error">{{v$.taille.$errors[0].$message}}</small><br> -->
                                    </div>
                                    <div class="e">Cm</div>
                                </div>
                                 <div class="b">
                                    <div class="c">Age</div>
                                    <div class="d">
                                        <input type="text" placeholder="Entrer votre Age" v-model="age">
                                        <!-- <small v-if="v$.age.$error">{{v$.age.$errors[0].$message}}</small><br> -->
                                    </div>
                                    <div class="e">Ans</div>
                                </div>
                            </div>
                            <label for="" class="pays">Pays</label>
                            <select v-model="pays" class="pays">
                                <option value="">Votre pays</option>
                                <option value="benin">Benein</option>
                                <option value="Mali">Mali</option>
                                <option value="Guinée">Guinée</option>
                                <option value="Sénégal">Sénégal</option>
                                <option value="Maroc">Maroc</option>
                                <option value="France">France</option>
                                <option value="Espagne">Espagne</option>
                                <option value="Burkina Faso">Burkina Faso</option>
                                <option value="Gabon">Gabon</option>

                                <option value="Canada">Canada</option>
                                <option value="Bresil">Bresil</option>
                                <option value="Anglettere">Anglettere</option>
                                <option value="Angola">Angola</option>
                                <option value="Chad">Chad</option>
                                <option value="Cote D'Ivoire">Cote D'Ivoire</option>
                                <option value="Ethiopia">Ethiopia</option>
                                <option value="Italy">Italy</option>
                                <option value="Mauritania">Mauritania</option>
                                <option value="Niger">Niger</option>
                                <option value="Rwand">Rwanda</option>
                                <!-- <option :value="c.iso" :key="c.iso" v-for="c in countryList ">{{c.country}}</option> -->
                            </select>
                            <!-- <small v-if="v$.pays.$error">{{v$.pays.$errors[0].$message}}</small><br> -->
                        </div>
                    </fieldset>

                    <legend>Traitements Actuels :</legend>
                     <div class="form-group">
                        <label for="">Les traitements</label>
                        <textarea v-model="description1" class="tera" placeholder="Tapez ici vos Traitements "></textarea>
                        <p>Indiquez à nos docteurs vos traitements si vous en avez.</p>
                        <!-- <small v-if="v$.description1.$error">{{v$.description1.$errors[0].$message}}</small><br> -->
                    </div>


                    <legend>Antécédents Médicaux :</legend>
                     <div class="form-group">
                        <label for="" class="titre">Les Antécédents</label>
                        <textarea v-model="description2" class="tera" placeholder="Tapez ici vos Antécédents "></textarea>
                        <p>Indiquez à nos docteurs vos Antécédents Médicaux si vous en avez.</p>
                        <!-- <small v-if="v$.description2.$error">{{v$.description2.$errors[0].$message}}</small><br> -->
                    </div>
                    <div class="boutton">
                        <!-- <input type="submit" > -->
                        <button @click.prevent="consulte">Envoyer</button>
                    </div>
                </div>
            
        </div>     
    </div>
</div>
</template>
<script>


// function convertirDate(){
//     let date =document.querySelector('.mise')
//     console.log("zzzzzzz",date);
//     let dateLocal = new Date().toLocaleDateString('fr-FR',{
//     //    weekday:'long',
//        year:'numeric',
//        month:'long',
//        day:'numeric',



//     })
//     console.log('dakrte',dateLocal);
//    date.textContent=dateLocal


// }
// convertirDate()

// import useVuelidate from '@vuelidate/core';
// import {mdp_plex,champvaleur,champemail,longminNom,longmaxNom,longmaxprenom,longminprenom} from "../nosfonctions/regle";

import {db} from '../firebase' 
import {addDoc, collection} from "firebase/firestore"
 


export default {
    name:'consulte',
    data() {
        return {
            specialite:"",
            description:"",
            genre:"",
            poids:"",
            taille:"",
            age:"",
            pays:"",
            description1:"",
            description2:"",
            v$: useVuelidate()
        };
    },



    // validations: {
    //     nom: { champvaleur, longmin: longminNom(4), longmax: longmaxNom(10)
    //     },
    //     prenom: { champvaleur, longPmin: longminprenom(6), longPmax: longmaxprenom(20)
    //     },
    //     email: { champvaleur, champemail
    //     },
    //     password: { champvaleur, mdp_plex
    //     }
    // },
    // mounted: function() {
    //     var v = this;
    //     v.$http.get(`http://localhost:4600/countries`)
    //     .then(function(resp) {
    //         v.countryList = resp.data;
    //     })
    //     .catch(function(err) {
    //         console.log(err)
    //     });
    // },


    methods:{
       consulte(){ 

            // this.v$.$touch();
            //     if (this.v$.$errors.length === 0) {
            //     // console.log("c'est bon tu peux pas passer a la suite");
            // }
            let cons ={
                specialite:this.specialite,
                description:this.description,
                genre:this.genre,
                poids:this.poids,
                taille:this.taille,
                age:this.age,
                pays:this.pays,
                description1:this.description1,
                description2:this.description2 
            }
           console.log("eeeeeeeeeee",cons);
           addDoc(collection(db,'projects'), cons)
            .then((consulte)=>{
                console.log("res",consulte);
                console.log("added");
                this.$router.replace('/recu')
            })
            .catch((error)=>{
                console.log("rdsxfxdf",error);
                console.log("vous avez mal renseignez vos données");
            })
            
       }

    }
}
</script>
<style scoped>
   .consulte{
       display: flex;
       width: 100%;
       height: 120vh;
       opacity: 0.8;
   }
   .consulte1{
       width: 15%;
       background-color:#3DA3D4;
   }
    .consulte2{
        background-color:rgb(228, 224, 224);
        width: 85%;
    }
    .con{
        display: flex;
        justify-content: space-between;
        width: 100%;
        background-color:white;
        height: 50px;
        padding: 10px;
    }
    .con1{
        display: flex;
        flex-direction: row;
    }
    .con p{
        font-size: 20px;
        font-weight: bold;
        padding: 22px;
    }
    .con1 a{
        margin-right: 15px;
        color: rgb(224, 224, 224);
        font-weight: bold;
        font-size: 20px;
    }
    .conn{
        width: 97%;
        margin: 30px;
        background-color: white;
        height: 1050px;
        border-radius:10px ;
    }
    .form-group{
        margin-left: 400px;
        margin-top: 30px;
    }

    .header{
        padding: 15px 15px 0px;
        color: #333333;
        font-weight: 300;
        font-size: 22px;
        
    }
    legend{
        font-size: 22px;
        font-weight: 300;
        /* display: block; */
        width: 100%;
        padding: 0;
        line-height: inherit;
        color: #333;
        border: 0;
        border-bottom: 1px solid #e5e5e5;
        float: left!important;
        
    }
    .content{
        width: 100%;
        padding: 15px
    }
    label{
        display: inline-block;
        max-width: 100%;
        font-size: 14px;
        margin-bottom: 15px;
        text-transform: uppercase;
        font-weight: 400;
        color: #888888;
        margin-right: 20px;
        text-align: center;
        margin-top: -100px;


    }
   select{
        width: 1100px;
        height: 40px;
        background-color: #3DA3D4;
        border-radius:7px ;
        color: #FFFFFF;
        border: none;
        
    }
    textarea{
        background-color: #FFFFFF;
        border: 1px solid #E3E3E3;
        border-radius: 4px;
        color: rgb(79, 75, 75);
        padding: 8px 12px;
        height: auto;
        width: 1090px;
        height: 150px;
        font-size: 15px;
   
    }.blocke{
        width: 92%;
        display: flex;
        justify-content: space-between;
    }
    .b{
    margin: 30px 0 0 30px;
    border: 2px solid rgb(238, 230, 230);
    height: 40px;
    width:300px;
    display: flex;
    justify-content: space-between;
    border-radius: 7px;


    }
    .pays{
       margin-top: 40px;
       
    }
    .pays label{
        border: none!important;
    }
    .c{
        width: 150px;
        height: 40px;
        text-align: center;
        font-size: 15px;
        border-top: none;
    
    }
    .d{
        height: 40px;
    
        
    }
    .d input{
        height: 39px;
        width: 100px;
        border-top: none;
        border-bottom: none;
        outline-color: green;
        border: 2px solid #333;
        border-top: none;
        border-bottom-color: rgb(238, 230, 230);
        font-size: 13px;
    }
    .e{
        width: 150px;
        height: 40px;
        text-align: center;
        font-size: 15px;
        border-left-color: #333;
        
    }
    p{
        margin-left: 157px;
        display: block;
        color: #737373;
        margin-top: -20px;

    }
    .tera{
        margin-top: 10px;
        height: 50px;
    }
    .titre{
        margin-top: -120px; 
    }
    .boutton{
       width: 100%;
       margin-top: 60px;
    }
    .boutton button{
         width: 900px;
         text-align: center;
         margin-left: 400px;
         padding: 7px;
         font-size: 20px;
         background-color: #3DA3D4;
         border: none;
         color: white;
        border-radius: 7px;
    }
</style>