// Example 1: Simple Number Check
{
  function checkNumber(num) {
    return new Promise((resolve, reject) => {
      console.log("promise called...");
      setTimeout(() => {
        if (num > 10) {
          resolve(`Success! ${num} is greater than 10`);
        } else {
          reject(`Error! ${num} is not greater than 10`);
        }
      }, 1000);
    });
  }

  // Consuming with .then() and .catch()
  //   checkNumber(2)
  //     .then((resolveMsg) => {
  //       console.log(resolveMsg);
  //     })
  //     .catch((rejectMsg) => {
  //       console.log(rejectMsg);
  //     });

  // Consuming with async/await

  async function testNumber() {
    try {
      const resolveMsg = await checkNumber(12);
      console.log(resolveMsg);
    } catch (rejectMsg) {
      console.log(rejectMsg);
    }
  }

  testNumber();
}

// Example 2: User authentication simulation
{
    // Creating a promise
    function authenticateUser(username, password){
        return 
    }
}
