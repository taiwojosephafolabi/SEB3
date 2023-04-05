"use strict";

import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
// import { poolConnection } from "./database/joinsDB";
import { createPool } from "mysql2";

const app = express();
app.use(bodyParser.json());
dotenv.config();

const poolConnection = createPool({
  host: "localhost",
  user: "root",
  password: "Adidas3501!",
  database: "week_16_joins",
  connectionLimit: 100,
});

// app.get('/customers', async (req, res) => {
//   await poolConnection.query("SELECT * FROM customers", (err, result) => {
//     if(err) {
//       console.log("This is the error: ", err);
//     }
//     res.send(result);
//   })
// });

app.get("/customers", (req, res) => {
  poolConnection.query("SELECT * FROM customers", async (err, result) => {
    if (err) {
      throw new Error("ERROR: " + err.message);
    }
    await res.send(result);
  });
});

// WHERE clause
app.get("/customers/joseph", (req, res) => {
  poolConnection.query("SELECT * FROM customers WHERE customer_name = 'Joseph'", async (err, result) => {
    if (err) {
      throw new Error("ERROR: " + err.message);
    }
    await res.send(result);
  });
});

app.get("/orders", (req, res) => {
  poolConnection.query("SELECT * FROM orders", async (err, result) => {
    if (err) {
      console.log("This is the error: ", err);
    }
    await res.send(result);
  });
});

app.get("/delivery", (req, res) => {
  poolConnection.query("SELECT * FROM delivery", async (err, result) => {
    if (err) {
      console.log("This is the error: ", err);
    }
    await res.send(result);
  });
});

//JOINS
app.get("/customers/orders", (req, res) => {
  poolConnection.query(
    "SELECT Customers.customer_name, Orders.order_name FROM Customers INNER JOIN Orders ON Customers.id = Orders.customer_id",
    async (err, result) => {
      if (err) {
        console.log("This is the error: ", err);
      }
      await res.send(result);
    }
  );
});

app.get("/customers/orders/delivery", (req, res) => {
  poolConnection.query(
    "SELECT Customers.customer_name, Orders.order_name, Delivery.order_delivery_day FROM Customers INNER JOIN Orders ON Customers.id = Orders.customer_id INNER JOIN Delivery ON Customers.id = Delivery.customer_id",
    async (err, result) => {
      if (err) {
        console.log("This is the error: ", err);
      }
      await res.send(result);
    }
  );
});

// INSERT INTO
app.post("/delivery/input", (req, res) => {
  poolConnection.query(
    "INSERT INTO Delivery(delivery_id, order_id, customer_id , order_delivery_day) VALUES(5, 4, 7, 'Saturday 23rd November 2021')",
    async (err, result) => {
      if (err) {
        console.log("This is the error: ", err);
      }
      await res.send("New Delivery Added!");
    }
  );
});

// req.params.id
app.post('/customers/update/:id', (req, res) => {
  const userId = req.params.id;
  const query = `UPDATE customers SET customer_mobile  = '62372927' WHERE id = ${ userId }`;
  poolConnection.query(query, async (err, result) => {
    if (err) {
      console.log("This is the error: ", err);
    }
    await res.send(`User ${ userId } updated !`);
  });
});

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
