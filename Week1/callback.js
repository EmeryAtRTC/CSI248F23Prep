//callback functions
//a callback function is a function that is passed to another function as an argument
//callback example
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
//this function takes in a function as an argument
const calculate = (a, b, callbackfn) => callbackfn(a, b);
//this will print 5
console.log(calculate(2, 3, add));
//this will print -1
console.log(calculate(2, 3, subtract));
//this will print 6
//this is an anonymous function
console.log(calculate(2, 3, (a, b) => a * b));

//a common used of callback function is with array methods
