'use strict';

import express from 'express';
import { v4 as uuid } from 'uuid';
import bodyParser from 'body-parser';
import { fileURLToPath } from "url";
import path from "path";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join("C:/Users/Joseph/Projects/SEB3/Week-13/Fetch with Axios")));

app.listen(4000, () => {
  console.log("Express is running on port 4000");
});
