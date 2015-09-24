$(function() {
  var checker = localStorage.getItem("atswiftsubscribed")
  if (checker) {
    $('.subscribe').hide()
    return
  } else {
    function checkemail(val) {
      if (!val.trim()) {
        return false
      }
      var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
      return re.test(val)
    }
    $(".subscribe__btn").click(function() {
      $("#swiftweekly #content").submit()
    })
    $(".emailform").submit(function(e) {
      e.preventDefault()
      if (!checkemail($(".subscribe__email").val())) {
        setTimeout('$(".subscribe__email").focus()', 100)
        return
      }
      $(".subscribe__email").addClass("disabled")
      $(".subscribe__btn").addClass("disabled").text("稍等")
      $.getJSON("http://ggchecker.githuber.info/atswiftaddemail/" + $(".subscribe__email").val().trim(), function(data) {
        if (data["success"] == "success") {
          localStorage.setItem("atswiftsubscribed", true)
          $(".subscribe__btn").text("成功！")
          setTimeout("$('.subscribe').hide()", 1000);
        }
      })
    })
  }
})