<template>
  <div>  
    <header>
      <Navbar/>  
    </header>
    <router-view/>
  </div> 
  
  
</template>

<script>
import Navbar from "./components/Navbar.vue"

export default {
  name:'app',
  components:{
   Navbar
  }
}
</script>


<style>
*{
    padding: 0;
    margin: 0;
    text-decoration: none;
    text-transform: capitalize;
    border: none;
    list-style-type: none;
    box-sizing: border-box;
}
body{
  background-image: url('./assets/img2.jpg');
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header{
  width: 100vw;
  background-color: rgb(148, 144, 144);
 
}


</style>
