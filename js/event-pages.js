$(document).ready(function () {
  $('.single-item').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    // fade: true,
    autoplay: false,
    autoplaySpeed: 2500,
    dots: true,
    infinite: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  // var video = $('#single-item').find('video').get(0).play();

  // $('#single-item').on('afterChange', function (event, slick, currentSlide, nextSlide) {
  //   $('#single-item').find('video').get(0).pause();
  //   var video = $('#single-item').find('video').get(0).play();
  // });
});