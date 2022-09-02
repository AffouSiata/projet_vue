<template>
  
    <div class="consulte">
        <div class="consulte1"></div>
        <div class="consulte2">
            <div class="con">
                <p class="mise">25/08/2022</p>
                <div class="con1">
                    <a href=""> Mon Profil</a>
                    <span @click="deconnexion">Se déconnecter</span>
                </div>
            </div>
            <div class="conn">
                <div class="header">
                    <legend>Bienvenue</legend>
                </div>
                <div class="content">
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
                        <small v-if="v$.specialite.$error" class="erreur">{{v$.specialite.$errors[0].$message}}</small><br>
                          
                    </div>
                   
                    <legend>Votre Question :</legend>
                    <div class="form-group">
                        <label for="">La Question</label>
                        <textarea v-model="description"   placeholder="Tapez ici votre question. Pensez à nous fournir le maximum d'informations détaillées pour que notre réponse soit la plus pertinente possible."></textarea>
                        <small v-if="v$.description.$error" class="erreur">{{v$.description.$errors[0].$message}}</small><br>
                    </div>
                         <legend>Informations Patient:</legend>
                    <fieldset>
                        <div class="form-group">
                            <div class="res">
                                <label for="" class="special"> sexe</label>
                                <select name="" id="" v-model="genre">
                                    <option value="">Votre genre</option>
                                    <option value="Femme">Femme</option>
                                    <option value="Homme">Homme</option>
                                </select>
                            </div>
                            <small v-if="v$.genre.$error" class="erreur">{{v$.genre.$errors[0].$message}}</small><br>
                            <div class="blocke">
                               <div class="poids">
                                <div class="b">
                                    <div class="c">poids</div>
                                    <div class="d">
                                        <input type="text" placeholder="Entrer votre poids" v-model="poids">
                                       
                                    </div>
                                    <div class="e">kg</div>
                                </div>
                                
                                    <small v-if="v$.poids.$error">{{v$.poids.$errors[0].$message}}</small><br>
                               </div>
                                
                                <div class="taille">
                                    <div class="b">
                                    <div class="c">Taille</div>
                                    <div class="d">
                                        <input type="text" placeholder="Entrer votre Taille" v-model="taille"> 
                                    </div>
                                    <div class="e">Cm</div>
                                </div>
                                <small v-if="v$.taille.$error">{{v$.taille.$errors[0].$message}}</small><br>
                                </div>
                                 <div class="age">
                                    <div class="b">
                                    <div class="c">Age</div>
                                    <div class="d">
                                        <input type="text" placeholder="Entrer votre Age" v-model="age">
                                      
                                    </div>
                                    <div class="e">Ans</div>
                                </div>
                                <small v-if="v$.age.$error">{{v$.age.$errors[0].$message}}</small><br>
                                 </div>
                            </div>
                            <div class="res">
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
                            </div>
                            <small v-if="v$.pays.$error" class="erreur">{{v$.pays.$errors[0].$message}}</small><br>
                        </div>
                    </fieldset>

                    <legend>Traitements Actuels :</legend>
                     <div class="form-group">
                        <label for="">Les traitements</label>
                        <textarea v-model="description1" class="tera" placeholder="Tapez ici vos Traitements "></textarea>
                        <p>Indiquez à nos docteurs vos traitements si vous en avez.</p>
                        <small v-if="v$.description1.$error" class="erreur">{{v$.description1.$errors[0].$message}}</small><br>
                    </div>


                    <legend>Antécédents Médicaux :</legend>
                     <div class="form-group">
                        <label for="" class="titre">Les Antécédents</label>
                        <textarea v-model="description2" class="tera" placeholder="Tapez ici vos Antécédents "></textarea>
                        <p>Indiquez à nos docteurs vos Antécédents Médicaux si vous en avez.</p>
                        <small v-if="v$.description2.$error" class="erreur">{{v$.description2.$errors[0].$message}}</small><br>
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


// let date =document.querySelector('.mise')
// let dateglobal = new date()
// var annee = dateglobal.getFullYear()


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

import useVuelidate from '@vuelidate/core';
import {nonvide} from "../nosfonctions/cons";

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



    validations: {
        specialite:{nonvide},
        description:{nonvide},
        genre:{nonvide},
        poids:{nonvide},
        taille:{nonvide},
        age:{nonvide},
        pays:{nonvide},
        description1:{nonvide},
        description2:{nonvide}
    },

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
        deconnexion(){
            localStorage.clear();
            this.$router.replace('/')
        },
        consulte(){ 
        // this.v$.$validate()
            this.v$.$touch();
            if (this.v$.$errors.length == 0) {
                console.log("c'est bon tu peux pas passer a la suite");
                
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

    },
    created(){
        const util=  localStorage.getItem('utilisateur')
        console.log("oooooooo",util);
        if(util == null){
            this.$router.push('/connexion')
        }
    }

}

</script>
<style scoped>
    /* *{
        box-sizing: border-box;
    } */
   .consulte{
       display: flex;
       width: 100%;
       height: 129vh;
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
        height: 1300px;
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
        padding: 15px;

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
       /* margin-top: 60px; */
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
    .poids .taille .age{
        display: flex;
        flex-direction: column;
    }
    .erreur{
       display: flex;
       justify-content: center;
    }
    small{
        display: inline-block;
        color: red;
        font-weight: bold;
        
    }
    span{
        color: black;;
        font-weight: bold;
        font-size: 20px;
    }


   
   
    @media (max-width: 1280px){
        .consulte{
            display: flex;
            height: 90vh;
            opacity: 0.8;
   }
        .consulte1{
            width: 15%;
            height: 1690px;
            background-color:#3DA3D4;
        }
        .consulte2{
                background-color:rgb(228, 224, 224);
                width: 85%;
                height: 235%;
        }
        .con {
            display: flex;
            justify-content: space-between;
            width: 88%;
            background-color: white;
            height: 50px;
            padding: 10px;
        }
        .conn{
            width: 87%;
            margin: 10px;
            background-color: white;
            height: 1600px;
            border-radius:10px ;
    }
        .content{
            display: flex;
            flex-direction: column;
          
        }
        .form-group{
            margin-top: 30px;
            margin-left: 0px;
        }
        .legend{
            font-size: 30px;
            font-weight: 300;
            /* display: block; */
            width: 50%;
        }
        label{
            color:#333;
            font-weight: bold;
        }
        select{
            width: 700px ;
            height: 40px;
            background-color: #3DA3D4;
            border-radius: 7px;
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
            width: 900px;
            height: 150px;
            font-size: 15px;
        }
        .b{
            margin: 30px 0 0 10px;
            border: 2px solid rgb(238, 230, 230);
            height: 40px;
            width: 300px;
            display: flex;
            justify-content: space-between;
            border-radius: 7px
        }
        .res select {
            width: 800px;
        }
        .tera{
            height: 100px;
        }
        p{
        margin-left: 17px;
        display: block;
        color: #737373;
        margin-top: 2px;

        }
        .con p{
            font-size: 20px;
            font-weight: bold;
            padding: 22px;
            margin-top: -20px;
        }
        .boutton button{
         width: 800px;
         text-align: center;
         margin-left: 5px;
         padding: 7px;
         font-size: 20px;
         background-color: #3DA3D4;
         border: none;
         color: white;
        border-radius: 7px;
    }
        span{
            color:black;
            font-weight: bold;
            font-size: 20px;
        }
    }

    @media (max-width: 375px){
        .consulte{
            display: flex;
           
            opacity: 0.8;
        }
        .consulte1{
            width: 15%;
            height: 1832px;
            background-color:#3DA3D4;
        }
        .consulte2{
                background-color:rgb(228, 224, 224);
                width: 260%;
                height: 1632px;
        }
        .conn{
            width: 97%;
            margin: 30px;
            background-color: white;
            height: 1500px;
            border-radius:10px ;
        }
        .content{
            display: flex;
            flex-direction: column;
          
        }
        .form-group{
            margin-top: 30px;
            margin-left: 0px;
        }
        .legend{
            font-size: 30px;
            font-weight: 300;
            /* display: block; */
            width: 50%;
        }
        label{
            color:#333;
            font-weight: bold;
        }
        select{
            width: 900px ;
            height: 40px;
            background-color: #3DA3D4;
            border-radius: 7px;
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
            /* width: 900px; */
            height: 150px;
            font-size: 15px;
        }
        .b{
            margin: 30px 0 0 3px;
            border: 2px solid rgb(238, 230, 230);
            height: 40px;
            width: 300px;
            display: flex;
            justify-content: space-between;
            border-radius: 7px
        }
        .res select {
            width: 850px;
        }
        .tera{
            height: 100px;
        }
        p{
        margin-left: 17px;
        display: block;
        color: #737373;
        /* margin-top: 2px; */

        }
        .boutton button{
         width: 900px;
         text-align: center;
         margin-left: 7px;
         padding: 7px;
         font-size: 20px;
         background-color: #3DA3D4;
         border: none;
         color: white;
        border-radius: 7px;
        }
        .con p{
            font-size: 20px;
            font-weight: bold;
            padding: 22px;
            margin-top: -20px;
        }
        span{
            color:black;
            font-weight: bold;
            font-size: 20px;
        }
    }


    @media (max-width: 700px){
        .consulte{
            display: flex;
           
            opacity: 0.8;
        }
        .consulte1{
            width: 15%;
            height: 1832px;
            background-color:#3DA3D4;
        }
        .consulte2{
                background-color:rgb(228, 224, 224);
                width: 260%;
                height: 1632px;
        }
        .conn{
            width: 97%;
            margin: 30px;
            background-color: white;
            height: 1500px;
            border-radius:10px ;
        }
        .content{
            display: flex;
            flex-direction: column;
          
        }
     
        .form-group{
            margin-top: 30px;
            margin-left: 0px;
        }
        .legend{
            font-size: 30px;
            font-weight: 300;
            /* display: block; */
            width: 50%;
        }
        label{
            color:#333;
            font-weight: bold;
        }
        select{
            width: 900px ;
            height: 40px;
            background-color: #3DA3D4;
            border-radius: 7px;
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
            width: 900px;
            height: 150px;
            font-size: 15px;
        }
        .b{
            margin: 30px 0 0 3px;
            border: 2px solid rgb(238, 230, 230);
            height: 40px;
            width: 300px;
            display: flex;
            justify-content: space-between;
            border-radius: 7px
        }
        .res select {
            width: 850px;
        }
        .tera{
            height: 100px;
        }
        p{
        margin-left: 17px;
        display: block;
        color: #737373;
        /* margin-top: 2px; */

        }
        .boutton button{
         width: 900px;
         text-align: center;
         margin-left: 7px;
         padding: 7px;
         font-size: 20px;
         background-color: #3DA3D4;
         border: none;
         color: white;
        border-radius: 7px;
        }
        .con p{
            font-size: 20px;
            font-weight: bold;
            padding: 22px;
            margin-top: -20px;
        }
        span{
            color:black;
            font-weight: bold;
            font-size: 20px;
        }
    }
    @media (max-width: 820px){
        .consulte{
            display: flex;
           
            opacity: 0.8;
        }
        .consulte1{
            width: 15%;
            height: 1832px;
            background-color:#3DA3D4;
        }
        .consulte2{
                background-color:rgb(228, 224, 224);
                width: 260%;
                height: 1632px;
        }
        .conn{
            width: 97%;
            margin: 30px;
            background-color: white;
            height: 1500px;
            border-radius:10px ;
        }
        .con p{
            font-size: 20px;
            font-weight: bold;
            padding: 22px;
            margin-top: -20px;
        }
    }

    @media (max-width: 920px){
        .consulte{
            display: flex;
           
            opacity: 0.8;
        }
        .consulte1{
            width: 15%;
            height: 1832px;
            background-color:#3DA3D4;
        }
        .consulte2{
                background-color:rgb(228, 224, 224);
                width: 260%;
                height: 1632px;
        }.con{
            width: 950px;
        }
        .conn{
            width: 97%;
            margin: 10px;
            background-color: white;
            height: 1500px;
            border-radius:10px ;
        }
        .content{
            display: flex;
            flex-direction: column;
          
        }
        .form-group{
            margin-top: 30px;
            margin-left: 0px;
        }
        .legend{
            font-size: 30px;
            font-weight: 300;
            /* display: block; */
            width: 50%;
        }
        label{
            color:#333;
            font-weight: bold;
        }
        select{
            width: 900px ;
            height: 40px;
            background-color: #3DA3D4;
            border-radius: 7px;
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
            width: 900px;
            height: 150px;
            font-size: 15px;
        }
        .b{
            margin: 30px 0 0 10px;
            border: 2px solid rgb(238, 230, 230);
            height: 40px;
            width: 300px;
            display: flex;
            justify-content: space-between;
            border-radius: 7px
        }
        .res select {
            width: 850px;
        }
        .tera{
            height: 100px;
        }
        p{
        margin-left: 17px;
        display: block;
        color: #737373;
        margin-top: 2px;

        }
        .boutton button{
         width: 860px;
         text-align: center;
         margin-left:-5px;
         padding: 7px;
         font-size: 20px;
         background-color: #3DA3D4;
         border: none;
         color: white;
        border-radius: 7px;
        }
        span{
            color:black;
            font-weight: bold;
            font-size: 20px;
        }
        .con p{
            font-size: 20px;
            font-weight: bold;
            padding: 22px;
            margin-top: -20px;
        }
    }
</style>