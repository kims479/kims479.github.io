var clicked = false;
var x = x;
var y = y;

$("body").addClass("#point1");

//x's
$("#toggle1").mouseover(function() {
    if (clicked == false) {
        $("#color1").show();
        clicked = true;
    }
});
$("#toggle1").mouseout(function() {
        $("#color1").hide();
        clicked = false;
});


//circles
$("#hole1").mousedown(function() {
    if (clicked == false){
        $("#crystal1").show();
        $("#text1").hide();
        $("#text2").hide();
        $("#toggle1").hide();
        $("#toggle2").hide();
        $("#toggle3").hide();
        $("#hole2").hide();
        $("#hole3").hide();
        $("#hole4").hide();
        clicked = true;
    }
});
$("#hole1").mouseup(function() {
     if (clicked == true){
        $("#crystal1").hide();
        $("#text1").show();
        $("#text2").show();
        $("#toggle1").show();
        $("#toggle2").show();
        $("#toggle3").show();
        $("#hole2").show();
        $("#hole3").show();
        $("#hole4").show();
        clicked = false;
     }
});

$("#hole2").mousedown(function() {
    if (clicked == false){
        $("#crystal2").show();
        $("#text1").hide();
        $("#text2").hide();
        $("#toggle1").hide();
        $("#toggle2").hide();
        $("#toggle3").hide();
        $("#hole1").hide();
        $("#hole3").hide();
        $("#hole4").hide();
        clicked = true;
    }
});
$("#hole2").mouseup(function() {
     if (clicked == true){
        $("#crystal2").hide();
        $("#text1").show();
        $("#text2").show();
        $("#toggle1").show();
        $("#toggle2").show();
        $("#toggle3").show();
        $("#hole1").show();
        $("#hole3").show();
        $("#hole4").show();
        clicked = false;
     }
});
