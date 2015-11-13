$("body").css("background-color","red");

$(window).click(function(event) {
    console.log(event.clientX);
    var newLeft = event.clientX + "px";
    var newTop = event.clientY + "px";
    $("button").css("top", newTop);
    $("button").css("left", newLeft);
    $("body").append("Hello world");
});

$(window).keyPress(function(event) {
    console.log(event);
        if(event.keyCode == 114) {
            $("body").css("background-color","red");
        }
        if(event.keyCode == 103) {
        $("body").css("background-color","lime");
         }
        if(event.keyCode == 98) {
        $("body").css("background-color","blue");
         }
});

$(window).resize(function() {
        console.log(event);
        if ($(window).width() > 800) {
            $(".button").css("width","200px:");
        } else {
            $(".button").css("width","");
        }
});