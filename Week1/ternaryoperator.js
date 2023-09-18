//ternary operator
//syntax: condition ? true : false
//if the condition is true, the first expression is executed
//if the condition is false, the second expression is executed
console.log(2 > 1 ? "2 is greater than 1" : "2 is not greater than 1");
//ternary operator with function
//this function will return the larger of the two numbers
const larger = (a, b) => a > b ? a : b;
console.log(larger(2, 3));
//short circuiting
console.log(2 > 1 && 3 > 2);
//Why is this printing hello?
console.log(2 > 1 && "hello");
//is this a bug or a feature?
console.log(2 > 1 && 0);
//example with OR
console.log(2 < 1 || "hello");
console.log(0 || 0);
//because JS uses short circuiting, we can use this to our advantage
//this is a common pattern in JS
//if the first parameter is null or undefined, use the second parameter
const printName = name => console.log(name || "no name");
printName("hello");
printName();