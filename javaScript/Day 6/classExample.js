// // console.log("first");

// // let arr = ["zayeem", "asif", "abdul rahman"];

// // console.log(arr[1]);
// // console.log(arr.push("new student"));

// // Object literals

// // let obj = {
// //     key: value , key: value , key: value
// // }

// let student1 = {
//   name: "zayeem",
//   isPresent: true,
//   rollno: 1603,
//   subjects: ["maths", "physics", "chemistry"],
// };

// let student2 = {
//   name: "Asif",
//   isPresent: false,
//   rollno: 1601,
//   subjects: ["Biology", "Physcis", "Chemistry"],
// };

// let student3 = {
//   name: "Khurram",
//   isPresent: false,
//   rollno: 1601,
//   subjects: ["Biology", "Physcis", "Chemistry"],
// };

// let post = {
//   userName: "coder_dev",
//   profilePicture: "www.cloud.com/image1",
//   description: "This post is about coding",
//   like: 0,
//   reposts: 23,
//   comments: ["nice", "great", "wow"],
//   tags: ["#coding", "#programming"],
//   123: "one two three",
// };

// // console.log(post)
// // console.log(post.userName); // dot notion

// // console.log(post["userName"]); // square brakets notion

// // let userInput = prompt("enter the key you want");

// // console.log(post[123])

// // Create Objects
// const tweet = {
//   // Key: Value
//   userName: "abcd123",
//   followers: 400,
//   following: 200,
//   message: "Hi, this tweet is about coding",
// };

// // Accessing the value
// {
//   // Method 1: Dot notation
//   tweet.userName; // "abcd123"

//   // Method 2: Square bracket notion
//   tweet["userName"]; // "abcd123"
// }

// // Update
// {
//   tweet.userName = "xyz123";
//   tweet["userName"] = "abcd123";
// }

// // add
// {
//   // tweet.likes = 1000
//   tweet["likes"] = 800;
// }

// // delete
// {
//   delete tweet.likes;
//   delete tweet["likes"];
// }

// //  CRUD: Create, Read, Update, Delete

// let students = {
//   student1: {
//     name: "abc",
//     rollno: 123,
//     marks: {
//       hindi: 33,
//       telugu: 77,
//       english: 44,
//     },
//   },
//   student2: {
//     name: "efg",
//     rollno: 456,
//     marks: {
//       hindi: 33,
//       telugu: 77,
//       english: 44,
//     },
//   },
//   student3: {
//     name: "hij",
//     rollno: 789,
//     marks: {
//       hindi: 33,
//       telugu: 77,
//       english: 44,
//     },
//   },
// };

// students.student1.name, // abc
//   students.student1.rollno; // 123

// students.student2.name; // efg
// students.student2.rollno; // 456

// students.student3.marks.hindi; // 33
// students.student3.marks.telugu; // 33
// students.student3.marks.hindi; // 33

// let arr = [
//   ["zayeem", "asif"],
//   ["arif", "sohail"],
//   ["nayeem", "rafat"],
// ];

// let arr1 = [
//   {
//     userName: "coder_dev",
//     profilePicture: "www.cloud.com/image1",
//     description: "This post is about coding",
//     like: 0,
//     reposts: 23,
//     comments: ["nice", "great", "wow"],
//     tags: ["#coding", "#programming"],
//     123: "one two three",
//   },
//   {
//     userName: "coder_dev",
//     profilePicture: "www.cloud.com/image1",
//     description: "This post is about coding",
//     like: 0,
//     reposts: 23,
//     comments: ["nice", "great", "wow"],
//     tags: ["#coding", "#programming"],
//     123: "one two three",
//   },
//   {
//     userName: "coder_dev",
//     profilePicture: "www.cloud.com/image1",
//     description: "This post is about coding",
//     like: 0,
//     reposts: 23,
//     comments: ["nice", "great", "wow"],
//     tags: ["#coding", "#programming"],
//     123: "one two three",
//   },
// ];

// arr1[0].userName; // "coder_dev"

// [{}, {}, {}]

// let rawRandow = Math.random();
// console.log(rawRandow);

// let multiply = rawRandow * 10;
// console.log(multiply);

// let goodValue = Math.ceil(multiply);
// console.log(goodValue)

// let randomNumber = Math.ceil(Math.random() * 5) + 50
// console.log(randomNumber)

let x = 9;

function outerFunction(){
    console.log("x is: ", x)
    function innerFunction(){
        console.log("x is: ", x+1)
        
    }
    innerFunction()
}

outerFunction()
