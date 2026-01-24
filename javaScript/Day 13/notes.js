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

// 10. Refactoring the color change example
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

// Real world Example: User registration (Refactored)
// {
//   function registerUser(username) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("User registered", username);
//         resolve();
//       }, 1000);
//     });
//   }

//   function sendVerificationEmail(username) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("Verification email sent to: ", username);
//         resolve();
//       }, 4000);
//     });
//   }

//   function updateDatabase(username) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("Database updatated for: ", username);
//         resolve();
//       }, 1000);
//     });
//   }

//   function welcomeSms(username) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("Welcome message for: ", username);
//         resolve();
//       }, 1000);
//     });
//   }

//   registerUser("Mohd")
//     .then(() => sendVerificationEmail("Mohd"))
//     .then(() => updateDatabase("Mohd"))
//     .then(() => welcomeSms("Mohd"))
//     .catch(() => {
//       console.log("something went wrong!");
//     });
// }

// Passing data through the chain
// {
//     function getUser(userId){
//         return new Promise((resolve, reject)=>{
//             setTimeout(() => {
//                 resolve({id: userId, name: "Alice"});
//             }, 1000);
//         })
//     }

//     function getUserOrders(user){
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log("getting user orders...")
//                 resolve({
//                     user: user,
//                     orders: ["Order1", "Order2", "Order3"]
//                 })
//             }, 1000);
//         })
//     }

//     function calculateTotal(data){
//         return new Promise((resolve)=>{
//             console.log("calculating the total...")
//             setTimeout(() => {
//                 resolve({
//                     user: data.user,
//                     orders: data.orders,
//                     total: 2500
//                 })
//             }, 1000);
//         })
//     }

//     getUser(101)
//     .then((user)=>{
//         console.log("Got user: ", user.name);
//         return getUserOrders(user)
//     })
//     .then((orders)=>{
//         console.log(orders);
//         return calculateTotal(orders)
//     })
//     .then((finalData)=>{
//         // console.log(finalData)
//         console.log("User: ", finalData.user.name);
//         console.log("Total orders", finalData.orders.length);
//         console.log("Total amount: ", finalData.total)
//     })
//     .catch((err)=>{
//         console.log("Error occurred: ", err)
//     })
// }

// 11. Summary
{
  // Synchronous code runs in order, blocking further execution until each task completes.
  // Asynchronous code allows other operations to run while waiting for tasks to finish, improving responsiveness.
  // I/O bound tasks involve waiting for external resources, while CPU bound tasks require intensive computation.
  // Callbacks are functions passed as arguments to handle asynchronous results, but can lead to "callback hell" with nested structures.
  // Promises provide a cleaner way to handle asynchronous operations, allowing chaining with .then() and error handling with .catch().
  // Promise chaining enables sequential execution of asynchronous tasks without deep nesting, improving code readability and maintainability.
}

// Practice Exercises
{
  // Exercise 1: Simple promise
  // create a promise that simulates checking if a student has passed or failed based on thier marks
  //   {
  //     function checkResult(marks) {
  //       return new Promise((resolve, reject) => {
  //         setTimeout(() => {
  //           if (marks > 40) {
  //             resolve("Passed! Congratulations!");
  //           } else {
  //             reject("Failed. Better luck next time.");
  //           }
  //         }, 1000);
  //       });
  //     }
  //     checkResult(99)
  //       .then((message) => {
  //         console.log(message);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // Exercise 2: Promise chaining
  // Create a chain that simulates: Login -> Fetch Profile -> Fetch Posts
  //   {
  //     function Login(username) {
  //       return new Promise((resolve, reject) => {
  //         setTimeout(() => {
  //           console.log("Logged in as", username);
  //           resolve(username);
  //         }, 1000);
  //       });
  //     }
  //     function fetchUserProfile(username) {
  //       return new Promise((resolve, reject) => {
  //         setTimeout(() => {
  //           console.log(`fetching ${username} profile`);
  //           resolve({ username: username, bio: "web developer" });
  //         }, 1000);
  //       });
  //     }
  //     function fetchPosts(profile) {
  //       return new Promise((resolve) => {
  //         setTimeout(() => {
  //           console.log(`fetchinig posts of ${profile.username} `);
  //           resolve({
  //             profile: profile,
  //             posts: ["post1", "post2", "post3"],
  //           });
  //         }, 1000);
  //       });
  //     }
  //     Login("Mohd_dev")
  //       .then((username) => {
  //         return fetchUserProfile(username);
  //       })
  //       .then((profile) => {
  //         return fetchPosts(profile);
  //       })
  //       .then((data) => {
  //         console.log("username: ", data.profile.username);
  //         console.log("posts count: ", data.posts.length);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // Exercise 3: Error handling
  //   {
  //     function randomOperation() {
  //       return new Promise((resolve, reject) => {
  //         setTimeout(() => {
  //           let random = Math.random();
  //           if (random > 0.5) {
  //             resolve("Success! Random value: " + random);
  //           } else {
  //             reject("Failed! Random value: " + random);
  //           }
  //         }, 2000);
  //       });
  //     }
  //     randomOperation()
  //       .then((message) => {
  //         console.log(message);
  //       })
  //       .then(() => {
  //         console.log("done");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
}

// Add-ons
{
  // 1: Using the promises and .then() + .catch()   vertical approach
  // {
  // function saveToDatabase(data) {
  //   return new Promise((resolve, reject) => {
  //     console.log("started saving to database...");
  //     setTimeout(() => {
  //       let dbAvailable = Math.random() > 0.3 ? true : false;
  //       if (dbAvailable) {
  //         resolve(`${data} data saved successfully`);
  //       } else {
  //         reject("Database not  available");
  //       }
  //     }, 1000);
  //   });
  // }
  
  //   // version 1
  //   saveToDatabase("msg1")
  //   .then((resolveMsg) => {
  //     console.log(resolveMsg); // `${data} data saved successfully`
  //     saveToDatabase("msg2")
  //     .then((resolveMsg) => {
  //       console.log(resolveMsg);
  //     })
  //   })
  //   .catch((errMsg) => {
  //     console.log(errMsg)
  //   })

  //   // version 2
  //   // saveToDatabase("msg1")
  //   //   .then((resolveMsg) => {
  //   //     console.log(resolveMsg);
  //   //     // return "hello from big brother"
  //   //   })
  //   //   .then((Msg) => {
  //   //     console.log(Msg);
  //   //   })
  //   //   .catch((rejectMsg) => {
  //   //     console.log(rejectMsg);
  //   //   });

  //   // version 3
  //   // saveToDatabase("msg1")
  //   //   .then((resolveMsg) => {
  //   //     console.log(resolveMsg);
  //   //     return saveToDatabase("msg2");
  //   //   })
  //   //   .then((resolveMsg) => {
  //   //     console.log(resolveMsg);
  //   //     return saveToDatabase("msg3");
  //   //   })
  //   //   .then((resolveMsg) => {
  //   //     console.log(resolveMsg);
  //   //     return saveToDatabase("msg4");
  //   //   })
  //   //   .then((resolveMsg) => {
  //   //     console.log(resolveMsg);
  //   //   })
  //   //   .catch((rejectMsg) => {
  //   //     console.log(rejectMsg);
  //   //   });
  // }


  // 2. Using the old callback    horizontal approach
  {
    function saveToDatabase(data, callback) {
      console.log("calling database...");
      setTimeout(() => {
        const dbAvailabel = Math.random() > 0.2 ? true : false;
        if (dbAvailabel) {
          console.log(`${data} saved successfully`);
          callback();
        } else {
          console.log(`${data} not saved!`);
        }
      }, 2000);
    }

    
    saveToDatabase("msg1", () => {
      saveToDatabase("msg2", () => {
        saveToDatabase("msg3", () => {
          saveToDatabase("msg4", () => {
            console.log("all data send successfully! 👍");
          });
        });
      });
    });
  }
  // 3. Color change callback hell
  // {
  //   function changeColor(color, msg, callback) {
  //     const signalBox = document.querySelector("#signalBox");
  //     const h4 = document.querySelector("h4");
  //     setTimeout(() => {
  //       signalBox.style.backgroundColor = color;
  //       h4.innerHTML = msg;
  //       callback();
  //     }, 1500);
  //   }
  //   changeColor("red", "Stop", () => {
  //     changeColor("yellow", "Ready", () => {
  //       changeColor("green", "Go", () => {
  //         changeColor("red", "Stop", () => {
  //           changeColor("yellow", "Ready", () => {
  //             changeColor("green", "Go", () => {
  //               console.log("all done successfully!");
  //             });
  //           });
  //         });
  //       });
  //     });
  //   });
  // }
  // 4. Color change promises version
  // {
  //   function changeColor(color, msg) {
  //     return new Promise((resolve) => {
  //       const signalBox = document.querySelector("#signalBox");
  //       const h4 = document.querySelector("h4");
  //       setTimeout(() => {
  //         signalBox.style.backgroundColor = color;
  //         h4.innerText = msg;
  //         resolve();
  //       }, 1500);
  //     });
  //   }
  //   changeColor("red", "Stop")
  //     .then(() => {
  //       return changeColor("yellow", "Ready");
  //     })
  //     .then(() => {
  //       return changeColor("green", "Go");
  //     })
  //     .then(() => {
  //       return changeColor("red", "Stop");
  //     })
  //     .then(() => {
  //       return changeColor("yellow", "Ready");
  //     })
  //     .then(() => {
  //       return changeColor("green", "Go");
  //     })
  //     .then(() => {
  //       console.log("all done successfully!");
  //     });
  // }
}

// extras : Async/Await
// {
//   function changeColorPromise(color, delay) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         document.body.style.backgroundColor = color;
//         console.log("changed to", color);
//         resolve();
//       }, delay);
//     });
//   }

//   async function changeColors() {
//     await changeColorPromise("red", 1000);
//     await changeColorPromise("orange", 1000);
//     await changeColorPromise("blue", 1000);
//     await changeColorPromise("black", 1000);
//   }

//   changeColors();
// }
