$(document).ready(function() {

  /* Инициализация Owl Carousel */
  $('.owl-carousel').owlCarousel({
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      }
    },
    smartSpeed: 500
  });

  var owl = $('.owl-carousel');
  owl.owlCarousel();
  $('.arrows__left').click(function () {
    owl.trigger('prev.owl.carousel');
  });
  $('.arrows__right').click(function () {
    owl.trigger('next.owl.carousel');
  });


});