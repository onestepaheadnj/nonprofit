$(function() {
  $("body").fadeIn(1500);
  var slideout = new Slideout({
    panel: $("#main").get(0),
    menu: $("#menu").get(0),
    padding: 270,
    tolerance: 70,
    ease: "ease-in",
    duration: 400
  });

  $(".toggle-button").on("click", function() {
    slideout.toggle();
  });

  slideout.on("beforeopen", function() {
    $(".hamburger").addClass("is-active");
  });

  slideout.on("beforeclose", function() {
    $(".hamburger").removeClass("is-active");
  });
});
