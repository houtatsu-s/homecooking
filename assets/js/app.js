$(function () {
  // スライダー
  $('.slider').slick({
    arrows: true,
    autoplay: true,
    dots: true,
    speed: 1000,
    autoplaySpeed: 3000,
    easing: 'swing',
    centerMode: true,
    slidesToShow: 1,
    centerPadding: '40px',
    prevArrow: '<div class="slide-btn prev-btn"></div>',
    nextArrow: '<div class="slide-btn next-btn"></div>',
    responsive: [
      {
        breakpoint: 375,
        settings: {
          centerPadding: '20px',
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  // ふわっと
  $(window).scroll(function (){
    $("#box1, #box2, #box3, #box4").each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 100 ){
        $(this).stop().addClass("is-active");
      } else {
        $(this).stop().removeClass("is-active");
      }
    });
  });

  // ハンバーガーメニュー
  $('.menu-btn').on('click', function() {
    $(this).toggleClass('is-active');
    $('#nav').toggleClass('is-active');
    $('body').toggleClass('is-active');
  });
});