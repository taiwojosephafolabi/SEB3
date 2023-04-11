'use strict';

import { createPool } from "mysql2";


export const poolConnectionRecordLabel = createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "Adidas3501!",
  database: "week_16_homework"
});

//https://medium.com/dscjssstu/pooling-connections-in-node-js-mysql-9685d5c03c30
poolConnectionRecordLabel.getConnection((err, connection) => {
  if(err)
  throw err;
  console.log('database connected successfully');
  connection.release();
});
