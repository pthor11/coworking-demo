$(window).scroll(function() {
  // shrink Navbar
  if ($(document).scrollTop() > 50) {
    $('.site__header').addClass('shrink');
  } else {
    $('.site__header').removeClass('shrink');
  } // end shrink Navbar 

  // back to top
  if ($('body').scrollTop() > 50 || $(document.documentElement).scrollTop() > 50) {
    $('.footer__to-top').css('display', 'block');
  } else {
    $('.footer__to-top').css('display', 'none');
  }
  $('.footer__to-top').click(function() {
    $('body, html').stop(true, false).animate({scrollTop: 0}, 1500);
  });
});

$(document).ready(function(){
  // init Wow
  $('.section__header').addClass('wow animated fadeInUp');
  $('.site__hero-img > .content').addClass('wow animated fadeInUp');
  new WOW({offset: 100}).init();
});
