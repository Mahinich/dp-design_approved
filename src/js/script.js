'use strict';

/* FIXED HEADER START */
window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    if (window.scrollY > 1) {
        header.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
      `
    } else {
        header.style.position = 'relative'; // or your preferred default position
    }
  });
/* FIXED HEADER END */

/* SLIDRE START */
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      
      renderCustom: function (swiper, current, total) {
        return current + ' of ' + total;
      },
     /*  formatFractionCurrent: function(number) {
        return number;
      }, */
    },

    

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 3,
    spaceBetween: 61,

  });
/* SLIDRE END */
})

