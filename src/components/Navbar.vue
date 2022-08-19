<template>
    <div class="partie1">
        <img alt="Vue" src="../assets/img1.png">
        <nav>
            <div class="menu-item"><a href="/">Home</a></div>
            <div class="menu-item"><a href="/about">About</a></div>
            <div class="menu-item"><a href="/contact">Contact</a></div>  
        </nav>
         <div class="menu-item login"><a href="/connexion"><i class="fa fa-sign-in"></i>Login</a></div> 
    </div>
</template>

<style>

    .partie1{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin: 0px auto;
        padding: 1rem 0;
    
    }
    .partie1 img{
        background-color: transparent;
        height: 70px;
    }

    nav{
        display:flex;
        align-items: center;
        justify-content: center;
    }
    nav .menu-item{
        color: #fff;
        padding: 10px  20px;
        position: relative;
        text-align: center;
        border-bottom:3px solid transparent;
        display: flex;
        transition: 0.4s ;
    }
    nav .menu-item a{
        color: inherit;
        font-size: 20px;
        font-weight: bold;
         
    }
    nav .menu-item.active, 
    nav .menu-item:hover{
        background-color: #444;
        border-bottom-color: red ;
        border-radius: 10px;
       
    }
    .login a{
        font-size: 20px;
        color: #fff;
        font-weight: bold;
    }
     .login a i{
        margin-right: 10px;
     }
    .login a:hover{
        color: red;
     }
    

    /* header{
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color:  rgb(195, 234, 241);;
    padding: 15px; 
    }
    .logo img{
       height: 60px;        
    }
    nav{
        display: flex;
        justify-content: space-between;
    }
    nav ul{
        display: flex;
        justify-content: space-between;

        
    }
    nav a.router-link{
        margin-left: 45px;
        font-size: 20px;
        color: white;
    
    }
   
    nav ul li a.router-link:hover{
        color: rgb(24, 141, 161);
    } */
</style>

 