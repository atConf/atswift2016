Zepto(function($) {
  function adjustBg() {

    $(".speaker__card img")
      .width(Math.round($(".speaker__content").width() * 0.5))
      .height(Math.round($(".speaker__content").width() * 0.5))
      .css({
        borderRadius: Math.round($(".speaker__content").width() * 0.25)
      })
    $(".info").height($(window).height())
    var height = $(window).height()
    var width = $(window).width()
    if (width / height >= 1.95) {
      $(".info").css("background-size", (width) + "px " + (width / 1.95) + "px")
    } else {
      $(".info").css("background-size", (height * 1.95) + "px " + (height) + "px")
    }

    var max = 0
    $(".speaker__content").map(function() {
      if ($(this).height() > max) {
        max = $(this).height()
      }
    })
    $(".speaker__content").height(max)
  }
  $(window).resize(adjustBg)
  adjustBg()
})
