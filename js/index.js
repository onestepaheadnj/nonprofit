$(function() {
  // $("body").fadeIn(1500);
  var slideout = new Slideout({
    panel: $("#main").get(0),
    menu: $("#menu").get(0),
    tolerance: 70,
    // ease: "ease-in",
    // duration: 400,
    side: "right"
  });

  $("#navbar").on("click", function() {
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
    window.location.hash = "#content";
  });

  $(window).on("scroll", function() {
    $("#navbar, #menu").css({
      top: $(window).scrollTop()
    });

    if ($(window).scrollTop() >= 100) {
      $("#navbar").addClass("solid");
    } else {
      $("#navbar").removeClass("solid");
    }
  });
});
