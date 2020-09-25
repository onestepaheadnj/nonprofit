const tags = document.querySelectorAll('[data-tabe-target]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    target.classList('active-tab')
  })
})
$(document).ready(function () {
  $('.center').slick({
    centerMode: true,
    centerPadding: '0px',
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
          centerPadding: '0px',
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
    centerPadding: '0px',
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
          // centerPadding: '80px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});
