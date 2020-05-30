$(function () {
  var slideout = new Slideout({
    panel: $("#main").get(0),
    menu: $("#menu").get(0),
    tolerance: 70,
    ease: "ease-in",
    duration: 400,
    side: "right"
  });

  $("#menu-button").on("click", function () {
    slideout.toggle();
  });



  slideout.on("beforeopen", function () {
    $("#navbar").css({
      top: $(window).scrollTop()
    });
  });

  slideout.on("close", function () {
    $("#navbar").css({
      top: 0
    });
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 30) {
      $("#navbar").addClass("solid");
    } else {
      $("#navbar").removeClass("solid");
    }
  });
});
