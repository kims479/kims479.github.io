$(document).ready(function(){
    
    $('#change').click(function(){
        var index = Math.floor((Math.random() * 4) + 1);
        
        if(index==1) {
          $('#one').show();
          $('#two').hide();
          $('#three').hide();
          $('#four').hide();
        }
        
        if(index==2) {
           $('#two').show();
           $('#one').hide();
           $('#three').hide();
           $('#four').hide();
        }
        
        if(index==3) {
            $('#three').show();
            $('#one').hide();
            $('#two').hide();
            $('#four').hide();
        }
        
        if(index==4) {
            $('#four').show();
            $('#one').hide();
            $('#two').hide();
            $('#three').hide();
        }
    });
       
});



