require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { cocktails } = require("./data");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("combined"));
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send(JSON.stringify(cocktails[0]));
// });

app.listen(process.env.MY_PORT, () => {
  console.log(
    `Example app listening at http://localhost:${process.env.MY_PORT}`
  );
});

mongoose.connect(process.env.MY_MONGO, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("DB connected.");
});

const userRoutes = require("./controllers/user.controller");
app.use("/users", userRoutes);
const cocktailRoutes = require("./controllers/cocktail.controller");
app.use("/cocktails", cocktailRoutes);

exports.app = app;
