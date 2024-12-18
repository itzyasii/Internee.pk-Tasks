const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const passport = require("passport");

dotenv.config();
connectDB();
const app = express();
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

app.use("api/users", userRoutes);

module.exports = app;
