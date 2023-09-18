const students = [
    {
        name: "Student 1",
        age: 18,
        grade: "A",
        id: 101
    },
    {
        name: "Student 2",
        age: 19,
        grade: "B",
        id: 102
    },
    {
        name: "Student 3",
        age: 20,
        grade: "C",
        id: 103
    },
    {
        name: "Student 4",
        age: 19,
        grade: "A",
        id: 104
    },
    {
        name: "Student 5",
        age: 21,
        grade: "B",
        id: 105
    },
    {
        name: "Student 6",
        age: 20,
        grade: "C",
        id: 106
    },
    {
        name: "Student 7",
        age: 18,
        grade: "A",
        id: 107
    },
    {
        name: "Student 8",
        age: 19,
        grade: "B",
        id: 108
    },
    {
        name: "Student 9",
        age: 20,
        grade: "C",
        id: 109
    },
    {
        name: "Student 10",
        age: 19,
        grade: "A",
        id: 110
    }
];
console.log(students);
//filter() method
//filter() method creates a new array with elements that meet the condition
const filteredStudents = students.filter(student => student.age > 19);
console.log(filteredStudents);
//find() method
//find() method returns the first element that meets the condition
const foundStudent = students.find(student => student.id === 105);
console.log(foundStudent);
//map() method
//map() method creates a new array with the results of calling a function for every element
//map() is frequently used to convert an array of objects of one type to an array of objects of another type
const studentNames = students.map(student => student.name);
console.log(studentNames);
//converting from an object with many properties to an object with fewer properties
const people = students.map(student => {
    //we need return here because we are using curly braces
    return {
        name: student.name,
        age: student.age
    };
});
console.log(people);

