// Variables in JavaScript

var name = "John"; // Variable using var
let age = 25;       // Variable using let
const PI = 3.14;    // Constant variable

// var is function-scoped
// let and const are block-scoped

let x = 10;
const y = 20;
var z = 30;
console.log(x, y, z);

// Hoisting example
console.log(hoistedVar); // undefined
var hoistedVar = "I am hoisted!";

// Exercises
// Uncomment and predict the output
// function testScope() {
//     if (true) {
//         var a = 1;
//         let b = 2;
//         const c = 3;
//     }
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// testScope();
