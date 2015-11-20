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

/**$("#hole").mouseenter(function() {
    if (clicked == false){
        $("#container").show();
    }
})

$("#hole").mouseleave(function() {
    $("#container").hide();
})
**/
