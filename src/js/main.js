$(document).ready(function() {

  /* Инициализация Owl Carousel */

  $('.hero-slider').owlCarousel({
    loop: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      }
    },
    smartSpeed: 500
  });

  $('.slider').owlCarousel({
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      }
    },
    smartSpeed: 500
  });

  var slider = $('.slider');
  slider.owlCarousel();
  $('.arrows__left').click(function () {
    slider.trigger('prev.owl.carousel');
  });
  $('.arrows__right').click(function () {
    slider.trigger('next.owl.carousel');
  });

 

  var hero = $('.hero-slider');
  hero.owlCarousel();
  $('.hero-arrows__left').click(function () {
    hero.trigger('prev.owl.carousel');
  });
  $('.hero-arrows__right').click(function () {
    hero.trigger('next.owl.carousel');
  });


});