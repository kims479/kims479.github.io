var star = "+";

for (var myVar = 1; myVar <= 15; myVar++) {
  star = star + ".";
  console.log(star);
  
  var star2 = "~";

  for (var myVar2 = 0; myVar2 < 20; myVar2++) {
    star2 = star2 + "~";
    if (myVar2 == 10) {
      star2 = "~";
    }
    console.log(star2);
  }
}


/**console.log("Hello World");
console.log("yo");

var symbols = ["*", "$", "#", "@","*", "$", "#", "@","*", "$", "#", "@","*", "$", "#", "@","*", "$", "#", "@",];

var pattern = "*"; 

for (var increment = 1; increment < symbols.length; increment++) {
  console.log(pattern);
  pattern = pattern + symbols[increment];
  var ampersand = "&";
  console.log(increment);
  if (increment > 5) {
    for (var another = 0; another < 10; another++) {
      console.log(ampersand);
      ampersand = ampersand + "&";
    }
  }
}

**/