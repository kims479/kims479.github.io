for (i=0; i<6000; i++) {
  $("body").append("<div class='box'></div>");
}

var currentColor = "white";

$(".pink").click(function() {
  currentColor = "#FF33C7";
});

$(".red").click(function() {
  currentColor = "red";
});

$(".orange").click(function() {
  currentColor = "#FFA533";
});

$(".yellow").click(function() {
  currentColor = "#FFF933";
});

$(".green").click(function() {
  currentColor = "lime";
});

$(".blue").click(function() {
  currentColor = "blue";
});

$(".purple").click(function() {
  currentColor = "#BD00FF";
});

$(".brown").click(function() {
  currentColor = "#734C24";
});

$(".white").click(function() {
  currentColor = "white";
});

$(".black").click(function() {
  currentColor = "black";
});

$(".box").click(function() {
  $(this).css("background-color",currentColor);
});

$(".done").click(function() {
  $(".box").css("border","1px solid transparent");
  $("body").css("background-color","white");
  $(".pink").css("background-color","transparent");
  $(".red").css("background-color","transparent");
  $(".orange").css("background-color","transparent");
  $(".yellow").css("background-color","transparent");
  $(".blue").css("background-color","transparent");
  $(".green").css("background-color","transparent");
  $(".purple").css("background-color","transparent");
  $(".brown").css("background-color","transparent");
  $(".black").css("background-color","transparent");
});