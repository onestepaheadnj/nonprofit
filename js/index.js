$(function() {
  $("body").fadeIn(1500);
  var slideout = new Slideout({
    panel: $("#main").get(0),
    menu: $("#menu").get(0),
    tolerance: 70,
    ease: "ease-in",
    duration: 400,
    side: "right"
  });

  $("#menu-button").on("click", function() {
    slideout.toggle();
  });

  $("#animated-mouse").on("click", function(e) {
    if (slideout.isOpen()) {
      return;
    }
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#content").offset().top
      },
      800
    );
    window.location.hash = "#content";
  });

  $(window).on("scroll", function() {
    $("#navbar").css({
      top: $(window).scrollTop()
    });
    if ($(window).scrollTop() >= 50) {
      $("#navbar").animate(
        {
          backgroundColor: "rgba(3, 25, 38)"
        },
        200
      );
    }
    if ($(window).scrollTop() == 0) {
      $("#navbar").animate(
        {
          opacity: "rgba(3, 25, 255)"
        },
        200
      );
    }
  });
});
