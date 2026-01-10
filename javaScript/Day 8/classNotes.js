// basic function

// let add = function(a, b){
//     console.log(a + b)
// }

// let sub = function(a, b){
//     console.log(a - b)
// }

// // Higher order functions
// function printName(oppFunc, a, b) {
// // callback function

// //     let oppFunc = function(a, b){
// //     console.log(a + b)
// // }
//     oppFunc(a, b);

// }

// printName(sub, 4, 4)

// let student1 = {
//   studentName: "Arif",
//   age: 22,
//   eng: 95,
//   math: 93,
//   phy: 99,
//   getAvg() {
//     console.log(this);
//     let avg = (this.eng + this.math + this.phy) / 3;
//     console.log(avg);
//   },
// };

// let student2 = {
//   studentName: "Mohd",
//   age: 22,
//   eng: 99,
//   math: 22,
//   phy: 40,
//   getAvg() {
//     let avg = (this.eng + this.math + this.phy) / 3;
//     console.log(this.studentName, avg);
//   },
// };

// student1.getAvg();
// student2.getAvg();

// const account = {
//   holder: "Mohd",
//   balance: 2000,
//   deposite(amount) {
//     this.balance = this.balance + amount;
//     alert("balance updated");
//   },
//   checkBalace() {
//     console.log(this.balance);
//   },
//   withdraw(amount) {
//     this.balance = this.balance - amount;
//     alert("money deducted");
//   },
// };

// account.checkBalace();

// account.deposite(1000);

// account.checkBalace();

// account.withdraw(500);

// account.checkBalace();

// function greet() {
//     console.log(this)
// }
// greet();

// // alert("welcome")

// let username = "mohd"

// console.log("hello")
// console.log("hello")
// console.log("hello")

// try{
//     console.log(username); // error
// } catch(error) {
//     console.log(error);
// }

// // console.log(username);

// console.log("hello")
// console.log("hello")
// console.log("hello")

// const newFunc = function(a, b){
//     return a + b;
// }

// newFunc()

// // arrow functions
// const arrowFunction = (a , b) => (a + b)

// let result = arrowFunction(1, 3);
// console.log(result)

// const cube = n => n * n * n

// console.log(cube(2))

// setTimeout(() => {
//   console.log("hello");
// }, 3000);

// console.log("before interval")

// let id = setInterval(() => {
//   console.log("hello");
// }, 2000);

// console.log("after interval")

// setTimeout(() => {
//   clearInterval(id);

//   console.log("I stopped the setInterval");
// }, 5000);


// console.log("before timeout")


// setTimeout(() => {
//   console.log("I stopped the timeout");
// }, 5000);


// console.log("after timout")