for (i=0; i<6000; i++) {
  $("body").append("<div class='box'></div>");
}

var isActive = false;

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
  if (isActive) {
  $(this).css("background-color",currentColor);
}
});

if (window.location.hash == '#colors') {
  clear_board();
}

function clear_board() {
  $(".game").css("visibility","hidden");
  $(".home").css("visibility","visible");
  $(".box").css("border","1px solid white");
  $("body").css("background-color","black");
  $(".box").css("background-color","transparent"); 
  $(".done").css("visibility","hidden");
  $(".next").css("visibility","hidden");
}

$(".done").click(function() {
  $(this).css("visibility","hidden");
  $(".next").css("visibility","visible");
  $(".box").css("border","1px solid transparent");
  $("body").css("background-color","white");
  $(".color-picker").css('background-color', 'transparent');
  $(".color-picker").css('border', '1px solid transparent');
  $(".clear").css("visibility","hidden");
  isActive = false;
  //$(".box").off("click","");
});

//begin
$(".button2").click(function()  { 
  $(".home").css("visibility","hidden");
  $(".game").css("visibility","visible");
  $(".color-picker").attr('style', '');
  // $(".colors").css
  $(".done").css("visibility","visible");
  $(".next").css("visibility","hidden");
  $(".box").on("click","");
  isActive = true;
});

//home
$(".button3").click(function() {
  clear_board();
});

//cleear button
$(".clear").click(function() {
  $(".box").css("border","1px solid white");
  $("body").css("background-color","black");
  $(".box").css("background-color","transparent"); 
});
