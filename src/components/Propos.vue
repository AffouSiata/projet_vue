<template>
    <div class="block1" id="about" >
            <div class="about1">
                <img src="../assets/about1.jpg" alt="">
            </div>
            <div class="about">
                <h1>A propos</h1>
                <h2>
                    Relevez le Défi de la Prestation de Soins de Santé
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi consectetur adipiscing elit incididunt labore dolore magna
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi consectetur adipiscing elit incididunt labore dolore magna
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi consectetur adipiscing elit incididunt labore dolore magna
                </p>
                 <div class="menu-item"><a href="/">View More</a></div> 
            </div>
            
    </div>
    
</template>
<script>
export default {
    name:'ProposComponent'
}
</script>
<style scoped>

    
    .block1{
        display: flex; 
        width: 100%;
        height: 83vh;
        background-color: aliceblue;
       justify-content: center;
       margin-top: 50px;
      
    }
    .about{
        width: 40%;
        margin-top: 100px; 
        margin-right: 30px;
        background-color: aliceblue;
        text-align: left;
    
    }
    .about h1{
        text-decoration: underline;
        padding: 5px;
        margin: 20px;
        color: #3DA3D4;
    }
    .about h2{
       font-size:50px ;  
       margin: 10px;
       color: black;
    }
    .about p{
       text-align: justify; 
       margin: 30px; 
       font-family: 'Didot', serif;
       font-size: 18px;
    }
    .about .menu-item{
        background-color: #3DA3D4;
        width: 280px;
        margin-left: -107px;
        margin-top: 80px;
        padding: 5px;
    }
    .about .menu-item:hover{
          background-color: white;
          border: 2px solid #3DA3D4;;
          
          
     }
    .about .menu-item a{
        color: white;
        font-size: 35px;
        text-align: center;
        margin-left: 30px;
        font-weight: bold;
    }
    .about .menu-item a:hover{
        color: #3DA3D4;
    } 

   
</style>




