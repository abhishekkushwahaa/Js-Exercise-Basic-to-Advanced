// Use asynchronous JavaScript with Promises.

function asyncOperation1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Operation 1 completed");
    }, 1000);
  });
}

function asyncOperation2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Operation 2 completed");
    }, 1500);
  });
}

asyncOperation1()
  .then((result1) => {
    console.log(result1); // Output: Operation 1 completed
    return asyncOperation2();
  })
  .then((result2) => {
    console.log(result2); // Output: Operation 2 completed
  })
  .catch((error) => {
    console.error("Error:", error); // Handle errors here
  });


// Promise.all is used to run multiple promises in parallel. It takes an array of promises as an input and returns a single promise.

// const promise1 = fetch("https://api.example.com/resource1");
// const promise2 = fetch("https://api.example.com/resource2");

// Promise.all([promise1, promise2])
//   .then((responses) => {
//     // Handle both responses here
//     const [response1, response2] = responses;
//     console.log("Response 1:", response1);
//     console.log("Response 2:", response2);
//   })
//   .catch((error) => {
//     console.error("Error:", error); // Handle errors here
//   });
