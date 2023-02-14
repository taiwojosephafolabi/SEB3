// Promise 
function makeRequest(location) {
  return new Promise((resolve,reject) => {
    console.log("Making request to " + location)
    if (location === "Google") {
      resolve("Google says hi")
    } else {
      reject ("We can only talk to Google")
    }
  })
}

function processRequest(response) {
  return new Promise((resolve,reject) => {
    console.log("Processing response")
    resolve("Extra Information + "+ response)
  })
};

// makeRequest("Facebook").then(response => {
//   console.log("Response Received");
//   return processRequest(response)
// }).then(processedResponse => {
//   console.log(processedResponse)
// }).catch(err => {
//   console.log(err)
// })

//Async
async function doWork() {
  let response = await makeRequest("Google");
  console.log("Response Received");
  let processedResponse = await processRequest(response);
  console.log(processedResponse)
} 

// doWork()

// With try/catch for error
async function doWork2() {
  try {
    const response = await makeRequest("Facebook");
    console.log("Response Received");
    const processedResponse = await processRequest(response);
    console.log(processedResponse)
  } catch (err) {
    console.log(err)
  }
}

// doWork2()


// Function 1
function user(userName) {
  return new Promise((resolve, reject) => {
    console.log("User: " + userName)
    if (userName === "Joseph") {
      resolve("grey")
    } else {
      reject ("We can only talk to Joseph")
    }
  })
}

function favouriteColour(colour) {
  return new Promise((resolve,reject) => {
    console.log("Processing response")
    resolve("Your favourite colour is "+ colour)
  })
};

async function askFavColour() {
  try {
    const response = await user("Joseph");
    console.log("Response Received");
    const processedResponse = await favouriteColour(response);
    console.log(processedResponse)
  } catch (err) {
    console.log(err)
  }
};

askFavColour()