// Nested for loops
{
    // Example 1: Basic Pattern
    // {
    //     for(let i = 1; i<=3; i++){
    //         for(let j = 1; j<=3; j++){
    //             console.log(i, j)
    //         }
    //     }
    // }

    // Example 2: Multiplication Table
    // {
    //     for(let i=1; i<=5; i++){
    //         for(let j=1; j<=10; j++){
    //             console.log(`${i} X ${j} = ${i*j}`);
    //         }
    //     }
    // }

    // Example 3: Star Pattern - Right Triangle
    // {
    //     for(let i = 1; i<=5; i++){
    //         let row = "";
    //         for(j=1; j<=i; j++){
    //             row = row + " * "
    //         }
    //         console.log(row)
    //     }
    // }

    // Example 4: Number Grid
    // {
    //     for(let i=1; i<=4; i++){
    //         let row = "";
    //         for(let j=1; j<=4; j++){
    //             row = row + j;
    //         }
    //         console.log(row)
    //     }
    // }

    // Example 5: Square Pattern
    // {
    //     for(let i=1; i<=5; i++){
    //         let row = "";
    //         for(let j=1; j<=5; j++){
    //             row += " # ";
    //         }
    //         console.log(row)
    //     }
    // }
}

// for loops with nested arrays
{
    // Example 1: Simple 2D array
    // {
    //     let matrix = [
    //         [1, 2, 3],
    //         [4, 5, 6],
    //         [7, 8, 9]
    //     ]

    //     for(let i=0; i<matrix.length; i++){
    //         for(let j=0; j<matrix[i].length; j++){
    //             console.log(matrix[i][j]);
    //         }
    //     }
    // }

    // Example 2: Teams and players
    // {
    //     let teams = [
    //         ["Alice", "Bob"],
    //         ["Charlie", "David"],
    //         ["Eve", "Frank"]
    //     ];

    //     for(let i=0; i<teams.length; i++){
    //         for(let j=0; j<teams[i].length; j++){
    //             console.log(teams[i][j]);
    //         }
    //     }
    // }

    // Example 3: Student Grades
    // {
    //     let grades = [
    //         [34, 25, 54],
    //         [34, 54, 56],
    //         [32, 65, 23]
    //     ];

    //     for(let i=0; i<grades.length; i++){
    //         let sum = 0;
    //         for(let j=0; j<grades[i].length; j++){
    //             sum += grades[i][j]
    //         }
    //         let average = sum / grades[i].length
    //         console.log(`Student ${i} avarage: ${average.toFixed(2)}`);
    //     }
    // }

    // Example 4: Sum all elements in 2D array
    // {
    //     let numbers = [
    //         [1, 2, 3],
    //         [4, 5, 6],
    //         [7, 8, 9]
    //     ];

    //     let sum = 0;
    //     for(let i=0; i<numbers.length; i++){
    //         for(let j=0; j<numbers[i].length; j++){
    //             sum += numbers[i][j]
    //         }
    //     }
    //     console.log(sum)
    // }

    // Example 5: Find element in 2D array
    // {
    //     let data = [
    //         [10, 20, 30], 
    //         [40, 50, 60],
    //         [70, 80, 90]
    //     ];

    //     let searchFor = 50;
    //     let found = false;

    //     for(let i=0; i<data.length; i++){
    //         for(let j=0; j<data[i].length; j++){
    //             if(data[i][j] === searchFor){
    //                 found = true
    //                 console.log("found value at: ", i,j);
    //                 break;
    //             }
    //         }
    //         if(found){
    //             break;
    //         }
    //     }
    // }
}

// Nested for...of loops
{
    // Example 1: Basic nested for...of
    // {
    //     let groups = [
    //         ["A", "B", "C"],
    //         ["D", "E"],
    //         ["F", "G", "H", "I"]
    //     ];

    //     for(let group of groups){
    //         for(let item of group){
    //             console.log(item)
    //         }
    //     }
    // }

    // Example 2: Department and Employees
    // {
    //     let company = [
    //         ["Alice", "Bob", "Charlie"],
    //         ["David", "Eve"],
    //         ["Frank", "Grace"]
    //     ];

    //     for(let department of company){
    //         for(let employee of department){
    //             console.log(employee);
    //         }
    //     }
    // }

    // Example 3: Count Total items
    // {
    //     let inventory = [
    //         [10, 20, 15],
    //         [5, 8],
    //         [30, 12, 25, 18]
    //     ];

    //     let count = 0
    //     for(let group of inventory){
    //         for(let item of group){
    //             count += item
    //         }
    //     }
    //     console.log(count)
    // }

    // Example 4: Flatten Nested Array
    // {
    //     let nested = [
    //         [1, 2, 3],
    //         [4, 5],
    //         [6, 7, 8, 9]
    //     ];

    //     let flatten = [];
    //     for(let arr of nested){
    //         for(let elem of arr){
    //             flatten.push(elem)
    //         }
    //     }
    //     console.log(flatten);
    // }

    // Example 5: Words in sentences
    // {
    //     let paragraphs = [
    //         ["Hello", "world"],
    //         ["JavaScript", "is", "awesome"],
    //         ["Loops", "are", "powerful"]
    //     ];

    //     // let wordsCount = 0;
    //     // for(let wordsArr of paragraphs){
    //     //     wordsCount += wordsArr.length
    //     // }
    //     // console.log(wordsCount)

    //     for(let wordsList of paragraphs){
    //         let sentence = "";
    //         for(let word of wordsList){
    //             sentence += word + " "
    //         }
    //         console.log(sentence)
    //     }
    // }
}

// for...of loops with nested arrays
{
    // Example 1: Print all values
    // {
    //     let matrix = [
    //         [1, 2, 3],
    //         [4, 5, 6],
    //         [7, 8, 9]
    //     ];

    //     for(let row of matrix){
    //         for(let item of row){
    //             console.log(item)
    //         }
    //     }
    // }

    // Example 2: Shopping list
    // {
    //     const shoppingList = [
    //         ["milk", "bread", "eggs"],
    //         ["apple", "banana"],
    //         ["chicken", "rice", "beans", "salad"]
    //     ]

    //     let listNumber = 0;
    //     for(const list of shoppingList){
    //         listNumber++
    //         console.log("List Number: ", listNumber);
    //         for(const item of list){
    //             console.log(item)
    //         }
    //     }
    // }

    // Example 3: Tempearture Data
    // {
    //     let weeklyTemps = [
    //         [72, 75, 78],
    //         [68, 70, 73, 76],
    //         [80, 82]
    //     ]

    //     let weekCounter = 0;
    //     for(const week of weeklyTemps){
    //         weekCounter++
    //         let sumTemp = 0;
    //         for(const temp of week){
    //             sumTemp += temp
    //         }
    //         let average = sumTemp / week.length;
    //         console.log(`Week ${weekCounter} average: ${average}°F `)
    //     }
    // }

    // Example 4: Find maximum in 2D array
    // {
    //     const scores = [
    //         [78, 92, 85],
    //         [88, 95, 79],
    //         [90, 87, 93]
    //     ];

    //     let maxScore = 0;
    //     for(const list of scores){
    //         for(const score of list){
    //             if(maxScore < score){
    //                 maxScore = score;
    //             }
    //         }
    //     }
    //     console.log("max score is: ", maxScore);
    // }

    // Example 5: Courses and Topics
    // {
    //     const courses = [
    //         ["HTML", "CSS", "JavaScript"],
    //         ["Python", "Django"],
    //         ["React", "Node.js", "MongoDB", "Express"]
    //     ];

    //     console.log("Available courses: ")
    //     for(const courseList of courses){
    //         let sentence = "";
    //         for(const course of courseList){
    //             sentence += course + ', ';
    //         }
    //         console.log(sentence.slice(0,-2));
    //     }
    // }
}

// Comparison: for vs for...of with nested arrays
{
    // Using for loop (with indices)
    // {
    //     const data = [
    //         [10, 20],
    //         [30, 40, 50]
    //     ];

    //     for(let i=0; i<data.length; i++){
    //         for(let j=0; j<data[i].length; j++){
    //             console.log(`data[${i}][${j}] = ${data[i][j]}`);
    //         }
    //     }
    // }

    // Using for...of loop (without indices)
    // {
    //     const data = [
    //         [10, 20],
    //         [30, 40, 50]
    //     ];

    //     for(const row of data){
    //         for(const elem of row){
    //             console.log(elem);
    //         }
    //     }
    // }
}

// Practical Examples
{
    // Example 1: Tic-Tac-Toe Board
    {
        
    }
}