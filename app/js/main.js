$(function () {
  const navBtn = document.querySelectorAll(".foods__categorie-link");

  navBtn.forEach(function (item) {
    item.addEventListener("click", function () {
      let currentBtn = item;

      navBtn.forEach(function (item) {
        item.classList.remove("foods__categorie-link--active");
      });

      currentBtn.classList.add("foods__categorie-link--active");
    });
  });

  //---------------burger--------------

  document.querySelector(".burger").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".burger__wrapper").classList.toggle("active");
    document.querySelector(".navigation").classList.toggle("open");
  });

  //---------------/burger--------------

  $(".feedback__slider.slider").slick({
    dots: true,
    arrows: true,
  });

  if (window.matchMedia("(max-width: 576px)").matches) {
    $(".partners__wraper-slider.slider").slick({
      dots: true,
      arrows: false,
      fade: true,
    });
  }

  $(".star").rateYo({
    rating: 3.6,
    starWidth: "17px",
    normalFill: "rgba(193, 193, 193, 0.3)",
    ratedFill: "rgb(255, 184, 0)",
    readOnly: true,
  });

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 200,
    to: 500,
    grid: true,
    prefix: $,
    onStart: function (data) {
      $(".").text("data.from");
      $(".").text("data.to");
    },
    onChange: function (data) {
      $(".").text("data.from");
      $(".").text("data.to");
    },
  });

  /*  $('.styler__class').styler(); */
});

let mixer = mixitup(".food");
