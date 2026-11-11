$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(".toggle-btn").on("click", function () {
    $("header").toggleClass("open");
  });

    $(".mask").on("click", function () {
    // #maskをクリックしたときに実行する
    $("header").toggleClass("open");

  });
    $(".menu a").on("click", function () {
    // #navi aをクリックしたときに実行する

    $("header").removeClass("open");
  });


$(".slide-items").slick({
        arrows: false,
    centerMode: true,
    // centerPadding: "30px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1000,
   responsive: [
      {
        breakpoint: 600,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],

});

})