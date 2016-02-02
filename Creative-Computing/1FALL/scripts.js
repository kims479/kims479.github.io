var symbols1 = [];
var symbols2 = [];
var symbols3 = [];

var star1 = "~";
var star2 = "*";
var star3 = "!";

  for (var increment = 0; increment < 45; increment++) {
    symbols1.push(star1);
    star1 = star1 + "~";
    symbols1.reverse();
  }

  for (var increment = 0; increment < 45; increment++) {
    symbols2.push(star2);
    star2 = star2 + "*" + "*";
  }
  
  for (var increment = 0; increment < 50; increment++) {
    symbols3.push(star3);
    star3 = star3 + "!";
  }
  
  symbols3.reverse();
    
  for (var increment = 0; increment < 20; increment++) {
    console.log(symbols3[increment],symbols2[increment],symbols1[increment],symbols2[increment],symbols3[increment]);
  }
