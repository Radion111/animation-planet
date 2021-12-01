// для медленого скрола

$(document).ready(function () {
  $(".header-top__a").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top + "px",
      },
      {
        duration: 1000,
        easing: "linear",
      }
    );
    return false;
  });
});

// burger menu
$(document).ready(function () {
  $(".burger-menu").click(function (event) {
    $(".burger-menu,.content").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

// Для картинок ibg method  js native

function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();

// Для табов СТАРАЯ ВЕРСИЯ
$(document).ready(function () {
  $(".slidersecondto__a").click(function (e) {
    e.preventDefault();
    $(".slidersecondto__a").removeClass("activeaaa");
    $(".slidersecondto__poid").removeClass("activetabbbbb");
    $(this).addClass("activeaaa");
    $($(this).attr("href")).addClass("activetabbbbb");
  });
  $(".slidersecondto__a:first").click();
});
