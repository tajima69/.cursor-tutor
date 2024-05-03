import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll('.slider img');
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';  
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) { 
    slideIndex = 1; 
  }
  
  
  slides[slideIndex - 1].style.display = 'block';  
  setTimeout(showSlides, 20000); // Change image every 2 seconds
}

document.querySelector('.prev').addEventListener('click', () => {
  slideIndex--;
  showSlides();
});
document.querySelector('.next').addEventListener('click', () => {
  slideIndex++;
  showSlides();
});
