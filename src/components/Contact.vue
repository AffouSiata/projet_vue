<template>
   
        <div class="contact" id="contact">
            <div class="contact1">
                <h4>Contact</h4>
                    <form action="">
                        <h2>Entrer en Contact</h2>
                        <div class="formes">
                            <input type="text" placeholder="entrer le nom">
                        </div>
                        <div class="formes">
                            <input type="email" placeholder="entrer l'Email">
                        
                        </div>
                        <div class="formes">
                            <textarea name="" id="" cols="40" rows="7" placeholder="votre message "></textarea>
                        </div>
                        <div class="btn">
                            <input type="submit">
                        </div>

                    </form>
            </div>
            <div class="contact2">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.101780364658!2d-3.964882484463386!3d5.401462436684686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1933ec546f809%3A0xa13e690552d16e30!2sNaN%20Digital%20Academy!5e0!3m2!1sfr!2sci!4v1656348981532!5m2!1sfr!2sci" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>   
            </div>
        </div>
</template>
<script>

export default {
    name:'ContactComponent'
}
</script>
<style>
    .contact{
        margin-top: 50px;
        background:  rgba(0, 0, 0, 0.7) url('../assets/img4.jpg') no-repeat center;
        background-size: cover;
        background-attachment: scroll;
        height: 65vh;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        text-align: center;
        background-blend-mode: darken;
    }
    h4{
        text-align: center;
        color: white;
       
    }
    .contact1{
        margin-top: 10px;
        height: 600px;
        border: 2px solid #3DA3D4;
        width: 660px;
        margin-right: 10px;
        background-color: white;
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
        border-radius: 15px; 
       
      
    }
    .contact2{
        margin-top: 10px;
        height: 600px;
        width: 660px;  
    }
    form{
        width: 660px;
        height: 850px;
        border-radius: 10px;
         
    }
    h2{
        font-size: 30px;
        font-weight: bold;
        padding: -30px 0px;
        color: #3DA3D4;
        
    }
    .formes input{
        margin-top: 30px;
        width: 429px;
        padding: 10px; 
        font-size: 20px;
        border-radius: 15px;
        background-color: aliceblue;
    } 
    textarea{
        font-size: 20px;
        margin-top: 30px; 
        border-radius: 15px;
        background-color: aliceblue;
    }
    .btn {
        
        width: 429px;
        font-size: 20px;
        border-radius: 15px;
        background-color: #3DA3D4;
    }
    .btn input{
        background: none;
        font-size: 30px;
        font-weight: bold;
        border: none;
    }
    .btn input:hover{
        color: #3DA3D4;
    }
    .btn:hover{
        background-color: white;
        color: #3DA3D4;
        border: 2px solid #3DA3D4;
    }
   
    .contact2 iframe{
        width: 670px;
        height: 600px;
    }
</style>