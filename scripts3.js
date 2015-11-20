var clicked = false;
var x = x;
var y = y;

$("body").addClass("#point");

$("#toggle").click(function() {
    console.log("clicked");
    if (clicked == false) {
        $("#blue").show();
        clicked = true;
    } else {
        $("#blue").hide();
        clicked = false;
    }
});

$("#hole").mouseenter(function() {
    if (clicked == false){
        $("#purple").show();
        $("#toggle").hide();
        clicked = true;
    }
})

$("#hole").mouseleave(function() {
     if (clicked == true){
        $("#purple").hide();
        $("#toggle").show();
        clicked = false;
     }
})
