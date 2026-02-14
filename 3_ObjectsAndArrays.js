// Objects and Arrays in JavaScript

// Objects
const person = {
    name: "John",
    age: 30,
    greet: function() {
        return `Hi, I am ${this.name}`;
    }
};
console.log(person.name);
console.log(person.greet());

// Adding properties
person.job = "Developer";
console.log(person.job);

// Arrays
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Accessing elements

// Adding elements
fruits.push("Orange");
console.log(fruits);

// Looping through an array
for (let fruit of fruits) {
    console.log(fruit);
}

// Exercises
// Uncomment and predict the output
// const car = {
//     brand: "Toyota",
//     model: "Corolla",
//     start: function() {
//         return "Car started";
//     }
// };
// console.log(car.brand);
// console.log(car.start());

// const numbers = [1, 2, 3, 4];
// numbers.pop();
// console.log(numbers);