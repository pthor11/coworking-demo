$(document).ready(function() {
  // slide Comment
  $('.item__reply').on('click', function() {
    $comment = $(this).parent().next();
    $comment.slideToggle();
  });

  // change Like button
  $('.item__like').on('click', function(){
    $(this).css('display', 'none');
    $(this).next().css('display', 'block');
  });

  $('.item__liked').on('click', function(){
    $(this).css('display', 'none');
    $(this).prev().css('display', 'block');
  });
});