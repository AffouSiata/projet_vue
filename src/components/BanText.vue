<template>
    <div class="text">
        <h2>Bienvenue chez Nous pour  !</h2>
        <h3>Meilleurs soins de santé pour prendre bien soins de vous.</h3>
        <p>
            Nous vous aiderons à vous sentir mieux et à profiter de chaque jour de votre vie. peut être la santé à la croissance la plus rapide.
        </p>
        <div class="menu-item"><a href="/">View More</a></div> 
    </div>
</template>
<script>
export default {
    name:'BanTextComponent'
}
</script>
<style scoped>

    .text{
        position: absolute;
        top: 28%;
        color: red;
        font-size: 30px;
        font-weight: bold;
        margin: 0px auto 30px 350px;
        width: 750px;
        
    }
    h2{
        font-size: 37px;
        display: inline;
        color: #3DA3D4;
        font-style: italic;
        text-decoration: underline;
        font-weight: 900;
    }
    h3{
       
       font-weight: 700;
       font-size:75px ;
       font-family: 'Red Hat Text', sans-serif;
       color:#222222;
       text-align: center;
    }
    p{
        margin:28px auto 15px 0;
        font-weight: 400;
        font-size: 17px;
        /* width: 100%; */
        text-align: justify;
        color: #aaa;
        font-weight: bold;
    }
    .text .menu-item{
        background-color: #3DA3D4;
        width: 180px;
        margin-left: 250px;
        margin-top: 50px;
        padding: 10px;
        border-radius: 10px;
        

    }
     .text .menu-item:hover{
          background-color: white;
          border: 2px solid #3DA3D4;;
          
     }
    .text .menu-item a{
        color: white;
    }
    .text .menu-item a:hover{
          color: #3DA3D4;
    } 





   
</style>