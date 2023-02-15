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
      resolve("grey");
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
    const favColour = await favouriteColour(response);
    console.log(favColour);
    // const favNumber = await favouritenumber(response);
    // console.log(favNumber)
  } catch (err) {
    console.log(err)
  }
};

askFavColour()

// Function 2
class myTrainers {
  constructor(brandName, modelName, size, colourway, numTrainers) {
    this.brandName = brandName;
    this.modelName = modelName;
    this.size = size;
    this.colourway = colourway;
    this.numTrainers = numTrainers
  }
}

const josephTrainer1 = new myTrainers("Yeezy", "350", [8.5, 8], ["Ash Pearl", "Sand Taupe"], 2);
const josephTrainer2 = new myTrainers("Jordan", ["4", "11"], [8.5, 8], ["Retro SE 95 Neon",  "Cool Grey"], 2);

function showMyTrainers(personTrainer) {
  setTimeout(() => {
    console.log("Loading list of trainers...");
  },1000);
  setTimeout(() => {
  console.log(personTrainer);
},5000);
}

function user2(userName) {
  return new Promise((resolve, reject) => {
    console.log("User: " + userName)
    if (userName === "Joseph") {
      resolve(showMyTrainers());
    } else {
      reject ("We can only talk to Joseph")
    }
  })
}
// showMyTrainers(josephTrainer1); 
// showMyTrainers(josephTrainer2);

async function trainersRequest() {
  try {
    const response = await user2("Joseph");
    console.log("Response Received");
    const trainersList = await showMyTrainers(response);
    console.log(trainersList);
  } catch (err) {
    console.log(err)
  }
};

trainersRequest();
