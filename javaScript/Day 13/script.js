// let a = 25
// let b = 35

// console.log(a)
// console.log(b)

// // some heavy task
// // I/O
// // Db calls
// // Bakend calls

// // time consuming task
// // Async
// setTimeout(()=>{
//     console.log("maggie task...")
// }, 4000)

// setTimeout(()=>{
//     console.log("washing machine task...")
// }, 4000)

// // go to market
// console.log("hello")
// console.log("remaing tasks")

// let a = 25;
// console.log(a);

// some heavy task
// Db calls
// time consuming task
// Async function

// function CallDB(printUsers) {
//   setTimeout(function () {
//     console.log("Db calling...");
//     console.log("db call complete");
//     printUsers();
//   }, 4000);
// }

// function printUsers() {
//   console.log("print users after db call");
// }

// CallDB(printUsers);

// // remaining task
// console.log("remaing tasks");
// console.log("end of script");

// {const signalBox = document.querySelector("#signalBox");
// const h4 = document.querySelector("h4");

// // Async function
// function signalChange(printMsg) {
//   setTimeout(() => {
//     signalBox.style.backgroundColor = "green";
//     printMsg()
//   }, 3000);
// }

// // Regular function
// function printMsg() {
//   h4.innerHTML = "You can go";
// }

// // Asunc Function
// signalChange(printMsg);

// // Regular function
// // printMsg();
// }

// const signalBox = document.querySelector("#signalBox");
// const h4 = document.querySelector("h4");

// signalBox.style.backgroundColor = "red";
// h4.innerHTML = "Stop";

// function signalChange(){
//     setTimeout(()=>{
//         signalBox.style.backgroundColor = "green";
//         h4.innerHTML = "You can go";
//     }, 3000)
// }

// Register -> Send Email -> Update Database -> Send Welcome SMS
// {
//   function registerUser(username, VerifyCallback) {
//     setTimeout(() => {
//       console.log("User registered", username);
//       VerifyCallback();
//     }, 1000);
//   }

//   function sendVerificationEmail(updateDBcallback) {
//     //     updateDBcallback =  ()=>{
//     //     updateDatabase();
//     //   }
//     setTimeout(() => {
//       console.log("Verification email sent");
//       updateDBcallback();
//     }, 1000);
//   }

//   function updateDatabase(smsCallback) {
//     setTimeout(() => {
//       console.log("Database updated");
//       smsCallback();
//     }, 2000);
//   }

//   function sendWelcomeSMS(msgCallback) {
//     setTimeout(() => {
//       console.log("welcome sms send");
//       msgCallback();
//     }, 2000);
//   }

//   registerUser("Mohd", () => {
//     sendVerificationEmail(() => {
//       updateDatabase(() => {
//         sendWelcomeSMS(() => {
//           console.log("Registration complete");
//         });
//       });
//     });
//   });
// }

// Problem: Save data only if success else not, callback hell
// {
//   function saveData(data, success, failure) {
//     let isSave = Math.floor(Math.random() * 2) // 0 or 1
//     // let isSave = Math.random() < 0.45 ? 0 : 1;

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

// {
//   function saveToDB(data, okCallback) {
//     let internetSpeed = Math.ceil(Math.random() * 10); // 1-10 random number

//     if (internetSpeed > 4) {
//       console.log("data saved", data);
//       okCallback();
//     } else {
//       console.log("week connection, data not saved");
//     }
//   }

//   saveToDB("msg1", () => {
//     saveToDB("msg2", () => {
//       saveToDB("msg3", () => {
//         saveToDB("msg4");
//       });
//     });
//   });
// }

// what is a promise in javaScript

// {
//     pending: false
//     fulfilled: false
//     rejected: true
// }

// creating a promise (syntax)
{
  let myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation here
    let result = true;

    if (result) {
      resolve("Operation successfull");
    } else {
      reject("Operation failed");
    }
  });
}

// // Basic example
// {
//   let internetSpeed = false;

//   let downloadFile = new Promise((resolve, reject) => {
//     console.log("Download start");

//     setTimeout(() => {
//       if (internetSpeed) {
//         resolve("File downloaded");
//       } else {
//         reject("File not downloaded");
//       }
//     }, 4000);
//   });

//   console.log(downloadFile);
// }

// {
//   function saveToDatabase(data) {
//     return new Promise((resolve, reject) => {
//       console.log("started saving to database...");

//       setTimeout(() => {
//         let dbAvailable = false;

//         if (dbAvailable) {
//           resolve(console.log("data saved successfully"));
//         } else {
//           reject("Database not  available");
//         }
//       }, 3000);
//     });
//   }

//   let savePromise = saveToDatabase();
//   console.log(savePromise);
// }

// promise returns an objects that shows eventual complition or failure of an asynchronous operation. It has three states: 1.pending 2. fullfilled 3. Rejected

// consuming promises:
// .then() method
// .catch() method
{
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let sendORNot = Math.floor(Math.random() * 2);

      if (sendORNot) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });

  console.log(myPromise);

  myPromise
    .then(() => {
      console.log("messsage send successfully");
    })
    .catch(() => {
      console.log("messsage not send ");
    });
}
