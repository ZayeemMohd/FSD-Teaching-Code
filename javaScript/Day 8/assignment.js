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
// {
//     // Question 1: Safe division function
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

//     // Question 2: Array access validator
//     // {
//     //     function getElement(arr, index){
//     //         try {
//     //             if(index < 0){
//     //                 throw "Index cannot be negative"
//     //             } else if(index > arr.length){
//     //                 throw "Index out of bounds!"
//     //             } else {
//     //                 return arr[index];
//     //             }
//     //         } catch (error) {
//     //             console.log("ERROR:: ", error);
//     //             return null;
//     //         }
//     //     }

//     //     let testArr = ["zayeem", "asif", "hamza"];
//     //     console.log(getElement(testArr, 0));
//     //     console.log(getElement(testArr, -1));
//     //     console.log(getElement(testArr, 99));
//     // }
// }

// Part 3: Arrow Functions
{
    
}

// let userName = "mohd"
// try {
//   console.log(userName);
// } catch (error) {
//   console.log('ERROR:: ', error)
// }

// console.log("remaining code")