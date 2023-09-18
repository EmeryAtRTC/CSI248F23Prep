//functions in JavaScript
//traditional function
function add(a, b) {
    return a + b;
}
let result = add(2, 3);
console.log(result);
//anonymous function syntax
const sum = function (a, b) {
    return a + b;
};
result = sum(2, 3);
console.log(result);
//arrow function, ES6
//(a, b) go to the following function
const addition = (a, b) => {
    return a + b;
};
result = addition(2, 3);
console.log(result);
//arrow function with one line
//where there is one line, we can omit the curly braces and the return is automatic
const addOneLine = (a, b) => a + b;
//arrow function with one argument
//where there is only one argument, we can omit the parenthesis
const square = a => a * a;
//arrow function with no argument
//where there is no argument, we need to put empty parenthesis
const print = () => console.log("hello from print");
print();
//Fuction that returns a function
const createPrinter = () => () => console.log("hello from createprinter");
//notice that this did not print anything
createPrinter()();

