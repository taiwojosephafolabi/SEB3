import express from "express";
import bodyParser from "body-parser";
import { v4 as uuid } from "uuid";
//
const app = express();
app.use(bodyParser.json());

app.listen(1000, () => {
  console.log("server listening on port")
});

// Get

const bootsSkincareData = [
  {
    name: "cleanser",
    brand: "cerave",
    price: 10
  },
  {
    name: "moisturiser",
    brand: "cerave",
    price: 8
  },
  {
    name: "spf",
    brand: "cerave",
    price: 13
  }
];

app.get("/boots/cerave", (request, response) =>{
  response.send(bootsSkincareData)
});


// Post

let bootsInventory = [];

app.post("/boots/product", (request, response) => {
  const {id} = request.body;
  const data = request.body;
  bootsInventory.push({...data, id: uuid()});
  response.send("New product added successfully!")
  console.log(bootsInventory)
});


// Delete

app.delete("/boots/oos", (request, response) => {
  const { id } = request.params;
  
})
