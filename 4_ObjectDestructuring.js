// Object Destructuring in JavaScript

// Basic Destructuring
const person = {
    name: "John",
    age: 30,
    job: "Developer"
};

const { name, age, job } = person;
console.log(name); // John
console.log(age);  // 30
console.log(job);  // Developer

// Destructuring with Default Values
const { city = "Unknown" } = person;
console.log(city); // Unknown

// Nested Destructuring
const employee = {
    id: 101,
    details: {
        department: "Engineering",
        location: "New York"
    }
};

const { details: { department, location } } = employee;
console.log(department); // Engineering
console.log(location);   // New York

// Destructuring in Function Parameters
function displayPerson({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}
displayPerson(person);

// Exercises
// Uncomment and predict the output
// const car = {
//     brand: "Toyota",
//     model: "Corolla",
//     specs: {
//         color: "Red",
//         year: 2020
//     }
// };
// const { brand, specs: { color, year } } = car;
// console.log(brand);
// console.log(color);
// console.log(year);