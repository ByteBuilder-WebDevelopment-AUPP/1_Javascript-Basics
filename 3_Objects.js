// Objects in JavaScript

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