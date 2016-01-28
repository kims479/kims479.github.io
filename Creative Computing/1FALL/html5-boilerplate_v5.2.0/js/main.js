console.log("Hello World");

var cats = ["img/cat1.jpg", "img/cat2.jpg", "img/cat3.jpg", "img/cat4.jpg"];

$("body").append("<img src='" + cats[Math.floor(Math.random()*cats.length)] + "'>");

$("body").css("background-color","red");

var ballTop = Math.random();

$(".ball").css("top","200px").css("left","300px");