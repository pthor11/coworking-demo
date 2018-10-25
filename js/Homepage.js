$(document).ready(function() {
  // Gallery Buttons
  var $gallery__img = $('.gallery__img .row');
  $gallery__img.isotope({
    itemSelector: '.gallery__img div',
    layoutMode: 'fitRows'
  });
  $('.gallery__nav').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $gallery__img.isotope({ filter: filterValue }); // end Gallery Buttons

    // change data-lightbox
    if (filterValue == '*') {
      $('.gallery__img a').attr('data-lightbox','all');
    } else {
      var lightboxValue = filterValue.slice(6);
      $('.gallery__img div[class*="img__"]').each(function(){
        var imgType = $(this).attr('class').slice(6);
        if (imgType == filterValue.slice(1)) {
          $(this).find('a').attr('data-lightbox', lightboxValue);
        }
      });
    } // end change data-lightbox
  });

  // init Owl Carousel
  $('.ttmn__content').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1
      }
    }
  });
});