const express = require("express");
const env = require("dotenv").config();
const ConnectDb = require("./db/ConnectDb");


const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);
const PORT = 3000;
ConnectDb();



app.listen(PORT, () => {
  console.log(`Server is Runing ${PORT}`);
});
