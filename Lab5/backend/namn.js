require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { cocktails } = require("./data");

const app = express();

app.use(helmet());
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send(JSON.stringify(cocktails[0]));
});

app.listen(process.env.MY_PORT, () => {
  console.log(
    `Example app listening at http://localhost:${process.env.MY_PORT}`
  );
});
