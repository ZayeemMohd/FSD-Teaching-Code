// let a = 10;

// {
//   a = 20;
//   console.log(a);
// }

// {
//   console.log(a);
// }


let data = {
    data1: {
        name: "John",
        age: 30
    },
    data2: {
        name: "Doe",
        age: 25
    }   
}


// console.log("hello world")

// Function defination
// Fucntion initia
// function helloWorld() {
//    for(let i = 0; i<5; i++){
//     console.log("Hello world")
//    }
// }

// // Function calling
// helloWorld();

// function isAdult(){
//     let age = ;
//     if(age < 18){
//         console.log("Not Adult")
//     } else {
//         console.log("Adult")
//     }
// }

// isAdult();

// function dice(){
//     let random = Math.ceil(Math.random() * 6);
// //     console.log(random)
// // }

// // dice();
// // dice();
// // dice();
// // dice();
// // dice();

// // Function to add two numbers

// // function AddTwoNumbers(){
// //     console.log(a + b)
// // }

// // function Greet(num1, num2) {
// //   console.log("Sum is ", num1 + num2);
// // }

// // // Argument

// // Greet("2", 4);

// // // find the average of three numbers
// // function average(a, b, c) {
// //     let average = (a + b + c) / 3;
// //     //
// //     //
// //     //
// //     //
// //     return average;
// // }

// // let result = average(2, 4, 6);

// // console.log(student1)

// // write a function to print numbers form 1 to n

// // function printNums(num){
// //     for(let i=1; i<=num; i++){
// //         console.log(i);
// //     }
// // }

// // printNums();

// // write a function to find isAdult or not

// // function isAdult(age){
// //     if(age>=18){
// //         return "He/she is an adult"
// //     } else {
// //         // return "He/she is not an adult"
// //     }
// // }

// // let result = isAdult(10);

// // console.log(result)

// let age = 22;

// console.log(age);
// age++;

// function sum(a, b) {
//   // a = 1;
//   // b = 3
//   console.log(a + b);
// }

// sum(1, 3);

// console.log(age);

// {
//   let insideNum = 3.14;
//   console.log("insideNum value", insideNum);
// }

// {
//   let insideNum = 9.8;
//   console.log("insideNum value", insideNum);
// }

// console.log(insideNum);

// for(let i = 0; i<=10; i++){
//     console.log(i)
// }

// console.log(i)

// function sum(a, b) {
//   // a = 1;
//   // b = 3
//   console.log(a + b);
// //   console.log(c)
// }

// function sub(c, d){
//     console.log(c - d)
//     console.log(a)
// }

// sum(1, 3);

// console.log(a, b);

// {
//   var secretNumber = 12345;

//   console.log("inside form block, secret is: ", secretNumber);
// }

// ++secretNumber

// console.log(secretNumber)

// let a = 22;
// {
//     let a = 34;
//     a++
// }
// console.log(a);

// function Outer(){

//     let secret = "abcde"

//     function Inner(){
//         let childElement = "choclate"
//         console.log(secret);
//     }

//     console.log(childElement)

//     Inner();

// }

// Outer();

// let greet = "hi";  // global scope

// function changeGreet() {
//     let greet = "hello"; // function scope
//     console.log(greet);

//     function innerGreet(){
//         console.log(greet); // lexical scope
//     }

//     innerGreet();
// }

// console.log(greet);

// changeGreet();

// function hello(){
//     console.log("Hello world")
// }

// hello();

// var answer = 2;

// function printanswer() {
//   var newAnswer = 32;
//   console.log(answer);
// }

// printanswer();

// {
//   console.log(newAnswer);
// }

// function sum(a, b){
//     return a + b;
// }

// let result = sum(1,3)
// console.log(result)

// Function expression

// let sub = function (a, b) {
//   return a - b;
// };

// // sub = function(a, b){
// //     return a * b
// // }

// sub(a, b); // number, string, function

// I am this function which takes 2 values, first should a function and second should a variable
// callback
// function repeatAlerts(func, n) {

//     return func;
// }

// function alertUser() {
//   alert("you are using higher order functions");
// }

// function printName() {
//   console.log("Your name is John Doe");
// }

// // I am this function which takes 2 values, first should a function and second should a number of time you want to run the function
// let result = repeatAlerts(printName);
// console.log(result)
// // slice(); // staring index, ending index
// // splice(); // staring index, number of items to delete

// function add(x, y){
//     return x + y;
// }

// function sub(x, y){
//     return x - y
// }

// // first parameter is a: number, b: number, operation: callback function
// function calculate(a, b, operation, operation2){
//     let operationResult = operation(a, b)
//     let operationResult2 = operation2(a, b)
//     return {operationResult, operationResult2};
// }

// let result = calculate(4, 4, add, sub);
// console.log(result)

// the function which stores inside an object is called METHOD
// Math Object

// const math = {
//     PI: 3.14,
//     add: function(a, b){
//         return a + b
//     }
// }

// const math = {
//     PI: 3.14,

//     add(a, b){
//         return a + b
//     },
//     sub(a, b){
//         return a - b
//     }
// }
