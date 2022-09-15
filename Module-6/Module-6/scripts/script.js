//Menu Toggle:
const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')
const menu = document.querySelector('.menu')

menuToggle.addEventListener('click',() => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
    menu.classList.toggle('active')
})


// Display First Picture
let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

//Method1
const textToggle = document.querySelector('.toggleText');
const button = document.querySelector('.button1');

button.addEventListener('click',() => {
  textToggle.classList.toggle('active')
}) 


//Method 2
//  button.onclick = (function(){
//  textToggle.classList.toggle('active')
// })



