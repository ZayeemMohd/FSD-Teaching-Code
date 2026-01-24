// The problem with promise chains
{
  // const url = 'https://jsonplaceholder.typicode.com/todos/1'
  // fetch(url)
  // .then((rawJson)=>{
  //     return rawJson.json();
  // })
  // .then((finalObj)=>{
  //     console.log(finalObj)
  // })
  // another example
  // fetchUserData()
  // .then((userData)=>{
  //     console.log("user", userData);
  //     return fetchUserPost(userData.id);
  // })
  // .then((userPost)=>{
  //     console.log("Posts: ", userPost);
  //     return fetchPostComments(userPost[0].id)
  // })
  // .then((userCmts)=>{
  //     console.log("comments", userCmts);
  // })
  // .catch((err)=>{
  //     console.log("Error:: ", err);
  // })
  // The solution with async await
  //   {
  //     async function getUserContent() {
  //       try {
  //         const userData = await fetchUserData();
  //         console.log("User:: ", user);
  //         const userPost = await fetchUserPost(userData);
  //         console.log("Posts:: ", userPost);
  //         const userCmts = await fetchPostComments(userPost[0].id);
  //         console.log("Comments:: ", userCmts);
  //       } catch (error) {
  //         console.log("Error:: ", error);
  //       }
  //     }
  //     getUserContent();
  //   }
}

// 2. The `async` keyword
// When you put async before a function, that function automatically returns a promise. Even if you return a regular value, JavaScript wraps it in a promise.
{
  // Example 1: Normal function vs Async function
  //   {
  //     // normal function
  //     function normalGreeting() {
  //       return "Hello, students";
  //     }
  //     console.log(normalGreeting());
  //     // Async function
  //     async function asyncGreet() {
  //       return "Hello, students";
  //     }
  //     console.log(asyncGreet());
  //     asyncGreet().then((msg) => {
  //       console.log(msg); // output: "Hello, student!"
  //     });
  //   }
  // Example 2: Async function returning different values
  //   {
  //     // Ordinary approach
  //     // {
  //     // function getCourseName(){
  //     //     return new Promise((resolve)=>{
  //     //         resolve("JavaScript Fundamentals");
  //     //     })
  //     // }
  //     // Returning a string
  //     async function getCourseName() {
  //       return "JavaScript fundamentals";
  //     }
  //     console.log(getCourseName());
  //     getCourseName().then((resolveMsg) => {
  //       console.log(resolveMsg);
  //     });
  //     // Returning a number
  //     async function getStudentCount(params) {
  //       return 50;
  //     }
  //     getStudentCount()
  //       .then((result) => {
  //         console.log(result);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //     // Returning an object
  //     async function getStudentInfo(params) {
  //       return {
  //         name: "Ali",
  //         rollNo: 101,
  //         course: "Web Development",
  //       };
  //     }
  //     getStudentInfo()
  //       .then((result) => {
  //         console.log(result);
  //       })
  //       .catch((error) => {
  //         console.log("Error:: ", error);
  //       });
  //   }
  // Example 3: Async funcgtions with Errors
  // {
  //   async function divideNumbers(a, b) {
  //       if(b == 0){
  //           throw("Cannor divide by zero");
  //       }
  //       return a/b;
  //   }
  //   // raw promise
  //   console.log(divideNumbers(2, 2))
  //   // Success case
  //   divideNumbers(1,2)
  //   .then((result) => {
  //       console.log(result)
  //   })
  //   .catch((error) => {
  //       console.log(error)
  //   })
  //   // Error case
  //   divideNumbers(2, 0)
  //   .then((result) => {
  //       console.log(result)
  //   })
  //   .catch((error) => {
  //       console.log(error)
  //   })
  // }

  // Note
  {
    // The important nuance ⚠️
    // An async function always returns a Promise, even if you don’t explicitly create one.
    // async function foo() {
    //   return 42;
    // }
    // is equivalent to:
    // function foo() {
    //   return Promise.resolve(42);
    // }
    // And:
    // async function bar() {
    //   throw new Error("oops");
    // }
    // is equivalent to:
    // function bar() {
    //   return Promise.reject(new Error("oops"));
    // }
    // So you’re not removing promises — you’re letting JavaScript create and manage them for you.
  }
}

// 3. The `await` keyword
{
  // Example 1: Basic await usage
  //   {
  //     // simulating an API call that takes 2 seconds
  //     function fetchStudentData() {
  //       return new Promise((resolve) => {
  //         setTimeout(() => {
  //           resolve({ name: "Ahmed", grade: "A" });
  //         }, 2000);
  //       });
  //     }
  //     async function displayStudent(params) {
  //         console.log("Fetching student data...");
  //         // Execution pasuses here for 2 seconds
  //         const student  = await fetchStudentData();
  //         // This line won't run until the promise resolves, and this is what we want
  //         console.log("Student Name: ", student.name);
  //         console.log("Student Grade: ", student.grade);
  //     }
  //     displayStudent()
  //   }
  // Example 2: Multiple await calls
  //   {
  //     function step1(){
  //         return new Promise((resolve) => {
  //             setTimeout(()=>{
  //                 console.log("Step 1: Gathering ingredients");
  //                 resolve();
  //             }, 1000)
  //         })
  //     }
  //     function step2(){
  //         return new Promise((resolve) => {
  //             setTimeout(() => {
  //                 console.log("Step 2: Mixing ingredients");
  //                 resolve();
  //             }, 2000);
  //         })
  //     }
  //     function step3(){
  //         return new Promise((resolve) => {
  //             setTimeout(() => {
  //                 console.log("Step 3: Baking in oven");
  //                 resolve();
  //             }, 1000);
  //         })
  //     }
  //     async function bakeCake(){
  //         console.log("starting to bake")
  //         await step1();
  //         await step2();
  //         await step3();
  //         console.log("cake is ready!")
  //     }
  //     bakeCake();
  //   }
  // Example 3: The difference between with and without await
//   {
//     function slowTask(){
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log("task completed!")
//                 resolve("I will not get this value, find why?")
//             }, 2000);
//         })
//     }

//     // without await
//      async function withoutAwait(){
//         console.log("start")
//         slowTask();
//         console.log("end")
//     }
//     withoutAwait()

//     // with await
//     // async function withAwait() {
//     //     console.log("start")
//     //     await slowTask()
//     //     console.log("end")
//     // }
//     // withAwait()
//   }
}

// 4. Sequential Execution: The power of await
{
    
}