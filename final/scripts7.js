$(document).ready(function(){

     $("#engine").click(function() {
        $(this).css("background-color", "#003300").css("color", "grey").html("start");
        $('audio[id=waveaudio]').get(0).pause();
        $('audio[id=engineaudio]').get(0).play();
     });
     $("#engine").mouseout(function() {
        $(this).css("background-color", "#009900").css("color", "white").html("on");
        $('audio[id=engineaudio]').get(0).pause();
        $('audio[id=waveaudio]').get(0).play();
     });
     
     
     $("#speed").click(function() {
        $(this).css("background-color", "#FFF75A");
        $('audio[id=waveaudio]').get(0).pause();
        $('audio[id=speedaudio]').get(0).play();
     });
     $("#speed").mouseout(function() {
        $(this).css("background-color", "#E5C500");
        $('audio[id=speedaudio]').get(0).pause();
        $('audio[id=waveaudio]').get(0).play();
     });
     
     
     $("#stop").click(function() {
        $(this).css("background-color", "#990000").css("color", "3D0000");
        $("#engine").html("off").css("background-color", "#003300").css("color", "#000F00");
        $("#speed").css("color", "#2D2700").css("background-color", "#726200");
        $('audio[id=waveaudio]').get(0).pause();
        $('audio[id=stopaudio]').get(0).play();
     });
     $("#stop").mouseout(function() {
        $('audio[id=stopaudio]').get(0).pause();
        $('audio[id=waveaudio]').get(0).play();
     });
     
       
});



