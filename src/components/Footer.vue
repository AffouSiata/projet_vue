<template>
<div>
     
    <footer class="text-center text-lg-start  text-muted" style="background-color:#b2e2f8;">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

            <div class="me-5 d-none d-lg-block">
            <span>Connectez-vous avec nous sur les réseaux sociaux:</span>
            </div>
            <div>
            <router-link to="" class="me-4 text-reset">
                <i class="fab fa-facebook-f"></i>
            </router-link>
            <router-link to="" class="me-4 text-reset">
                <i class="fab fa-twitter"></i>
            </router-link>
            <router-link to="" class="me-4 text-reset">
                <i class="fab fa-google"></i>
            </router-link>
            <router-link to="" class="me-4 text-reset">
                <i class="fab fa-instagram"></i>
            </router-link>
            <router-link to=""  class="me-4 text-reset">
                <i class="fab fa-linkedin"></i>
            </router-link>
            <router-link to="" href="" class="me-4 text-reset">
                <i class="fab fa-github"></i>
            </router-link>
            </div>
        </section>
        <section class="">
            <div class="container text-center text-md-start mt-5">
                <div class="row mt-3">
    
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            
                        <h6 class="text-uppercase fons mb-4">
                            <i class="fas fa-gem me-3"></i>Health
                        </h6>
                        <p class="para">
                           Health est le principal site Web d'annuaire médical où les personnes de partout
                            aux monde peuvent trouver le spécialiste médical le plus proche qui répond à leurs 
                            besoins en matière de soins de santé.
                        </p>
                    </div>
          
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            
                        <h6 class="text-uppercase fons mb-4">
                            Products
                        </h6>
                        <p>
                            <router-link to="" class="text-reset">HTML</router-link>
                        </p>
                        <p>
                            <router-link to="#!" class="text-reset">CSS</router-link>
                        </p>
                        <p>
                            <router-link to="#!" class="text-reset">Vue</router-link>
                        </p>
                        <p>
                            <router-link to="#!" class="text-reset">JS</router-link>
                        </p>
                    </div>
           
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
           
                        <h6 class="text-uppercase fons mb-4">
                            Useful links
                        </h6>
                        <p>
                            <router-link  to="#!" class="text-reset">Accueil</router-link>
                        </p>
                        <p>
                            <router-link  to="#!" class="text-reset">A propos</router-link>
                        </p>
                        <p>
                            <router-link  to="#!" class="text-reset">Orders</router-link>
                        </p>
                        <p>
                            <router-link  to="#!" class="text-reset">Conatct</router-link>
                        </p>
                    </div>
            
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                        <h6 class="text-uppercase fons mb-4">Contact</h6>
                        <p><i class="fas fa-home me-3"></i> Abidjan, NY 10012, US</p>
                        <p>
                            <i class="fas fa-envelope me-3"></i>
                            healt@gmail.com
                        </p>
                        <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                        <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                    </div>
        
                </div>
            </div>
        </section>
        <div class="text-center p-4" style="background-color:#FFF;">
            © 2021 Copyright:
            <router-link to="" class="text-reset fw-bold" href="https://mdbootstrap.com/" style="color: #3DA3D4 !important; ">healt@gmail.com</router-link>
        </div>
    </footer>

</div>
</template>
<script>
export default {
    name:"FooterComponnent"
}
</script>
<style scoped>
footer{
    font-family: 'Didot', serif !important;
    color: black!important;
}
    .text-reset i,.fas{
        background-color: aliceblue;
        padding: 15px;
        border-radius: 50%;
        color: black;
    }
    .text-reset i:hover{
        background-color: #3DA3D4;
        color:  aliceblue;
    }
    .fas:hover{
        background-color: #3DA3D4;
        color:  aliceblue; 
    }
    .text-muted{
        color: black !important;;
    }
    .para{
        font-family: 'Didot', serif;
        text-align:justify ;
    }
    .fons{
        font-size: 20px;
        font-weight: bold;
    }
</style>