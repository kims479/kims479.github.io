var symbols1 = ["~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~"];
var symbols2 = ["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"];

var pattern = "~";
var star ="*";

  for (var increment = 0; increment < symbols1.length; increment++) {
    pattern = pattern + symbols1[increment];
  }

  for (var increment = 0; increment < symbols2.length; increment++) {
    star = star + symbols2[increment];
  }

    symbols2.reverse();
    
  for (var increment = 0; increment < symbols1.length; increment++) {
    console.log(symbols1[increment],symbols2[increment],symbols1[increment],symbols2[increment],symbols1[increment],symbols2[increment],symbols1[increment],symbols2[increment]);
  }
