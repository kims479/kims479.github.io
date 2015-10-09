/**example**/
var star = "*";

for (var myVar = 1; myVar <= 10; myVar++) {
  star = star + "*";
  console.log(star);
  var star2 = "R";

  for (var myVar2 = 0; myVar2 < 20; myVar2++) {
    star2 = star2 + "R";
    if (myVar2 == 10) {
      star2 = "R";
    }
    console.log(star2);
  }
}

console.log("Hello World");
console.log("yo");

var symbols = ["*", "$", "#", "@","*", "$", "#", "@","*", "$", "#", "@","*", "$", "#", "@","*", "$", "#", "@",];

var pattern = "*"; 

for (var increment = 1; increment < 20; increment++) {
  console.log(pattern);
  pattern = pattern + symbols[increment];
}

