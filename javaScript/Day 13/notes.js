// Synchronous Execution (The default behavior)
// {
// console.log("Step 1: Starting the program")
// console.log("Step 2: Doing some work")
// console.log("Step 3: Finishing up")

// // Output (always in this exact order)
// // Step 1: Starting the program
// // Step 2: Doing some work
// // Step 3: Finishing up
// }

// The blocking problem
// {
//     console.log("Before the long calculation");

//     // Imagine this loop takes 5 seconds
//     for(let i = 0 ; i<5000000000; i++){
//         // Heavy calculation
//     }

//     console.log("After the long calculation");

//     // During those 5 seconds, your entire webpage freezes!
//     // Users can't click buttons, scroll, or do anything
// }

// 2. Synchronous vs Asynchronous Operations
{
  // Synchronous code
  //   {
  //     // All of these are synchronous(instant)
  //     const x = 10;
  //     const y = 20;
  //     const sum = x + y;
  //     console.log(sum); // 30
  //     const name = "Mohd";
  //     const greeting = "Hello, " + name;
  //     console.log(greeting);
  //   }
  // Asynchronous Code
  //   {
  //     console.log("Starting");
  //     // This is Asynchronous - it doen't block
  //     setTimeout(() => {
  //       console.log("This appears after 4 seconds");
  //     }, 4000);
  //     console.log("Ending");
  //     // Output:
  //     // Starting
  //     // Ending
  //     // (4 seconds pass...)
  //     // This appears after 2 seconds
  //   }
}

// 3. I/O bound vs CPU bound Tasks
{
  // CPU bound tasks
  // {
  //   // CPU bound - The processor is working hard
  //   function fibonacci(n) {
  //     if (n <= 1) return n;
  //     return fibonacci(n - 1) + fibonacci(n - 2);
  //   }
  //   console.log("Calculating...");
  //   const result = fibonacci(40); // This will take several seconds
  //   console.log("Result", result);
  //   console.log("Done!");
  //   // During the calculation, javascript is blocked
  //   // Your webpage will freeze
  // }
  // I/O bound tasks with callbacks
  //   {
  //     // Fetch using callbacks (callback-based approach)
  //     fetch("https://jsonplaceholder.typicode.com/todos/1")
  //       .then((response) => response.json())
  //       .then((data) => console.log(data));
  //     console.log("Sending request...");
  //   }
}

// 4. setTimeout: Your first Async function
{
  // Single Timer
  // {
  //     console.log("1. Program stars")
  //     setTimeout(()=>{
  //         console.log(("2. This runs after 2 seconds"))
  //     }, 2000)
  //     console.log("3. Program continues immediately")
  //     // Output:
  //     // 1. Program starts
  //     // 3. Program continues immediately
  //     // (2 seconds later...)
  //     // 2. This runs after 2 seconds
  // }
  // Multiple Timers
  //   {
  //     console.log("Open CGC portal");
  //     setTimeout(() => {
  //       console.log("Header loaded");
  //     }, 1000);
  //     setTimeout(() => {
  //       console.log("Student data loaded");
  //     }, 2000);
  //     setTimeout(() => {
  //       console.log("Footer loaded");
  //     }, 500);
  //     console.log("Portal structure ready");
  //     // Output:
  //     // Open CGC portal
  //     // Portal structure ready
  //     // Footer loaded (after 0.5s)
  //     // Header loaded (after 1s)
  //     // Student data loaded (after 2s)
  //   }
  // Real Example: Form submission simulation
  // {
  //     function submitForm(){
  //         console.log("Submitting form...")
  //         setTimeout(() => {
  //             console.log("Form submitted successfully!")
  //             console.log("Redirecting to dashboard...")
  //         }, 1500);
  //         console.log("Please wait")
  //     }
  //     submitForm();
  //     // Output:
  //     // Submitting form...
  //     // Please wait...
  //     // (1.5 seconds later...)
  //     // Form submitted successfully!
  //     // Redirecting to dashboard...
  // }
}

// 5. Callback Functions
{
  // Simple callback example
  // {
  //     function greet(name, callback){
  //         console.log("Hello", name);
  //         callback(); // Execute the callback
  //     }
  //     function sayGoodbye(){
  //         console.log("Goodbye!");
  //     }
  //     greet("Mohd", sayGoodbye)
  // }
  // Callbacks with Asynchronous operations
  //   {
  //     function fetchStudentData(studentId, callback) {
  //       console.log("Fetching data for student ID: ", studentId);
  //       // simulate database delay
  //       setTimeout(() => {
  //         const studentData = {
  //           id: studentId,
  //           name: "Mohd Sohail",
  //           course: "Computer Science",
  //         };
  //         console.log("Data Fetched Successfully");
  //         displayStudent(studentData);
  //       }, 2000);
  //     }
  //     function displayStudent(data) {
  //       console.log("Displaying student: ");
  //       console.log("Name: ", data.name);
  //       console.log("Course: ", data.course);
  //     }
  //     fetchStudentData(101, displayStudent);
  //   }
  // Car service
  //   {
  //     function serviceVehicle(carModel, phoneNumber){
  //         console.log("Received", carModel, "for service");
  //         console.log("Customer can leave now");
  //         setTimeout(()=>{
  //             console.log("Service complete");
  //             phoneNumber(); // Call the customer back
  //         }, 3000)
  //     }
  //     function customerCallback(){
  //         console.log("Ring Ring! Your car is ready!");
  //         console.log("Customer returns to pick up car");
  //     }
  //     serviceVehicle("Honda city", customerCallback);
  //   }
}

// 6. Problem: Callback Hell(The pyramid of doom)
{
  // Traffic Signal beginner approach
  //   {
  //     const signalBox = document.querySelector("#signalBox");
  //     const h4 = document.querySelector("h4");
  //     function changeSignal(color, innerHTML, delay, callback) {
  //       setTimeout(() => {
  //         signalBox.style.backgroundColor = color;
  //         h4.innerHTML = innerHTML;
  //         if (callback) {
  //           callback();
  //         }
  //       }, delay);
  //     }
  //     changeSignal("yellow", "READY", 1000, greenColor);
  //     function greenColor() {
  //       changeSignal("green", "GO", 1000, redColor);
  //     }
  //     function redColor() {
  //       changeSignal("red", "STOP", 1000, yelloColor);
  //     }
  //     function yelloColor() {
  //       changeSignal("yellow", "READY", 1000);
  //     }
  //     // setTimeout(() => {
  //     //   signalBox.style.backgroundColor = "yellow";
  //     //   h4.innerHTML = "READY";
  //     // }, 2000);
  //     // setTimeout(() => {
  //     //   signalBox.style.backgroundColor = "green";
  //     //   h4.innerHTML = "GO";
  //     // }, 4000);
  //     // setTimeout(() => {
  //     //   signalBox.style.backgroundColor = "red";
  //     //   h4.innerHTML = "STOP";
  //     // }, 6000);
  //   }
  // Traffic signal with 2 second delay and message
  //   {
  //     const signalBox = document.querySelector("#signalBox");
  //     const h4 = document.querySelector("h4");
  //     // Async function
  //     function signalChange(color, delay, message, callback) {
  //       setTimeout(() => {
  //         signalBox.style.backgroundColor = color;
  //         h4.innerHTML = message;
  //         if (callback) {
  //           callback();
  //         }
  //       }, delay);
  //     }
  //     // Start the sequence
  //     signalChange("red", 2000, "Stop", () => {
  //       signalChange("yellow", 2000, "Get Ready", () => {
  //         signalChange("green", 2000, "Go", () => {
  //           console.log("Signal cycle complete");
  //         });
  //       });
  //     });
  //   }
  // User registration flow
  // Imagine: Register -> Send Email -> Update Database -> Send Welcome SMS
  //   {
  //     function registerUser(callback) {
  //       setTimeout(() => {
  //         console.log("User Registered 👍");
  //         callback();
  //       }, 1000);
  //     }
  //     function sendEmail(callback) {
  //       setTimeout(() => {
  //         console.log("Email Send 👍");
  //         callback();
  //       }, 1000);
  //     }
  //     function UpdateDB(callback) {
  //       setTimeout(() => {
  //         console.log("DB upadated 👍");
  //         callback();
  //       }, 1000);
  //     }
  //     function sendWelcomeSMS(callback) {
  //       setTimeout(() => {
  //         console.log("Welcome SMS Send 👍");
  //         callback();
  //       }, 1000);
  //     }
  //     // function sendWelcomWrap() {
  //     //   sendWelcomeSMS();
  //     // }
  //     registerUser(() => {
  //       sendEmail(() => {
  //         UpdateDB(() => {
  //           sendWelcomeSMS(() => {
  //             console.log("registration complete 👍");
  //           });
  //         });
  //       });
  //     });
  //   }
  // Error handling in callback hell is terrible
  //   {
  //     getData((err, data)=>{
  //         if(err){
  //             console.log("Error in getData")
  //         } else{
  //             processData(data, (err, result)=>{
  //                 if(err){
  //                     console.log("error in process data");
  //                 } else {
  //                     saveData(result, (err, saved)=>{
  //                         if(err){
  //                             console.log("Error in saveData");
  //                         } else {
  //                             console.log("Data saved successfully");
  //                         }
  //                     })
  //                 }
  //             })
  //         }
  //     })
  //   }
}

// 6.1  Problem: Save data only if success else not, callback hell
// {
//   function saveData(data, success, failure) {
//     // let isSave = Math.floor(Math.random() * 2)
//     let isSave = Math.random() < 0.45 ? 0 : 1;

//     if (isSave) {
//       success();
//     } else {
//       failure();
//     }
//   }

//   // function success(){
//   //     console.log("Data saved successfully")
//   // }

//   // function failure(){
//   //     console.log("data didn't saved")
//   // }

//   saveData(
//     "MERN",
//     () => {
//       console.log("Success1: data1 saved");
//       saveData(
//         "DATA Analysis",
//         () => {
//           console.log("Success2: data2 saved");
//           saveData(
//             "AI",
//             () => {
//               console.log("Success3: data3 saved");
//             },
//             () => {
//               console.log("Failure3: data3 didn't saved");
//             },
//           );
//         },
//         () => {
//           console.log("Failure2: data2 didn't saved");
//         },
//       );
//     },
//     () => {
//       console.log("Failure1: data1 didn't saved");
//     },
//   );
// }

// 7. Promises: The solution
{
  // Creating a promise
  // {
  //     const myPromise = new Promise((resolve, reject)=>{
  //         // Asynchronous operation here
  //         let success = true;
  //         if(success){
  //             resolve("Operation successful"); // fulfill the promise
  //         } else {
  //             reject("Operation failed"); // Reject the promise
  //         }
  //     });
  // }
  // Basic promise example
  //   {
  //     let internetSpeed = 1;
  //     const downloadFile = new Promise((resolve, reject) => {
  //       console.log("Download Started...");
  //       setTimeout(() => {
  //         if (internetSpeed) {
  //           resolve("File downloaded successfully!");
  //         } else {
  //           reject("Download failed, no internet");
  //         }
  //       }, 2000);
  //     });
  //     console.log("Download initiated");
  //     console.log(downloadFile);
  //   }
  // Real Example: Database operation
  //   {
  //     function saveToDatabase(data){
  //         return new Promise((resolve, reject)=>{
  //             console.log("Saving to database")
  //             setTimeout(() => {
  //                 let dbAvailabel = 1
  //                 if(dbAvailabel){
  //                     resolve({
  //                         message: "data saved successfully",
  //                         id: 123,
  //                         timestamp: new Date()
  //                     });
  //                 } else {
  //                     reject("Database connection failed")
  //                 }
  //             }, 1500);
  //         })
  //     }
  //     let savePromise = saveToDatabase({name: "John", age: 25});
  //     console.log(savePromise)
  //   }
}

// 8. Consuming promises: .then() and .catch
{
  // The .then() Method
  //   {
  //     const promise = new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         resolve("success! Data is here");
  //       }, 2000);
  //     });
  //     promise.then((message) => {
  //       console.log("promise resolved", message);
  //     });
  //   }
  // The .catch() Method
  //   {
  //     const promise = new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         reject("Error! Something went wrong");
  //       }, 1000);
  //     });
  //     promise.catch((message) => {
  //       console.log(message);
  //     });
  //   }
  // Using both together
  //   {
  //     let loginStatus = 1;
  //     let loginPromise = new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         if (loginStatus) {
  //           resolve("Login successful! Welcome back");
  //         } else {
  //           reject("Login failed! invalid credentails");
  //         }
  //       }, 1500);
  //     });
  //     loginPromise
  //       .then((msg) => {
  //         console.log(msg);
  //       })
  //       .catch((msg) => {
  //         console.log(msg);
  //       });
  //   }
  // Real API example
  // {
  //   function fetchUserProfile(userId) {
  //     return new Promise((resolve, reject) => {
  //       console.log("fetching user profile");
  //       setTimeout(() => {
  //         if (userId > 0) {
  //           resolve({
  //             id: userId,
  //             name: "priya sharma",
  //             email: "priya@example.com",
  //             role: "student",
  //           });
  //         } else {
  //           reject("invalid user ID");
  //         }
  //       }, 2000);
  //     });
  //   }
  //   // Success case
  //   // fetchUserProfile(101)
  //   //   .then((user) => {
  //   //     console.log("User found!");
  //   //     console.log("Name: ", user.name);
  //   //     console.log("Email: ", user.email);
  //   //   })
  //   //   .catch((msg) => {
  //   //     console.log(msg);
  //   //   });
  //   // Failure case
  //   fetchUserProfile()
  //     .then((user) => {
  //       console.log("user found", user);
  //     })
  //     .catch((msg) => {
  //       console.log(msg);
  //     });
  // }
  // Finally method (bonus)
  //   {
  //     let loadingSpinner = true;
  //     function fetchData(data) {
  //       return new Promise((resolve, reject) => {
  //         if (data) {
  //           resolve("data found");
  //         } else {
  //           reject("no data");
  //         }
  //       });
  //     }
  //     fetchData(101)
  //       .then((data) => {
  //         console.log("data", data);
  //       })
  //       .catch((error) => {
  //         console.log("error", error);
  //       })
  //       .finally(() => {
  //         loadingSpinner = false;
  //         console.log("Loading complete - hide spinner");
  //       });
  //   }
}

// 9. Promise chaining: Escaping callback hell
// {
//   {
//     function step1() {
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           console.log("Step 1 complete");
//           resolve("data from step 1");
//         }, 1000);
//       });
//     }

//     function step2(previousData) {
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           console.log("Step 2 complete");
//           console.log("Recieved", previousData);
//           resolve("Data from step 2");
//         }, 1000);
//       });
//     }

//     function step3(previousData) {
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           console.log("step 2 complete");
//           console.log("recieved ", previousData);
//           resolve("final result");
//         }, 1000);
//       });
//     }

//     // clean promise chain
//     step1()
//     .then((result1) => {
//       return step2(result1);
//     })
//     .then((result2) => {
//         return step3(result2);
//     })
//     .then((finalResult)=>{
//         console.log("all done", finalResult);
//     })
//     .catch((err)=>{
//         console.log("Error at some step: ", err)
//     })
//   }
// }

// 10. Refactoring teh color change example
// {
//     function changeColorPromise(color, delay){
//         return new Promise((resolve)=>{
//             setTimeout(() => {
//                 document.body.style.backgroundColor = color;
//                 console.log("changed to ", color);
//                 resolve();
//             }, delay);
//         })
//     }

//     // clean, flat, readable!
//     changeColorPromise("red", 1000)
//     .then(()=>{
//         return changeColorPromise("orange", 1000);
//     })
//     .then(()=>{
//         return changeColorPromise("blue", 1000)
//     })
//     .then(()=>{
//         changeColorPromise("black", 1000)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
// }
