// The for loop
// {
//     // Example 1: Print numbers 1 to 5
//     for (let i = 1; i<=5; i++) {
//         console.log(i)
//     }

//     // Example 2: Print odd numbers form 1 to 15
//     for (let i = 1; i <= 15; i += 2) {
//         console.log(i)
//     }

//     // Example 3: Print even numbers form 2 to 10
//     for (let i = 2; i <= 10; i += 2) {
//         console.log(i);
//     }

//     // Example 4: Multiplication table of 5
//     for(let i = 1; i <= 10 ; i++){
//         console.log("5 X ", i , " = ", 5*i);
//     }

//     // Example 5: Countdown form 10 to 1
//     for (let i = 10; i >=0 ; i--){
//         console.log(i)
//     }
// }

// Infinite Loops
// {
//     // // Cause 1: Missing updation
//     // for (let i = 1; i<=5; ){
//     //     console.log(i)
//     // }

//     // // Cause 2: Wrong updation direction
//     // for (let i = 10; i>=0; i++ ){
//     //     console.log(i)
//     // }

//     // // Cause 3: Omitting the condition
//     // for (let i=1; ;i++){
//     //     console.log(i)
//     // }

//     // Example 1: Fixed version - proper updation
//     for (let i=1; i<=5; i++){
//         console.log("-->", i);
//     }

//     // Example 2: Fixed version - correct direction
//     for (let i=10; i>=1; i--){
//         console.log(i);
//     }

//     // Exmaple 3: How to detect infinite loops
//     // browser freezes, check: counter variable, condition, updation moving towards stopping or not

//     // // Example 4: Infinite loop while while
//     // let count = 0;
//     // while (count < 5){
//     //     console.log(count);
//     //     // fotgot to increment count!
//     // }

//     // Example 5: Fixed while loop
//     let count = 0;
//     while (count < 5){
//         console.log(count);
//         count++;
//     }

// }

// Nested for loops
// {
//     // Example 1: Basic Nested Loop
//     for (let i =1 ; i<=3; i++){
//         console.log(`Outer loop: ${i}`);

//         for(let j = 1; j<=3; j++){
//             console.log(`Inner loop: ${j}`);
//         }
//     }

//     // Example 2: Multiplication table (1 to 5)
//     for(let i = 1; i<=10; i++){
//         let row = "";
//         for(let j = 1; j<=10; j++){
//             row = row + (i * j) + "\t"
//         }
//         console.log(row)
//     }

//     // Example 3: Pattern printing - right triangle
//     for(let i = 1; i<=5; i++){
//         let pattern = ""
//         for(let j=1; j<=i; j++){
//             pattern = pattern + "*"
//         }
//         console.log(pattern)
//     }

//     // Example 4: Number grid
//     for(let i = 1; i<=4; i++){
//         let row = "";
//         for (let j = 1; j<=4; j++){
//             row = row + `(${i},${j})`
//         }
//         console.log(row)
//     }

//     // Example 5: Inverted triangle pattern
//     for(let i = 1; i<=5; i++ ){
//         let row = "";

//         for(let j = 5; j>=i; j--){
//             row = row + "*"
//         }

//         console.log(row)
//     }
// }

// The while loop
// {
//     // Example 1: count from 1 to 5
//     let count = 1;
//     while(count <= 5){
//         console.log(count);
//         count++;
//     }

//     // Example 2: Sum numbers until target reached
//     let sum = 0;
//     let num = 1;

//     while(sum < 50){
//         sum = sum + num;
//         console.log(`Added ${num}, sum is now ${sum}`)
//         num++;
//     }
//     console.log(`Final sum is: ${sum}`)

//     // Example 3: Password validation (simplified)
//     let password = "";
//     let attempts = 0;

//     while(password !== "secret123" && attempts < 3){
//         password = prompt("Enter Password");
//         attempts++;

//         if(password === "secret123"){
//             console.log("access granted");
//         } else if (attempts < 3) {
//             console.log("wrong password, only ", 3-attempts , " attempts left");
//         } else {
//             console.log("access denied, too many attemps");
//         }
//     }

//     // Example 4: Having until below threshold
//     let number = 1000;
//     while(number > 1){
//         console.log(number);
//         number = number / 2;
//     }

//     // Example 5: Finding first power of 2 greater than value
//     let value = 1000;
//     let powerOfTwo = 0;
//     let power = 0;
//     while (value > powerOfTwo){
//         power++
//         powerOfTwo = 2 ** power
//     }
//     console.log(`2 power ${power} is ${powerOfTwo} which is greater than 300`);
// }

// The do...while loop
// {
//   // Example 1: Menu system
//   //   {
//   //     let choice = "";
//   //     do {
//   //       console.log("--- Menu ---");
//   //       console.log("1. Play");
//   //       console.log("2. Settings");
//   //       console.log("3. Exit");

//   //       choice = prompt("Enter your choice: ");

//   //       switch (choice) {
//   //         case "1":
//   //           console.log("You choose to play, starting the game");
//   //           break;
//   //         case "2":
//   //           console.log("You choolse settings, Openning settings");
//   //           break;
//   //       }
//   //     } while (choice !== "3");

//   //     console.log("good bye");
//   //   }

//   // Example 2: Dice roll until six
//   // {
//   //      let roll;
//   //   let attemps = 0;

//   //   do {
//   //     roll = Math.floor(Math.random()*6) + 1; // Random 1-6
//   //     attemps++;
//   //     console.log(`Roll ${attemps}: ${roll}`)
//   //   } while (roll !== 6);
//   //   console.log(`Got a 6 after ${attemps} attempts`);
//   // }

//   // Example 3: Input validation - must be positive
//   // {
//   //     let number;

//   //     do {
//   //     number = Number(prompt("enter a positive number: "));
//   //     if(number <= 0 || isNaN(number)){
//   //     console.log("Invaid input. Please enter a positive number")
//   //     }

//   //     } while (number <= 0 || isNaN(number));
//   // }

//   // Example 4: Countdown with at least one execution
//   //   {
//   //     let count = 0;

//   //     do {
//   //       console.log(`Count: ${count}`);
//   //       count++;
//   //     } while (count < 0); // condition is false from the start
//   //   }

//   // Example 5: ATM withdrawl
// //   {
// //     let balance = 1000;
// //     let continueTransanction;

// //     do {
// //       let amount = Number(
// //         prompt(`Your balance is: ${balance}, Enter the amount to withdrawal: `)
// //       );
// //       if (amount > 0 && amount <= balance && !isNaN(amount)) {
// //         balance = balance - amount;
// //         console.log(amount, "withdrawal done ", " new balance is: ", balance);
// //       } else {
// //         console.log("Invalid Transaction/amount");
// //       }

// //       continueTransanction = prompt(
// //         "Do you want to continue transaction: ('yes'/'no')"
// //       );
// //     } while (balance > 0 && continueTransanction === "yes");
// //     console.log("final balance is: ", balance);
// //   }
// }

// Loop control: break and continue
// {
//   // Example 1: Find the first number divisible by 7
//   // {
//   //     for(let i = 1; i <= 100; i++){
//   //         if(i%7==0){
//   //             console.log("First number divisible by 7 is: ", i);
//   //             break;
//   //         }
//   //     }
//   // }

//   // Example 2: Search in array
//   // {
//   //     const fruits = ["apple", "banana", "cherry", "orange", "grapes"];
//   //     const searchFor = "apple";
//   //     let found = false;

//   //     for(let i=0; i<fruits.length; i++){
//   //         if(fruits[i] === searchFor){
//   //             console.log(`found the ${searchFor} at index ${i}`)
//   //             found = true;
//   //             break;
//   //         }
//   //     }
//   //     if(!found){
//   //         console.log("didn't found the ", searchFor);
//   //     }
//   // }

//   // Example 3: Password attempts limit
//   // {
//   //     const correctPassword = "secret123";
//   //     const maxAttempts = 3;

//   //     for(let attemps = 0; attemps < maxAttempts; attemps++){
//   //         const password = prompt(`enter the password, attempts remaining: ${maxAttempts - attemps}`);
//   //         if(password === correctPassword){
//   //             console.log("access granted");
//   //             break;
//   //         } else if (attemps === maxAttempts){
//   //             console.log("Access denied. No more attempts");
//   //         } else {
//   //             console.log("Wrong password. Try again");
//   //         }
//   //     }
//   // }

//   //Example 4: Print numbers, Skip 3
// //   {
// //     for (let i = 1; i <= 10; i++) {
// //       if (i === 3) {
// //         continue;
// //       }
// //       console.log(i);
// //     }
// //   }

//   // Example 5: Print even numbers using continue
// //   {
// //     for(let i = 1; i<=20; i++){
// //         if(i%2 !== 0){
// //             continue;
// //         }
// //         console.log(i)
// //     }
// //   }
// }

// Iterating over arrays
// {
//   // Example 1: Print all array elements
//   // {
//   //     const cities = ["London", "Paris", "Tokyo", "New York", "Sydney"];

//   //     for(let i=0; i<cities.length; i++){
//   //         console.log(`${i}: ${cities[i]}`);
//   //     }
//   // }

//   // Example 2: Calculate sum of numbers
//   //   {
//   //     const numbers = [85, 92, 78, 97, 100];
//   //     let sum = 0;
//   //     for (let i = 0; i < numbers.length; i++) {
//   //       sum += numbers[i];
//   //     }
//   //     console.log("sum is: ", sum, "average: ", sum / numbers.length);
//   //   }

//   // Example 3: Find the maximum value
//   //   {
//   //     const numbers = [23, 45, 66, 63, 11, 23];
//   //     let maxValue = 0;
//   //     for (let i = 0; i < numbers.length; i++) {
//   //       if (numbers[i] > maxValue) {
//   //         maxValue = numbers[i];
//   //       }
//   //     }
//   //     console.log(maxValue);
//   //   }

//   // Example 4: Reverse print an array
//   //   {
//   //     const colors = ["red", "green", "blue", "yello"];
//   //     for (let i = colors.length - 1; i >= 0; i--) {
//   //       console.log(`${i}: ${colors[i]}`);
//   //     }
//   //   }

//   // Example 5: Filter array (create new array with conditions)
// //   {
// //     const ages = [12, 34, 55, 1, 45, 2, 5];
// //     const adults = [];
// //     for (let i = 0; i < ages.length; i++) {
// //       if (ages[i] >= 18) {
// //         adults.push(ages[i]);
// //       }
// //     }
// //     console.log(adults);
// //   }
// }

// Nested arrays (2D arrays)
// {
//   // Example 1: Iterate throught 2D array
//   // {
//   //     const items = [
//   //         ["Alice", "Bob"],
//   //         ["Chintu", "Bablu"],
//   //         ["Motu", "Patlu"]
//   //     ];

//   //     for(let i=0; i<items.length; i++){
//   //         console.log("Team ", i);
//   //         for(let j=0; j<items[i].length; j++){
//   //             console.log(items[i][j]);
//   //         }
//   //     }
//   // }

//   // Example 2: 2D array - students grades. Calculate each student's average across all tests
//   // {
//   //     const grades = [
//   //         [22, 45, 66],
//   //         [34, 66, 77],
//   //         [22, 56, 78]
//   //     ]

//   //     for(let i=0; i<grades.length; i++){
//   //         let sum = 0;
//   //         for(let j=0; j<grades[i].length; j++){
//   //             sum = sum + grades[i][j];
//   //         }
//   //         console.log(`student ${i+1}'s avarage: ${sum/grades[i].length}`);
//   //     }
//   // }

//   // Example 3: Matrix Addition - Add corresponding elements from two matrices.
// //   {
// //     const matrix1 = [
// //       [1, 2],
// //       [3, 4],
// //     ];
// //     const matrix2 = [
// //       [23, 5],
// //       [33, 5],
// //     ];
// //     const result = [[], []];
// //     for (let i = 0; i < matrix1.length; i++) {
// //       for (let j = 0; j < matrix1[i].length; j++) {
// //         result[i][j] = matrix1[i][j] + matrix2[i][j];
// //       }
// //     }
// //     console.log(result);
// //   }

// }

// The for...of loop
// {
//   // Example 1: Iterate through array
// //   {
// //     const colors = ["red", "blue", "green", "yellow"];
// //     for (let color of colors) {
// //       console.log(color);
// //     }
// //   }

//   // Example 2: Sum array elements
// //   {
// //     const prices = [19.99, 34.66, 34.78];
// //     let sum = 0;
// //     for(let price of prices){
// //         sum += price;
// //     }
// //     console.log(sum)
// //   }

//   // Example 3: Iterate through string
// //   {
// //     let word = 'JavaScript';
// //     for(let char of word){
// //         console.log(char)
// //     }
// //   }

//   // Example 4: Count Vowels in string
// //   {
// //     const sentence = "Hello world";
// //     const volwels = "aeiouAEIOU"
// //     let volwelCount = 0;
// //     for(let char of sentence){
// //         if(volwels.includes(char)){
// //             volwelCount++
// //         }
// //     }
// //     console.log(volwelCount);
// //   }

//   // Example 5: Nested for...of with 2D array
// //   {
// //     const departments = [
// //         ["ramu", "shiva", "pankaj"],
// //         ["sohail", "siraj", "farhan"],
// //         ["ateeq", "saleem", "faizan"]
// //     ];

// //     for(let department of departments){
// //         for(let elem of department){
// //             console.log(elem)
// //         }
// //     }
// //   }

// }

// Practical Application: Guessing Game
// {
//     // Example 1: Favorite movie guessing game
//     // {
//     //     let favoriteMovie = "bahubali";
//     //     let guess = "";

//     //     while(guess !== favoriteMovie && guess !== "quit"){
//     //         guess = prompt("enter the movie name (type quit to exit): ");

//     //         if(guess === favoriteMovie){
//     //             console.log("congrats you win the game");
//     //         } else if (guess==="quit"){
//     //             console.log("you gave up. It was ", favoriteMovie);
//     //         } else {
//     //             console.log("wrong answer, try again");
//     //         }
//     //     }
//     // }

//     // Example 2: Number guessing game with hints
//     // {
//     //     const randomNumber = Math.floor(Math.random()*100)+1;
//     //     let guess = 0;
//     //     let attemps = 0;

//     //     while(guess !== randomNumber){
//     //         guess = Number(prompt("Guess a number between 1 and 100: "));
//     //         attemps++

//     //         if(guess === randomNumber){
//     //             console.log("congrats, you got the number in ", attemps, " attemps");
//     //         } else if(guess>randomNumber){
//     //             console.log("too high, guess a smaller number than this");
//     //         } else {
//     //             console.log("too low, guess a larger number than this")
//     //         }
//     //     }
//     // }

//     // Example 3: Word scramble game
//     // {
//     //     const words = ["javascript", "pyton", "java", "rust"];
//     //     const word = words[Math.floor(Math.random() * words.length)];
//     //     const scrambled = word.split('').sort(()=>Math.random()-0.5).join('');
//     //     let guess = '';

//     //     while(guess !== word){
//     //         guess = prompt(`Unscramble this word ${scrambled} with your guess:`)
//     //         if(guess == word){
//     //             console.log("congrats you found the word");
//     //         } else {
//     //             console.log("wrong guess, try again")
//     //         }
//     //     }
//     // }

//     // Example 4: Rock Paper Scissors
//     // {
//     //     let playerWins = 0;
//     //     let computerWins = 0;
//     //     const choices = ["rock", "paper", "scissors"];

//     //     while(playerWins < 2 && computerWins < 2){
//     //         const playerChoice = prompt("Choose: rock, paper or scissors").toLowerCase();
//     //         const computerChoice = choices[Math.floor(Math.random()*3)]; // 0to 2

//     //         console.log(`You chose: ${playerChoice} and Computer chose: ${computerChoice}`);

//     //         if(playerChoice === computerChoice){
//     //             console.log("It's a tie");
//     //         } else if (
//     //             playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper"
//     //         ) {
//     //             playerWins++;
//     //             console.log("you win this round; your score is: ", playerWins)
//     //         } else {
//     //             computerWins++;
//     //             console.log("computer win this round; his score is: ", computerWins);
//     //         }
            
//     //     }

//     //     if(playerWins > computerWins){
//     //         console.log("congrats you won the series")
//     //     } else {
//     //         console.log("sorry but computer won the series")
//     //     }
//     // }

//     // Example 5: Simple quiz game
//     // {
//     //     const questions = [
//     //         {q: "What is capital city of India?", a: "delhi"},
//     //         {q: "What is 99 + 9?", a: "108"},
//     //         {q: "How many days in a week?", a: "7"}
//     //     ]

//     //     let score = 0;
//     //     for(let question of questions){
//     //         const answer = prompt(`${question.q}`).toLowerCase();
//     //         if(answer === question.a){
//     //             console.log("your answer is correct");
//     //             score++;
//     //         } else {
//     //             console.log("your answer is wrong. correct answer is: ", question.a);
//     //         }
//     //     }
//     //     console.log("final score is: ", score, " out of ", questions.length);
//     // }
// }