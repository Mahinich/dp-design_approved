'use strict';

window.addEventListener('DOMContentLoaded', () => {

/* SLIDER START */

  const sliderItems = document.querySelectorAll('.game-item');
  const sliderLine = document.querySelector('.slider-line');
  const gameItem = document.querySelector('.game-item');
  const gameItemWidth_margin = gameItem.offsetWidth + parseInt(window.getComputedStyle(gameItem).marginRight);
  const shiftWidth = gameItemWidth_margin * 3;
  let count = 0;
  
  document.querySelector('.slider .prev').addEventListener('click', function() {
    count -= 3;

    if (count < 0) {
      count = sliderItems.length-3;
    }
    
    rollSlider();
    currentNumchange();
  })
  
  document.querySelector('.slider .next').addEventListener('click', function() {
    count += 3;

    if (count >= sliderItems.length) {
      count = 0;
    }

    rollSlider();
    currentNumchange();
  })
  
  function rollSlider() {
    sliderLine.style.transform = `translateX(-${count*gameItemWidth_margin}px)`;
  }
  
  // Pagination Start
  const totalNum = document.querySelector('.slider-order .total-num');
  const currentNum = document.querySelector('.slider-order .current-num');

  function currentNumchange() {
    currentNum.textContent = count + 3;
  }
  
  currentNumchange();
  
  totalNum.textContent = `${sliderItems.length}`; 
  // Pagination End

/* SLIDER END */

/* HAMBURGER START*/
  const hamburger = document.querySelector('.hamburger');
  const header = document.querySelector('.header');
  const navList = document.querySelector('.nav-list');


  hamburger.addEventListener('click', function() {

    if (navList.classList.contains("visible")) {
      navList.classList.remove("visible");
    } else {
      navList.classList.add("visible");
    }
    

    hamburger.classList.toggle('active')
    header.classList.toggle('extend');

   
  })

  
/* HAMBURGER END*/
})
