// console.log("hello world");

let arr = [1, 2, 3, 4, 5];

// let sum = 0
// sum = sum + 1

// accumulator

// let sum = 0

// let total = arr.reduce((sum, elem) => {
//   return sum + elem;
// }, 5);

// console.log(total);

// let sum = 0;
// arr.forEach((elem)=>{
//     sum += elem
// })
// console.log(sum)

// let fruits = ["apple", "banana", "apple", "mango", "apple"];

// let result = fruits.reduce((counter, fruit) => {
//   counter[fruit] = (counter[fruit] || 0) + 1
// }, {});

// console.log(result);

// let products = [
//     {
//         name: "laptop",
//         price: 40000,
//         tax: 20
//     },
//     {
//         name: "laptop",
//         price: 40000,
//         tax: undefined
//     },{
//         name: "laptop",
//         price: 40000,
//         tax: 18
//     }
// ]

// let arr1 = [1,2,3,4,5]

// console.log(...arr1)
// console.log(1,2,3,4,5);
// console.log(arr1)

// console.log(..."hello")
// console.log("hello")

// console.log(Math.max(1,2,3,4,5));
// console.log(Math.max(arr1[0],arr1[1],arr1[2],arr1[3],arr1[4]));
// console.log(Math.max(...arr1));

// let names = ["ali", "zayeem", "ahmed"];
// let copyNames = names;

// copyNames[0] = "Mohd"

//  console.log(copyNames);

//  console.log(names)

// let newArray = ["ali", "zayeem", "ahmed"];
// newArray[0] = "Mohd"
// console.log(newArray)
// console.log(names);

// let newArray1 = [...names];
// console.log(newArray1)

// newArray1[0] = "Aslam"
// console.log(names)

// Rest operator

// Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 35, 64)

// function Math(a, b, c, d, e, f, g, h)

// function Math(...nums){
//     console.log(nums)
// }

// Math(1, 2, 3, 4, 5, 6, 7, 7, 34, 45,  34)

// function announcement(first, second, ...others){
//     console.log("Winner is, ", first);
//     console.log("Runner up is, ", second);

//     console.log("others are: ", others)
//     // let others = ['farhan', 'farooq', 'ghani', 'muzammil', 'Razi', 'hannan']

// }

// let arr23 = ["farhan", "farooq", "ghani", "muzammil", "Razi", "hannan"]
// announcement("mohd", "rehan", ...arr23)

// announcement("mohd", "rehan", "farhan", "farooq", "ghani", "muzammil", "Razi", "hannan")

// let names1 = ["farhan", "farooq", "ghani"];

// // let first = names1[0]

// // let second = names1[1]

// // let third = names1[2]

// // console.log(studen1, student2, student3);

// let [first, second, third] = names1;

// console.log(first, second, third);

// let students = [
//   {
//     name: "mohd",
//   },
//   {
//     name: "rehan",
//   },
//   {
//     name: "aslam",
//   },
// ];

// let [firstprize, secondprize, thirdprize] = students;

// console.log(firstprize, secondprize, thirdprize);

// let name1 = student.name
// let age1 = student.age
// let course1 = student.course
// let city1 = student.city

const student = {
  name: "mohd",
  age: 25,
  course: "FSD",
  city: "hyd",
};

// let name = student.name;
// let age = student.age;
// let course = student.course;
// let city = student.city;

// let {name, age, course, city} = student

// console.log(name, age, course, city);
// console.log(student)


// let userName = student.name;


// let { name: userName = "xyz", country = "india" } = student


// console.log(userName, country);  
// console.log(studentName, studentAge, studentCourse, studentCity);



const student1 = {
  name: "mohd",
  age: 25,
  course: "FSD",
  city: "hyd",
};

let {name, age} = student1

console.log(name);
console.log(age);