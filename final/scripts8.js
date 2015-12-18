$(document).ready(function(){
    
    $('#change').click(function(){
        
        var index = Math.floor((Math.random() * 4) + 1);
        
        if(index==1) {
          $("#change").html("nah..how about something else?");
          $("#person").hide();
          $('#one').show();
          $('#two').hide();
          $('#three').hide();
          $('#four').hide();
        }
        
        if(index==2) {
           $("#change").html("hmm..let's do something else");
           $("#person").hide();
           $('#two').show();
           $('#one').hide();
           $('#three').hide();
           $('#four').hide();
        }
        
        if(index==3) {
            $("#change").html("i think i rather not do that");
            $("#person").hide();
            $('#three').show();
            $('#one').hide();
            $('#two').hide();
            $('#four').hide();
        }
        
        if(index==4) {
            $("#change").html("maybe this..or not");
            $("#person").hide();
            $('#four').show();
            $('#one').hide();
            $('#two').hide();
            $('#three').hide();
        }
    });
    
       
});

