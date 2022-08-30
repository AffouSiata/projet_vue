window.addEventListener('scroll', function() {
    let block = document.querySelector('.partie1');
    let windowPosition = window.pageYOffset > 30 ;
    block.classList.toggle('partie1-active', windowPosition);            
})

let monlien = document.querySelector(".lienne")
// console.log("je clique",monlien);
