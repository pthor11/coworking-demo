$(document).ready(function(){
  // init Founders Owl Carousel
  $('.founders__content').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      }
    }
  });
  
  // init Partners Owl Carousel
  $('.partners__content').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      992: {
        items: 4
      }
    }
  });

  // init Counter Up
  $('.facts__number').counterUp({
    delay: 10,
    time: 1000
  });

  // FAQ plus / minus
  $('.faq__answer').on('show.bs.collapse', function () {
    $(this).prev().find('.fa-plus').css('display', 'none');
    $(this).prev().find('.fa-minus').css('display', 'inline-block');
  })

  $('.faq__answer').on('hide.bs.collapse', function () {
    $(this).prev().find('.fa-plus').css('display', 'inline-block');
    $(this).prev().find('.fa-minus').css('display', 'none');
  })
});