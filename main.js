$("#icon_home").on("mouseover", function () {
  $("#text_home").css("visibility", "visible");
  $("#text_home").css("z-index", 1);
  $("#text").css("z-index", 1);
});
$("#icon_about").on("mouseover", function () {
  $("#text_about").css("visibility", "visible");
  $("#text_home").css("z-index", 1);
  $("#text").css("z-index", 1);
});
$("#icon_portfolio").on("mouseover", function () {
  $("#text_portfolio").css("visibility", "visible");
  $("#text_home").css("z-index", 1);
  $("#text").css("z-index", 1);
});

$("#icon_home").on("mouseout", function () {
  $("#text_home").css("visibility", "hidden");
  $("#text_home").css("z-index", -1);
  $("#text").css("z-index", -1);
});
$("#icon_about").on("mouseout", function () {
  $("#text_about").css("visibility", "hidden");
  $("#text_home").css("z-index", -1);
  $("#text").css("z-index", -1);
});
$("#icon_portfolio").on("mouseout", function () {
  $("#text_portfolio").css("visibility", "hidden");
  $("#text_home").css("z-index", -1);
  $("#text").css("z-index", -1);
});

$("#content").on("mouseover", function () {
  $("#content_container").attr("class", "show_scroll");
});
$("#content").on("mouseout", function () {
  $("#content_container").attr("class", "hide_scroll");
});

$(".mobile-bar").on("click", function () {
  $("#profile").addClass("slide");
  $("#menuContainer").css("display", "none");
});

$(".fa-times").on("click", function () {
  $("#profile").removeClass("slide");
  setTimeout(() => {
    $("#menuContainer").css("display", "flex");
  }, 500);
});

function showPage(page) {
  if (page == "petpal") {
    $("#petpal").attr("class", "appear");
    $("#petpal").show();
  } else if (page == "ilhajob") {
    $("#ilhajob").attr("class", "appear");
    $("#ilhajob").show();
  } else if (page == "together") {
    $("#together").attr("class", "appear");
    $("#together").show();
  } else if (page == "cleanapp") {
    $("#cleanapp").attr("class", "appear");
    $("#cleanapp").show();
  } else if (page == "dicetomeetyou") {
    $("#dicetomeetyou").attr("class", "appear");
    $("#dicetomeetyou").show();
  } else if (page == "reward") {
    $("#reward").attr("class", "appear");
    $("#reward").show();
  } else if (page == "influencer") {
    $("#influencer").attr("class", "appear");
    $("#influencer").show();
  } else if (page == "academy") {
    $("#academy").attr("class", "appear");
    $("#academy").show();
  } else if (page == "naverpay") {
    $("#naverpay").attr("class", "appear");
    $("#naverpay").show();
  }
}

function closePage(page) {
  if (page == "petpal") {
    $("#petpal", parent.document).attr("class", "disappear");
    setTimeout(() => {
      $("#petpal", parent.document).css("display", "none");
    }, 1000);
  } else if (page == "ilhajob") {
    $("#ilhajob", parent.document).attr("class", "disappear");
    setTimeout(() => {
      $("#ilhajob", parent.document).css("display", "none");
    }, 1000);
  } else if (page == "together") {
    $("#together", parent.document).attr("class", "disappear");
    setTimeout(() => {
      $("#together", parent.document).css("display", "none");
    }, 1000);
  } else if (page == "cleanapp") {
    $("#cleanapp", parent.document).attr("class", "disappear");
    setTimeout(() => {
      $("#cleanapp", parent.document).css("display", "none");
    }, 1000);
  } else if (page == "dicetomeetyou") {
    $("#dicetomeetyou", parent.document).attr("class", "disappear");
    setTimeout(() => {
      $("#dicetomeetyou", parent.document).css("display", "none");
    }, 1000);
  } else if (page == "reward") {
    $("#reward", parent.document).attr("class", "disappear");
    setTimeout(() => {
      $("#reward", parent.document).css("display", "none");
    }, 1000);
  } else if (page == "influencer") {
    $("#influencer", parent.document).attr("class", "disappear");
    setTimeout(() => {
      $("#influencer", parent.document).css("display", "none");
    }, 1000);
  } else if (page == "academy") {
    $("#academy", parent.document).attr("class", "disappear");
    setTimeout(() => {
      $("#academy", parent.document).css("display", "none");
    }, 1000);
  } else if (page == "naverpay") {
    $("#naverpay", parent.document).attr("class", "disappear");
    setTimeout(() => {
      $("#naverpay", parent.document).css("display", "none");
    }, 1000);
  }
}

function showIcon(e) {
  $(e).children("ion-icon").css("visibility", "visible");
}
function hideIcon(e) {
  $(e).children("ion-icon").css("visibility", "hidden");
}

function next() {
  var next = $(".on").next();
  if (next.length == 0) {
    next = $("#home");
  }
  $(".on").css("display", "none");
  $(".on").removeClass("on");
  next.addClass("on");
  if ($(".on").attr("id") == "home") {
    $(".on").css("display", "flex");
  } else {
    $(".on").css("display", "block");
  }
  $(".active").removeClass("active");
  if (next.attr("id") == "home") {
    $("#icon_home").addClass("active");
    $("#mobile_home").addClass("active");
  } else if (next.attr("id") == "about_me") {
    $("#icon_about").addClass("active");
    $("#mobile_about").addClass("active");
  } else {
    $("#icon_portfolio").addClass("active");
    $("#mobile_portfolio").addClass("active");
  }
}

function prev() {
  var prev = $(".on").prev();
  if (prev.length == 0) {
    prev = $("#portfolio");
  }
  $(".on").css("display", "none");
  $(".on").removeClass("on");
  prev.addClass("on");
  if ($(".on").attr("id") == "home") {
    $(".on").css("display", "flex");
  } else {
    $(".on").css("display", "block");
  }
  $(".active").removeClass("active");
  if (prev.attr("id") == "home") {
    $("#icon_home").addClass("active");
    $("#mobile_home").addClass("active");
  } else if (prev.attr("id") == "about_me") {
    $("#icon_about").addClass("active");
    $("#mobile_about").addClass("active");
  } else {
    $("#icon_portfolio").addClass("active");
    $("#mobile_portfolio").addClass("active");
  }
}

function move(e) {
  var id = $(e).attr("id");
  if (id == "icon_home") {
    $("#home").css("display", "flex");
    $("#about_me").css("display", "none");
    $("#portfolio").css("display", "none");
    $(e).attr("class", "active");
    $("#icon_about").attr("class", "");
    $("#icon_portfolio").attr("class", "");
  } else if (id == "icon_about") {
    $("#about_me").css("display", "block");
    $("#home").css("display", "none");
    $("#portfolio").css("display", "none");
    $(e).attr("class", "active");
    $("#icon_home").attr("class", "");
    $("#icon_portfolio").attr("class", "");
  } else {
    $("#portfolio").css("display", "block");
    $("#home").css("display", "none");
    $("#about_me").css("display", "none");
    $(e).attr("class", "active");
    $("#icon_home").attr("class", "");
    $("#icon_about").attr("class", "");
  }
}
function moveMobile(e) {
  var id = $(e).attr("id");
  if (id == "mobile_home") {
    $("#profile").removeClass("slide");
    setTimeout(() => {
      $("#menuContainer").css("display", "flex");
    }, 500);
    $("#home").css("display", "flex");
    $("#about_me").css("display", "none");
    $("#portfolio").css("display", "none");
    $(e).attr("class", "active");
    $("#mobile_about").attr("class", "");
    $("#mobile_portfolio").attr("class", "");
  } else if (id == "mobile_about") {
    $("#profile").removeClass("slide");
    setTimeout(() => {
      $("#menuContainer").css("display", "flex");
    }, 500);
    $("#about_me").css("display", "block");
    $("#home").css("display", "none");
    $("#portfolio").css("display", "none");
    $(e).attr("class", "active");
    $("#mobile_home").attr("class", "");
    $("#mobile_portfolio").attr("class", "");
  } else {
    $("#profile").removeClass("slide");
    setTimeout(() => {
      $("#menuContainer").css("display", "flex");
    }, 500);
    $("#portfolio").css("display", "block");
    $("#home").css("display", "none");
    $("#about_me").css("display", "none");
    $(e).attr("class", "active");
    $("#mobile_home").attr("class", "");
    $("#mobile_about").attr("class", "");
  }
}
