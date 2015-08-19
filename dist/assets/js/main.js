Zepto(function($) {
  function adjustBg() {
    $(".speaker__content").height($(".speaker__content").width())
    $(".speaker__card img")
      .width(Math.round($(".speaker__content").width() * 0.618))
      .height(Math.round($(".speaker__content").width() * 0.618))
      .css({
        margin: Math.round($(".speaker__content").width() * 0.382) / 2,
        borderRadius: Math.round($(".speaker__content").width() * 0.618) / 2,

      })
    $(".info").height($(window).height())
    var height = $(window).height()
    var width = $(window).width()
    if (width / height >= 1.95) {
      $(".info").css("background-size", (width) + "px " + (width / 1.95) + "px")
    } else {
      $(".info").css("background-size", (height * 1.95) + "px " + (height) + "px")
    }
  }
  $(window).resize(adjustBg)
  adjustBg()
})
