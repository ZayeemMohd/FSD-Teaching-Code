// console.log("hello world")

// "this" keyword in javascript, it is a special keyword that refers to the object that is currenlty executing the code.

// When you use "this" inside an object's method, it refers to the object itself
{
  // Example 1: Student object
  // {
  //     const student = {
  //         name: "Aslam",
  //         eng: 88,
  //         math: 80,
  //         phy: 75,
  //         getAvg(){
  //           console.log("parent function's this value: ", this)
  //             let avg = (this.eng + this.math + this.phy) / 3;
  //             console.log(`${this.name} got average marks = ${avg}`);

  //             const checkThis = () => {
  //               console.log("this from inside an arrow function: ", this);
  //             }
  //             checkThis()
  //         }
  //     }
  //     student.getAvg(); // Output: Aslam got average marks = 81
  // }


  // Example 2: Bank Account
  // {
  //     const account = {
  //         holder: "Sohail",
  //         balance: 4000,
  //         deposite(amount) {
  //             this.balance += amount;
  //             console.log(`deposite successfull of amount: ${amount} to your account`);
  //             console.log(`The balance is: ${this.showBalance()}`)
  //         },
  //         withdraw(amount){
  //             this.balance -= amount;
  //             console.log(`withdraw successfull of amount: ${amount} from your account`);
  //             console.log(`The balance is: ${this.showBalance()}`)
  //         },
  //         showBalance(){
  //             return this.balance;
  //         }
  //     }
  //     console.log(account.showBalance()); // 4000
  //     account.deposite(1000); // deposite successfull of amount: 1000 to your account
  //                             // The balance is: 5000
  //     account.withdraw(500);  // withdraw successfull of amount: 500 from your account
  //                             // The balance is: 4500
  // }
  // Example 3: Shopping cart
  // {
  //     const cart = {
  //         items: ["apple", "banana"],
  //         total: 2,
  //         addItem(item){
  //             this.items.push(item)
  //             this.total = this.items.length;
  //             console.log(`Added ${item} to the cart. Total items: ${this.total}`);
  //         }
  //     };
  //     cart.addItem("orange"); // Added orange to the cart. Total items: 3
  // }
}

// Exeption Handling: "try" and "catch"
{
  // Example 1: Handling missing variables
  // {
  //     console.log("program starts");
  //     try {
  //         console.log(undefinedVariable); // this throws an error, cause it doesn't exist!
  //     } catch (error) {
  //         console.log("Caught an error: Vaiable not found::", error);
  //     }
  //     console.log("program continues"); // this runs even it has an error
  // }
  // Example 2: Division Error: explicitly causing an error using throw keyword
  // {
  //     function divide(a,b){
  //         try {
  //             if(b == 0){
  //                 throw "Cannot divide by zero";
  //             }
  //             return a/b;
  //         } catch (error) {
  //             console.log("ERROR:: ", error);
  //             return null;
  //         }
  //     }
  //     console.log(divide(10, 2)); // 5
  //     console.log(divide(10, 0)); // ERROR::  Cannot divide by zero
  // }
  // Example 3: User input validation
  // {
  //     function validateAge(age){
  //         try {
  //             if(age<0){
  //                 throw "age cannot be negative!";
  //             }
  //             if(age>150){
  //                 throw "age seems unrealistic";
  //             }
  //             console.log("valid age:", age);
  //         } catch (error) {
  //             console.log("Validation error::", error)
  //         }
  //     }
  //     validateAge(25); // valid age 25
  //     validateAge(-5); // Validation error:: age cannot be negative!
  //     validateAge(200); // Validation error:: age seems unrealistic
  // }
}

// Arrow functions
{
  // Example 1: Basic arrow function
  // {
  //     const greet = (name) => {
  //         return `Hello ${name}`
  //     }
  //     console.log(greet("adam")); // Hello adam
  // }
  // Example 2: Implicit return
  //   {
  //     const square = (num) => num * num;
  //     console.log(square(2)); // 4
  //     console.log(square(5)); // 25
  //   }
  // Example 3: Single parameter (no parentheses needed)
  //   {
  //     const double = n => n + n;
  //     console.log(double(3)); // 6
  //     console.log(double(4)); // 8
  //   }
  // Example 4: Multiple statement
  // {
  //     const calculateTotal = (price, tax) => {
  //         let total = price + (price * tax);
  //         return total;
  //     };
  //     console.log(calculateTotal(100, 0.30)); // 130
  // }
  // Example 5: Array methods with arrow functions
  // {
  //     let numbers = [1, 2, 3, 4, 5];
  //     let double = numbers.map(elem => elem * 2);
  //     console.log(double); // [2, 4, 6, 8, 10]
  //     let evens = numbers.filter(elem => elem % 2 == 0);
  //     console.log(evens); // [2, 4]
  // }
}

// Timing events: setTimeout & setInterval
{
  // Example 1: Simple delay
  // {
  //     console.log("Starting...");
  //     setTimeout(() => {
  //         console.log("This appears after 4 seconds");
  //     }, 4000);
  //     console.log("Continuing...")
  // }
  // Example 2: Delayed Greeting
  // {
  //     function greetUser(name){
  //         setTimeout(() => {
  //             console.log("Welcome back, ", name);
  //         }, 2000)
  //     }
  //     greetUser("Ahmed"); // appears after 2 seconds
  // }
  // Example 3: Repeating counter
  // {
  //     let count = 0;
  //     let id = setInterval(()=>{
  //         console.log(`Count: ${count}`);
  //         count++;
  //         if(count === 5){
  //             console.log("interval id is: ", id)
  //             clearInterval(id);
  //             console.log("Stopped successfully");
  //         }
  //     }, 1000)
  // }
  // Example 4: Clock display
  // {
  //     let seconds = 0;
  //     setInterval(()=>{
  //         console.log(`Elapsed time: ${seconds} seconds`);
  //         seconds++;
  //     }, 1000);
  // }
  // Example 5: Stopping an interval
  // {
  //     let intervalId = setInterval(()=>{
  //         console.log("repaeating message...");
  //     }, 2000);
  //     // stop it after 10 seconds
  //     setTimeout(()=>{
  //         clearInterval(intervalId);
  //         console.log(`Interval stopped`);
  //     }, 10000);
  // }
}

// "this" with arrow functions, arrow fuctions inherit 'this' from their parent scope. They don't have their own 'this'
{

  // Example 1: The problem with regular fucntions
  // {
//     const student = {
//       name: "Aslam",
//       marks: 95,

//       getName: function () {
//         return this.name; // Works! 'this' = student
//       },

//       getMarks: () => {
//         return this.marks; // Doesn't work! 'this' = global scope now
//       },
//     };

//     console.log(student.getName()); // "Aslam"
//     console.log(student.getMarks()); // undefined
  // }

  // {
  // const students = {
  // student: {
  //     name: "Aslam",
  //     marks: 95,

  //     getName: function () {
  //     return this.name; // Works! 'this' = student
  //     },

  //     getMarks: () => {
  //     return this.marks; // Doesn't work! 'this' = global scope now
  //     },
  // },
  // marks: 22
  // };
  // console.log(students.student.getName()); // "Aslam"
  // console.log(students.student.getMarks()); // undefined
  // }


  // Example 2: Fixing with arrow function
//   {
//     const student = {
//       name: "Aslam",
//       marks: 95,

//       getName: function () {
//         return this.name; // Works! 'this' = student
//       },

//       getMarks: function () {
//         const fetchMarks = () => {
//           return this.marks; // Works! 'this' = student
//         };
//         return fetchMarks();
//       },
//     };

//     console.log(student.getName()); // "Aslam"
//     console.log(student.getMarks()); // 95
//   }

  // Example 3: Arrow functions in callbacks
//   {
//     const timer = {
//         seconds: 0,
//         start: function(){
//             setInterval(function(){
//                 // this.seconds++; // 'this' does not refer to timer object here
//                 console.log(`Elapsed time: ${this.seconds} seconds`);
//             }, 1000);
//         }
//     }
//     timer.start();
//   }

  // Example 4: Solution with arrow functions
//   {
//     const timer = {
//       seconds: 0,
//       start: function () {
//         setInterval(() => {
//           this.seconds++; // 'this' refers to timer object
//           console.log(`Elapsed time: ${this.seconds} seconds`);
//         }, 1000);
//       },
//     };

//     // timer.start();
//   }

  // Example 5: Lexical "this" in nested objects
//   {
//     const outer = {
//       name: "Outer Object",
//       inner: {
//         name: "Inner Object",
//         getNames: function () {
//             console.log("this of the getNames function", this)
//           const arrowFunc = () => {
//             console.log("this of the arrow function inside the getNames function ", this)
//             return `${this.name}`; // 'this' refers to inner object
//           };
//           return arrowFunc();
//         },
//       },
//     };

//     console.log(outer.inner.getNames()); // "Inner Object"
//   }  

  // Example 6: Practical use case
//   {
//     const counter = {
//         count: 0,
//         start: function(){
//             // Arrow function maintains 'this' reference to counter

//             setInterval(()=>{
//                 this.count++;
//                 console.log(this.count);
//             }, 1000);
//         }
//     };
//     counter.start()
//   }

  // Example 7: When not to use arrow functions
// {
//     const calculator = {
//         value: 0,
//         // Don't use arrow function for object methods
//         add: (num) => {
//             console.log("this using the arrow function: ", this)
//             this.value += num; // won't work!
//         },
//         // Do use regular function for object methods
//         subtract: function(num){
//             console.log("this using the regular function: ", this)
//             this.value -= num;
//         }
//     };
//     calculator.add(4);
//     calculator.subtract(1);
//     console.log(calculator);
// }

}

// console.log(this)