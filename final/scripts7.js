$(document).ready(function(){
    //var audio = new Audio('engine.wav');
    //var wave = new Audio('waves.wav');
    
     $("#engine").click(function() {
        $(this).css("background-color", "green");
         $('audio[id=waveaudio]').get(0).pause();
        $('audio[id=engineaudio]').get(0).play();
     });
     $("#engine").mouseout(function() {
        $(this).css("background-color", "red");
        $('audio[id=engineaudio]').get(0).pause();
         $('audio[id=waveaudio]').get(0).play();
     });
     
       
});



