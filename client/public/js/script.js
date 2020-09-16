$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
      $(".top").fadeIn();
    } else {
      $(".navbar").removeClass("sticky");
      $(".top").fadeOut();
    }
  });
  $(".top").click(function () {
    scroll(0, 0);
  });
  $(".menu-toggler").click(function () {
    $(".navbar-menu").css({
      right: 0,
    });
  });
  $(".menu-toggler").dblclick(function () {
    $(".navbar-menu").css({
      right: "-100%",
    });
  });
  $(".project").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: { enabled: true },
  });
});
