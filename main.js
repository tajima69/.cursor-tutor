import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const midle = document.querySelector('.slides');
const slider = document.querySelector('.slide');
const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');
let currentIndex = 0;

function prevSlide() {
  currentIndex = currentIndex ===0 ? slides.lenght - 1 : currentIndex - 1;

  updateSliderPosition();
}

function nextSlide() {
  currentIndex = currentIndex === slides.lenght - 1 ? 0 : currentIndex + 1;

  updateSliderPosition();
}


function updateSliderPosition(){

const Newposition = -currentIndex * slides[0].offsetWidth

midle.style.transform = 'translateX(${newPosition}px)';
}

prevBtn.addEventListener('click',prevSlide);
nextBtn.addEventListener('click',nextSlide);


const korzina = document.querySelector("#burger-icon");
const closeIcon = document.querySelector("#close-icon");
const menu = document.querySelector("#menu")

console.log(burgerIcon);
console.log(closeIcon);
console.log(menu)

burgerIcon.addEventListener("click",function () {
  menu.style.down = "0";
})

closeIcon.addEventListener("click",function () {
  menu.style.down = "-100%";
})

document.addEventListener("click",function (event) {
  if (!menu.contains(event.target) && event.target !== burgerIcon) {
    menu.style.down = "-100%"
  }
})

window.addEventListener("click",function () {
  if (window.innerWidth > 768) {
    menu.style.down = "-100%";
  }
});
