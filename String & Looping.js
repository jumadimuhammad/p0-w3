var front = "Hello";
var back = "World";

console.log(front + " " + back); //Hello World
console.log(`"${front}" '${back}'`); //Hello World

var greeting = "Hello World!";
for (var i = 0; i < greeting.length; i++) {
  console.log(i, greeting[i]);
}

var string = "abcdefghi";

/**
 * abc
 * def
 * ghi
 */

for (var i = 0; i < string.length; i += 3) {
  var temp = "";
  for (var j = i; j < i + 3; j++) {
    temp = temp + string[j];
  }
  console.log(temp);
}

/**
 * *
 * **
 * ***
 * ****
 * ***
 * **
 * *
 */

var name = "****";

for (var i = 0; i < 4; i++) {
  var temp1 = "";
  for (var j = 0; j <= i; j++) {
    temp1 += "*";
  }
  console.log(temp1);
}

for (var i = 3; i > 0; i--) {
  var temp2 = "";
  for (var j = 0; j < i; j++) {
    temp2 += "*";
  }
  console.log(temp2);
}
