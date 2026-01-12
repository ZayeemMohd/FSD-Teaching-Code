// Modern Array Methods
// iterating over arrays
// let numbers = [10, 20, 30, 40, 50];

// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }

// iterate over each element and add 5 to them

// {
//   let numbers = [10, 20, 30, 40, 50];

//   function updateElement(elem) {
//     return elem + 20;
//   }

//   for (let i = 0; i < numbers.length; i++) {
//     numbers[i] = updateElement(numbers[i]);
//   }

//   console.log(numbers);

// }

// let numbers = [10, 20, 30, 40, 50];

// Callback function
// function updateElement(elem){
//     console.log(elem)
// }

// // Higher order function/method
// numbers.forEach(updateElement)

// Higher order function/method
// numbers.forEach(function updateElement(elem){
//     console.log(elem)
// })

// let updateElement = (elem) => {
//   console.log(elem);
// };

// numbers.forEach(updateElement);

// let numbers = [10, 20, 30, 40, 50];

// numbers.forEach((elem, index) => {
//   console.log(index, elem + 5);
// });

// Summary: forEach executes a function once for each element in an array

// {
// let arr = [
//     {
//         name: "Asif",
//         marks: 95
//     },
//     {
//         name: "Ali",
//         marks: 100
//     },
//     {
//         name: "abdul",
//         marks: 23
//     }
// ]

// arr.forEach((elem)=>{
//     console.log(elem.marks)
// })
// }

// Create a  new array with double the arr1
// {
//   let arr1 = [1, 2, 3, 4];
//   // let arr2 = [2, 4, 6, 8]

//   // arr[0] = arr[0] * 2;

//   // [2, 4, 6, 8]
//   let arr2 = arr1.map((elem) => {
//     return elem * 2;
//   });

//   console.log(arr2);
// }

// take all the marks of student and create a new array called GPA
// {
//     let student = [{
//         name: "Asif",
//         marks: 95
//     },
//     {
//         name: "Ali",
//         marks: 100
//     },
//     {
//         name: "abdul",
//         marks: 23
//     },
//     {
//         name: "Khan",
//         marks: 88
//     }
// ]

//     // elem / 10
//     let GPA = student.map((elem)=>{
//                 return elem.marks / 10;
//             })

//     console.log(GPA)

// }

// Summary: map creates a new array by transforming each element.

// Filter method

// let arr = [10, 15, 20, 25, 30, 35, 40];

// create a new array with elements greater than 20

// using .map

// {let newArr = arr.map((elem)=>{
//     if(elem > 20){
//         return elem
//     } else {
//         return null
//     }
// })

// console.log(newArr)}

// .filter()

// let newArr = arr.filter((elem) => {
//   return elem < 20
// // return false
// });

// console.log(newArr);

// let newArr = arr.filter(elem => elem % 2 != 0 );

// console.log(newArr);

// Summary: filter creates a new array containing only those elements who pass the test

// let arrFruits = [
//   "apple",
//   "banana",
//   "mango",
//   "orango",
//   "apple",
//   "apple",
//   "mango",
// ];

// at least one is true

// let haiYaNai = arrFruits.some((fruit) => fruit == "cherry")
// console.log(haiYaNai)

// .every &&
// let ages = [20, 21, 22, 13, 19, 20];

// // Har Banda 18+ rehna
// let haiYaNai = ages.every((age) => age > 18);
// console.log(haiYaNai);

// // .every = All elements should pass then only true
// // .some = at least one should pass then true

// let name = "mohd";

// try {
//   console.log(name);
//   if ((name = "mohd")) {
//     throw "mohd is not allowed";
//   }
// } catch (err) {
//   console.log("kuch error check karlo", err);
// }

// console.log("after error");
// // console.log(college)
