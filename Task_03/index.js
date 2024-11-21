const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const passport = require("passport");
const bodyParser = require("body-parser");
const session = require("express-session");
require("./stategies/local-strategy");
const cors = require("cors");

const app = express();
app.use(cors());
dotenv.config();
connectDB();

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(
  session({
    secret: "mainSecretKeyForPassport",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(userRoutes);
app.post("/api/auth", passport.authenticate("local"), (request, response) => {
  response.sendStatus(200);
});

app.use("/api/auth/status", (request, response) => {
  console.log("inside /auth/status endpoint");

//   console.log(request.user);
  if (request.user) {
    const { _id, name, username, email } = request.user;
    return response.status(200).json({
      success: true,
      user: { _id, name, username, email },
    });
  } else {
    return response.sendStatus(401); 
  }
});

app.listen(PORT, () => {
  console.log(`The Server is running on port: ${PORT}`);
});
