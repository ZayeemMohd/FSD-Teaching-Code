// Funciton definition and calling
{
  // Example 1: Simple greeting function
  // {
  //     function greet(){
  //         console.log("Welcome to JavaScript!");
  //     }
  //     greet();
  //     greet();
  // }
  // Example 2: Display a message
  // {
  //     function showMessage(){
  //         console.log("Learning function is fun!");
  //     }
  //     showMessage();
  // }
  // Example 3: Multiple actions in one function
  // {
  //     function introduction(){
  //         console.log("My name is JavaScript");
  //         console.log("I was created in 1995");
  //         console.log("I run in browsers");
  //     }
  //     introduction();
  // }
}

// Funcitons with Arguments
{
  // Example 1: Personalized greeting
  // {
  //     function greetUser(name){
  //         console.log("Hello, ", name, "!");
  //     }
  //     greetUser("zayeem");
  //     greetUser("Arif");
  //     greetUser("Abdul Jabbar")
  // }
  // Example 2: Calculate sum of two numbers
  // {
  //     function addNumbers(a, b){
  //         let sum = a + b;
  //         console.log("sum is: ", sum);
  //     }
  //     addNumbers(1,2); // 3
  //     addNumbers(4, 66); // 70
  // }
  // Example 3: Calculate average of three numbers
  // {
  //     function calcAverage(a, b, c){
  //         let average = (a + b + c) / 3;
  //         console.log("Average is: ", average);
  //     }
  //     calcAverage(1,2,3); //2
  //     calcAverage(10, 20, 30); // 20
  // }
  // Example 4: Create personalized message
  // {
  //     function createMessage(name, age){
  //         console.log("The name is: ", name, " and age is: ", age);
  //     }
  //     createMessage("zayeem", 21);
  //     createMessage("arif", 25)
  // }
  // Example 5: Calculate rectangle area
  // {
  //     function calculateArea(lenght, width){
  //         let area = lenght * width;
  //         console.log("area of rectangel is: ", area);
  //     }
  //     calculateArea(22, 3);
  //     calculateArea(23, 5);
  // }
}

// The return keyword
{
  // Example 1: Return sum of two numbers
  // {
  //     function sum(a, b){
  //         let sum = a + b;
  //         return sum;
  //     }
  //     let result = sum(2, 4);
  //     console.log(`sum is ${result}`);
  //     let total = sum(2, 5);
  //     console.log(`total is ${total}`);
  // }
  // Example 2: Return product of two numbers
  // {
  //     function multiply(a, b){
  //         let product = a * b;
  //         return product;
  //     }
  //     let result = multiply(3,4);
  //     console.log(`Product of two numbers is ${result}`)
  //     console.log(`Product of another two numbers is: ${multiply(33, 5)}`)
  // }
  // Example 3: Code after return never runs
  // {
  //     function test(){
  //         return 10;
  //         console.log("This will never print"); // this will ignored
  //         return 20; // this will ignored
  //     }
  //     console.log(test());
  // }
  // Example 4: Using return value in calculations
  // {
  //     function getPrice(){
  //         return 50;
  //     }
  //     let price = getPrice();
  //     let tax = price * 0.1;
  //     let total = price + tax;
  //     console.log(total);
  // }
  // Example 5: Return a string
  // {
  //     function getGreeting(name){
  //         return `Hello ${name}`;
  //     }
  //     let message = getGreeting("zayeem");
  //     console.log(message);
  //     console.log(getGreeting("bob"))
  // }
}

// Understanding Scope
{
  // Function Scope
  {
    // Example 1: Basic function scope
    // {
    //     function showScore(){
    //         let score = 100; // the scope of this variable is: Function Scope
    //         console.log(score);
    //     }
    //     showScore();
    //     console.log(score); // Error: score is not defined
    // }
    // Example 2: Each function has its own scope
    // {
    //     function func1(){
    //         let x = 10;
    //         console.log(x); // 10
    //     }
    //     function func2(){
    //         let x = 20;
    //         console.log(x); // 20
    //     }
    //     func1();
    //     func2();
    //     console.log(x); // error: varible x is not defined
    // }
  }

  // Block Scope
  {
    // Example 3: Block scope with if statement
    // {
    //     if(true){
    //         let temp = 42;
    //         console.log(temp);
    //     }

    //     console.log(temp); // Error: temp is not defined
    // }

    // Example 4: Block scope with loops
    // {
    //     for(let i=0; i<3; i++){
    //         console.log(i); // 0,1,2
    //     }

    //     console.log(i); // Error: i is not defined
    // }

    // Example 5: Block scope with curly braces
    // {
    //     {
    //         let secret = "hidden"
    //         console.log(secret);
    //     }
    //     console.log(secret); // error secret is not defined
    // }
  }

  // Lexical Scope
  {
    // Example 1: Inner function accessing outer variable
    // {
    //     function outer(){
    //         let x = 5;

    //         function inner(){
    //             console.log(x); // Inner can see "x"
    //         }

    //         inner();
    //     }

    //     outer(); // 5
    // }

    // Example 2: Multiple levels of nesting
    // {
    //     function level1(){
    //         let x = 40;

    //         function level2(){
    //             let y = 50;
                
    //             function level3(){
    //                 let z = 60;
    //                 console.log(x, y, z); // 40, 50, 60
    //             }

    //             level3();
    //         }

    //         level2();
    //     }

    //     level1();
    // }

    // Example 3: Outer cannot access inner variables
    // {
    //     function outer(){
    //         function inner(){
    //             let x = 10;
    //         }
    //         inner();
    //         console.log(x); // x is not defined
    //     }

    //     outer();
    // }

    // Example 4: Using outer parameters in inner function
    // {
    //     function greet(name){
    //         function createMessage(){
    //             console.log("Hello, ", name); // it is okay
    //         }
    //         createMessage();
    //     }

    //     greet("zayeem"); // Hello zayeem
    // }
  }
}

// Function Expressions
{
    // Example 1: Basic function expression
    // {
    //     const multiply = function(a, b){
    //         return a * b;
    //     }

    //     console.log(multiply(2, 4)); // 8
    //     console.log(multiply(3, 4)); // 12
    // }

    // Example 2: Function expression with greeting
    // {
    //     const sayHi = function(name){
    //         console.log(`Hi ${name}!`);
    //     }
    //     sayHi("zayeem");
    //     sayHi("Abdul Rahman");
    // }

    // Example 3: Arrow function (modern syntax)
    // {
    //     const square = (num) => {
    //         return num ** 2;
    //     }

    //     console.log(square(2));
    //     console.log(square(5));
    // }

    // Example 4: Storing different functions
    // {
    //     const add = function(a,b){
    //         return a + b;
    //     }

    //     const sub = function(a, b){
    //         return a - b;
    //     }
    //     console.log(add(10, 5)); // 15
    //     console.log(sub(10, 5)); // 5
    // }
}

// Higher-Order functions
{
    
}