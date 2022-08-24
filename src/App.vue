<template>
  <div>  
  
    <router-view/>
  </div> 
  
  
</template>

<script>


export default {
  name:'app',
  
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
/* body{
 
  background-image: url('./assets/img4.jpg');
  background-size: cover;
  background-repeat: no-repeat;
} */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
