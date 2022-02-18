const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(cookieParser())
  .use(cors());

const login = require("./modules/login/route");
const users = require("./modules/users/route");

app.use("/login", login);
app.use("/users", users);

module.exports = app;
