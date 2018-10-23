$(document).ready(function() {
  $('.scroll').click(function(e) {
    var section = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(section).offset().top
    }, 750);

    // e.preventDefault();
  });
});
