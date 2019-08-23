$(function() {
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
        scrollTop:
          $("#jumbotron").position().top +
          $("#jumbotron").outerHeight(true) -
          81
      },
      800
    );
  });

  slideout.on("beforeopen", function() {
    $("#navbar").css({
      top: $(window).scrollTop()
    });
  });

  slideout.on("close", function() {
    $("#navbar").css({
      top: 0
    });
  });

  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= $("#jumbotron").height() - 81) {
      $("#navbar").addClass("solid");
    } else {
      $("#navbar").removeClass("solid");
    }
  });
});
