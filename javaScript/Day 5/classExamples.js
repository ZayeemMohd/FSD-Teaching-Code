// for (let i = 0; i <= 5; i++) {

//     console.log("Hello")
// }

// i, j, k

// print numbers 1 to 10
// for (let i = 1; i <= 10; i = i + 1 ) {
//     console.log(i)
// }

// Print Odd Numbers form  1 to 15
// 1, 3, 5, 7, 9 , 11 , 13, 15

// for (let i = 1; i <= 15; i += 2) {
//     console.log(i)
// }

// Print even numbers form 10 to 20

// for (let i = 10; i >= 0; i = i + 2){
//     console.log(i)
// }

// print prime numbers from 1 to 10
//  2, 3, 5, 7,

//  outer loop
// for (let i = 1; i <= 3; i++){

//     console.log("Outer: ", i)

//     for (let j=1; j<=3; j++){
//         console.log("Inner: ", j);
//     }

// }

// let i = 1;
// while(i<=10) {
//     console.log(i);
//     i++;
//     // console.log(i)
// }

// for(let k = 1; k <= 7; k++){
//     for(let i = 1; i<=3; i++){
//         console.log("Eat food");
//     }
// }

// Multiplication table
// 1 2 3 4 5       first * 1    1
// 2 4 6 8 10       first * 2   2
// 3 6 9 12 15      first * 3   3
// 4 8 12 16 20     first * 4  4

// for(let i = 1; i<=4; i++){
// let row = "";

// for(let j = 1; j<=5; j++){
//     row = row + (j*i) + " "
// }

// console.log(str)
// }

// for (let i = 1; i <= 4; i++) {

//     let row = "";

//     for (let j = 1; j <= 4; j++) {
//         row = row + `(${i},${j})`;
//     }

//     console.log(row)
// }

// find the sum from 1 to 10
// 1+2+3+4...10

// {
//   let sum = 0; // sum = 55
//   sum = sum + 1;
//   sum = sum + 2;
//   sum = sum + 3;
//   sum = sum + 4;
//   sum = sum + 5;
//   sum = sum + 6;
//   sum = sum + 7;
//   sum = sum + 8;
//   sum = sum + 9;
//   sum = sum + 10;
//   console.log(sum);
// }

// {
//     let sum = 0;

//     for(let i=2; i<=10; i = i+2){
//         sum = sum + i;

// //   sum = sum + 2;

// //   sum = sum + 4;

// //   sum = sum + 6;

// //   sum = sum + 8;

// //   sum = sum + 10;
//     }

//     console.log(sum)
// }

// arrays print

// {
//   const cities = ["mumbai", "hyderabad", "dehi", "chennai", "pune"];

//   for (let index = 0; index < cities.length; index++) {
//     console.log(index, cities[index]);
//   }
// }

// {

//     const cities = ["mumbai", "hyderabad", "dehi", "chennai", "pune"];

//     for(let city of cities){
//         console.log(city)
//     }

// }

// {
//     let studentName = "faizan";
//     for(let i = 0; i<studentName.length; i++){
//         console.log(studentName[i]);
//     }
// }

// {
//     let studenName = "faizan";
//     for(let letter of studenName){
//         console.log("now letter is: ", letter)
//     }
// }

// {
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       console.log(i, j); // 3 + 3 + 3 = 9 time
//     }
//   }
// }

// const college = [
//   ["zayeem", "asif", "farhan"],
//   ["junaid", "zubair", "wajid"],
//   ["farooq", "adnan", "hannan"],
//   ["khurram", "salman", "sajid"],
// ];

// for (let i = 0; i < college.length; i++) {

//   for (let j = 0; j < college[i].length; j++) {
//     console.log(i,j, college[i][j]);
//   }
// }
//  i  j
// console.log(college[0][0]); // "zayeem "
// console.log(college[0][1]); // "asif"
// console.log(college[0][2]); // "farhan"

// console.log(college[1][0]); // "junaid"
// console.log(college[1][1]); // "zubair"
// console.log(college[1][2]); // "wajid"

// console.log(college[2][0]); // "farooq"
// console.log(college[2][1]); // "adnan"
// console.log(college[2][2]); // "hannan"

{
//   const college = [
//     ["zayeem", "asif", "farhan"],
//     ["junaid", "zubair", "wajid"],
//     ["farooq", "adnan", "hannan"],
//     ["khurram", "salman", "sajid"],
//   ];

//   for (let department of college) {
//     for (let student of department) {
//       console.log(student);
//     }
//   }
}

// [
//     [[], [], [], []]
//     [[], [], []]
//     [[], [], [], []]
// ]

// for( of ){
//     for( of ){
//         for( of ){

//         }
//     }
// }
