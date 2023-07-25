(function() {
    document.getElementById("burger").addEventListener('click',(()=>{
    document.querySelector('#burgerMenu').classList.toggle('disabled')
}))
})()

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-custom',
      prevEl: '.swiper-button-prev-custom',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 640px
        1024: {
          slidesPerView: 3,
          spaceBetween: 50
        }
      }
  });