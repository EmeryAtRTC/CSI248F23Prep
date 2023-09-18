//spread operator
//combine arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
//concatenate objects
const stu1 = {
    name: "Student 1",
    age: 18,
    grade: "A",
    id: 101
};
const stu2 = {
    name: "Student 2",
    age: 19,
    grade: "B",
    id: 102
};
const stu3 = {...stu1, ...stu2};
console.log(stu3);
//rest operator lets you take in any number of arguments
//rest of the parameters
//the rest operator must be the last parameter
const add = (a, b, ...rest) => {
    //log the rest of the parameters
    console.log(rest);
    //add the first two
    return a + b;
};
//add 1 and 2
console.log(add(1, 2, 3, 4, 5, 6));
//destructuring
//destructuring arrays
//this will create two varaibles x and y
const [x, y] = [1, 2];    
console.log(x);
console.log(y);
//destructuring objects
//this will create two varaibles name and age
const {name, age} = stu1;
console.log(name);
console.log(age);
//destructuring objects with different variable names
const {name: studentName, age: studentAge} = stu1;
console.log(studentName);
console.log(studentAge);
//rest can be used with destructuring
const {id, ...everythingElse} = stu1;
console.log(id);
console.log(everythingElse);
