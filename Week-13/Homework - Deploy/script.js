import express from "express";
import { v4 as uuid } from "uuid";
import nodemon from "nodemon";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
})