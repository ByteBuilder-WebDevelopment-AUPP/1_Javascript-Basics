function divide(a, b) {
  if (b === 0) return "Cannot divide by 0";
  return a / b;
}

console.log(divide(10, 2));
console.log(divide(10, 0));

console.log(typeof divide);

function test(c, d) {
    if (c === 0 || typeof c === "number" && c > 40) 
        return "Invalid input for c";
        return c / d 
}

console.log(test(0, 5));
console.log(test(40, 5));

// guard clause exercise

// function guardclause (name) {
//     if (!name || typeof name !== "string" && name.lenght < 3) 
//         return "invalid name"
//     return `Hello, ${name}!`
// }

let guardclause = (name) => {
    if (!name || typeof name !== "string" || name.length < 3) 
        return "invalid name"
    return `Hello, ${name}!`;
}

function outer() {
    let name1 = "john";
    console.log(`This is the outer function, ${name1}`);
    function inner() {
        console.log(`This is the inner function, ${name1}`)
    }
    inner();
}
outer();


