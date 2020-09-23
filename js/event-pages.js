$(document).ready(function () {
  $('.center').slick({
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
  $('.single-item').slick({
    centerMode: true,
    centerPadding: '48px',
    slidesToShow: 1,
    // fade: true,
    autoplay: false,
    autoplaySpeed: 2500,
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
});
