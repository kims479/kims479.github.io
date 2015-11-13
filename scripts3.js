var clicked = false;

$("body").addClass("#point");

$("body").mouseenter(function() {
    if (clicked == true){
    $("#blue").show();
    }
});

$("#point").mouseleave(function() {
    $("#blue").hide();
});

