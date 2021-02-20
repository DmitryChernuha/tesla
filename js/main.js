$(function () {
  $('.slider').slick({
    arrows: false,
    fade: true,
    autoplay: true,
      speed: 3000,
      dots: true
  });

  $('.menu-btn').on('click', function () {
    $('.menu').addClass('active');
  });

  $('.close-btn').on('click', function () {
    $('.menu').removeClass('active');
  });
});
