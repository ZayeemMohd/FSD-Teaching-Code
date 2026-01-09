// Problem 1: print numbers
// {
//     for(let i=1; i<=10; i++){
//         console.log(i)
//     }
// }

// Problem 2: Print Even numbers
// {
//     for(let i = 2; i<=20; i+=2){
//         console.log(i)
//     }
// }

// Problem 3: Countdown from 10 to 1 and print "blast off!"
// {
//     for(let i=10; i>=1; i--){
//         console.log(i)       
//     }
//     console.log("Blast off!");
// }

// Problem 4: Multiplication Table of 7
// {
//     for(let i = 1; i<=10; i++){
//         console.log(`7 X ${i} = ${7*i}`);
//     }
// }

// Problem 5: Sum from 1 to 20
// {
//     let sum = 0;
//     for(let i=1; i<=20; i++){
//         sum = sum + i;
//     }
//     console.log(sum)
// }

// Problem 6: Number grid 4 X 4 
// {
//     for(let i =1 ; i<=4; i++){
//         let row = ""
//         for(let j=1; j<=4; j++){
//             row = row + j
//         }
//         console.log(row)
//     }
// }

// Problem 7: Right triangle using stars
// {
//     for(let i = 1; i<=5; i++){
//         let sum = "";
//         for(let j=1; j<=i; j++){
//             sum = sum + "*"
//         }
//         console.log(sum)
//     }
// }

// Problem 8: Print 1 to 5 using while
// {
//     let i = 1;
//     while(i<=5){
//         console.log(i);
//         i++
//     }
// }

// Problem 9: Sum until target is reached
// {
//     const target = 50;
//     let sum = 0;
//     let i = 1;
//     while(sum<target){
//         sum = sum + i
//         i++
//     }   
//     console.log("final sum: ", sum);
//     console.log("numbers added: ", i);
// }

// Problem 10: do...while loop menu, until user enters exit.
// {
//     let userInput;
//     do{
//          userInput = prompt("Menu: Type 'hello' or 'exit'");
//         if(userInput === "hello"){
//             console.log("Hello to you too!")
//         } else if(userInput === "exit"){
//             console.log("you chose exit, so bye!")
//         } else {
//             console.log("invalid menu option");
//         }

//     } while (userInput !== "exit")
// }

// Problem 11: Using break, for loop that searches for the first number divisible by both 3 and 5 between 1 and 100. use break to stop once found
// {
//     for(let i=1; i<=100; i++){
//         if(i % 3 == 0 && i % 5 == 0){
//             console.log("first number divisible by both 3 and 5: ", i);
//             break;
//         }
//     }
// }

// Problem 12: write a for loop that prints numbers from 1 to 10 but skips number 3, 6, 9. use continue
// {
//     for(let i = 1; i<=10; i++){
//         if(i == 3 || i == 6 || i == 9){
//             continue;
//         }
//         console.log(i)
//     }
// }

// Problem 13: Print array elements using for loop with its index
// {
//     const cities = ["mumbai", "delhi", "hyderabad", "pune", "bangalore"];
//     for(let i=0; i<cities.length; i++){
//         console.log(`${i}: ${cities[i]}`);
//     }
// }

// Problem 14: Sum of arrays
// {
//     const numbers = [10, 25, 30, 20];
//     let sum = 0;
//     for(let i=0; i<numbers.length; i++){
//         sum = sum + numbers[i];
//     }
//     console.log("sum of arrays is: ", sum);
// }

// Problem 15: Find maximum in array