window.addEventListener('scroll', function() {
    let block = document.querySelector('.partie1');
    let windowPosition = window.pageYOffset > 30 ;
    block.classList.toggle('partie1-active', windowPosition);            
})

let monlien = document.querySelector(".lienne")
// console.log("je clique",monlien);





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
