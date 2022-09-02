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
            <div class="recu">
                <div class="textes">
                    <h3>Merci pour votre confiance</h3>
                    <p>Votre question est envoyée avec sucées Nous vous assurons la réception de votre question ainsi que sa validation par notre communauté médicale.</p>
                    <p>Vous serez notifié dès que votre réponse personnalisée soit prête.Nous nous engageons à vous répondre dans moins de 48h.</p>
                </div>
                <div class="lien1">
                    <router-link to="/consulte">Posez une autre questions</router-link>
                </div>
                <div class="lien2">
                    <a href="">Voir mes questions</a>
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




 


export default {
    name:'recu',
   
    methods:{
        deconnexion(){
            localStorage.clear();
            this.$router.replace('/')
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
   .consulte{
       display: flex;
       width: 100%;
       height: 110vh;
       opacity: 0.8;
   }
   .consulte1{
       width: 15%;
       background-color:#3DA3D4;
   }
    .consulte2{
       /* position: absolute; */
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
    p{
        margin-left: 157px;
        display: block;
        color: #737373;
        margin-top: -20px;

    }
   
     

     .recu{
        position: absolute;
        top: 20%;
        left: 35%;
        background-color: white;
       height: 400px;
        width: 800px;
        border-radius:5px;
        border: 1px solid #c6c4c4;
         
     }
     .textes h3{
        text-align: center;
        padding: 20px ;
        color: black;
     }
     .textes p{
        text-align: center;
        padding: 20px;
        margin-left: 30px;
    }
    .lien1, .lien2{
        background-color: #3DA3D4;
        padding: 10px;
        margin: 20px;
        border-radius:5px;
        text-align: center;
    }
    .lien1 a,.lien2 a{
        color: white;
        
    }
    span{
        /* margin-right: 15px; */
        color: rgb(224, 224, 224);
        font-weight: bold;
        font-size: 20px;
    }
</style>