<template>
    <div class="slide">

        <h1>Our Doctor</h1>

        <div class="row row-cols-1 row-cols-md-5 g-4 mescards">
            <div class="col">
                <div class="card h-40">
                <img src="../assets/doc4.jpg" class="card-img-top" alt="Skyscrapers"/>
                <div class="card-footer">
                    <small >Dr.Desnos Jeremy</small>
                    <p>Gynecologue</p>
                </div> 
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src="../assets/doc6.jpg"  alt="Los Angeles Skyscrapers"/>
                <div class="card-footer">
                    <small >Dr.Amira Konan</small>
                    <p>Ophtalmologue</p>
                </div> 
                </div>
            </div>
            <div class="col">
                <div class="card ">
                <img src="../assets/doc2.jpeg" class="card-img-top" alt="Palm Springs Road"/>
                <div class="card-footer">
                    <small >Dr.Kabore Abdoul</small>
                    <p>Dermatologie</p>
                </div> 
                </div>
            </div>
            <div class="col">
                <div class="card ">
                <img src="../assets/doc.jpg" class="card-img-top" alt="Palm Springs Road"/>
                <div class="card-footer">
                    <small >Dr.Christelle N'da</small>
                    <p>Dentist</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card ">
                <img src="../assets/doc5.jpg" class="card-img-top" alt="Palm Springs Road"/>
                <div class="card-footer">
                    <small >Dr.Kionou Mohamed</small>
                    <p>Médecine Génraliste</p>
                </div> 
                </div>
            </div>
        </div>
    </div>
</template>
<script>


export default {
    name:"doctorComponent"
}
</script>
<style  scoped>


.slide{
    margin-top: 80px;
    width: 100%;
    height: 60vh;
}
.slide h1{
        text-decoration: underline;
        padding: 5px;
        margin: 20px;
        color: #3DA3D4;
        text-align: center;
    }
.mescards{
    
    display: flex;
    justify-content: space-evenly;
    margin-left: 211px;
    margin-top: 11px;
    width: 1600px;
    
   
}
.card{
    height: 400px;
    width: 300px;
}
.card img{
    height: 350px;
    object-fit: cover;
}
.card-footer{
    height: 80px;
    background-color: #3DA3D4;
}
.card-footer small{
    text-align: center;
    color: white;
    margin-left: 40px;
    font-size: 20px;
    font-weight: bold;
}

.card-footer p{
    text-align: center;
    color: white;
}
   
</style>