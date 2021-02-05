$(document).ready(function () {
   const flowersSwiper = new Swiper('.flowers-sloder', {
      // Optional parameters
      loop: true,
      slidesPerView: 6,


      // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      //адаптив
      breakpoints: {
         // when window width is >= 320px
         320: {
            slidesPerView: 2,
         },
         // when window width is >= 480px
         480: {
            slidesPerView: 3,
         },
         // when window width is >=776px
         776: {
            slidesPerView: 4,
         },
         // when window width is >= 1000px
         1000: {
            slidesPerView: 5,
         },
         // when window width is >= 1400px
         1400: {
            slidesPerView: 6,
         }
      }

   });

   const reviewsSlider = new Swiper('.reviews-sloder', {
      // Optional parameters
      loop: true,
      slidesPerView: 1,


      // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },

   });

   $("#review-1").on('click', function () {

      $.fancybox.open([
         {
            src: 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
            opts: {
               caption: 'First caption',
               thumb: 'https://source.unsplash.com/IvfoDk30JnI/240x160'
            }
         },
         {
            src: 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
            opts: {
               caption: 'Second caption',
               thumb: 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
            }
         }
      ], {
         loop: true,
         thumbs: {
            autoStart: true
         }
      });

   });




});