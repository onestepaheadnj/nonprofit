

// $(document).ready(function () {
//   $('.center').slick({
//     centerMode: true,
//     centerPadding: '0px',
//     slidesToShow: 3,
//     // fade: true,
//     autoplay: false,
//     autoplaySpeed: 2500,
//     dots: true,
//     infinite: true,
//     focusOnSelect: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: true,
//           centerMode: true,
//           centerPadding: '0px',
//           slidesToShow: 1
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: true,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });
//   $('.single-item').slick({
//     centerMode: true,
//     centerPadding: '0px',
//     slidesToShow: 1,
//     // fade: true,
//     autoplay: false,
//     autoplaySpeed: 2500,
//     infinite: true,
//     focusOnSelect: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: true,
//           centerMode: true,
//           // centerPadding: '80px',
//           slidesToShow: 1
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: true,
//           centerMode: true,
//           // centerPadding: '40px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });
// });

const tags = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active-tab')
  })
})