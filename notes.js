// // // variable yang bisa menampung banyak data
// // // dimulai dengan []

// // // var instructors = "Ayu";

// // // Audrick
// // // console.log(instructors[0])

// // /**
// //  * Ayu
// //  * Daniel
// //  * Taufik
// //  */

// // // for (var i = 0; i < instructors.length; i++) {
// // //   console.log(instructors[i]);
// // // }

// // // instructors.splice(1, 1, "Audrick");

// // // instructors[1] = "B";

// // // console.log(instructors);

// // // var studentsName = [
// // //   ["Fadhil", "Male"],
// // //   ["Juan", "Male"],
// // //   ["Kholid", "Male"]
// // // ];

// // // studentsName.push(["Yoyok", "bukan cewek"]);
// // // console.log(studentsName);

// // // METHOD #1
// // // for (var i = 0; i < log.length; i++) {
// // //   if (log[i] === "Makan") {
// // //     todos[0][1]--;
// // //   } else if (log[i] === "Belajar") {
// // //     todos[1][1]--;
// // //   } else {
// // //     todos[2][1]--;
// // //   }
// // // }

// // var todos = [
// //   ["Makan", 3],
// //   ["Belajar", 1],
// //   ["Mandi", 2],
// //   ["Tidur", 2]
// // ];

// // /**
// //  * [
// //  *   ["Makan", 1],
// //  *   ["Belajar", 0],
// //  *   ["Mandi", 1]
// //  * ]
// //  */

// // var log = ["Makan", "Belajar", "Mandi", "Makan", "Tidur"];

// // for (var i = 0; i < log.length; i++) {
// //   for (var j = 0; j < todos.length; j++) {
// //     if (log[i] === todos[j][0]) {
// //       todos[j][1]--;
// //     }
// //   }
// // }

// // console.log(todos);

// var string = "aabbccbbaabc";

// function countMe(string) {
//   var huruf = "abc";
//   var result = [];
//   for (var j = 0; j < huruf.length; j++) {
//     var count = 0;
//     for (var i = 0; i < string.length; i++) {
//       if (huruf[j] === string[i]) {
//         count++;
//       }
//     }
//     result.push([huruf[j], count]);
//   }
//   return result;
// }

// console.log(countMe(string));
// /**
//  * [
//  *   ["a", 4],
//  *   ["b", 5],
//  *   ["c", 3]
//  * ]
//  */

//sort

//var numbers = [1, 3, 2, 5, 9, 4];
var numbers = ['c', 'a', 'd', 'k', 'l', 'b'];
// [1, 2, 3]

// var kamus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
for (var i = 0; i < numbers.length; i++) {
  for (var j = 0; j < numbers.length - 1; j++) {
    if (numbers[j] > numbers[j + 1]) {
      var temp = numbers[j + 1];
      numbers[j + 1] = numbers[j];
      numbers[j] = temp;
    }
  }
}

console.log(numbers);




var kamus = "abcdefghijklmnopqrstuvwxyz"

for (var i = 0; i < kamus.length; i++) {
    var temp = []
    for (var j = 0; j < animals.length; j++) {
        if (kamus[i] === animals[j][0]) {
            temp.push(animals[j])
        }
    }
    if (temp.length > 0) res.push(temp)
}
return res