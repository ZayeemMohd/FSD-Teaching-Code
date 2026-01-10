// Part 1: The 'this' keyword
{
  // Question 1: Create a car object
  // {
  //     const car = {
  //         brand: "toyota",
  //         model: 2019,
  //         price: 240000,
  //         displayInfo: function(){
  //             console.log(`Brand: ${this.brand}, Model: ${this.model}, Price: $${this.price}`)
  //         },
  //         applyDiscount: function(discPerc){
  //             this.price -= this.price * discPerc/100;
  //             console.log(`Discount of ${discPerc}% applied`)
  //         }
  //     };
  //     car.displayInfo();
  //     car.applyDiscount(50);
  //     car.displayInfo();
  // }
  // Question 2: Student Grade Calculator
  // {
  //     const student = {
  //       name: "Ali",
  //       subjects: [
  //         { name: "Math", marks: 85 },
  //         { name: "Physics", marks: 78 },
  //         { name: "Chemistry", marks: 80 },
  //       ],
  //       calculateAverage: function(){
  //         let totalMarks = 0;
  //         for(let obj of this.subjects){
  //             totalMarks += obj.marks;
  //         }
  //         return totalMarks / this.subjects.length
  //       },
  //       displayReport: function(){
  //         console.log(`${this.name}, average marks: ${this.calculateAverage()}`);
  //       }
  //     };
  //     student.displayReport();
  // }
}

// Part 2: Exception Handling(try-catch)
{
  // Question 1: Safe division function
  // {
  //     function saveDivision(a, b){
  //         try {
  //             if(b == 0){
  //                 throw "cannot divide by zero"
  //             }
  //             return a/b;
  //         } catch (error) {
  //             console.log(`Error: `, error);
  //             return null;
  //         }
  //     }
  //     console.log(saveDivision(1, 2));
  //     console.log(saveDivision(4, 0));
  // }
  // Question 2: Array access validator
  // {
  //     function getElement(arr, index){
  //         try {
  //             if(index < 0){
  //                 throw "Index cannot be negative"
  //             } else if(index > arr.length){
  //                 throw "Index out of bounds!"
  //             } else {
  //                 return arr[index];
  //             }
  //         } catch (error) {
  //             console.log("ERROR:: ", error);
  //             return null;
  //         }
  //     }
  //     let testArr = ["zayeem", "asif", "hamza"];
  //     console.log(getElement(testArr, 0));
  //     console.log(getElement(testArr, -1));
  //     console.log(getElement(testArr, 99));
  // }
}

// Part 3: Arrow Functions
{
  // Question 1: Temperature Converter
  // {
  //   const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
  //   const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
  //   const celsiusTemp = [0, 10, 20, 30, 40];
  //   const fahrenheitTemp = celsiusTemp.map((temp)=>celsiusToFahrenheit(temp));
  //   console.log(fahrenheitTemp);
  // }
  // Question 2: Array filter and transform
  // {
  //   const numbers = [12, 5, 8, 21, 16, 3, 18, 9];
  //   const lessThanTen = numbers.filter(elem => elem >= 10).map(elem => elem ** 2);
  //   console.log(lessThanTen);
  // }
}

// Part 4: Timing Events(setTimeout & setInterval)
{
  // Question 1: Countdown timer
  // {
  //   let count = 10;

  //   const id = setInterval(() => {
  //     console.log(count,  new Date().toLocaleTimeString());

  //     if (count === 0) {
  //       clearInterval(id);
  //     }

  //     count--;
  //   }, 1000);
  // }

  // Question 2: Text animation
  // {
    // const str = "hello";

    // for (let i=1; i<=str.length; i++) {
    //   setTimeout(() => {
    //     console.log(str.slice(0, i));
    //   }, i * 200);
    // }
  // }
}

// Part 5: "this" with Arrow function
{
  // Question 1: Timer with context
  // {
  //   const timer = {
  //     seconds: 0,
  //     intervalId: null,
  //     start() {
  //       this.intervalId = setInterval(()=>{
  //         this.seconds++
  //         console.log(this.seconds);
  //       }, 1000);
  //     },
  //     stop() {
  //       clearInterval(this.intervalId);
  //     },
  //     reset(){
  //       this.seconds = 0;
  //     }
  //   }

  //   console.log(timer.seconds);
  //   timer.start();
  //   setTimeout(() => {
  //     timer.stop();
  //     console.log("Timer stopped at: ", timer.seconds);
  //     timer.reset();
  //     console.log("Timer reset to: ", timer.seconds);
  //   }, 5500);
  // }

  // Question 2: Delayed greeting system
  // {
  //   const person = {
  //     firstName: "sohail",
  //     lastName: "quadri",
  //     greet(){
  //       setTimeout(()=>{
  //         console.log("Hello,", this.firstName, this.lastName);
  //       }, 2000)
  //     }
  //   }
  //   person.greet();
  // }
}
