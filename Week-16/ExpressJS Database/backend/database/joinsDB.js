'use strict';
import { createPool } from "mysql2";
// import * as dotenv from "dotenv";

// dotenv.config();

// const poolConnection =  createPool({
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
//   connectionLimit: 12
// });

export const poolConnection =  createPool({
  host: "localhost",
  user: "root",
  password: "Adidas3501!",
  database: "week_16_joins",
  connectionLimit: 12
});


poolConnection.query("select * from customers", (err, result) => {
  if(err) {
    console.log("This is the error: ", err);
  }
  console.log("CUSTOMERS TABLE RESULT: ", result);
});

// module.exports = poolConnection;