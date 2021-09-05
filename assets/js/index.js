/* NAVBAR TOGGLE BUTTON */
$(document).ready(function () {
  // when close button is clicked, navbar mobile menus
  //disappear
  $(".btn-close").on("click", function () {
    $("#navbar").removeClass("navbar-mobile");
  });

  // when mobile navbar toggle is clicked, remove class d-none
  // so that mobile navbar menu appear on the left
  $("#mobile-nav-toggle").on("click", function () {
    $(".navbar-mobile").removeClass("d-none");
  });

  $(".btn-search").on("click", function () {
    // $("#searchbar").addClass("d-block");
    $("#searchbar").toggleClass("search-bar-display");
  });

  if ($(window).scrollTop() < 100) {
    $("#searchbar").addClass("search-bar-wrapper-top");
    $("#search-bar").addClass("search-bar-top");
  }
  if ($(window).scrollTop() > 100) {
    $("#searchbar").removeClass("search-bar-wrapper-top");
    $("#search-bar").removeClass("search-bar-top");
  }
});

$(document).ready(function () {
  $(".like").click(function () {
    $(this).toggleClass("heart");
  });
});

/* SWIPER SLIDER */
var swiper1 = new Swiper(".swiper1", {
  // loop: true,

  prevButton: ".swiper-button-prev",
  nextButton: ".swiper-button-next",
  slidesPerView: 6,
  spaceBetween: 0,
  slidesPerColumn: 2,
  slidesPerColumnFill: "row",
  slidesPerGroup: 1,
  breakpoints: {
    // when window width is <= 499px
    499: {
      slidesPerView: 3,
    },
    // when window width is <= 999px
    999: {
      slidesPerView: 6,
    },
  },
});

var swiper2 = new Swiper(".swiper2", {
  prevButton: ".swiper-button-prev",
  nextButton: ".swiper-button-next",
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper3 = new Swiper(".swiper3", {
  prevButton: ".swiper-button-prev",
  nextButton: ".swiper-button-next",
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
