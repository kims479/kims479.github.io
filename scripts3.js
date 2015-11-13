var clicked = false;

$("#point").mouseenter(function() {
    if (clicked == true){
    $("#blue").show();
    }
});

$("#point").mouseleave(function() {
    $("#blue").hide();
});