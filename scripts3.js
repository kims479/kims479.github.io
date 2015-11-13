var clicked = false;

$("body").addClass("#point");

$("#point").mouseenter(function() {
    if (clicked == false) {
        $("#blue").show();

        clicked = true;
    } else {
        $("#blue").hide();
        clicked = false;
    }
});

//can't get this to work