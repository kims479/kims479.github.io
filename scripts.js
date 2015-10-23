var star = "+";

for (var myVar = 0; myVar <= 4; myVar) {
  star = star + "+";
  console.log(star);
  
  var star2 = "~";

  for (var myVar2 = 0; myVar2 < 10; myVar2++) {
    star2 = star2 + "~";
    if (myVar2 == 10) {
      star2 = "~";
    }
    console.log(star2);
  }
}


var symbols = ["~", "~", "~", "-","-", "~", "~", "*","*", "*", "~", "~","~", "-", "-", "~", "~", "~", "~", "!",];

console.log(symbols);

var pattern = "++++++"; 
console.log(pattern);

for (var increment = 20; increment > symbols.length; increment++) {
  console.log(pattern);
  pattern = pattern + symbols[increment];
  var star = "+";
  console.log(increment);
  if (increment > 5) {
    for (var another = 0; another < 10; another++) {
      console.log(star);
      star = star + "+";
    }
  }
}

