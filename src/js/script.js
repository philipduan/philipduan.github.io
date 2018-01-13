$(document).ready(function() {
  $('.menu').on('click', 'a[href^="#"]', function(event) {
    $(this)
      .parent()
      .siblings()
      .removeClass('selected');
    $(this)
      .parent()
      .addClass('selected');
    event.preventDefault();
    var $target = $(this.hash);
    $('html,body').animate(
      {
        scrollTop: $target.offset().top - 15
      },
      600
    );
  });

  $(window).resize(function() {
    if ($(window).width() > 600) {
      $('.menu').removeClass('sticky_header');
    }
  });

  $(window).scroll(function() {
    if ($(window).width() < 600) {
      if ($(document).scrollTop() > $('.menu').position().top) {
        $('.menu').addClass('sticky_header');
      } else {
        $('.menu').removeClass('sticky_header');
      }
    }

    if ($(document).scrollTop() > $('#about_me').position().top - 40) {
      $('.menu > li').removeClass('selected');
      $('#menu_about_me').addClass('selected');
    }

    if ($(document).scrollTop() > $('#skills').position().top - 40) {
      $('.menu > li').removeClass('selected');
      $('#menu_skills').addClass('selected');
    }

    if ($(document).scrollTop() > $('#work').position().top - 40) {
      $('.menu > li').removeClass('selected');
      $('#menu_work').addClass('selected');
    }

    if (
      $(window).scrollTop() + $(window).height() >
      $(document).height() - 150
    ) {
      $('.menu > li').removeClass('selected');
      $('#menu_contact').addClass('selected');
    }
  });
});
