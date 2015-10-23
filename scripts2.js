$("body").css("background-color", "blue");

$("h1").html("Welcome to JQuery");

$(".bigredbutton").click(function() {
    console.log("you clicked it");
    $("h1").css("background-color","white");
    $("h1").toggleClass("white");
});

$(".bigredbutton").mousedown(function() {
    $(".bigredbutton")
})

function myFunction() {
    // do stuff enter myfunction() in console to get Hello World
    console.log("hello world");
}

function addNums(num1,num2) {
    // adds numbers
    var sum = num1 + num2;
    return sum;
}