var clicked = false;


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