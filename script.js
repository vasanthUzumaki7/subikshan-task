const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.menu');

hamburger.addEventListener('click',()=>{
    navbar.classList.toggle('slide');
})