$(function(){


 $('.foods__categorie').on('click', function() {

  $('foods__categorie').removeClass('foods__categorie--active');
  $(this).addClass('foods__categorie--active');

 });


  $('.slider').slick({

    dots: true,
    arrows:true,

  });

  $('.slider').slick({
    prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"><span class="button.slick-prev.slick-arrow"></span></button>',
    nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"><span class="button.slick-next.slick-arrow"></span></button>',
    appendArrows: '.arrows-wrap'
  });



  $(".star").rateYo({
    rating: 3.6,
    starWidth: "17px",
    normalFill: "rgba(193, 193, 193, 0.3)",
    ratedFill: "rgb(255, 184, 0)",
    readOnly: true,
  });

    $('.filter-price__input').ionRangeSlider(
    {
      type: "double",
      min: 0,
      max: 1000,
      from: 200,
      to: 500,
      grid: true,
      prefix: $,
      onStart: function (data) {
        $('.').text('data.from');
        $('.').text('data.to');
      },
      onChange: function (data) {
        $('.').text('data.from');
        $('.').text('data.to');
    },
  }
  );

 /*  $('.styler__class').styler(); */



});







  let mixer = mixitup('.food');

